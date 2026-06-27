import HeroCopy from "./home/HeroCopy";
import HowItWorks from "./home/HowItWorks";
import UploadCard from "./home/UploadCard";
import FeedbackBanner from "./home/FeedbackBanner";

export default function Hero() {
  return (
    <main className="bg-[#F7F8FC]">
      <section className="mx-auto max-w-7xl px-8 py-6">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="pt-2">
            <HeroCopy />
            <HowItWorks />
          </div>

          <UploadCard />
        </div>

        <FeedbackBanner />
      </section>
    </main>
  );
}