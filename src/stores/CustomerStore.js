import { defineStore } from "pinia"

export const useCustomerStore = defineStore('customerStore', {
    state: () => ({
        customers: [],
        isLoading: false
    }),
    getters: {},
    actions: {
        async getCustomers() {
            this.isLoading = true;
            const res = await fetch("https://my-json-server.typicode.com/gede-wahyu/dandang-api/customers");
            const data = await res.json();
            this.customers = data;
            this.isLoading = false;
        },
    }
})