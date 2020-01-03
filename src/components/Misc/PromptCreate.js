import React from 'react';
// import {useState, useEffect} from 'react'; 
// import {useFetch} from '../Misc/Hooks'; 

// import axios from  'axios'; 
import './misc.css';

const PromptCreate = () => {
    // const blankPrompt = { title: '', response: '' };
    // const [data] = useFetch("http://localhost:5000/all");
    // console.log(data)
    // const [storage, setStorage] = useState(data);
    // console.log(storage)
    // const [newPrompt, setNewPrompt] = useState(blankPrompt);
    // const handleChange = event => {
    //     const { name, value } = event.target;
    //     setNewPrompt({ ...newPrompt, [name]: value })
    // };


    // const addNewPrompt = e => {
    //     e.preventDefault();
    //     axios.post("http://localhost:5000/api/prompts", newPrompt)
    //         .then(res => {
    //             setNewPrompt({
    //                 title: '',
    //                 response: ''
    //             })
    //                 .catch(res => {
    //                     if (res.data === '') {
    //                         alert("You need to fill in title and response");
    //                         res.status(400)
    //                     }
    //                 })
    //                 .then(res => {
    //                     console.log(newPrompt.title); 
    //                     const status = res.data.status;
    //                     if (status === 200) {
    //                         const newPrompt = storage.push(newPrompt);
    //                         setStorage(...storage, newPrompt)
    //                     }
    //                 })
    //         })
    //         .catch(err => console.log(err));
    //     };
        return (
            <div className="prompt-create-edit-container">
                <input
                    className="create-input"
                    placeholder="What is on your mind"
                    // onChange={handleChange}
                    // value={newPrompt.title}
                    required
                />
                <textarea
                    placeholder="Start writing..."
                    className="create-textarea"
                    // onChange={handleChange}
                    // value={newPrompt.response}
                    required
                />
                <button className="create-button">Finish</button>
            </div>
        )
    };

    export default PromptCreate