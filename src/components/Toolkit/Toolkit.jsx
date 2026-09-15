import "./Toolkit.css";

const toolkitColumns = [
  {
    number: "01",
    title: "Languages",
    description: "The fundamentals I reach for.",
    items: [
      "Python",
      "Java",
      "JavaScript",
      "C++",
      "SQL",
      "HTML / CSS",
    ],
  },
  {
    number: "02",
    title: "Build",
    description: "Interfaces, services, and APIs.",
    items: [
      "React.js",
      "Node.js",
      "Express.js",
      "Flask",
      "REST APIs",
      "JWT",
      "Responsive UI",
    ],
  },
  {
    number: "03",
    title: "Data & AI",
    description: "Turning information into insight.",
    items: [
      "MongoDB",
      "MySQL",
      "TensorFlow",
      "Data Analytics",
      "Data Management",
      "API Integration",
    ],
  },
  {
    number: "04",
    title: "Systems & Tools",
    description: "Shipping, debugging, and collaborating.",
    items: [
      "Git / GitLab",
      "Docker",
      "CI/CD",
      "Linux",
      "TCP/IP",
      "Jira",
      "Agile / Scrum",
    ],
  },
];

const additionalSkills = [
  "Incident Management",
  "Technical Documentation",
  "ITIL",
  "SDLC",
  "Network Troubleshooting",
  "Microsoft 365",
];

function Toolkit() {
  return (
    <section id="skills" className="toolkit-section">
      <div className="toolkit-container">
        <div className="toolkit-heading">
          <div className="toolkit-label">
            <span>03</span>
            <span>Toolkit</span>
          </div>

          <div className="toolkit-intro">
            <p className="toolkit-eyebrow">
              HOW I WORK
            </p>

            <h2>
              I build with{" "}
              <strong className="toolkit-accent">software</strong>,
              think through{" "}
              <strong className="toolkit-violet">data</strong>,
              and keep making{" "}
              <em>things work better.</em>
            </h2>
          </div>
        </div>

        <div className="toolkit-grid">
          {toolkitColumns.map((column) => (
            <article className="toolkit-column" key={column.number}>
              <div className="toolkit-column-top">
                <span className="toolkit-number">
                  {column.number}
                </span>

                <span className="toolkit-column-line" />
              </div>

              <h3>{column.title}</h3>

              <p className="toolkit-column-description">
                {column.description}
              </p>

              <ul>
                {column.items.map((item, index) => (
                  <li key={item}>
                    <span className="toolkit-item-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="toolkit-item-name">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="toolkit-additional">
          <div className="toolkit-additional-label">
            <span>ALSO IN THE TOOLBOX</span>
            <span className="toolkit-additional-line" />
          </div>

          <div className="toolkit-additional-list">
            {additionalSkills.map((skill, index) => (
              <span key={skill}>
                {skill}
                {index < additionalSkills.length - 1 && (
                  <b> · </b>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Toolkit;