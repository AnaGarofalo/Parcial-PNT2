<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-2">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">Bienvenidos!</RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/parcial">Parcial</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/preguntas">Preguntas</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style scoped></style>
