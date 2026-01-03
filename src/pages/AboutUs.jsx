
import {
  FaUsers,
  FaBullseye,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";


const AboutUs = () => {
  
  return (
    <section className="about-colorful-section py-30">
      <div className="container">
        {/* Header */}
        <div className="about-header" data-aos="fade-up">
          <span className="badge">Who We Are</span>
          <h2 className="section-title">About Freelance Marketplace</h2>
          <p className="section-subtitle">
            A modern, colorful, and reliable platform where freelancers and
            clients connect to get meaningful work done.
          </p>
        </div>

        {/* Info Cards */}
        <div className="about-card-grid">
          <div className="about-card gradient-one" data-aos="fade-up">
            <FaUsers className="about-icon" />
            <h3>Our Platform</h3>
            <p>
              Freelance Marketplace enables users to post jobs, explore
              opportunities, and collaborate through a clean and intuitive
              system built for productivity.
            </p>
          </div>

          <div
            className="about-card gradient-two"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <FaBullseye className="about-icon" />
            <h3>Our Mission</h3>
            <p>
              To simplify freelancing by creating equal opportunities for
              skilled individuals while ensuring quality outcomes for clients.
            </p>
          </div>

          <div
            className="about-card gradient-three"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaShieldAlt className="about-icon" />
            <h3>Trust & Security</h3>
            <p>
              Secure authentication, protected routes, and controlled access
              ensure a safe and trustworthy experience for every user.
            </p>
          </div>

          <div
            className="about-card gradient-four"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FaRocket className="about-icon" />
            <h3>Future Ready</h3>
            <p>
              Built with modern technologies and scalable architecture to grow
              alongside the freelancing ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
