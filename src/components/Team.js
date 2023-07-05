import React, { useState } from "react";
import image8 from "../Assets/images/image8.jpg";
import image9 from "../Assets/images/image9.png";
import image10 from "../Assets/images/image10.jpg";
import image11 from "../Assets/images/image11.jpg";
import image12 from "../Assets/images/image12.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

const Team = () => {
  const [team, setTeam] = useState([
    {
      img: image8,
      name: "PRAKHAR SRIVASTAVA",
      role: "Web Developer",
      description:
        "Prakhar is a highly skilled web developer: a self-driven, quick starter, passionate programmer with a curious mind who enjoys solving a complex and challenging real-world problems.",
      linkedin: "https://www.linkedin.com/in/prakhar-srivastava-15b9ba202/",
      git: "https://github.com/prakhar040",
      mail: "mailto:prakhar.srivastava040@gmail.com",
      insta: "https://www.instagram.com/prakhar.srivastava040/",
    },
    {
      img: image9,
      name: "PRANAB MISHRA",
      role: "UI/UX Designer",
      description:
        "Meet our talented UI/UX designer who brings life to pixels with his seamless designs and intuitive user experiences. With a keen eye for aesthetics and a passion for user-centric design, he crafts interfaces that inspire and engage.",
      linkedin: "https://www.linkedin.com/in/pranab-mishra/",
      git: "https://github.com/Pranab-Mishra",
      mail: "mailto:mishrapranab0@gmail.com",
      insta: "https://instagram.com/pranabmishra_26?igshid=MzNlNGNkZWQ4Mg==",
    },
    {
      img: image10,
      name: "SARAL HANDA",
      role: "Blockchain Developer",
      description:
        "Meet our brilliant blockchain developer, who brings a wealth of expertise in developing secure and decentralized applications, ensuring cutting-edge technology and innovation in every line of code.",
      linkedin: "https://www.linkedin.com/in/saralhanda/",
      git: "https://github.com/Saralhanda",
      mail: "mailto:saralhanda13@gmail.com",
      insta: "https://www.instagram.com/saralhanda_03/",
    },
  ]);
  return (
    <div>
      <section>
        <div className=" text-center mt-6 text-3xl">
          <h1>
            The Team Behind The Project "Authenticity in Food Supply Chain"
          </h1>
          <br />
          <p className=" text-xl">Welcome to our team page! </p>
          <br />
          <p className=" text-lg text-center">
            We are a group of passionate individuals working together to bring
            you the best experience possible.Each member of
            <br /> our team brings unique skills and expertise, enabling us to
            create innovative solutions and deliver outstanding results.
          </p>
        </div>

        <div className=" flex flex-wrap justify-evenly">
          {team.map((e, i) => {
            return (
              <div className=" text-lg font-medium shadow-lg p-2 hover:-translate-y-3 cursor-pointer mt-10 transition-all duration-500 w-96">
                <img className=" rounded-full h-64 w-64" src={e.img} alt="" />
                <br />
                <h1>
                  <span className=" text-xl">{e.name}</span>
                </h1>
                <h1 className=" text-lg">{e.role}</h1>
                <br />
                <h1 className=" text-lg text-justify">{e.description}</h1>
                <Link to={e.linkedin}>
                  <LinkedInIcon />
                </Link>
                <Link to={e.git}>
                  <GitHubIcon />
                </Link>
                <Link to={e.mail}>
                  <MailOutlineIcon />
                </Link>
                <Link to={e.insta}>
                  <InstagramIcon />
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <br />
      <h1 className=" text-2xl text-center mt-8">Our Mentor</h1>
      <br />
      <div className=" flex flex-row justify-evenly">
        <div className=" mt-10 flex flex-col justify-center items-center">
          <img className=" rounded-full h-64 w-64" src={image11} alt="" />
          <br />
          <h1>Dr. Amit Kumar Srivastava</h1>
          <p>Assistant Professor</p>
          <p>Computer Science Engineering</p>
          <p>Jaypee University of Engineering and Technology</p>
        </div>

        <div className=" mt-10 flex flex-col justify-center items-center">
          <img className=" rounded-full h-64 w-64" src={image12} alt="" />
          <br />
          <h1>Dr. Ravindra Kumar Singh</h1>
          <p>Assistant Professor</p>
          <p>Computer Science Engineering</p>
          <p>Jaypee University of Engineering and Technology</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
