import OptionCard from "./OptionCard";

export default function TypographyLibrary() {
  return (
    <div className="space-y-16">

      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          Typography
        </h1>

        <p className="mt-3 text-lg text-slate-600">
          Build the complete Jobhunter typography system.
        </p>
      </div>

{/* Font Family */}

<section>

  <h2 className="text-3xl font-bold text-slate-900">
    Font Family
  </h2>

  <p className="mt-2 text-lg text-slate-600">
    Compare different font families using the same content.
  </p>

  <div className="mt-8 grid gap-8 lg:grid-cols-2">

    <OptionCard
      title="Plus Jakarta Sans"
      description="Current"
    >
      <div className="space-y-5 font-plus-jakarta">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          MATCH SCORE
        </p>

        <h1 className="text-5xl font-bold">
          82%
        </h1>

        <h2 className="text-3xl font-semibold">
          Strong Match
        </h2>

        <p className="text-lg text-slate-600">
          Your experience aligns well with this position.
        </p>

      </div>
    </OptionCard>

    <OptionCard
      title="Inter"
      description="Option 2"
    >
<div className="font-inter">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          MATCH SCORE
        </p>

        <h1 className="text-5xl font-bold">
          82%
        </h1>

        <h2 className="text-3xl font-semibold">
          Strong Match
        </h2>

        <p className="text-lg text-slate-600">
          Your experience aligns well with this position.
        </p>

      </div>
    </OptionCard>

    <OptionCard
      title="Manrope"
      description="Option 3"
    >
      <div className="space-y-5 font-manrope">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          MATCH SCORE
        </p>

        <h1 className="text-5xl font-bold">
          82%
        </h1>

        <h2 className="text-3xl font-semibold">
          Strong Match
        </h2>

        <p className="text-lg text-slate-600">
          Your experience aligns well with this position.
        </p>

      </div>
    </OptionCard>

    <OptionCard
      title="Geist"
      description="Option 4"
    >
      <div className="space-y-5 font-geist">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          MATCH SCORE
        </p>

        <h1 className="text-5xl font-bold">
          82%
        </h1>

        <h2 className="text-3xl font-semibold">
          Strong Match
        </h2>

        <p className="text-lg text-slate-600">
          Your experience aligns well with this position.
        </p>

      </div>
    </OptionCard>

    <OptionCard
      title="IBM Plex Sans"
      description="Option 5"
    >
      <div className="space-y-5 font-ibm">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          MATCH SCORE
        </p>

        <h1 className="text-5xl font-bold">
          82%
        </h1>

        <h2 className="text-3xl font-semibold">
          Strong Match
        </h2>

        <p className="text-lg text-slate-600">
          Your experience aligns well with this position.
        </p>

      </div>
    </OptionCard>

  </div>

</section>

{/* Font Weight */}

<section>

  <h2 className="text-3xl font-bold text-slate-900">
    Font Weight
  </h2>

  <p className="mt-2 text-lg text-slate-600">
    Compare different font weight combinations.
  </p>

  <div className="mt-8 grid gap-8 lg:grid-cols-2">

    <OptionCard
      title="Option 1"
      description="Bold headings"
    >
      <div className="space-y-5 font-plus-jakarta">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          MATCH SCORE
        </p>

        <h1 className="text-5xl font-bold">
          82%
        </h1>

        <h2 className="text-3xl font-bold">
          Strong Match
        </h2>

        <p className="text-lg font-normal text-slate-600">
          Your experience aligns well with this position.
        </p>

      </div>
    </OptionCard>

    <OptionCard
      title="Option 2"
      description="Medium headings"
    >
      <div className="space-y-5 font-plus-jakarta">

        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
          MATCH SCORE
        </p>

        <h1 className="text-5xl font-semibold">
          82%
        </h1>

        <h2 className="text-3xl font-semibold">
          Strong Match
        </h2>

        <p className="text-lg font-medium text-slate-600">
          Your experience aligns well with this position.
        </p>

      </div>
    </OptionCard>

  </div>

</section>

{/* Heading Scale */}

<section>

  <h2 className="text-3xl font-bold text-slate-900">
    Heading Scale
  </h2>

  <p className="mt-2 text-lg text-slate-600">
    Compare different heading sizes and hierarchy.
  </p>

  <div className="mt-8 grid gap-8 lg:grid-cols-2">

    <OptionCard
      title="Option 1"
      description="Balanced"
    >
      <div className="space-y-5 font-plus-jakarta">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          MATCH SCORE
        </p>

        <h1 className="text-5xl font-bold">
          Match Score
        </h1>

        <h2 className="text-3xl font-semibold">
          Strong Match
        </h2>

        <h3 className="text-xl font-semibold">
          Resume Gaps
        </h3>

        <p className="text-lg text-slate-600">
          Your experience aligns well with this position.
        </p>

      </div>
    </OptionCard>

    <OptionCard
      title="Option 2"
      description="Larger hierarchy"
    >
      <div className="space-y-5 font-plus-jakarta">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          MATCH SCORE
        </p>

        <h1 className="text-6xl font-bold">
          Match Score
        </h1>

        <h2 className="text-4xl font-semibold">
          Strong Match
        </h2>

        <h3 className="text-2xl font-semibold">
          Resume Gaps
        </h3>

        <p className="text-xl text-slate-600">
          Your experience aligns well with this position.
        </p>

      </div>
    </OptionCard>

  </div>

</section>

     {/* Letter Spacing */}

<section>

  <h2 className="text-3xl font-bold text-slate-900">
    Letter Spacing
  </h2>

  <p className="mt-2 text-lg text-slate-600">
    Compare uppercase label spacing.
  </p>

  <div className="mt-8 grid gap-8 lg:grid-cols-2">

    <OptionCard
      title="Option 1"
      description="Normal"
    >
      <div className="space-y-5 font-plus-jakarta">

        <p className="text-sm font-semibold uppercase tracking-normal text-slate-500">
          MATCH SCORE
        </p>

        <h1 className="text-5xl font-bold">
          82%
        </h1>

        <h2 className="text-3xl font-semibold">
          Strong Match
        </h2>

      </div>
    </OptionCard>

    <OptionCard
      title="Option 2"
      description="Wide Tracking"
    >
      <div className="space-y-5 font-plus-jakarta">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          MATCH SCORE
        </p>

        <h1 className="text-5xl font-bold">
          82%
        </h1>

        <h2 className="text-3xl font-semibold">
          Strong Match
        </h2>

      </div>
    </OptionCard>

  </div>
</section>

</div>
);
}

