<template>
    <div class="h-full w-full flex flex-col lg:flex-row pt-4 gap-3">
        <div class="w-full lg:max-w-[15rem] text-[#c5cbd3]">
            <div class="flex items-center gap-1.5 mb-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="rgba(197,203,211,1)"><path d="M12 16L6 10H18L12 16Z"></path></svg>
                <span class="text-lg">Contacts</span>
            </div>
            <div class="flex items-start gap-1.5">
                <div class="mt-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(197,203,211,1)"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
                </div>
                <div class="space-y-1 px-1">
                    <div class="flex items-center gap-1.5">
                        <svg stroke="currentColor" fill="#674f8e" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3638 15.5355L16.9496 14.1213L18.3638 12.7071C20.3164 10.7545 20.3164 7.58866 18.3638 5.63604C16.4112 3.68341 13.2453 3.68341 11.2927 5.63604L9.87849 7.05025L8.46428 5.63604L9.87849 4.22182C12.6122 1.48815 17.0443 1.48815 19.778 4.22182C22.5117 6.95549 22.5117 11.3876 19.778 14.1213L18.3638 15.5355ZM15.5353 18.364L14.1211 19.7782C11.3875 22.5118 6.95531 22.5118 4.22164 19.7782C1.48797 17.0445 1.48797 12.6123 4.22164 9.87868L5.63585 8.46446L7.05007 9.87868L5.63585 11.2929C3.68323 13.2455 3.68323 16.4113 5.63585 18.364C7.58847 20.3166 10.7543 20.3166 12.7069 18.364L14.1211 16.9497L15.5353 18.364ZM14.8282 7.75736L16.2425 9.17157L9.17139 16.2426L7.75717 14.8284L14.8282 7.75736Z"></path>
                        </svg>
                        <span class="text-lg">Get in touch</span>
                    </div>
                    <nuxt-link to="https://github.com/fdvky1" target="_blank" class="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(243,250,250,1)"><path d="M5.88401 18.6533C5.58404 18.4526 5.32587 18.1975 5.0239 17.8369C4.91473 17.7065 4.47283 17.1524 4.55811 17.2583C4.09533 16.6833 3.80296 16.417 3.50156 16.3089C2.9817 16.1225 2.7114 15.5499 2.89784 15.0301C3.08428 14.5102 3.65685 14.2399 4.17672 14.4263C4.92936 14.6963 5.43847 15.1611 6.12425 16.0143C6.03025 15.8974 6.46364 16.441 6.55731 16.5529C6.74784 16.7804 6.88732 16.9182 6.99629 16.9911C7.20118 17.1283 7.58451 17.1874 8.14709 17.1311C8.17065 16.7489 8.24136 16.3783 8.34919 16.0358C5.38097 15.3104 3.70116 13.3952 3.70116 9.63971C3.70116 8.40085 4.0704 7.28393 4.75917 6.3478C4.5415 5.45392 4.57433 4.37284 5.06092 3.15636C5.1725 2.87739 5.40361 2.66338 5.69031 2.57352C5.77242 2.54973 5.81791 2.53915 5.89878 2.52673C6.70167 2.40343 7.83573 2.69705 9.31449 3.62336C10.181 3.41879 11.0885 3.315 12.0012 3.315C12.9129 3.315 13.8196 3.4186 14.6854 3.62277C16.1619 2.69 17.2986 2.39649 18.1072 2.52651C18.1919 2.54013 18.2645 2.55783 18.3249 2.57766C18.6059 2.66991 18.8316 2.88179 18.9414 3.15636C19.4279 4.37256 19.4608 5.45344 19.2433 6.3472C19.9342 7.28337 20.3012 8.39208 20.3012 9.63971C20.3012 13.3968 18.627 15.3048 15.6588 16.032C15.7837 16.447 15.8496 16.9105 15.8496 17.4121C15.8496 18.0765 15.8471 18.711 15.8424 19.4225C15.8412 19.6127 15.8397 19.8159 15.8375 20.1281C16.2129 20.2109 16.5229 20.5077 16.6031 20.9089C16.7114 21.4504 16.3602 21.9773 15.8186 22.0856C14.6794 22.3134 13.8353 21.5538 13.8353 20.5611C13.8353 20.4708 13.836 20.3417 13.8375 20.1145C13.8398 19.8015 13.8412 19.599 13.8425 19.4094C13.8471 18.7019 13.8496 18.0716 13.8496 17.4121C13.8496 16.7148 13.6664 16.2602 13.4237 16.051C12.7627 15.4812 13.0977 14.3973 13.965 14.2999C16.9314 13.9666 18.3012 12.8177 18.3012 9.63971C18.3012 8.68508 17.9893 7.89571 17.3881 7.23559C17.1301 6.95233 17.0567 6.54659 17.199 6.19087C17.3647 5.77663 17.4354 5.23384 17.2941 4.57702L17.2847 4.57968C16.7928 4.71886 16.1744 5.0198 15.4261 5.5285C15.182 5.69438 14.8772 5.74401 14.5932 5.66413C13.7729 5.43343 12.8913 5.315 12.0012 5.315C11.111 5.315 10.2294 5.43343 9.40916 5.66413C9.12662 5.74359 8.82344 5.69492 8.57997 5.53101C7.8274 5.02439 7.2056 4.72379 6.71079 4.58376C6.56735 5.23696 6.63814 5.77782 6.80336 6.19087C6.94565 6.54659 6.87219 6.95233 6.61423 7.23559C6.01715 7.8912 5.70116 8.69376 5.70116 9.63971C5.70116 12.8116 7.07225 13.9683 10.023 14.2999C10.8883 14.3971 11.2246 15.4769 10.5675 16.0482C10.3751 16.2156 10.1384 16.7802 10.1384 17.4121V20.5611C10.1384 21.5474 9.30356 22.2869 8.17878 22.09C7.63476 21.9948 7.27093 21.4766 7.36613 20.9326C7.43827 20.5204 7.75331 20.2116 8.13841 20.1276V19.1381C7.22829 19.1994 6.47656 19.0498 5.88401 18.6533Z"></path></svg>
                        <span class="text-lg">Fdvky1</span>
                    </nuxt-link>
                    <nuxt-link to="https://www.linkedin.com/in/bowo-pratama/" target="_blank" class="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(243,250,250,1)"><path d="M4.00098 3H20.001C20.5533 3 21.001 3.44772 21.001 4V20C21.001 20.5523 20.5533 21 20.001 21H4.00098C3.44869 21 3.00098 20.5523 3.00098 20V4C3.00098 3.44772 3.44869 3 4.00098 3ZM5.00098 5V19H19.001V5H5.00098ZM7.50098 9C6.67255 9 6.00098 8.32843 6.00098 7.5C6.00098 6.67157 6.67255 6 7.50098 6C8.3294 6 9.00098 6.67157 9.00098 7.5C9.00098 8.32843 8.3294 9 7.50098 9ZM6.50098 10H8.50098V17.5H6.50098V10ZM12.001 10.4295C12.5854 9.86534 13.2665 9.5 14.001 9.5C16.072 9.5 17.501 11.1789 17.501 13.25V17.5H15.501V13.25C15.501 12.2835 14.7175 11.5 13.751 11.5C12.7845 11.5 12.001 12.2835 12.001 13.25V17.5H10.001V10H12.001V10.4295Z"></path></svg>
                        <span class="text-lg">bowo-pratama</span>
                    </nuxt-link>
                    <nuxt-link to="mailto:fdvkey@gmail.com" target="_blank" class="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(243,250,250,1)"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>
                        <span class="text-lg">fdvkey@gmail.com</span>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div class="w-auto max-w-[calc(100vw-1.5rem)] lg:max-w-[calc(85vw-1.5rem)] h-full">
            <div class="w-full max-w-40 px-3 py-1 flex items-center justify-between gap-2 bg-neutral-950 bg-opacity-85">
                <span class="text-white text-lg">{{navigationState.selectedFile.name}}</span>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="rgba(243,250,250,1)"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                </button>
            </div>
            <div class="flex justify-center xl:justify-start w-full">
                <div class="pt-1 sm:pt-8 px-4 w-full lg:max-w-md">
                    <form @submit.prevent="handleSubmit" class="space-y-2 sm:space-y-4 w-full max-w-md">
                        <div v-for="(input, i) in inputs" :key="i" class="flex flex-col gap-0.5 sm:gap-1 text-[#c5cbd3]">
                            <label :for="input.name" class="capitalize text-md mb-0.5">{{ input.name }}</label>
                            <textarea v-if="input.isTextarea" :name="input.name" :id="input.name" class="focus:outline-none bg-neutral-950 bg-opacity-75 rounded-md px-2 py-1 border-gray-700 border-2 min-h-24" :placeholder="input.placeholder" v-model="inputs[i].value" required></textarea>
                            <input v-else :id="input.name" type="text" :name="input.name" class="focus:outline-none bg-neutral-950 bg-opacity-75 rounded-md px-2 py-1 border-gray-700 border-2" :placeholder="input.placeholder" v-model="inputs[i].value" required>
                        </div>
                        <div class="text-xs">
                            <small class="text-[#c5cbd3]">This site is protected by reCAPTCHA and the Google
                                <a target="_blank" class="text-blue-500" href="https://policies.google.com/privacy">Privacy Policy</a> and
                                <a target="_blank" class="text-blue-500" href="https://policies.google.com/terms">Terms of Service</a> apply.
                            </small>
                        </div>
                        <button type="submit" class="rounded-md bg-neutral-950 bg-opacity-75 text-white border-gray-700 border-[1px] px-4 py-1.5 sm:py-2">Submit</button>
                    </form>
                </div>
                <div class="w-auto max-w-[50%] hidden xl:block">
                    <div class="bg-neutral-950 bg-opacity-75 rounded-md text-[#c5cbd3] p-2 relative">
                        <div class="flex gap-1 fixed">
                            <div class="rounded-full h-3 w-3 bg-gray-700 bg-opacity-80"></div>
                            <div class="rounded-full h-3 w-3 bg-gray-700 bg-opacity-80"></div>
                            <div class="rounded-full h-3 w-3 bg-gray-700 bg-opacity-80"></div>
                        </div>
                        <pre class="whitespace-pre-wrap w-full justify-center overflow-x-auto no-scrollbar">
                            <code class="inline-block">
