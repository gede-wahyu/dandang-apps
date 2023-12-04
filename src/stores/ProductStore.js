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
            // const res = await fetch("http://localhost:3001/products");
            const res = await fetch("https://my-json-server.typicode.com/gede-wahyu/dandang-api/products");
            const data = await res.json();

            this.products = data;
            this.loading = false;
        },
    },
});
