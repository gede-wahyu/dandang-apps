import { defineStore } from "pinia";

export const useTransactionStore = defineStore('transactionStore', {
    state: () => ({
        transaction: [],
        isLoading: false
    }),
    getters: {},
    actions: {
        addTransaction(payload) {
            this.transaction.push(payload)
        },
        async postTransaction(payload) {
            /** post transaction to API */
            console.log('post: ', payload)
        }
    }
})