<template>
    <nav class="flex items-center text-neutral-400">
        <nuxt-link to="/">
            <h1 class="text-2xl" style="font-weight: 500;">Fdvky</h1>
        </nuxt-link>
        <div class="hidden sm:flex items-center gap-3 ml-[10dvw]">
            <nuxt-link to="/" class="text-2xl">_home</nuxt-link>
            <nuxt-link to="/about" class="text-2xl">_about</nuxt-link>
            <nuxt-link to="/projects" class="text-2xl">_projects</nuxt-link>
            <nuxt-link to="/contacts" class="text-2xl">_contacts</nuxt-link>
        </div>
    </nav>
</template>