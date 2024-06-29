import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackStats from "./components/FeedbackStats.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import AboutIconLink from "./components/AboutIconLink.jsx";
import Post from "./components/Post.jsx";
import Card from "./components/shared/Card.jsx";
import { FeedbackProvider } from "./context/FeedbackContext.js";

function App() {
  return (
    <FeedbackProvider>
    <Router>
      <Header text="Welcome to Feedback App" />
      <div className="container">
      <Routes>
          <Route exact
            path="/" 
            element={
              <>
                <FeedbackForm />
                <FeedbackStats/>
                <FeedbackList/>
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
    </FeedbackProvider>

  );
}

export default App;
