import SkillSection from "@/app/about/SkillSection";
import AboutAvatarSVG from "@/app/about/AboutAvatarSVG";
import { IoIosStar } from "react-icons/io";

const About = () => {
  const ACHIEVEMENTS = [
    "Solved 1000+ problems across all platforms",
    "Global Rank of 271 in Codechef Starters 39",
    "Global Rank of 194 in Codechef Starters 34",
    "Achieved Highest Rating of 1677 on Leetcode",
  ];

  return (
    <div className="w-[1200px] max-w-[90%] mx-auto md:mt-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-[60%] flex flex-col justify-center px-8">
          <h1 className="text-2xl md:text-4xl font-bold">About Me</h1>
          <p className="mt-6 text-sm md:text-base">
            Hi Everyone, I am Raunak Kakkar from Uttarakhand, India. I have done
            my graduation from DIT University.
          </p>
          <div className="mt-8 text-sm md:text-base">
            <p>Some of my achievements are:</p>
          </div>
          <ul>
            {ACHIEVEMENTS.map((achievement, key) => (
              <li key={key} className="flex gap-3 md:item-center mt-4">
                <div>
                  <IoIosStar size="1.3rem" />
                </div>
                <p className="text-sm md:text-base">{achievement}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-[40%]">
          <AboutAvatarSVG className="w-[100%]" />
        </div>
      </div>
      <div className="my-10">
        <SkillSection />
      </div>
    </div>
  );
};

export default About;
