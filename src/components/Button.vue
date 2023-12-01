<template>
    <!-- <div> -->
    <button class="d-button" :class="'d-button-' + severity">
        <div class="d-button-ins">
            <span
                class="d-button-icon material-symbols-outlined"
                :class="{ 'd-button-gap': icon && label }"
            >
                {{ icon }}
            </span>
            <span class="d-button-label">
                {{ label }}
            </span>
        </div>
    </button>
    <!-- </div> -->
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
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 10px;
    color: var(--text-primary);
    font-weight: 700;
    user-select: none;
    transition: filter, box-shadow 0.2s ease;

    .d-button-ins {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    span.d-button-icon {
        font-size: 1rem;
    }

    span.d-button-label {
        user-select: none;
        line-height: 1rem;
    }
}

.d-button-gap {
    margin-right: 0.5rem;
}
.d-button:hover {
    filter: brightness(85%);
}
.d-button:active {
    filter: brightness(75%);
}
.d-button-primary {
    background: var(--primary);

    &.d-button:focus {
        box-shadow: 0 0 0 1.5px rgba(255, 255, 255, 1),
            0 0 0 3px var(--primary-a);
    }
}
.d-button-danger {
    background: var(--color-danger);

    &.d-button:focus {
        box-shadow: 0 0 0 1.5px rgba(255, 255, 255, 1),
            0 0 0 3px var(--color-danger-a);
    }
}
.d-button-warning {
    background: var(--color-warning);

    &.d-button:focus {
        box-shadow: 0 0 0 1.5px rgba(255, 255, 255, 1),
            0 0 0 3px var(--color-warning-a);
    }
}
.d-button-info {
    background: var(--color-info);

    &.d-button:focus {
        box-shadow: 0 0 0 1.5px rgba(255, 255, 255, 1),
            0 0 0 3px var(--color-info-a);
    }
}
.d-button-success {
    background: var(--color-success);

    &.d-button:focus {
        box-shadow: 0 0 0 1.5px rgba(255, 255, 255, 1),
            0 0 0 3px var(--color-success-a);
    }
}
</style>
