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
    label: "INSTAGRAM",
    value: "haard20_",
    href: "https://www.instagram.com/haard20_/",
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
              <strong>turn what I’ve learned into real-world experience.</strong>.
              open to opportunities across software, data, and technology, 
              and always interested in meeting people, exchanging ideas, 
              and learning from the work others are doing. 
              If you’re building something, solving a problem, or simply want to connect, 
              <em>let’s talk.</em>
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
                      <Check size={12} strokeWidth={1.8} />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} strokeWidth={1.5} />
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
            href="https://github.com/Haard-Patel"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
          </a>

          <a
            href="https://www.linkedin.com/in/haard-patel2010/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
          </a>

          <a
            href="https://www.instagram.com/haard20_/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
          </a>

          <a
            href="mailto:haardp9@gmail.com"
            aria-label="Email"
          >
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