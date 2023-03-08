import Footer from '../components/footer';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head />
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
