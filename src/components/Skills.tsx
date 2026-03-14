const skills = {
  frontend: [
    "React.js",
    "Next.js",
    "Redux",
    "Recoil",
    "TypeScript",
    "Material UI"
  ],
  backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    ".NET Core"
  ],
  cloud: [
    "Azure",
    "GCP",
    "Docker",
    "CI/CD",
    "Terraform"
  ],
  database: [
    "MongoDB",
    "Cosmos DB",
    "PostgreSQL",
    "SQL"
  ]
};

export default function Skills() {
  return (
    <section>

      <h2 className="text-3xl font-bold mb-10">
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>

            <h3 className="text-xl font-semibold capitalize mb-3">
              {category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-200 px-3 py-1 rounded-md text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}