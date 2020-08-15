import React from "react"
import { FaMobileAlt, FaRegEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import img from "./../images/profile.jpg"
const Information = () => (
  <React.Fragment>
    <div className="about-me-wrap">
      <div className="image-wrap">
        <img className="image" src={img} />
      </div>
      <div className="desc-wrap">
        <h1>
          <span>MOHSEN</span> haghighat khah
        </h1>
        <h3>Front-end developer</h3>
        <p>
          A motivated Frontend developer with over 6 years of experience in
          Javascript and react. Love to solve new challenges and find solutions.
          eager to learn on a daily basis that knows this career is a nonstop
          learning process. I want to improve myself every day and associate
          with a vibrant organization in order to fully utilize my knowledge,
          skills and to contribute to its overall growth
        </p>
      </div>
    </div>
    <div className="information-wrap">
      <a href="tel:+989129467505" className="item">
        <FaMobileAlt /> <span>+98 912 9467505</span>
      </a>
      <a href="mailto: haghighatkhah91@gmail.com" className="item">
        <FaRegEnvelope /> <span>haghighatkhah91@gmail.com</span>
      </a>
      <div className="item">
        <FaMapMarkerAlt /> <span>IRAN - Tehran</span>
      </div>
    </div>
  </React.Fragment>
)

export default Information
