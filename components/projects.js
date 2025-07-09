import ProjectCard from "./ProjectCard";
export default function Projects() {
    const projects = [
        {
            title: "TreasureMap Academy",
            description: "Transform Online Learning into an Epic Voyage: 'TreasureMap Academy' Gamifies Education to Vanquish Distractions and Unlock Academic Riches!",
            tech: ["Next.js", "Firebase", "JavaScript", "Tailwind", "AWS", "Vercel", "Firestore", "Firebase Functions"],
            liveLink: "https://treasure-map-academy.vercel.app/",
            githubLink: null,
            image: "/images/tma.png", // 👈 Make sure this image is in /public/images/
        }
        ,
        {
            title: "SimpleChat",
            description: "Seamless Conversations: A Simple Chat Platform Built with Django & PostgreSQL",
            tech: ["Django", "PostgreSQL", "AJAX", "JavaScript", "Vercel", "Railway","Bootstrap"],
            liveLink: "https://simplechat-room.vercel.app/",
            githubLink: "https://github.com/avneeshdeshmukh/SimpleChat-A-Chatroom-Web-Application-Using-Django",
            image: "/images/SimpleChat.png",
        },
        {
            title: "Pune Compass",
            description: "Unveiling Pune's Beauty: A Local Guide & Visual Storytelling Platform",
            tech: ["Django", "SQLite3", "JavaScript", "Bootstrap"],
            liveLink: null,
            githubLink: "https://github.com/avneeshdeshmukh/Pune-compass-tour-guide-using-django",
            image: "/images/PuneCompass.png",
        },
        {
            title: "Savory Secrets",
            description: "Reveal Your Savory Secrets. Discover Delicious New Ones.",
            tech: ["Flask", "MongoDB", "Tailwind", "Vercel"],
            liveLink: "https://savoury-secrets.vercel.app/",
            githubLink: "https://github.com/avneeshdeshmukh/Savory-Secret-A-Recipe-Blog-Website-Using-Flask-MongoDB",
            image: "/images/SavorySecrets.png",
        },
    ];

    return (
        <section className="bg-[#181818] bg-opacity-10 bg-[url('/grid/x-equals.svg')] bg-repeat py-20 px-6 border-t border-neutral-800">
            <h2 data-aos="fade-right" className="text-4xl font-bold text-white ms-10 mb-10">Projects</h2>
            <div  data-aos="fade-left"className="flex flex-wrap justify-center gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}
