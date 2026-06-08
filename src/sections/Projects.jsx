import { GitHub } from "@mui/icons-material"
import { ArrowUp, ArrowUpRight } from "lucide-react"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"

const projects = [
    {
        title: "Title 1",
        description: "Description from the project 1 I will try to get from my github",
        image: "notFound.png",
        tags: ["React", "TypeScript", "Node"],
        link: "#",
        github: "#"
    },
    {
        title: "Title 2",
        description: "Description from the project 2 I will try to get from my github",
        image: "notFound.png",
        tags: ["React", "TypeScript", "Node"],
        link: "#",
        github: "#"
    },
    {
        title: "Title 3",
        description: "Description from the project 3 I will try to get from my github",
        image: "notFound.png",
        tags: ["React", "TypeScript", "Node"],
        link: "#",
        github: "#"
    },
]

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-xl mb-16">
                    <h2 className="text-4xl md:text-5ml font-bold mt-4 mb-6 animate-fad-in text-secondary-foreground">
                        Featured Work
                    </h2>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{ animationDelay: `${(index+1)*100}ms` }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"
                                />
                                {/* Overlay links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-background transition-all">
                                        <ArrowUp className="w-5 h-5"/>
                                    </a>
                                    <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-background transition-all">
                                        <GitHub className="w-5 h-5"/>
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transitions-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight 
                                        className="w-5 h-5 text-muted-foreground group-hover:text-primary 
                                        group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                                    />
                                </div>
                                <p className="flex flex-wrap gap-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium 
                                            border border-border/50 trxt-muted-foreground hover:border-primary/50 
                                            hover:text-primary transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="text-center mt-12 animate-fade-in animation-delay-500">
                        <AnimatedBorderButton>
                            View All Projects
                            <ArrowUpRight className="w-5 h-5" />
                        </AnimatedBorderButton>
                    </div>
                </div>
            </div>
        </section>
    )
}