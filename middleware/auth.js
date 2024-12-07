export default defineNuxtRouteMiddleware((to, from) => {
    const isAuthenticated = useCookie('auth'); 
    
    if (!isAuthenticated.value) {
      return navigateTo('/login');
    }
  });
  