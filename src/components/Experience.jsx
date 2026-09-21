import { experience } from '../data/experience';

export default function Experience() {
    return (
        <div>
            {experience.map((item, index) => (
                <div key={index} className="py-6 first:pt-0 last:pb-0">
                    <div className="flex justify-between items-start gap-6 max-sm:flex-col max-sm:gap-2">
                        <div className="min-w-0">
                            <h3 className="text-lg font-medium text-primary leading-relaxed">
                                {item.title}{' '}
                                <span className="text-sm font-normal text-secondary">
                                    @ {item.organization}
                                </span>
                                {item.location && (
                                    <span className="text-sm font-normal text-tertiary">
                                        {' '}// {item.location}
                                    </span>
                                )}
                            </h3>
                        </div>
                        <div className="flex shrink-0 flex-col items-end gap-1 max-sm:flex-row max-sm:flex-wrap max-sm:items-start max-sm:gap-x-4">
                            <span className="text-sm text-tertiary">
                                {item.dateRange}
                            </span>
                        </div>
                    </div>
                    <p className="mt-3 text-sm text-secondary leading-relaxed">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    );
}
