import React from "react";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import ContactInformation from "@/components/ContactInformation";
import Skills from "@/components/Skills";
import WorkExp from "@/components/WorkExp";
import Education from "@/components/Education";
import Quote from "@/components/Quote";
import Wrapper from "@/components/Wrapper";

type CvProps = {
  data: {
    img: string;
    name: string;
    description: string;
    contact_info: {
      email: string;
      phone: string;
      location: string;
    };
    skills: string[];
    work_exp: {
      title: string;
      location: string;
      description: string;
    }[];
    education: { degree: string; institution: string };
    quote: string;
  };
};

const Cv: React.FC<CvProps> = ({ data }) => {
  return (
    <Wrapper>
      <Header img={data.img} name={data.name} description={data.description} />
      <Heading text="Contact Information" />
      <ContactInformation contact_info={data.contact_info} />
      <Heading text="Skills" />
      <Skills skills={data.skills} />
      <Heading text="Work Experience" />
      <WorkExp work_exp={data.work_exp} />
      <Heading text="Education" />
      <Education education={data.education} />
      <Quote quote={data.quote} />
    </Wrapper>
  );
};

export default Cv;
