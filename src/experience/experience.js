import React from 'react'
import './experience.css'
import high from './img/school-bag.png'
import school from './img/school.png'
import cap from './img/graduation-hat.png'
import hat from './img/graduation-hat1.png'
import work from './img/work.png'
import calendar from './img/calendar.png'
import building from './img/building.png'
import working from './img/working.png'
import skill from './img/skill.png'
import coding from './img/coding.png'
import candidate from './img/candidate.png'
import lang from './img/language.png'

export default function Experience() {
    const education = [
        {
            key: 1,
            date: '09.2013 - 05.2017',
            school: 'Technical school Split',
            major: 'Technician for vehicles'
        },
        {
            key: 2,
            date: '10.2020 - present',
            school: 'University department of professional studies, Split',
            major: 'Bachelor of Science (B.S.) - Information technology'
        },
    ]
    const experience = [
        {
            key: 1,
            date: '11.2017 - 02.2018',
            firm: 'T-com',
            job: 'Market sales'
        },
        {
            key: 2,
            date: '05.2018 - 10.2021',
            firm: 'Le meridien hotel lav',
            job: 'Hotel maintenance'
        },
    ]
    const skills = {
        software: ['Python - Solid knowledge', 'C - Really good knowledge', 'C++ - Really good knowledge', 'Javascript - solid knowledge', 
                            'HTML/CSS - Pretty good knowledge', 'Databases - Solid knowledge', 'React.js - Pretty good knowledge', 'Node.js - Pretty good knowledge'],
        personal: ['Good under pressure', 'Team player', 'Communicative', 'Persistent', 'Always trying to improve myself'],
        language: ['Croatian', 'English'],
    }

    const PrintEducation = () => {
        const eduList = education.map(el => 
            <div className='college' key={el.key}>
                <div className='high'>
                    <img src={high} width={27} height={30}></img>
                    <p>{el.date}</p>
                </div>
                <div className='high'>
                    <img src={school} width={27} height={30}></img>
                    <p>{el.school}</p>
                </div>
                <div className='high'>
                    <img src={cap} width={27} height={30}></img>
                    <p>{el.major}</p>
                </div>
            </div>
        )
        return(
            <>
                <a name="Education"></a>
                <div className='Experience'>
                    <img src={hat} width={42} height={42}></img>
                    <h1>Education</h1>
                </div>
                {eduList}
            </>
        )
    }
    const PrintExperience = () => {
        const expList = experience.map(el => 
            <div className='college' key={el.key}>
                <div className='high'>
                    <img src={calendar} width={27} height={30}></img>
                    <p>{el.date}</p>
                </div>
                <div className='high'>
                    <img src={building} width={27} height={30}></img>
                    <p>{el.firm}</p>
                </div>
                <div className='high'>
                    <img src={working} width={27} height={30}></img>
                    <p>{el.job}</p>
                </div>
            </div>
            )
        return(
            <>
            <a name="Experience"></a>
            <div className='Experience'>
                <img src={work} width={42} height={42}></img>
                <h1>Experience</h1>
            </div>
            {expList}
            </>
        )
    }
    const PrintSkills = () => {
        const printSoftSkills = skills.software.map(el => <li key={el}>{el}</li>)
        const printPersonalSkills = skills.personal.map(el => <li key={el}>{el}</li>)
        const printLanguageSkills = skills.language.map(el => <li key={el}>{el}</li>)
        return(
            <>
                <a name="Skills"></a>
                <div className='Experience'>
                    <img src={skill} width={42} height={42}></img>
                    <h1>Skills</h1>
                </div>
                <div className='college'>
                    <div className='high'>
                        <img src={coding} width={27} height={30}></img>
                        <p>Software skills</p>
                    </div>
                    <div className='high'>
                        <ul className='softSkills'>
                            {printSoftSkills}
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
                            {printPersonalSkills}
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
                            {printLanguageSkills}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className='exp'>
            <PrintEducation />
            <PrintExperience />
            <PrintSkills />
            <a name="Social"></a>
        </div>
    )
}