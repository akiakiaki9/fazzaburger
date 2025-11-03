import type { Metadata } from "next";
import './styles/styles.css';
import './styles/navbar.css';
import './styles/navbar1.css';
import './styles/header.css';
import './styles/footer.css';
import './styles/reservation.css';
import './styles/section.css';
import './styles/section1.css';
import './styles/specials.css';
import './styles/contacts.css';
import './styles/pagename.css';

export const metadata: Metadata = {
  title: "Fazza Burger",
  description: "Fazza Burger - Офицальная страница сети бургерного в городе Бухара",
  icons: {
    icon: '/images/icon.jpg',
    shortcut: '/images/icon.jpg',
    apple: '/images/icon.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />  
      </head>
      <body className="layout">
        {children}
      </body>
    </html>
  );
};