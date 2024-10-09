import React from "react";
import Image from "next/image";

type Props = {
  name: string;
  description: string;
  img: string;
};

const Header = (props: Props) => {
  return (
    <div className="flex flex-col items-center bg-green-600 p-8 rounded-t-xl mb-4">
      <Image
        src={props.img}
        alt="Profile picture"
        width={200}
        height={200}
        className="rounded-full max-w-[200px] max-h-[200px] border-4 border-white mb-2"
      />
      <h1 className="text-3xl font-extrabold">{props.name}</h1>
      <p className="italic text-lg">{props.description}</p>
    </div>
  );
};

export default Header;
