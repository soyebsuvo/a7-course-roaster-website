import PropTypes from 'prop-types';


export default function Cart({course}) {
  return (   
        <li className='font-medium py-1'>{course.course_name}</li>
    )
}

Cart.propTypes = {
    course:PropTypes.object.isRequired
}