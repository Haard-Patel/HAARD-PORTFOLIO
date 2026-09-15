import "./About.css";

const locations = [
  {
    country: "India",
    city: "Ahmedabad",
    coordinates: "23°N · 72°E",
    image: "/images/ahmedabad.jpeg",
    alt: "Ahmedabad, India",
  },
  {
    country: "Canada",
    city: "Saskatoon",
    coordinates: "52°N · 106°W",
    image: "/images/saskatoon.jpeg",
    alt: "Haard skating in Saskatoon, Canada",
  },
  {
    country: "Canada",
    city: "Saskatoon",
    coordinates: "52°N · 106°W",
    image: null,
    alt: "",
  },
];

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-heading">
          <div className="about-label">
            <span>01</span>
            <span>About</span>
          </div>

          <div className="about-route">
            <div className="about-route-location">
              <span className="about-route-country">
                INDIA
              </span>

              <span className="about-route-city">
                Ahmedabad
              </span>

              <span className="about-route-coordinates">
                23°N · 72°E
              </span>
            </div>

            <div className="about-route-path">
              <span className="about-route-line" />

              <span
                className="about-plane"
                aria-hidden="true"
              >
                ✈
              </span>

              <span className="about-route-line" />
            </div>

            <div className="about-route-location canada">
              <span className="about-route-country">
                CANADA
              </span>

              <span className="about-route-city">
                Saskatoon
              </span>

              <span className="about-route-coordinates">
                52°N · 106°W
              </span>
            </div>
          </div>
        </div>

        <div className="about-gallery">
          {locations.map((location, index) => (
            <figure
              className="about-photo"
              key={`${location.city}-${index}`}
            >
              <div
                className={`about-image ${
                  !location.image
                    ? "about-image-placeholder"
                    : ""
                }`}
              >
                <span className="about-photo-number">
                  0{index + 1}
                </span>

                {location.image ? (
                  <img
                    src={location.image}
                    alt={location.alt}
                    loading={
                      index === 0 ? "eager" : "lazy"
                    }
                  />
                ) : (
                  <div className="about-coming-soon">
                    <span>THIRD PHOTO</span>
                    <span>COMING SOON</span>
                    <span className="about-coming-line" />
                  </div>
                )}
              </div>

              <figcaption className="about-photo-caption">
                <div>
                  <span className="about-photo-city">
                    {location.city}
                  </span>

                  <span className="about-photo-country">
                    {location.country}
                  </span>
                </div>

                <span className="about-photo-coordinates">
                  {location.coordinates}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="about-copy">
          <div className="about-copy-primary">
            <p>
              I'm a{" "}
              <strong>
                Computer Science Honours graduate
              </strong>{" "}
              from the University of Saskatchewan, with a
              strong interest in{" "}
              <strong>
                software development, mathematics,
                statistics
              </strong>
              , and solving practical problems with
              technology.
            </p>

            <p>
              I'm particularly interested in the
              intersection of{" "}
              <strong>software and AI</strong>. I enjoy
              building{" "}
              <strong>full-stack applications</strong>,
              working with APIs and databases, analyzing
              data, and understanding how systems work from
              both a{" "}
              <strong>
                technical and analytical perspective
              </strong>
              .
            </p>
          </div>

          <div className="about-copy-secondary">
            <p>
              Mathematics and statistics are another
              important part of how I approach problems. I
              enjoy{" "}
              <strong>finding patterns</strong>, breaking
              complex problems down, and using{" "}
              <strong>
                data to make better decisions
              </strong>
              .
            </p>

            <p>
              My journey has taken me from{" "}
              <strong>
                Ahmedabad, India to Saskatoon, Canada
              </strong>
              . Moving across countries taught me to{" "}
              <strong>adapt quickly</strong>, become more
              independent, and stay comfortable learning in
              unfamiliar situations.
            </p>

            <p>
              I'm always{" "}
              <strong>
                learning, experimenting, and looking for
                something new to build
              </strong>
              . That curiosity is what keeps me interested
              in technology.
            </p>

            <p>
              I'm a believer that{" "}
              <strong>music connects people</strong>, which
              is what makes me love it. I like to stay active
              and enjoy{" "}
              <strong>
                sports, fitness, and outdoor adventures
              </strong>
              . Reading keeps my brain sharp and helps me{" "}
              <strong>learn new things</strong>.
            </p>
          </div>
        </div>

        <div className="about-focus">
          <span>SOFTWARE</span>
          <span>DATA</span>
          <span>AI</span>
          <span>MATHEMATICS</span>
          <span>STATISTICS</span>
        </div>
      </div>
    </section>
  );
}

export default About;