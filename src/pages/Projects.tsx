import './Projects.css'; // Create this CSS file

const Projects: React.FC = () => {
  return (
    <div className="stack-container">
      <div className="icon-circle">
        <i className="ci ci-react ci-3x"></i>
        <i className="ci ci-nodejs ci-3x"></i>
        <i className="ci ci-express ci-3x"></i>
        <i className="ci ci-mysql ci-3x"></i>
        <i className="ci ci-typescript ci-3x"></i>
        <i className="ci ci-javascript ci-3x"></i>
      </div>
    </div>
  );
};

export default Projects;