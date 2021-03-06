import backgroundImage from "../assets/advertise-with-us.jpg";
import { useTranslation } from "react-i18next";
import ListItemSocial from "./ListItemSocial";

const AdvertiseWithUsPage = ({ history }) => {
  const { t } = useTranslation();

  return (
    <div className="mainPage" id="top">
      <div className="grid-col-span-12   backgroundImage">
        <img src={backgroundImage} alt="" />
      </div>

      <div className="grid-row-start-2 grid-col-span-12 container mt-5">
        <h2>{t("description.adWithUs")}</h2>
        <p className="mt-2">{t("description.adWithUsIntro")}</p>
        <h2 className="m-t-4">{t("description.WhyAdWithUs")}</h2>
        <p>{t("description.WhyAdWithUsParagraph")}</p>
        <h2 className="m-t-4">{t("description.TypeOfAds")}</h2>
        <p className="mt-2">
          {t("description.TypeOfAdsPara1")}
          <ul className="ads">
            <li>{t("description.TypeOfAdsPara2")}</li>
            <li>{t("description.TypeOfAdsPara3")}</li>
          </ul>
          {t("description.TypeOfAdsPara4")}
        </p>
        <div className="singlePageFooter mt-5">
          <p>{t("description.contactUs")}</p>
          <a
            href='mailto:info@SyriaExchange.com'
            className="email"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            info@SyriaExchange.com
          </a>
          <p className="mt-3">{t("description.contactUsOr")}</p>
          <div className="socialIcons mt-2">
            <ul className="headerSocialIcons">
              <ListItemSocial
                icon={
                  <img
                    src={require("../assets/social-icons/messenger.png")}
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
                    src={require("../assets/social-icons/telegram.png")}
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
                    src={require("../assets/social-icons/facebook.png")}
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
                    src={require("../assets/social-icons/instagram.png")}
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
        </div>
      </div>
    </div>
  );
};

export default AdvertiseWithUsPage;
