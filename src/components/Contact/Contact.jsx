import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import "./Contact.css";

const contactLinks = [
  {
    label: "GITHUB",
    value: "HaardPatel",
    href: "https://github.com/HaardPatel",
  },
  {
    label: "LINKEDIN",
    value: "haard-patel2010",
    href: "https://www.linkedin.com/in/haard-patel2010/",
  },
  {
    label: "EMAIL",
    value: "haardp9@gmail.com",
    href: "mailto:haardp9@gmail.com",
  },
  {
    label: "RÉSUMÉ",
    value: "PDF",
    href: "https://acrobat.adobe.com/id/urn:aaid:sc:ap:2e2a7792-15d9-4b96-81bc-7498cf67c744",
  },
];

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("haardp9@gmail.com");

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      window.location.href = "mailto:haardp9@gmail.com";
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <div className="contact-topline">
          <span>04 / CONTACT</span>
          <span>OPEN TO OPPORTUNITIES</span>
        </div>

        <div className="contact-grid">

          <div className="contact-main">
            <h2>
              Say <em>hello.</em>
            </h2>

            <p className="contact-description">
              Open to conversations about{" "}
              <strong>software, data, and technology</strong>.
              If you are building something interesting,
              solving a difficult problem, or looking for
              someone curious enough to learn with you,
              I&apos;d like to hear about it.
            </p>

            <div className="contact-email-block">
              <span className="contact-small-label">
                WRITE TO ME
              </span>

              <div className="contact-email-row">
                <a
                  href="mailto:haardp9@gmail.com"
                  className="contact-email"
                >
                  haardp9@gmail.com
                </a>

                <button
                  type="button"
                  className="contact-copy"
                  onClick={copyEmail}
                  aria-label={
                    copied
                      ? "Email copied"
                      : "Copy email address"
                  }
                >
                  {copied ? (
                    <>
                      <Check
                        size={12}
                        strokeWidth={1.8}
                      />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy
                        size={12}
                        strokeWidth={1.5}
                      />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="contact-side">

            <div className="contact-side-heading">
              ELSEWHERE
            </div>

            <div className="contact-links">

              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noreferrer"
                  }
                  className="contact-link"
                >
                  <span className="contact-link-label">
                    {link.label}
                  </span>

                  <span className="contact-link-value">
                    {link.value}

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.4}
                    />
                  </span>
                </a>
              ))}

            </div>
          </div>

        </div>

        <div className="contact-social-row">

          <a
            href="https://github.com/HaardPatel"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <span>GH</span>
          </a>

          <a
            href="https://www.linkedin.com/in/haard-patel2010/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <span>in</span>
          </a>

          <a
            href="mailto:haardp9@gmail.com"
            aria-label="Email"
          >
            <span>@</span>
          </a>

        </div>

        <div className="contact-end">

          <div className="contact-end-line" />

          <div className="contact-end-content">

            <div className="contact-end-copy">

              <p>
                End of page. Not the end of{" "}
                <span className="contact-handwritten">
                  work.
                </span>
              </p>

              <p className="contact-end-secondary">
                <span>More ideas.</span>{" "}
                <span>More experiments.</span>{" "}
                <strong>More to come.</strong>
              </p>

            </div>

            <span className="contact-end-index">
              04 / END
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;