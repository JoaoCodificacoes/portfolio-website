import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Projects } from "@/components/Projects"

export default function Home() {
    return (
        <main className="container mx-auto px-4">
            <Hero />
            <About />
            <Projects />
        </main>
    )
}