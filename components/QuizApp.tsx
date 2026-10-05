 "use client";

import { useMemo, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { categories, items } from "@/data/items";

type Mode = "home" | "profile" | "quiz" | "result";

const categoryNames: Record<string, string> = Object.fromEntries(categories.map(c => [c.id, c.name]));

export default function QuizApp() {
  const [mode, setMode] = useState<Mode>("home");
  const [selected, setSelected] = useState<string[]>([]);
  const [profile, setProfile] = useState<string[]>([]);
  const [name, setName] = useState("আশরাফ");
  const [catIndex, setCatIndex] = useState(0);
  const resultRef = useRef<HTMLDivElement>(null);

  const currentCategory = categories[catIndex];
  const currentItems = items.filter(i => i.category === currentCategory.id);

  const toggle = (id: string) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const totalScore = Math.round((selected.length / items.length) * 100);

  const categoryScores = useMemo(() => {
    return categories.map(cat => {
      const all = items.filter(i => i.category === cat.id).length;
      const done = items.filter(i => i.category === cat.id && selected.includes(i.id)).length;
      return { ...cat, score: all ? Math.round((done / all) * 100) : 0, done, all };
    });
  }, [selected]);

  const next = () => {
    if (catIndex < categories.length - 1) setCatIndex(i => i + 1);
    else setMode("result");
  };

  const downloadResult = async () => {
    if (!resultRef.current) return;
    const dataUrl = await toPng(resultRef.current, { pixelRatio: 2, cacheBust: true });
    const a = document.createElement("a");
    a.download = "amar-bangaliyana.png";
    a.href = dataUrl;
    a.click();
  };

  if (mode === "home") return (
    <main className="home">
      <div className="hero-image" />
      <section className="hero-card">
        <div className="brand">🌿 শতভাগ বাঙালি</div>
        <h1>আপনি কতটা<br /><span>বাঙালি?</span></h1>
        <p>আপনার জীবনে ঘটে যাওয়া খাবার, উৎসব, শৈশব আর গ্রামবাংলার অভিজ্ঞতাগুলো বেছে নিন।</p>
        <button className="primary" onClick={() => setMode("profile")}>শুরু করুন <span>→</span></button>
        <small>এটি একটি মজার সাংস্কৃতিক অভিজ্ঞতা কুইজ।</small>
      </section>
    </main>
  );

  if (mode === "profile") return (
    <main className="shell">
      <div className="topbar"><span className="brand">🌿 শতভাগ বাঙালি</span><span>১ / ২</span></div>
      <section className="intro">
        <span className="eyebrow">আপনার জন্য কনটেন্ট</span>
        <h1>আপনার অভিজ্ঞতার<br />সঙ্গে মিলিয়ে নিই</h1>
        <p>একাধিক বেছে নিতে পারেন।</p>
      </section>
      <div className="profile-grid">
        {[
          ["male","👨","ছেলেদের"],
          ["female","👩","মেয়েদের"],
          ["children","🧒","বাচ্চাদের"],
          ["all","🌾","সবার জন্য"]
        ].map(([id, icon, label]) => (
          <button key={id} className={`profile-card ${profile.includes(id) ? "active" : ""}`} onClick={() => setProfile(p => p.includes(id) ? p.filter(x=>x!==id) : [...p,id])}>
            <span>{icon}</span><b>{label}</b>
          </button>
        ))}
      </div>
      <div className="name-box">
        <label>ফলাফলে আপনার নাম</label>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="যেমন: আশরাফ" />
      </div>
      <button className="primary wide" disabled={!profile.length} onClick={() => setMode("quiz")}>এবার শুরু করি →</button>
    </main>
  );

  if (mode === "quiz") return (
    <main className="shell quiz-shell">
      <div className="topbar">
        <button className="back" onClick={() => catIndex ? setCatIndex(i=>i-1) : setMode("profile")}>←</button>
        <span className="brand">শতভাগ বাঙালি</span>
        <span>{catIndex + 1} / {categories.length}</span>
      </div>
      <div className="progress"><span style={{width: `${((catIndex+1)/categories.length)*100}%`}} /></div>
      <section className="intro compact">
        <div className="cat-icon">{currentCategory.icon}</div>
        <span className="eyebrow">{currentCategory.name}</span>
        <h1>এগুলোর কোনগুলো<br />আপনার জীবনে এসেছে?</h1>
        <p>যেগুলো করেছেন/খেয়েছেন/অভিজ্ঞতা হয়েছে, সেগুলোতে ট্যাপ করুন।</p>
      </section>
      <div className="item-grid">
        {currentItems.map(item => {
          const active = selected.includes(item.id);
          return (
            <button key={item.id} className={`item-card ${active ? "selected" : ""}`} onClick={() => toggle(item.id)}>
              <img src={item.image} alt="" />
              {active && <span className="white-wash" />}
              <span className="item-name">{item.name}</span>
            </button>
          );
        })}
      </div>
      <div className="bottom-action">
        <span>{selected.length}টি বেছে নিয়েছেন</span>
        <button className="primary" onClick={next}>{catIndex === categories.length-1 ? "ফলাফল দেখুন" : "পরেরটি →"}</button>
      </div>
    </main>
  );

  return (
    <main className="result-page">
      <div className="result-wrap" ref={resultRef}>
        <div className="result-top">
          <div><span className="brand">🌿 শতভাগ বাঙালি</span><p>কতটা বাঙালি আপনি?</p></div>
          <span className="mini-note">বাঙালিয়ানা শুধু পরিচয় নয়,<br />এটা অনুভূতি...</span>
        </div>
        <div className="result-main">
          <div className="result-heading">
            <span>{name}</span>
            <p>এর বাঙালিয়ানা</p>
          </div>
          <div className="big-score">{totalScore}%</div>
          <div className="score-line"><span style={{width:`${totalScore}%`}} /></div>
          <p className="count">{items.length}টির মধ্যে {selected.length}টি অভিজ্ঞতা আপনার আছে</p>
        </div>
        <h2>ক্যাটাগরি অনুযায়ী আপনার স্কোর</h2>
        <div className="score-grid">
          {categoryScores.map(cat => (
            <div className="score-card" key={cat.id}>
              <div className="score-icon">{cat.icon}</div>
              <div className="score-info"><b>{cat.name}</b><strong>{cat.score}%</strong><div className="tiny-line"><span style={{width:`${cat.score}%`}} /></div></div>
            </div>
          ))}
        </div>
        <div className="result-message">আপনার মধ্যে বাঙালির রং, স্বাদ, সংস্কৃতি আর স্মৃতির একটি সুন্দর মিশেল আছে। ❤️</div>
      </div>
      <div className="result-actions">
        <button className="primary" onClick={downloadResult}>↓ ছবি ডাউনলোড করুন</button>
        <button className="secondary" onClick={() => navigator.share?.({title:"আমার বাঙালিয়ানা", text:`আমার বাঙালিয়ানা ${totalScore}%!`})}>↗ শেয়ার করুন</button>
      </div>
      <button className="restart" onClick={() => {setSelected([]);setCatIndex(0);setMode("home")}}>আবার শুরু করুন</button>
    </main>
  );
}