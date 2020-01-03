import React, { useState } from "react";
import PromptCard from "../Misc/PromptCard";
import Header from "../Misc/Header";

//modal
import Promptview from "../Misc/PromptView";
import "./home.css";

{
  /* 
      - Top Nav
      - (Mobile) Container holding all of the community prompts
      - (Desktop) Keep the Container, but shift to the right, then two stacked
        divs. One holding Prompt of the month, the other create prompt link. 
      
      - Will need to map through and retrieve all of the community generated prompts
      - Each of those prompts will contain a link that will bring to the view prompt 
        page. 
      - Then there will be a link to the create a prompt page. 
      */
}

const Home = () => {
  const randomPrompts = [
    { title: "How was your day?", response: "pretty damn good. " },
    { title: "Where is my diet dr. pepper?", response: "wish i knew" },
    { title: "how late will we be up?", response: "sleep is not a thing. " },
    { title: "what do you think of redux", response: "redux can suck it..." }
  ];

  const [togglemodal, setTogglemodal] = useState(true);
  const [modalPic, setModalPic] = useState(null);

  const modalpopup = () => {
    setTogglemodal(!togglemodal);
    // setModalPic(prompt);
  };

  return togglemodal ? (
    <div>
      <div onClick={modalpopup}>toggle off</div>
      Home component on
      {/* Mobile First */}
      <Header />
      <div className="community-prompts">
        {randomPrompts.map(prompt => (
          <PromptCard prompt={prompt} />
        ))}
      </div>
    </div>
  ) : (
    <div>
      <div onClick={modalpopup}>toggle on</div>
      Home component off
      {/* Mobile First */}
      <Header />
      <div>
        <Promptview modalpic={modalPic} />
      </div>
    </div>
  );
};

export default Home;
