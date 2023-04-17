import React from "react";




const SportNews = ({ sports }) => {
  const { urlToImage, title, url, description } = sports;
  return (
    <>
      <div className=" card col-sm-10 col-md-5 col-xl-3">
        <img src={urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} className="btn ">
            Go somewhere
          </a>
        </div>
      </div>
     </>
  );
};

export default SportNews;
