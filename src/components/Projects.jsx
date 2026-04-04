import { projects } from '../data/projects';

export default function Projects() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, index) => (
                <a 
                    key={index} 
                    href={project.link}
                    className="block group"
                >
                    <div className="bg-secondary dark:bg-tertiary rounded-xl overflow-hidden transition duration-200 hover:shadow-lg border border-gray-200 dark:border-gray-800 h-80 flex flex-col">
                        <div className="relative h-36 shrink-0">
                            <img 
                                src={project.image} 
                                alt="" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                        <div className="p-5 overflow-y-auto flex-1">
                            <h3 className="text-lg font-medium text-primary group-hover:text-secondary transition-colors">{project.name}</h3>
                            <p className="text-secondary text-sm mt-2">
                                {project.description}
                            </p>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}
