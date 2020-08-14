import React from "react"
import { exprience } from "../api/exprience"
const Exprience = () =>
  exprience.map((item, index) => (
    <div className="exprience">
      <h2>
        {item.title}  <span>({item.contract})</span>
      </h2>
      <h3>
        {item.companyName}
        <span>{item.date}</span>
      </h3>
      <h4>{item.description}</h4>
      <ul>
        {item.responsiblitites.map((rsp, index) => (
          <li>{rsp}</li>
        ))}
      </ul>
    </div>
  ))

export default Exprience
