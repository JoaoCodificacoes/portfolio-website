// In components/ProjectCard.tsx
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DockerCardContainer } from "@/components/dockerCardContainer"
import { GithubIcon } from "@/components/Icons"

interface ProjectCardProps {
    containerName: string
    image: string
    tag: string
    title: string
    description: string
    tech: string[]
    githubUrl: string
}

export function ProjectCard(props: ProjectCardProps) {
    return (
        <DockerCardContainer containerName={props.containerName} image={props.image} tag={props.tag}>
            <h3 className="text-xl font-semibold mb-2 text-foreground">{props.title}</h3>
            <p className="text-foreground/70 mb-4 text-sm leading-relaxed">{props.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
                {props.tech.map((item) => (
                    <Badge key={item} variant="secondary" className="font-mono">
                        {item}
                    </Badge>
                ))}
            </div>

            <div className="flex gap-3">
                <Button size="sm" variant="outline" asChild>
                    <a href={props.githubUrl} target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="w-4 h-4 mr-2" />
                        Code
                    </a>
                </Button>
            </div>
        </DockerCardContainer>
    )
}