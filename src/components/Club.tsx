import React from "react";
import "./Club.scss";

const Club: React.FC = () => {
  return (
    <div className="club">
      <div className="card">
        <div className="club-details">
          <h1>My Clubs</h1>
          <h2>
            {/* 新しいタブでリンクをひらく */}
            <a
              href="https://anothervision.tokyo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Another Vision
            </a>
          </h2>
          <h4>行事部（運営）に所属</h4>
          <p className="club-contact">
            <p>謎解きをチームで制作するサークル</p>
            <p>主に、デザイン・システム（プログラマ）等を担当</p>
            <p>
              <a
                href="https://anothervision.tokyo/contents/details/next"
                target="_blank"
                rel="noopener noreferrer"
              >
                NEXT
              </a>
              では、述べ500人を超えるお客様にプレーしていただく
            </p>
            <p>
              <a
                href="https://anothervision.tokyo/contents/details/Qking"
                target="_blank"
                rel="noopener noreferrer"
              >
                Qキング・アドベンチャー
              </a>
              では、400人を超えるお客様にプレーしていただき、満足度86%を得る
            </p>
            <p>その他、「SOLVE ME」や「GAME SPACE」、「ARCADE」などの制作にも携わる</p>
            <p>また、行事部として新入生に対する制作講座会を開く</p>
          </p>
          <h2>
            {/* 新しいタブでリンクをひらく */}
            <a
              href="https://note.com/lnamikol/n/na4da29fb373d"
              target="_blank"
              rel="noopener noreferrer"
            >
              TEAra
            </a>
          </h2>
          <h4>SNS担当</h4>
        </div>
      </div>
    </div>
  );
};

export default Club;
