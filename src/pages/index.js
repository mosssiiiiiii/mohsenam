import React from "react"
import { Link } from "gatsby"
import "./../styles/home.scss"
import SEO from "../components/seo"
import img from "./../images/profile.jpg"
import { FaStackOverflow , FaGithub , FaTwitter , FaLinkedin} from "react-icons/fa"
const Home = () => {
  const height = window.innerHeight
  return (
    <div className="container" style={{ maxHeight: height, height: height }}>
      <SEO title="Mohsen Haghighatkhah Portfolio" />

      <div className="intru-wrap">
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
                <h3>< FaStackOverflow /> </h3>
                <h3>< FaGithub /> </h3>
                <h3>< FaTwitter /> </h3>
                <h3>< FaLinkedin /> </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
