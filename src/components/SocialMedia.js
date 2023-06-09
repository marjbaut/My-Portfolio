import React from "react";

export default function SocialMedia() {

    const socialMediaStyle = {
        transform: 'translate3d(2.28px,-2.19304px, 0px)',
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
        position: 'relative',
        display: 'block',
        left: 0,
        top: 0,
    };
    const hoverStyle = {
        nsform: 'translateY(-10px)',
    };

    return (
        <div className="container">
            <div className="icons layer" data-depth="0.6" style={socialMediaStyle}>
                <a href="https://www.linkedin.com/in/marjoriebautista">
                    <i class="fa fa-linkedin fa-2x lin" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/marjbaut">
                    <i class="fa fa-github fa-2x git" aria-hidden="true"></i>
                </a>
                <a href="https://www.instagram.com/mayimayac/?hl=en">
                    <i class="fa fa-instagram fa-2x ig" aria-hidden="true"></i>
                </a>
                <a href="mailto:marjoriebaut.w@gmail.com">
                    <i class="fa fa-envalope fa-2x mail" aria-hidden="true"></i>
                </a>

            </div>
        </div>
    );

}