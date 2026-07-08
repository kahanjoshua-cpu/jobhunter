import Logo from "@/components/Logo";
import FeedbackBanner from "@/components/home/FeedbackBanner";

export default function WhyJobhunterPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FC] py-20">
      <div className="mx-auto max-w-4xl px-6">

        <h1 className="text-5xl font-bold tracking-tight text-slate-900">
          Why I Built Jobhunter
        </h1>

        <p className="mt-8 text-2xl font-medium leading-relaxed text-slate-800">
          You deserve the opportunity to tell your full story—not just the
          version that fits on a single page.
        </p>

        <div className="mt-12 space-y-8 text-lg leading-9 text-slate-700">

          <p>
            When I was laid off, I experienced something that millions of job
            seekers go through every year. I updated my resume, searched for
            openings, and started applying. Like so many people, I spent hours
            rewriting bullet points, tailoring resumes, talking to Claude and ChatGPT, and hoping the next
            application would finally lead to a conversation. Instead, it often
            felt like I was sending applications into a black hole.
          </p>

          <p>
            My job search also happened to coincide with my newborn son keeping
            me up at all hours of the night. During those quiet hours, I found
            myself spending a lot of time scrolling through LinkedIn and reading
            post after post from people who were describing exactly what I was
            beginning to experience.
          </p>

          <p>
            Former teachers. Marketers. Engineers. People with years of
            experience who had submitted hundreds of applications without
            hearing much back. <strong>The stories were different, but the feeling was
            the same. People weren't just frustrated anymore—they were
            starting to question themselves.</strong> After enough unanswered
            applications, it's easy to wonder whether you're simply not good
            enough when, in reality, you may never have had the chance to fully
            tell your story.
          </p>

          <p>
            I don't believe the problem is that most people lack valuable
            experience. I think many people struggle to communicate the full
            value of what they've already done. A resume is only one or two
            pages. It can't capture every project you've led, every problem
            you've solved, or every responsibility you've taken on. More
            importantly, it often doesn't communicate how your experience
            transfers to a different role.
          </p>

          <p>
            Teaching isn't just teaching. It's project management, leadership,
            communication, planning, and problem solving. Sales isn't just
            selling. It's relationship building, strategy, trust, and
            understanding people. Every profession develops skills that
            transfer somewhere else. The challenge is that those skills aren't
            always obvious on a resume, and they aren't always recognized by
            the systems or people reviewing it. Sometimes we just need to pause
            long enough to recognize the value we've already built—and learn
            how to communicate it.
          </p>

          <p>
            As artificial intelligence becomes a bigger part of hiring, I think
            that's becoming even more important. AI can help companies review
            thousands of resumes quickly, but it can also overlook qualified
            people whose experience doesn't perfectly match the words in a job
            description. I don't think the answer is to fight AI. I think the
            answer is to help people better tell their story.
          </p>

          <p>
            That's when I realized I wanted to build something for the people
            on the other side of the hiring process—the job seekers. A tool
            designed to help them better understand, communicate, and advocate
            for the value they already have.
          </p>

        </div>

        <div className="mt-14 rounded-3xl border border-indigo-200 bg-white p-10 shadow-lg">

          <h2 className="text-3xl font-semibold text-slate-900">
            What I Believe
          </h2>

          <div className="mt-6 space-y-6 text-lg leading-8 text-slate-700">

            <p>
              Jobhunter should never influence whether someone believes they
              are qualified for a job. It should help people understand their
              strengths, communicate them more effectively, and decide for
              themselves whether an opportunity is worth pursuing.
            </p>

            <p>
              I don't believe AI should replace human judgment. I don't believe
              a Match Score should decide someone's future. I do believe people
              deserve better information before investing hours into another
              application.
            </p>

            <p>
              That's why Jobhunter explains its reasoning, identifies resume
              gaps, asks follow-up questions, and highlights transferable
              experience that may otherwise be overlooked. Sometimes all it
              takes is asking the right questions to uncover experience that
              never made it onto a resume.
            </p>

            <p>
              My hope isn't that Jobhunter helps people send more applications.
              It's that it helps them send better ones. I hope it gives people
              more confidence in the strengths they already have. I hope it
              helps them recognize that transferable skills are still valuable
              skills, even if they don't perfectly match a job description.
            </p>

          </div>

        </div>

        <div className="mt-20 flex flex-col items-center text-center">

          <Logo />

          <p className="mt-10 max-w-2xl text-2xl font-semibold leading-10 text-slate-900">
            Everyone deserves the chance to tell their full story.
            <br />
            I hope Jobhunter helps you tell yours.
          </p>

          <p className="mt-8 text-slate-500 italic">
            — Josh Kahan, Founder of Jobhunter
          </p>

        </div>

        <div className="mt-20">
          <FeedbackBanner />
        </div>

      </div>
    </main>
  );
}