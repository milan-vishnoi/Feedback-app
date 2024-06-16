import { useState } from "react";
import Card from "./shared/Card";

function FeedbackForm() {
 const [text, setText] = useState("");
 
 const handleTextInput = (event) => {
       setText(event.target.value);
 };

  return (
    <Card>
        <form>
        <h2>How would you rate this app?</h2>
        {/* @todo: Rating selector*/}
        <div className="input-group">
        <input onChange={handleTextInput}  type="text" placeholder="Write a review" value={text} />
        <button type="submit">Submit</button>
        </div>
        </form>
        
    </Card>
  )
}

export default FeedbackForm