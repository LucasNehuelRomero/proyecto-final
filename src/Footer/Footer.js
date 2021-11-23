import React from 'react';
import '../Footer/Footer.css';
import {AiFillPlayCircle} from 'react-icons/ai';
import {BsFillSkipEndFill} from 'react-icons/bs';
import {BsFillSkipStartFill} from 'react-icons/bs';
import {IoShuffleOutline} from 'react-icons/io5';
import {AiFillHeart} from 'react-icons/ai';

// ./imagenesprueba/pantera-vulgar.jpg

function Footer() {
    return (
        <div className="Footer">
            <div className="footerLeft">
            <img className="albumLogo" src="./imagenesprueba/pantera-vulgar.jpg" alt="" />
            <div className="songInfo">
                <h1>Canción</h1>
                <p>Artista</p>
            </div>
            </div>
            <div className="footerCenter">
            <IoShuffleOutline className="shuffleicon" />
            <BsFillSkipStartFill className="skipstart" />
            <AiFillPlayCircle className="playicon" />
            <BsFillSkipEndFill className="skipend" />
            <AiFillHeart className="like" />
            </div>
            <div className="footerRight">
            <p>Footerright</p>   
            </div>
        </div>
    )
}

export default Footer
