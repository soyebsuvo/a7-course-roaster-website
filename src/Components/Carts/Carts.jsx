import Cart from "../Cart/Cart";
import PropTypes from 'prop-types';


export default function Carts({ selectedCourse, remainingCredits, usedCredits, price }) {
    return (
        <div className='md:w-1/4 py-4'>
            <div className="bg-white p-2 rounded-lg">
                <h1 className="text-md font-bold py-4 text-blue-600">Credit Hours Remaining {remainingCredits}hr</h1>
                <hr className="border-b border-gray-300" />
                <div className="py-4">
                    <h2 className="text-xl font-bold">Course Name</h2>
                    <ol className="py-3">
                        {
                            selectedCourse.map((course, index) => <Cart index={index} key={course.id} course={course} />)
                        }
                    </ol>
                </div>
                <hr className="border-b border-gray-300" />
                <h2 className="text-md font-bold py-4">Total Credit Hours : {usedCredits}</h2>
                <hr className="border-b border-gray-300" />
                <h2 className="text-md font-extrabold py-4">Total Price : {price} USD</h2>
            </div>
        </div>
    )
}

Carts.propTypes = {
    selectedCourse: PropTypes.array.isRequired,
    remainingCredits: PropTypes.number.isRequired,
    usedCredits: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
}