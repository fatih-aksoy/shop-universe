import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex justify-center flex-col items-center mt-[5rem]">
          <img
            src="https://media.licdn.com/dms/image/C4E03AQHL_D888Lnupw/profile-displayphoto-shrink_800_800/0/1616325996476?e=2147483647&v=beta&t=q-qzCkIKzo5uaHVtZbWHCPKgo2lVZGKtzhJ7fK54ZsA"
            alt="Fatih"
            width="350px"
          />
          <div className="text-center w-[25rem]">
            <p className="text-2xl mt-5 font-semibold">
              My name is <span className="text-red-600">Fatih</span> , I am
              Front end developer
            </p>
            <p className="text-2xl mt-5 leading-8">
              Hello, I'm Fatih, a seasoned React developer passionate about
              creating captivating web experiences and mentoring aspiring
              developers.
              <p className="text-2xl mt-5 leading-8">
                With expertise in React, React Native, and Node.js, I architect
                elegant solutions that go beyond mere code. My mission is not
                only to build exceptional applications but also to inspire and
                guide others in their coding journey.
              </p>
              <div className="flex justify-center items-center">
                <a
                  href="https://github.com/fatih-aksoy?tab=repositories"
                  className="font-bold text-2xl text-pink-950 text-center m-5"
                >
                  My Github Repo
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100003570793324"
                  className="font-bold text-2xl text-pink-950 text-center m-5"
                >
                  My Facebook
                </a>
                <a
                  href="https://www.youtube.com/watch?v=4EbfCkmBZBI"
                  className="font-bold text-2xl text-pink-950 text-center m-5"
                >
                  My guitar cover
                </a>
              </div>
              <p className="text-2xl mt-5 leading-8 mb-3">
                Join me at the intersection of creativity, education, and
                cutting-edge technology as we shape the digital landscape and
                make life easier in the digital world!
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