{/* Buttons */}

<section>

  <h2 className="text-3xl font-bold text-slate-900">
    Buttons
  </h2>

  <p className="mt-2 text-lg text-slate-600">
    Compare different button styles.
  </p>

  <div className="mt-8 grid gap-8 lg:grid-cols-2">

    <OptionCard
      title="Option 1"
      description="Rounded"
    >

      <div className="flex flex-wrap gap-4">

        <button className="rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white">
          Primary
        </button>

        <button className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium text-slate-900">
          Secondary
        </button>

      </div>

    </OptionCard>

    <OptionCard
      title="Option 2"
      description="Pill"
    >

      <div className="flex flex-wrap gap-4">

        <button className="rounded-full bg-indigo-600 px-6 py-3 font-medium text-white">
          Primary
        </button>

        <button className="rounded-full border border-slate-300 bg-white px-6 py-3 font-medium text-slate-900">
          Secondary
        </button>

      </div>

    </OptionCard>

    <OptionCard
      title="Option 3"
      description="Squared"
    >

      <div className="flex flex-wrap gap-4">

        <button className="rounded-md bg-indigo-600 px-6 py-3 font-medium text-white">
          Primary
        </button>

        <button className="rounded-md border border-slate-300 bg-white px-6 py-3 font-medium text-slate-900">
          Secondary
        </button>

      </div>

    </OptionCard>

    <OptionCard
      title="Option 4"
      description="Large CTA"
    >

      <button className="w-full rounded-xl bg-indigo-600 px-6 py-4 text-lg font-semibold text-white">
        Analyze Resume
      </button>

    </OptionCard>

  </div>

</section>

{/* Cards */}

