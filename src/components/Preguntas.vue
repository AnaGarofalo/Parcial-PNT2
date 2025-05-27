<template>
  <section class="card m-3 col-4">
    <div class="card-header">
      <h3>Respuestas</h3>
    </div>

    <div class="card-body">
      <p>Resultados:</p>

      <ul>
        <li>Pregunta 1: <b class="colored">C</b> (@click)</li>
        <li>
          Pregunta 2: <b class="colored">C</b> (Los espacios adelante y atrás en
          una entrada de texto)
        </li>
        <li>
          Pregunta 3: <b class="colored">A</b> (Definir el path y el componente
          activo para esa ruta)
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  name: "preguntas",
  //   props: [],
  //   data() {
  //     return {
  //     }
  //   },
  //   methods: {
  //   },
  //   computed: {

  //   }
};
</script>

<style scoped>
.card-header {
  background-color: darkcyan;
  color: white;
}

.colored {
  color: darkcyan;
}
</style>
