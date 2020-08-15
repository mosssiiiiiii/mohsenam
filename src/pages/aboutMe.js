import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import "./../styles/aboutMe.scss"
import Exprience from "../components/Exprience"
import Skill from "../components/Skill"
import Education from "../components/Education"
import {FaAngleLeft} from "react-icons/fa"
import Language from "../components/Language"
import Information from "../components/Information"
import SocialNetwork from "../components/SocialNetwork"
const AboutMe = () => (
  <div id="abt" className="container">
    <SEO title="about me " />
    <div className="wrap">
      <Link to="/" className='back'>
        <FaAngleLeft/>
        <span>Home</span>
      </Link>
      
      <Information/>
      <div className='title-wrap'>
        <h1>Exprience</h1>
      </div>
     <Exprience />

     <div className='title-wrap'>
        <h1>Technical Skill</h1>
      </div>
     <Skill />


     <div className='title-wrap'>
        <h1>Education</h1>
      </div>
      <Education/>

      <div className='title-wrap'>
        <h1>Language</h1>
      </div>
      <Language/>

      <div className='title-wrap'>
        <h1>Social Network</h1>
      </div>
      <SocialNetwork/>

    </div>
  </div>
)

export default AboutMe
