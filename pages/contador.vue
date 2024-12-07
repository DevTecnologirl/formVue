<template>
  <div>
    <p>CONTADOR: {{ count }}</p>
    <button @click="increment">Incrementar</button>
    <button @click="decrement">Decrementar</button>
  </div>
</template>

<script setup>
import useCounter from '~/composables/useCounter';
const { count, increment, decrement } = useCounter();
</script>
