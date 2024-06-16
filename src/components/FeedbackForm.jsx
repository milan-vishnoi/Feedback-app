import Card from "./shared/Card";

function FeedbackForm() {
  return (
    <Card>
        <form>
        <h2>How would you rate this app?</h2>
        {/* @todo: Rating selector*/}
        <div className="input-group">
        <input type="text" placeholder="Write a review" />
        <button type="submit">Submit</button>
        </div>
        </form>
        
    </Card>
  )
}

export default FeedbackForm