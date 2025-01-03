import Providers  from './components/Providers'
import './globals.css'
import './index.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
          <Providers>
              {children}
        </Providers>
      </body>
    </html>
  );
}