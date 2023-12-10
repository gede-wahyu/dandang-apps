<script setup>
import { ref } from "vue";
const searchKey = ref();
const props = defineProps({
    placeholder: {
        type: String,
        default: "",
    },
    options: {
        type: Array,
        default: null,
    },
    optionLabel: {
        type: String,
        default: "",
    },
    optionLabel2: {
        type: String,
        default: "",
    },
    separator: {
        type: String,
        default: " ",
    },
    modelValue: null,
    searchOption: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(["update:modelValue"]);
const search = () => {
    let key = props.optionLabel;
    return key
        ? props.options.filter((item) =>
              item[key].toLowerCase().includes(searchKey.value)
          )
        : props.options.filter((item) =>
              item.toLowerCase().includes(searchKey.value)
          );
};
</script>

<template>
    <div class="d-dropdown-wrapper">
        <div
            class="d-dropdown"
            tabindex="0"
            @click="
                $refs['options'].classList.toggle('d-dropdown-options-close')
            "
        >
            <div
                class="d-dropdown-label"
                :class="{ 'd-dropdown-label-selected-none': !modelValue }"
            >
                <span v-if="modelValue && optionLabel">{{
                    modelValue[optionLabel]
                }}</span>
                <span v-if="modelValue && optionLabel2"
                    >&nbsp;{{ separator }}&nbsp;</span
                >
                <span v-if="modelValue && optionLabel2">{{
                    modelValue[optionLabel2]
                }}</span>
                <span v-else>{{ placeholder }}</span>
            </div>
            <div class="d-dropdown-trigger">
                <span class="material-symbols-outlined"> expand_more </span>
            </div>
        </div>
        <div
            class="d-dropdown-options d-dropdown-options-close"
            ref="options"
            @scroll="
                if (searchOption && $refs['options'].scrollTop > 0)
                    $refs['search'].classList.add('d-dropdown-search-shadow');
                else
                    $refs['search'].classList.remove(
                        'd-dropdown-search-shadow'
                    );
            "
        >
            <div v-if="searchOption" class="d-dropdown-search" ref="search">
                <InputText
                    v-model="searchKey"
                    @keypress="search()"
                    placeholder="Search..."
                />
            </div>
            <ul>
                <li
                    role="option"
                    @click="
                        emit('update:modelValue', option);
                        $refs['options'].classList.add(
                            'd-dropdown-options-close'
                        );
                    "
                    v-for="option in search().length ? search() : options"
                >
                    <span v-if="optionLabel">{{ option[optionLabel] }}</span>
                    <span v-if="optionLabel2">&nbsp;{{ separator }}&nbsp;</span>
                    <span v-if="optionLabel2">{{ option[optionLabel2] }}</span>
                    <span v-else>{{ option }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
.d-dropdown-wrapper {
    position: relative;
}
.d-dropdown {
    display: flex;
    border: 2px solid var(--surface-input-border);
    border-radius: 10px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
    user-select: none;

    &:hover {
        border: 2px solid var(--primary);
    }
    &:focus {
        outline: none;
        border: 2px solid var(--primary);
        box-shadow: 0 0 0 3px var(--primary-a);
    }
}
.d-dropdown-label {
    display: flex;
    height: 24px;
    width: 100%;
    padding: 0.5rem;
    box-sizing: content-box;

    span:nth-child(3) {
        text-transform: uppercase;
    }
}

.d-dropdown-label-selected-none {
    color: var(--text-color-secondary);
}
.d-dropdown-trigger {
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1 / 1;
    height: 2.5rem;
    user-select: none;

    span {
        font-size: 1rem;
    }
}
.d-dropdown-options-close {
    display: none;
}
.d-dropdown-options {
    position: absolute;
    background: var(--surface-ground);
    box-shadow: var(--box-shadow-set);
    max-height: 236px;
    bottom: 0;
    transform-origin: center top;
    transform: translateY(calc(100% + 2px));
    width: 100%;
    border-radius: 10px;
    overflow-y: auto;

    .d-dropdown-search {
        display: flex;
        padding: 15px 15px;
        background: var(--surface-ground);
        position: sticky;
        top: 0;
        transition: box-shadow 0.2s ease;

        input {
            width: 100%;
        }
    }
    .d-dropdown-search-shadow {
        box-shadow: var(--box-shadow-set);
    }

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        padding: 10px 0;
        color: var(--text-color-secondary);

        li {
            padding: 10px 18px;
            user-select: none;
            cursor: pointer;

            span:nth-child(3) {
                text-transform: uppercase;
            }

            &:hover {
                background: var(--surface-ground-darker);
            }
        }
    }
}
</style>
