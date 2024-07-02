import { v4 as uid } from "uuid";
import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is FeedbackItem 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This is FeedbackItem 2",
      rating: 9,
    },
    {
      id: 3,
      text: "This is FeedbackItem 3",
      rating: 8,
    },
  ]);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uid();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this feeback?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const updateFeedback = (id, updatedItem) => {
    setFeedback(feedback.map((item)=> item.id===id?{ ...item , ...updatedItem}:item));
  }

  const [editedFeedback, setEditedFeedback] = useState({
    item: {},
    edit: false,
  });

  const editFeedback = (item) => {
    console.log("Edited:"+item.id+" "+item.text);
    setEditedFeedback({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{ feedback, editedFeedback, deleteFeedback, addFeedback, editFeedback, updateFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
