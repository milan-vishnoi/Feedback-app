import { useState } from "react";
import { v4 as uid } from "uuid";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackStats from "./components/FeedbackStats.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import AboutIconLink from "./components/AboutIconLink.jsx";
import FeedbackData from "./data/FeedbackData";
import Post from "./components/Post.jsx";
import Card from "./components/shared/Card.jsx";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

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
    <Router>
      <Header text="Welcome to Feedback App" />
      <div className="container">
      <Routes>
          <Route exact
            path="/" 
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
              </>
            } 
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/post/*" element={<Post />} />
        </Routes>
        <AboutIconLink/>
        <Card>
          <NavLink to="/" activeClassName = "active">Home</NavLink>
          <br/>
          <NavLink to="/about" activeClassName = "active">About</NavLink>
        </Card>
      </div>
    </Router>
  );
}

export default App;
