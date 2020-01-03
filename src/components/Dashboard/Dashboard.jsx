import React from 'react'
import Header from '../Misc/Header';
import PromptCard from '../Misc/PromptCard';
import "./dashboard.css"; 

const Dashboard = () => {
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
