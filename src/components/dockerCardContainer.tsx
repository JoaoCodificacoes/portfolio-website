import type { ReactNode } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ContainerCardProps {
    containerName: string
    image?: string
    tag?: string
    status?: "running" | "exited" | "created"
    children: ReactNode
    className?: string
}

export function DockerCardContainer({
                                  containerName,
                                  image = "node",
                                  tag = "latest",
                                  status = "running",
                                  children,
                                  className = "",
                              }: ContainerCardProps) {
    const statusColors = {
        running: "text-[var(--terminal-green)]",
        exited: "text-muted-foreground",
        created: "text-[var(--terminal-cyan)]",
    }

    return (
        <Card className={`bg-card border-border overflow-hidden ${className}`}>
            <CardHeader className="bg-secondary/50 px-4 py-2 border-b border-border">
                <div className="flex items-center justify-between font-mono text-xs">
          <span className="text-muted-foreground">
            docker run --name <span className="text-muted">{containerName}</span> {image}:{tag}
          </span>
                    <Badge variant="outline" className={`${statusColors[status]} border-current text-ring border-0`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse mr-1.5" />
                        {status}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="p-6">{children}</CardContent>
        </Card>
    )
}
