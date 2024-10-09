import React from "react";

type WorkExperience = {
  title: string;
  location: string;
  description: string;
};

type Props = {
  work_exp: WorkExperience[];
};

const WorkExp = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 my-4 text-black">
      {props.work_exp.map((job, index) => (
        <ul>
          <li key={index}>
            <h3 className="font-bold text-xl">{job.title}</h3>
            <p>{job.location}</p>
            <p>{job.description}</p>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default WorkExp;
