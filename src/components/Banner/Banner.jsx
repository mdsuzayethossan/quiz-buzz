import React from 'react';
import Lottie from 'lottie-react';
import quiz from '../../assets/quiz';
const Banner = () => {
  return (
  <section>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="max-w-lg">
        <Lottie animationData={quiz} loop={true} />
        </div>
        <div className="text-left">
          <h1 className="text-5xl font-bold">Build Skills With Experts Any Time, Anywhere</h1>
          <p className="py-6">Think about the skills you described in your significant experiences and select those skills from the lists. To select a skill, click the checkbox beside it.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Banner