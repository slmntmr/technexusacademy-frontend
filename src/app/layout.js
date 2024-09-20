// Footer bileşeni, sayfanın en altında gösterilecek olan genel alt bilgi (footer) bileşenidir.
import Footer from "@/components/common/footer/footer";

// MainMenubar bileşeni, ana navigasyon menüsünü içerir ve her sayfada en üstte görünür.
import MainMenubar from "@/components/common/header/main-menubar";

// Topbar bileşeni, genellikle en üstteki bilgi çubuğu ya da ek bilgiler için kullanılır.
import Topbar from "@/components/common/header/topbar";

// Projenin yapılandırma ayarlarını içe aktarıyoruz, özellikle proje adını ve açıklamasını alıyoruz.
import { config } from "@/helpers/config";

// Proje içinde kullanılan yazı tipini içe aktarıyoruz (montserrat fontu).
import { montserrat } from "@/helpers/fonts";

// Global stil dosyasını içe aktarıyoruz.
import "@/styles/index.scss";

// metadata objesi, her sayfa için meta bilgilerini içerir (sayfa başlığı ve açıklaması).
export const metadata = {
	title: {
		// Sayfa başlığı şablonu: sayfa adı | proje adı
		template: `%s | ${config.project.name}`,
		// Varsayılan başlık: proje adı
		default: config.project.name,
	},
	// Sayfa açıklaması: projenin açıklaması
	description: config.project.description,
};

// RootLayout bileşeni tüm sayfaları sarar ve ortak bileşenleri içerir.
export default function RootLayout({ children }) {
	return (
		// HTML yapısını tanımlıyoruz, dil olarak "en" (İngilizce) seçilmiş ve montserrat yazı tipi uygulanmış.
		<html lang="en" className={montserrat.variable}>

			{/* <body> içinde suppressHydrationWarning true olarak ayarlanmış, bu SSR ile ilgili uyarıları bastırmak için. */}
			<body suppressHydrationWarning={true}>

				{/* Topbar bileşeni tüm sayfaların en üstünde yer alacak bilgi çubuğunu içerir. */}
				<Topbar />

				{/* MainMenubar bileşeni, ana navigasyon menüsünü içerir ve tüm sayfalarda gösterilir. */}
				<MainMenubar />

				{/* children prop'u, her sayfanın dinamik içeriğini buraya yerleştirir. */}
				{children}

				{/* Footer bileşeni, her sayfanın alt kısmında gösterilecek olan genel footer'dır. */}
				<Footer />
			</body>
		</html>
	);
}
