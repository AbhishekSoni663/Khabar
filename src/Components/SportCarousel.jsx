import React from 'react'

const SportCarousel = () => {

    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src="https://www.mundodeportivo.com/files/og_thumbnail/files/fp/uploads/2023/02/13/63e9f164b62e7.r_d.2275-880-0.jpeg" className="d-block" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='h5'>La NFL obtiene 25 nominaciones a los premios Emmy del deporte</h5>
                        <p className='p'>La National Football League (NFL) recibió 25 nominaciones para la cuadragésima cuarta edición de los premios Sports Emmy (Emmy Deportivos) por su trabajo a través de NFL Network, NFL Films, NFL.com, la aplicación de la NFL y la oficina de la liga.</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="https://cdn.vox-cdn.com/thumbor/3e7567RyBsd85gkCaJr6seHPX1o=/0x0:4903x2567/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24579768/1481477270.jpg" className="d-block " alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='h5'>Sommer Slammed: Bayern Munich goalkeeper catches heat after Manchester City loss - Bavarian Football Works</h5>
                        <p className='p'>Not everyone is thrilled with Yann Sommer.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0412%2Fr1158032_1296x729_16%2D9.jpg" className="d-block" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='h5'>Third slide label</h5>
                        <p className='p'>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                <img src="https://i.dailymail.co.uk/1s/2023/04/13/09/69777385-0-image-a-14_1681372947242.jpg" className="d-block" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='h5'>Joao Felix slammed for his 'forgettable' display in Chelsea's Champions League loss to Real Madrid</h5>
                        <p className='p'>The Blues suffered a 2-0 defeat at the Santiago Bernabeu after goals from Karim Benzema and substitute Marco Asensio, while Ben Chilwell was also shown a straight red card.</p>
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
    )
}

export default SportCarousel

