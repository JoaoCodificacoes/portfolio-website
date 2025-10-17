import {DockerCardContainer} from "@/components/dockerCardContainer";


export function About() {
    return (
        <section className="py-8 sm:py-10 md:py-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">About</h2>
            <DockerCardContainer containerName="about_container" image="alpine" tag="3.18">
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    bla bla bla bla bla iots me joao I like things
                </p>
            </DockerCardContainer>
        </section>
    )
}
