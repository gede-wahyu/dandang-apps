<template>
    <input
        class="d-inputtext"
        type="text"
        :name="inputId"
        :id="inputId"
        :placeholder="placeholder"
    />
</template>

<script setup>
const props = defineProps({
    inputId: {
        type: String,
        default: "",
    },
    placeholder: {
        type: String,
        default: "",
    },
});
</script>

<style scoped lang="scss">
.d-inputtext {
    font-family: var(--font-family);
    border: 2px solid var(--surface-input-border);
    border-radius: 10px;
    padding: 0.5rem;
    font-size: 1rem;

    &:hover {
        border: 2px solid var(--primary);
    }
    &:focus {
        outline: none;
        border: 2px solid var(--primary);
        box-shadow: 0 0 0 3px var(--primary-a);
    }
}
</style>
