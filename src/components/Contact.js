export default function Contact() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 vertical-center">
      <div class="container justify-center">
        <a href="#" class="navbar-brand">
          Contact
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
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                href="mailto:alfredo_huerta95@yahoo.com?subject = Feedback&body = Message"
                target="_blank"
                class="nav-link"
              >
                Email
              </a>
            </li>
            <li class="nav-item">
              <a href="tel: 123-456 7890" target="_blank" class="nav-link">
                Phone
              </a>
            </li>
            <li class="nav-item">
              <a
                href="https://www.instagram.com/alfredo.huerta/"
                class="nav-link"
                target="_blank"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
