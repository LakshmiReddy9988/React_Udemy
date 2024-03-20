import "./Profile-Card.css";

export default function ProfileCard() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://uploads.codesandbox.io/uploads/user/4c3dfc6c-3422-4af5-97f1-6157c8140bc6/k5O0-jonas.jpeg"
      alt="Jonas"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course. I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  const skillList = [
    {
      skill: "react",
      level: "beginner",
      color: "blue",
    },
    {
      skill: "Angular",
      level: "intermediate",
      color: "orange",
    },
    {
      skill: "HTML+CSS",
      level: "advanced",
      color: "green",
    },
    {
      skill: "javascript",
      level: "intermediate",
      color: "orange",
    },
    {
      skill: "node",
      level: "beginner",
      color: "blue",
    },
  ];

  return (
    <div className="skill-list">
      {skillList.map((skills, index) => (
        <Skill
          skill={skills.skill}
          level={skills.level}
          color={skills.color}
          key={index}
        />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ background: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "😊"}
        {level === "intermediate" && "😎"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}
