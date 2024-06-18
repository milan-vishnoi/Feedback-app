import { useState } from "react";
import {v4 as uid} from "uuid";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackStats from "./components/FeedbackStats.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import AboutPages from "./pages/AboutPage.jsx";
import FeedbackData from "./data/FeedbackData";

function App() 
{
   const [feedback, setFeedback] = useState(FeedbackData);

   const addFeedback = (newFeedback) => {
     newFeedback.id = uid();
     setFeedback([newFeedback,...feedback]);
   };

   const deleteFeedback = (id) => {
      if(window.confirm("Are you sure you want to delete this feeback?")){
        setFeedback(feedback.filter((item)=> item.id!== id));
      }
   }; 
    return (
      <>
          <Header text="Welcome to Feedback App"/> 
          <div className="container">
          <FeedbackForm handleAdd={addFeedback}/>
          <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback={feedback} handleDelete = {deleteFeedback}/>
            <AboutPages/>
          </div>
      </>
);
}

export default App;