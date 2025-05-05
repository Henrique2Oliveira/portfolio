import data from '../data/data.json';

function Main() {
  const skills = data.skills; // Access the skills array
  const projects = data.projects; // Access the skills array

  return (
    <section className="min-h-screen p-4">
      <h2 className="font-bold text-2xl mb-4">My Skill Tree</h2>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {skills.map((skill) => (
          <p
            key={skill.name}
            className=" rounded-full px-2 text-sm md:text-xl md:px-4 py-1 text-white font-medium shadow-2xl hover:scale-105 transition duration-100 ease-in-out"
            style={{ backgroundColor: skill.color }}
          >
            {skill.name}
          </p>
        ))}
      </div>
      <h2 className="font-bold text-2xl mb-4">My Projects</h2>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {projects.map((project) => (
          <div className='bg-[#060915] rounded-3xl p-6 flex flex-col items-center gap-2 max-w-[300px] md:max-w-[500px] ' key={project.name}>
            <p
              key={project.name}
              className="rounded-full px-4 py-1 text-white font-medium shadow-2xl hover:scale-105 transition duration-100 ease-in-out"
            >
              {project.name}
            </p>
            <img src={project.image} alt={project.name} className='w-60 h-auto rounded-sm' />
            <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {project.tags.map((skill) => (
                <p
                  key={skill}
                  className="bg-[#2a3f91] rounded-full px-2 text-sm md:text-xl md:px-4 py-1 text-white font-medium shadow-2xl hover:scale-105 transition duration-100 ease-in-out"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4">

      </div>
    </section>
  )
}

export default Main