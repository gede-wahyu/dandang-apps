<template>
    <div>This is transaksi add</div>
</template>

<script setup>
import { useProductStore } from "../../stores/ProductStore";
import { ref, onBeforeMount, onMounted } from "vue";

const productStore = useProductStore();
const products = ref([]);

onBeforeMount(async () => {
    await productStore.getProducts();
    products.value = productStore.products;
    // console.log(products.value);
});

//
</script>
