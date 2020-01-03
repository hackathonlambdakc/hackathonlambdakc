import React from 'react';


const PromptCreate = () => {

    const handleChange = e => {};

    const handleSubmit = e => {}; 

    return (
        <div className="prompt-create-edit-container">
            <section>
                <input
                    type="text"
                    className="create-input"
                    placeholder="What is on your mind"
                    onChange={handleChange}
                    required
                />
            </section>
            <div className="prompt-content">
                <textarea
                    type="text"
                    placeholder="Start writing..."
                    className="create-textarea"
                    onChange={handleChange}
                    required
                />
            </div>
        </div>
    )
}
export default PromptCreate