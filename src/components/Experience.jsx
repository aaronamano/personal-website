import { experience } from '../data/experience';

export default function Experience() {
    return (
        <div className="space-y-10">
            {experience.map((item, index) => (
                <div key={index} className="pb-8 border-b border-gray-200 dark:border-gray-800 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-2 max-sm:flex-col max-sm:items-start max-sm:gap-1">
                        <div>
                            <h3 className="text-lg font-medium text-primary">{item.title}</h3>
                            <h4 className="text-base text-secondary">{item.organization}</h4>
                        </div>
                        <div className="flex flex-col items-end gap-0.5 max-sm:flex-row max-sm:items-start max-sm:gap-4">
                            <span className="text-sm text-tertiary">
                                {item.dateRange}
                            </span>
                            {item.location && (
                                <span className="text-sm text-tertiary">
                                    {item.location}
                                </span>
                            )}
                        </div>
                    </div>
                    <p className="text-secondary leading-relaxed">{item.description}</p>
                </div>
            ))}
        </div>
    );
}
