import React,{ useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomeScreen() {
    useEffect(() => {

    });
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    };
    return (
        <div className="container">
            <Slider {...settings} className="slider">
                <div>
                    <img src="https://img.freepik.com/free-vector/modern-music-event-poster-template_1361-1292.jpg?w=2000" alt=''/>
                </div>
                <div>
                    <img src="https://as1.ftcdn.net/v2/jpg/02/26/12/54/1000_F_226125493_BqK7H44w4i6M0Uy3U6fv2trLx9umSxUT.jpg" alt=''/>
                </div>
                <div>
                    <img src="https://www.premiumwp.com/wp-content/uploads/2013/10/event-themes-featured.jpg" alt=''/>
                </div>
            </Slider>

            <div className="row mt-2 text-center">
                <div className="col-sm-3">
                    <div className="card category-card">
                        <h5 className="card-title">Special title treatment</h5>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="card category-card">
                        <h5 className="card-title">Special title treatment</h5>
                    </div>
                </div>
            </div>

            <div className="event-body mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                Event category
                            </div>
                            <div className="card-body">
                            <h5 className="card-title">Event title</h5>
                            <p className="card-text">Event description</p>
                            {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
