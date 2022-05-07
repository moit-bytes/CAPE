import React from "react";

export const NewsItem = ({news}) => {
  return (
    <div className="col-sm-3 mt-4">
      <div className="card" style={{width: "18rem"}}>
        <img src={news.urlToImage == null?'https://raw.githubusercontent.com/moit-bytes/CAPE/main/res/contact_us.jpg': news.urlToImage} className="card-img-top" alt="https://raw.githubusercontent.com/moit-bytes/CAPE/main/res/contact_us.jpg" />
        <div className="card-body">
          <h5 className="card-title">{news.title}</h5>
          <p className="card-text">
            {news.description == null? 'No Description Available. Please Click Read More to know more about the news.': news.description}
          </p>
          <a href={news.url} target="_blank" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
