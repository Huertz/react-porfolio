import '../App.css';
import project1 from '../media/project1.png';
import project2 from '../media/project2.png';
import password from '../media/passwordgen.png';

export default function Projects() {
  return (
    <section class="projects" id="projects">
      <h2 class="projects-title">Projects</h2>
      <div class="projects-container">
        <div class="project-container project-card">
          <img
            id="pro1"
            src={project1}
            alt="picture of a website"
            loading="lazy"
            class="project-pic"
          />
          <h3 class="project-title">Match Makers</h3>
          <p class="project-details">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            ratione vel inventore labore commodi modi quos culpa aut saepe!
            Alias!
          </p>
          <a
            href="https://huertz.github.io/TheMatchmakersWebsite/"
            target="_blank"
            class="project-link"
          >
            Link Website
          </a>
        </div>
        <div class="project-container project-card">
          <img
            src={project2}
            alt="picture of a website"
            loading="lazy"
            class="project-pic"
          />

          <h3 class="project-title">Job Board</h3>
          <p class="project-details">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            ratione vel inventore labore commodi modi quos culpa aut saepe!
            Alias!
          </p>
          <a href={project2} target="_blank" class="project-link">
            Website Link
          </a>
        </div>
        <div class="project-container project-card">
          <img
            src={password}
            alt="website picture"
            loading="lazy"
            class="project-pic"
          />
          <h3 class="project-title">Password Generator</h3>
          <p class="project-details">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            ratione vel inventore labore commodi modi quos culpa aut saepe!
            Alias!
          </p>
          <a
            href="https://huertz.github.io/password-generator/"
            target="_blank"
            class="project-link"
          >
            Website Link
          </a>
        </div>
      </div>
    </section>
  );
}
