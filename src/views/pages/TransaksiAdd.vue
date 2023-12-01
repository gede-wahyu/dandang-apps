<template>
    <div class="card">
        <h5>Tambah Transaksi</h5>
        <ul class="products">
            <div v-for="(product, index) in products">
                <li class="product-item">
                    <div class="product-item-left">
                        <div class="product-item-img">
                            <img
                                v-if="product.img"
                                :src="'/data/products/' + product.img"
                                :alt="'product-' + index"
                            />
                            <div v-else class="img-none">
                                <span class="material-symbols-outlined"
                                    >image</span
                                >
                            </div>
                        </div>
                        <div class="product-item-name">
                            <span>{{ product.name }}</span>
                        </div>
                    </div>
                    <div class="product-item-right">
                        <div class="product-item-price">
                            <span>{{ lowestPrice(product.packaging) }}</span>
                        </div>
                        <div class="product-item-button">
                            <Button class="w-full" label="Add" />
                        </div>
                    </div>
                </li>
            </div>
        </ul>
        <Button
            class="flex justify-content-end"
            style="margin-top: 2rem"
            label="Click me"
        />
    </div>
</template>

<script setup>
import { useProductStore } from "../../stores/ProductStore";
import { ref, onBeforeMount } from "vue";

const productStore = useProductStore();
const products = ref([]);

onBeforeMount(async () => {
    await productStore.getProducts();
    products.value = productStore.products;
});

const lowestPrice = (items) => {
    return new Intl.NumberFormat().format(
        items.reduce(
            (min, p) => (p.price < min ? p.price : min),
            items[0].price
        )
    );
};

//
</script>

<style lang="scss" scoped>
ul {
    padding: 0;
    margin: 0;
    list-style: none;
}

.card {
    user-select: none;
}
.products {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .product-item {
        display: flex;
        position: relative;
        height: 5rem;
        justify-content: space-between;

        &::after {
            content: "";
            width: 100%;
            position: absolute;
            bottom: -1.5rem;
            border-bottom: 2px dashed var(--text-color-secondary);
        }

        .product-item-left {
            display: flex;
            flex-direction: row;
            gap: 0.75rem;
            .product-item-img {
                display: flex;
                aspect-ratio: 1/1;
                .img-none {
                    display: flex;
                    width: 100%;
                    justify-content: center;
                    align-items: center;
                    background-color: var(--surface-ground-darker);
                    border-radius: var(--border-radius);

                    & > span {
                        color: var(--text-color-secondary);
                    }
                }
            }

            .product-item-name {
                text-transform: capitalize;
                max-width: 8.5rem;
            }
        }

        .product-item-right {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            .product-item-price {
                display: flex;
                justify-content: end;

                span {
                    text-align: right;
                }
            }
        }
    }
}
</style>
