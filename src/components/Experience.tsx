import React from "react";

const Experience: React.FC = () => {
  return (
    <div className="experience">
      <div className="card">
        <h1>My Experience</h1>
        <h2>Part-time Job</h2>
        <h4>June, 2021~</h4>
        個別教室のトライにて塾講師として勤務
        <ul>
          <li>
            当日の授業キャンセルをなくすべく、
            <a
              href="https://github.com/sekiguchi0731/Calender"
              target="_blank"
              rel="noopener noreferrer"
            >
              塾のWebカレンダーとLineBotを連携するツール
            </a>
            を作成
          </li>
        </ul>
        <h2>Contract Work</h2>
        <h4>Nov, 2022~</h4>
        <a
          href="https://www.rhelixa.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          株式会社Rhelixa
        </a>
        にて、システムエンジニアとして勤務
        <ul>
          <li>
            主にR, Ruby on Rails, HTML, JavaScriptを用いて
            <a
              href="https://www.rhelixa.com/rias/visualization/"
              target="_blank"
              rel="noopener noreferrer"
            >
              バイオインフォマティクス可視化ツール
            </a>
            の、開発・保守を行う
          </li>
        </ul>
        <h2>Educational Programs</h2>
        <h4>June, 2024 ~ July, 2024</h4>
        Google STEP 教育プログラムに参加
        <ul>
          <li>
            毎週出される課題に対して、Pythonを用いて
            <a
              href="https://github.com/sekiguchi0731/step24-edu"
              target="_blank"
              rel="noopener noreferrer"
            >解答を提出</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
