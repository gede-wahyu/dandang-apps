<template>
    <div class="layout-wrapper">
        <div class="layout-topbar">
            <AppTopbar />
        </div>
        <div class="layout-main-container">
            <router-view />
        </div>
        <div class="layout-bottombar">
            <AppBottombar :models="menuItemStore.menuItem" />
        </div>
    </div>
</template>

<script setup>
import AppTopbar from "./AppTopbar.vue";
import AppBottombar from "./AppBottombar.vue";
import { useMenuItemStore } from "../stores/MenuItemStore";

const menuItemStore = useMenuItemStore();

//
</script>
