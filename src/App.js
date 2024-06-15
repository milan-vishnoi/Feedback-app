import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem.jsx";

function App() 
{
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