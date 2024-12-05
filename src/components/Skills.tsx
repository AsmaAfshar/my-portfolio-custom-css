
import "../app/styles/skills.css";
import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='skills-div' >
      <div className='skills-grid' >
        <div data-aos="fade-down" className="skills-left">
         <h2 className='skills-heading'>Technologies I work with</h2>
         <p className='skills-text' >
            I have a solid foundation in web development, specializing in HTML, CSS and JavaScript. My experience 
            extends to framewoorks like React and Next.Js to create dynamic and user-friendly applications. I&rsquo;m  
            also proficient in Tailwind Cssfor efficient styling and desing. With a passion for learning. I stay 
            updated on the latest technologies to enhance my skills set and contribute effectively to projects.
         </p>
        </div>
        <div className="skills-right">
            <div className='skills-icon-grid'>
                <div className='skills-space'>
               <h2 data-aos="fade-down">TypeScript</h2>
               <h2 data-aos="fade-down">React.Js</h2>
               <h2 data-aos="fade-down">Next.Js</h2>
                </div>
                <div className='skills-space'>
               <h2 data-aos="fade-down">Tailwind</h2>
               <h2 data-aos="fade-down">CSS</h2>
               <h2 data-aos="fade-down">Node.Js</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;

