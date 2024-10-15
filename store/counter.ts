import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
    const count = ref<number>(0);

    // actions
    function increment() {
        count.value++;
    }

    const decrement = () : void => {
        count.value--;
    };

    const reset = () : void=> {
        count.value = 0;
    };
    
    const getCount = () => {
        return computed(() => count.value);
    }

    return {
        getCount,
        increment,
        decrement,
        reset,
    };
});
