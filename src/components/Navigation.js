import '../App.css';

export default function Navigation() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3">
      <div class="container">
        <a href="#" class="navbar-brand">
          Porfolio
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navmenu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a
                href="https://github.com/Huertz"
                target="_blank"
                class="nav-link"
              >
                GitHub
              </a>
            </li>
            <li class="nav-item">
              <a
                href="https://www.linkedin.com/in/jose-alfredo-huerta-595582232/"
                target="_blank"
                class="nav-link"
              >
                LinkIn
              </a>
            </li>
            <li class="nav-item">
              <a href="#instructors" class="nav-link">
                Projectecs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
