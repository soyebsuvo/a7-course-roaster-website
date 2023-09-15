import { useEffect, useState } from "react"
import Course from "../Course/Course"
import PropTypes from 'prop-types';


export default function Courses({handleSelectToCart}) {
    const [courses , setCourses ] = useState([])
    useEffect(()=>{
        fetch("./courses.json")
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
  return (
    <div className="md:w-3/4">
      {/* <h1 className='text-2xl font-bold'>Courses : {courses.length}</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {
            courses.map(course => <Course handleSelectToCart={handleSelectToCart} key={course.id} course={course}/>)
        }
      </div>
    </div>
  )
}

Courses.propTypes = {
    handleSelectToCart: PropTypes.func.isRequired
}
