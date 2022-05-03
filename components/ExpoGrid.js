import {Container, Row, Col} from 'react-bootstrap/';
import Image from 'next/image';
const getRandomNum = (min, max) => Math.round(Math.random() * (max - min) + min);
const ExpoGrid = (props) => {
    let rows = [[]];
    for(let x=1;x<=3;x++) {
        let archivedItems = [];
    for(let i=1;i<=4;i++) {
        let archivedKey = "archived-foto"+i;
        let randomX = getRandomNum(300,300);
        let randomY = getRandomNum(300,300);
        archivedItems.push(
        <Col key={archivedKey} sm={true} md={true} lg={true} className="archived-col">
          <Image src={`https://via.placeholder.com/${randomX}x${randomY}/cccccc/808080/?text=Archived Foto ${i}`} alt={"archived-foto"+i} width={randomX} height={randomY}/>
        </Col>);
      }
      rows.push(
          <Row key={`archived-row${x}`} className="archived-row">
              {archivedItems}
          </Row>
      );
    }
    return (
        <Container fluid id="section-archived-grid" className="text-center">
            {rows}
        </Container>
    );
}

export default ExpoGrid;