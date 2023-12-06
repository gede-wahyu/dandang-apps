<script setup>
const props = defineProps({
    inputId: {
        type: String,
        default: "",
    },
    modelValue: {
        type: Number,
        default: null,
    },
});
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
    <input
        :value="modelValue"
        @input="
            $emit(
                'update:modelValue',
                parseInt($event.target.value)
                    ? parseInt($event.target.value)
                    : 0
            )
        "
        class="d-inputnumber"
        :id="inputId"
        type="number"
    />
</template>

<style scoped lang="scss">
input[type="number"].d-inputnumber::-webkit-outer-spin-button,
input[type="number"].d-inputnumber::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type="number"].d-inputnumber {
    -moz-appearance: textfield;
}
.d-inputnumber {
    font-family: var(--font-family);
    border: 2px solid var(--surface-input-border);
    border-radius: 10px;
    padding: 0.5rem;
    text-align: center;
}

input.d-inputnumber:focus {
    outline: none;
    border: 2px solid var(--primary);
}
</style>
