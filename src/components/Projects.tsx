import data from '../data/data.json';
import { FaArrowUp, FaTree, FaBook, FaTools } from "react-icons/fa";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { motion } from 'framer-motion';
import { SiReaddotcv } from "react-icons/si";
import WHOAMI from './WHOAMI';
import PrevWork from './PrevWork';

function Main() {
  const skills = data.skills; // Access the skills array
  const projects = data.projects; // Access the projects array
  const experience = data.experience; // Access the projects array
  const tools = data.tools; // Access the projects array

  return (
    <section className="min-h-screen md:px-4 py-10">
      <WHOAMI />
      <h2 className="font-bold  text-2xl md:text-3xl mb-4">My Skill Tree <FaTree className='inline-block mb-2' /> </h2>

      <div className="flex flex-wrap flex-0 justify-center gap-4  md:mx-25 mb-10 ">
        {skills.map((skill) => (
          <p
            key={skill.name}
            className="rounded-full px-2 text-sm md:text-xl md:px-4 py-1 text-white font-medium shadow-2xl hover:scale-115 transition duration-200 ease-in-out"
            style={{ backgroundColor: skill.color }}
          >
            {skill.name}
          </p>
        ))}
      </div>

      <h2 className="font-bold text-2xl md:text-3xl mb-4">My Projects <BsFillGrid1X2Fill className='inline-block mb-2' /></h2>
      <div className="flex flex-wrap justify-center gap-5 mb-10">
        {projects.map((project) => (
          <div
            className="bg-secondary md:w-1/3 m-1 md:m-6 flex rounded-bl-2xl rounded-tr-2xl flex-col items-center gap-4 max-w-[300px] md:min-w-[500px] shadow-2xl hover:scale-102 ease-in-out cursor-pointer rounded-2xl border-2 border-dashed border-blackpx-6 py-3 font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
            key={project.name}
          >
            <img src={project.image} className="w-25 h-25" alt={project.name} />
            <h3
              className=" px-6 py-6 mb-4 w-full text-3xl text-white font-bold shadow-2xl text-left"
            >
              {project.name}
              <span className='block text-sm font-light text-gray-200'> ({project.subcategory})</span>
            </h3>

            <p className="px-5 text-sm">{project.description}</p>
            <div className="flex flex-row items-center gap-2">
              {project.subcategory == "Web App" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" rounded-full px-4 m-4 bg-white hover:bg-[#ffffff] py-2 text-sm md:text-xl hover:text-black text-black font-medium hover:scale-105 transition duration-100 ease-in-out"
                >
                  Source Code
                </a>)}
              <a
                href={project.livelink}
                target="_blank"
                rel="noopener noreferrer"
                className=" rounded-full px-4 m-4 bg-white hover:bg-[#66e440] py-2 text-sm md:text-xl hover:text-black text-black font-medium hover:scale-105 transition duration-100 ease-in-out"
              >
                See Live
              </a>
            </div>


            <div className="text-left m-5">
              <p className="font-bold text-2xl mb-2">Tech Stack</p>
              <div className="flex flex-wrap justify-start gap-4">
                {project.tags.map((skill) => (
                  <p
                    key={skill}
                    className="bg-accent rounded-full px-4 py-1 text-sm md:text-xl md:px-6 text-white font-medium shadow-2xl hover:shadow-none hover:scale-105 transition duration-100 ease-in-out"
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="font-bold  text-2xl md:text-3xl mb-15 ">My Background and Experiences <FaBook className='inline-block mb-2' /></h2>


      <div className="flex flex-wrap justify-center gap-5 mb-10">
        {experience.map((experience) => (
          <div className="flex bg-dark  md:w-1/3 pb-6 flex-col  items-center gap-4 max-w-[300px] md:min-w-[500px] shadow-2xl hover:scale-102 ease-in-out cursor-pointer rounded-2xl border-2 border-dashed border-blackpx-6 py-3 font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none" key={experience.name}>
            <p className="px-5 py-2 w-full text-2xl text-white font-bold text-left shadow-2xl"><a href={experience.link}>{experience.name}</a></p>
            <p className="p-4 text-sm text-left">{experience.description}</p>
            <div className="text-left m-5">
              <div className="flex flex-wrap justify-start gap-4">
                {experience.tags.map((skill) => (
                  <p
                    key={skill}
                    className="bg-accent rounded-full px-4 py-1 text-sm md:text-xl md:px-6 text-white font-medium shadow-2xl hover:shadow-none hover:scale-105 transition duration-100 ease-in-out"
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </div>
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-secondary hover:bg-[#ffffff] rounded-full px-4 py-2 text-sm md:text-xl hover:text-black text-white font-medium hover:scale-105 transition duration-100 ease-in-out"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>

      <PrevWork/>

      <div>
        <h2 className='font-bold  text-2xl md:text-3xl mb-15 '>Tools & Workflow <FaTools className='inline-block mb-2' /> </h2>
        <div className='flex flex-wrap justify-center gap-5 mb-10'>
          {tools.map((tool) => (
            <div key={tool.name} className="flex bg-dark  md:w-1/3 pb-6 flex-col  items-center gap-4 max-w-[300px] md:min-w-[500px] shadow-2xl hover:scale-102 ease-in-out cursor-pointer rounded-2xl border-2 border-dashed border-blackpx-6 py-3 font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
              <img src={tool.image} alt={tool.name} className="max-w-32 h-auto" />
              <p className="text-md">{tool.name}</p>
              <p className="text-sm text-gray-200">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>



      <div className="flex justify-center flex-col items-center gap-4 mt-10">
        <motion.button
          initial={{ scale: 0, x: -200 }}
          animate={{ scale: 1, x: 0, transition: { duration: 1 } }}
          whileHover={{ scale: 1.1, boxShadow: '0px 0px 10px rgba(0,0,0,0.3)' }}
          className="rounded px-4 p-3 m-4 bg-white hover:bg-[#7495e9] transition-colors cursor-pointer hover:text-white w-fit md:text-2xl text-black shadow-[-1px_6px_0px_0px_rgba(0,_0,_0,_0.9)] "><a href='/portfolio/cv_henrique_oliveira.pdf'><SiReaddotcv className="inline-block mr-2" />Download CV</a></motion.button>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-primary hover:bg-secondary rounded-full cursor-pointer  px-6 py-2 text-sm md:text-lg hover:text-white text-white font-medium shadow-2xl hover:scale-105 transition duration-100 ease-in-out"
        >
          Back to Top <FaArrowUp className="inline-block ml-2" />
        </button>
      </div>
    </section>
  );
}

export default Main;