<section>

  <h2 className="text-3xl font-bold text-slate-900">
    Cards
  </h2>

  <p className="mt-2 text-lg text-slate-600">
    Compare different card styles used throughout Jobhunter.
  </p>

  <div className="mt-8 grid gap-8 lg:grid-cols-2">

    <OptionCard
      title="Option 1"
      description="Minimal"
    >
      <div className="rounded-xl border border-slate-200 bg-white p-6">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          MATCH SCORE
        </p>

        <h3 className="mt-2 text-3xl font-bold">
          Strong Match
        </h3>

        <p className="mt-3 text-slate-600">
          Clean border with little emphasis.
        </p>

      </div>
    </OptionCard>

    <OptionCard
      title="Option 2"
      description="Elevated"
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          MATCH SCORE
        </p>

        <h3 className="mt-2 text-3xl font-bold">
          Strong Match
        </h3>

        <p className="mt-3 text-slate-600">
          More visual depth with a medium shadow.
        </p>

      </div>
    </OptionCard>

    <OptionCard
      title="Option 3"
      description="Bold Border"
    >
      <div className="rounded-2xl border-2 border-slate-300 bg-white p-6">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          MATCH SCORE
        </p>

        <h3 className="mt-2 text-3xl font-bold">
          Strong Match
        </h3>

        <p className="mt-3 text-slate-600">
          Strong border with almost no shadow.
        </p>

      </div>
    </OptionCard>

    <OptionCard
      title="Option 4"
      description="Soft Background"
    >
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          MATCH SCORE
        </p>

        <h3 className="mt-2 text-3xl font-bold">
          Strong Match
        </h3>

        <p className="mt-3 text-slate-600">
          Uses a tinted background instead of relying on shadows.
        </p>

      </div>
    </OptionCard>

  </div>

</section>

{/* Colors */}

<section>

  <h2 className="text-3xl font-bold text-slate-900">
    Colors
  </h2>

  <p className="mt-2 text-lg text-slate-600">
    Compare primary color palettes.
  </p>

  <div className="mt-8 grid gap-8 lg:grid-cols-2">

    <OptionCard
      title="Option 1"
      description="Indigo"
    >
      <div className="space-y-6">

        <div className="flex gap-3">
          <div className="h-14 w-14 rounded-xl bg-indigo-600"></div>
          <div className="h-14 w-14 rounded-xl bg-indigo-500"></div>
          <div className="h-14 w-14 rounded-xl bg-indigo-100"></div>
        </div>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white">
          Primary Button
        </button>

      </div>
    </OptionCard>

    <OptionCard
      title="Option 2"
      description="Blue"
    >
      <div className="space-y-6">

        <div className="flex gap-3">
          <div className="h-14 w-14 rounded-xl bg-blue-600"></div>
          <div className="h-14 w-14 rounded-xl bg-blue-500"></div>
          <div className="h-14 w-14 rounded-xl bg-blue-100"></div>
        </div>

        <button className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white">
          Primary Button
        </button>

      </div>
    </OptionCard>

    <OptionCard
      title="Option 3"
      description="Emerald"
    >
      <div className="space-y-6">

        <div className="flex gap-3">
          <div className="h-14 w-14 rounded-xl bg-emerald-600"></div>
          <div className="h-14 w-14 rounded-xl bg-emerald-500"></div>
          <div className="h-14 w-14 rounded-xl bg-emerald-100"></div>
        </div>

        <button className="rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white">
          Primary Button
        </button>

      </div>
    </OptionCard>

    <OptionCard
      title="Option 4"
      description="Slate"
    >
      <div className="space-y-6">

        <div className="flex gap-3">
          <div className="h-14 w-14 rounded-xl bg-slate-800"></div>
          <div className="h-14 w-14 rounded-xl bg-slate-600"></div>
          <div className="h-14 w-14 rounded-xl bg-slate-200"></div>
        </div>

        <button className="rounded-xl bg-slate-800 px-6 py-3 font-medium text-white">
          Primary Button
        </button>

      </div>
    </OptionCard>

  </div>

</section>

{/* Spacing */}

<section>

  <h2 className="text-3xl font-bold text-slate-900">
    Spacing
  </h2>

  <p className="mt-2 text-lg text-slate-600">
    Compare different spacing systems.
  </p>

  <div className="mt-8 grid gap-8 lg:grid-cols-2">

    <OptionCard
      title="Option 1"
      description="Compact"
    >

      <div className="rounded-xl border border-slate-200 bg-white p-4">

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          MATCH SCORE
        </p>

        <h3 className="mt-1 text-2xl font-bold">
          Strong Match
        </h3>

        <p className="mt-2 text-slate-600">
          Tight spacing throughout the card.
        </p>

        <button className="mt-4 rounded-xl bg-indigo-600 px-4 py-2 text-white">
          Analyze
        </button>

      </div>

    </OptionCard>

    <OptionCard
      title="Option 2"
      description="Balanced"
    >

      <div className="rounded-xl border border-slate-200 bg-white p-6">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          MATCH SCORE
        </p>

        <h3 className="mt-3 text-3xl font-bold">
          Strong Match
        </h3>

        <p className="mt-4 text-slate-600">
          Moderate spacing that balances density and readability.
        </p>

        <button className="mt-6 rounded-xl bg-indigo-600 px-5 py-3 text-white">
          Analyze
        </button>

      </div>

    </OptionCard>

    <OptionCard
      title="Option 3"
      description="Airy"
    >

      <div className="rounded-xl border border-slate-200 bg-white p-10">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          MATCH SCORE
        </p>

        <h3 className="mt-5 text-3xl font-bold">
          Strong Match
        </h3>

        <p className="mt-6 text-slate-600">
          Larger spacing creates a more premium feel.
        </p>

        <button className="mt-8 rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Analyze
        </button>

      </div>

    </OptionCard>

  </div>

