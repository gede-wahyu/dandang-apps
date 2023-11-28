<template>
    <div class="report">
        <div class="card report-item">
            <div class="report-item-left">
                <div class="report-item-icon">
                    <span class="material-symbols-outlined"> today </span>
                </div>
                <div class="report-item-text">
                    <span>Transaksi hari ini</span><span>Rp 576.000,00</span>
                </div>
            </div>
            <div class="report-item-percentage percentage-minus">-0.7%</div>
        </div>
        <div class="card report-item">
            <div class="report-item-left">
                <div class="report-item-icon">
                    <span class="material-symbols-outlined">
                        calendar_month
                    </span>
                </div>
                <div class="report-item-text">
                    <span>transaksi bulan ini</span><span>Rp 4.234.000,00</span>
                </div>
            </div>
            <div class="report-item-percentage percentage-plus">+15%</div>
        </div>
    </div>

    <div class="layout-menu">
        <div v-for="grid in menuItems" class="layout-menu-grid">
            <router-link
                v-for="item in grid"
                :to="item.to"
                @click="onModelClick($event, item)"
            >
                <div class="layout-menuitem">
                    <span
                        class="layout-menuitem-icon card material-symbols-outlined"
                        >{{ item.icon }}</span
                    >
                    <span class="layout-menuitem-text">{{ item.label }}</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useLayout } from "../layout/composables/layout";

const {
    layoutConfig,
    setActiveMenuItem,
    setActiveRootMenuItem,
    setDispPageName,
} = useLayout();

const model = ref([
    {
        label: "Produk Saya",
        icon: "local_mall",
        to: { name: "home-product-list" },
    },
    {
        label: "Buat Transaksi",
        icon: "shopping_cart",
        to: { name: "transaction-add" },
    },
    {
        label: "Semua Transaksi",
        icon: "paid",
        to: { name: "home-transaction-list" },
    },
    {
        label: "Transaksi Terjeda",
        icon: "pending_actions",
        to: { name: "home-transaction-delay" },
    },
    {
        label: "Distribusi",
        icon: "local_shipping",
        to: { name: "home-distribution-list" },
    },
    {
        label: "Saler",
        icon: "deployed_code_account",
        to: { name: "home-saler-list" },
    },
]);

const menuItems = computed(() => {
    let newArr = [];
    let _menuItems = model.value;

    while (_menuItems.length) {
        newArr.push(_menuItems.splice(0, 4));
    }

    return newArr;
});

const onModelClick = (event, model) => {
    setActiveMenuItem(model.to.name);
    setActiveRootMenuItem(...model.to.name.split("-"[0]));
    setDispPageName(model.label);
};

//
</script>

<style scoped lang="scss">
.report {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .report-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .report-item-left {
            display: flex;
            flex-direction: row;
            gap: 1rem;
        }
        .report-item-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--text-color-secondary);

            span {
                font-size: 1.75rem;
            }
        }
        .report-item-text {
            display: flex;
            flex-direction: column;
            gap: 0.2rem;

            span:first-of-type {
                color: var(--text-color-secondary);
                text-transform: uppercase;
                font-size: 0.75rem;
            }

            span:last-of-type {
                font-weight: 500;
            }
        }
        .percentage-minus {
            color: var(--red-600);
        }
        .percentage-plus {
            color: var(--green-600);
        }
    }
}

.layout-menu {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
    .layout-menu-grid {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        a {
            .layout-menuitem {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 0.5rem;
                width: 4rem;
                .layout-menuitem-icon {
                    width: 100%;
                    height: 4rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: var(--primary-a);
                    // background: linear-gradient(
                    //     to bottom left,
                    //     var(--primary-a),
                    //     var(--primary-b)
                    // );

                    &:hover {
                        filter: brightness(85%);
                    }
                    &:active {
                        filter: brightness(100%);
                    }
                }
                span.layout-menuitem-icon {
                    font-size: 2rem;
                    color: var(--text-primary);
                }
                .layout-menuitem-text {
                    color: var(--text-color-secondary);
                    font-size: 0.8rem;
                    text-align: center;
                }
            }
        }
    }
    .layout-menu-grid:last-child {
        display: inline-flex;
        justify-content: start;
        /* width of menuitem times menuitem-n divide by the gap-n */
        gap: calc((100% - (4rem * 4)) / 3);
    }
}
</style>
