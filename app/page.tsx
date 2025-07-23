"use client";

import Image from "next/image";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import DarkVeil from "./components/DarkVeil/DarkVeil";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import { Timeline } from "./components/Timeline/Timeline";

export default function Home() {
  const data = [
    {
      title: "Agustus - December 2024",
      content: (
        <div>
          <p className="mb-3 text-3xl font-bold text-neutral-400">
            Photography Competition Coordinator &ndash; Informatics Competition
            Festival
          </p>
          <p className="mb-8 text-xl text-neutral-800 md:text-sm dark:text-neutral-200">
            Acted as Master of Ceremony for the technical meeting, ensured
            effective information delivery to participants. Designed the scoring
            system and monitored the event flow to ensure a smooth and accurate
            competition process.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/Image/Experience/ICF FOTOGRAFI.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "September - December 2024",
      content: (
        <div>
          <p className="mb-3 text-3xl font-bold text-neutral-400">
            Logistic and Equipment Committee &ndash; Latihan Dasar Kepemimpinan
            Teknik Informatika
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Managed inventory records throughout the event, including loading
            dock supervision, item condition control, and close coordination
            with cross-division committees to ensure smooth on-site operations.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/Image/Experience/ft wildan.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/Image/Experience/solopg.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/Image/Experience/fullteam.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/Image/Experience/LANIK Perkap-1.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            {/* <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            /> */}
          </div>
        </div>
      ),
    },
    {
      title: "April 2025 - Now",
      content: (
        <div>
          <p className="mb-3 text-3xl font-bold text-neutral-400">
            Publication, Decoration, and Documentation Committee &ndash;
            Festival Keluarga Besar Mahasiswa - Ilmu Komputer
          </p>

          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Managed the documentation flow during the competition and
            contributed to publication materials such as poster designs, social
            media coordination, and promotional content in collaboration with
            the media team.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/Image/Experience/FKBM X Dies.png"
              alt="hero template"
              width={500}
              height={500}
              className="w-full max-w-[400px] aspect-[4/5] object-contain rounded-xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/Image/Experience/vbg panit.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/Image/Experience/vbg peserta.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            {/* <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            /> */}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SplashCursor />
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
        <DarkVeil />
      </div>
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12 h-full ">
          <div className="col-span-6">
            <div className="flex items-center h-full">
              <div className="flex flex-col gap-7">
                <AnimatedContent
                  distance={150}
                  direction="horizontal"
                  reverse={false}
                  duration={1.2}
                  ease="power2.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                  delay={0.3}
                >
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl text-white font-bold">
                      I'm Ready For Future Career
                    </h1>
                    <RotatingText
                      texts={[
                        "Web Designer",
                        "Web Developer",
                        "Cyber Security",
                        "UI/UX Designer",
                      ]}
                      mainClassName="px-2 sm:px-2 md:px-3 bg-[#4FCCA3] text-black overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex"
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.05}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 400,
                      }}
                      rotationInterval={3000}
                    />
                  </div>
                </AnimatedContent>

                <div className="flex flex-col items-start">
                  <div>
                    <SplitText
                      text="I am Muhammad Rafi Zhafran"
                      className="text-5xl font-semibold text-start"
                      delay={50}
                      duration={2}
                      ease="elastic.out(1, 0.8)"
                      splitType="chars"
                      from={{ opacity: 0, y: 40 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.1}
                      rootMargin="-100px"
                      textAlign="center"
                    />
                  </div>
                  <div>
                    <SplitText
                      text="Full Stack Developer"
                      className="text-5xl font-semibold text-start text-[#4FCCA3]"
                      delay={100}
                      duration={2}
                      ease="elastic.out(1, 0.8)"
                      splitType="chars"
                      from={{ opacity: 0, y: 40 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.1}
                      rootMargin="-100px"
                      textAlign="center"
                    />
                  </div>
                </div>
                <BlurText
                  text="I am from Indonesia. I am an Informatics student and a passionate Full Stack Web Developer specializing in Laravel and Next.js. I enjoy building both frontend and backend systems, designing clean user interfaces, and developing practical web applications. I have worked on several real-world projects and always strive to learn and grow through hands-on experience. Lets build something amazing together."
                  delay={65}
                  animateBy="words"
                  direction="top"
                  // onAnimationComplete={}
                  className="text-xl mb-8"
                />
              </div>
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
                onContactClick={() => window.open("https://wa.link/fiirjf")}
              />
            </div>
          </div>
        </div>
      </div>
      <ScrollVelocity
        texts={["Web Developer", "Portofolio"]}
        // velocity={100}
        className="bg-black"
      />
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </div>
  );
}
