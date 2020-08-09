import React from "react"
import { Link } from "gatsby"
import "./../styles/home.scss"
import SEO from "../components/seo"

const IndexPage = () => (
  <div className="container">
       <SEO title="Mohsen Haghighatkhah Portfolio" />
    <div className="row">
      <div className='box'></div>
      <h1 className="name">Mohsen Haghighatkhah</h1>
      <p className="mode">Frontend developer</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <Link to="/aboutMe/">About me</Link> <br />
    </div>
  </div>
)

export default IndexPage
