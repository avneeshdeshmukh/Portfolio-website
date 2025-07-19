import {
    SiGithub,
    SiLinkedin,
    SiInstagram,
    SiX,
    SiGmail
} from "react-icons/si";

export default function Socials() {

    return (
        <section id="connect" className="bg-[#181818] bg-opacity-10 bg-[url('/grid/charlie-brown.svg')] bg-repeat  py-20 px-6 border-t border-neutral-800">
            <h2 className="text-4xl font-bold text-white ms-10 mb-10">Connect With Me</h2>
            {/* Centered form */}
            <div data-aos="flip-up" className="flex ms-10 mb-10">
                <form
                    action="https://formspree.io/f/mgvyjdqz"
                    method="POST"
                    className="max-w-xl w-full space-y-6 bg-[#1f1f1f] p-8 rounded-2xl shadow-xl border border-[#2a2a2a]"
                >

                    <div>
                        <label htmlFor="name" className="block text-gray-400 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            className="w-full px-4 py-2 rounded-lg bg-[#2a2a2a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-400 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="w-full px-4 py-2 rounded-lg bg-[#2a2a2a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-gray-400 mb-1">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows="5"
                            required
                            className="w-full px-4 py-2 rounded-lg bg-[#2a2a2a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-2 px-6 rounded-lg transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            <h2 id="socials" className="text-4xl font-bold text-white ms-10 mb-10">Find Me Online</h2>
            <div data-aos="fade-right" className="grid grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
                <a href="mailto:avneeshdeshmukh17@gmail.com" target="_blank" rel="noopener noreferrer">
                    <SiGmail className="text-white text-7xl" title="avneeshdeshmukh17@gmail.com" />
                </a>
                <a href="https://linkedin.com/in/avneesh-deshmukh" target="_blank" rel="noopener noreferrer">
                    <SiLinkedin className="text-[#0077B5] text-7xl" title="LinkedIn" />
                </a>
                <a href="https://github.com/avneeshdeshmukh" target="_blank" rel="noopener noreferrer">
                    <SiGithub className="text-white text-7xl" title="GitHub" />
                </a>
                <a href="https://instagram.com/avneeshdeshmukh" target="_blank" rel="noopener noreferrer">
                    <SiInstagram className="text-[#962fbf] text-7xl" title="Instagram" />
                </a>
                <a href="https://x.com/avneeshpd" target="_blank" rel="noopener noreferrer">
                    <SiX className="text-white text-7xl" title="Twitter" />
                </a>
            </div>

            
        </section>
    );;
}
