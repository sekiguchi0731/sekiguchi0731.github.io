import { useMemo, useState } from "react";

type AchievementCategory = "all" | "academic" | "development" | "community";

type LinkCard = {
  id: string;
  href: string;
  label: string;
  title: string;
  description: string;
  accent: string;
};

type Achievement = {
  category: Exclude<AchievementCategory, "all">;
  title: string;
  detail: string;
  href?: string;
  hrefLabel?: string;
};

const homeLinks: LinkCard[] = [
  {
    id: "about",
    href: "#about",
    label: "Profile",
    title: "About",
    description:
      "プロフィール",
    accent: "latte",
  },
  {
    id: "major",
    href: "#major",
    label: "Research",
    title: "Major",
    description:
      "専攻について",
    accent: "cocoa",
  },
  {
    id: "achievement",
    href: "#achievement",
    label: "Highlights",
    title: "Achievement",
    description:
      "カテゴリごとに切り替えて見られます",
    accent: "rose",
  },
];

const achievements: Achievement[] = [
  {
    category: "academic",
    title: "令和5年度 学生成績優秀者奨学金",
    detail: "学部学業成績に対して授与された奨学金．",
    href: "https://www.ocha.ac.jp/news/d012967.html",
    hrefLabel: "掲載ページ",
  },
  {
    category: "academic",
    title: "令和6年度 学生表彰",
    detail: "学業成績に対して授与された表彰．",
    href: "https://www.ocha.ac.jp/news/d015671.html",
    hrefLabel: "掲載ページ",
  },
  {
    category: "academic",
    title: "DEIM2025 学生プレゼンテーション賞",
    detail: "プレゼンテーションに対して授与された賞．",
    href: "https://www.ocha.ac.jp/news/d016002.html",
    hrefLabel: "掲載ページ",
  },
  {
    category: "academic",
    title: "DEIM2026 学生プレゼンテーション賞",
    detail: "プレゼンテーションに対して授与された賞．",
    href: "https://www.ocha.ac.jp/news/d017696.html",
    hrefLabel: "掲載ページ",
  },
  {
    category: "academic",
    title: "全国大会2026 学生奨励賞",
    detail: "プレゼンテーションに対して授与された賞．",
    href: "https://www.ocha.ac.jp/news/d017639.html",
    hrefLabel: "掲載ページ",
  },
  {
    category: "development",
    title: "LINE Bot 連携ツール",
    detail: "塾講師の現場で起きる連絡抜けを減らすためのツール．",
    href: "https://github.com/sekiguchi0731/Calender",
    hrefLabel: "GitHub",
  },
  {
    category: "development",
    title: "Niji-match",
    detail: "二次会の幹事が楽になるマッチングサイト．",
    href: "https://github.com/sekiguchi0731/HackU_team4",
    hrefLabel: "GitHub",
  },
];

const categoryLabels: Record<AchievementCategory, string> = {
  all: "All",
  academic: "Academic",
  development: "Development",
  community: "Community",
};

export default function App() {
  const [activeCategory, setActiveCategory] =
    useState<AchievementCategory>("all");

  const visibleAchievements = useMemo(() => {
    if (activeCategory === "all") {
      return achievements;
    }

    return achievements.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="site-shell">
      <div className="background-blur blur-a" />
      <div className="background-blur blur-b" />

      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-icon">HS</span>
          <span className="brand-copy">
            <strong>Hinata Sekiguchi</strong>
            <small>my portfolio</small>
          </span>
        </a>

        <nav className="topnav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#major">Major</a>
          <a href="#achievement">Achievement</a>
        </nav>
      </header>

      <main className="page">
        <section id="home" className="hero-panel">
          <div className="hero-copy">
            <p className="eyebrow">Personal site</p>
            <h2>
              HOME
            </h2>
            <p className="lead">
              関口 ひなたのポートフォリオサイトです．
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#about">
                start here
              </a>
              <a
                className="button secondary"
                href="https://github.com/sekiguchi0731"
                target="_blank"
                rel="noreferrer"
              >
                github
              </a>
            </div>
          </div>

          <div className="home-links" aria-label="Home section links">
            {homeLinks.map((card) => (
              <a
                key={card.id}
                className={`home-card tone-${card.accent}`}
                href={card.href}
              >
                <span className="home-card-label">{card.label}</span>
                <strong>{card.title}</strong>
                <p>{card.description}</p>
                <span className="home-card-cta">open section</span>
              </a>
            ))}
          </div>
        </section>

        <section id="about" className="section-card">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>About Me</h2>
          </div>

          <div className="about-grid">
            <article className="paper-card">
              <h3>Hinata SEKIGUCHI</h3>
              <p className="meta">2nd master's Student, Ochanomizu University</p>
              <p>プライバシと機械学習について研究しています．</p>
              <dl className="info-list">
                <div>
                  <dt>Email</dt>
                  <dd>hinata[at]ogl.is.ocha.ac.jp</dd>
                </div>
                <div>
                  <dt>Lab</dt>
                  <dd>小口研究室</dd>
                </div>
                <div>
                  <dt>Keywords</dt>
                  <dd>Differential Privacy, Machine Learning</dd>
                </div>
              </dl>
            </article>

            <article className="paper-card accent-card">
              <h3>What interests me</h3>
              <ul className="dot-list">
                <li>情報理論・プライバシ</li>
                <li>食べ物</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="major" className="section-card">
          <div className="section-heading">
            <p className="eyebrow">Major</p>
            <h2>My Major</h2>
          </div>

          <div className="major-grid">
            <article className="major-card">
              <span className="mini-tag">Main Topic</span>
              <h3>Differential Privacy</h3>
              <p>
                個人情報を数学的に守りたいです．
              </p>
              <a
                href="https://www.is.ocha.ac.jp/~oguchi_lab/"
                target="_blank"
                rel="noreferrer"
              >
                lab website
              </a>
            </article>

            <article className="major-card soft">
              <span className="mini-tag">Current topic</span>
              <h3>Label Differential Privacy</h3>
              <p>
                相関で情報が漏洩しそうだなぁという純粋な疑問を掘り下げています．
              </p>
            </article>
          </div>
        </section>

        <section id="achievement" className="section-card">
          <div className="section-heading split">
            <div>
              <p className="eyebrow">Achievement</p>
              <h2>My Achievements</h2>
            </div>

            <div className="filter-row" aria-label="Achievement filter">
              {(Object.keys(categoryLabels) as AchievementCategory[]).map(
                (category) => (
                  <button
                    key={category}
                    type="button"
                    className={category === activeCategory ? "is-active" : ""}
                    onClick={() => setActiveCategory(category)}
                  >
                    {categoryLabels[category]}
                  </button>
                ),
              )}
            </div>
          </div>

          <div className="achievement-grid">
            {visibleAchievements.map((item) => (
              <article
                key={`${item.category}-${item.title}`}
                className="achievement-card"
              >
                <span className="mini-tag">
                  {categoryLabels[item.category]}
                </span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.hrefLabel}
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
