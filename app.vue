<template>
  <div>
    <p>{{count}}</p>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="reset">reset</button>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from "~/store";

const counterStore = useCounterStore();

const count = counterStore.getCount()
const increment = counterStore.increment;
const decrement = counterStore.decrement;
const reset = counterStore.reset;

</script>
