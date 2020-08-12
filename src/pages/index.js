import React from "react"
import { Link } from "gatsby"
import "./../styles/home.scss"
import SEO from "../components/seo"

const Home = () => {
  const height = window.innerHeight
  console.log(height)
  return (
    <div className="container" style={{ maxHeight: height, height: height }}>
      <SEO title="Mohsen Haghighatkhah Portfolio" />

      <div className="intru-wrap">
        <div className="image-wrap">
          <div className="image"></div>
        </div>
        <div className="title-wrap">
          <div className="title">
            <h1 className='name'>MOHSEN</h1>
            <h1>haghighat khah</h1>
            <div className='social-media'>
            <h2>Front-end Developer</h2>
            
            <div>
            <h3>hello</h3>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
