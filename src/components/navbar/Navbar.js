import { useState, useRef } from "react";
import { handleScroll } from "../../utils/handleScroll";
import useAutoHide from "auto-hide-hook";

const NavBar = () => {
  const menuRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useAutoHide(menuRef, setIsMenuOpen);
  return (
    <div className='fixed w-full bg-back-200 z-50'>
      <div className='px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='relative flex items-center justify-between'>
          <a
            href='/'
            aria-label='ChrisDev'
            title='ChrisDev'
            className='inline-flex items-center'
          >
            <i className='mr-2 text-2xl text-red-accent-400 fa-solid fa-layer-group'></i>
            <span className='ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase'>
              ChrisDev
            </span>
          </a>
          <ul className='items-center hidden space-x-8 lg:flex'>
            <li>
              <a
                href='#about-me'
                onClick={handleScroll}
                className='font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-red-accent-200'
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href='#skills'
                onClick={handleScroll}
                className='font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-red-accent-200'
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href='#projects'
                onClick={handleScroll}
                className='font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-red-accent-200'
              >
                Projects
              </a>
            </li>
          </ul>
          <ul className='items-center hidden space-x-8 lg:flex'>
            <li>
              <a
                href='#contact-me'
                onClick={handleScroll}
                className='inline-flex opacity-90 hover:opacity-100 items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-accent-200  focus:shadow-outline focus:outline-none'
              >
                Contact Me
              </a>
            </li>
            <a
              href='https://drive.google.com/uc?export=download&id=1N3-yKox_nYXXRzTA1DRYIUdS2uUS4bNe'
              className='inline-flex opacity-90 hover:opacity-100 items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-accent-200  focus:shadow-outline focus:outline-none'
            >
              Download CV
            </a>
          </ul>

          <div className='lg:hidden' ref={menuRef}>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              className='p-2 -mr-1 transition duration-200 rounded'
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                />
                <path
                  fill='currentColor'
                  d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                />
                <path
                  fill='currentColor'
                  d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className='absolute top-0 left-0 w-full text-white'>
                <div className='p-5 bg-back-200 text-white border rounded shadow-sm'>
                  <div className='flex items-center justify-between mb-4'>
                    <div>
                      <a href='/' className='inline-flex items-center'>
                        <i className='mr-2 text-2xl text-red-accent-400 fa-solid fa-layer-group'></i>
                        <span className='ml-2 text-xl font-bold tracking-wide uppercase'>
                          ChrisDev
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className='space-y-4'>
                      <li>
                        <a
                          href='#about-me'
                          onClick={handleScroll}
                          className='font-medium tracking-wide  transition-colors duration-200 hover:text-red-accent-200'
                        >
                          About Me
                        </a>
                      </li>
                      <li>
                        <a
                          href='#skills'
                          onClick={handleScroll}
                          className='font-medium tracking-wide  transition-colors duration-200 hover:text-red-accent-200'
                        >
                          Skills
                        </a>
                      </li>
                      <li>
                        <a
                          href='#projects'
                          onClick={handleScroll}
                          className='font-medium tracking-wide  transition-colors duration-200 hover:text-red-accent-200'
                        >
                          Projects
                        </a>
                      </li>
                      <li>
                        <a
                          href='#contact-me'
                          onClick={handleScroll}
                          className='bg-red-accent-200 hover:text-red-accent-400 rounded-md font-medium tracking-wide text-white px-4 py-2'
                        >
                          Contact Me
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
