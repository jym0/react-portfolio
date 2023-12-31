import React from 'react'
import "../scss/Resume.scss";
import SchoolIcon from "@mui/icons-material/School";
import PolylineIcon from "@mui/icons-material/Polyline";
import DetailsIcon from "@mui/icons-material/Details";


const Resume = () => {


  const skills = [
    {
      title: "HTML",
      progress: "50",
    },
    {
      title: "CSS",
      progress: "50",
    },
    {
      title: "bootstrap",
      progress: "30",
    },
    {
      title: "scss",
      progress: "20",
    },
    {
      title: "javascript",
      progress: "25",
    },
    {
      title: "php",
      progress: "25",
    },
    {
      title: "mysql",
      progress: "20",
    },
    {
      title: "react js",
      progress: "15",
    },
    {
      title: "illustrator",
      progress: "20",
    },
    {
      title: "canva",
      progress: "50",
    },
    {
      title: "figma",
      progress: "15",
    },
  ];

  const splitSkills = Math.ceil(skills.length / 2);
  const firstColumnSkills = skills.slice(0, splitSkills);
  const secondColumnSkills = skills.slice(splitSkills);

  return (
    <section className="resume">
      <h1 className="title_resume">combination of skills & experience</h1>
      <div className="title">
        <p className="title_text">
          <span>
            R<em></em>
          </span>
          esume
        </p>
      </div>
      <div className="education_container">
        <h2 className="section_title">education</h2>
        <div className="educ_border">
          <p className="school_level">
            <span>College</span> - Bachelor of Science in Computer Engineering{" "}
            <DetailsIcon className="educ_icons" />
          </p>
          <p className="school">Rizal Technological University(Boni Campus)</p>
          <p className="school_year">2019-Present</p>
          <p className="school_level">
            <span>Senior High School</span> - STEM{" "}
            <DetailsIcon className="educ_icons" />
          </p>
          <p className="school">Rizal Technological University(Boni Campus)</p>
          <p className="school_year">2017-2019</p>
          <p className="school_level">
            <span>Junior High School</span>{" "}
            <DetailsIcon className="educ_icons" />
          </p>
          <p className="school">Taguig National High School</p>
          <p className="school_year">2013-2017</p>
        </div>
      </div>

      <div className="experience_container">
        <h2 className="section_title">experience</h2>
        <p className="exp_type">Internship</p>
        <p className="exp_work">
          Graphic Designer <span>2023</span>
        </p>
        <p className="company">JAE Hub Web Services</p>
        <p className="works">
          &diams; Responsible for creating and designing marketing materials
          such as posters, Facebook banners, cards, and promotional items for
          the clients and company.
        </p>
        <p className="works">
          &diams; Responsible for making a short video clip or informative video
          that promotes the company and its clients.
        </p>
        <p className="works last_works">
          &diams; Provide and used various web templates, sometimes as the basic
          layout, and customize them according to the required functionality for
          the company.
        </p>
        <div className="hashtags_skill">
          <span></span>
          <p>#creativity</p>
          <p>#communication</p>
          <p>#adaptability</p>
        </div>
      </div>
      <h2 className="skills_title">skills/tools</h2>
      <div id="skills_container">
        <div className="skills_column">
          {firstColumnSkills.map((skill, index) => (
            <li key={index}>
              <strong>{skill.title}</strong>
              <div className="progress_bar_container">
                <div
                  className="progress_bar"
                  style={{ width: `${skill.progress}%` }}
                ></div>
              </div>
              <div className="progress_rate">
                <span>beginner</span>
                <span>user</span>
                <span>professional</span>
                <span>expert</span>
              </div>
            </li>
          ))}
        </div>
        <div className="skills_column">
          {secondColumnSkills.map((skill, index) => (
            <li key={index}>
              <strong>{skill.title}</strong>
              <div className="progress_bar_container">
                <div
                  className="progress_bar"
                  style={{ width: `${skill.progress}%` }}
                ></div>
              </div>
              <div className="progress_rate">
                <span>beginner</span>
                <span>user</span>
                <span>professional</span>
                <span>expert</span>
              </div>
            </li>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume