import "./About.css";

const locations = [
  {
    country: "India",
    city: "Ahmedabad",
    coordinates: "23°N · 72°E",
    imageClass: "about-image-placeholder ahmedabad",
  },
  {
    country: "Canada",
    city: "Saskatoon",
    coordinates: "52°N · 106°W",
    imageClass: "about-image-placeholder saskatoon-one",
  },
  {
    country: "Canada",
    city: "Saskatoon",
    coordinates: "52°N · 106°W",
    imageClass: "about-image-placeholder saskatoon-two",
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
              <div className={location.imageClass}>
                <span className="about-photo-number">
                  0{index + 1}
                </span>

                <span className="about-photo-placeholder">
                  Photo
                </span>
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
          <p>
            I&apos;m a Computer Science Honours graduate from
            the University of Saskatchewan, with a strong
            interest in software development, mathematics,
            statistics, and solving practical problems with
            technology.
          </p>

          <p>
            My journey has taken me from Ahmedabad, India to
            Saskatoon, Canada. Moving across countries taught
            me to adapt quickly, become more independent, and
            stay comfortable learning in unfamiliar situations.
            I&apos;m always learning, experimenting, and looking
            for something new to build. That curiosity is what
            keeps me interested in technology.
          </p>

          <p>
            I&apos;m particularly interested in the intersection
            of software, data, and AI. I enjoy building
            full-stack applications, working with APIs and
            databases, analyzing data, and understanding how
            systems work from both a technical and analytical
            perspective.
            Mathematics and statistics are another important
            part of how I approach problems. I enjoy finding
            patterns, breaking complex problems down, and using
            data to make better decisions.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;