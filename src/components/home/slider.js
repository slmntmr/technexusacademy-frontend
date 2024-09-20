// "use client" ifadesi, bu bileşenin Next.js'de istemci tarafında çalışacağını belirtir.
"use client";

// React bileşeni oluşturmak için React kütüphanesini içe aktarıyoruz.
import React from "react";

// Slider ile ilgili stil dosyasını içe aktarıyoruz.
import "./slider.scss";

// React Bootstrap'ten Carousel bileşenini içe aktarıyoruz.
import { Carousel } from "react-bootstrap";

// Slide verilerini içeren JSON dosyasını içe aktarıyoruz.
import slides from "@/helpers/data/slider.json";

// Next.js'in optimize edilmiş Image bileşenini içe aktarıyoruz.
import Image from "next/image";

// Slider fonksiyonel bileşeni oluşturuluyor.
const Slider = () => {
	return (
		// React Bootstrap'in Carousel bileşeni, fade geçiş efektini uygulamak için "fade" özelliği eklenmiş.
		// "main-slider" adında bir CSS sınıfı uygulanmış.
		<Carousel fade className="main-slider">

			{/* slides JSON dosyasındaki her bir öğe için döngü başlatılıyor */}
			{slides.map((item) => (
				// Her Carousel.Item benzersiz bir "key" prop'u alıyor (item.id).
				<Carousel.Item key={item.id}>

					{/* Next.js'in Image bileşeni ile resim gösteriliyor. Resmin kaynağı (/img/slider/) ve boyutları belirtilmiş. */}
					<Image src={`/img/slider/${item.image}`} width={1800} height={800} alt={item.title}/>

					{/* Carousel caption (alt yazı), başlık ve açıklamayı göstermek için kullanılıyor. */}
					<Carousel.Caption>
						{/* Slide başlığı */}
						<h3>{item.title}</h3>

						{/* Slide açıklaması */}
						<p>{item.desc}</p>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

// Slider bileşeni dışa aktarılıyor, böylece başka dosyalarda kullanılabiliyor.
export default Slider;
