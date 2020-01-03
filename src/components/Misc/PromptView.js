import React from 'react';

const PromptView = ({ modalPic, prompt }) => {
    return (
        <div>
            <div className="modal-overlay"></div>
            <div className="prompt-view-container">
                <div className="prompt-view-content-container">
                    <section className="view-top-section">
                        <h1 className="prompt-title">{prompt.title}</h1>
                    </section>
                    <div className="prompt-content">
                        {prompt.response}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PromptView