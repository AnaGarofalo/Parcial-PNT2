<template>
  <section class="card m-3 col-4">
    <div class="card-header">
      <h3>Ingrese sus datos</h3>
    </div>

    <div class="card-body">
      <label for="nombre">Ingrese su frase:</label>
      <input
        id="nombre"
        type="text"
        class="form-control"
        v-model="fraseOriginal"
        placeholder="Hola Mundo!"
      />
    </div>

    <p class="mx-3">
      Cantidad de caracteres: <b class="colored">{{ cantidadCaracteres }}</b>
    </p>

    <hr class="m-0" />

    <div class="card-body">
      <p>Resultados:</p>

      <ol>
        <li>{{ codificarTexto(fraseOriginal) }} (codificado)</li>
        <li>{{ fraseOriginal.toUpperCase() }} (mayúscula)</li>
        <li>{{ fraseOriginal.toLowerCase() }} (minúscula)</li>
        <li>
          {{ intercalarMayusculasYMinusculas(fraseOriginal, true) }} (mayúscula
          / minúscula)
        </li>
        <li>
          {{ intercalarMayusculasYMinusculas(fraseOriginal, false) }} (minúscula
          / mayúscula)
        </li>
      </ol>
    </div>
  </section>
</template>

<script>
export default {
  name: "parcial",
  props: [],
  mounted() {},
  data() {
    return {
      fraseOriginal: "",
      clavesCodificacion: {
        a: "u",
        e: "o",
        o: "e",
        u: "a",
      },
    };
  },
  methods: {
    intercalarMayusculasYMinusculas(texto, empezarPorMayuscula) {
      return texto
        .split("")
        .map((letra, indice) => {
          if (indice % 2 === 0) {
            return empezarPorMayuscula
              ? letra.toUpperCase()
              : letra.toLowerCase();
          } else {
            return empezarPorMayuscula
              ? letra.toLowerCase()
              : letra.toUpperCase();
          }
        })
        .join("");
    },
    codificarTexto(texto) {
      return texto
        .toLowerCase()
        .split("")
        .map((letra) =>
          letra in this.clavesCodificacion
            ? this.clavesCodificacion[letra]
            : letra
        )
        .join("");
    },
  },
  computed: {
    cantidadCaracteres() {
      return this.fraseOriginal.length;
    },
  },
};
</script>

<style scoped>
.card-header {
  background-color: darkmagenta;
  color: white;
}

.colored {
  color: darkmagenta;
}
</style>
