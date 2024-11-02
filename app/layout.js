import "@/styles/reset.css";
import '@/styles/variables.css';
import '@/styles/global.css'
import Footer from "./components/footer";
import { mainFont } from "./libs/font";
export default function RootLayout({ children }) {
  return (
    <html  className={mainFont.className} lang="en">
      <body className="layout" >
        {children}
        <Footer/>
        <div className="overlay"></div>
      </body>
    </html>
  );
}
