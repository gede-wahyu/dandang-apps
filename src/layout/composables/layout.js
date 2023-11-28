import { toRefs, reactive, computed } from "vue";

const layoutConfig = reactive({
    darkTheme: false,
    theme: "light-theme",
    pageDispName: "",
    activeRootMenuItem: "",
    activeMenuItem: "",
});

const layoutState = reactive({
    backButtonNavVisible: false,
    windowButtonNavVisible: false,
    bottombarMenuVisible: false,
    bottombarCartVisible: false,
    onAddNewTransPage: false,
});

export function useLayout() {
    const changeThemeSettings = (theme, darkTheme) => {
        layoutConfig.darkTheme = darkTheme;
        layoutConfig.theme = theme;
    };

    const setActiveMenuItem = (item) => {
        layoutConfig.activeMenuItem = item.value || item;
    };

    const setActiveRootMenuItem = (item) => {
        layoutConfig.activeRootMenuItem = item.value || item;
    };

    const setDispPageName = (name) => {
        layoutConfig.pageDispName = name.value || name;
    };

    const onBottombarUnactive = () => {
        if (layoutConfig.activeMenuItem === "transaksi-add") {
            layoutState.bottombarMenuVisible = false;
            layoutState.bottombarCartVisible = true;
        } else {
            layoutState.bottombarMenuVisible = true;
            layoutState.bottombarCartVisible = false;
        }
    };

    const onBackButtonActive = () => {
        if (layoutConfig.activeMenuItem !== "home") {
            layoutState.backButtonNavVisible = true;
            layoutState.windowButtonNavVisible = false;
        } else {
            layoutState.backButtonNavVisible = false;
            layoutState.windowButtonNavVisible = true;
        }
    };

    const isDarkTheme = computed(() => layoutConfig.darkTheme);

    return {
        layoutConfig: toRefs(layoutConfig),
        layoutState: toRefs(layoutState),
        changeThemeSettings,
        setActiveMenuItem,
        setActiveRootMenuItem,
        onBottombarUnactive,
        onBackButtonActive,
        setDispPageName,
        isDarkTheme,
    };
}
