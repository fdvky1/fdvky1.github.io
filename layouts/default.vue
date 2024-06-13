<template>
    <div class="min-h-[100dvh] w-full p-3 bg-[url('/images/26796717_2203_w026_n002_1490b_p1_1490.jpg')] bg-no-repeat bg-cover">
        <div class="p-4 w-full h-[calc(100dvh-1.5rem)] bg-neutral-950 rounded-md bg-opacity-80">
            <Nav/>
            <div class="h-[calc(100dvh-6.5rem)] w-full">
                <slot/>
            </div>
            <Footer/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useNavigationStore } from '~/stores/navigation';

const router = useRouter();
const navigationState = useNavigationStore();

const fixFilename = (path: string) => {
    switch (path){
        case '/':
            navigationState.setState({
                name: "index.vue",
                ext: "vue",
                bgColor: "#659b8f",
                textColor: "#4f4e57"
            })
            break;
        case '/about':
            navigationState.setState({
                name: "personal.ts",
                ext: "ts",
                bgColor: "#4d82c8",
                textColor: "#4f4e57"
            })
            break;
        case '/projects':
            navigationState.setState({
                name: "projects.vue",
                ext: "vue",
                bgColor: "#659b8f",
                textColor: "#4f4e57"
            })
            break;
        case '/contact':
            navigationState.setState({
                name: "contact.vue",
                ext: "vue",
                bgColor: "#659b8f",
                textColor: "#4f4e57"
            })
            break;
        default:
            break;
    }
}

onMounted(() => {
    fixFilename(router.currentRoute.value.path)
});

watch(router.currentRoute, ()=> {
    fixFilename(router.currentRoute.value.path)
})
</script>