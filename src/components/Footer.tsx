import { Button } from "./ui/button";
import { GithubIcon, LinkedinIcon, MailIcon, TerminalIcon } from "@/components/Icons";

export function Footer() {
    return (
        <footer className="border-t backdrop-blur-sm mt-20 bg-background border-foreground">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-center gap-4">

                    <div className="flex-1 flex items-center gap-2 text-sm text-muted-foreground">
                        <TerminalIcon className="w-4 h-4 md:w-6 md:h-6"/>
                        <span className="font-mono" style={{color: "var(--terminal-foreground)"}}>
              $ docker ps --status running
            </span>
                    </div>


                    <div className="flex-1 flex justify-center gap-2">
                        <Button variant="ghost" size="icon" asChild>
                            <a href="https://github.com/JoaoCodificacoes" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <GithubIcon className="w-6 h-6 md:w-8 md:h-8"/>
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a href="https://www.linkedin.com/in/1joaoferreira4/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <LinkedinIcon className="w-6 h-6 md:w-8 md:h-8"/>
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a href="mailto:joao.d.n.ferreira+cv@gmail.com" aria-label="Email">
                                <MailIcon className="w-6 h-6 md:w-8 md:h-8"/>
                            </a>
                        </Button>
                    </div>


                    <div className="flex-1 flex justify-end text-sm text-foreground font-mono">
                        © {new Date().getFullYear()} <span className="ml-2">João Ferreira. All rights reserved.</span>
                    </div>

                </div>
            </div>
        </footer>
    );
}
