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
        rating: 8
      }
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

  return (
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
