import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
       <div className="about">
        <h1>About This Project</h1>
        <p>This the About page for this project of feedback app in React </p>
         <p>Versio: 1.0.0</p>
         <p>
            <a href="/">Back to homepage</a>
         </p>
       </div>
    </Card>
  )
}

export default AboutPage;