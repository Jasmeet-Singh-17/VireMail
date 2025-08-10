// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom.css';
import '../styles/responsive.css';
import { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return <Component {...pageProps} />;
}
