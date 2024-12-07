<template>
  <div id="app">
    <header>
      <nav>
        <h1>Meu Formulário com Nuxt</h1>
      </nav>
    </header>

    <main>
      <NuxtPage />
    </main>

    <footer>
      <p>&copy; 2024 Meu Projeto. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #007bff;
  color: white;
  padding: 15px;
  text-align: center;
}

main {
  padding: 20px;
}

footer {
  text-align: center;
  background-color: #f8f9fa;
  padding: 10px 0;
  border-top: 1px solid #ddd;
  margin-top: 20px;
}
</style>
