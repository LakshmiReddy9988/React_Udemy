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
  return (
    <div className="skill-list">
      <Skill skill="react" emoji="👍" color="blue" />
      <Skill skill="HTML+CSS" emoji="👌" color="orangered" />
      <Skill skill="Angular" emoji="😎" color="yellow" />
      <Skill skill="Javascript" emoji="😃" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ background: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
