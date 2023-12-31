import React from 'react'
import "../scss/About.scss";
import myPic from "../assets/myPic.png";
import BadgeIcon from "@mui/icons-material/Badge";

const About = () => {

  const repeatBybyin2 = 3;
  
  return (
    <section className="about">
      <div className="title">
        <p className="title_text">
          <span>a</span>bout me
        </p>
      </div>
      <div className="myName_container">
        <p>
          My name is
          <u>
            Jym Weil
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 196.000000 30.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              {" "}
              <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)">
                {" "}
                <path d="M1396 286 c-37 -17 -19 -29 29 -20 29 5 33 9 24 20 -13 16 -15 16 -53 0z" />{" "}
                <path d="M633 235 c-12 -8 -45 -53 -73 -100 -60 -97 -70 -108 -102 -103 -22 3 -23 8 -25 83 -1 44 -2 86 -2 93 -1 18 -53 11 -59 -8 -4 -13 -3 -13 10 -2 24 20 30 0 23 -72 -8 -76 -1 -104 29 -116 51 -19 75 -2 143 104 70 107 79 117 100 109 18 -7 16 -33 -4 -55 -14 -15 -14 -18 -1 -18 17 0 48 31 48 48 0 16 -37 52 -53 52 -7 0 -22 -7 -34 -15z" />{" "}
                <path d="M983 206 c-37 -43 -40 -44 -110 -48 l-71 -4 5 32 c6 38 -21 55 -46 29 -15 -15 -14 -15 2 -9 21 7 21 -4 6 -92 -12 -72 -4 -98 36 -108 44 -11 77 15 145 114 67 97 94 116 126 89 23 -19 28 -3 5 20 -31 31 -55 26 -98 -23z m-63 -86 c-6 -11 -28 -38 -49 -61 -34 -35 -42 -39 -60 -29 -15 7 -21 20 -21 43 0 53 14 62 103 66 35 1 37 -1 27 -19z" />{" "}
                <path d="M1477 233 c-19 -22 -24 -44 -5 -25 20 20 66 15 78 -8 31 -59 -73 -170 -159 -170 -37 0 -42 15 -31 87 14 81 12 103 -6 110 -8 3 -23 -2 -32 -11 -16 -16 -16 -17 0 -14 9 2 18 1 19 -2 2 -3 -3 -37 -10 -77 -14 -82 -7 -108 36 -116 93 -18 223 82 223 172 0 51 -80 90 -113 54z" />{" "}
                <path d="M1801 225 c-78 -30 -120 -31 -155 -4 -28 22 -32 19 -16 -11 14 -26 70 -42 119 -34 35 6 41 4 41 -11 0 -10 -7 -26 -16 -36 -16 -18 -15 -29 8 -61 10 -14 8 -21 -11 -42 l-23 -25 27 8 c16 4 34 16 42 28 12 18 11 23 -6 44 -19 24 -19 24 1 46 19 21 20 24 5 47 -16 24 -16 25 15 35 46 16 72 13 104 -11 24 -19 27 -20 21 -4 -4 10 -7 19 -7 22 0 6 -58 34 -72 34 -7 -1 -42 -12 -77 -25z" />{" "}
                <path d="M32 190 c-58 -54 -24 -150 52 -150 39 1 68 24 94 76 36 71 78 89 117 50 33 -33 32 -61 -4 -97 -19 -19 -24 -29 -15 -29 8 0 26 11 39 25 34 33 34 84 -1 119 -48 47 -114 25 -153 -52 -39 -76 -86 -91 -124 -40 -26 35 -16 73 26 98 26 16 28 20 11 20 -11 0 -30 -9 -42 -20z" />{" "}
              </g>{" "}
            </svg>
          </u>
        </p>
        <p>
          I'm a <span></span> aspiring
        </p>
        <p>
          <u>web developer</u>
          <span></span>{" "}
          <strong>
            . <span></span>
          </strong>
        </p>
      </div>
      <div className="mySelf_container">
        <div className="div_figure">
          <figure>
            <img src={myPic} alt="my picture" />
            <figcaption>
              <BadgeIcon className="badgeIcon" />
              <h4>web developer</h4>
              <p>Jym Weil F. Fabellore</p>
              <p>December 22, 2000</p>
              <p>fabellorejym@gmail.com</p>
              <p>09064821687</p>
            </figcaption>

            <div className="bybyin_resume">
              {[...Array(repeatBybyin2)].map((_, index) => (
                <svg
                  key={index}
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="203.000000pt"
                  height="65.000000pt"
                  viewBox="0 0 203.000000 65.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {" "}
                  <g transform="translate(0.000000,65.000000) scale(0.100000,-0.100000)">
                    {" "}
                    <path d="M302 634 c-13 -9 -34 -14 -48 -11 -23 4 -24 3 -8 -14 27 -30 51 -32 82 -9 25 19 33 20 53 10 22 -10 21 -9 -4 14 -33 30 -44 32 -75 10z" />{" "}
                    <path d="M1699 634 c-8 -10 -23 -14 -41 -12 -34 5 -35 2 -5 -23 29 -24 50 -24 73 2 13 14 26 18 44 14 l25 -5 -24 20 c-28 24 -54 26 -72 4z" />{" "}
                    <path d="M5 550 c-3 -4 5 -26 17 -47 29 -48 31 -157 4 -218 -24 -54 -24 -119 -1 -145 51 -57 174 -46 337 29 104 48 171 38 242 -35 37 -38 46 -33 22 14 -34 65 -104 103 -176 95 -18 -2 -59 -15 -89 -29 -158 -73 -273 -89 -303 -41 -12 19 -9 65 8 124 9 32 14 74 11 99 -4 41 -3 43 16 32 37 -19 100 -9 234 37 72 25 148 45 168 45 46 0 88 -22 115 -60 30 -43 36 -31 12 23 -41 93 -118 103 -297 38 -66 -24 -139 -46 -162 -49 -51 -5 -104 14 -102 37 1 9 1 21 0 27 -1 15 -49 36 -56 24z" />{" "}
                    <path d="M1106 550 c-48 -15 -61 -35 -127 -192 -74 -175 -99 -208 -157 -208 -66 0 -68 10 -38 168 30 161 31 166 11 185 -17 17 -51 12 -77 -11 -25 -21 -22 -35 3 -22 32 18 52 5 44 -28 -10 -40 -45 -244 -45 -265 0 -10 11 -29 25 -42 20 -20 34 -25 78 -25 93 0 111 19 187 204 36 86 75 168 87 182 30 33 85 33 118 -1 40 -39 28 -73 -37 -106 l-40 -21 49 -23 c146 -67 111 -205 -53 -205 -49 0 -112 24 -121 47 -3 7 -9 13 -14 13 -16 0 13 -61 37 -76 31 -21 142 -20 205 1 130 44 127 198 -5 231 -34 8 -33 16 6 34 40 19 55 58 36 97 -24 50 -111 82 -172 63z" />{" "}
                    <path d="M1892 544 c-18 -9 -54 -46 -80 -80 -45 -62 -49 -64 -92 -65 -55 0 -155 -8 -194 -14 l-29 -5 7 50 c4 30 2 58 -4 70 -14 26 -61 27 -83 2 -23 -25 -21 -35 4 -21 41 21 43 -1 19 -149 -23 -139 -23 -140 -4 -173 40 -67 131 -74 202 -14 16 14 73 91 126 173 56 85 111 157 130 170 38 26 82 28 114 6 19 -13 22 -13 22 -1 0 51 -80 80 -138 51z m-207 -262 c-67 -98 -106 -132 -148 -132 -39 0 -54 9 -64 38 -8 21 6 144 17 155 3 3 57 8 120 12 63 4 117 9 119 11 2 2 6 2 8 0 2 -2 -21 -40 -52 -84z" />{" "}
                    <path d="M1004 59 c-18 -12 -38 -17 -52 -14 -31 7 -20 -10 18 -30 26 -13 30 -13 54 6 18 14 33 18 48 13 21 -6 21 -5 9 10 -27 32 -46 36 -77 15z" />{" "}
                  </g>{" "}
                </svg>
              ))}
            </div>
          </figure>
        </div>
        <div className="devoted_container">
          <h2>Devoted to responsibilities</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            viverra nibh cras pulvinar mattis nunc sed blandit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Quis viverra nibh cras
            pulvinar mattis nunc sed blandit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis viverra nibh cras pulvinar
            mattis nunc sed blandit.
          </p>

          <a class="download_cv">
            <span>download cv</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About