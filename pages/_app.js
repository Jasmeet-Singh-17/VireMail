// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // ✅ Only runs on client side
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return <Component {...pageProps} />;
}
