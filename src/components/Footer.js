import React from "react";
import github from '../github.png'
import insta from '../insta.png'
import tiktok from '../tiktok.png'


export default function footer()  {
    return (
        <div className="footer--container">
            <img src={github} alt='github icon' className="icon"/>
            <img src={insta} alt='instagram icon' className="icon"/>
            <img src={tiktok} alt='tiktok icon' className="icon"/>
        </div>
    )
}