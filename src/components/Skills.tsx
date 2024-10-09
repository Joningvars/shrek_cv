import React from "react";

type Props = {
  skills: string[];
};

const Skills = (props: Props) => {
  return (
    <div className="text-black my-4">
      <ul className="list-disc pl-5">
        {props.skills.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
