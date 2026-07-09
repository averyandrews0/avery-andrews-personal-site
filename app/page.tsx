import { ContactSection } from "@/components/ContactSection";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { WritingCard } from "@/components/WritingCard";
import {
  aboutStats,
  apCourses,
  experience,
  interests,
  links,
  projects,
  writing
} from "@/components/site-data";
import { Download, GraduationCap } from "lucide-react";

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
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {aboutStats.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-lg border border-line bg-white p-5 shadow-sm"
                >
                  <p className="font-serif text-4xl font-bold text-navy">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {stat.label}
                  </p>
                </article>
              ))}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ink">Interests</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-md border border-line bg-white px-3 py-2 text-sm font-medium text-slate-700"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="education"
          eyebrow="Education"
          title="Solon High School"
          intro="Class of 2027"
        >
          <div className="grid gap-8 lg:grid-cols-[0.52fr_1fr]">
            <article className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-ink">
                <GraduationCap aria-hidden="true" size={22} />
                Coursework
              </h3>
              <p className="mt-4 leading-7 text-slate-700">
                Advanced Placement coursework across history, economics, math,
                science, government, and language arts.
              </p>
            </article>
            <div className="grid gap-3 sm:grid-cols-2">
              {apCourses.map(({ course, score }) => (
                <article
                  key={course}
                  className="flex items-center justify-between gap-4 rounded-lg border border-line bg-white px-5 py-4 shadow-sm"
                >
                  <h3 className="font-semibold text-ink">{course}</h3>
                  {score ? (
                    <span className="rounded-md bg-paper px-3 py-1 text-sm font-bold text-navy">
                      {score}
                    </span>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow="Experience"
          title="Leadership, outreach, competition, and communication."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {experience.map((item) => (
              <ExperienceCard key={item.title} {...item} />
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
          intro="Two longer pieces on the systems that shape economic opportunity and everyday community. Contact me to request access."
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
          <div className="rounded-lg border border-line bg-white p-6 shadow-sm">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <p className="max-w-xl leading-7 text-slate-700">
                A concise overview of my education, experience, leadership,
                athletics, and current interests.
              </p>
              <a
                href={links.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0D2742]"
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
