// ============================================================================
// Jobhunter Design System
// Buttons
// Approved: Design Library → Button Option 1
// ============================================================================

export const BUTTONS = {
  option1: {
    base: `
      inline-flex
      items-center
      justify-center
      gap-2
      rounded-xl
      px-8
      py-4
      text-lg
      font-semibold
      transition-all
      duration-200
      ease-out
      cursor-pointer
    `,

    primary: `
      bg-indigo-700
      text-white
      border
      border-white
      hover:bg-indigo-800
      hover:-translate-y-0.5
      hover:shadow-lg
    `,

    secondary: `
      bg-indigo-100
      text-slate-800
      hover:bg-indigo-200
      hover:-translate-y-0.5
      hover:shadow-lg
    `,
  },
};