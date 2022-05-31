<div class="contenedor">
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg_institucional1">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="<?php echo base_url(); ?>assets/img/logo/logo2.png" width="70">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link {{ activeHome }}" aria-current="page" routerLink="">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{ activeDirector }}" routerLink="/director">Director</a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{  activeAcerca }}" routerLink="/acerca">Acerca de nosotros</a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{  activeProgramas }}" routerLink="/programas">Programas</a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{  activeAmigos }}" routerLink="/amigos">Amigos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{  activeCalendario }}" routerLink="/calendario">Calendario</a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{  activeContacto}}" routerLink="/contacto">Contacto</a>
            </li>
            </ul>
            <span class="navbar-text">
            <button class="btn btn-outline-light" routerLink="/login">Login</button>
            </span>
        </div>
        </div>
    </nav>
</div>