</section>

{/* Shadows */}

<section>

  <h2 className="text-3xl font-bold text-slate-900">
    Shadows
  </h2>

  <p className="mt-2 text-lg text-slate-600">
    Compare different shadow depths.
  </p>

  <div className="mt-8 grid gap-8 lg:grid-cols-2">

    <OptionCard
      title="Option 1"
      description="No Shadow"
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6">

        <h3 className="text-2xl font-bold">
          Match Score
        </h3>

        <p className="mt-3 text-slate-600">
          Border only.
        </p>

      </div>
    </OptionCard>

    <OptionCard
      title="Option 2"
      description="Soft Shadow"
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <h3 className="text-2xl font-bold">
          Match Score
        </h3>

        <p className="mt-3 text-slate-600">
          Light elevation.
        </p>

      </div>
    </OptionCard>

    <OptionCard
      title="Option 3"
      description="Medium Shadow"
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">

        <h3 className="text-2xl font-bold">
          Match Score
        </h3>

        <p className="mt-3 text-slate-600">
          Noticeable elevation.
        </p>

      </div>
    </OptionCard>

    <OptionCard
      title="Option 4"
      description="Large Shadow"
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">

        <h3 className="text-2xl font-bold">
          Match Score
        </h3>

        <p className="mt-3 text-slate-600">
          Strong emphasis.
        </p>

      </div>
    </OptionCard>

  </div>

</section>
{/* Borders */}

<section>

  <h2 className="text-3xl font-bold text-slate-900">
    Borders
  </h2>

  <p className="mt-2 text-lg text-slate-600">
    Compare border radius and border thickness.
  </p>

  <div className="mt-8 grid gap-8 lg:grid-cols-2">

    <OptionCard
      title="Option 1"
      description="Sharp"
    >
      <div className="rounded-none border border-slate-300 bg-white p-6">

        <h3 className="text-2xl font-bold">
          Match Score
        </h3>

        <p className="mt-3 text-slate-600">
          No rounded corners.
        </p>

      </div>
    </OptionCard>

    <OptionCard
      title="Option 2"
      description="Rounded"
    >
      <div className="rounded-xl border border-slate-300 bg-white p-6">

        <h3 className="text-2xl font-bold">
          Match Score
        </h3>

        <p className="mt-3 text-slate-600">
          Moderate corner radius.
        </p>

      </div>
    </OptionCard>

    <OptionCard
      title="Option 3"
      description="Very Rounded"
    >
      <div className="rounded-3xl border border-slate-300 bg-white p-6">

        <h3 className="text-2xl font-bold">
          Match Score
        </h3>

        <p className="mt-3 text-slate-600">
          Soft, modern appearance.
        </p>

      </div>
    </OptionCard>

    <OptionCard
      title="Option 4"
      description="Bold Border"
    >
      <div className="rounded-2xl border-2 border-slate-400 bg-white p-6">

        <h3 className="text-2xl font-bold">
          Match Score
        </h3>

        <p className="mt-3 text-slate-600">
          Heavier border treatment.
        </p>

      </div>
    </OptionCard>

  </div>

</section>

{/* Icons */}

