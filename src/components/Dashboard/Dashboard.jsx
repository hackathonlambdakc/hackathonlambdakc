import React from 'react'
import Header from '../Misc/Header';
import PromptCard from '../Misc/PromptCard';

const Dashboard = () => {
  return (
    <div>
      Dashboard component
      <Header />
      <button>+ Create New Prompt</button>
      <div className="my-prompts">
        <PromptCard />
      </div>
    </div>
  )
}

export default Dashboard
