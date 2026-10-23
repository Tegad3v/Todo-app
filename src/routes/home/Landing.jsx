import { Link } from "react-router";

function Landing() {
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center px-6">
        <div className="max-w-4xl w-full text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-sm text-slate-600 shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Stay focused, get things done
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Your day,{" "}
            <span className="bg-linear-to-r from-sky-700 to-slate-800 bg-clip-text text-transparent">
              beautifully organized
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            A minimal todo app that helps you capture tasks, focus on what
            matters, and actually finish what you start — without the clutter.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/todo"
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 active:scale-[0.98] text-white font-medium text-lg px-10 py-4 rounded-full shadow-lg shadow-slate-900/20 transition flex items-center justify-center gap-2"
            >
              Open my tasks
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto text-slate-700 hover:text-slate-900 font-medium text-lg px-10 py-4 rounded-full border border-slate-300 hover:border-slate-400 bg-white/60 backdrop-blur-sm transition text-center"
            >
              Learn more
            </Link>
          </div>

          {/* Feature cards */}
          <div id="features" className="grid sm:grid-cols-3 gap-5 text-left">
            {[
              {
                icon: "⚡",
                title: "Fast & simple",
                desc: "Add, complete, and clear tasks in seconds — no learning curve.",
              },
              {
                icon: "💾",
                title: "Stays with you",
                desc: "Your tasks are saved locally, so they’re ready when you return.",
              },
              {
                icon: "🎯",
                title: "Focus first",
                desc: "Incomplete tasks stay on top. Distractions sink to the bottom.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition"
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-1.5">
                  {f.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
