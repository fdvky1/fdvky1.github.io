<template>
    <nav class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 text-neutral-400">
        <div class="w-full sm:max-w-[15dvw] flex justify-between sm:justify-start items-center">
            <nuxt-link to="/">
                <h1 class="text-2xl" style="font-weight: 500;">Fdvky</h1>
            </nuxt-link>
            <button @click="navOpen = !navOpen" class="w-14 flex justify-end sm:hidden">
                <svg v-if="navOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(243,250,250,1)"><path d="M12 16L6 10H18L12 16Z"></path></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(243,250,250,1)"><path d="M16 12L10 18V6L16 12Z"></path></svg>
            </button>
        </div>
        <div class="flex-col gap-1 sm:flex-row sm:items-center sm:gap-3 absolute h-[calc(100dvh-5rem)] w-[calc(100vw-1.5rem)] bg-neutral-950 bg-opacity-90 sm:relative sm:bg-transparent sm:w-auto sm:h-auto z-[702] px-4 -mx-4 mt-10 pt-4 sm:pt-0 sm:mt-0 sm:-mx-0 sm:p-0" :class="navOpen ? 'flex' : 'hidden sm:flex'">
            <nuxt-link to="/" class="text-2xl" :class="$router.currentRoute.value.path == '/' ? 'text-white' : ''" v-on:click.native="navOpen = false">_home</nuxt-link>
            <nuxt-link to="/about" class="text-2xl" :class="$router.currentRoute.value.path == '/about' ? 'text-white' : ''" v-on:click.native="navOpen = false">_about</nuxt-link>
            <nuxt-link to="/projects" class="text-2xl" :class="$router.currentRoute.value.path == '/projects' ? 'text-white' : ''" v-on:click.native="navOpen = false">_projects</nuxt-link>
            <nuxt-link to="/contacts" class="text-2xl" :class="$router.currentRoute.value.path == '/contacts' ? 'text-white' : ''" v-on:click.native="navOpen = false">_contacts</nuxt-link>
        </div>

    </nav>
</template>

<script setup lang="ts">
const navOpen = ref(false);

</script>