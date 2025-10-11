import type { Metadata } from "next";
import './styles/styles.css';
import './styles/navbar.css';
import './styles/header.css';
import './styles/footer.css';
import './styles/reservation.css';
import './styles/section.css';

export const metadata: Metadata = {
  title: "Fazza Burger",
  description: "Fazza Burger - Офицальная страница сети бургерного в городе Бухара",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="layout">
        {children}
      </body>
    </html>
  );
};