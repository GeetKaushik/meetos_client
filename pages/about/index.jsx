import React from "react";
import TransitionEffect from "../../components/TransitionEffect";
import Image from "next/image";

const About = () => {
  const Team = [
    {
      Name: "Geet Kaushik",
      photo: "/assets/images/Geet.jpeg",
      Role: "(Frontend)",
    },
    {
      Name: "Sairam Kaushik",
      photo: "/assets/images/sairamkaushik.jpeg",
      Role: "(Frontend)",
    },
    {
      Name: "Shubhranshu",
      photo: "/assets/images/Subhranshu.jpeg",
      Role: "(Content)",
    },
    {
      Name: "Shivam Bhasin",
      photo: "/assets/images/Shivam.jpeg",
      Role: "(Backend)",
    },
    { Name: "Aman Chopra", photo: "/assets/images/Aman.jpg", Role: "(PR)" },
  ];

  return (
    <div className="flex flex-wrap gap-5 items-center justify-center py-5">
      <TransitionEffect />
      <div>
        <h1 className="text-bold flex justify-center">Who are we ? 🔍 </h1>
        <div className="p-4 lg:p-16 text-2xl text-black">
          We&apos;re a dedicated team of young enthusiasts who share a passion for
          learning technologies and inovation. With keeping the difficulties
          faced by many in communities and meetups where it seems difficult to
          connect with others, we&apos;re here to provide you with a platform though
          which you can connect with new peeps in just a click.
        </div>
      </div>
      <div>
        <h2 className="flex justify-center mb-6">Team Members</h2>
        <div className="flex gap-10">
          {Team.map((member, index) => (
            <div
              key={index}
              className="min-w-[10rem] max-w-[16rem] bg-background rounded-lg flex flex-col items-center justify-center shadow-md p-3">
              <div className="flex flex-col items-center gap-5">
                <Image
                  src={member.photo}
                  alt={member.Name}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <div className="text-xl text-secondary">{member.Name}</div>
              <div className="text-sm text-black">{member.Role}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
