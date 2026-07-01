import {
  Activity,
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Database,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Microscope,
  ShieldCheck,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import clinicalDataVisual from '../assets/clinical-data-visual.png'
import {
  CV_URL,
  FEATURED_PUBLICATION_URL,
  GOOGLE_SCHOLAR_URL,
  LINKEDIN_URL,
  THESIS_URL,
  education,
  experience,
  projects,
  skillGroups,
  teaching,
} from '../data/portfolio'

type SectionHeadingProps = {
  label: string
  title: string
  description?: string
}

function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="section-label">{label}</p>
      <h2 className="mt-4 font-display text-3xl font-semibold text-navy sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-8 text-slate-600">{description}</p> : null}
    </div>
  )
}

function ExternalButton({
  children,
  href,
  variant = 'secondary',
}: {
  children: ReactNode
  href: string
  variant?: 'primary' | 'secondary' | 'ghost'
}) {
  const className =
    variant === 'primary'
      ? 'button button-primary'
      : variant === 'ghost'
        ? 'button button-ghost'
        : 'button button-secondary'

  return (
    <a className={className} href={href} rel="noreferrer" target={href === '#' ? undefined : '_blank'}>
      {children}
    </a>
  )
}

export function HeroSection() {
  return (
    <section className="section-shell grid min-h-[calc(86svh-4.5rem)] items-center gap-12 py-12 sm:py-14 lg:grid-cols-[1fr_0.86fr]" id="home">
      <div className="animate-rise">
        <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] text-navy sm:text-6xl lg:text-7xl">
          Dr Sobia Amjad
        </h1>
        <p className="mt-5 max-w-3xl text-xl font-medium leading-8 text-teal-800 sm:text-2xl">
          Clinical Data Scientist | Health Informatics | Machine Learning | Clinical AI
        </p>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
          I work at the intersection of healthcare, clinical research and artificial intelligence,
          using clinical data, SQL, machine learning and electronic medical record systems to
          support better healthcare decisions.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a className="button button-primary" href="#projects">
            View Projects <ArrowRight size={17} />
          </a>
          <ExternalButton href={GOOGLE_SCHOLAR_URL}>
            View Google Scholar <ExternalLink size={16} />
          </ExternalButton>
          <a className="button button-secondary" href={CV_URL}>
            Download CV <Download size={16} />
          </a>
          <a className="button button-ghost" href="#contact">
            Contact <Mail size={16} />
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:gap-8">
          <span className="inline-flex items-center gap-2">
            <MapPin size={17} className="text-teal-700" /> Melbourne, VIC, Australia
          </span>
          <span className="inline-flex items-center gap-2">
            <ShieldCheck size={17} className="text-teal-700" /> Clinical analytics and informatics
          </span>
        </div>
      </div>

      <div className="animate-rise-delay">
        <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
          <img
            alt="Abstract clinical data visualisation with charts, database layers and predictive modelling curves"
            className="aspect-[16/11] w-full object-cover"
            src={clinicalDataVisual}
          />
          <div className="absolute inset-x-0 bottom-0 border-t border-white/70 bg-white/[0.86] px-5 py-4 backdrop-blur">
            <div className="grid grid-cols-3 gap-3 text-xs font-semibold text-navy">
              <span>EMR data</span>
              <span>Clinical NLP</span>
              <span>Prediction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function AboutSection() {
  const focus: Array<[string, string, LucideIcon]> = [
    ['Data-driven', 'Evidence-based insights', Activity],
    ['Clinically informed', 'Grounded in healthcare context', ShieldCheck],
    ['Machine learning', 'Practical, evaluated models', Microscope],
    ['Collaborative', 'Clinical and informatics teams', BriefcaseBusiness],
  ]

  return (
    <section className="border-y border-slate-200 bg-white py-16 sm:py-20" id="about">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.78fr_1fr]">
        <SectionHeading
          label="About"
          title="Clinical data work shaped by research, hospital systems and responsible AI."
        />
        <div className="space-y-5 text-base leading-8 text-slate-650">
          <p>
            I am a Clinical Data Analyst at The Royal Melbourne Hospital and hold a PhD in
            Computing and Information Systems from the University of Melbourne.
          </p>
          <p>
            My work focuses on transforming complex healthcare data into meaningful insights for
            clinical research, operational planning and predictive modelling. I have experience
            working with Epic Clarity, Epic Caboodle and Cerner EHR data, and I use SQL, Python and
            statistical tools to prepare, analyse and interpret clinical datasets.
          </p>
          <p>
            During my PhD, I developed machine learning and natural language processing approaches
            for delirium identification and prediction using electronic health record data, clinical
            notes and medication information.
          </p>
          <p>
            I am particularly interested in clinical AI, healthcare decision support, responsible
            machine learning and practical tools that help clinicians and health services make
            better use of data.
          </p>
        </div>
      </div>

      <div className="section-shell mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {focus.map(([title, description, Icon]) => (
          <div className="rounded-lg border border-slate-200 bg-mist p-5" key={title}>
            <Icon className="text-teal-700" size={24} />
            <h3 className="mt-4 font-display text-lg font-semibold text-navy">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function CurrentWorkSection() {
  const bullets = experience[0].bullets

  return (
    <section className="bg-mist py-16 sm:py-20" id="current-work">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.74fr_1fr]">
        <SectionHeading label="Current Work" title="Clinical Data Analyst" />
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <p className="text-sm font-semibold uppercase text-teal-700">
            The Royal Melbourne Hospital, Clinical Informatics Centre
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-500">July 2024 - Present</p>
          <p className="mt-5 leading-8 text-slate-650">
            At The Royal Melbourne Hospital, I support clinical research and operational projects
            by extracting, preparing and analysing hospital data. My work includes Epic Clarity and
            Caboodle data preparation, SQL querying, Python-based analysis and contribution to
            prediction-related work.
          </p>
          <ul className="mt-6 grid gap-3">
            {bullets.map((bullet) => (
              <li className="flex gap-3 text-sm leading-6 text-slate-650" key={bullet}>
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-600" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function ResearchSection() {
  const themes = [
    'Clinical natural language processing',
    'Machine learning for healthcare',
    'Delirium identification and prediction',
    'Electronic health record data',
    'Imbalanced clinical outcomes',
    'Feature engineering',
    'Predictive model evaluation',
    'Responsible use of AI in healthcare',
  ]

  return (
    <section className="bg-white py-16 sm:py-20" id="research">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            label="Research & PhD"
            title="Doctoral Research in Machine Learning and Health Informatics"
            description="University of Melbourne | Doctor of Philosophy, Computing and Information Systems | Completed 2024"
          />
          <a className="button button-secondary mt-7" href={THESIS_URL}>
            Read Thesis <FileText size={16} />
          </a>
        </div>
        <div className="rounded-lg border border-slate-200 bg-gradient-to-br from-white to-cyan-50/70 p-6 sm:p-8">
          <h3 className="font-display text-2xl font-semibold leading-snug text-navy">
            Developing Delirium Prediction Models in Clinical Settings: Integrating Machine Learning
            and Natural Language Processing with Patient Data, Clinical Notes, and Antipsychotics
            Data
          </h3>
          <p className="mt-5 leading-8 text-slate-650">
            My doctoral research focused on developing machine learning and natural language
            processing approaches for delirium identification and prediction in clinical settings.
            The work used electronic health record data, clinical notes and medication information
            to explore how structured and unstructured healthcare data can support clinical
            prediction.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {themes.map((theme) => (
              <span className="rounded-md border border-teal-200 bg-white px-3 py-2 text-sm font-medium text-teal-900" key={theme}>
                {theme}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ProjectsSection() {
  return (
    <section className="border-y border-slate-200 bg-mist py-16 sm:py-20" id="projects">
      <div className="section-shell">
        <SectionHeading
          label="Projects"
          title="Healthcare data, prediction and clinical informatics work."
          description="Selected work areas from hospital analytics, doctoral research and portfolio development."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-line" key={project.title}>
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-semibold uppercase text-teal-700">
                    {project.category}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-navy">
                    {project.title}
                  </h3>
                </div>
                {project.status ? (
                  <span className="rounded-md bg-cyan-50 px-3 py-1 text-xs font-semibold text-teal-800">
                    {project.status}
                  </span>
                ) : null}
              </div>
              <p className="mt-4 leading-7 text-slate-650">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-semibold text-slate-700" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              {project.highlights.length ? (
                <ul className="mt-5 grid gap-2">
                  {project.highlights.map((highlight) => (
                    <li className="flex gap-2 text-sm leading-6 text-slate-650" key={highlight}>
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PublicationsSection() {
  return (
    <section className="bg-white py-16 sm:py-20" id="publications">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.72fr_1fr]">
        <SectionHeading
          label="Publications"
          title="Clinical NLP, predictive modelling and health informatics research outputs."
        />
        <div className="rounded-lg border border-slate-200 bg-gradient-to-br from-cyan-50 to-white p-6 sm:p-8">
          <BookOpen className="text-teal-700" size={28} />
          <p className="mt-5 text-lg leading-8 text-navy">
            Amjad S., Holmes N.E., Kishore K., Young M., Bailey J., Bellomo R., Verspoor K.
            Advancing Delirium Classification: A Clinical Notes-based Natural Language
            Processing-Supported Machine Learning Model. Published.
          </p>
          <p className="mt-4 leading-8 text-slate-650">
            My research outputs focus on clinical NLP, predictive modelling and health informatics.
            Additional publications and citation details are available through my Google Scholar
            profile.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ExternalButton href={GOOGLE_SCHOLAR_URL} variant="primary">
              View Google Scholar <ExternalLink size={16} />
            </ExternalButton>
            <ExternalButton href={FEATURED_PUBLICATION_URL}>
              View Featured Publication <ExternalLink size={16} />
            </ExternalButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SkillsSection() {
  return (
    <section className="border-y border-slate-200 bg-mist py-16 sm:py-20" id="skills">
      <div className="section-shell">
        <SectionHeading
          label="Skills"
          title="A practical toolkit for clinical datasets, modelling and research communication."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-line" key={group.title}>
              <Database className="text-teal-700" size={24} />
              <h3 className="mt-4 font-display text-xl font-semibold text-navy">{group.title}</h3>
              <ul className="mt-5 grid gap-2">
                {group.skills.map((skill) => (
                  <li className="text-sm leading-6 text-slate-650" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineItem({
  title,
  meta,
  dates,
  bullets,
}: {
  title: string
  meta: string
  dates: string
  bullets?: string[]
}) {
  return (
    <article className="relative border-l border-teal-200 pl-6">
      <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-teal-600 shadow-line" />
      <p className="text-sm font-semibold uppercase text-teal-700">{dates}</p>
      <h3 className="mt-2 font-display text-xl font-semibold text-navy">{title}</h3>
      <p className="mt-1 text-sm font-medium text-slate-600">{meta}</p>
      {bullets ? (
        <ul className="mt-4 grid gap-2">
          {bullets.map((bullet) => (
            <li className="text-sm leading-6 text-slate-650" key={bullet}>
              {bullet}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}

export function ExperienceSection() {
  return (
    <section className="bg-white py-16 sm:py-20" id="experience">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.68fr_1fr]">
        <SectionHeading
          label="Experience"
          title="Clinical analytics, doctoral research and software foundations."
        />
        <div className="grid gap-7">
          {experience.map((item) => (
            <TimelineItem
              bullets={item.bullets}
              dates={item.dates}
              key={`${item.role}-${item.organisation}`}
              meta={item.organisation}
              title={item.role}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export function EducationSection() {
  return (
    <section className="border-y border-slate-200 bg-mist py-16 sm:py-20" id="education">
      <div className="section-shell grid gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading label="Education" title="Academic training in computing and information systems." />
          <div className="mt-8 grid gap-6">
            {education.map((item) => (
              <TimelineItem dates={item.dates} key={item.degree} meta={item.school} title={item.degree} />
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <GraduationCap className="text-teal-700" size={26} />
            <h2 className="font-display text-3xl font-semibold text-navy">Teaching</h2>
          </div>
          <div className="mt-8 grid gap-6">
            {teaching.map((item) => (
              <TimelineItem
                bullets={item.bullets}
                dates={item.dates}
                key={`${item.role}-${item.organisation}`}
                meta={item.organisation}
                title={item.role}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section className="bg-white py-16 sm:py-20" id="contact">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.76fr_1fr]">
        <SectionHeading
          label="Contact"
          title="Open to clinical data science, health informatics and healthcare analytics opportunities."
          description="I am open to opportunities in clinical data science, health informatics, healthcare analytics, clinical AI and contract data/BI roles."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <a className="contact-card" href="mailto:Sobiaamjad9@gmail.com">
            <Mail size={22} />
            <span>
              <strong>Email</strong>
              Sobiaamjad9@gmail.com
            </span>
          </a>
          <div className="contact-card">
            <MapPin size={22} />
            <span>
              <strong>Location</strong>
              Melbourne, VIC, Australia
            </span>
          </div>
          <ExternalButton href={GOOGLE_SCHOLAR_URL} variant="ghost">
            Google Scholar <ExternalLink size={16} />
          </ExternalButton>
          <ExternalButton href={LINKEDIN_URL} variant="ghost">
            LinkedIn <ExternalLink size={16} />
          </ExternalButton>
        </div>
      </div>
    </section>
  )
}
