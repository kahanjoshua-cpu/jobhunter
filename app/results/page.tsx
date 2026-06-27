import MatchSummary from "@/components/MatchSummary";
import QualificationBreakdown from "@/components/QualificationBreakdown";
import ThingsToConsider from "@/components/ThingsToConsider";
import ApplicationSuggestions from "@/components/ApplicationSuggestions";

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FC] py-16">
      <div className="mx-auto max-w-5xl space-y-8 px-6">

        <MatchSummary />

        <QualificationBreakdown />

        <ThingsToConsider />

        <ApplicationSuggestions />

      </div>
    </main>
  );
}