import React from 'react';
import Carousel from './slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class about extends React.Component {
    render() {
        return(
            <div>
                    <Carousel/>
                    <section className="about-us">
                        <div className="aboutbody">
                            <h1>About SneakerHead</h1>
                            <p>SneakerHead is an online shoe retail company that provides high quality and fashionable sneakers to all of the worlds shoe connoiseurs who have a taste for the more upscale and rare shoes. We provide only the upmost premium and finest quality shoes and accessories to our customers to guarantee satisfaction. SneakerHead was founded in Charlotte, North Carolina March 22, 2020. </p>
                        </div>
                        <div className="owner">
                            <h1>Josh McNeill</h1>
                            <img className="owner-image" src="../images/josh_mcneill.jpg" alt="sneakerHead owner"></img>
                        </div>
                        <div className="owner-info">
                            <p> My name is Josh McNeill and I am the ultimate sneaker connoiseur. As a child I dreamed of owning some of the finest quality shoes and had a goal in mind of turning it into a career. I heard the saying, "if you do something that you love you will never work a day in your life". So I started with selling a few limited series shoes and just like that SneakerHead took off into what is now a larger scale online sneaker retail.</p>
                        </div>
                        <div className="weeklyshoe">
                            <h1>SneakerHead's pick of the week goes to :</h1>
                            <img className="shoeOfWeek" src="../images/shoes-ofweek.jpeg" alt="shoes of week"></img>
                            <h2>Nike MAG Back to the Future</h2>
                            <p>Price: $10,000</p>
                            <button className="btn1">Add To Cart</button>
                        </div>
                    </section>


            </div>
        )
    }
}

export default about;