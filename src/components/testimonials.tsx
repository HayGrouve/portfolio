import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-t bg-muted/30 py-24 md:py-32">
      <div className="container">
        <SectionHeading index="04" label="Kind words" title="What people say" />

        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border bg-card p-8 md:p-10">
                <div>
                  <Quote
                    aria-hidden
                    className="mb-6 h-8 w-8 fill-brand/15 text-brand"
                  />
                  <blockquote className="text-pretty text-xl leading-relaxed tracking-tight md:text-2xl">
                    {testimonial.content}
                  </blockquote>
                </div>
                <figcaption className="mt-10 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[hsl(var(--brand-from))] to-[hsl(var(--brand-to))] text-sm font-semibold text-white">
                    {initials(testimonial.name)}
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
