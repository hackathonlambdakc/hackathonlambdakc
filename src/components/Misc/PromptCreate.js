import React from 'react';
import {useState, useEffect} from 'react'; 
import axios from  'axios'; 
import './misc.css';

const PromptCreate = props => {
    const blankPrompt = { title: '', response: '' };
    const promptArr = props.promptData;
    const [storage, setStorage] = useState(promptArr);
    const [newPrompt, setNewPrompt] = useState(blankPrompt);
    const handleChange = event => {
        const { name, value } = event.target;
        setNewPrompt({ ...newPrompt, [name]: value })
    };


    const addNewPrompt = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/prompts", newPrompt)
            .then(res => {
                setNewPrompt({
                    title: '',
                    response: ''
                })
                    .catch(res => {
                        if (res.data === '') {
                            alert("You need to fill in title and response");
                            res.status(500)
                        }
                    })
                    .then(res => {
                        const status = res.data.status;
                        if (status === 200) {
                            const newPrompt = storage.push(newPrompt);
                            setStorage(...storage, newPrompt)
                        }
                    })
            })
            .catch(err => console.log(err));
        };
        return (
            <div className="prompt-create-edit-container">
                <input
                    type="text"
                    className="create-input"
                    placeholder="What is on your mind"
                    onChange={handleChange}
                    value={newPrompt.title}
                    required
                />
                <textarea
                    type="text"
                    placeholder="Start writing..."
                    className="create-textarea"
                    onChange={handleChange}
                    value={newPrompt.response}
                    required
                />
                <button onClick={addNewPrompt} className="create-button">Finish</button>
            </div>
        )
    };

    export default PromptCreate