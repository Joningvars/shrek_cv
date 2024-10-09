import React from "react";

type Props = {
  text: string;
};

const Heading = (props: Props) => {
  return (
    <div className="bg-orange-600 rounded font-extrabold text-xl p-2">
      {props.text}
    </div>
  );
};

export default Heading;
