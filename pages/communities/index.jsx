import React from "react";
import Image from "next/image";
import Button from "../../components/Button";
import Link from "next/link";
import community_image from "../../public/assets/images/community_image.svg";
const Community = () => {
  const communities = [
    { label: "The Frontend Club", photo: "/assets/images/tfc.png", path: "#" },
    { label: "The Frontend Club", photo: "/assets/images/tfc.png", path: "#" },
    { label: "The Frontend Club", photo: "/assets/images/tfc.png", path: "#" },
  ];

  return (
    <div className="py-10 w-full  rounded-bl-[40px] rounded-br-[40px] p-3">
      <div className="container bg-background mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20 w-full h-full p-5 rounded-xl">
        <div className="flex flex-col items-center lg:items-start gap-5">
          <div className="flex flex-col items-center lg:items-start">
            <h3>Join Communities and Grow your Network</h3>
          </div>

          <p className="lg:w-[500px] text-center lg:text-start">
            Join a community of people who share your interests and passions and
            find your tribe
          </p>
        </div>
        <div>
          <Image
            src={community_image}
            alt="community image"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="flex items-center justify-center mt-5">
        <h3>Featured Communities</h3>
      </div>

    <div>
      <div className="flex flex-wrap gap-5 items-center justify-center py-5">
          {communities.map((community, index) => (
            <div
              key={index}
              className="min-w-[10rem] max-w-[16rem] bg-background rounded-lg flex flex-col items-center justify-center shadow-md p-3">
              <div className="flex flex-col items-center gap-5">
                <Image
                  src={community.photo}
                  alt={community.label}
                  width={100}
                  height={100}
                />
                <h4>{community.label}</h4>
                <Button>Join Now!</Button>
              </div>
            </div>
          ))}
        </div>
        </div>
    </div>
  );
};

export default Community;
