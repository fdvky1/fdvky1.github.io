<template>
    <footer class="hidden sm:block fixed w-[calc(100vw-1.5rem)] z-[701] -ml-4">
        <div class="flex items-center justify-between text-gray-400">
            <div class="flex items-center gap-2">
                <div class="flex items-center gap-1 bg-gray-800 pr-1 rounded-bl-md overflow-hidden">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="w-[30px] h-[30px] p-2 bg-[#f1b3b0] text-[#4f4e57]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M24 11.986h-.027l-4.318-4.318 4.303-4.414V1.461l-.649-.648h-8.198l-.66.605v1.045L12.015.027V0L12 .014 11.986 0v.027l-1.29 1.291-.538-.539H2.035l-.638.692v1.885l.616.616h.72v5.31L.027 11.987H0L.014 12 0 12.014h.027l2.706 2.706v6.467l.907.523h2.322l1.857-1.904 4.166 4.166V24l.015-.014.014.014v-.028l2.51-2.509h.485c.111 0 .211-.07.25-.179l.146-.426c.028-.084.012-.172-.037-.239l1.462-1.462-.612 1.962c-.043.141.036.289.177.332.025.008.052.012.078.012h1.824c.106-.001.201-.064.243-.163l.165-.394c.025-.065.024-.138-.004-.203-.027-.065-.08-.116-.146-.142-.029-.012-.062-.019-.097-.02h-.075l.84-2.644h1.232l-1.016 3.221c-.043.141.036.289.176.332.025.008.052.012.079.012h2.002c.11 0 .207-.066.248-.17l.164-.428c.051-.138-.021-.29-.158-.341-.029-.011-.06-.017-.091-.017h-.145l1.131-3.673c.027-.082.012-.173-.039-.24l-.375-.504-.003-.005c-.051-.064-.127-.102-.209-.102h-1.436c-.071 0-.141.03-.19.081l-.4.439h-.624l-.042-.046 4.445-4.445H24L23.986 12l.014-.014zM9.838 21.139l1.579-4.509h-.501l.297-.304h1.659l-1.563 4.555h.623l-.079.258H9.838zm3.695-7.516l.15.151-.269.922-.225.226h-.969l-.181-.181.311-.871.288-.247h.895zM5.59 20.829H3.877l-.262-.15V3.091H2.379l-.1-.1V1.815l.143-.154h7.371l.213.214v1.108l-.142.173H8.785v8.688l8.807-8.688h-2.086l-.175-.188V1.805l.121-.111h7.49l.132.133v1.07L12.979 13.25h-.373c-.015-.001-.028 0-.042.001l-.02.003c-.045.01-.086.03-.119.06l-.343.295-.004.003c-.033.031-.059.069-.073.111l-.296.83-6.119 6.276zm14.768-3.952l.474-.519h1.334l.309.415-1.265 4.107h.493l-.08.209H19.84l1.124-3.564h-2.015l-1.077 3.391h.424l-.073.174h-1.605l1.107-3.548h-2.096l-1.062 3.339h.436l-.072.209H13.27l1.514-4.46H14.198l.091-.271h1.65l.519.537h.906l.491-.554h1.061l.489.535h.953z"></path></svg>
                    <span>Visual</span>
                </div>
                <div class="flex items-center gap-1 bg-gray-800 pr-1">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="w-[30px] h-[30px] p-2" :style="`background-color: ${navigationState.selectedFile.bgColor}; color: ${navigationState.selectedFile.textColor};`" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" v-html="svgPath[navigationState.selectedFile.ext]"></svg>
                    <span>{{ navigationState.selectedFile.name }}</span>
                </div>

                <div class="flex items-center gap-1 pr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"  fill="rgba(243, 250, 250, 1)"><path d="M7.10508 15.2101C8.21506 15.6501 9 16.7334 9 18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.6938 3.83481 15.5825 5 15.1707V8.82929C3.83481 8.41746 3 7.30622 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6C9 7.30622 8.16519 8.41746 7 8.82929V11.9996C7.83566 11.3719 8.87439 11 10 11H14C15.3835 11 16.5482 10.0635 16.8949 8.78991C15.7849 8.34988 15 7.26661 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6C21 7.3332 20.1303 8.46329 18.9274 8.85392C18.5222 11.2085 16.4703 13 14 13H10C8.61653 13 7.45179 13.9365 7.10508 15.2101ZM6 17C5.44772 17 5 17.4477 5 18C5 18.5523 5.44772 19 6 19C6.55228 19 7 18.5523 7 18C7 17.4477 6.55228 17 6 17ZM6 5C5.44772 5 5 5.44772 5 6C5 6.55228 5.44772 7 6 7C6.55228 7 7 6.55228 7 6C7 5.44772 6.55228 5 6 5ZM18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"></path></svg>
                    <nuxt-link to="https://github.com/fdvky1/fdvky1" target="_blank">main</nuxt-link>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <span>UTF-8</span>
                <div class="flex items-center gap-1 bg-gray-800 pl-1 rounded-br-md overflow-hidden">
                    <span>Fdvky1</span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="w-[30px] h-[30px] p-2 bg-[#674f8e] text-[#f3fafa]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 21C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5H20C20.5523 5 21 5.44772 21 6V9H19V7H11.5858L9.58579 5H4V16.998L5.5 11H22.5L20.1894 20.2425C20.0781 20.6877 19.6781 21 19.2192 21H3ZM19.9384 13H7.06155L5.56155 19H18.4384L19.9384 13Z"></path></svg>
                </div>
            </div>
        </div>
    </footer>
</template>


<script setup lang="ts">
import { useNavigationStore, svgPath } from '~/stores/navigation';

const navigationState = useNavigationStore();

</script>