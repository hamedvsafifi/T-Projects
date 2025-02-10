import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#FF69B4",
  },
  {
    skill: "Javascript",
    level: "advanced",
    color: "#FFA07A",
  },
  {
    skill: "Web Design",
    level: "intermediate",
    color: "#8F0A1A",
  },
  {
    skill: "Git and GitHub",
    level: "beginner",
    color: "#32CD32",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#6495ED",
  },
  {
    skill: "Node.js",
    level: "intermediate",
    color: "#8B9467",
  },
  {
    skill: "Python",
    level: "beginner",
    color: "#FFC080",
  },
  {
    skill: "SQL",
    level: "advanced",
    color: "#C71585",
  },
  {
    skill: "AWS",
    level: "intermediate",
    color: "#FFD700",
  },
  {
    skill: "Docker",
    level: "beginner",
    color: "#4682B4",
  },
];

function App() {
  return (
    <div className="id-frame">
      <IdImg />
      <IdDescribe />
      {Skills.map((skill, index) => (
        <IdTag key={index} skill={skill} isFirst={index === 0} />
      ))}
    </div>
  );
}

function IdImg() {
  return (
    <figure className="id-photo">
      <img src="/resoruces/pp.jpg" alt="img of developer" />
    </figure>
  );
}

function IdDescribe() {
  return (
    <section className="id-describe">
      <h1>Back-end Developer</h1>
      <p>
        A versatile Back-end Developer skilled in server-side web application
        development, database management, and API design. Proficient in Python,
        Node.js, and SQL, with a strong background in frameworks like Express.js
        and Django, cloud services such as AWS, and experience in DevOps
        practices like Docker and CI/CD pipelines. Adept at designing scalable
        database schemas, optimizing server performance, and implementing robust
        security measures, with a commitment to continuous learning and
        delivering efficient solutions in collaborative and agile environments.
      </p>
    </section>
  );
}

function IdTag({ skill, isFirst }) {
  return (
    <section
      className={`idtag ${isFirst ? "first-tag" : ""}`}
      style={{ backgroundColor: skill.color }} // Now this will work
    >
      <span>
        {`${
          skill.skill + (skill.level === "beginner")
            ? "👶"
            : skill.level === "intermediate"
            ? "👍"
            : "💪"
        }`}
      </span>
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
