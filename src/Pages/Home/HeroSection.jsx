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
                    <p className = "here--section-description">
                        I'm a Software Engineer with experience across backend development, full-stack engineering, and applied machine learning. I have designed and deployed scalable systems using AWS, Java, Python, Node.js, and modern web technologies, while also building and optimizing ML models for real-world applications.
                        <br></br>
                        <br></br>
                        My work includes developing high-performance REST APIs, automating cloud workflows, integrating LLM-based components, and implementing distributed data pipelines. I also have experience improving system reliability, strengthening application security, and contributing to end-to-end product development across cross-functional teams.
                        <br></br>
                        <br></br>
                        I enjoy solving complex technical problems, learning new technologies, and building reliable, scalable solutions that deliver meaningful impact.
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