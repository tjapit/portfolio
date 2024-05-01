export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 <span className="font-bold">tjapit</span>. All rights
        reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React &amp; Next.js (App Router &amp; Server Actions), TypeScript,
        Tailwind, Framer Motion, React Email &amp; Resend, VPS hosting on
        DigitalOcean.
      </p>
    </footer>
  );
}
