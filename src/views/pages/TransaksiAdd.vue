<template>
    <div class="card">
        <h5>Tambah Transaksi</h5>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
            tempora tenetur omnis aperiam ad laboriosam, impedit explicabo
            itaque neque animi provident pariatur, natus dolores et labore totam
            praesentium ipsum temporibus?
        </p>
        <Button class="flex justify-content-end" label="Click me" />
    </div>
</template>

<script setup>
import { useProductStore } from "../../stores/ProductStore";
import { ref, onBeforeMount, onMounted } from "vue";

const productStore = useProductStore();
const products = ref([]);

onBeforeMount(async () => {
    await productStore.getProducts();
    products.value = productStore.products;
});

//
</script>
