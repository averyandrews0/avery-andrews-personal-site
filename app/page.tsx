import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { WritingCard } from "@/components/WritingCard";
import {
  aboutStats,
  apCourses,
  links,
  projects,
  writing
} from "@/components/site-data";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />

        <Section
          id="about"
          eyebrow="About"
          title="Interested in the work behind growing companies."
          intro="I’m a high school student interested in finance, venture capital, entrepreneurship, and the way businesses grow from early ideas into lasting companies. I’m especially interested in early-stage B2B SaaS, Midwest venture ecosystems, and the metrics that drive strong companies, from ARR and retention to customer acquisition and market opportunity. I'm also an avid athlete and I'd love to connect with you."
        >
          <div className="grid gap-3 sm:grid-cols-3">
            {aboutStats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-lg border border-line bg-paper px-5 py-6"
              >
                <p className="font-serif text-4xl font-bold text-lilac">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-steel">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="education"
          eyebrow="Education"
          title="Solon High School"
          intro="Class of 2027"
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {apCourses.map(({ course, score }) => (
              <article
                key={course}
                className="flex items-center justify-between gap-4 rounded-lg border border-line bg-paper px-5 py-4"
              >
                <h3 className="font-semibold text-ink">{course}</h3>
                {score ? (
                  <span className="rounded-md bg-segment px-3 py-1 text-sm font-bold text-lilac">
                    {score}
                  </span>
                ) : null}
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Projects"
          title="Things I&apos;ve been digging into."
          intro="A few projects where I&apos;ve gotten to research a company, build an investment point of view, or make investing more accessible to other students."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </Section>

        <Section
          id="research"
          eyebrow="Writing & Research"
          title="Questions worth sitting with."
          intro="Three selected works on companies, regulation, and the places that shape everyday community. Contact me to request access."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {writing.map((item) => (
              <WritingCard key={item.title} {...item} />
            ))}
          </div>
        </Section>

        <Section
          id="resume"
          eyebrow="Resume"
          title="My resume."
          intro="A current resume is available below."
        >
          <div className="rounded-lg border border-line bg-paper p-6">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <p className="max-w-xl leading-7 text-steel">
                A concise overview of my education, experience, leadership,
                athletics, and current interests.
              </p>
              <a
                href={links.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-lilac px-5 py-3 text-sm font-semibold text-void transition hover:brightness-110"
              >
                <Download aria-hidden="true" size={18} />
                Download Resume
              </a>
            </div>
          </div>
        </Section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
