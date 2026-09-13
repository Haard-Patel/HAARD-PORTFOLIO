import { ArrowUpRight, Play } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    number: "01",
    year: "2026 — Present",
    title: "E-Commerce Analytics",
    subtitle: "& Intelligence Platform",
    description:
      "A full-stack analytics platform focused on transforming e-commerce data into interactive business intelligence, analytical dashboards, and data-driven insights.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "Data Analytics",
      "BI",
      "AI / ML",
      "REST APIs",
      "MongoDB",
    ],
    status: "Currently building",
    type: "Full Stack · Data · AI",
    statusType: "building",
  },

  {
    number: "02",
    year: "2026",
    title: "IT Service Management",
    subtitle: "& Analytics Platform",
    description:
      "A full-stack enterprise IT service management platform for managing incidents, service requests, users, ticket workflows, SLA tracking, and operational analytics.",
    tags: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "Git",
    ],
    status: "Completed · Live",
    type: "Full Stack · ITSM",
    statusType: "completed",
    liveUrl:
      "https://it-service-management-platform-k8zz.vercel.app/",
    githubUrl:
      "https://github.com/Hhaard/it-service-management-platform",
    credentials: true,
  },

  {
    number: "03",
    year: "2025",
    title: "NutriTracker",
    subtitle: "AI-Assisted Nutrition Platform",
    description:
      "A nutrition and wellness application developed as a university software engineering project, combining meal tracking, reminders, personalized planning, and an AI-powered assistant.",
    tags: [
      "React",
      "JavaScript",
      "Express.js",
      "MongoDB",
      "Flask",
      "TensorFlow",
      "Twilio",
      "Docker",
    ],
    status: "Completed",
    type: "Full Stack · AI",
    statusType: "completed",
    demoUrl:
      "https://drive.google.com/file/d/18GCkzgmugOWIGWzA-EJCYOhHlCrEWNNp/view?usp=drivesdk",
  },

  {
    number: "04",
    year: "2024",
    title: "Pet Management",
    subtitle: "System",
    description:
      "An object-oriented pet management application designed to manage customer, pet, service, appointment, and record information with file-based data persistence and structured service workflows.",
    tags: [
      "Java",
      "OOP",
      "File I/O",
      "Data Management",
      "Record Management",
      "Scheduling",
      "Testing",
    ],
    status: "Completed",
    type: "Software · Java",
    statusType: "completed",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        <div className="projects-heading">
          <div className="projects-label">
            <span>01</span>
            <span>Selected Work</span>
          </div>

          <div className="projects-heading-content">
            <p className="projects-eyebrow">
              Software · Data · AI
            </p>

            <h2>
              Things I&apos;ve
              <br />
              been building<span>.</span>
            </h2>
          </div>
        </div>

        <div className="projects-list">

          {projects.map((project) => (
            <article
              className="project-item"
              key={project.number}
            >

              <div className="project-index">
                <span>{project.number}</span>
              </div>

              <div className="project-main">

                <div className="project-topline">
                  <span>{project.type}</span>
                  <span>{project.year}</span>
                </div>

                <div className="project-title-row">

                  <h3>
                    {project.title}
                    <br />
                    <span>{project.subtitle}</span>
                  </h3>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-arrow"
                      aria-label={`Open ${project.title}`}
                    >
                      <ArrowUpRight
                        size={22}
                        strokeWidth={1.5}
                      />
                    </a>
                  ) : project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-arrow"
                      aria-label={`Watch ${project.title} demo`}
                    >
                      <Play
                        size={19}
                        strokeWidth={1.5}
                      />
                    </a>
                  ) : (
                    <div
                      className="project-arrow project-arrow-static"
                      aria-hidden="true"
                    >
                      <ArrowUpRight
                        size={22}
                        strokeWidth={1.5}
                      />
                    </div>
                  )}

                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-bottom">

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span
                    className={`project-status ${project.statusType}`}
                  >
                    <span className="status-dot" />
                    {project.status}
                  </span>

                </div>

                {project.liveUrl && (
                  <div className="project-links">

                    <div className="project-primary-links">

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Web App
                        <ArrowUpRight
                          size={13}
                          strokeWidth={1.7}
                        />
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                        <ArrowUpRight
                          size={13}
                          strokeWidth={1.7}
                        />
                      </a>

                    </div>

                    {project.credentials && (
                      <div className="project-demo-login">

                        <span>
                          Demo Login
                        </span>

                        <span>
                          <strong>
                            Username
                          </strong>
                          haard@gmail.com
                        </span>

                        <span>
                          <strong>
                            Password
                          </strong>
                          haard123
                        </span>

                      </div>
                    )}

                  </div>
                )}

                {project.demoUrl && (
                  <div className="project-links">

                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch Demo
                      <Play
                        size={12}
                        strokeWidth={1.7}
                      />
                    </a>

                  </div>
                )}

              </div>

            </article>
          ))}

        </div>

        <div className="projects-footer">
          <span>
            More work coming soon
          </span>

          <span className="projects-footer-line" />
        </div>

      </div>
    </section>
  );
}

export default Projects;