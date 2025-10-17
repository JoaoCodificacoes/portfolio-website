
import { ProjectCard } from "@/components/ProjectCard"

const projectsData = [
    {
        containerName: "project_portfolio",
        image: "nextjs",
        tag: "14",
        title: "Containerized Portfolio",
        description: "A developer portfolio with a Docker-inspired design",
        tech: ["Next.js", "TypeScript", "Tailwind CSS ", ],
        githubUrl: "https://github.com/JoaoCodificacoes/portfolio-website",
    },
    {
        containerName: "project_chat",
        image: "nestjs",
        tag: "11",
        title: "Microservices Chat Application",
        description: "A microservices-based chat app built on a NestJS. Features dedicated services (users, auth, messages), each with a PostgreSQL database via Prisma, using Redis for real-time messaging and socket events.",
        tech: [
            "TypeScript",
            "Next.js",
            "React",
            "NestJS",
            "PostgreSQL",
            "Prisma",
            "Redis",
            "Docker",
            "Kubernetes",
            "Terraform",
            "Ansible",
            "Prometheus",
            "Grafana"
        ],
        githubUrl: "https://github.com/your-username/api"
    },
]

export function Projects() {
    return (
        <section className="container py-8 sm:py-10 md:py-12 pb-16 sm:pb-20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Featured Projects</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.containerName}
                        {...project}
                    />
                ))}

            </div>
        </section>
    )
}