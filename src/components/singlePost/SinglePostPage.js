import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import useSWR from "swr";
import { Card } from "react-bootstrap";
/*import RefreshIcon from "../RefreshIcon"; */
import logo from "../logo.svg";
/* import { format } from "date-fns";
import { ar } from "date-fns/locale"; */
import SEO from "../SEO";
import IMGFig1 from "../img-fig/IMGFig1";
import InternationalCoins from "../international-coins/InternationalCoins";
import MostWatched from "../most-watched/MostWatched";
import { useLocation } from "react-router-dom";
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  TwitterShareButton,
} from "react-share";
/* import sysUpdate from "../../assets/system-update.png"; */
import { Markup, renderMarkup } from "react-render-markup";
import Skeleton from 'react-loading-skeleton'

const SinglePostPage = () => {

  const { id } = useParams();
  const location = useLocation();

  const {data: allPosts } = useSWR('/blog-post.php')
  /* const [date, setDate] = useState(
    format(new Date(), "eeee dd/MM/yyyy - hh:mm ", {
      locale: ar,
    })
  ); */

  const post = allPosts?.blog_post.find(p => String(p.id) === String(id.split('-')[0]));

  const financialPosts = allPosts?.blog_post.filter(
    (item) => item.post_category === "نصائح مالية"
  );

  /* const refreshDate = (e) => {
    e.preventDefault();
    setDate(format(new Date(), "eeee dd/MM/yyyy - hh:mm ", { locale: ar }));
  }; */
  const currentURL = window.location.href;
  return (
    <>
    {post && 
      <SEO 
        title={post.post_title.trim()} 
        description={`${post.post_body.substring(0, 120)}...`} 
        imageUrl={post.post_image} 
        ogType='article'
        articleTag={post.post_category} />
    }
    

    <div className="mainPage container">
      <div className=" grid-col-start-1 grid-col-end-9 grid-row-start-2 mt-1 mobileMainDiv">
        <section className="cer newsItems">
          <nav className="cerNav">
            <ul>
              <li>
                <img src={logo} alt="Syria Exchange" className="img" />
                {post?.post_category}
              </li>
              {/* <li className="font-number date">
                {date}
                <Button className="btn-refresh" onClick={refreshDate}>
                  <RefreshIcon
                    anchotText=""
                    icon={
                      <img
                        src={sysUpdate}
                        alt="sysUpdateIcon"
                        className="refresh"
                      />
                    }
                    iconStatus={true}
                    liClass="refresh"
                  />
                </Button>
              </li> */}
            </ul>
          </nav>
          <div className="newsItemsCardsGrid">
            <div
              className="cerToastFirstRow singlePost "
              style={{ color: "#f7991e" }}
            >
              .
            </div>
            <Card className="grid-col-span-4 singlePost">
              <h2>{post ? post.post_title : <Skeleton />}</h2>
              {post ? 
              <Card.Img variant="top" src={post.post_image} />
              :
              <div className="card-img-top">
                <Skeleton height={220} />
              </div>
            }
              <Card.Body>
                <Card.Text>
                  {/*  <div dangerouslySetInnerHTML={{ __html: post.body }}></div> */}
                  <div>{post ? renderMarkup(post.post_body) :  <Skeleton count={20}/>}</div>
                </Card.Text>
              </Card.Body>
            </Card>
            <div className="grid-col-span-4 d-flex sharePostDiv">
              <p>شارك الخبر</p>
              <div className="sharePostIconsDiv">
                <FacebookMessengerShareButton
                  url={currentURL}
                  className="sharePostliIcon"
                >
                  <img
                    src={require("../../assets/social-icons/messenger.png")}
                    style={{ width: "70%" }}
                    alt="messenger"
                  />
                </FacebookMessengerShareButton>

                <TelegramShareButton
                  title={post?.post_title.trim()}
                  url={currentURL}
                  className="sharePostliIcon"
                >
                  <img
                    src={require("../../assets/social-icons/telegram.png")}
                    style={{ width: "70%" }}
                    alt="telegram"
                  />
                </TelegramShareButton>

                <WhatsappShareButton
                  title={post?.post_title.trim()}
                  url={currentURL}
                  className="sharePostliIcon"
                >
                  <img
                    src={require("../../assets/social-icons/whatsapp.png")}
                    style={{ width: "70%" }}
                    alt="whatsapp"
                  />
                </WhatsappShareButton>

                <TwitterShareButton
                  title={post?.post_title.trim()}
                  url={currentURL}
                  className="sharePostliIcon"
                >
                  <img
                    src={require("../../assets/social-icons/twitter.png")}
                    style={{ width: "70%" }}
                    alt="twitter"
                  />
                </TwitterShareButton>

                <FacebookShareButton
                  url={currentURL}
                  quote={post?.post_title.trim()}
                  className="sharePostliIcon"
                >
                  <img
                    src={require("../../assets/social-icons/facebook.png")}
                    style={{ width: "70%" }}
                    alt="facebook"
                  />
                </FacebookShareButton>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className=" grid-col-start-9 grid-col-end-13 grid-row-start-2 mt-1 mobileMainDiv2">
        <MostWatched title="نصائح مالية" posts={financialPosts} />
        <InternationalCoins sectionClass="m-t-15 InternationalCoins" />
        <IMGFig1 sectionClass="m-t-10 figureIMG" />
      </div>
    </div>
    </>
  );
};

export default SinglePostPage;
