// React bileşeni içe aktarılıyor, bu bileşen Footer (alt bilgi) için kullanılacak.
import React from "react";

// React-Bootstrap bileşenleri (Col, Container, Row) içe aktarılıyor, sayfanın düzenini oluşturmak için.
import { Col, Container, Row } from "react-bootstrap";

// Logo bileşeni içe aktarılıyor, bu Footer'da kullanılacak olan logo için.
import Logo from "../header/logo";

// Footer'a özel stil dosyası (footer.scss) içe aktarılıyor.
import "./footer.scss";

// Proje yapılandırma dosyasından (config) gerekli ayarları alıyoruz, özellikle proje açıklaması için.
import { config } from "@/helpers/config";

// Ana menü bileşeni (MainMenu), header'da kullanılan menünün aynısı olarak burada da gösterilecek.
import MainMenu from "../header/main-menu";

// Sosyal medya menüsü (SocialMenu), sosyal medya linklerini gösterecek olan bileşen.
import SocialMenu from "./social-menu";

// İletişim menüsü (ContactMenu), iletişim bilgilerini gösterecek olan bileşen.
import ContactMenu from "./contact-menu";

// Footer bileşeni, sayfanın alt kısmında görünür.
const Footer = () => {
	return (
		// <footer> HTML elementi, alt bilgi kısmını belirtir.
		<footer>
			{/* Bootstrap'in Container bileşeni ile sayfa genişliğine göre düzen sağlıyoruz. */}
			<Container>
				{/* Row bileşeni ile bir satır oluşturuyoruz, "g-4" sınıfı ile sütunlar arasında boşluk sağlanıyor. */}
				<Row className="g-4">

					{/* Footer'da ilk sütun: Proje logosu ve açıklaması */}
					<Col xl={12}>
						{/* Logo bileşeni, teması "light" olarak belirlenmiş. */}
						<Logo theme="light" />

						{/* Proje açıklamasını config'den alıyoruz ve paragraf olarak görüntülüyoruz. */}
						<p className="mt-3">{config.project.description}</p>
					</Col>

					{/* Footer'da ikinci sütun: Ana menü linkleri */}
					<Col xs={6} lg>
						{/* Başlık: Links */}
						<h3>Links</h3>
						{/* MainMenu bileşeni ile ana menü öğelerini görüntülüyoruz. */}
						<MainMenu />
					</Col>

					{/* Footer'da üçüncü sütun: Sosyal medya linkleri */}
					<Col xs={6} lg>
						{/* Başlık: Social */}
						<h3>Social</h3>
                        {/* SocialMenu bileşeni ile sosyal medya ikonlarını ve linklerini görüntülüyoruz. */}
                        <SocialMenu/>
					</Col>

					{/* Footer'da dördüncü sütun: İletişim bilgileri */}
					<Col lg>
                        {/* Başlık: Contact */}
                        <h3>Contact</h3>
                        {/* ContactMenu bileşeni ile iletişim bilgilerini görüntülüyoruz. */}
                        <ContactMenu/>
                    </Col>
				</Row>
			</Container>
		</footer>
	);
};

// Footer bileşenini dışa aktarıyoruz, böylece diğer sayfalarda da kullanılabilir.
export default Footer;
