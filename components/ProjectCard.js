// components/ProjectCard.jsx
import Image from "next/image";

export default function ProjectCard({ title, description, tech, liveLink, githubLink, image }) {
  return (
    <div className="bg-zinc-900 shadow-lg rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 max-w-md w-full">
      
      {/* 🖼️ Image section */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 📄 Text Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-200 mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="bg-gray-100 text-sm text-gray-700 px-2 py-1 rounded-md font-medium"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
        {liveLink && 
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#9370db] text-white px-4 py-2 rounded-md text-sm hover:bg-[#69359c] transition"
          >
            Live Demo
          </a>}
          {githubLink && 
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-gray-300 hover:text-gray-700 text-gray-400 transition"
          >
            GitHub
          </a>}
        </div>
      </div>
    </div>
  );
}
