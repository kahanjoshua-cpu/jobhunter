export default function Logo({
  className = "h-12 w-12",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
    >
      {/* Outer circle */}
      <circle
        cx="32"
        cy="32"
        r="28"
        fill="#071A44"
      />

      {/* Middle ring */}
      <circle
        cx="32"
        cy="32"
        r="19"
        fill="white"
      />

      {/* Inner circle */}
      <circle
        cx="32"
        cy="32"
        r="10"
        fill="#4F46E5"
      />

      {/* Arrow shaft */}
      <path
        d="M31 34L48 17"
        stroke="#4F46E5"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Arrow head */}
      <path
        d="M48 17L43 18.5"
        stroke="#4F46E5"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M48 17L46.5 22"
        stroke="#4F46E5"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}