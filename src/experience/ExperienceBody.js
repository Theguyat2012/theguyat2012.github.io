// React
import React from 'react';

// Experience Components
import ExperienceCard from './ExperienceCard';

// Media
import whyfit from '../media/WhyFit.png';
import holman from '../media/Holman.png';


export default function ExperienceBody() {
    return (
        <div className='container'>
            <h1 className='display-5'>Experience</h1>
            <div className='row row-cols-1 row-cols-md-3'>
                <ExperienceCard
                    link='https://www.why.fit/'
                    src={whyfit}
                    company='Full Stack Developer'
                    points={["Utilized REST API to communicate across WhyFit's endpoints and work with third-party applications such as Slack and Microsoft Teams", "Develop relational databases with PostgreSQL and Ruby On Rails", "Fromulate UI designs with team members to create positive user experiences"]}
                    footer='March 29 - September 17, 2021'
                />
                <ExperienceCard
                    link='https://www.holmanauto.com/'
                    src={holman}
                    company='Quality Assurance Analyst'
                    points={["Implement automated test cases for multiple web applications using Tricentis Tosca", "Conduct manual integration and regression testing in DEV and QA environments before deploying to production", "Provide support for team members with testing and automation inqueries", "Communicate with various development and testing teams to troubleshoot problems"]}
                    footer='April 4 - September 16, 2022'
                />
                <ExperienceCard
                    company='Coming soon...'
                    points={['Currently seeking for my 3rd Drexel CO-OP']}
                    footer='Spring - Summer, 2023'
                />
            </div>
        </div>
    );
}
