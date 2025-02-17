import Picture from "../../img/code.png";

const AboutMe = () => {
  return (
    <div id='about-me' className='relative bg-gray-900'>
      <div className='absolute top-0 left-0 right-0 bottom-0 z-0 opacity-10'></div>
      <div className='relative px-4 py-16 mx-auto  md:px-24 lg:px-8 lg:py-20 text-white'>
        <div className=' mb-10  md:mb-12'>
          <h2 className='text-center  mx-auto mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-100 sm:text-4xl md:mx-auto'>
            <span className='relative inline-block'>
              <svg
                viewBox='0 0 52 24'
                fill='white'
                className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
              >
                <defs>
                  <pattern
                    id='27df4f81-c854-45de-942a-fe90f7a300f9'
                    x='0'
                    y='0'
                    width='.135'
                    height='.30'
                  >
                    <circle cx='1' cy='1' r='.7' />
                  </pattern>
                </defs>
                <rect
                  fill='url(#27df4f81-c854-45de-942a-fe90f7a300f9)'
                  width='52'
                  height='24'
                />
              </svg>
              <span className='relative'>About</span>
            </span>{" "}
            Me
          </h2>
          <div className='w-full flex flex-wrap'>
            <div className='w-full lg:w-1/2 p-2 flex items-center'>
              <img
                src={Picture}
                alt='code'
                className='mx-auto rounded-lg  shadow-md'
              />
            </div>
            <div className='w-full lg:w-1/2 flex flex-col justify-center p-2 py-8'>
              <p className='text-base text-gray-400 md:text-lg'>
                My name is Chris and I am a full stack developer. I have been
                working in the technology industry years and have developed a
                keen eye for details. In my free time, I enjoy listening to
                music, drawing, chess and games, I have always had a love for
                these and find that it helps to relax and inspire me in my work.
              </p>
              <p className='mt-4 text-base text-gray-400 md:text-lg'>
                I initially started coding as a hobby, but quickly realized that
                it was something I was truly passionate about and decided to
                pursue a career change. It was a big decision, but I am excited
                to be able to do what I love and help others in the process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
