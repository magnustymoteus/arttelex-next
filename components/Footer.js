import Info from './Info';
import Logo from '../public/images/logo.svg';
import Image from 'next/image';

import {Container, Row, Col} from 'react-bootstrap';
const Footer = () => {
    return (
        <footer className="text-white">
    <Container fluid>
        <Row>
            <Col xs="12" md="6">
               <Image src={Logo} alt="footer-logo" id="footer-logo"/>
            </Col>
           <Info/>
           <Col xs="12" id="credit">
                <h6>&copy; ArtTelex - Website by Patryk Pilichowski</h6>
            </Col>
        </Row>
    </Container>
        </footer>
    );
}

export default Footer;