import React from "react";

const Achievement: React.FC = () => {
  return (
    <div className="achievement">
      <div className="card">
        <h1>My Achievements</h1>
        <h2>Academic Achievement</h2>
        <ul>
          <li>
            <a
              href="https://www.ocha.ac.jp/news/d012967.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              令和5年度学部生成績優秀者奨学金
            </a>
            を得る
          </li>
          <li>
            <a
              href="http://itolab.is.ocha.ac.jp/~itot/teaching/work/cvis/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              情報可視化によるデータ分析
            </a>
            にて代表作品に選ばれる
          </li>
          <li>
            <a
              href="http://itolab.is.ocha.ac.jp/~itot/teaching/cv/2023/"
              target="_blank"
              rel="noopener noreferrer"
            >
              コンピュータビジョン
            </a>
            にて代表作品に選ばれる（学内者のみ閲覧可）
            <ul>
              <li>
                <a
                  href="https://github.com/sekiguchi0731/CV"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  作成したプログラム
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Achievement;
