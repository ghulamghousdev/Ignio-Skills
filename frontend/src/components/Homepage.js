import React from 'react';
import '../styles/Homepage.scss';
import Home from '../assets/Home.png';
import JsCourse from '../assets/JsCourse.jpg';
import Teacher from '../assets/Teacher.jpg';

const Homepage = () => {
    return(
        <div>
            <div className="background">
                <div  className="page1">    
                    <h1 className="hp-text1">Find the perfect courses <br/> to enhance your skills</h1>
                    <div id="search-opt">
                        <input type="text" className="searchbar" placeholder="Search for courses" />
                        <div className="search">
                            <input className="searchbtn" type="submit" value="Search" />
                        </div>
                <div>
                    <div className="column">
                        <div id="popular">
                            <div className="tabs">
                                <p>Popular:</p>
                                <a className="web-op" href="./abc">Web</a>
                                <a className="web-op" href="./abc">Graphic Design</a>
                                <a className="web-op" href="./abc">Native</a>
                                <a className="web-op" href="./abc">Game Dev</a>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <img src={Home} alt="home pic" />
                    </div>
                </div>
            </div>
        </div>

        <h1 className="heading-image-grid">
            Popular Courses
        </h1>
        <div className="c-grid">
          <article className="c-grid__item">
            <div className="c-grid__picture">
              <img alt="js course" src={JsCourse} style={{maxWidth: 200}} />     
            </div>
            <div className="c-grid__content">
              <p><b>Course name</b><br />Teacher name</p>
              <div className="container d-flex justify-content-center mt-100">
                <div className="row">
                    <div className="col-md-6">
                        <fieldset className="rating"> 
                          <input type="radio" id="star5" name="rating" value="5" />
                          <label className="full" htmlFor="star5" title="5 stars"></label> 
                          <input type="radio" id="star4half" name="rating" value="4.5" />
                          <label className="half" htmlFor="star4half" title="4.5 stars"></label> 
                          <input type="radio" id="star4" name="rating" value="4" />
                          <label className="full" htmlFor="star4" title="4 stars"></label> 
                          <input type="radio" id="star3half" name="rating" value="3.5" />
                          <label className="half" htmlFor="star3half" title="3.5 stars"></label> 
                          <input type="radio" id="star3" name="rating" value="3" />
                          <label className="full" htmlFor="star3" title="3 stars"></label> 
                          <input type="radio" id="star2half" name="rating" value="2.5" />
                          <label className="half" htmlFor="star2half" title="2.5 stars"></label> 
                          <input type="radio" id="star2" name="rating" value="2" />
                          <label className="full" htmlFor="star2" title="2 stars"></label> 
                          <input type="radio" id="star1half" name="rating" value="1.5" />
                          <label className="half" htmlFor="star1half" title="1.5 stars"></label> 
                          <input type="radio" id="star1" name="rating" value="1" />
                          <label className="full" htmlFor="star1" title="1 star"></label> 
                        </fieldset>
                    </div>
                </div>
                <div className="view-details-btn-className">
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
            </div>
          </article>

          <article className="c-grid__item">
            <div className="c-grid__picture">
              <img alt="JS course img" src={JsCourse} style={{maxWidth: 200 }} />       
            </div>
            <div className="c-grid__content">
              <p><b>Course name</b><br />Teacher name</p>
              <div className="container d-flex justify-content-center mt-100">
                <div className="row">
                  <div className="col-md-6">
                    <fieldset className="rating"> 
                      <input type="radio" id="star5" name="rating" value="5" />
                      <label className="full" htmlFor="star5" title="5 stars"></label> 
                      <input type="radio" id="star4half" name="rating" value="4.5" />
                      <label className="half" htmlFor="star4half" title="4.5 stars"></label> 
                      <input type="radio" id="star4" name="rating" value="4" />
                      <label className="full" htmlFor="star4" title="4 stars"></label> 
                      <input type="radio" id="star3half" name="rating" value="3.5" />
                      <label className="half" htmlFor="star3half" title="3.5 stars"></label> 
                      <input type="radio" id="star3" name="rating" value="3" />
                      <label className="full" htmlFor="star3" title="3 stars"></label> 
                      <input type="radio" id="star2half" name="rating" value="2.5" />
                      <label className="half" htmlFor="star2half" title="2.5 stars"></label> 
                      <input type="radio" id="star2" name="rating" value="2" />
                      <label className="full" htmlFor="star2" title="2 stars"></label> 
                      <input type="radio" id="star1half" name="rating" value="1.5" />
                      <label className="half" htmlFor="star1half" title="1.5 stars"></label> 
                      <input type="radio" id="star1" name="rating" value="1" />
                      <label className="full" htmlFor="star1" title="1 star"></label>
                    </fieldset>
                  </div>
                </div>
                <div className="view-details-btn-className">
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
            </div>  
          </article>

          <article className="c-grid__item">
            <div className="c-grid__picture">
              <img alt="js course" src={JsCourse} style={{maxWidth: 200}} />       
            </div>
            <div className="c-grid__content">
              <p><b>Course name</b><br />Teacher name</p>
              <div className="container d-flex justify-content-center mt-100">
                  <div className="row">
                      <div className="col-md-6">
                          <fieldset className="rating"> 
                            <input type="radio" id="star5" name="rating" value="5" />
                            <label className="full" htmlFor="star5" title="5 stars"></label> 
                            <input type="radio" id="star4half" name="rating" value="4.5" />
                            <label className="half" htmlFor="star4half" title="4.5 stars"></label> 
                            <input type="radio" id="star4" name="rating" value="4" />
                            <label className="full" htmlFor="star4" title="4 stars"></label> 
                            <input type="radio" id="star3half" name="rating" value="3.5" />
                            <label className="half" htmlFor="star3half" title="3.5 stars"></label> 
                            <input type="radio" id="star3" name="rating" value="3" />
                            <label className="full" htmlFor="star3" title="3 stars"></label> 
                            <input type="radio" id="star2half" name="rating" value="2.5" />
                            <label className="half" htmlFor="star2half" title="2.5 stars"></label> 
                            <input type="radio" id="star2" name="rating" value="2" />
                            <label className="full" htmlFor="star2" title="2 stars"></label> 
                            <input type="radio" id="star1half" name="rating" value="1.5" />
                            <label className="half" htmlFor="star1half" title="1.5 stars"></label> 
                            <input type="radio" id="star1" name="rating" value="1" />
                            <label className="full" htmlFor="star1" title="1 star"></label>
                          </fieldset>
                      </div>
                  </div>
                  <div className="view-details-btn-className">
                    <button className="view-details-btn">View Details</button>
                  </div>
              </div>
            </div>  
          </article>

          <article className="c-grid__item">
            <div className="c-grid__picture"> 
              <img alt="js course" src={JsCourse} style={{maxWidth: 200}} />    
            </div>
            <div className="c-grid__content">
              <p><b>Course name</b><br />Teacher name</p>
              <div className="container d-flex justify-content-center mt-100">
                  <div className="row">
                      <div className="col-md-6">
                          <fieldset className="rating"> 
                            <input type="radio" id="star5" name="rating" value="5" />
                            <label className="full" htmlFor="star5" title="5 stars"></label> 
                            <input type="radio" id="star4half" name="rating" value="4.5" />
                            <label className="half" htmlFor="star4half" title="4.5 stars"></label> 
                            <input type="radio" id="star4" name="rating" value="4" />
                            <label className="full" htmlFor="star4" title="4 stars"></label> 
                            <input type="radio" id="star3half" name="rating" value="3.5" />
                            <label className="half" htmlFor="star3half" title="3.5 stars"></label> 
                            <input type="radio" id="star3" name="rating" value="3" />
                            <label className="full" htmlFor="star3" title="3 stars"></label> 
                            <input type="radio" id="star2half" name="rating" value="2.5" />
                            <label className="half" htmlFor="star2half" title="2.5 stars"></label> 
                            <input type="radio" id="star2" name="rating" value="2" />
                            <label className="full" htmlFor="star2" title="2 stars"></label> 
                            <input type="radio" id="star1half" name="rating" value="1.5" />
                            <label className="half" htmlFor="star1half" title="1.5 stars"></label> 
                            <input type="radio" id="star1" name="rating" value="1" />
                            <label className="full" htmlFor="star1" title="1 star"></label>
                          </fieldset>
                      </div>
                  </div>
                  <div className="view-details-btn-className">
                    <button className="view-details-btn">View Details</button>
                  </div>
              </div>
            </div>  
          </article>
        </div>
        <div className="mentor-section">
          <div className="mentor-section-bg">
            <img src={Teacher} alt="#" />
          <div className="mentor-text">
            <h1>Become a Teacher</h1>
            <p>
              Teach the world online. Create an online video course, reach students across the globe, and earn money. <br/> Want to become a teacher? Join us now!
            </p>
            <div className="mentor-join-className">
              <button className="mentor-join-btn">Join</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Homepage;