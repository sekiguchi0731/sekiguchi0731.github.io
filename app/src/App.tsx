import { useMemo, useState } from "react";

type FocusKey = "research" | "engineering" | "community";
type TimelineFilter = "all" | "research" | "work" | "community";

type FocusCard = {
  id: FocusKey;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
};

type TimelineItem = {
  year: string;
  category: Exclude<TimelineFilter, "all">;
  title: string;
  org: string;
  summary: string;
};

type Project = {
  id: string;
  kind: string;
  title: string;
  summary: string;
  detail: string;
  impact: string;
  stack: string[];
  href?: string;
};

const focusCards: FocusCard[] = [
  {
    id: "research",
    label: "Research",
    eyebrow: "Current focus",
    title: "Privacy-aware machine learning",
    description:
      "お茶の水女子大学 小口研究室で、差分プライバシ実装と機械学習の安全な運用に取り組んでいます。",
    bullets: [
      "研究テーマを実装レベルまで落とし込むスタイル",
      "理論だけでなく再現可能性と運用性を重視",
      "機械学習とプライバシの接点を継続して探索"
    ]
  },
  {
    id: "engineering",
    label: "Engineering",
    eyebrow: "Build style",
    title: "Useful systems with clean interfaces",
    description:
      "Web アプリ、可視化、運用改善までを一気通貫で触り、実際に使われるものへ仕上げるのが軸です。",
    bullets: [
      "R, Ruby on Rails, HTML, JavaScript を業務で運用",
      "利用者視点で導線と保守性を両立",
      "小さなツールでも定着する形まで整える"
    ]
  },
  {
    id: "community",
    label: "Community",
    eyebrow: "Outside the lab",
    title: "Designing experiences people remember",
    description:
      "Another Vision では謎解き制作を通じて、デザインとシステムの両面から体験設計に関わってきました。",
    bullets: [
      "500 人超規模の公演に制作側として参加",
      "満足度 86% の体験設計を支える実装と運営",
      "新入生向け講座会など、知識共有も担当"
    ]
  }
];

const highlights = [
  {
    value: "900+",
    label: "players reached",
    note: "謎解き公演 NEXT / Qキング・アドベンチャー での累計規模"
  },
  {
    value: "2022-",
    label: "engineering in production",
    note: "Rhelixa にて可視化ツールの開発・保守を継続"
  },
  {
    value: "2021-",
    label: "teaching and mentoring",
    note: "個別教室のトライで塾講師として勤務"
  }
];

const timeline: TimelineItem[] = [
  {
    year: "2024",
    category: "research",
    title: "差分プライバシ実装の検証を開始",
    org: "Ochanomizu University / Oguchi Lab",
    summary: "プライバシを保ちつつ学習できる実装の再現と理解を進めています。"
  },
  {
    year: "2024",
    category: "work",
    title: "Google STEP 教育プログラムに参加",
    org: "Google STEP",
    summary: "Python を用いた週次課題に継続的に取り組み、基礎力を積み増しました。"
  },
  {
    year: "2022-",
    category: "work",
    title: "バイオインフォマティクス可視化ツールを開発・保守",
    org: "Rhelixa",
    summary: "R, Ruby on Rails, HTML, JavaScript を使い、既存プロダクトを実運用の中で改善しています。"
  },
  {
    year: "2021-",
    category: "work",
    title: "授業運営のための Web カレンダー連携ツールを制作",
    org: "個別教室のトライ",
    summary: "授業キャンセルを減らすため、Web カレンダーと LINE Bot を接続する仕組みを作りました。"
  },
  {
    year: "2021-",
    category: "community",
    title: "Another Vision で体験型コンテンツ制作",
    org: "Another Vision",
    summary: "デザインとプログラムの両面に関わり、公演制作や新入生向け講座会にも参加しています。"
  }
];

const projects: Project[] = [
  {
    id: "privacy",
    kind: "Research",
    title: "Differential Privacy Implementation Notes",
    summary: "差分プライバシ実装を再現しながら、どこで精度と安全性のトレードオフが生まれるかを整理。",
    detail:
      "実装に触れながら理解を深めることで、論文だけでは見えにくいパラメータ設計や再現性の論点を拾っています。",
    impact: "理論寄りのテーマを、手を動かせる研究テーマとして扱える状態に保つ。",
    stack: ["Python", "Machine Learning", "Privacy"]
  },
  {
    id: "calendar",
    kind: "Operations",
    title: "Calendar x LINE workflow tool",
    summary: "塾講師の現場で起きるキャンセル連絡の抜け漏れを減らすための連携ツール。",
    detail:
      "現場課題から着想し、既存の Web カレンダーと LINE Bot をつなぐことで、連絡導線を整理しました。",
    impact: "業務フローに直接効く小さな改善を、現実運用に馴染む形で実装。",
    stack: ["Web", "Automation", "LINE Bot"],
    href: "https://github.com/sekiguchi0731/Calender"
  },
  {
    id: "visualization",
    kind: "Production",
    title: "Bioinformatics visualization maintenance",
    summary: "実運用中の可視化ツールに対して、開発と保守を継続。",
    detail:
      "研究寄りのドメインでも、利用者が扱いやすい UI と継続保守できるコードの両方を意識して改善しています。",
    impact: "専門性の高いプロダクトに対しても、使いやすさと安定性を両立。",
    stack: ["R", "Ruby on Rails", "JavaScript"],
    href: "https://www.rhelixa.com/rias/visualization/"
  },
  {
    id: "mystery",
    kind: "Experience Design",
    title: "Another Vision events",
    summary: "謎解き公演で、体験設計・デザイン・実装を横断して担当。",
    detail:
      "公演制作では世界観だけでなく、運営しやすさ、参加者の詰まりにくさ、情報の見せ方まで含めて設計してきました。",
    impact: "体験の満足度を数値で見ながら、運営と制作をつなぐ役割を担う。",
    stack: ["Design", "Frontend", "Event Ops"],
    href: "https://anothervision.tokyo/"
  }
];

