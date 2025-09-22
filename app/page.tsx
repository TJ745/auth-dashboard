import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-1 flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-extrabold mb-6">
          Welcome to <span className="text-blue-600">MyApp</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          A modern full-stack application with Next.js 15, Tailwind CSS 4,
          PostgreSQL, and secure authentication.
        </p>
        <div className="flex gap-4">
          <a
            href="/register"
            className="px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Get Started
          </a>
          <a
            href="/login"
            className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            Login
          </a>
        </div>
      </section>
    </main>
  );
}
