import '../styles/_global.scss';
import "../styles/elements/expositions.scss";
import "../styles/footer.scss";
import '../styles/header.scss';
import "../styles/main.scss";
import { SSRProvider } from 'react-bootstrap';

function MyApp({ Component, pageProps }) {
  return (
  <SSRProvider>
    <Component {...pageProps} />
  </SSRProvider>
  )
}

export default MyApp
