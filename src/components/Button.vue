<template>
    <div>
        <button
            class="d-button ripple-container"
            :class="'d-button-' + severity"
            v-bind="$attrs"
            @mousedown="ripple"
        >
            <span
                class="d-button-icon material-symbols-outlined"
                :class="{ 'd-button-gap': icon && label }"
            >
                {{ icon }}
            </span>
            <span class="d-button-label">
                {{ label }}
            </span>

            <div
                v-for="ripple in ripples"
                :key="ripple.id"
                class="ripple"
                :style="ripple.style"
            ></div>
        </button>
    </div>
</template>

<script setup>
import { ref } from "vue";
const ripples = ref([]);
const ripple = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = {
        id: Date.now(),
        style: {
            left: `${x}px`,
            top: `${y}px`,
        },
    };

    ripples.value.push(ripple);

    setTimeout(() => {
        ripples.value.splice(ripples.value.indexOf(ripple), 1);
    }, 600);

    // console.log(rect, x, y);
};

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
.ripple-container {
    position: relative;
    overflow: hidden;
}

.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.25);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
.d-button {
    display: inline-flex;
    align-items: end;
    justify-content: center;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 10px;
    color: var(--text-primary);
    font-weight: 600;
    position: relative;

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
    filter: brightness(90%);
}
.d-button:active {
    filter: brightness(85%);
}
.d-button-primary {
    background-color: var(--primary-b);
}
.d-button-danger {
    background-color: var(--red-500);
}
.d-button-warning {
    background-color: var(--orange-500);
}
.d-button-info {
    background-color: var(--purple-500);
}
</style>
