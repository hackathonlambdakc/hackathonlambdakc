import React, { useState, useEffect} from "react";
import PromptCard from "../Misc/PromptCard";
import Header from "../Misc/Header";
import axios from 'axios';
//modal
import "./home.css";


const Home = () => {

  const [prompts, setPrompts] = useState([]);
  useEffect(() => {
    axios.get("https://writeinspyre.herokuapp.com/all")
      .then(res => {
        setPrompts(res.data)
        console.log(res.data)
      });
  }, []);
  return (
    <div>
      <Header />
      <div className="community-prompts">
        {prompts.map(prompt => (
          <PromptCard prompt={prompt} key={prompt.id}/>
        ))}
      </div>
    </div>
  )
};

export default Home;
