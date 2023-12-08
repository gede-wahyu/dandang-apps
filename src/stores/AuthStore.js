import { defineStore } from "pinia";

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        auth: {
            authenticated: false,
            user: null
        },
        users: [],
        isLoading: false
    }),
    getters: {},
    actions: {
        async getUsers() {
            this.isLoading = true;
            const res = await fetch("https://my-json-server.typicode.com/gede-wahyu/dandang-api/users");
            const data = await res.json();
            this.users = data;
            this.isLoading = false;
        },

        login(username, password) {
            let user = this.users.find((user) => user.username === username && user.password === password)
            if(user) {
                this.auth.authenticated = true;
                this.auth.user = user;
                return {
                    authenticated: true,
                    role: user.id_role,
                    user: user
                }
            }
            else {
                this.auth.authenticated = false;
                return {
                    authenticated: false,
                    message: "Wrong credential"
                }
            }
        },

        logout() {
            this.auth.authenticated=false
            this.users=null
        }
    }
})