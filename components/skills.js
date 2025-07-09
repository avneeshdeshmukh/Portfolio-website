import {
    SiNextdotjs,
    SiPython,
    SiC,
    SiCplusplus,
    SiJavascript,
    SiDjango,
    SiFlask,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiFirebase,
    SiGit,
    SiGithub,
    SiLinux,
    SiPostman,
    SiVercel,
    SiMysql,
    SiPostgresql,
    SiSqlite,
    SiMongodb,
} from "react-icons/si";

export default function Skills() {

    return (
        <section className="bg-[#181818] bg-opacity-10 bg-[url('/grid/topography.svg')] bg-repeat py-20 px-6 border-t border-neutral-800">
            <h2 data-aos="fade-right" className="text-4xl font-bold text-white ms-10 mb-10">Skills</h2>
            <div data-aos="fade-left" className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-8 justify-items-center">
                <SiC className="text-[#5599ff] text-6xl" title="C"/>
                <SiCplusplus className="text-[#5599ff] text-6xl" title="C++"/>
                <SiPython className="text-[#ffde57] text-6xl" title="Python"/>
                <img src="/icons/java.svg" alt="Java" className="w-17 h-17" title="Java" />
                <SiJavascript className="text-[#ffde57] text-6xl" title="JavaScript"/>
                <SiMysql className="text-[#00758f] text-6xl" title="MySQL"/>
                <SiPostgresql className="text-[#0064a5] text-6xl" title="PostgreSQL"/>
                <SiMongodb className="text-[#4DB33D] text-6xl" title="MongoDB"/>
                <SiSqlite className="text-[#90D4F4] text-6xl" title="SQLite"/>
                <SiDjango className="text-[#0c7a50] text-6xl" title="Django"/>
                <SiFlask className="text-white text-6xl" title="Flask"/>
                <SiReact className="text-[#61dafb] text-6xl" title="React JS"/>
                <SiNextdotjs className="text-white text-6xl" title="Next JS"/>
                <SiNodedotjs className="text-[#68A063] text-6xl" title="Node JS"/>
                <SiExpress className="text-white text-6xl" title="Express JS"/>
                <SiFirebase className="text-6xl" fill="#FFC400" title="Firebase"/>
                <img src="/icons/vs-logo.svg" alt="Visual Studio" className="w-15 h-15" title="Visual Studio" />
                <SiGit className="text-[#f1502f] text-6xl" title="Git"/>
                <SiGithub className="text-white text-6xl" title="GitHub"/>
                <div className="bg-white opacity-50 p-1 rounded">
                    <SiLinux className=" text-6xl" title="Linux"/>
                </div>
                <SiPostman className="text-[#ef5b25] text-6xl" title="Postman"/>
                <SiVercel className="text-white text-6xl"title="Vercel" />
            </div>
        </section>
    );
}
