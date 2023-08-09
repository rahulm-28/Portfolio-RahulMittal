import Hero3 from '../assets/images/Hero3.png'
import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from 'react-icons/ai'

export const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">R</span>ahul <br />
            Frontend Developer
          </h1>

          <p className="py-5">I am proficient in JavaScript, React.js</p>

          <div className="flex py-7 ">
            <a
              href="https://twitter.com/"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {' '}
              <AiOutlineTwitter size={40} />{' '}
            </a>
            <a
              href="https://www.youtube.com/"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {' '}
              <AiOutlineYoutube size={40} />{' '}
            </a>
            <a
              href="https://www.facebook.com/"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {' '}
              <AiOutlineFacebook size={40} />{' '}
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>

        <div className="hero-img">
          <img
            src={Hero3}
            alt="coding illustration"
            className="lgw-[100%] ml-auto"
          />
        </div>
      </div>
    </section>
  )
}
