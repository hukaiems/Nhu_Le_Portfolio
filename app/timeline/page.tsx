import { Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experiences";

export default function Timeline() {
  return (
    <div className="mx-auto max-w-(--breakpoint-sm) px-6 py-12 md:py-20">
      <div className="relative ml-4">
        {/* Timeline line */}
        <div className="absolute inset-y-0 left-0 border-l-2" />

        {experiences.map(
          (
            { company, description, period, technologies, title, icon: Icon },
            index,
          ) => (
            <div className="relative pb-12 pl-10 last:pb-0" key={index}>
              {/* Timeline Icon */}
              <div className="absolute left-px flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-accent ring-8 ring-background">
                <Icon className="h-5 w-5 hover:scale-125" />
              </div>

              {/* Content */}
              <div className="space-y-3 pt-2 sm:pt-1">
                <p className="font-medium text-base">{company}</p>
                <div>
                  <h3 className="font-semibold text-xl tracking-[-0.01em]">
                    {title}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{period}</span>
                  </div>
                </div>
                <p className="text-pretty text-muted-foreground text-sm sm:text-base">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      className="rounded-full"
                      key={tech}
                      variant="secondary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
