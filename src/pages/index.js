import React from "react"
import { Link } from "gatsby"
import "./../styles/home.scss"
import SEO from "../components/seo"
import img from "./../images/profile.jpg"
import {
  FaStackOverflow,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa"
const Home = () => {
  const height = window.innerHeight
  return (
    <div id='hme' className="container" style={{ maxHeight: height, height: height }}>
      <SEO title="Mohsen Haghighatkhah Portfolio" />

      <div className="wrap">
        <div className="image-wrap">
          <img className="image" src={img} />
        </div>
        <div className="title-wrap">
          <div className="title">
            <h1 className="name">MOHSEN</h1>
            <h1>haghighat khah</h1>
            <div className="social-media">
              <h2>Front-end Developer</h2>

              <div className="social">
                <a target='_blank' href="https://stackoverflow.com/users/10825919/mosssiiiiiii">
                  <FaStackOverflow />{" "}
                </a>
                <a target='_blank' href='https://github.com/mosssiiiiiii'>
                  <FaGithub />{" "}
                </a>
                <a target="_blank" href='https://twitter.com/mosssiiiiiii'>
                  <FaTwitter />{" "}
                </a>
                <a target='_blank' href='https://www.linkedin.com/in/mohsen-haghighatkhah/'>
                  <FaLinkedin />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <Link to="/aboutMe/">About</Link>
        <Link to="/contact/">Contact</Link>
      </div>
    </div>
  )
}

export default Home
