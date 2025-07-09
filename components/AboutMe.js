import Link from "next/link";

export default function AboutMe() {
    return (
        <section id="aboutme" className="py-20 px-6 bg-[#181818] bg-opacity-10 bg-[url('/grid/formal-invitation.svg')] bg-repeat text-gray-200">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left: Profile Photo */}
                <div data-aos="fade-right" className="flex justify-center">
                    <img
                        src="/images/UserImage.jpeg"
                        alt="Profile"
                        className="w-128 h-128 object-cover rounded-2xl border-2 border-gray-600 shadow-lg"
                    />
                </div>

                {/* Right: About Text */}
                <div data-aos="fade-left">
                    <h2 className="text-3xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-400 mb-4">
                        I&apos;m a passionate and detail-oriented software engineer with hands-on experience in performance-critical systems and production-grade tools. I recently completed a year-long internship at <strong>PTC Software India</strong>, where I worked on <em>Creo</em>, a world-class 3D CAD modeling solution, contributing to its core geometry modules using C and C++.
                    </p>
                    <p className="text-gray-400 mb-4">
                        I enjoy solving deep technical challenges, especially in systems that demand reliability, speed, and precision. From multithreaded debugging to low-level optimization, I'm driven by the impact thoughtful code can have in real-world applications.
                    </p>
                    <p className="text-gray-400 mb-4">
                        Beyond C++, I&apos;ve worked across the stack using tools like <strong>Django, React.js, Next.js,</strong> and <strong>Firebase</strong>, and I actively apply Agile methodologies, version control, and test-driven development in my workflow.
                    </p>
                    <p className="text-gray-400 mb-4">
                        I&apos;m currently looking for opportunities to grow as an engineer — building tools, contributing to products, and collaborating in high-performance environments.
                    </p>
                    <Link href="#connect" className="inline-block mt-4 bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
                        Let&apos;s connect
                    </Link>

                </div>
            </div>
            <div data-aos="fade-down" className="max-w-4xl mx-auto mb-10 mt-20">
                <h3 className="text-2xl font-bold mb-10">Experience</h3>
                <div className="relative border-l border-gray-600 pl-6 space-y-10">

                    {/* PTC */}
                    <div className="relative">
                        <div className="absolute -left-3 top-1.5 w-3 h-3 rounded-full bg-white border-2 border-gray-800" />
                        <div className="ms-4">
                            <h4 className="text-lg font-semibold">Software Development Intern — PTC Software India</h4>
                            <p className="text-sm text-gray-400">July 2024 – June 2025</p>
                            <p className="mt-2 text-gray-400 text-sm">
                                Contributed to Creo's core C++ geometry modules, resolved critical modeling bugs, and optimized performance in large-scale CAD systems.
                            </p>
                        </div>
                    </div>

                    {/* Embel */}
                    <div className="relative">
                        <div className="absolute -left-3 top-1.5 w-3 h-3 rounded-full bg-white border-2 border-gray-800" />
                        <div className="ms-4">
                        <h4 className="text-lg font-semibold">Intern — Embel Technologies</h4>
                        <p className="text-sm text-gray-400">Jan 2024 – Mar 2024</p>
                        <p className="mt-2 text-gray-400 text-sm">
                            Built a BLE-based sensor framework in Python, created a Django web platform for interview automation, and contributed to frontend UX improvements.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-10">Education</h3>
                <div className="relative border-l border-gray-600 pl-6 space-y-5">

                    {/* College */}
                    <div className="relative">
                        <div className="absolute -left-3 top-1.5 w-3 h-3 rounded-full bg-white border-2 border-gray-800" />
                        <div className="ms-4">
                            <h4 className="text-lg font-semibold">Bachelors of Engineering in Information Technology</h4>
                            <p className="text-sm text-gray-400">PES Modern College of Engineering, Pune • 2021 – 2025</p>
                            <p className="mt-2 text-gray-400 text-sm">
                                Strong foundation in DSA, OOP, SDLC, Python and C++. CGPA: 9.32/10
                            </p>
                        </div>
                    </div>

                    {/* Junior College */}
                    <div className="relative">
                        <div className="absolute -left-3 top-1.5 w-3 h-3 rounded-full bg-white border-2 border-gray-800" />
                        <div className="ms-4">
                            <h4 className="text-lg font-semibold">HSC - Science (PCM)</h4>
                            <p className="text-sm text-gray-400">PES Modern Junior College, Nigdi, Pune • June 2019 – June 2021</p>
                            <p className="mt-2 text-gray-400 text-sm">
                                Completed Higher Secondary Education with a focus on Physics, Chemistry, and Mathematics. Passed with 94.33%
                            </p>
                        </div>
                    </div>

                    {/* School */}
                    <div className="relative">
                        <div className="absolute -left-3 top-1.5 w-3 h-3 rounded-full bg-white border-2 border-gray-800" />
                        <div className="ms-4">
                            <h4 className="text-lg font-semibold">SSC</h4>
                            <p className="text-sm text-gray-400">Swami Vivekanand Academy, Chh. Sambhajinagar • June 2007 – March 2019</p>
                            <p className="mt-2 text-gray-400 text-sm">
                                Studied core academic subjects including Mathematics, Science, and English. Passed with 97%
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

