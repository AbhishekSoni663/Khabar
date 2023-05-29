import React from 'react'

const EntertainmentNews = ({ entertainment }) => {
    const {urlToImage, author,title , url, description } = entertainment
    return (
        <div className=" card col-sm-12 col-md-4 col-xl-5">
            <img src={urlToImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4>{author}</h4>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} className="btn">Go somewhere</a>
            </div>
        </div>
    )
}

export default EntertainmentNews
