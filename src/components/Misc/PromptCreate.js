import React from 'react';
import './misc.css'; 

const PromptCreate = () => {

    const handleChange = e => {
        e.preventDefault(); 
    };

    const handleSubmit = e => {
        e.preventDefault();
    }; 
    return (
        <div className="prompt-create-edit-container">
                <input
                    type="text"
                    className="create-input"
                    placeholder="What is on your mind"
                    onChange={handleChange}
                    required
                />
                <textarea
                    type="text"
                    placeholder="Start writing..."
                    className="create-textarea"
                    onChange={handleChange}
                    required
                />
            <button onSubmit={handleSubmit} className="create-button">Finish</button>
        </div>
    )
}
export default PromptCreate