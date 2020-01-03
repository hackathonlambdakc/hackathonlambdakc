import React from 'react'
import Header from '../Misc/Header';
import PromptCard from '../Misc/PromptCard';
import {useState, useEffect} from 'react'; 
import axios from 'react'; 
import "./dashboard.css"; 

const Dashboard = () => {
  const [userPrompts, setUserPrompts] = useState([]); 
  useEffect(() => {
    axios.get("https://writeinspyre.herokuapp.com/api/prompts")
  })
  return (
    <div className="dash-page">
      <Header />
      <section className="dash-top-page">
      <button className="dash-button">+ Create New Prompt</button>
      </section>
      <div className="my-prompts">
        <PromptCard />
      </div>
    </div>
  )
}

export default Dashboard
