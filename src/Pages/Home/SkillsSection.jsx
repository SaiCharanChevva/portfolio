import React, { useState } from "react";
import './SkillsSection.css';
const skillsData = {
  "Programming Languages and Frameworks": [
    { name: "Java", logo: "./img/java.jpg" },
    { name: "Python", logo: "./img/python.png" },
    { name: "C", logo: "./img/c.webp" },
    { name: "C++", logo: "./img/c++.jpg" },
    { name: "Spring", logo: "./img/spring.jpg" },
    { name: "SpringBoot", logo: "./img/spring-boot.png" },
  ],
  "Cloud and Database Systems": [
    { name: "Amazon Web Services", logo: "./img/aws.png" },
    { name: "Docker", logo: "./img/docker.png" },
    { name: "Kubernetes", logo: "./img/kubernetes.png" },
    { name: "Kafka", logo: "./img/kafka.png" },
    { name: "SQL", logo: "./img/sql.jpg" },
    { name: "PL/SQL", logo: "./img/plsql.png" },
    { name: "OracleSQL", logo: "./img/oracle-database.png" },
    { name: "MySQL", logo: "./img/mysql.png" },
    { name: "PostgreSQL", logo: "./img/postgresql.png" },
    { name: "MongoDB", logo: "./img/mongodb.png" },
    { name: "SnowFlake", logo: "./img/snowflakelogo.png" }
  ],
  "Web Technologies": [
    { name: "HTML", logo: "./img/html5.png" },
    { name: "CSS", logo: "./img/css.jpg" },
    { name: "JavaScript", logo: "./img/js.png" },
    { name: "TypeScript", logo: "./img/typescript.png" },
    { name: "React.js", logo: "./img/react.png" },
    { name: "Node.js", logo: "./img/node.png" },
    { name: "PostMan", logo: "./img/postman.png" },
    { name: "Apache Tomcat", logo: "./img/tomcat.png" },
  ],
    "Other Technologies": [
    { name: "Machine Learning", logo: "./img/ml.jpg" },
    { name: "Artificial Intelligence", logo: "./img/ai.jpg" },
    { name: "Big Data", logo: "./img/big-data.jpg" },
    { name: "Git", logo: "./img/git.png" },
    { name: "Jira", logo: "./img/jira.png" },
    { name: "Selenium", logo: "./img/selenium.png" },
    { name: "JUnit", logo: "./img/junit.jpeg" },
    { name: "Mockito", logo: "./img/mockito.jpeg" },
    { name: "TestNG", logo: "./img/testng.jpg" },
    ],
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
     <div id="skillSection" className="skills-container">
      <h2 className="sections--heading">TECHNICAL SKILLS</h2>
      <br></br>
      {Object.entries(skillsData).map(([category, tools]) => (
        <div key={category} className="vertical-timeline-element-title">
          <br></br>
          <h3 className="vertical-timeline-element-title">{category}</h3>
          <br></br>
          <div className="skills-row">
            {tools.map((tool) => (
              <div key={tool.name} className="skill-item">
                <img src={tool.logo} alt={tool.name} class="skill-logo" />
                <p className="skill-name">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}