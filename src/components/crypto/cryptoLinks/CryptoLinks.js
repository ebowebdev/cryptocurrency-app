import React, {memo} from "react";
import Title from "../../title/Title";
import './cryptoLinks.css'

const CryptoLinks = ({name,links}) => {
  console.log({links})
  return (
    <div className="crypto-links">
      <Title title={`Community of ${name}`}/>
      {links &&
        links.map((link) => (
          <div className="crypto-link-box" key={link.url}>
            <div className="crypto-link-name">{link.name}</div>
            <button className="crypto-link-btn">
              <a href={link.link} target="_blank" rel="noreferrer">
                {link.type}
              </a>
            </button>
          </div>
        ))}
    </div>
  );
};

export default memo(CryptoLinks);
