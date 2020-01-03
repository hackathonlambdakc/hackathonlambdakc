import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../Misc/Header';
import Promptview from './PromptView';

const PromptCard = ({ prompt }) => {
    const [togglemodal, setTogglemodal] = useState(true);
    const [modalPic, setModalPic] = useState(null);

    const modalpopup = () => {
        setTogglemodal(!togglemodal);
        // setModalPic(prompt);
    };

    return togglemodal ? (
        <div className="prompt-card-container">
            <section className="prompt-card-title-holder">
                <h1 className="prompt-card-title">{prompt.title}</h1>
            </section>
            <section className="prompt-card-content-holder">
                <p className="prompt-card-content">{prompt.response}</p>
                <section className="continue-sec">
                    <p onClick={modalpopup} className="continue-link">Continue Reading...</p>
                </section>
            </section>
        </div>
    ) : (
            <div>
                <div>
                    <div className="toggle-prompt-view" onClick={modalpopup}>close</div>
                    <Promptview prompt={prompt} modalpic={modalPic} />
                </div>
            </div>
        )
}

export default PromptCard