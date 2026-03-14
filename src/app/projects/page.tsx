import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <main>

      <h1 className="text-4xl font-bold mb-10">
        Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {projects.map((project) => (
          <div
            key={project.title}
            className="border p-6 rounded-lg"
          >

            <h2 className="text-xl font-semibold">
              {project.title}
            </h2>

            <p className="mt-2 text-gray-600">
              {project.description}
            </p>

            <div className="flex gap-2 mt-4 flex-wrap">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-200 px-2 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </main>
  );
}