import React from "react";
import './Portfolio.css';
import Slider from "react-slick";


class PortfolioBody extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            adaptiveHeight: true,
            className:"SliderSetting",
          };
      return <>
     <div className="PortMainContainer"> 
          <div className="H1PortfolioBox">
            <h1 className="H1Portfolio" >My Portfolio</h1>
          </div>
         <div className="CardSection">

    
     
            <div className="CardMaincontainer">
                <div className="IMGInfoContainer">
                    <div className="CardInfo">
                        <h2> Gateway Project</h2>
                        <h4>Languages</h4>
                        <p>HTML & CSS</p>
                    <div className="CardButtonBox">
                        <a href="https://github.com/WilsonPeres/Gateway-Spain-Project" target="_blank" className="LaunchButton">GitHub</a>
                        <a href="https://gracious-perlman-b1d404.netlify.app/" target="_blank" className="LaunchButton">WebSite</a>
                    </div>

                    </div>
                    <div className="CardIMG">
                        <img src="/images/Gateway.png"/>
                    </div>
                </div>
            </div>


            <div className="CardMaincontainer">
                <div className="IMGInfoContainer">
                    <div className="CardInfo">
                        <h2>Clock</h2>
                        <h4>Languages</h4>
                        <p>HTML CSS Javascript</p>
                    <div className="CardButtonBox">
                        <a href="https://github.com/WilsonPeres/Clock" target="_blank" className="LaunchButton">GitHub</a>
                        <a href="https://sharp-ptolemy-c041dc.netlify.app/" target="_blank" className="LaunchButton">WebSite</a>
                    </div>

                    </div>
                    <div className="CardIMG">
                        <img src="/images/Clock.png"/>
                    </div>
                </div>
            </div>


            <div className="CardMaincontainer">
                <div className="IMGInfoContainer">
                    <div className="CardInfo">
                        <h2>Speech Recognition App</h2>
                        <h4>Languages</h4>
                        <p>HTML CSS Javascript</p>
                    <div className="CardButtonBox">
                        <a href="https://github.com/WilsonPeres/Speech-recognization-app" target="_blank" className="LaunchButton">GitHub</a>
                        <a href="https://determined-mahavira-dbc4a2.netlify.app/" target="_blank" className="LaunchButton">WebSite</a>
                    </div>

                    </div>
                    <div className="CardIMG">
                        <img src="/images/SpeechApp.png"/>
                    </div>
                </div>
            </div>


            <div className="CardMaincontainer">
                <div className="IMGInfoContainer">
                    <div className="CardInfo">
                        <h2>Tic Tac Toe</h2>
                        <h4>Languages</h4>
                        <p>HTML CSS  Javascript</p>
                    <div className="CardButtonBox">
                        <a href="https://github.com/WilsonPeres/Tic-Tac-Toe-Game" target="_blank" className="LaunchButton">GitHub</a>
                        <a href="https://wilsonptictactoegame.netlify.app/" target="_blank" className="LaunchButton">WebSite</a>
                    </div>

                    </div>
                    <div className="CardIMG">
                        <img src="/images/TicTacToe.png"/>
                    </div>
                </div>
            </div>


            <div className="CardMaincontainer">
                <div className="IMGInfoContainer">
                    <div className="CardInfo">
                        <h2>Ecommerce Project</h2>
                        <h4>Languages</h4>
                        <p>React CSS Javascript</p>
                    <div className="CardButtonBox">
                        <a href="https://github.com/WilsonPeres/ReactEcommerceProject" target="_blank" className="LaunchButton">GitHub</a>
                        <a href="https://ellaguneroclt.netlify.app/" target="_blank" className="LaunchButton">WebSite</a>
                    </div>

                    </div>
                    <div className="CardIMG">
                        <img src="/images/ElLagunero.png"/>
                    </div>
                </div>
            </div>


            <div className="CardMaincontainer">
                <div className="IMGInfoContainer">
                    <div className="CardInfo">
                        <h2>Github Card Finder</h2>
                        <h4>Languages</h4>
                        <p>Json Ajax & CSS</p>
                    <div className="CardButtonBox">
                        <a href="https://github.com/WilsonPeres/React-github-cards" target="_blank" className="LaunchButton">GitHub</a>
                        <a href="https://myfirstgithubprofileapp.netlify.app/" target="_blank" className="LaunchButton">WebSite</a>
                    </div>
                    </div>
                    <div className="CardIMG">
                        <img src="/images/GithubCard.png"/>
                    </div>
                </div>
            </div>


            <div className="CardMaincontainer">
                <div className="IMGInfoContainer">
                    <div className="CardInfo">
                        <h2>Samsung Redesign Project</h2>
                        <h4>Languages</h4>
                        <p>React MySQL Node.JS CSS</p>
                    <div className="CardButtonBox">
                        <a href="https://github.com/LeCoding-tech/Redesign-team-9" target="_blank" className="LaunchButton">GitHub</a>
                        <a href="https://redesign-team-9.netlify.app/" target="_blank" className="LaunchButton">WebSite</a>
                    </div>
                    </div>
                    <div className="CardIMG">
                        <img src="/images/SamsungOne.png"/>
                    </div>
                </div>
            </div>


            <div className="CardMaincontainer">
                <div className="IMGInfoContainer">
                    <div className="CardInfo">
                        <h2>To Do List</h2>
                        <h4>Languages</h4>
                        <p> Html CSS Javascript</p>
                    <div className="CardButtonBox">
                        <a href="https://github.com/WilsonPeres/Challange-" target="_blank" className="LaunchButton">GitHub</a>
                        <a href="https://angry-hodgkin-76926e.netlify.app/" target="_blank" className="LaunchButton">WebSite</a>
                    </div>
                    </div>
                    <div className="CardIMG">
                        <img src="/images/ToDoList.png"/>
                    </div>
                </div>
            </div>


            <div className="CardMaincontainer">
                <div className="IMGInfoContainer">
                    <div className="CardInfo">
                        <h2>Weather App</h2>
                        <h4>Languages</h4>
                        <p> Node Express & CSS</p>
                    <div className="CardButtonBox">
                        <a href="https://github.com/WilsonPeres/NodeWeatherAppWilson" target="_blank" className="LaunchButton">GitHub</a>
                    </div>
                    </div>
                    <div className="CardIMG">
                        <img src="/images/WeatherNode.png"/>
                    </div>
                </div>
            </div>


            {/* <div className="CardMaincontainer">
                <div className="IMGInfoContainer">
                    <div className="CardInfo">
                        <h2> Weather App</h2>
                        <h4>Languages Used</h4>
                        <p> Node.JS CSS React</p>
                        <div className="CardButtonBox">
                            <a href="https://github.com/WilsonPeres/5Day-Weather-App-" className="LaunchButton">GitHub</a>
                        </div>
                    </div>
                    <div className="CardIMG">
                        <Slider {...settings}>
                            <img className="SlideImage" src="/images/WeatherOne.png"/>
                            <img className="SlideImage" src="/images/WeatherTwo.png"/>
                            <img className="SlideImage" src="/images/WeatherThree.png"/>
                        </Slider>
                    </div>
                </div>
            </div> */}


            <div className="CardMaincontainer">
                <div className="IMGInfoContainer">
                    <div className="CardInfo">
                        <h2>Hope Hackathon</h2>
                        <h4>Languages Used</h4>
                        <p> Node.JS CSS Postman</p>
                        <div className="CardButtonBox">
                            <a href="https://github.com/codyg7/Hopehackathon" className="LaunchButton">GitHub</a>
                        </div>
                    </div>
                    <div className="CardIMG">
                        <Slider {...settings}>
                            <img className="SlideImage" src="/images/WackOne.png"/>
                            <img className="SlideImage" src="/images/WackTwo.png"/>
                            <img className="SlideImage" src="/images/WackThree.png"/>    
                        </Slider>
                    </div>
                </div>
            </div>

      </div>
     </div> 
      </>
      
      
      ;
    }
  }

export default PortfolioBody;