<script setup>
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
    <div
        class="d-checkbox"
        :class="{ 'd-checkbox-checked': modelValue }"
        tabindex="0"
        @click="emit('update:modelValue', (modelValue = !modelValue))"
    >
        <span class="material-symbols-outlined d-checkbox-checkmark">
            check
        </span>
    </div>
</template>

<style scoped lang="scss">
.d-checkbox {
    border: 2px solid var(--surface-input-border);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
        border: 2px solid var(--primary);
        filter: brightness(85%);
    }
    &:focus {
        outline: none;
        border: 2px solid var(--primary);
        box-shadow: 0 0 0 3px var(--primary-a);
    }
}

.d-checkbox-checked {
    background: var(--primary);
    border: 2px solid var(--primary);

    .d-checkbox-checkmark {
        display: inline;
    }
}

.d-checkbox-checkmark {
    font-size: 1.25rem;
    color: white;
    user-select: none;
    display: none;
}
</style>
