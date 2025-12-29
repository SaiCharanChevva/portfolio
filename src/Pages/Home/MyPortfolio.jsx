import data from "../../data/index.json";

export default function MyPortfolio() {
    return (
        <section className="portfolio--section" id="MyPortfolio">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <h2 className="section--heading">RECENT PROJECTS</h2>
                </div>
                <div>
                    <a href="https://github.com/SaiCharanChevva" className="btn btn-primary">View my Github</a>
                </div>
            </div>
            <div className="portfolio--section--container">
                {data?.portfolio?.map((item,index) => (
                    <div key={index} className="portfolio--section--card">
                        <div className="portfolio--section--img">
                            <img src={item.src} alt="placeholder"/>
                        </div>
                        <div className="portfolio--section--card--content">
                            <div>
                                <h3 className="portfolio--section--title">{item.title}</h3>
                                <br/>
                                <p className="p">{item.description}</p>
                                <br/>
                            </div>
                            <p className="text-smportfolio---link">
                                <a href={item.link} className="btn btn-primary">View in Github</a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}