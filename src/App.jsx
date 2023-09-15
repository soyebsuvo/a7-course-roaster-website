import { useState } from 'react'
import './App.css'
import Carts from './Components/Carts/Carts'
import Courses from './Components/Courses/Courses'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [remainingCredits, setRemainingCredits] = useState(20);
  const [usedCredits, setUsedCredits] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSelectToCart = (course) => {
    const isExist = selectedCourse.find(item => item.id === course.id);
    if (isExist) {      
      toast.error("already selsected");
      
    } else {
      if ((usedCredits + course.credit) > 20) {
        toast.error("Insufficient Credits");
      } else {
        setSelectedCourse([...selectedCourse, course]);
        setRemainingCredits(remainingCredits - course.credit);
        setUsedCredits(usedCredits + course.credit);
        setPrice(price + course.price);
      }

    }
  }
  // console.log(selectedCourse);
  return (
    <>

      <h1 className='text-3xl font-bold text-center p-2'>Course Registration</h1>
      <div className='md:flex'>
        <Courses handleSelectToCart={handleSelectToCart} />
        <Carts selectedCourse={selectedCourse} remainingCredits={remainingCredits} price={price} usedCredits={usedCredits} />
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  )
}

export default App;
