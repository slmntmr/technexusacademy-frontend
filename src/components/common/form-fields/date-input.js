"use client";
import { Calendar } from "primereact/calendar";
import React, { useEffect, useState } from "react";
import { FormGroup, FormLabel } from "react-bootstrap";

const DateInput = ({ error, label, className, value, ...rest }) => {
	const [val, setVal] = useState("");

	useEffect(()=>{
		if(value){
			setVal(new Date(value))
		}
	},[value])

	return (
		<FormGroup className={className} controlId={rest.name}>
			<FormLabel>{label}</FormLabel>
			<div>
				<Calendar
					{...rest}
					value={val}
					onChange={(e) => setVal(e.value)}
					className={`form-control form-control-lg ${error ? "is-invalid": ""} h-100`}
				/>
			</div>
			{error ? (
				<div className="invalid-feedback d-block">{error}</div>
			) : null}
		</FormGroup>
	);
};

export default DateInput;
