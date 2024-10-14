import { defineStore } from 'pinia';

export const useBookingStore = defineStore('booking', () => {
    const counter = ref(0);
    
    const funcCount = () => {
        counter.value++;
    };
    
    return {
        funcCount,
        getCount: computed(() => counter.value),
    }
});
