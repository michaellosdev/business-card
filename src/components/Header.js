import React from "react";
import photo from '../photo.png';
import linkedin from '../linkedin.png';
import email from '../email.png';


export default function Header() {
    return (
        <div className='header--container'>
            <img src={photo} alt="photography of me" className="photo" />
            <div className="name--container">
                <h1 className="name">Mikhail Loskutov</h1>
                <h2 className="job--title"> Jr. Web Developer </h2>
            </div>
            <div className="button--container">
                <a href='mailto:mishaloskutov@gmail.com'> <button className="email btn"> <img src={email} alt="linkedin icon" className="btn-icon" />E-mail</button></a>
                <a href='https://www.linkedin.com/in/mikhail-loskutov-12132b206/'> <button className="linkedin btn"> <img src={linkedin} alt="email icon" className="btn-icon" />LinkedIn</button></a>
            </div>
        </div>
    );
};