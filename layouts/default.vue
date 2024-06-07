<template>
    <div class="min-h-[100dvh] w-full p-3 bg-[url('/images/26796717_2203_w026_n002_1490b_p1_1490.jpg')] bg-no-repeat bg-cover">
        <div class="p-4 w-full h-[calc(100dvh-1.5rem)] bg-neutral-950 rounded-md bg-opacity-85">
            <Nav/>
            <div class="h-[calc(100dvh-6.5rem)] w-full">
                <slot/>
            </div>
            <Footer/>
        </div>
    </div>
</template>