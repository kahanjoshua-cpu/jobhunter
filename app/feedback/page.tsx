export default function FeedbackPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FC] py-14">
      <div className="mx-auto max-w-5xl px-6">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          HELP SHAPE JOBHUNTER
        </p>

        <h1 className="mt-2 text-5xl font-bold tracking-tight text-slate-900">
          Build Jobhunter With Me
        </h1>

        <p className="mt-4 max-w-3xl text-xl leading-9 text-slate-700">
          Jobhunter is still in its early stages, and every conversation helps
          shape what gets built next. Whether you're actively job searching or
          simply exploring the product, I'd genuinely love to hear your
          thoughts.
        </p>

        {/* Survey Cards */}

        <div className="mt-6 grid gap-5 lg:grid-cols-2">

          {/* Job Seeker */}

          <div className="rounded-3xl border border-indigo-200 bg-white p-6 shadow-lg">

            <div className="text-5xl">💼</div>

            <h2 className="mt-5 text-3xl font-semibold text-slate-900">
              I'm Currently Job Searching
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              You've used Jobhunter to evaluate a real opportunity or compare
              your resume against a job description.
            </p>

            <div className="mt-6 flex justify-center">
  <a
    href="https://forms.gle/CpQZpQvDmWyz5wJLA"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex rounded-xl bg-indigo-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-indigo-700"
  >
    Take the 3 Minute Job Seeker Survey
  </a>
</div>

          </div>

          {/* Product Feedback */}

          <div className="rounded-3xl border border-purple-200 bg-white p-6 shadow-lg">

            <div className="text-5xl">💡</div>

            <h2 className="mt-5 text-3xl font-semibold text-slate-900">
              I'm Here to Explore
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              You're not actively job searching, but you'd like to share
              feedback on the idea, user experience, design, branding,
              messaging, or overall direction of Jobhunter.
            </p>

            <a
              href="https://forms.gle/F7rLX5tVtiPXBfAW6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-xl bg-purple-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-purple-700"
            >
              Take the 3 minute Product Feedback Survey
            </a>

          </div>

        </div>

        {/* Contact Card */}

        <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-7 shadow-lg">

          <div className="flex flex-col items-center text-center">

            <div className="text-4xl">💜</div>

            <h2 className="mt-3 text-3xl font-semibold text-slate-900">
              Connect With Me
            </h2>

            <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-700">
              Have a question, found a bug, have an idea, or simply want to say
              hello? I'd genuinely love to hear from you.
            </p>

            <a
              href="mailto:thejobhuntercoach@gmail.com"
              className="mt-5 inline-flex items-center rounded-xl border-2 border-indigo-200 bg-indigo-50 px-8 py-4 text-lg font-semibold text-indigo-700 transition hover:border-indigo-300 hover:bg-indigo-100"
            >
              📧 thejobhuntercoach@gmail.com
            </a>

            <p className="mt-2 text-sm text-slate-500">
              Every email is personally read.
            </p>

          </div>

        </div>

      </div>
    </main>
  );
}