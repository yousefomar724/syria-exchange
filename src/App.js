import { Route, Switch } from "react-router-dom";
import useSWR from "swr";

import SEO from "./components/SEO";
import Header111 from "./components/Header111";
import Footer from "./components/footer/Footer";
import Home from "./components/Home";
import SryianBoundPage from "./components/SryianBoundPage";
import GoldPage from "./components/GoldPage";
import TurkishPoundPage from "./components/TurkishPoundPage";
import InternationalCoinPage from "./components/InternationalCoinPage";
import NewsPage from "./components/NewsPage";
import AdvertiseWithUsPage from "./components/AdvertiseWithUsPage";
import GetApiPage from "./components/GetApiPage";
import AboutUsPage from "./components/AboutUsPage";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import UserAgreementPage from "./components/UserAgreementPage";
import SinglePostPage from "./components/singlePost/SinglePostPage";
import ScrollToTop from "./components/ScrollToTop";
import { useTranslation } from "react-i18next";

function App() {
  const {data: cityCoinsData} = useSWR('/city-coins.php');
  const {data: internationalCoinsData} = useSWR('/international-coins.php');
  const {data: centralBankData } = useSWR('/central-bank.php');
  const {data: internationalGoldData } = useSWR('/international-gold.php');
  const {data: posts } = useSWR('/blog-post.php');
  const {data: adsBanners } = useSWR('/ads-banner.php');

  const { i18n } = useTranslation();
  document.dir = i18n.dir();
  return (
    <>
      <SEO />
      <Header111 />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" 
          render={() => <Home data={{ cityCoinsData, internationalCoinsData, internationalGoldData, centralBankData, posts, adsBanners }}/>} 
        />

        <Route exact path="/syrian-pound" render={() => <SryianBoundPage />} />
        <Route exact path="/gold" render={() => <GoldPage />} />
        <Route
          exact
          path="/turkish-pound"
          render={() => <TurkishPoundPage />}
        />
        <Route
          exact
          path="/international-coin/:id"
          render={() => <InternationalCoinPage />}
        />
        <Route exact path="/news" render={() => <NewsPage />} />
        <Route
          exact
          path="/advertise-with-us"
          render={() => <AdvertiseWithUsPage />}
        />
        <Route exact path="/get-api" render={() => <GetApiPage />} />
        <Route exact path="/about-us" render={() => <AboutUsPage />} />
        <Route exact path="/privacy-policy" render={() => <PrivacyPolicyPage />} />
        <Route exact path="/user-agreement" render={() => <UserAgreementPage />} />
        <Route exact path="/post/:id" render={() => <SinglePostPage />} />

        <Route
          path="*"
          render={() => {
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>;
          }}
        />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
