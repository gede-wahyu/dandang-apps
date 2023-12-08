<template>
    <span class="d-inputpassword-set">
        <input
            class="d-inputpassword"
            :class="inputClass"
            :type="type"
            :name="inputId"
            :id="inputId"
            :placeholder="placeholder"
            v-bind="$attrs"
            @input="emit('update:modelValue', $event.target.value)"
            @keypress="emit('type')"
        />
        <span
            class="material-symbols-outlined d-inputpassword-eye"
            @click="togglePassword()"
        >
            {{ icon }}
        </span>
    </span>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["type", "update:modelValue"]);
const props = defineProps({
    modelValue: {
        type: String,
        default: "",
    },
    inputId: {
        type: String,
        default: "",
    },
    placeholder: {
        type: String,
        default: "",
    },
    inputClass: {
        type: String,
        default: "",
    },
});

const type = ref("password");
const icon = ref("visibility");
const togglePassword = () => {
    if (type.value === "text") {
        type.value = "password";
        icon.value = "visibility";
    } else {
        type.value = "text";
        icon.value = "visibility_off";
    }
};

//
</script>

<style scoped lang="scss">
.d-inputpassword-set {
    position: relative;
    display: flex;
    align-items: center;
    .d-inputpassword {
        font-family: var(--font-family);
        border: 2px solid var(--surface-input-border);
        border-radius: 10px;
        padding: 0.5rem 3.5rem 0.5rem 0.5rem;
        font-size: 1rem;
        width: 100%;

        &:hover {
            border: 2px solid var(--primary);
        }
        &:focus {
            outline: none;
            border: 2px solid var(--primary);
            box-shadow: 0 0 0 3px var(--primary-a);
        }
    }

    .d-inputpassword-eye {
        position: absolute;
        color: var(--text-color-secondary);
        right: 1rem;
        cursor: pointer;
        user-select: none;
    }
}
</style>
