import { useState } from "react";

import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem.jsx";
import FeedbackData from "./data/FeedbackData";

function App() 
{
   const [feedback, setFeedback] = useState(FeedbackData)
    return (
      <>
          <Header text="Welcome to Feedback UI"/>
          <div className="container">
            <FeedbackItem/>
          </div>
      </>

);
}

export default App;