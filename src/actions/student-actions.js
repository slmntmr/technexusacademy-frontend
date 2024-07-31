"use server";

import {
	convertFormDataToJSON,
	response,
	transformYupErrors,
	YupValiationError,
} from "@/helpers/form-validation";
import { ChooseLessonSchema, StudentSchema } from "@/helpers/schemas/student-schema";
import { createStudent, deleteStudent, updateStudent } from "@/services/student-service";

import { revalidatePath } from "next/cache";

export const createStudentAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJSON(formData);


		StudentSchema.validateSync(fields, { abortEarly: false });

		
		const res = await createStudent(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message);
		}

		revalidatePath("/dashboard/student");
		return response(true, data?.message);
	} catch (err) {
		if (err instanceof YupValiationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const updateStudentAction = async (prevState, formData) => {
	if (!formData.get("id"))
		throw new Error("Id is missing in update teacher action");

	try {
		const fields = convertFormDataToJSON(formData);

		StudentSchema.validateSync(fields, { abortEarly: false });

		const res = await updateStudent(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message);
		}

		revalidatePath("/dashboard/student");
		revalidatePath(`/dashboard/student/${fields.id}`);
		
		return response(true, data?.message);
	} catch (err) {
		if (err instanceof YupValiationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const deleteStudentAction = async (id) => {
	if (!id) throw new Error("Id is missing");

	const res = await deleteStudent(id);
	const data = await res.json();

	if (!res.ok) {
		return response(false, data?.message);
	}

	revalidatePath("/dashboard/student");
	return response(true, data?.message);
};

export const assignProgramToStudentAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJSON(formData);
	
		ChooseLessonSchema.validateSync(fields, { abortEarly: false });

		const payload = {
			...fields,
			lessonProgramId: JSON.parse(fields.lessonProgramId)
		};


		const res = await assignProgramToTeacher(payload);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message);
		}

		revalidatePath("/dashboard/program");
		return response(true, data?.message);
	} catch (err) {
		if (err instanceof YupValiationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};