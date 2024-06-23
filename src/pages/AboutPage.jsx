import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
       <div className="about">
        <h1>About This Project</h1>
        <p>This the About page for this project of feedback app in React </p>
         <p>Versio: 1.0.0</p>
         <p>
            <Link to="/">Back to homepage</Link>
         </p>
       </div>
    </Card>
  )
}

export default AboutPage;