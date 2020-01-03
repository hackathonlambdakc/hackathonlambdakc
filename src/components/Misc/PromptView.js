import React from 'react';

const PromptView = ({ modalPic }) => {
    return (
        <div>
        <div className="modal-overlay"></div>
        <div className="prompt-view-container">
            <div className="prompt-view-content-container">
                <section className="view-top-section">
                    <h1 className="prompt-title">Stuff</h1>
                </section>
                <div className="prompt-content">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                    sint occaecat cupidatat non proident, sunt in culpa qui 
                    officia deserunt mollit anim id est laborum.
            </div>
            </div>
        </div>
        </div>
    )
}
export default PromptView