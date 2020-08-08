import React from "react"
import { Link } from "gatsby"
import './../styles/styles.scss';

import SEO from "../components/seo"

const IndexPage = () => (
  <div className='container'>
    <SEO title="Mohsen Haghighatkhah Portfolio" />
    <h1 className='test'>Mohsen Haghighatkhah</h1>
    <p className='mode'>Frontend developer</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>

    </div>
    <Link to="/aboutMe/">About me</Link> <br />
  </div>
)

export default IndexPage
