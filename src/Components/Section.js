import React,{useState} from 'react'
import "./Section.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Confetti from 'react-confetti';
export default function Section() {
  const [celebrate, setCelebrate] = useState(false);
  function handleCelebrate() {
    toast("Welcome to engineerHub!!.");
    setCelebrate(true);
    setTimeout(() => setCelebrate(false), 3000); // Hide the confetti after 3 seconds
  }
  
  return (
    <div className='section'>
      <div class="content">
        <h2>Hello</h2>
        <h2>Hello</h2>
      </div>
      <ToastContainer className="alert" position="top-center" toastStyle={{ marginTop: '100px' }} />
      <button className='section-button' onClick={handleCelebrate}>Click me</button>
       {celebrate && <Confetti width={window.innerWidth} height={window.innerHeight} />}
    </div>
  )
}
