export default function FeedbackPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FC] py-20">
      <div className="mx-auto max-w-3xl px-6">

        <h1 className="text-5xl font-bold">
          Questions & Feedback
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          I'd love to hear from you.
        </p>

        <p className="mt-4 text-lg text-gray-700">
          Whether you've found a bug, have an idea, or simply want to share your
          experience using Jobhunter, every conversation helps make the product better.
        </p>

        <div className="mt-12 rounded-3xl bg-white p-8 shadow-lg">

          <h2 className="text-2xl font-semibold">
            Coming Soon
          </h2>

          <p className="mt-4 text-gray-600">
            A contact form and feedback survey will live here during the beta.
          </p>

        </div>

      </div>
    </main>
  );
}