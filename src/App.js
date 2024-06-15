import { useState } from "react";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackData from "./data/FeedbackData";

function App() 
{
   const [feedback, setFeedback] = useState(FeedbackData);
    return (
      <>
          <Header text="Welcome to Feedback App"/>
          <div className="container">
            <FeedbackList feedback={feedback}/>
          </div>
      </>
);
}

export default App;