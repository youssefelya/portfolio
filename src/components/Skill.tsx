import PropTypes from "prop-types";

type SkillProps = {
  skill: string;
};

const Skill = (props: SkillProps) => {
  return (
    <div className="skill">
      <img src={`/skills/${props.skill}`} alt="" className="skill-img" />
    </div>
  );
};

export default Skill;
