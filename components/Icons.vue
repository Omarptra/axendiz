<script setup>
    const props = defineProps(['type'])
</script>
<template>
    <svg v-if="props.type === 'menu'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 8H12M7 12H17M12 16H17" stroke="#D4A056" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
    <svg v-else-if="props.type === 'notification'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.45549 13.88L3.88393 13.3944H3.88393L4.45549 13.88ZM5.33476 11.8385L4.58953 11.7541L5.33476 11.8385ZM18.6652 11.8385L19.4105 11.7541L18.6652 11.8385ZM19.5445 13.88L20.1161 13.3944L19.5445 13.88ZM18.3204 8.79403L17.5751 8.87846V8.87846L18.3204 8.79403ZM5.67964 8.79403L6.42487 8.87846L5.67964 8.79403ZM15.7023 19.2632C15.8477 18.8753 15.6511 18.4431 15.2632 18.2977C14.8753 18.1523 14.4431 18.3489 14.2977 18.7368L15.7023 19.2632ZM9.7023 18.7368C9.55694 18.3489 9.12467 18.1523 8.7368 18.2977C8.34893 18.4431 8.15234 18.8753 8.2977 19.2632L9.7023 18.7368ZM18.1699 16.25H5.83014V17.75H18.1699V16.25ZM17.5751 8.87846L17.92 11.9229L19.4105 11.7541L19.0656 8.70961L17.5751 8.87846ZM6.07999 11.9229L6.42487 8.87846L4.9344 8.70961L4.58953 11.7541L6.07999 11.9229ZM5.02706 14.3657C5.61173 13.6775 5.97775 12.8255 6.07999 11.9229L4.58953 11.7541C4.52038 12.3645 4.2732 12.9363 3.88393 13.3944L5.02706 14.3657ZM17.92 11.9229C18.0223 12.8255 18.3883 13.6775 18.9729 14.3657L20.1161 13.3944C19.7268 12.9363 19.4796 12.3645 19.4105 11.7541L17.92 11.9229ZM5.83014 16.25C4.94335 16.25 4.37926 15.1281 5.02706 14.3657L3.88393 13.3944C2.46491 15.0647 3.57828 17.75 5.83014 17.75V16.25ZM18.1699 17.75C20.4217 17.75 21.5351 15.0647 20.1161 13.3944L18.9729 14.3657C19.6207 15.1281 19.0567 16.25 18.1699 16.25V17.75ZM19.0656 8.70961C18.6504 5.04473 15.6279 2.25 12 2.25V3.75C14.8302 3.75 17.2419 5.93698 17.5751 8.87846L19.0656 8.70961ZM6.42487 8.87846C6.75808 5.93698 9.16977 3.75 12 3.75V2.25C8.37212 2.25 5.34956 5.04473 4.9344 8.70961L6.42487 8.87846ZM14.2977 18.7368C13.975 19.5979 13.0846 20.25 12 20.25V21.75C13.6855 21.75 15.1516 20.7325 15.7023 19.2632L14.2977 18.7368ZM12 20.25C10.9154 20.25 10.025 19.5979 9.7023 18.7368L8.2977 19.2632C8.84835 20.7325 10.3145 21.75 12 21.75V20.25Z" fill="#D4A056"/>
    </svg>
    <svg v-else-if="props.type === 'home'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 17.9668V10.1503C21 8.93937 20.4604 7.7925 19.5301 7.02652L14.5301 2.90935C13.0577 1.69688 10.9423 1.69689 9.46986 2.90935L4.46986 7.02652C3.53964 7.7925 3 8.93937 3 10.1503V17.9668C3 20.1943 4.79086 22 7 22H17C19.2091 22 21 20.1943 21 17.9668Z" stroke="current-color" stroke-width="1.5" stroke-linejoin="round"/>
        <path d="M10 18H14" stroke="current-color" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
    <svg v-else-if="props.type === 'transaction'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7857 6L14.5807 8.00215C13.8273 7.57761 12.9442 7.33333 12 7.33333C9.23858 7.33333 7 9.42267 7 12C7 12.4149 7.058 12.8171 7.16686 13.2M10.2143 18L9.41931 15.9978C10.1727 16.4224 11.0558 16.6667 12 16.6667C14.7614 16.6667 17 14.5773 17 12C17 11.5851 16.942 11.1829 16.8331 10.8" stroke="current-color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="12" cy="12" r="10" stroke="current-color" stroke-width="1.5"/>
    </svg>
    
    <svg v-else-if="props.type === 'intake'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.63246 11.1026C6.44915 8.65258 8.74198 7 11.3246 7H12.6755C15.258 7 17.5509 8.65258 18.3675 11.1026L19.3676 14.1026C20.6626 17.9878 17.7708 22 13.6755 22H10.3246C6.22921 22 3.3374 17.9878 4.63246 14.1026L5.63246 11.1026Z" stroke="current-color" stroke-width="1.5" stroke-linejoin="round"/>
        <path d="M9 18C11.2544 19.3147 12.5778 19.3445 15 18" stroke="current-color" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M14.0859 7L9.91411 7L8.51303 5.39296C7.13959 3.81763 8.74185 1.46298 10.7471 2.10985L11.6748 2.40914C11.8861 2.47728 12.1139 2.47728 12.3252 2.40914L13.2529 2.10985C15.2582 1.46298 16.8604 3.81763 15.487 5.39296L14.0859 7Z" stroke="current-color" stroke-width="1.5" stroke-linejoin="round"/>
    </svg>
    <svg v-else-if="props.type === 'production'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="3" width="12" height="12" rx="2" stroke="current-color" stroke-width="1.5"/>
        <rect x="2" y="15" width="20" height="6" rx="3" stroke="current-color" stroke-width="1.5"/>
            <circle cx="17" cy="18" r="1" fill="current-color"/>
            <circle cx="12" cy="18" r="1" fill="current-color"/>
            <circle cx="7" cy="18" r="1" fill="current-color"/>
        <path d="M13 6L11 6" stroke="current-color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-else-if="props.type === 'finance'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 6H6C3.79086 6 2 7.79086 2 10V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6Z" stroke="current-color" stroke-width="1.5" stroke-linejoin="round"/>
        <path d="M22 6C22 3.79086 20.2091 2 18 2H12C9.79086 2 8 3.79086 8 6V6H22V6Z" stroke="current-color" stroke-width="1.5" stroke-linejoin="round"/>
        <path d="M2 12L2 16L6 16C7.10457 16 8 15.1046 8 14V14C8 12.8954 7.10457 12 6 12L2 12Z" stroke="current-color" stroke-width="1.5" stroke-linejoin="round"/>
    </svg>
    <svg v-else-if="props.type === 'death'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12H8L10 8L14 17L16 12H18" stroke="current-color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6Z" stroke="current-color" stroke-width="1.5"/>
    </svg>
    <svg v-else-if="props.type === 'vaccine'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.4852 6.53531L8.29975 11.7208C7.99376 12.0268 7.79526 12.4237 7.73407 12.8521L7.49836 14.502C7.3098 15.822 8.44117 16.9533 9.76111 16.7648L11.411 16.5291C11.8394 16.4679 12.2364 16.2694 12.5424 15.9634L17.7278 10.7779C18.5089 9.9969 18.5089 8.73057 17.7278 7.94952L16.3136 6.53531C15.5326 5.75426 14.2662 5.75426 13.4852 6.53531Z" stroke="current-color" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M19.8496 4.41406L17.0212 7.24249" stroke="current-color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.4351 3L21.2635 5.82843" stroke="current-color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.24286 10.7781L16.3139 12.1923" stroke="current-color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.82859 16.435L2.99999 21" stroke="current-color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>








</template>
