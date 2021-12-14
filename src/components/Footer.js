import React from "react";
import github from '../github.png'
import insta from '../insta.png'
import tiktok from '../tiktok.png'


export default function footer()  {
    return (
        <div className="footer--container">
            <a href="https://github.com/michaellosdev"><img src={github} alt='github icon' className="icon"/></a>
            <a href="https://www.instagram.com/michaellos/"><img src={insta} alt='instagram icon' className="icon"/></a>
            <a href="https://www.tiktok.com/@mishatherussiann?lang=en"><img src={tiktok} alt='tiktok icon' className="icon"/></a>
        </div>
    )
}