import React from 'react'
import { Link } from 'react-router-dom';

const PromptCard = ({prompt}) => {
    return (
        <div className="prompt-card-container">
            <section className="prompt-card-title-holder">
    <h1 className="prompt-card-title">{prompt.title}</h1>
            </section>
            <section className="prompt-card-content-holder">
    <p className="prompt-content">{prompt.response}</p>
            </section>
            <Link className="continue-link">Continue Reading...</Link>
        </div>
    )
}

export default PromptCard