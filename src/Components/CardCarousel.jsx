import React from 'react'


const CardCarousel = () => {
    // const { author, publishedAt } = news
    return (
        <div id="carouselExampleDark" className="carousel slide " data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active " >
                    <img src="https://dimages2.gazzettaobjects.it/files/og_thumbnail/uploads/2023/04/12/6436f4e59083e.jpeg" className="d-block" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='h5'>Captain America, The Winter Soldier stasera su Italia 1: tutto sul film Marvel</h5>
                        <p className='p'>Captain America: Winter Soldier su Italia 1 stasera 13 aprile 2023. Il film cult Marvel con Chris Evans, Scarlett Johansson, Sebastian Stan. Le curiosità.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/04/the-mandalorian-season-3-episode-7-din-djarin-and-paz-vizsla.jpg" className="d-block " alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='h5'>The Mandalorian Season 3 Episode 7: 20+ Easter Eggs & Hidden Details</h5>
                        <p className='p'>The Mandalorian season 3, episode 7 delivers one of the show's biggest episodes to date, providing plenty of hidden details and Star Wars Easter eggs.</p>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img src="https://c.ndtvimg.com/2023-04/gt24t5a_csk-bcci_625x300_08_April_23.jpg?im=FaceCrop,algorithm=dnn" className="d-block" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='h5'>CSK Probable XI vs RR, IPL 2023: Will CSK Tinker With Winning Combination?</h5>
                        <p className='p'>CSK have been victorious in their last two outings, and hope to make it three on the trot with a win in MS Dhoni's 200th game as captain of the franchise.</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CardCarousel
