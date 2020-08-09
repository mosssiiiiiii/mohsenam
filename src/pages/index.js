import React from "react"
import { Link } from "gatsby"
import "./../styles/home.scss"
import SEO from "../components/seo"

const Home = () => {
  const height = window.innerHeight
  console.log(height)
  return (
    <div style={{ maxHeight: height }} className="container">
      <SEO title="Mohsen Haghighatkhah Portfolio" />
      <div className="row">
        <div className="box-wrap">
          <div className="box"></div>
          <div>
            <h1 className="name">Mohsen Haghighatkhah</h1>
            <p className="mode">Frontend developer</p>
          </div>
        </div>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
        <Link to="/aboutMe/">About me</Link> <br />
        <div className='social-wrap'>
            <h1>L</h1>
            <h1>L</h1>
            <h1>L</h1>
            <h1>L</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
