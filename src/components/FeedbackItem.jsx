import Card from "./shared/Card";

function FeedbackItem(props) {
  return (
    <Card>
        <div className="num-display">{props.item.rating}</div>
        <div className="text-display">{props.item.text}</div>
    </Card>
  )
}

export default FeedbackItem;