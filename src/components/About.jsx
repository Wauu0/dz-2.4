import React from 'react';
import Title from "./Title";

const About = ({info}) => {
    return (
        <div>
            <h1>{info.title}</h1>
            <p className={info.body}>{info.body}</p>
            <h4>About</h4>
        </div>
    );
};

export default About;