import { defineStore } from "pinia";

export const useProductStore = defineStore("productStore", {
    state: () => ({
        products: [],
        loading: false,
    }),
    getters: {},
    actions: {
        async getProducts() {
            this.loading = true;
            const res = await fetch("http://localhost:3001/products");
            const data = await res.json();

            this.products = data;
            this.loading = false;
            // console.log("product state changed");
        },
    },
});
