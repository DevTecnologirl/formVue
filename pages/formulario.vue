<template>
  <div class="container">
    <h1>Formulário de Cadastro</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Nome:</label>
        <input id="name" v-model="form.name" type="text" placeholder="Digite seu nome"
          :class="{ 'is-invalid': errors.name }" />
        <span v-if="errors.name" class="error">{{ errors.name }}</span>
      </div>

      <div class="form-group">
        <label for="email">E-mail:</label>
        <input id="email" v-model="form.email" type="email" placeholder="Digite seu e-mail"
          :class="{ 'is-invalid': errors.email }" />
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </div>

      <div class="form-group">
        <label for="password">Senha:</label>
        <input id="password" v-model="form.password" type="password" placeholder="Digite sua senha"
          :class="{ 'is-invalid': errors.password }" />
        <span v-if="errors.password" class="error">{{ errors.password }}</span>
      </div>

      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

definePageMeta({
  middleware: 'auth',
});

const form = ref({
  name: '',
  email: '',
  password: '',
});

const errors = ref({});

const validate = () => {
  errors.value = {};

  if (!form.value.name) {
    errors.value.name = 'O nome é obrigatório.';
  }

  if (!form.value.email) {
    errors.value.email = 'O e-mail é obrigatório.';
  } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
    errors.value.email = 'O e-mail é inválido.';
  }

  if (!form.value.password) {
    errors.value.password = 'A senha é obrigatória.';
  } else if (form.value.password.length < 6) {
    errors.value.password = 'A senha deve ter pelo menos 6 caracteres.';
  }

  return Object.keys(errors.value).length === 0;
};

const handleSubmit = () => {
  if (validate()) {
    alert('Formulário enviado com sucesso!');
    console.log(form.value); // Aqui você pode integrar com uma API
    form.value = { name: '', email: '', password: '' }; // Reset do formulário
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input.is-invalid {
  border-color: red;
}

.error {
  color: red;
  font-size: 0.9em;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>