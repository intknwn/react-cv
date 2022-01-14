import { useState, useEffect } from "react";

const App = () => {
  const [projects, setProjects] = useState([]);

  async function getProjects() {
    const res = await fetch("/api/projects");
    const json = await res.json();

    setProjects(json.projects);
  }

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      {
        projects.map((project) => {
          return (
            <div key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {
                  project.features.map((feature, index) => <li key={index}>{feature}</li>)
                }
              </ul>
            </div>
          );
        })
      }
    </>
  );
};

export default App;