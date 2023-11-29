import { defineStore } from "pinia";
import { menuItem } from "./MenuItemData";

export const useMenuItemStore = defineStore("menuItemStore", {
    state: () => ({
        // homeChildren: homeChildren,
        menuItem: menuItem,
    }),
    getters: {
        gridHomeChildren() {
            let newArr = [];
            let _menuItems = [];
            _menuItems.push(...this.menuItem[0].children);

            while (_menuItems.length) {
                newArr.push(_menuItems.splice(0, 4));
            }

            return newArr;
        },
    },
    actions: {},
});
