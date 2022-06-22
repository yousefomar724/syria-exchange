import {Container, Row, Col} from 'react-bootstrap'
import useSWR from 'swr'
import HeaderCER from "./currency-exchange-rate/HeaderCER";
import CentralBank from "./central-bank/CentralBank";
import InternationalCoins from "./international-coins/InternationalCoins";
import CurrencyConverter from "./currency-converter/CurrencyConverter";
import GoldPrices from "./gold-prices/GoldPrices";
import IMGFig1 from "./img-fig/IMGFig1";
import SyriaNews from "./syria-news/SyriaNews";
import IMGFig2 from "./img-fig/IMGFig2";

const Home = ({ data }) => {
  
  return (
    <Container className='mt-4' as='main'>
      <Row className='justify-content-lg-center justify-content-xl-between'>
        <Col lg={9} xl={8}  >
          <HeaderCER coins={data.cityCoinsData} />
          <CentralBank centralBankData={data.centralBankData} />
          <CurrencyConverter sectionClass="cer mt-5" coins={data.internationalCoinsData}/>
          <GoldPrices prices={data.internationalGoldData}/>
          <SyriaNews posts={data.posts} />
          <IMGFig2 sectionClass="IMGFig2Toast " ads={data.adsBanners} />
        </Col>

        <Col lg={6} xl={4}>
          <InternationalCoins sectionClass="InternationalCoins" coins={data.internationalCoinsData}/>
          <IMGFig1 sectionClass="m-t-15 figureIMG" ads={data.adsBanners} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
