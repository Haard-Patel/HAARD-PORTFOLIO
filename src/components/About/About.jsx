import "./About.css";

const locations = [
  {
    country: "India",
    city: "FIG.01/ Varanasi",
    coordinates: "29°N · 78°E",
    image: "/images/ahm.jpeg",
    alt: "Ganga Ghat, India",
  },
  {
    country: "Canada",
    city: "FIG.02/ Saskatoon",
    coordinates: "52°N · 106°W",
    image: "/images/sask.jpeg",
    alt: "Haard skating in Saskatoon, Canada",
  },
  {
    country: "Canada",
    city: "FIG.03/ Toronto",
    coordinates: "52°N · 79°W",
    image: "images/toronto.jpeg",
    alt: "",
  },
];

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* SECTION HEADING */}
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

        {/* PHOTO GALLERY */}
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
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                ) : (
                  <div className="about-coming-soon">
                    <span>
                      THIRD PHOTO
                    </span>

                    <span>
                      COMING SOON
                    </span>

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

        {/* ABOUT COPY */}
        <div className="about-copy">
          <div className="about-copy-primary">
            <p>
              I&apos;m a Computer Science Honour Graduate from
              the University of Saskatchewan, with a strong
              interest in software development, mathematics,
              statistics, and solving practical problems with
              technology.
            </p>

            <p>
              I&apos;m particularly interested in the intersection
              of software and AI. I enjoy building
              full-stack applications, working with APIs and
              databases, analyzing data, and understanding how
              systems work from both a technical and analytical
              perspective.
            </p>

            <p>
              Mathematics and statistics are another important
              part of how I approach problems. I enjoy finding
              patterns, breaking complex problems down, and using
              data to make better decisions.
            </p>

            
          </div>

          <div className="about-copy-secondary">

          <p>
              My journey has taken me from Ahmedabad, India to
              Saskatoon, Canada. Moving across countries taught
              me to adapt quickly, become more independent, and
              stay comfortable learning in unfamiliar situations.
            </p>
            
            <p>
              I&apos;m always learning, experimenting, and looking
              for something new to build. That curiosity is what
              keeps me interested in technology.
            </p>

            <p>
              I&apos;m a believer of Music connects people that makes me love music. 
              I like to stay active and enjoy sports, fitness, and outdoor adventures.
              Reading keeps my brain sharp and helps me learn new things.
            </p>
          </div>
        </div>

        {/* FOCUS TAGS */}
        <div className="about-focus">
          <span>MUSIC</span>
          <span>FITNESS</span>
          <span>MATHEMATICS</span>
          <span>READING</span>
          <span>ADVENTURE</span>
          <span>SPORTS</span>
        </div>

      </div>
    </section>
  );
}

export default About;