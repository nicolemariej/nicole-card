import React from "react"
import nicole from "./nicole.jpg"
import { MdEmail} from 'react-icons/md';
import { FaLinkedin} from 'react-icons/fa';

export default function Info(){
    return (
        <div className="info">
            <img src={nicole} alt="Nicole" className="nicole-image"/>
            <h1 className="name">Nicole Jones</h1>
            <h2 className="title">Frontend Developer</h2>
                <a className="website" href="https://www.nicodes.io/" target="blank">Nicodes.io</a>
            <div className="contact-buttons">
                <button className="email-btn" href="mailto: nicodesjones@gmail.com" target="blank"><span className="email-icon"><MdEmail /> </span> Email</button>
                <button className="linked-btn" href="https://www.linkedin.com/in/nicolemairejones/" target="blank"><span className="linked-icon"><FaLinkedin /> </span> LinkedIn</button>
            </div>
        
        </div>
    )
}