<section>

  <h2 className="text-3xl font-bold text-slate-900">
    Icons
  </h2>

  <p className="mt-2 text-lg text-slate-600">
    Compare icon sizes and visual weight.
  </p>

  <div className="mt-8 grid gap-8 lg:grid-cols-2">

    <OptionCard
      title="Option 1"
      description="Small"
    >

      <div className="flex items-center gap-4">

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
          ✓
        </div>

        <div>
          <h3 className="text-xl font-bold">
            Strong Match
          </h3>

          <p className="text-slate-600">
            Small supporting icon.
          </p>
        </div>

      </div>

    </OptionCard>

    <OptionCard
      title="Option 2"
      description="Medium"
    >

      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-xl">
          ✓
        </div>

        <div>
          <h3 className="text-xl font-bold">
            Strong Match
          </h3>

          <p className="text-slate-600">
            Balanced icon size.
          </p>
        </div>

      </div>

    </OptionCard>

    <OptionCard
      title="Option 3"
      description="Large"
    >

      <div className="flex items-center gap-5">

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl">
          ✓
        </div>

        <div>
          <h3 className="text-xl font-bold">
            Strong Match
          </h3>

          <p className="text-slate-600">
            Hero-style icon.
          </p>
        </div>

      </div>

    </OptionCard>

    <OptionCard
      title="Option 4"
      description="Minimal"
    >

      <div className="flex items-center gap-3">

        <span className="text-emerald-600 text-xl">
          ✓
        </span>

        <div>
          <h3 className="text-xl font-bold">
            Strong Match
          </h3>

          <p className="text-slate-600">
            No background container.
          </p>
        </div>

      </div>

    </OptionCard>

  </div>

</section>

{/* Animations */}

<section>

  <h2 className="text-3xl font-bold text-slate-900">
    Animations
  </h2>

  <p className="mt-2 text-lg text-slate-600">
    Compare subtle motion styles.
  </p>

  <div className="mt-8 grid gap-8 lg:grid-cols-2">

    <OptionCard
      title="Option 1"
      description="No Animation"
    >

      <div className="rounded-xl border border-slate-200 bg-white p-6">

        <h3 className="text-2xl font-bold">
          Match Score
        </h3>

        <p className="mt-3 text-slate-600">
          Static content.
        </p>

      </div>

    </OptionCard>

    <OptionCard
      title="Option 2"
      description="Fade In"
    >

      <div className="rounded-xl border border-slate-200 bg-white p-6 transition-opacity duration-700 hover:opacity-70">

        <h3 className="text-2xl font-bold">
          Match Score
        </h3>

        <p className="mt-3 text-slate-600">
          Smooth fade transition.
        </p>

      </div>

    </OptionCard>

    <OptionCard
      title="Option 3"
      description="Scale"
    >

      <div className="rounded-xl border border-slate-200 bg-white p-6 transition-transform duration-300 hover:scale-105">

        <h3 className="text-2xl font-bold">
          Match Score
        </h3>

        <p className="mt-3 text-slate-600">
          Slight scale on hover.
        </p>

      </div>

    </OptionCard>

    <OptionCard
      title="Option 4"
      description="Lift"
    >

      <div className="rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">

        <h3 className="text-2xl font-bold">
          Match Score
        </h3>

        <p className="mt-3 text-slate-600">
          Raises on hover.
        </p>

      </div>

    </OptionCard>

  </div>

</section>

{/* Forms */}

<section>

  <h2 className="text-3xl font-bold text-slate-900">
    Forms
  </h2>

  <p className="mt-2 text-lg text-slate-600">
    Compare form field styles.
  </p>

  <div className="mt-8 grid gap-8 lg:grid-cols-2">

    <OptionCard
      title="Option 1"
      description="Minimal"
    >

      <div className="space-y-4">

        <input
          className="w-full rounded-xl border border-slate-300 px-4 py-3"
          placeholder="Paste job description..."
        />

        <textarea
          className="h-32 w-full rounded-xl border border-slate-300 p-4"
          placeholder="Job description..."
        />

      </div>

    </OptionCard>

    <OptionCard
      title="Option 2"
      description="Soft"
    >

      <div className="space-y-4">

        <input
          className="w-full rounded-2xl bg-slate-100 px-4 py-3"
          placeholder="Paste job description..."
        />

        <textarea
          className="h-32 w-full rounded-2xl bg-slate-100 p-4"
          placeholder="Job description..."
        />

      </div>

    </OptionCard>

    <OptionCard
      title="Option 3"
      description="Outlined"
    >

      <div className="space-y-4">

        <input
          className="w-full rounded-xl border-2 border-indigo-300 px-4 py-3"
          placeholder="Paste job description..."
        />

        <textarea
          className="h-32 w-full rounded-xl border-2 border-indigo-300 p-4"
          placeholder="Job description..."
        />

      </div>

    </OptionCard>

    <OptionCard
      title="Option 4"
      description="Filled"
    >

      <div className="space-y-4">

        <input
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
          placeholder="Paste job description..."
        />

        <textarea
          className="h-32 w-full rounded-xl border border-slate-200 bg-slate-50 p-4"
          placeholder="Job description..."
        />

      </div>

    </OptionCard>

  </div>

</section>