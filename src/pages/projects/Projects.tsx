import './Projects.css';
import IconSection from '../../components/iconSection/IconSection';

const projects = [
  {
    title: 'Looking Glass COVID-19 Tool',
    description: "Web app based on Queen's COVID-19 model. Contributed to backend logic and front-end interface.",
    tech: ['JavaScript', 'TypeScript', 'React', 'MongoDB'],
    link: 'https://covid19.distributed.computer/',
  },
  {
    title: 'Tick-borne Encephalitis Risk Estimation:',
    description: 'Tool that computes model parameters on DCP platform by fitting data to statistical models for tick-borne encephalitis risk assessment.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Webpack'],
  },
];

const openSource = [
  {
    name: 'KVIN',
    description: 'Update kvin to use prototype-based classes, preserved exports for backwards compatibility, and Unmarshal empty arrays as [] vs an empty object.',
    tech: ['JavaScript'],
    link: 'https://github.com/wesgarland/kvin',
  },
  {
    name: 'dcp-util',
    description: 'Implemented enhancements to some compute group utilities.',
    tech: ['JavaScript'],
    link: 'https://github.com/Distributed-Compute-Labs/dcp-worker',
  },
  {
    name: 'dcp-worker',
    description: 'Refine the TUI status pane for enhanced user experience, including dynamic updates, improved information display, and visual enhancements.',
    tech: ['JavaScript'],
    link: 'https://github.com/Distributed-Compute-Labs/dcp-worker',
  },
  {
    name: 'dcp-client',
    description: 'Implemented security fixes and refined worker configurations within dcp-client. Improved sandboxing with strict mode and optimized data handling.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/Distributed-Compute-Labs/dcp-client',
  },
  {
    name: 'dcp-web-example',
    description: 'Implemented a sample web application showing how to deploy a job using the Distributed Computer.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/Distributive-Network/dcp-web-example',
  },
];

function Projects() {
  return (
    <div className="prj-container">
      <div className="prj-text-column">
        <h2 className="section-title"> 💻 Projects</h2>
        <div className="projects-grid">
          {projects.map((proj) => (
            <div className="project-card" key={proj.title}>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="tech-tags">
                {proj.tech.map((tech) => (
                  <span className="tag" key={tech}>{tech}</span>
                ))}
              </div>
              {proj.link ? (
                <a href={proj.link} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              ) : (
                <span style={{ color: "#3498db" }}>private repository</span>
              )}
            </div>
          ))}
        </div>

        <h2 className="section-title"> 🌍 Open Source Contributions</h2>
        <div className="projects-grid">
          {openSource.map((os) => (
            <div className="project-card" key={os.name}>
              <h3>{os.name}</h3>
              <p>{os.description}</p>
              <div className="tech-tags">
                {os.tech.map((tech) => (
                  <span className="tag" key={tech}>{tech}</span>
                ))}
              </div>
              <a href={os.link} target="_blank" rel="noopener noreferrer">
                View Contribution
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="prj-icon-column">
        <IconSection />
      </div>
    </div>
  );
}

export default Projects;
