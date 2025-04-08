import './Projects.css'
import IconSection from '../../components/iconSection/IconSection';


function Projects() {
  return (
    <div className="abt-container">
      <div className="abt-text-column">
        <p>
          I'm a Software Developer with a strong foundation in Mathematics, based in Kingston, ON, Canada. Over the years, I've had the privilege of working on a wide variety of projects, from developing scalable web applications to designing innovative software solutions that drive technical excellence.
        </p>
        
      </div>
      <div className="abt-image-column">
        <IconSection />
      </div>
    </div>
  );
}


export default Projects