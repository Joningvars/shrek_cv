import React from "react";

type Props = {
  education: { degree: string; institution: string };
};

const Education = (props: Props) => {
  return (
    <div className="my-4 text-black">
      <p>
        <span className="font-bold">Degree: </span>
        {props.education.degree}
      </p>
      <p>
        <span className="font-bold">Institution: </span>
        {props.education.institution}
      </p>
    </div>
  );
};

export default Education;
