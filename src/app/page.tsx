import SmartImage from "@/components/SmartImage";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-sky-100 to-indigo-100 text-center p-6">
      <h1 className="text-5xl font-bold text-indigo-800 mb-4">🌆 Virtual City Walk</h1>

      {/* 👇 Smart Network-Aware Image 👇 */}
      <div className="w-full max-w-md my-6">
        <SmartImage
          highRes="/images/city-high.jpg"
          lowRes="/public/images/city-low.jpg"
          alt="City skyline"
        />
      </div>

      <p className="text-lg text-gray-700 mb-8 max-w-md">
        Explore iconic city landmarks from anywhere. Perfect for remote users and virtual tourists.
      </p>

      <a
        href="/tour"
        className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg hover:bg-indigo-700 transition"
      >
        Start Your Virtual Tour →
      </a>
    </main>
  );
}
