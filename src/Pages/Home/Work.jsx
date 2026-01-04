import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import timelineElements from "././timelineElements";
import hv from './hv-logo.jpg'
import vault from './vjs-logo.png';
import React, { useState } from "react";

export default function Work() {
    const [activeCategory, setActiveCategory] = useState(null);
    
    return(
        <div id="work" className="testimonial--section">
            <h1 className="sections--heading">WORK EXPERIENCE</h1>
            <VerticalTimeline>
                {
                    timelineElements.map((element) => {
                        let isWorkIcon = element.icon === "vault";
                        
                        // Handle description - can be array or string
                        let descriptionItems = [];
                        if (Array.isArray(element.description)) {
                            descriptionItems = element.description;
                        } else if (typeof element.description === 'string') {
                            descriptionItems = element.description.split("\n");
                        }
                        
                        return(
                            <VerticalTimelineElement 
                                key={element.id} 
                                date={element.duration || element.date}
                                dateClassName="date"
                                icon={isWorkIcon ? 
                                    <img src={vault} alt="Vault JS" style={{ borderRadius: '50%', width: '100%', height: '100%' }} /> : 
                                    <img src={hv} alt="Hitachi Vantara" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />
                                }
                            >
                                <h3 className="vertical-timeline-element-title">{element.title}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{element.company}</h4>
                                <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                                    {descriptionItems.map((point, index) => (
                                        <li key={index} style={{ marginBottom: '8px', textAlign: 'left' }}>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        );
                    })
                }
            </VerticalTimeline>
        </div>
    );
}