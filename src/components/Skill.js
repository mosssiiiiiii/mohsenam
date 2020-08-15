import React from "react"
import { skill } from "../api/skill"

const Skill = () => (
  <div className="skill">
    {skill.map((item, index) => (
      <div key='index' className="skill-box">
        <h3>{item.title}</h3>
        {
            item.details.map((dtl,index) =>
                <span>[{dtl}]</span>
            )
        }
      </div>
    ))}
  </div>
)

export default Skill
