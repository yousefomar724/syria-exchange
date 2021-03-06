import React from "react";
import useSWR from "swr";
import { useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from 'react-bootstrap'
import CurrencyConverter from "./currency-converter/CurrencyConverter";
import IMGFig1 from "./img-fig/IMGFig1";
import IMGFig2 from "./img-fig/IMGFig2";
/* import MostWatched from "./most-watched/MostWatched"; */
import InterCoinCER from "./turkish-currency-exchange-rate/InterCoinCER";
import InterGoldPrices from "./turkish-gold-prices/InterGoldPrices";


const CURRENCY_ABBRE_TO_NAME = {
  "USD": ["USA Dollar", "دولار امريكي"],
  "AED": ["Emirati Dirham", "درهم إماراتي"],
  "AUD": [ "Australian Dollar", "دولاراسترالي"],
  "BHD": [ "Bahraini Dinar", "دينار بحريني"],
  "BRL": [ "Brazilian Real", "ريال برازيلي"],
  "CAD": [ "Canadian Dollar", "دولار كندي"],
  "CHF": [ "Swiss Franc", "فرنك سويسري"],
  "CNY": [ "Chinese Renminbi", "يوان صيني"],
  "COP": [ "Colombian Pesos", "بيزو كولومبي"],
  "DJF": [ "Djibouti Franc", "فرنك جيبوتي"],
  "DKK": [ "Danish Krone", "كرونة دنماركية"],
  "DZD": [ "Algerian Dinar", "دينار جزائري"],
  "EGP": [ "Egyptian Pound", "جنيه مصري"],
  "EUR": ["Euro", "يورو"],
  "GBP": [ "Pound Sterling", "جنيه إسترليني"],
  "IDR": [ "Indonesian Rupiah", "روبية إندونيسية"],
  "IQD": [ "Iraqi Dinar", "دينار عراقي "],
  "IRR": [ "Iranian Rial", "ريال إيراني"],
  "JOD": ["Jordanian Dinar", "دينار أردني"],
  "JPY": [ "Japanese Yen", "ين ياباني"],
  "KWD": ["Kuwaiti Dinar", "دينار كويتي"],
  "LBP": [ "Lebanese Pound", "ليرة لبنانية"],
  "LYD": [ "Libyan Dinar", "دينار ليبي"],
  "MAD": [ "Moroccon Dirham", "درهم مغربي"],
  "MRU": [ "Mauritanian Ouguiya", "أوقية موريتانية"],
  "MYR": [ "Malaysian Ringgit", "رينغيت ماليزي"],
  "NOK": [ "Norwegian Krone", "كرونة نرويجية"],
  "NZD": [ "New Zealand Dollar", "دولار نيوزيلندي"],
  "OMR": ["Omani Riyal", "ريال عماني"],
  "QAR": [ "Qatari Riyal", "ريال قطري"],
  "RUB": [ "Russian Ruble", "روبل روسي"],
  "SAR": ["Saudi Riyal", "ريال سعودي"],
  "SDG": [ "Sudanese Pound", "جنيه سوداني"],
  "SEK": [ "Swedish Krona", "كرون سويدي"],
  "SGD": [ "Singapore Dollar", "دولار سنغافوري"],
  "SYP": ["Syrian pound", "ليرة سورية"],
  "TND": [ "Tunisian Dinar", "دينار تونسي"],
  "TRY": ["Turkish Lira", "ليرة تركية"],
  "VES": [ "Venezuelan Bolivare", "بوليفار فنزويلي"],
  "XAF": [ "Chad Franc", "فرنك تشاد"],
  "YER": [ "Yemen Rial", "ريال يمني"],
  "ZAR": [ "zuid-afrikaanse rand", "راند أفريقي"],
};

const InternationalCoinPage = () => {
  const { i18n } = useTranslation();

  const { id } = useParams();

  const { data: internationalCoinsData } = useSWR('/international-coins.php');
  // const location = useLocation();
  // const coin = location.state;

  const title = CURRENCY_ABBRE_TO_NAME[id]?.[i18n.dir() === 'rtl' ? 1 : 0]

  const coins = internationalCoinsData?.inter_coins?.filter(item => {
    for (let [key, value] of Object.entries(item)) {
      if (key === id) return true;
    }
    return false;
  }).map(item => {
    for (let [key, value] of Object.entries(item)) {
      return value;
    }
  })?.[0];

  // if (!title || !coins) return null;

  return (
    <Container className='mt-4' as='main'>
      <Row className='justify-content-lg-center justify-content-xl-between'>
        <Col lg={9} xl={8} >
          <InterCoinCER title={title} items={coins} lastUpdated={internationalCoinsData?.last_update} />
          <CurrencyConverter sectionClass="cer mt-5" />
          <InterGoldPrices title={title} abbriviation={id} />
          <IMGFig2 sectionClass="IMGFig2Toast " />
        </Col>

        <Col lg={6} xl={4}>
          <IMGFig1 sectionClass="m-t-15 figureIMG" />
          {/* <MostWatched title="اخر الأخبار" color="#f7991e" sectionClass="mt-5" /> */}
        </Col>
      </Row>
    </Container>
  );
};

export default InternationalCoinPage;
