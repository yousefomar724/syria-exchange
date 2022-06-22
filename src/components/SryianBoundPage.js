import { Container, Row, Col } from 'react-bootstrap';

import CurrencyConverter from "./currency-converter/CurrencyConverter";
import HeaderCERSyrianPoundPage from "./currency-exchange-rate/HeaderCERSyrianPoundPage";
import IMGFig1 from "./img-fig/IMGFig1";
import IMGFig2 from "./img-fig/IMGFig2";
import InternationalCoins from "./international-coins/InternationalCoins";
import { useLocation } from "react-router-dom";
const SryianBoundPage = ({ kinanDD }) => {
  const location = useLocation();
  const city = location.state;

  return (
    <Container className='mt-4' as='main'>
      <Row className='justify-content-lg-center justify-content-xl-between'>
        <Col lg={9} xl={8}>
          <HeaderCERSyrianPoundPage city={city} show={kinanDD} />
          <CurrencyConverter sectionClass="cer mt-5" />
          <IMGFig2 sectionClass="IMGFig2Toast " />
        </Col>

        <Col lg={6} xl={4}>
          <InternationalCoins sectionClass="InternationalCoins" />
          <IMGFig1 sectionClass="mt-5 figureIMG" />
        </Col>
      </Row>
    </Container>
  );
};

export default SryianBoundPage;