curl  -X POST \
    'https://localhost:3001/contact' \
    --header 'Accept: */*' \
    --header 'User-Agent: {{ ua }}' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "name": "{{ inputs[0].value }}",
        "email": "{{ inputs[1].value }}",
        "message": "{{ inputs[2].value.length > 50 ? inputs[2].value.substring(0,50) + "..." : inputs[2].value }}",
        "timestamp": "<ClientOnly>{{ new Date().getTime() }}</ClientOnly>"
    }'
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useNavigationStore } from '~/stores/navigation';
import { useReCaptcha } from 'vue-recaptcha-v3';

const navigationState = useNavigationStore();

const runtimeConfig = useRuntimeConfig();
const recaptchaInstance = useReCaptcha();

const ua = ref("")
const inputs = ref<{
    name: string;
    value: string;
    type: string;
    placeholder: string;
    isTextarea?: boolean;
}[]>([
    { name: "name", value: "", type: "text", placeholder: "John doe"},
    { name: "email", value: "", type: "email", placeholder: "name@example.com"},
    { name: "message", value: "", type: "text", placeholder: "Lorem ipsum dolor sit amet", isTextarea: true}
])

const handleSubmit = async () => {
    await recaptchaInstance?.recaptchaLoaded();
    const token = await recaptchaInstance?.executeRecaptcha('submit');
    if(!token) throw new Error("Failed to get recaptcha token");
    fetch(runtimeConfig.public.SERVICE_URL+"/contact", {
        method: "POST",
        body: JSON.stringify({
            'name': inputs.value[0].value,
            'email': inputs.value[1].value,
            'message': inputs.value[2].value,
            token,
        }),
        headers: {
        'content-type': 'application/json',
        }
    }).then(async res => {
        console.log("Message status:", res.status)
        for (let index = 0; index < inputs.value.length; index++) {
            inputs.value[index].value = "";
        }
    })
}

onMounted(() => {
    ua.value = navigator.userAgent
})
</script>