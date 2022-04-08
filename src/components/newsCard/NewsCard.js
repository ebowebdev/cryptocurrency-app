import React from "react";
import moment from "moment";
import "./newsCard.css";

const NewsCard = ({ info, index }) => {
  console.log({ infocard: info });
  console.log({ index });
  return (
    <div className={index === 0 ? "first-article" : "news-card-container" }>
      <div className="news-card-image">
        <img src={info?.image?.thumbnail?.contentUrl} alt="news articel" srcSet={info?.image?.thumbnail?.contentUrl +'500w'}/>
      </div>
      <div className="news-card-title">
        <p>{info?.name}</p>
      </div>
      <div className="news-card-desc">
        <p>{info?.description}</p>
      </div>
      <div className="news-card-footer">
        <div className="news-card-provider-image">
          <img src={info?.provider[0]?.image?.thumbnail?.contentUrl} alt="provider info" />
        </div>
        <div className="news-card-provider-name">{info?.provider[0]?.name}</div>
        <div className="news-card-date">
          {moment(info?.datePublished).startOf("ss").fromNow()}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
