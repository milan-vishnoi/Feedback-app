import { useState } from "react";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackStats from "./components/FeedbackStats.jsx";
import FeedbackData from "./data/FeedbackData";

function App() 
{
   const [feedback, setFeedback] = useState(FeedbackData);

   const deleteFeedback = (id) => {
      if(window.confirm("Are you sure you want to delete this feeback?")){
        setFeedback(feedback.filter((item)=> item.id!== id));
      }
   }; 
    return (
      <>
          <Header text="Welcome to Feedback App"/>
          <FeedbackStats feedback={feedback}/>
          <div className="container">
            <FeedbackList feedback={feedback} handleDelete = {deleteFeedback}/>
          </div>
      </>
);
}

export default App;