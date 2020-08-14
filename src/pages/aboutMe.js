import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import img from "./../images/profile.jpg"
import "./../styles/aboutMe.scss"
import Exprience from "../components/Exprience"

const AboutMe = () => (
  <div id="abt" className="container">
    <SEO title="about me " />
    <div className="wrap">
      <div className="about-me-wrap">
        <div className="image-wrap">
          <img className="image" src={img} />
        </div>
        <div className="desc-wrap">
          <h1> <span>MOHSEN</span> haghighat khah</h1>
          <h3>Front-end developer</h3>
          <p>
            A motivated Frontend developer with over 6 years of experience in
            Javascript and react. Love to solve new challenges and find
            solutions. eager to learn on a daily basis that knows this career is
            a nonstop learning process. I want to improve myself every day and
            associate with a vibrant organization in order to fully utilize my
            knowledge, skills and to contribute to its overall growth
          </p>
        </div>
      </div>
      <div className='title-wrap'>
        <h1>Exprience</h1>
      </div>
     <Exprience />


     <div className='title-wrap'>
        <h1>EDUCATION</h1>
      </div>

    </div>
  </div>
)

export default AboutMe
