export default function Home() {
  return (
    <main>
      {/* First row of cards */}
      <div className="flex w-full justify-center mt-20 space-x-4 px-10">
        <div className="bg-red-600 h-60 w-4/12"></div>
        <div className="bg-pink-400 h-60 w-4/12"></div>
        <div className="bg-orange-500 h-60 w-4/12"></div>
      </div>

      {/* Second row of cards */}
      <div className="flex w-full justify-center mt-6 space-x-4 px-10">
        <div className="bg-purple-600 h-60 w-6/12"></div>
        <div className="bg-blue-400 h-60 w-6/12"></div>
      </div>
    </main>
  );
}

