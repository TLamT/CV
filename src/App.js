import { useEffect } from 'react';
import './App.css';

const Star = ({ size, top, left }) => {
    return (
        <div
            className="star"
            style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
            }}
        />
    );
};
function App() {
  const stars = Array.from({ length: 100 }).map(() => ({
        size: Math.random() * 3 + 1, // 随机星星大小
        top: Math.random() * 100,     // 随机位置
        left: Math.random() * 100,
    }));
  return (
    <div className="sky">
            {stars.map((star, index) => (
                <Star key={index} {...star} />
            ))}
    <div id="card">
      <div id="head">
        <div></div><h1>Tsang Tak Lam</h1>
        <h2>Phone: 6575 2654</h2> 
        <h2>Email: <a href="mailto:tsangtaklam@yahoo.com.hk">tsangtaklam@yahoo.com.hk</a></h2>
        <h3><a href="https://www.linkedin.com/in/tlamt/"><img src="https://img.icons8.com/ios/50/000000/linkedin.png"/></a></h3>
        </div>
        <div id="profile">
          <h1>Profile</h1>
          <p>Experienced in software development with a focus on web applications. Proficient in
          JavaScript, React, and Node.js. Strong problem-solving skills and a passion for learning
          new technologies.</p></div>
        <div id="Work-Experience">
          <h1>PROFESSIONAL EXPERIENCE</h1>
          <h2>Project Executive and QA, Onebox Creative Limited | Jan - Apr 2024</h2>
          <ul>
            <li>Lead and manage staff assigned to the engagement</li>
            <li>Provide in-house training in specific areas of expertise such as project management disciplines, emerging areas, relevant risk management frameworks, compliance and audit processes</li>
            <li>Analyze project or requirement documents to identify test requirements and establish an estimate based on
established templates and approaches</li>
            <li>Lead the development of the Master Test Strategy and Plan</li>
            <li>Drive the design, development and management of robust Test Cases for both positive and negative
scenarios
</li>
          </ul>
          <h2>IT Support, T.F Information Technology Company | Oct 2022 - Aug 2023</h2>
          <ul>
            <li>Assisted clients with daily living needs to maintain self-esteem and general wellness</li>
            <li>Helped clients manage and reach individual goals, supporting independent progression and social skills</li>
            <li>Transported clients to appointments, shopping venues and entertainment events according to determined
schedule</li>
            <li>Kept clients engaged in social networks and communities for personal health and growth</li>
          </ul>
          <h2>Barista, Fuel Espresso | Jun 2022 - Nov 2022</h2>
          <li>Pleasantly interacted with customers during hectic periods to promote fun, positive environment</li>
          <h2>Barista, StarBucks | Nov 2021 - Jun 2022</h2>
          <li>Listened carefully to customer requests and created personalized, delicious beverages, which improved sales</li>
        </div>
        <div id="skills">
          <h1>Skill</h1>
          <ul>
          <li><h5>Programming Languages : Python, HTML, CSS, JavaScript , React.JS , Node.JS, Vue.JS</h5></li>
          <li><h5>Software Tools : Microsoft Office Suite (Word, Excel, PowerPoint), JIRA, Trello</h5></li>
          <li><h5>Database Management : SQL, MongoDB</h5></li>
          <li><h5>Version Control : Git, GitHub</h5></li>
          </ul>
          </div>
        <div id="education">
          <h1>Education</h1>
          <h2>Generation | Sep - Dec 2024───Junior Full Stack Developer Program Cohort 12</h2>
          <ul>
            <li>
              <h3>Final Project - Game Project : 港版狼人殺 (Socket.IO, Next.JS,
Node.JS)</h3>
            </li>
            <li>
              <h3>KMB & MTR Web App ( React.JS, TailWind)</h3>
            </li>
          </ul>
          <h2>Hong Kong Institute of Vocational Education| Higher Diploma in Applied in Applied Science | 2018 - 2020</h2>
          <ul>
            <li>
            <h3>Completed a 10,000-word graduation project comparing natural lipstick and regular lipstick</h3>
            </li></ul>
          <h2>Hong Kong Institute of Vocational Education | Diploma of Foundation in Business | 2016 - 2017
</h2>
          <h2>Buddhist Wong Wan Tin College | 2010 - 2016
</h2>
<ul>
  <li>HKDSE 2016</li>
</ul>
          </div>
          </div>
    </div>
  );
}

export default App;
