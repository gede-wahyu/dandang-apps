<template>
    <button class="d-button" :class="'d-button-' + severity" v-bind="$attrs">
        <span
            class="d-button-icon material-symbols-outlined"
            :class="{ 'd-button-gap': icon && label }"
        >
            {{ icon }}
        </span>
        <span class="d-button-label">
            {{ label }}
        </span>
    </button>
</template>

<script setup>
const props = defineProps({
    label: {
        type: String,
        default: "",
    },
    icon: {
        type: String,
        default: "",
    },
    severity: {
        type: String,
        default: "primary",
    },
});
</script>

<style lang="scss">
.d-button {
    display: inline-flex;
    align-items: end;
    justify-content: center;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 10px;
    color: var(--text-primary);
    font-weight: 600;

    span.d-button-icon {
        font-size: 1rem;
        margin-bottom: 0.1rem;
    }

    span.d-button-label {
        user-select: none;
    }
}

.d-button-gap {
    margin-right: 0.5rem;
}
.d-button:hover {
    filter: brightness(85%);
}
.d-button:active {
    filter: brightness(100%);
}
.d-button-primary {
    background-color: var(--primary-b);
}
.d-button-danger {
    background-color: var(--red-600);
}
.d-button-warning {
    background-color: var(--orange-600);
}
.d-button-info {
    background-color: var(--purple-600);
}
</style>