const filterLabels: Record<TimelineFilter, string> = {
  all: "All",
  research: "Research",
  work: "Work",
  community: "Community"
};

const quickLinks = [
  { label: "GitHub", href: "https://github.com/sekiguchi0731" },
  { label: "Another Vision", href: "https://anothervision.tokyo/" },
  { label: "Rhelixa", href: "https://www.rhelixa.com/" }
];

export default function App() {
  const [activeFocus, setActiveFocus] = useState<FocusKey>("research");
  const [activeFilter, setActiveFilter] = useState<TimelineFilter>("all");
  const [activeProjectId, setActiveProjectId] = useState<string>(projects[0].id);

  const activeCard = focusCards.find((card) => card.id === activeFocus) ?? focusCards[0];
  const activeProject = projects.find((project) => project.id === activeProjectId) ?? projects[0];

  const filteredTimeline = useMemo(() => {
    if (activeFilter === "all") {
      return timeline;
    }

    return timeline.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#top">
          <span className="brand-mark">HS</span>
          <span className="brand-copy">
            <strong>Hinata Sekiguchi</strong>
            <small>Research x Engineering x Experience</small>
          </span>
        </a>
        <nav className="topnav" aria-label="primary">
          <a href="#story">Story</a>
          <a href="#timeline">Timeline</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top" className="page-main">
        <section className="hero reveal">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio / 2026 edition</p>
            <h1>
              研究と実装を
              <br />
              同じ解像度で扱うための
              <br />
              personal site
            </h1>
            <p className="hero-text">
              古いページ群を捨てて、ひとつの流れで読める動的なサイトに整理しました。
              研究、業務、コミュニティ活動を切り替えながら見られる構成です。
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                See projects
              </a>
              <a className="button button-secondary" href="#timeline">
                Read timeline
              </a>
            </div>
            <div className="link-row" aria-label="external links">
              {quickLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <aside className={`focus-panel tone-${activeCard.id}`}>
            <div className="focus-switcher" role="tablist" aria-label="focus areas">
              {focusCards.map((card) => (
                <button
                  key={card.id}
                  type="button"
                  className={card.id === activeFocus ? "is-active" : ""}
                  onClick={() => setActiveFocus(card.id)}
                >
                  {card.label}
                </button>
              ))}
            </div>

            <div className="focus-card">
              <p className="eyebrow">{activeCard.eyebrow}</p>
              <h2>{activeCard.title}</h2>
              <p>{activeCard.description}</p>
              <ul className="bullet-list">
                {activeCard.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        <section id="story" className="section reveal">
          <div className="section-heading">
            <p className="eyebrow">Highlights</p>
            <h2>今の活動がすぐ掴めるように、情報を圧縮しています。</h2>
          </div>
          <div className="highlight-grid">
            {highlights.map((item) => (
              <article key={item.label} className="highlight-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="timeline" className="section reveal">
          <div className="section-heading split">
            <div>
              <p className="eyebrow">Timeline</p>
              <h2>研究、仕事、コミュニティをひとつの年表で見せる。</h2>
            </div>
            <div className="filter-row" aria-label="timeline filter">
              {(Object.keys(filterLabels) as TimelineFilter[]).map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={filter === activeFilter ? "is-active" : ""}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filterLabels[filter]}
                </button>
              ))}
            </div>
          </div>

          <div className="timeline-grid">
            {filteredTimeline.map((item) => (
              <article key={`${item.year}-${item.title}`} className={`timeline-card tag-${item.category}`}>
                <span className="timeline-year">{item.year}</span>
                <div>
                  <p className="timeline-tag">{filterLabels[item.category]}</p>
                  <h3>{item.title}</h3>
                  <p className="timeline-org">{item.org}</p>
                  <p>{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section reveal">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>クリックで詳細が切り替わる、簡潔な project shelf。</h2>
          </div>

          <div className="project-grid">
            <div className="project-list" role="tablist" aria-label="projects">
              {projects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  className={project.id === activeProjectId ? "project-tab is-active" : "project-tab"}
                  onClick={() => setActiveProjectId(project.id)}
                >
                  <span>{project.kind}</span>
                  <strong>{project.title}</strong>
                  <p>{project.summary}</p>
                </button>
              ))}
            </div>

            <article className="project-panel">
              <p className="eyebrow">{activeProject.kind}</p>
              <h3>{activeProject.title}</h3>
              <p className="project-detail">{activeProject.detail}</p>
              <div className="project-impact">
                <strong>Why it matters</strong>
                <p>{activeProject.impact}</p>
              </div>
              <div className="chip-row" aria-label="technology tags">
                {activeProject.stack.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
              {activeProject.href ? (
                <a className="button button-primary" href={activeProject.href} target="_blank" rel="noreferrer">
                  Open link
                </a>
              ) : null}
            </article>
          </div>
        </section>

        <section id="contact" className="section reveal">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>学術寄りでも、プロダクト寄りでも、まずは整理して作る。</h2>
              <p>
                連絡先: <span className="mono">g2120522[at]is.ocha.ac.jp</span>
              </p>
            </div>
            <a className="button button-secondary" href="https://github.com/sekiguchi0731" target="_blank" rel="noreferrer">
              View GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
