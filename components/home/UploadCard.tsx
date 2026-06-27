export default function UploadCard() {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">

      <div className="bg-gradient-to-r from-[#081B49] to-[#3B1D8F] px-8 py-8 text-white">

        <h2 className="text-2xl font-bold">
          Analyze a Job
        </h2>

        <p className="mt-2 text-indigo-100">
          Upload your resume and paste the job description below.
        </p>

      </div>

      <div className="p-8">

        <label className="text-sm font-medium text-gray-700">
          Resume
        </label>

        <div className="mt-2 flex h-36 items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50">

          <div className="text-center">

            <div className="text-4xl">
              📄
            </div>

            <p className="mt-3 font-semibold">
              Drag & Drop your resume
            </p>

            <p className="mt-1 text-sm text-gray-500">
              PDF or DOCX
            </p>

          </div>

        </div>

        <div className="mt-8">

          <label className="text-sm font-medium text-gray-700">
            Job Description
          </label>

          <textarea
            rows={6}
            placeholder="Paste the job description here..."
            className="mt-2 w-full rounded-2xl border border-gray-300 p-4 text-gray-700 outline-none transition focus:border-indigo-600"
          />

        </div>

        <button className="mt-8 w-full rounded-xl bg-indigo-600 py-4 text-lg font-semibold text-white transition hover:bg-indigo-700">
          Get My Recommendation
        </button>

      </div>

    </div>
  );
}