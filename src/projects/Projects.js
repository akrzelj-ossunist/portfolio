import React from 'react'
import './project.css'

export default function Projects( {showProjects} ) {
    const Projects = [
        {
            key: 1,
            name: 'Portfolio',
            link: 'https://github.com/akrzelj-ossunist/portfolio',
            lang: 'ReactJS',
        },
        {
            key: 2,
            name: 'CV-web-app',
            link: 'https://github.com/akrzelj-ossunist/CV-web-app',
            lang: 'React/Node/MongoDB',
        },
        {
            key: 3,
            name: 'React-node-app',
            link: 'https://github.com/akrzelj-ossunist/React-node',
            lang: 'React/Node',
        },
        {
            key: 4,
            name: 'Websites',
            link: 'https://github.com/akrzelj-ossunist/Websites',
            lang: 'HTML/CSS/JS',
        },
    ]
    const PrintProjects = () => {
        return(
            Projects.map(el => 
            <li className='block' key={el.key}>
                <div>
                    <a href={el.link}>{el.name}</a>
                    <p><span className='dotJS'></span>{el.lang}</p>
                </div>
            </li>
            )
        )
    }
  return (
    <div>
        <a name='Projects'></a>
        <ul style={showProjects} className='Projects'>
            <PrintProjects />
        </ul>
    </div>
  )
}
