let nav = document.querySelector('nav');

nav.classList.add('navbar', 'navbar-expand-md', 'navbar-dark', 'bg-dark', 'sticky-top');
nav.innerHTML = `
                <div class="container">
                <a class="navbar-brand text-warning" href="./index.html"><i class="bi bi-house-door me-1"></i>Kisvárosi autószerviz</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-warning" aria-current="page" href="./services.html"><i class="bi bi-tools me-1"></i>Szolgáltatások</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-warning" href="./about_us.html"><i class="bi bi-info-circle me-1"></i>Bemutatkozás</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-warning" href="./contact.html"><i class="bi bi-send me-1"></i>Kapcsolat</a>
                        </li>
                    </ul>
                </div>
                </div>
                `;