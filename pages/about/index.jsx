import React from 'react'
import Image from 'next/image'
const About = () => {

    const teams = [
        {name: "Geet Kaushik", photo: "/assets/images/Geet.jpeg", designation: "Frontend Developer"}
    ]

  return (
    <div className="flex flex-wrap gap-5 items-center justify-center py-5">
        <h1 className="text-bold">Who are we ? 🔍 </h1>
        <div className="padding-x text-2xl text-black">We&apos;re a dedicated team of young enthusiasts who share a passion for learning technologies and inovation. With keeping the difficulties faced by many in communities and meetups where it seems difficult to connect with others, we&apos;re here to provide you with a platform though which you can connect with new peeps in just a click.</div>
        <h2>Team Members</h2>
        {/* <div className="flex gap-10">
            <div className="min-w-[10rem] max-w-[16rem] bg-background rounded-lg flex flex-col items-center justify-center shadow-md p-3">
                <Image 
                    src="/assets/images/Geet.jpeg" 
                    alt="Team Members" 
                    width={200}
                    height={200}
                    className="rounded-full"
                />
                <p className="text-secondary text-xl">Geet Kaushik</p>
                <p className="text-sm">(Frontend)</p>
            </div>

            <div className="min-w-[10rem] max-w-[16rem] bg-background rounded-lg flex flex-col items-center justify-center shadow-md p-3">
                <Image 
                    src="/assets/images/sairamkaushik.jpeg" 
                    alt="Team Members" 
                    width={200}
                    height={200}
                    className="rounded-full"
                />
                <p className="text-secondary text-xl">Sairam Kaushik</p>
                <p className="text-sm">(Frontend)</p>
            </div>
            <div className="min-w-[10rem] max-w-[16rem] bg-background rounded-lg flex flex-col items-center justify-center shadow-md p-3">
                <Image 
                    src="/assets/images/Subhranshu.jpeg" 
                    alt="Team Members" 
                    width={200}
                    height={200}
                    className="rounded-full"
                />
                <p className="text-secondary text-xl">Subhranshu</p>
                <p className="text-sm">(Content)</p>
            </div>
            <div className="min-w-[10rem] max-w-[16rem] bg-background rounded-lg flex flex-col items-center justify-center shadow-md p-3">
                <Image 
                    src="/assets/images/Shivam.jpeg" 
                    alt="Team Members" 
                    width={200}
                    height={200}
                    className="rounded-full"
                />
                <p className="text-secondary text-xl">Shivam Bhasin</p>
                <p className="text-sm">(Backend)</p>
            </div>
            <div className="min-w-[10rem] max-w-[16rem] bg-background rounded-lg flex flex-col items-center justify-center shadow-md p-3">
                <Image 
                    src="/assets/images/Dummy.png" 
                    alt="Team Members" 
                    width={200}
                    height={200}
                    className="rounded-full"
                />
                <p className="text-secondary text-xl">Aman Chopra</p>
                <p className="text-sm">(PR)</p>
            </div>
        </div> */}

        {}
    </div>
  )
}

export default About