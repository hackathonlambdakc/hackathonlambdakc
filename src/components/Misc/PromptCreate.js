import React, {useState, useContext, useEffect} from 'react';
import PromptContext from '../../context/prompt/promptContext';
// import {useState, useEffect} from 'react'; 
// import {useFetch} from '../Misc/Hooks'; 

// import axios from  'axios'; 
import './misc.css';

const PromptCreate = () => {
    const promptContext = useContext(PromptContext);
    const {addPrompts, updatePrompt, clearCurrent, current} = promptContext; 
    const [prompt, setPrompt] = useState({
        title: '',
        response: ''
    });

    const {title, response} = prompt;

    const onChange = e => {
        setPrompt({...prompt, [e.target.name]: e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault();
        if(current === null){
            addPrompts(prompt);
        } else {
            updatePrompt(prompt);
        }
        clearAll();
    };

    const clearAll = () => {
        clearCurrent(); 
    }

    useEffect(() => {
        if (current !== null){
            setPrompt(current);
        } else {
            setPrompt({
                title: '',
                response: ''
            });
        }
    }, [promptContext, current]);

        return (
            <div className="prompt-create-edit-container">
            <form onSubmit={onSubmit}>
                <input
                    className="create-input"
                    placeholder="What is on your mind"
                    onChange={onChange}
                    value={title}
                    required
                />
                <textarea
                    placeholder="Start writing..."
                    className="create-textarea"
                    onChange={onChange}
                    value={response}
                    required
                />
                <button onClick={clearAll} className="create-button">Finish</button>
                </form>
            </div>
        )
    };

    export default PromptCreate