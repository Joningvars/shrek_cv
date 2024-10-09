import React from "react";
import Heading from "./Heading";

type Props = {
  contact_info: {
    email: string;
    phone: string;
    location: string;
  };
};

const ContactInformation = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 my-4 text-black">
      <p>
        <span className="font-bold">Email:</span> {props.contact_info.email}
      </p>
      <p>
        <span className="font-bold">Phone:</span> {props.contact_info.phone}
      </p>
      <p>
        <span className="font-bold">Location:</span>{" "}
        {props.contact_info.location}
      </p>
    </div>
  );
};

export default ContactInformation;
