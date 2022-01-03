import React, { useRef } from 'react';
import nodemailer from 'nodemailer';
import {
    ContactContainer,
    ContactForm,
    InputInput1,
    InputInput2,
    A,
    Column,
    P,
    LinksCont,
} from './Styles';
import { Container, Common, H1 } from '../../SharedStyles/SharedStyles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    FaPhone,
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaHackerrank,
    FaMedium,
} from 'react-icons/fa';
import { SiGmail, SiLeetcode } from 'react-icons/si';
import { v4 as uuidv4 } from 'uuid';

const footerData = [
    {
        id: 0,
        title: 'Mobile',
        display: '+91 7620220202',
        link: 'tel:+917620220202',
        icon: (
            <FaPhone style={{color: 'grey'}} className='commonIconsFooter' />
        ),
    },
    {
        id: 1,
        title: 'Email',
        display: 'aditya.neve@gmail.com',
        link: 'mailto:aditya.neve@gmail.com',
        icon: <SiGmail style={{color: 'grey'}} className='commonIconsFooter' />,
    },
    {
        id: 2,
        title: 'Github',
        display: 'Github',
        link: 'https://github.com/aadityaneve',
        icon: <FaGithub style={{color: 'grey'}} className='commonIconsFooter' />,
    },
    {
        id: 3,
        title: 'LinkedIn',
        display: 'LinkedIn',
        link: 'https://www.linkedin.com/in/aadityaneve',
        icon: <FaLinkedin style={{color: 'grey'}} className='commonIconsFooter' />,
    },
    {
        id: 4,
        title: 'Twitter',
        display: 'Twitter',
        link: 'https://twitter.com/aadityaneve',
        icon: <FaTwitter style={{color: 'grey'}} className='commonIconsFooter' />,
    },
    {
        id: 5,
        title: 'Medium',
        display: 'Medium',
        link: 'https://medium.com/@aadityaneve',
        icon: <FaMedium style={{color: 'grey'}} className='commonIconsFooter' />,
    },
    /* {
        id: 6,
        title: 'HackerRank',
        display: 'HackerRank',
        link: 'https://hackerrank.com/aadityaneve',
        icon: <FaHackerrank className='commonIconsFooter' />,
    },
    {
        id: 7,
        title: 'LeetCode',
        display: 'LeetCode',
        link: 'https://leetcode.com/aadityaneve',
        icon: <SiLeetcode className='commonIconsFooter' />,
    }, */
];

const Contact = () => {
    const handleSend = (e) => {
        e.preventDefault();
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            // host: 'smtp.ethereal.email',
            // port: 587,
            // secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.GMAIL_MAIL, // generated ethereal user
                pass: process.env.GMAIL_PASSWORD, // generated ethereal password
            },
        });

        let mailOptions = {
            from: `${e.target.email.value}`,
            to: 'aditya.neve@gmail.com',
            subject: `${e.target.subject.value}`,
            text: `${e.target.message.value}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Mail Sending Failed.');
            } else {
                console.log('E-Mail Sent ', info.response);
            }
        });

        e.target.reset();
    };
    return (
        <Container className='contact'>
            <Common>
                <H1>Contact</H1>
            </Common>
            <ContactContainer>
                <Column>
                    <ContactForm onSubmit={handleSend}>
                        <InputInput1
                            required
                            name='name'
                            type='text'
                            placeholder='Name'
                        />
                        <InputInput1
                            required
                            name='email'
                            type='email'
                            placeholder='Email'
                        />
                        <InputInput1
                            required
                            name='subject'
                            type='text'
                            placeholder='Subject'
                        />
                        <InputInput2
                            required
                            name='message'
                            placeholder='Message'
                        ></InputInput2>
                        <A value='Send'>SEND</A>
                        <ToastContainer />
                    </ContactForm>
                </Column>
                <Column>
                    <LinksCont>
                        {footerData.map((item) => (
                            <div key={uuidv4()} title={item.title} style={{ display: 'flex' }}>
                                <div>
                                    {/* <a target="_blank" rel="noreferrer" href={item.link}  style={{textDecoration:"none"}}> */}
                                    {item.icon}
                                    {/* </a> */}
                                </div>
                                <div style={{ marginTop: '-5px' }}>
                                    <a
                                        target='_blank'
                                        rel='noreferrer'
                                        href={item.link}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <P>{item.display}</P>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </LinksCont>
                </Column>
            </ContactContainer>
        </Container>
    );
};

export default Contact;
