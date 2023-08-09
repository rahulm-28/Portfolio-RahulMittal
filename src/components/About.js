import React from 'react'
import aboutImage1 from '../assets/images/aboutImage1.png'

export const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-img">
          <img
            src={aboutImage1}
            alt="About image"
            className="lgw-[80%] md:ml-auto"
          />
        </div>

        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>
          <p className="pb-5">
            Hi, I am Rahul Mittal. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>
          <p className="pb-5">
            In backend I know Node.js, Express.js, MongoDB, and Mongoose
          </p>
          <p className="pb-5">
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged
          </p>
        </div>
      </div>
    </section>
  )
}
