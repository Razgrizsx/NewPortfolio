import skills from "../../utils/skills";

const Skills = () => {
  return (
    <div
      id='skills'
      className='px-4 bg-slate-300 py-16 mx-auto  md:px-24 lg:px-8 lg:py-20 bg-transparent text-white'
    >
      <div className=' mb-10 md:mx-auto text-center  md:mb-12'>
        <h2 className=' mb-6 font-sans text-3xl font-bold leading-none tracking-tight  sm:text-4xl md:mx-auto'>
          <span className='relative inline-block'>
            <svg
              viewBox='0 0 52 24'
              fill='currentColor'
              className='absolute top-0 -right-28 z-0 hidden w-32 -mt-8 -ml-20  lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
            >
              <defs>
                <pattern
                  id='df31b9f6-a505-42f8-af91-d2b7c3218e5c'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'
                >
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect
                fill='url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)'
                width='52'
                height='24'
              />
            </svg>
            <span className='relative'>My Skills</span>
          </span>
        </h2>
      </div>
      <div className='grid gap-8 row-gap-8 lg:grid-cols-3'>
        {skills.map((skill, index) => (
          <div key={index} className='text-center'>
            <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24'>
              <i className={skill.icon} aria-hidden='true'></i>
            </div>
            <h6 className='mb-2 font-semibold leading-5 border-b-2 pb-4'>
              {skill.title}
            </h6>
            {skill.skills.map((item, index) => (
              <div
                key={index}
                className=' mb-2 text-sm mx-auto flex flex-row items-center justify-between w-28 gap-2'
              >
                <img
                  className='w-1/3 h-full'
                  alt='icon'
                  src={item?.icon || ""}
                ></img>
                <p className='w-full text-left whitespace-nowrap'>
                  {item?.name || "none"}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
