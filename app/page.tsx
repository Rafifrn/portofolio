'use client';

import Image from "next/image";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import RotatingText from "./components/RotatingText/RotatingText";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="container border mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl text-white font-bold">Hello im M. Rafi Zhafran. I am</h1>
              <RotatingText
                texts={['Web Designer', 'Web Developer', 'Cyber Security', 'Digital Forensics']}
                mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.05}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
              />
            </div>
          </div>
          <div className="col-span-6">
            <div className="flex justify-center items-center h-full">
              <ProfileCard
                name="M. Rafi Zhafran"
                title="Fullstack Developer"
                handle="raaffrn"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/assets/profilecard/profilerafi.png"
                showUserInfo={true}
                enableTilt={true}
                onContactClick={() => console.log('Contact clicked')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
