<template>
    <div class="layout-wrapper">
        <div class="layout-topbar">
            <AppTopbar />
        </div>
        <div class="layout-main-container">
            <router-view />
        </div>
        <div class="layout-bottombar">
            <AppBottombar :models="model" />
        </div>
    </div>
</template>

<script setup>
import AppTopbar from "./AppTopbar.vue";
import AppBottombar from "./AppBottombar.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const model = ref([
    {
        label: "Home",
        icon: "home",
        to: { name: "home" },
    },
    {
        label: "Daftar Toko",
        icon: "store",
        to: { name: "store-list" },
    },
    {
        label: "Buat Transaksi",
        icon: "add",
        to: { name: "transaction-add" },
    },
    {
        label: "Notifikasi",
        icon: "notifications",
        to: { name: "notifications" },
    },
    {
        label: "Pengaturan",
        icon: "settings",
        to: { name: "settings" },
    },
]);

//
</script>
