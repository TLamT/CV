"use client";
import { useState } from 'react';
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
    const [change, setChange] = useState(true);
  const handleChange = (e) => {
    setChange(prev => !prev);
    
    }
  
  return (
    <div className="sky">
            {stars.map((star, index) => (
                <Star key={index} {...star} />
            ))}
            <button className="btn"  onClick={() => handleChange()}>{change ? "中文" : "English"}</button>
            {change ? (
    <div id="card">
      <div id="contact">
        <a href="https://www.linkedin.com/in/tlamt/" target='_blank'><img src="https://img.icons8.com/ios/50/000000/linkedin.png"/></a>
        <a href="mailto:tsangtaklam@yahoo.com.hk" target='_blank'><img src="https://img.icons8.com/ios/50/000000/gmail.png"/></a>
        </div>
      <div id="head">
            
          <h1>Tsang Tak Lam</h1>
          
        <div id='phone'>Phone: 6575 2654</div> 
        
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
          </div>) : (
            <div id="card">
      <div id="contact">
        <a href="https://www.linkedin.com/in/tlamt/" target='_blank'><img src="https://img.icons8.com/ios/50/000000/linkedin.png"/></a>
        <a href="mailto:tsangtaklam@yahoo.com.hk" target='_blank'><img src="https://img.icons8.com/ios/50/000000/gmail.png"/></a>
        </div>
      <div id="head">
            
          <h1>曾德霖</h1>
          
        <div id='phone'>電話: 6575 2654</div> 
        
        </div>
      
        <div id="profile">
          <h1>個人資料</h1>
          <p>在軟體開發方面擁有豐富經驗，專注於Web應用程式。熟練掌握JavaScript、React和Node.js。具備強大的問題解決能力，並對學習新技術充滿熱情。</p></div>
        <div id="Work-Experience">
          <h1>工作經驗</h1>
          <h2>Project Executive and QA, Onebox Creative Limited | 1月 - 4月 2024</h2>
          <ul>
            <li>領導並管理指派到專案的員工</li>
            <li>提供內部培訓，涵蓋專業領域，例如專案管理學科、新興領域、相關的風險管理框架、合規性和審計過程</li>
            <li>分析專案或需求文件，以識別測試需求並根據既定模板和方法建立預估</li>
            <li>主導制定主測試策略和計劃</li>
            <li>驅動設計、開發和管理穩健的測試案例，涵蓋正面和負面情境</li>
          </ul>
          <h2>IT Support, T.F Information Technology Company | 10月 2022 - 8月 2023</h2>
          <ul>
            <li>安裝和配置電腦、印表機、掃描器等辦公室設備，並確保其正常運行。 </li>
            <li>診斷和修復電腦、網路和其他硬體設備的問題，包括更換零件或升級硬體。 </li>
            <li>確保軟體保持最新版本，並進行必要的維護工作。 </li>
            <li>協助維護網路安全，包括安裝和更新防毒軟體、設定防火牆等。 </li>
          </ul>
          <h2>Barista, Fuel Espresso | 6月 2022 - 11月 2022</h2>
          <li>在繁忙時期，提供優質的客戶服務，並為顧客準備飲品。</li>
          <h2>Barista, StarBucks | 11月 2021 - 6月 2022</h2>
          <li>仔細聆聽客戶的要求，製作個性化、美味的飲品，從而提升了銷售。</li>
        </div>
        <div id="skills">
          <h1>技能</h1>
          <ul>
          <li><h5>程式語言 : Python, HTML, CSS, JavaScript , React.JS , Node.JS, Vue.JS</h5></li>
          <li><h5>軟體工具 : Microsoft Office Suite (Word, Excel, PowerPoint), JIRA, Trello</h5></li>
          <li><h5>資料庫管理 : SQL, MongoDB</h5></li>
          <li><h5>版本控制 : Git, GitHub</h5></li>
          </ul>
          </div>
        <div id="education">
          <h1>教育</h1>
          <h2>Generation | 9月 - 12月 2024───初級全端開發 第12期</h2>
          <ul>
            <li>
              <h3>Final Project - Game Project : 港版狼人殺 (Socket.IO, Next.JS,
Node.JS)</h3>
            </li>
            <li>
              <h3>九巴與港鐵的實時到站資訊網頁應用程式 ( React.JS, TailWind)</h3>
            </li>
          </ul>
          <h2>香港專業教育學院| 應用科學高級文憑 | 2018 - 2020</h2>
          <ul>
            <li>
            <h3>完成了一項10,000字的畢業專案，比較天然口紅和普通口紅。</h3>
            </li></ul>
          <h2>香港專業教育學院 | 商業基礎文憑 | 2016 - 2017
</h2>
          <h2>佛教黃允畋中學 | 2010 - 2016
</h2>
<ul>
  <li>香港中學文憑考試 2016</li>
</ul>
          </div>
          </div>) }
    </div>
  );
}

export default App;
