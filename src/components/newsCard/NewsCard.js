import React from "react";
import moment from "moment";
import "./newsCard.css";

const NewsCard = ({ info, index }) => {
  return (
    <div className={index === 0 ? "first-article" : "news-card"}>
      <a href={info?.url} target="_blank" rel="noreferrer">
        <div className="news-card-container">
          <div className="news-card-image">
            <img
              src={
                info?.image?.thumbnail?.contentUrl
                  ? info?.image?.thumbnail?.contentUrl
                  : "cryptoImg.jpg"
              }
              alt="news articel"
              srcSet={
                info?.image?.thumbnail?.contentUrl
                  ? info?.image?.thumbnail?.contentUrl + "300w"
                  : "cryptoImg.jpg 300w"
              }
            />
          </div>
          <div className="news-card-title">
            <p>{info?.name}</p>
          </div>
          <div className="news-card-desc">
            <p>{info?.description}</p>
          </div>
          <div className="news-card-footer">
            <div className="news-card-provider-image">
              <img
                src={info?.provider[0]?.image?.thumbnail?.contentUrl}
                alt="provider logo"
              />
            </div>
            <div className="news-card-provider-name">
              {info?.provider[0]?.name}
            </div>
            <div className="news-card-date">
              {moment(info?.datePublished).startOf("ss").fromNow()}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default NewsCard;
