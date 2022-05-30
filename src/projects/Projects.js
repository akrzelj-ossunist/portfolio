import React from 'react'
import './project.css'

export default function Projects( {showProjects} ) {
  return (
    <div>
        <a name='Projects'></a>
        <ul style={showProjects} className='Projects'>
            <li className='block'>
                <div>
                    <a href='https://github.com/akrzelj-ossunist/portfolio'>Portfolio</a>
                    <p><span className='dotJS'></span>ReactJS</p>
                </div>
            </li>
            <li className='block'>
                <div>
                    <a href='https://github.com/akrzelj-ossunist/CV-web-app'>CV-web-app</a>
                    <p><span className='dotJS'></span>React/Node/MongoDB</p>
                </div>
            </li>
            <li className='block'>
                <div>
                    <a href='https://github.com/akrzelj-ossunist/React-node'>React-node-app</a>
                    <p><span className='dotJS'></span>React/Node</p>
                </div>
            </li>
            <li className='block'>
                <div>
                    <a href='https://github.com/akrzelj-ossunist/Websites'>Websites</a>
                    <p><span className='dotHTML'></span>HTML/CSS/JS</p>
                </div>
            </li>
        </ul>
    </div>
  )
}
