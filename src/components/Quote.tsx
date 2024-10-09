import React from "react";

type Props = {
  quote: string;
};

const Quote = (props: Props) => {
  return (
    <div className="flex italic items-center justify-center bg-yellow-300 text-black p-5 rounded-b-xl">
      <p>{props.quote}</p>
    </div>
  );
};

export default Quote;
