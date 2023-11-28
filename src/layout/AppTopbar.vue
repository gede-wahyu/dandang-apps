<template>
    <div class="left-icon">
        <router-link :to="{ name: 'home' }">
            <span
                class="material-symbols-outlined"
                :class="{ hidden: !layoutState.windowButtonNavVisible.value }"
                >view_cozy</span
            >
            <span
                class="material-symbols-outlined"
                :class="{ hidden: !layoutState.backButtonNavVisible.value }"
                >arrow_back_ios_new</span
            >
        </router-link>
    </div>
    <div class="middle-content">
        <span class="page-title">{{ pageName }}</span>
    </div>
    <div class="right-icon">
        <router-link to="#">
            <span class="material-symbols-outlined">person</span>
        </router-link>
        <!-- <img
            src="../assets/icon/user.png"
            alt="user"
            style="height: 1rem; width: 1rem"
        /> -->
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useLayout } from "./composables/layout";

const { layoutConfig, layoutState, onBackButtonActive } = useLayout();
const pageName = ref("");

// onMounted(() => {
//     console.log(layoutConfig.activeMenuItem.value);
// });

watch(
    () => layoutConfig.activeMenuItem.value,
    () => {
        pageName.value = layoutConfig.pageDispName.value;
        onBackButtonActive();
    }
);

//
</script>
