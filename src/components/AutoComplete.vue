<script setup>
import { ref } from "vue";
const input = ref("");
const props = defineProps({
    modelValue: {
        type: Object || Number || String,
        default: null,
    },
    placeholder: {
        type: String,
        default: "",
    },
    suggestion: {
        type: Array,
        default: null,
    },
    object: {
        type: Boolean,
        default: false,
    },
    firstKey: {
        type: String,
        default: "",
    },
    secondKey: {
        type: String,
        default: "",
    },
    separator: {
        type: String,
        default: " ",
    },
    forceComplete: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(["update:modelValue"]);
const suggestionResult = () => {
    if (props.firstKey && props.secondKey) {
        return props.suggestion.filter(
            (item) =>
                item[props.firstKey]
                    .toLocaleLowerCase()
                    .includes(input.value.toLocaleLowerCase()) ||
                item[props.secondKey]
                    .toLocaleLowerCase()
                    .includes(input.value.toLocaleLowerCase())
        );
    }
};
const hideNonResultSuggestion = (target, item) => {
    if (props.firstKey) {
        return !target
            .map((result) => result[props.firstKey])
            .includes(item[props.firstKey]);
    } else {
        return !target.map((result) => result).includes(item);
    }
};
const action = (item) => {
    emit("update:modelValue", item);
    input.value = props.firstKey ? item[props.firstKey] : item;
};
const handleChange = () => {
    if (!props.modelValue) return;
    if (!props.firstKey) return;
    if (!props.modelValue[props.firstKey]) return;
    if (props.modelValue[props.firstKey] !== input)
        emit("update:modelValue", null);
};
</script>

<template>
    <div class="d-autocomplete">
        <InputText
            v-model="input"
            class="d-inputtext d-autocomplete-input"
            :class="{ 'd-autocomplete-input-none': !input }"
            :placeholder="placeholder"
            @input="suggestionResult()"
            @focus="
                $refs['suggestion'].classList.remove(
                    'd-autocomplete-suggestion-close'
                )
            "
            @blur="
                $refs['suggestion'].classList.add(
                    'd-autocomplete-suggestion-close'
                )
            "
            @change="handleChange()"
        />
        <div
            class="d-autocomplete-suggestion d-autocomplete-suggestion-close"
            ref="suggestion"
        >
            <ul>
                <li
                    role="option"
                    v-for="item in suggestion"
                    @click="
                        action(item);
                        $refs['suggestion'].classList.add(
                            'd-autocomplete-suggestion-close'
                        );
                    "
                    :class="{
                        hidden: hideNonResultSuggestion(
                            suggestionResult(),
                            item
                        ),
                    }"
                >
                    <span v-if="object && firstKey">{{ item[firstKey] }}</span>
                    <span v-if="object && secondKey"
                        >&nbsp;{{ separator }}&nbsp;</span
                    >
                    <span v-if="object && secondKey">{{
                        item[secondKey]
                    }}</span>
                    <span v-else>{{ item }}</span>
                </li>
                <li v-if="!suggestionResult().length">
                    <span>Tidak ditemukan</span><span></span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
.d-autocomplete {
    position: relative;

    .d-autocomplete-input {
        width: 100%;
        text-transform: capitalize;
    }
    .d-autocomplete-input-none {
        color: var(--text-color-secondary);
    }
    .d-autocomplete-suggestion-close {
        display: none;
    }
    .d-autocomplete-suggestion {
        position: absolute;
        width: 100%;
        background: var(--surface-ground);
        box-shadow: var(--box-shadow-set);
        border-radius: 10px;
        user-select: none;
        color: var(--text-color-secondary);

        &:hover {
            display: block;
        }

        ul {
            margin: 0;
            padding: 10px 0;
            list-style: none;

            li {
                padding: 10px 18px;
                cursor: pointer;

                span:first-child {
                    text-transform: capitalize;
                }
                span:last-child {
                    text-transform: uppercase;
                }
            }

            li:hover {
                background: var(--surface-ground-darker);
            }
        }
    }
}
</style>
