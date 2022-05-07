import React from 'react'
import './expirience.css'
import high from './school-bag.png'
import school from './school.png'
import cap from './graduation-hat.png'
import hat from './graduation-hat1.png'
import work from './work.png'
import calendar from './calendar.png'
import building from './building.png'
import working from './working.png'
import skill from './skill.png'
import coding from './coding.png'
import candidate from './candidate.png'
import lang from './language.png'

export default function Expirience() {

    return (
        <div className='exp'>
            <div>
                <div className='Education'>
                    <img src={hat} width={42} height={42}></img>
                    <h1>Education</h1>
                </div>
                <div className='high-school'>
                    <div className='high'>
                        <img src={high} width={27} height={30}></img>
                        <p>09.2013 - 05.2017</p>
                    </div>
                    <div className='high'>
                        <img src={school} width={27} height={30}></img>
                        <p>Technical school Split</p>
                    </div>
                    <div className='high'>
                        <img src={cap} width={27} height={30}></img>
                        <p>Technician for vehicles</p>
                    </div>
                </div>
                <div className='college'>
                    <div className='high'>
                        <img src={high} width={27} height={30}></img>
                        <p>10.2020 - present</p>
                    </div>
                    <div className='high'>
                        <img src={school} width={27} height={30}></img>
                        <p>University department of professional studies, Split</p>
                    </div>
                    <div className='high'>
                        <img src={cap} width={27} height={30}></img>
                        <p>Bachelor of Science (B.S.) - Information technology</p>
                    </div>
                </div>
                <div className='Expirience'>
                    <img src={work} width={42} height={42}></img>
                    <h1>Expirience</h1>
                </div>
                <div className='high-school'>
                    <div className='high'>
                        <img src={calendar} width={27} height={30}></img>
                        <p>11.2017 - 02.2018</p>
                    </div>
                    <div className='high'>
                        <img src={building} width={27} height={30}></img>
                        <p>T-com</p>
                    </div>
                    <div className='high'>
                        <img src={working} width={27} height={30}></img>
                        <p>Market sales</p>
                    </div>
                </div>
                <div className='college'>
                    <div className='high'>
                        <img src={calendar} width={27} height={30}></img>
                        <p>05.2018 - 10.2021</p>
                    </div>
                    <div className='high'>
                        <img src={building} width={27} height={30}></img>
                        <p>Le meridien hotel lav</p>
                    </div>
                    <div className='high'>
                        <img src={working} width={27} height={30}></img>
                        <p>Technical maintenance</p>
                    </div>
                </div>
                <div className='Expirience'>
                    <img src={skill} width={42} height={42}></img>
                    <h1>Skill</h1>
                </div>
                <div className='high-school'>
                    <div className='high'>
                        <img src={coding} width={27} height={30}></img>
                        <p>Software skills</p>
                    </div>
                    <div className='high'>
                        <ul className='softSkills'>
                            <li>Python - Solid knowledge</li>
                            <li>C - Really good knowledge</li>
                            <li>C++ - Really good knowledge</li>
                            <li>Javascript - solid knowledge</li>
                            <li>HTML/CSS - Pretty good knowledge</li>
                            <li>Databases - Solid knowledge</li>
                            <li>React.js - Fine knowledge</li>
                            <li>Node.js - Fine knowledge</li>
                        </ul>
                    </div>
                </div>
                <div className='college'>
                    <div className='high'>
                        <img src={candidate} width={27} height={30}></img>
                        <p>Skills</p>
                    </div>
                    <div className='high'>
                        <ul className='softSkills'>
                            <li>Good under pressure</li>
                            <li>Team player</li>
                            <li>Communicative</li>
                            <li>Persistent</li>
                            <li>Always trying to improve myself</li>
                        </ul>
                    </div>
                </div>
                <div className='college'>
                    <div className='high'>
                        <img src={lang} width={27} height={30}></img>
                        <p>Language skills</p>
                    </div>
                    <div className='high'>
                        <ul className='softSkills'>
                            <li>Croatian</li>
                            <li>English</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}