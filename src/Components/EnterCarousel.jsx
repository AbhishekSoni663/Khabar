import React from 'react'

const EnterCarousel = () => {
    return (
        <>
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src="src/assets/3000.webp" className="d-block" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='h5'>Batman v Superman: Dawn of Justice.</h5>
                        <p className='p'>Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="src/assets/john-wick.webp" className="d-block " alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='h5'>"People keep asking if I'm back. And I haven't really had an answer. But now, yeah, I'm thinkin' I'm back!</h5>
                        <p className='p'>John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.After returning to the criminal underworld to repay a debt, John Wick discovers that a large bounty has been put on his life.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://static.foxnews.com/foxnews.com/content/uploads/2023/04/Untitled-design-670.png" className="d-block" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='h5'>Disneyland to close Splash Mountain in May, releases concept art for 'Tiana’s Bayou Adventure</h5>
                        <p className='p'>Disney Parks says that Splash Mountain at Disneyland will close beginning on May 31 so that work can take place to build Tiana’s Bayou Adventure.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://pyxis.nymag.com/v1/imgs/266/698/97c4207661c36ad0dcb1b9ac2be75e7ddd-Fat-Ham.1x.rsocial.w1200.jpg" className="d-block" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='h5'>Theater Review: 'Fat Ham' Transfers to Broadway - Vulture</h5>
                        <p className='p'>Theater Review: ‘Fat Ham,’ by James Ijames — an adaptation of Shakespeare’s ‘Hamlet’ — transfers to Broadway from the Public Theater.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </>
    )
}

export default EnterCarousel
