<template>
    <div class="min-h-[calc(100dvh-6.5rem)] xs:h-[calc(100dvh-6.5rem)] w-full flex flex-col lg:flex-row pt-4 gap-3">
        <div class="w-full lg:w-[16rem] text-[#c5cbd3]">
            <div class="flex items-center gap-1.5 mb-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="rgba(197,203,211,1)"><path d="M12 16L6 10H18L12 16Z"></path></svg>
                <span class="text-lg">Personal Info</span>
            </div>
            <div class="flex items-start gap-1.5">
                <div class="mt-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(197,203,211,1)"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
                </div>
                <div class="space-y-1">
                    <div class="flex items-center gap-1.5">
                        <svg stroke="currentColor" fill="#674f8e" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 21C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5H20C20.5523 5 21 5.44772 21 6V9H19V7H11.5858L9.58579 5H4V16.998L5.5 11H22.5L20.1894 20.2425C20.0781 20.6877 19.6781 21 19.2192 21H3ZM19.9384 13H7.06155L5.56155 19H18.4384L19.9384 13Z"></path></svg>
                        <span class="text-lg">about</span>
                    </div>
                    <button class="flex items-center gap-1.5" v-for="(file, i) in Object.keys(files)" :key="i" :onClick="() => selectFile(file)">
                        <svg stroke="currentColor" fill="#4d82c8" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"></path></svg>
                        <span class="text-lg" :class="selectedFile == file ? 'text-white' : ''">{{ file }}</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="w-[calc(100vw-1.5rem)] -ml-4 h-full lg:-mr-4 -mb-4 xs:mb-0">
            <template v-if="selectedFile?.length > 0">
                <div class="w-full max-w-40 px-3 py-1 flex items-center justify-between gap-2 bg-neutral-950 bg-opacity-85">
                    <span class="text-white text-lg">{{navigationState.selectedFile.name}}</span>
                    <button :onClick="()=> selectFile()">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="rgba(243,250,250,1)"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                    </button>
                </div>
                <template v-for="(file, i) in Object.keys(files)" :key="i">
                    <ClientOnly v-if="selectedFile == file">
                        <HighCode :textEditor="false" :copy="false" :codeLines="true" langName="typescript" :codeValue="files[file as keyof typeof files]" borderRadius="0px" theme="dark" lang="typescript" width="100%" height="calc(100% - 0.3rem)"></HighCode>
                    </ClientOnly>
                </template>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { HighCode } from "vue-highlight-code";
import "vue-highlight-code/dist/style.css";
import { useNavigationStore } from '~/stores/navigation';

const navigationState = useNavigationStore();

const files = {
    "personal.ts": `const name = "Bowo Pratama";\n\nlet languages = [\n	"Typescript",\n	"Python"\n	"PHP",\n	"Go"\n]\n\nlet hobbies = [\n	"Coding",\n	"Listen Music"\n]`,
    "work.ts": `let employer = [\n	{\n		name: "Alkademi",\n		role: "internship",\n		startDate: "Tue Jul 18 2023 09:00:00 GMT+0700 (Western Indonesia Time)",\n		endDate: "Fri Jan 05 2024 14:00:00 GMT+0700 (Western Indonesia Time)"\n	}\n]`
}

const selectedFile = ref<keyof typeof files | "">("");

const selectFile = (fileName?: string) => {
    selectedFile.value = (fileName || "") as typeof selectedFile.value
    navigationState.setState({
        name: fileName || "about.vue",
        ext: fileName ? "ts" : "vue",
        bgColor: fileName ? "#4d82c8" : "#659b8f",
        textColor: fileName ? "#4f4e57" : "#4f4e57"
    })
}

onMounted(() => {
    selectFile("personal.ts")
})
</script>