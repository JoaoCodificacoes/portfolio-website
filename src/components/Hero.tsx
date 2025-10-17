import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GithubIcon } from "@/components/Icons"

export function Hero() {
    return (
        <section className="container py-16 md:py-20">
            <div className="max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">João Ferreira</h1>
                <p className="text-lg text-muted-foreground mb-4 font-mono">
                    <span className="text-accent">$</span> whoami
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                    bla bla bla bla bla bla bla bla
                </p>
                <div className="flex gap-3">
                    <Button variant="outline" asChild>
                        <Link href="/cv">View CV</Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <a href="https://github.com/JoaoCodificacoes" target="_blank" rel="noopener noreferrer">
                            <GithubIcon className="w-4 h-4 mr-2" />
                            GitHub
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}