import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom.css';
import '../styles/responsive.css';
import { useEffect } from 'react';


export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return <Component {...pageProps} />;
}
