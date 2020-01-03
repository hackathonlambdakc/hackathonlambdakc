import React from 'react'
import PromptCard from '../Misc/PromptCard';
import Header from "../Misc/Header";
import "./home.css"

{/* 
      - Top Nav
      - (Mobile) Container holding all of the community prompts
      - (Desktop) Keep the Container, but shift to the right, then two stacked
        divs. One holding Prompt of the month, the other create prompt link. 
      
      - Will need to map through and retrieve all of the community generated prompts
      - Each of those prompts will contain a link that will bring to the view prompt 
        page. 
      - Then there will be a link to the create a prompt page. 
      */}


const Home = () => {
  return (
    <div>
      Home component
      {/* Mobile First */}
      <Header />
      <div className="community-prompts">
        <PromptCard />
      </div>
    </div>
  )
}

export default Home
