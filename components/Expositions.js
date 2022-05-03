import Slider from "react-slick";

import {Container} from 'react-bootstrap';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from 'next/image';
import Link from 'next/link';


const ExpositionsUpcoming = (props) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      const upcomingItems = [];
      for(let i=1;i<=props.amount;i++) {
        let upcomingKey = "upcoming-"+i;
        upcomingItems.push(
          <Container key={upcomingKey}>
          <Link href="/" passHref>
            <a>
            <Image src={(props.data[i-1].image)?`/images/${props.data[i-1].image}`:`https://via.placeholder.com/300x450/cccccc/808080/?text=Exposition Foto ${i}`} alt={"upcoming-foto"+i} width="300px" height="450px"/>
            </a>
          </Link>
          <h6>{(props.data[i-1].start && props.data[i-1].end)?`${props.data[i-1].start} — ${props.data[i-1].end}`:"Wed 00 April — Thu 00 April"}</h6>
          <h3>{(props.data[i-1].title)?props.data[i-1].title:`Exposition ${i}`}</h3>
          </Container>
         );
      }
    return (
    <div id="upcoming">
        <Slider {...settings}>
     {upcomingItems}
    </Slider>
    </div>
    );
}
export default ExpositionsUpcoming;