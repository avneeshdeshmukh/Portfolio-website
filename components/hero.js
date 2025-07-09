import { FaLocationArrow } from "react-icons/fa";

export default function Hero() {
    return (


        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-[#2A2A2A] to-[#121212] ">
            <h1 data-aos="fade-left" className="text-4xl text-white md:text-6xl font-bold mb-4">
                👋 Hi, I’m <span className="text-[#9370db]">Avneesh Deshmukh</span>
            </h1>
            <h2 data-aos="fade-left" className="text-lg md:text-xl text-gray-600 max-w-xl mb-6">
                I'm a Software Engineer, based in Pune.
            </h2>

            <div data-aos="fade-right" className="flex gap-4 flex-wrap justify-center">
                <a
                    href="#aboutme"
                    className="bg-[#9370db] hover:bg-[#69359c] text-white font-medium py-3 px-6 rounded-lg transition"
                >
                    More About Me
                </a>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-400 hover:bg-gray-300 hover:text-gray-700 text-gray-400 font-medium py-3 px-6 rounded-lg transition"
                >
                    Download Resume
                </a>
            </div>

            <div data-aos="fade-left" className="mt-8 text-sm text-gray-500">
                🛠️ Tech I love: Python, C, C++, <span className="animate-pulse text-[#9370db]">Django,Next.js</span> and many more...
            </div>
        </section>
    );
}