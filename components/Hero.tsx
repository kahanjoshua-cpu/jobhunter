import HeroCopy from "./home/HeroCopy";
import HowItWorks from "./home/HowItWorks";
import UploadCard from "./home/UploadCard";
import FeedbackBanner from "./home/FeedbackBanner";

export default function Hero() {
  return (
    <main className="min-h-screen bg-[#F7F8FC]">
<section className="mx-auto max-w-[1420px] px-8 pt-8 pb-32">
    <div className="grid items-start gap-12 lg:grid-cols-[1fr_760px]">
          <div className="pt-16">
            <HeroCopy />
            <HowItWorks />
          </div>
<div className="flex justify-end pt-6 pr-8">
  <div className="w-full max-w-[760px]">
    <UploadCard />
  </div>
</div>
        </div>
<FeedbackBanner />
      </section>
    </main>
  );
}