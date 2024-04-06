import React from 'react'
import './Programs.css'
import program_1 from '../../../assets/programs-1.jpg'
import program_2 from '../../../assets/programs-2.jpg'
import program_3 from '../../../assets/programs-3.jpg'

const Programs = () => {
  return (
    <div className="programs">
        <div className="program">
            <img src={program_1} alt="" />
        </div>
        <div className="program">
            <img src={program_2} alt="" />
        </div>
        <div className="program">
            <img src={program_3} alt="" />
        </div>
    </div>
  )
}

export default Programs