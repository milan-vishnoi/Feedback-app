import { useContext, useEffect, useState } from "react";
import RatingSelector from "./RatingSelector";
import Card from "./shared/Card";
import Button from "./shared/Button";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
 const [text, setText] = useState("");
 const [rating, setRating] = useState(10);
 const [buttonDisabled, setButtonDisabled] = useState(true);
 const [message,setMessage] = useState("");

 const {addFeedback, editedFeedback} = useContext(FeedbackContext);

 useEffect(()=> {
  if(editedFeedback.edit === true){
    setButtonDisabled(false);
    setText(editedFeedback.item.text);
    setRating(editedFeedback.item.rating);
  }
 },[editedFeedback]);
 
 const handleTextInput = (event) => {
       if(text === "") {
        setMessage(null);
        setButtonDisabled(true);
       } else if (text.trim().length < 10) {
        setMessage("Text should have atleast 10 characters");
        setButtonDisabled(true);
       } else {
        setMessage(null);
        setButtonDisabled(false);
       }
       setText(event.target.value);
 };

 const handleSubmit = (event) => {
    event.preventDefault();
    if(text.trim().length >10) {
        const newFeedback = {
            rating: rating,
            text: text
        };
      addFeedback(newFeedback);
      setText("");
    }
 }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
        <h2>How would you rate this app?</h2>
        <RatingSelector select={(rating)=> setRating(rating)}/>
        <div className="input-group">
        <input onChange={handleTextInput}  type="text" placeholder="Write a review" value={text} />
        <Button type="submit" version="secondary" isDisabled={buttonDisabled}>Submit</Button>
        </div>
        </form>
        {message && <div className="message">{message}</div>}
    </Card>
  )
}

export default FeedbackForm