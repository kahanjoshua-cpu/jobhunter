"use client";

import { useState } from "react";

import TypographyLibrary from "@/components/design-library/TypographyLibrary";
import CardsLibrary from "@/components/design-library/CardsLibrary";
import ButtonsLibrary from "@/components/design-library/ButtonsLibrary";
import ColorsLibrary from "@/components/design-library/ColorsLibrary";
import SpacingLibrary from "@/components/design-library/SpacingLibrary";
import ShadowsLibrary from "@/components/design-library/ShadowsLibrary";
import BordersLibrary from "@/components/design-library/BordersLibrary";
import IconsLibrary from "@/components/design-library/IconsLibrary";
import AnimationsLibrary from "@/components/design-library/AnimationsLibrary";
import FormsLibrary from "@/components/design-library/FormsLibrary";

export default function DesignLibraryPage() {
  const sections = [
    "Typography",
    "Cards",
    "Buttons",
    "Colors",
    "Spacing",
    "Shadows",
    "Borders",
    "Icons",
    "Animations",
    "Forms",
  ];

  const [selectedSection, setSelectedSection] =
    useState("Typography");

  function renderSection() {
    switch (selectedSection) {
      case "Typography":
        return <TypographyLibrary />;

      case "Cards":
        return <CardsLibrary />;

      case "Buttons":
        return <ButtonsLibrary />;

      case "Colors":
        return <ColorsLibrary />;

      case "Spacing":
        return <SpacingLibrary />;

      case "Shadows":
        return <ShadowsLibrary />;

      case "Borders":
        return <BordersLibrary />;

      case "Icons":
        return <IconsLibrary />;

      case "Animations":
        return <AnimationsLibrary />;

      case "Forms":
        return <FormsLibrary />;

      default:
        return null;
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-8 py-12">

        <div>

          <h1 className="text-5xl font-bold text-slate-900">
            Jobhunter Design Library
          </h1>

          <p className="mt-3 max-w-3xl text-lg text-slate-600">
            A visual library of design options used to build
            Jobhunter consistently.
          </p>

        </div>

        <div className="mt-10 grid grid-cols-[260px_1fr] gap-8">

          <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Design
            </h2>

            <nav className="mt-6 space-y-2">

              {sections.map((section) => (

                <button
                  key={section}
                  onClick={() =>
                    setSelectedSection(section)
                  }
                  className={`w-full rounded-xl px-4 py-3 text-left transition ${
                    selectedSection === section
                      ? "bg-indigo-600 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {section}
                </button>

              ))}

            </nav>

          </aside>

          <section>
            {renderSection()}
          </section>

        </div>

      </div>
    </main>
  );
}