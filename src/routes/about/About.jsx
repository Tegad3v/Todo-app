import { Link } from "react-router";

function About() {
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100 px-6 py-16">
        <div className="px-20">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition mb-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back home
          </Link>

          {/* Header */}
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            About this app
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            A small, focused todo app built to help you get things done without
            getting in your way. No accounts, no noise — just your tasks.
          </p>

          {/* Sections */}
          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">
                Why it exists
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Most todo apps try to do everything. This one does a few things
                well: capture a task, mark it done, and get out of the way. It
                runs entirely in your browser, so your tasks load instantly and
                stay private.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">
                What it does
              </h2>
              <ul className="space-y-2.5 text-slate-600">
                {[
                  "Add tasks in one line, hit Enter to save",
                  "Click the circle to mark a task complete",
                  "Completed tasks sink to the bottom",
                  "Clear all completed tasks with one click",
                  "Saves automatically to your browser",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs mt-0.5">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">
                Built with
              </h2>
              <div className="flex flex-wrap gap-2">
                {["React", "Tailwind CSS", "React Router", "localStorage"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="bg-white border border-slate-200 text-slate-700 text-sm px-4 py-1.5 rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <Link
              to="/todo"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 active:scale-[0.98] text-white font-medium px-8 py-3.5 rounded-full shadow-lg shadow-slate-900/20 transition"
            >
              Open my tasks
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
