<template>
  <div>
    <h1>AComponents</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./styles/general.scss";

h1 {
  @apply text-3xl font-bold underline;
}
</style>
