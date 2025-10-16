import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/Icons";

export function Navbar() {
    return (
        <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-lg font-mono text-primary hover:text-primary/80 transition-colors">
                    {"<dev />"}
                </Link>

                <div className="flex gap-4 items-center">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href="/">Home</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href="/cv">CV</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="h-9 w-px bg-accent/80"/>


                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" asChild>
                            <a href="https://github.com/JoaoCodificacoes" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <GithubIcon className="w-4 h-4"/>
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a href="https://www.linkedin.com/in/1joaoferreira4/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <LinkedinIcon className="w-4 h-4"/>
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a href="mailto:joao.d.n.ferreira+cv@gmail.com" aria-label="Email">
                                <MailIcon className="w-4 h-4"/>
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
