import { defineStore } from "pinia";

export const useLayoutStore = defineStore("layoutStore", {
    state: () => ({
        layoutConfig: {
            theme: "light-theme",
            activeMenuItem: "",
            activePageName: "",
        },
        layoutState: {
            backButtonVisible: false,
            toggleBackWindowButton: false,
        },
    }),
    actions: {
        changeTheme(theme) {
            this.layoutConfig.theme = theme;
        },
        setActiveMenuItem(item) {
            this.layoutConfig.activeMenuItem = item;
        },
        setActivePageName(name) {
            this.layoutConfig.activePageName = name;
        },
        getActivePageName(routeName, menuItem) {
            for (let i in menuItem) {
                if (routeName === menuItem[i].to.name) {
                    console.log(menuItem[i].label);
                    return menuItem[i].label;
                }
                if (menuItem[i].children) {
                    for (let j in menuItem[i].children) {
                        if (routeName === menuItem[i].children[j].to.name) {
                            console.log(menuItem[i].children[j].label);
                            return menuItem[i].children[j].label;
                        }
                    }
                }
            }
        },
        onToggleBackWindowButtton() {
            if (this.layoutConfig.activeMenuItem === "home") {
                this.layoutState.toggleBackWindowButton = false;
            } else this.layoutState.toggleBackWindowButton = true;
        },
    },
});
