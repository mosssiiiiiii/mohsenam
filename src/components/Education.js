import React from 'react';
import { education } from '../api/education';

const Education = () => (
    <div className='education'>
            {
                education.map((edc) =>
                    <React.Fragment>
                        <h2>{edc.title}</h2>
                        <h4>{edc.university} | <span>{edc.date}</span></h4>
                        <h5>{edc.thesis}</h5>
                    </React.Fragment>
                )
            }
    </div>
)


export default Education;