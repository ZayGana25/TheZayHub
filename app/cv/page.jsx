import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram } from "lucide-react"

export const metadata = {
  title: "CV",
  description: 
    "View my professional resume detailing my technical skills, education, and work experience.",
  keywords: ["cv", "resume", "Isaiah Lugo", "Isaiah Lugo CV", "Isaiah Lugo Resume"],
  alternates: {
    canonical: "/cv",
  },
  openGraph: {
    title: "CV | TheZayHub",
    description: 
      "View my professional resume detailing my technical skills, education, and work experience.",
    images: [
      {
        url: "https://www.thezayhub.com/metadata/og-image.png",  
        width: 1200,
        height: 630,
        alt: "CV | TheZayHub",
      },
    ],
  },
}

export default function CVPage() {
  const resume = {
    education: [
      {
        degree: "Bachelor of Science, Computer Science: Software Engineering",
        institution: "Bushnell University",
        location: "Eugene, OR",
        period: " August 2023 - May 2025",
        details: "Transferred in to complete degree. Completed a Minor in Mathematics.",
      },
      {
        degree: "Pre-requisites, Computer Science",
        institution: "Lane Community College",
        location: "Eugene, OR",
        period: "September 2022 - June 2023",
        details: "Completed remaining general education requirements and some pre-requisites towards computer science degree.",
      },
      {
        degree: "Bachelor of Science, Mechanical Engineering -> Computer Science",
        institution: "Saint Martin's University",
        location: "Lacey, WA",
        period: "August 2019 - May 2022",
        details: "Student-Athlete in the baseball program. Started as a Mechanical Engineering major before switching to Computer Science my last year before transferring.",
      },
      {
        degree: "High School Diploma, IHS Diploma",
        institution: "Henry D. Sheldon High School",
        location: "Eugene, OR",
        period: "September 2015 - June 2019",
        details: "2017 Sheldon Mathlete: 1st in individual testing and 2nd in team testing, Varsity Football, Varsity Baseball.",
      },
    ],
    experience: [
      {
        title: "Front-End Self-Checkout Clerk",
        company: "Safeway",
        location: "Eugene, OR",
        period: "March 2023 - Present",
        responsibilities: [
          "Assist customers with self-checkout machines and other store needs.",
          "Manage and maintain the flow of breaks between front-end employees.",
          "Assist in the training of new employees.",
          "Provide excellent customer service and ensure customer satisfaction.",
        ],
      },
      {
        title: "Cyber Security/NOC Intern",
        company: "IP Services",
        location: "Eugene, OR",
        period: "Spring 2025",
        responsibilities: [
          "First-hand experience with working and shadowing in a NOC environment.",
          "Gained knowledge of networking and security protocols.",  
          "Time management and prioritization of tasks and tickets submitted.",
          "Adaptability and problem solving skills to ensure customer satisfaction.",
        ],
      },
      {
        title: "Mechanical Engineer Intern",
        company: "Western Pneumatics Inc.",
        location: "Eugene, OR",
        period: "Summer 2020",
        responsibilities: [
          "Read and made measurements onto metal parts from blueprints",
          "Used heavy lifting equipment to move parts around the shop",
          "I was able to gain experience with preciseness and attention to detail",
          "Metal works: cutting, bending, angling, etc.",
        ],
      },
      {
        title: "Stock & Floor Associate",
        company: "Hollister Co.",
        location: "Eugene, OR",
        period: "Winter 2017",
        responsibilities: [
          "Assisted in stocking items and organizing the store",
          "Offered assistance to customers and answered questions",
          "Learned expereince in customer service and sales",
          "Greeted customers to provide a welcoming environment",
        ],
      },
    ],
    skills: {
      languages: [
        "JavaScript",
        "TypeScript",
        "Python",
        "C/C++/C#",
        "SQL",
        "HTML5",
        "CSS3",
      ],
      frameworks: [
        "React.js",
        "Next.js",
        "TailwindCSS",
        "Node.js",
      ],
      tools: [
        "GitHub",
        "Visual Studio Code",
        "Office 365",
      ],
      general: [
        "Critical Thinking",
        "Leadership",
        "Adaptability",
        "Time Management",
        "Achiever",
      ]
    },
     

     
    act_accomp: [
      "Relay for Life Volunteer – Assisted in fundraising efforts for cancer research.",
      "CAS Community Service (60 Hours) – Participated in various local service activities.",
      "Collegiate Athlete (SMU Baseball) – Developed leadership and teamwork skills in a competitive environment.",
      "SFTE Club – Member of the Bushnell University Software Engineering Club."
    ],
  }

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Curriculum Vitae</h1>
        <p className="text-xl text-muted-foreground">Professional experience and qualifications</p>
        <div className="flex flex-col items-center gap-4">
          <Button
            className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
            asChild
          >
            <a href="/resume/resume_lugo.docx" download="Isaiah_Lugo_Resume.docx">
              Download CV
            </a>
          </Button>

          <div className="flex gap-4 mt-2">
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://github.com/ZayGana25"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://linkedin.com/in/isaiah-lugo-22a933326/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            {/* <Button variant="outline" size="icon" asChild>
              <a
                href="https://instagram.com/isaiahlugo25"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </Button> */}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
          <span>Education</span>
        </h2>
        <div className="space-y-6">
          {resume.education.map((edu, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between flex-wrap">
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <span className="text-muted-foreground">{edu.period}</span>
              </div>
              <p className="font-medium">
                {edu.institution}, {edu.location}
              </p>
              <p className="text-muted-foreground">{edu.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
          <span>Experience</span>
        </h2>
        <div className="space-y-8">
          {resume.experience.map((exp, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between flex-wrap">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <span className="text-muted-foreground">{exp.period}</span>
              </div>
              <p className="font-medium">
                {exp.company}, {exp.location}
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
          <span>Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Languages */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-primary">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {resume.skills.languages.map((skill, index) => (
                <span key={index} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-primary">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-2">
              {resume.skills.frameworks.map((skill, index) => (
                <span key={index} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-primary">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {resume.skills.tools.map((skill, index) => (
                <span key={index} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* General Skills */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-primary">General Skills</h3>
            <div className="flex flex-wrap gap-2">
              {resume.skills.general.map((skill, index) => (
                <span key={index} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
          <span>Activities and Accomplishments</span>
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          {resume.act_accomp.map((cert, index) => (
            <li key={index} className="text-lg">
              {cert}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

