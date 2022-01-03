import React from 'react';
import { FaGithub, FaLink, FaNodeJs } from 'react-icons/fa';
import {
    ProjectDiv,
    Row,
    ServiceBox,
    ServiceBoxHeader,
    ServiceBoxP,
    A,
    BoxDiv,
} from './Styles';
import { Container, Common, H1 } from '../../SharedStyles/SharedStyles';
import { FaHtml5, FaReact, FaJs, FaCss3 } from 'react-icons/fa';
import { SiMongodb, SiNodeDotJs, SiRedux, SiHeroku } from 'react-icons/si';
import { v4 as uuidv4 } from 'uuid';

const Projects = () => {
    const projects = [
        {
            id: 0,
            project_name: 'Lifestyle Stores',
            image: 'https://github.com/aadityaneve/Portfolio/blob/master/public/ProjectImages/lifestylestores.png?raw=true',
            project_desc:
                'This is an E-Commerce website which speciaizes in selling clothes and styling products. The website provides 800 brands and 33,000 products of different types of clothes, watches, sunglasses, shoes etc.',
            deploy_link: 'https://aadityaneve.github.io/Clone-lifestylestores',
            repo_link: 'https://github.com/aadityaneve/Clone-lifestylestores',
            tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs />],
        },
        {
            id: 1,
            project_name: 'Plural Sight',
            image: 'https://github.com/aadityaneve/Portfolio/blob/master/public/ProjectImages/pluralsight.png?raw=true',
            project_desc:
                'Pluralsight is an online learning and workforce development platform that helps businesses and individuals adjust to changing technology. Pluralsight provide products to build tech skills & Get insights into your workflow.',
            deploy_link: 'https://aadityaneve.github.io/Clone-Pluralsight',
            repo_link: 'https://github.com/aadityaneve/Clone-Pluralsight',
            tech_stack: [
                <FaHtml5 />,
                <FaCss3 />,
                <FaJs />,
                <FaNodeJs />,
                <SiMongodb />,
                <SiHeroku />,
            ],
        },
        {
            id: 2,
            project_name: 'Movie-App',
            image: 'https://github.com/aadityaneve/Portfolio/blob/master/public/ProjectImages/movie-app.png?raw=true',
            project_desc:
                'A Movie platform that allows users to search and watch trailers of a wide variety of movies. This is a personal project.',
            deploy_link: 'https://aadityaneve.github.io/Movie-App',
            repo_link: 'https://github.com/aadityaneve/Movie-App',
            tech_stack: [
                <FaReact />,
                <FaNodeJs />,
                <SiMongodb />,
                <FaJs />,
                <SiHeroku />,
                <FaHtml5 />,
                <FaCss3 />,
            ],
        },
        {
            id: 3,
            project_name: 'Crypto-Tracker-App',
            image: 'https://github.com/aadityaneve/Portfolio/blob/master/public/ProjectImages/crypto-tracker-app.png?raw=true',
            project_desc:
                'A Crypto platform that allows users to search a wide variety of Crypto coins, and get details of it. This is a personal project.',
            deploy_link: 'https://aadityaneve.github.io/Crypto-Tracker-App',
            repo_link: 'https://github.com/aadityaneve/Crypto-Tracker-App',
            tech_stack: [<FaReact />, <FaJs />, <FaHtml5 />, <FaCss3 />],
        },
        {
            id: 4,
            project_name: 'Timer-Stopwatch',
            image: 'https://github.com/aadityaneve/Portfolio/blob/master/public/ProjectImages/timer-stopwatch.png?raw=true',
            project_desc:
                'Its a app where a user can Timer watch as well as Stopwatch. This is a personal project.',
            deploy_link: 'https://aadityaneve.github.io/Timer-Stopwatch',
            repo_link: 'https://github.com/aadityaneve/Timer-Stopwatch',
            tech_stack: [<FaReact />, <FaJs />, <FaHtml5 />, <FaCss3 />],
        },
    ];

    return (
        <Container className='projects'>
            <ProjectDiv>
                <Common>
                    <H1>Projects</H1>
                </Common>
                <Row>
                    {projects.map((item) => (
                        <BoxDiv key={uuidv4()}>
                            <ServiceBox>
                                <img
                                    src={item.image}
                                    alt='icon'
                                    style={{ width: '100%' }}
                                />
                                <div style={{ margin: '25px' }}>
                                    <ServiceBoxHeader
                                        style={{ textAlign: 'center' }}
                                    >
                                        {item.project_name}
                                    </ServiceBoxHeader>
                                    <ServiceBoxP>
                                        {item.project_desc}
                                    </ServiceBoxP>
                                    {/* <a href="">Read more</a> */}
                                    <div
                                        style={{
                                            margin: '20px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {item.tech_stack.map((item) => (
                                            <div
                                                key={uuidv4()}
                                                className='iconsTechStack'
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                    <A
                                        href={item.repo_link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <FaGithub /> Code
                                    </A>
                                    <A
                                        href={item.deploy_link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <FaLink /> Demo
                                    </A>
                                </div>
                            </ServiceBox>
                        </BoxDiv>
                    ))}
                </Row>
            </ProjectDiv>
        </Container>
    );
};

export default Projects;
