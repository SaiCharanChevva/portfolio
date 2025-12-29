export default function HeroSection()
{
    return (
        <section id="heroSection" className = "hero--section">
            <div className = "hero--section--content--box">
                <div className = "hero--section--content">
                    <p className = "section--title">
                        Hi! I'm 
                    </p>
                    <h1 className="hero--section--title">
                        <span className ="hero--section-title--color">Sai Charan Chevva </span>{" "}
                        <br/>
                        Chevva
                    </h1>
                    <p className="here--section-description">
    I'm a Software Engineer and Data Engineer with a passion for building scalable data systems and applying machine learning to solve real-world problems. My experience spans backend development with Java and Spring Boot, data pipeline engineering with Snowflake and Kafka, and full-stack development using Python, JavaScript, and modern cloud technologies.
    <br></br>
    <br></br>
    At Hitachi Vantara, I designed and deployed high-throughput messaging systems processing over 100,000 messages daily, engineered data pipelines that improved report generation by 35%, and led automation initiatives that reduced manual workload by 50%. I thrive at the intersection of data engineering and software development—whether it's optimizing distributed systems, building ETL workflows, or creating ML-powered applications.
    <br></br>
    <br></br>
    I'm particularly drawn to projects involving data processing, analytics, and intelligent automation. From building meeting summarizers with NLP models to developing heart disease prediction systems with neural networks, I enjoy transforming raw data into actionable insights. I'm always eager to learn emerging technologies, tackle complex technical challenges, and deliver solutions that create meaningful impact through data-driven innovation.
</p>
                </div>
                <a href="https://www.linkedin.com/in/sai-charan-chevva/" class="btn btn-primary">Let's Connect!</a>
            </div>
            <div className="hero--section--img">
                <img src="./img/bh.png" alt="Hero Section" style={{ borderRadius: '50%', width: '50%', height: '50%', boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.5)'}}/>
            </div>
        </section>
    )
    ;
}