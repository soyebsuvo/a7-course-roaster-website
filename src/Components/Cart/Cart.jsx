import PropTypes from 'prop-types';


export default function Cart({ course, index }) {
    return (
        <li className='font-medium py-1 text-gray-500'>{index + 1}. {course.course_name}</li>
    )
}

Cart.propTypes = {
    course: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}