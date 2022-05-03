import Ig from '../public/images/instagram.svg';
import Fb from '../public/images/facebook.svg';
import Map from '../public/images/map.svg';
import Link from 'next/link'
import Image from 'next/image';

import {Row, Col} from 'react-bootstrap';
import React from 'react';

const Info = (props) => {
    
    return (
            <Col xs="12" md="6" id="contact-grid">
                <Row>
                    <Col xs="6">
                        <h5>Visit</h5>
                        <h6>Oude Beurs 39 – 41,</h6> 
                        <h6>2000 Antwerpen</h6>
                        { !props.hideImgs &&
                         <Link href="https://goo.gl/maps/rXjyfEbAwumDTCdt5" passHref><a  target="_blank"rel="noopener noreferrer"><Image src={Map} alt="visit-map" id="visit-map" width="80%" height="80%"/></a></Link>
                        }
                        
                    </Col>
                    <Col xs="6">
                        <h5>Contact</h5>
                        <h6>T: +32 4 96 86 13 97</h6>
                        <h6>info@arttelex.be</h6>
                        { !props.hideImgs &&
                        <React.Fragment>
                        <Link href="https://www.instagram.com/arttelex/" passHref><a target="_blank"rel="noopener noreferrer" ><Image src={Ig} alt="contact-ig" id="contact-ig" width="80%" height="80%"/></a></Link>
                        <Link href="https://www.facebook.com/ArtTelex-106786851292071" passHref><a target="_blank"rel="noopener noreferrer"><Image src={Fb} alt="contact-fb" id="contact-fb" width="80%" height="80%"/></a></Link>
                        </React.Fragment>
                        } 
                    </Col>
                </Row>
            </Col>
        );
}
export default Info;