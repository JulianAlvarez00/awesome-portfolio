// app/components/ProjectsGithubSection.tsx
import GithubSection from './github/GithubSection';

export default function ProjectsGithubSection() {
  return (
    <section 
      id="projects" 
      className="flex flex-col items-center justify-start w-full min-h-screen bg-[#0a192f] pt-0 pb-16" // Removido py-16 y cambiado a pt-0
    >
      <div className="w-full max-w-[1200px] px-4 md:px-8">
        <div className="mb-8"> {/* Reducido de mb-12 a mb-8 */}
          <h2 className="text-4xl font-bold text-gray-200 mb-2"> {/* Reducido de mb-4 a mb-2 y text-5xl a text-4xl */}
            Projects
          </h2>
          <p className="text-lg text-gray-400"> {/* Reducido de text-xl a text-lg */}
            Discover my latest GitHub repositories and contributions
          </p>
        </div>

        {/* Card Container con padding reducido */}
        <div className="bg-[#112240] rounded-lg shadow-xl p-6"> {/* Reducido de p-8 a p-6 */}
          <div className="flex flex-col gap-3"> {/* Reducido gap-4 a gap-3 */}
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-gray-200">
                GitHub Projects
              </h3>
              <a 
                href="https://github.com/JulianAlvarez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64ffda] hover:text-[#64ffda]/80 transition-colors"
              >
                View More
              </a>
            </div>
            <GithubSection />
          </div>
        </div>
      </div>
    </section>
  );
}