import { ContactSection } from "@/components/ContactSection";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { WritingCard } from "@/components/WritingCard";
import {
  experience,
  interests,
  links,
  projects,
  resumeSummary,
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
          title="A practical interest in how capital moves."
          intro="I'm a student at Solon High School focused on finance, investing, and entrepreneurship. I co-founded Solon's first investing club, compete in varsity hockey and pole vault, and have explored venture capital through startup research and investment pitches. I'm especially interested in public markets, private investing, and how capital shapes growing businesses."
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr]">
            <div className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-ink">
                <GraduationCap aria-hidden="true" size={22} />
                Current Focus
              </h3>
              <p className="mt-4 leading-7 text-slate-700">
                I like work that connects research with real decisions:
                understanding a business, studying the market around it, and
                explaining why an opportunity matters. My background spans
                investing club leadership, startup-style pitches, debate,
                athletics, and customer-facing work.
              </p>
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
          title="Featured work and research."
          intro="Selected projects that show how I approach markets, business models, communication, and applied research."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </Section>

        <Section
          id="writing"
          eyebrow="Writing"
          title="Selected writing."
          intro="A few placeholders for essays and research notes that can be published as the site grows."
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {writing.map((item) => (
              <WritingCard key={item.title} {...item} />
            ))}
          </div>
        </Section>

        <Section
          id="resume"
          eyebrow="Resume"
          title="Resume summary."
          intro="A current resume is available below."
        >
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <p className="leading-7 text-slate-700">
                Download the current PDF version or scan the web summary for a
                quick overview.
              </p>
              <a
                href={links.resume}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0D2742]"
              >
                <Download aria-hidden="true" size={18} />
                Download Resume
              </a>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {Object.entries(resumeSummary).map(([category, items]) => (
                <article
                  key={category}
                  className="rounded-lg border border-line bg-white p-5 shadow-sm"
                >
                  <h3 className="text-base font-semibold capitalize text-ink">
                    {category}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
                    {items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-steel" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
