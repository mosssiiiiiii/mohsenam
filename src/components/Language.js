import React from "react"
import { language } from "../api/language"
const Language = () =>
  language.map((item, index) => (
    <div className="skill">
      <div key="index" className="skill-box">
        <h3>{item.language}  <span> - {item.level}</span></h3>

      </div>
    </div>
  ))

export default Language
