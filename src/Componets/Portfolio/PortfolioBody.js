import React from "react";
import './Portfolio.css';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


class PortfolioBody extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
      return <>
     <div className="PortMainContainer"> 
         <div className="CardSection">

    
     
            <div className="CardMaincontainer">
                <div className="IMGInfoContainer">
                    <div className="CardIMG">

                    </div>
                    <div className="CardInfo">
                        <h2>R2H Gateway Project</h2>
                        <h4>Languages Used</h4>
                        <ul>
                            <li>Html</li>
                            <li>CSS</li>
                        </ul>
                        <button> Githhub</button>
                        <button> launch Site</button>

                    </div>
                </div>
                <div className="CardButtonConatiner">
                    <button> Githhub</button>
                    <button> launch Site</button>
                </div>
            </div>


            <div className="CardMaincontainer">
                <div className="IMGInfoContainer">
                    <div className="CardIMG">

                    </div>
                    <div className="CardInfo">
                        <h2>Title of Project</h2>
                        <h4>Languages Used</h4>
                        <ul>
                            <li>Html</li>
                            <li>CSS</li>
                        </ul>
                        <button> Githhub</button>
                        <button> launch Site</button>
                    </div>
                </div>
                <div className="CardButtonConatiner">
                </div>
            </div>


            <div className="CardMaincontainer">
                <div className="IMGInfoContainer">
                    <div className="CardIMG">
                    <Slider {...settings}>
                        <div>
                            <img className="SlideImage" src="/images/Gatewayone.png"/>
                        </div>
                        <div>
                        <img className="SlideImage" src="/images/Gateway2.png"/>
                        </div>
                        <div>
                        <img className="SlideImage" src="/images/Gateway3.png"/>
                        </div>
                        <div>
                        <img className="SlideImage" src="/images/Gateway4.png"/>
                        </div>
                    </Slider>

                    </div>
                    <div className="CardInfo">
                        <h2>R2H Gateway Project</h2>
                        <h4>Languages Used</h4>
                        <ul>
                            <li>Html</li>
                            <li>CSS</li>
                        </ul>
                        <button> Githhub</button>
                        <button> launch Site</button>

                    </div>
                </div>
                <div className="CardButtonConatiner">
                    <button> Githhub</button>
                    <button> launch Site</button>
                </div>
            </div>

     
     
     
      </div>
     </div> 
      </>
      
      
      ;
    }
  }

export default PortfolioBody;