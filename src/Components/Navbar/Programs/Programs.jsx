import React from 'react'
import './Programs.css'
import program_1 from '../../../assets/programs-1.jpg'
import program_2 from '../../../assets/programs-2.jpg'
import program_3 from '../../../assets/programs-3.jpg'

import program_icon_1 from '../../../assets/program-icon-1.png'
import program_icon_2 from '../../../assets/program-icon-2.png'
import program_icon_3 from '../../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className="programs">
        <div className="program">
            <img src={program_1} alt="" />
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>Exhibition Spaces</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="" />
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>Art Collections</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt="" />
            <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>Events & Workshops</p>
            </div>
        </div>
    </div>
  )
}

export default Programs