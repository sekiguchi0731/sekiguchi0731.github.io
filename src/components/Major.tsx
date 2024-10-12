import React from "react";

const Major: React.FC = () => {
  return (
    <div className="major">
      <div className="card">
        <h1>My Major</h1>
        <h2>Computer Science</h2>
        <h4>
          <a
            href="https://www.is.ocha.ac.jp/~oguchi_lab/"
            target="_blank"
            rel="noopener noreferrer"
          >
            小口研究室
          </a>
          所属
        </h4>
        <p>機械学習・プライバシについて研究</p>
        <p>
          現在は差分プライバシの
          <a
            href="https://github.com/jinpz/label_differential_privacy"
            target="_blank"
            rel="noopener noreferrer"
          >実装</a>
          について着手している
        </p>
      </div>
    </div>
  );
};

export default Major;
