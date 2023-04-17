import React from 'react'

const NewCard = ({news}) => {

    const {urlToImage, title , url, description} = news
    return (
        <>
            <div className=" card col-sm-11 col-md-4 col-xl-4">
                <img src={urlToImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={url} className="btn">Go somewhere</a>
                    </div>
            </div>
            </>
    )
}

export default NewCard