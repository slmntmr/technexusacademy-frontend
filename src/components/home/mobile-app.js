// React bileşeni oluşturmak için React kütüphanesini içe aktarıyoruz.
import React from "react";

// React Bootstrap'ten Col (sütun), Container (kapsayıcı) ve Row (satır) bileşenlerini içe aktarıyoruz.
import { Col, Container, Row } from "react-bootstrap";

// MobileApp bileşeni için stil dosyasını içe aktarıyoruz.
import "./mobile-app.scss";

// MobileApp fonksiyonel bileşeni tanımlanıyor.
const MobileApp = () => {
	return (
		// mobile-app sınıfına sahip bir div ile bileşenimizi sarıyoruz.
		<div className="mobile-app">

			{/* Container, içeriği sayfa ortasında hizalamak için kullanılır. */}
			<Container>

				{/* Row bileşeni, Bootstrap'in grid yapısında bir satır oluşturur. "g-4" sınıfı ile sütunlar arasındaki boşluk ayarlanıyor. */}
				<Row className="g-4">

					{/* lg (large) ekranlarda 7 sütun genişliğinde, küçük ekranlarda merkezlenmiş şekilde başlık bulunan sütun. */}
					<Col lg={7} className="text-center text-lg-start">

						{/* Başlık */}
						<h2>Are you ready to start your online course</h2>
					</Col>

					{/* lg ekranlarda 5 sütun genişliğinde, küçük ekranlarda merkezlenmiş butonlar bulunan sütun. */}
					<Col lg={5} className="text-center text-lg-end">

						{/* App Store bağlantı butonu, "pi pi-apple" class'ı ile Apple ikonunu kullanıyor. */}
						<a href="#" className="btn btn-outline-secondary me-3">
							<i className="pi pi-apple"></i> App Store
						</a>

						{/* Play Store bağlantı butonu, "pi pi-android" class'ı ile Android ikonunu kullanıyor. */}
						<a href="#" className="btn btn-outline-secondary">
							<i className="pi pi-android"></i> Play Store
						</a>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

// MobileApp bileşeni dışa aktarılıyor, böylece başka dosyalarda kullanılabiliyor.
export default MobileApp;
