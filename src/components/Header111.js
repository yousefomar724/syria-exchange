// import { Link } from 'react-router-dom'
import ListItem2 from "./ListItem2";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
/* import sysUpdate from "../assets/system-update.png"; */
import logo from "./logo.gif";
/* import Paragraph from "./Paragraph"; */
/* import HeaderRefreshIcon from "./HeaderRefreshIcon"; */
import { Dropdown, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListItemSocial from "./ListItemSocial";
import googleApp from "./footer/google-play-badge.png";
import AppleApp from "./footer/apple-store-badge.png";
import { useTranslation } from "react-i18next";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';

const Header = () => {
  const [showNav, setShowNav] = useState(false)
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [interCoins, setInterCoins] = useState();
  const [cityCoins, setCityCoins] = useState();

  const iter_curr_array = [
    ["7", "USD", "USA Dollar", "دولار امريكي"],
    ["7", "AED", "Emirati Dirham", "درهم إماراتي"],
    ["15", "AUD", "Australian Dollar", "دولاراسترالي"],
    ["11", "BHD", "Bahraini Dinar", "دينار بحريني"],
    ["26", "BRL", "Brazilian Real", "ريال برازيلي"],
    ["12", "CAD", "Canadian Dollar", "دولار كندي"],
    ["13", "CHF", "Swiss Franc", "فرنك سويسري"],
    ["29", "CNY", "Chinese Renminbi", "يوان صيني"],
    ["38", "COP", "Colombian Pesos", "بيزو كولومبي"],
    ["36", "DJF", "Djibouti Franc", "فرنك جيبوتي"],
    ["25", "DKK", "Danish Krone", "كرونة دنماركية"],
    ["20", "DZD", "Algerian Dinar", "دينار جزائري"],
    ["17", "EGP", "Egyptian Pound", "جنيه مصري"],
    ["3", "EUR", "Euro", "يورو"],
    ["14", "GBP", "Pound Sterling", "جنيه إسترليني"],
    ["27", "IDR", "Indonesian Rupiah", "روبية إندونيسية"],
    ["18", "IQD", "Iraqi Dinar", "دينار عراقي "],
    ["30", "IRR", "Iranian Rial", "ريال إيراني"],
    ["8", "JOD", "Jordanian Dinar", "دينار أردني"],
    ["28", "JPY", "Japanese Yen", "ين ياباني"],
    ["6", "KWD", "Kuwaiti Dinar", "دينار كويتي"],
    ["32", "LBP", "Lebanese Pound", "ليرة لبنانية"],
    ["16", "LYD", "Libyan Dinar", "دينار ليبي"],
    ["19", "MAD", "Moroccon Dirham", "درهم مغربي"],
    ["35", "MRU", "Mauritanian Ouguiya", "أوقية موريتانية"],
    ["40", "MYR", "Malaysian Ringgit", "رينغيت ماليزي"],
    ["24", "NOK", "Norwegian Krone", "كرونة نرويجية"],
    ["41", "NZD", "New Zealand Dollar", "دولار نيوزيلندي"],
    ["9", "OMR", "Omani Riyal", "ريال عماني"],
    ["10", "QAR", "Qatari Riyal", "ريال قطري"],
    ["23", "RUB", "Russian Ruble", "روبل روسي"],
    ["5", "SAR", "Saudi Riyal", "ريال سعودي"],
    ["33", "SDG", "Sudanese Pound", "جنيه سوداني"],
    ["22", "SEK", "Swedish Krona", "كرون سويدي"],
    ["39", "SGD", "Singapore Dollar", "دولار سنغافوري"],
    ["2", "SYP", "Syrian pound", "ليرة سورية"],
    ["21", "TND", "Tunisian Dinar", "دينار تونسي"],
    ["4", "TRY", "Turkish Lira", "ليرة تركية"],
    ["31", "VES", "Venezuelan Bolivare", "بوليفار فنزويلي"],
    ["37", "XAF", "Chad Franc", "فرنك تشاد"],
    ["34", "YER", "Yemen Rial", "ريال يمني"],
    ["42", "ZAR", "zuid-afrikaanse rand", "راند أفريقي"],
  ];
  
  useEffect(() => {
    async function getInterCoins() {
      const request = fetch(
        "https://syria-exchange.com/panel/v1/api/international-coins.php"
      );
      const response = await request;
      const parsed = await response.json();
      setInterCoins(parsed);
    }
    getInterCoins();

    async function getCityCoins() {
      const request = fetch(
        "https://syria-exchange.com/panel/v1/api/city-coins.php"
      );
      const response = await request;
      const parsed = await response.json();
      setCityCoins(parsed);
    }
    getCityCoins();
  }, [i18n]);

  // if (interCoins === undefined) {
  //   return null;
  // }
  // if (cityCoins === undefined) {
  //   return null;
  // }

  const city_curr = cityCoins?.city_coins?.map((item) => {
    for (let [key, value] of Object.entries(item)) {
      return [key, value];
    }
    return city_curr;
  });

  const curr1 = interCoins?.inter_coins?.map((item) => {
    for (let [key, value] of Object.entries(item)) {
      return [key, value];
    }
    return curr1;
  });
  /*  const refreshPage = (e) => {
    window.location.reload(false);
  }; */
  let textAlign = i18n.dir() === "ltr" ? "text-left" : "";
  let textAlignName = i18n.dir() === "ltr" ? "headerCurrName " : "";
  return (
    <header id="header">
      <div className="container d-flex header">
        <Navbar expanded={showNav} collapseOnSelect fixed="top" expand="md">
          <Navbar.Toggle onClick={() => setShowNav(!showNav)} aria-controls="responsive-navbar-nav" />
          <div className="logo">
            <img src={logo} alt="Syria Exchange" className="img" />
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="custom-nav">
              <nav className="nav-menu flexy navbar">
                <ul className="headerUlFlex">
                  <Link 
                    to="/"
                    className={location.pathname === "/" ? "HeaderActive" : ""}
                    onClick={() => setShowNav(false)}
                  >
                    {t("description.headerHome")}
                  </Link>
                  {/* <ListItem anchotText={t("description.headerHome")} link="/" /> */}
                  <Link
                    to="/syrian-pound"
                    className={
                      location.pathname === "/syrian-pound" ? "HeaderActive" : ""
                    }
                    onClick={() => setShowNav(false)}
                  >
                    {t("description.headerSYP")}
                  </Link>
                  {/* <ListItem
                    anchotText={t("description.headerSYP")}
                    link="/syrian-bound"
                  /> */}
                  {/* <ListItem
                    anchotText={t("description.headerGold")}
                    link="/gold"
                  /> */}
                  <Link
                    to="/gold"
                    className={location.pathname === "/gold" ? "HeaderActive" : ""}
                    onClick={() => setShowNav(false)}
                  >
                    {t("description.headerGold")}
                  </Link>
                  {/* <ListItem
                    anchotText={t("description.headerTRY")}
                    link="/turkish-pound"
                  /> */}
                  <Link
                    to="/turkish-pound"
                    className={
                      location.pathname === "/turkish-pound" ? "HeaderActive" : ""
                    }
                    onClick={() => setShowNav(false)}
                  >
                    {t("description.headerTRY")}
                  </Link>
                  <li
                  /* className={
                      i18n.dir() === "ltr"
                        ? "paddingLeftNews"
                        : " paddingRightNews"
                    } */
                  >
                    <Dropdown className='coins-dropdown'>
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        className={
                          location.pathname.includes("/international-coin") &&
                          "HeaderActive"
                        }
                      >
                        {t("description.headerIterCoins")}
                      </Dropdown.Toggle>
                      <Dropdown.Menu align="center">
                        {!curr1 ? 
                        <p>loading...</p> 
                        : curr1.map((item, index) => (
                          // <
                            // to={`/international-coin/${curr1[index][0]}`}
                            // to={{
                            //   pathname: `/international-coin/${index}`,
                            //   state: {
                            //     item: curr1[index],
                            //     arName:
                            //       curr1[index][0] === iter_curr_array[index][1]
                            //         ? i18n.dir() === "ltr"
                            //           ? iter_curr_array[index][2]
                            //           : iter_curr_array[index][3]
                            //         : "",
                            //     lastUpdated: interCoins?.last_update
                            //   },
                            // }}
                            // onClick={() => setShowNav(false)}
                            // key={index}
                          // >
                            <Dropdown.Item 
                              onClick={() => setShowNav(false)}
                              key={index}
                              to={`/international-coin/${curr1[index][0]}`}
                              className={`${textAlign}`} as={Link}
                              >
                              <img
                                src={require(`./currIcons/${curr1[index][0]}.png`)}
                                className={`p-l-05 headerCurrIcon ${textAlign}`}
                                alt={curr1[index][0]}
                              />
                              <span className={textAlignName}>
                                {curr1[index][0] === iter_curr_array[index][1]
                                  ? i18n.dir() === "ltr"
                                    ? iter_curr_array[index][2]
                                    : iter_curr_array[index][3]
                                  : ""}
                              </span>
                            </Dropdown.Item>
                          // </>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  {/* <ListItem
                    anchotText={t("description.headerNews")}
                    link="/news"
                  /> */}
                  <Link 
                    to="/news"
                    className={location.pathname === "/news" ? "HeaderActive" : ""}
                    onClick={() => setShowNav(false)}
                  >
                    {t("description.headerNews")}
                  </Link>
                  <li className="headerGetApp">
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        {t("description.headerDownload")}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="https://play.google.com/store/apps/details?id=com.currencyapplication.currencyapplication&hl=ar&gl=US">
                          <img
                            src={googleApp}
                            alt="googleApp"
                            className="headerAppIcon"
                          />
                        </Dropdown.Item>
                        <Dropdown.Item href="https://play.google.com/store/apps/details?id=com.currencyapplication.currencyapplication&hl=ar&gl=US">
                          <img
                            src={AppleApp}
                            alt="Apple App"
                            className="headerAppIcon"
                          />
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </ul>

                <ul className="headerSocialIcons">
                  <ListItemSocial
                    icon={
                      <img
                        src={require("../assets/social-icons/messenger.png")}
                        // style={{ width: "24px" }}
                        alt="messenger.png"
                      />
                    }
                    iconStatus={true}
                    liClass="liIcon"
                    linkSocial="https://m.me/Syriaexchange "
                  />
                  <ListItemSocial
                    icon={
                      <img
                        src={require("../assets/social-icons/telegram.png")}
                        // style={{ width: "24px" }}
                        alt="telegram.png"
                      />
                    }
                    iconStatus={true}
                    liClass="liIcon"
                    linkSocial="https://t.me/Syriaexchange"
                  />
                  <ListItemSocial
                    icon={
                      <img
                        src={require("../assets/social-icons/facebook.png")}
                        // style={{ width: "24px" }}
                        alt="facebook.png"
                      />
                    }
                    iconStatus={true}
                    liClass="liIcon"
                    linkSocial="https://www.facebook.com/Syria.exchange "
                  />
                  <ListItemSocial
                    icon={
                      <img
                        src={require("../assets/social-icons/instagram.png")}
                        // style={{ width: "24px" }}
                        alt="instagram.png"
                      />
                    }
                    iconStatus={true}
                    liClass="liIcon"
                    linkSocial="https://www.instagram.com/syria.exchange/"
                  />
                </ul>
                
                <ul className="languageIcons">
                  <button
                    type="submit"
                    onClick={() => {
                      i18n.changeLanguage("ar");
                      setShowNav(false);
                    }}
                    className={
                      i18n.language === "ar" ? "liLanguageActive" : "liLanguage"
                    }
                  >
                    AR
                  </button>
                  <button
                    type="submit"
                    onClick={() => {
                      i18n.changeLanguage("en");
                      setShowNav(false);
                    }}
                    className={
                      i18n.language === "en" ? "liLanguageActive" : "liLanguage"
                    }
                  >
                    EN
                  </button>
                </ul>
              </nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <hr />
      <Nav>
        <div className="container">
        {city_curr ?
          <nav className="nav-menu2 ">
            <ul className="justify-content-center">
              {/*  <Button
                className={
                  i18n.dir() === "ltr"
                    ? " refreshPaddingEN btn-refresh"
                    : " refreshPaddingAR btn-refresh"
                }
                onClick={refreshPage}
              >
                <HeaderRefreshIcon
                  anchotText={t("description.headerReload")}
                  icon={<img src={sysUpdate} alt="sysUpdateIcon" />}
                  iconStatus={true}
                  liClass="refresh"
                />
              </Button> */}
              {city_curr[0][1].slice(0, 7).map((item) => (
                <ListItem2
                  Lihover={
                    i18n.dir() === "ltr"
                      ? "Lihover UlHeaderBorderleft "
                      : "Lihover"
                  }
                  city_curr_nameToShow={
                    i18n.dir() === "ltr" ? item.curr_en_name : item.curr_ar_name
                  }
                  city_curr_Ename={item.curr_en_name}
                  anchotText={
                    i18n.dir() === "ltr"
                      ? item.curr_en_name.toUpperCase()
                      : item.curr_ar_name
                  }
                  usdClass="usdClass"
                  cityNameClass={
                    i18n.dir() === "ltr"
                      ? "marginDivEN cityNameClass"
                      : "marginDivAR cityNameClass"
                  }
                  divmargin={
                    i18n.dir() === "ltr" ? "marginDivEN" : "marginDivAR"
                  }
                  value={item.curr_sell}
                  value2={item.curr_status}
                  curr_difference={item.curr_difference}
                  icon={
                    item.curr_difference >= 0 ? (
                      <RiArrowUpSLine className="value2arrowUp" />
                    ) : (
                      <RiArrowDownSLine className="value2arrowDown" />
                    )
                  }
                  iconStatus={true}
                  key={item.id}
                />
              ))}
            </ul>
          </nav>
          :
          <div className="d-flex justify-content-center nav-menu2-skeleton">
            <ul className="d-flex align-items-start m-0 p-0">
              {
                Array.from({length: 7}).map((_, index) => (
                  <li key={index} className={index > 2 ? 'hidden-xs' : ''}>
                    <div className='d-flex mt-1'>
                      <div className="d-flex flex-column align-items-center mx-2">
                        <Skeleton width={40} height={10} style={{opacity: 0.2}}/>
                        <Skeleton width={30} height={8} style={{opacity: 0.2}}/>
                      </div>
                      <div className="d-flex flex-column align-items-center">
                        <Skeleton width={40} height={10} style={{opacity: 0.2}}/>
                        <Skeleton width={30} height={8} style={{opacity: 0.2}}/>
                      </div>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
          }
        </div>
      </Nav>
    </header>
  );
};

export default Header;
