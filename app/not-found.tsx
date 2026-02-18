import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#181022] to-[#241a36] text-white relative">
      {/* Floating purple background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-80px] left-[-120px] w-[320px] h-[320px] bg-[#76608f] opacity-30 rounded-full blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] bg-[#bfaee0] opacity-20 rounded-full blur-2xl" />
        <div className="absolute top-[40%] left-[-60px] w-[180px] h-[180px] bg-[#a18cd1] opacity-20 rounded-full blur-2xl" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center p-8">
        <h1 className="text-6xl font-clash-bold mb-4 text-white">404</h1>
        <h2 className="text-2xl font-clash-semibold mb-2 text-white">Page Not Found</h2>
        <p className="mb-6 text-gray-300 font-clash text-center max-w-md">
          Oops! The page you are looking for does not exist or has been moved.<br />
          Please check the URL or return to the home page.
        </p>
        <Link href="/">
          <button className="px-6 py-2 bg-[#76608f] text-white rounded-lg font-clash-medium hover:bg-[#6a5580] transition-colors shadow-lg">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
} 