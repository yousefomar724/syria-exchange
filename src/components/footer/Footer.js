import Nav from "react-bootstrap/Nav";
import logo from "../logo.svg";
import googleApp from "./google-play-badge.png";
import { Link } from "react-router-dom";
import ListItemSocial from "../ListItemSocial";
import AppleApp from "./apple-store-badge.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Nav className="footer">
      <div className="div1">
        <img src={logo} alt="" />
        <ul>
          <li>
            <Link to="/advertise-with-us">
              {t("description.AdvertiseWithUs")}
            </Link>
          </li>
          <li>
            <Link to="/get-api">{t("description.GetApi")}</Link>
          </li>
          <li>
            <Link to="/about-us">{t("description.AboutUs")}</Link>
          </li>
          <li>
            <Link to="/privacy-policy">{t("description.PrivacyPolicy.title")}</Link>
          </li>
          <li>
            <Link to="/user-agreement">{t("description.UserAgreement.title")}</Link>
          </li>
        </ul>
      </div>
      <div className="getApp">
        <h4>{t("description.headerDownload")}</h4>
        <div>
          <a href="https://play.google.com/store/apps/details?id=com.currencyapplication.currencyapplication&hl=ar&gl=US">
            <img src={googleApp} alt="" />
          </a>
          <a href="#" className="pl-1">
            <img src={AppleApp} alt="" />
          </a>
        </div>
      </div>
      <div className="copyrights">
        <h5 className="color-white">{t("description.copyRights")}</h5>
        <h6 className="color-white">Syria exchange 2022</h6>
        <ul className="headerSocialIcons">
          <ListItemSocial
            icon={
              <img
                src={require("../../assets/social-icons/messenger.png")}
                style={{ width: "90%" }}
                alt="messenger"
              />
            }
            iconStatus={true}
            liClass="liIcon"
            linkSocial="https://m.me/Syriaexchange "
          />
          <ListItemSocial
            icon={
              <img
                src={require("../../assets/social-icons/telegram.png")}
                style={{ width: "90%" }}
                alt="telegram"
              />
            }
            iconStatus={true}
            liClass="liIcon"
            linkSocial="https://t.me/Syriaexchange"
          />
          <ListItemSocial
            icon={
              <img
                src={require("../../assets/social-icons/facebook.png")}
                style={{ width: "90%" }}
                alt="facebook"
              />
            }
            iconStatus={true}
            liClass="liIcon"
            linkSocial="https://www.facebook.com/Syria.exchange "
          />
          <ListItemSocial
            icon={
              <img
                src={require("../../assets/social-icons/instagram.png")}
                style={{ width: "90%" }}
                alt="instagram"
              />
            }
            iconStatus={true}
            liClass="liIcon"
            linkSocial="https://www.instagram.com/syria.exchange/"
          />
        </ul>
      </div>
    </Nav>
  );
};

export default Footer;
