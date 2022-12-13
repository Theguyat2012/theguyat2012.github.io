// React
import React from 'react';

// Media
import whyfit from './media/WhyFit.png';
import holman from './media/Holman.png';


export function ExperienceText() {
    return (
        <div className='container mb-4'>
            <h1 className='display-5'>My Experience</h1>
            <div className='row'>
                <ExperienceCard
                    link='https://www.why.fit/'
                    src={whyfit}
                    company='WhyFit'
                    points={["Utilized REST API to communicate across WhyFit's endpoints and work with third-party applications such as Slack and Microsoft Teams", "Develop relational databases with PostgreSQL and Ruby On Rails", "Fromulate UI designs with team members to create positive user experiences"]}
                    footer='Full Stack Developer | Mar 29 - Sep 17, 2021'
                />
                <ExperienceCard
                    link='https://www.holmanauto.com/'
                    src={holman}
                    company='Holman'
                    points={["Implement automated test cases for multiple web applications using Tricentis Tosca", "Conduct manual integration and regression testing in DEV and QA environments before deploying to production", "Provide support for team members with testing and automation inqueries", "Communicate with various development and testing teams to troubleshoot problems"]}
                    footer='Quality Assuarance Analyst | Apr 4 - Sep 16, 2022'
                />
                <ExperienceCard
                    company='Coming soon...'
                    points={['Currently seeking for my third Drexel co-op.']}
                    footer='Third CO-OP'
                />
            </div>
        </div>
    );
}

function ExperienceCard(props) {
    return (
        <div className='col'>
            <div className='card h-100'>
                <a href={props.link} target='_blank' rel='noreferrer'>
                    <img className='card-img-top border-bottom h-rem-10 object-fit-contain' src={props.src} alt={props.company}></img>
                </a>
                <div className='card-body'>
                    <h5 className='card-title'>{props.company}</h5>
                    <ExperiencePoints
                        points={props.points}
                    />
                </div>
                <div className='card-footer'>{props.footer}</div>
            </div>
        </div>
    );
}

function ExperiencePoints(props) {
    if (props.points) {
        let elements = props.points.map(point => <li>{point}</li>);

        return (
            <ul>
                {elements}
            </ul>
        );
    }
}
