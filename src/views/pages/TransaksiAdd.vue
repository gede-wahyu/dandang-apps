<template>
    <div class="card">
        <h5 style="margin-bottom: 1rem; padding: 1.5rem">Pilih Produk</h5>
        <!-- <Button label="Help" @click="addProductOfCart(2)" /> -->
        <ul class="products">
            <div v-for="(product, index) in products">
                <li
                    class="product-item"
                    :class="{ 'product-item-marked': checkCart(product.key) }"
                >
                    <div class="product-item-left">
                        <div class="product-item-name">
                            <span>{{ product.name }}</span>
                        </div>
                        <!-- <div class="product-item-rank">
                            <Tag label="Terlaris No.1" severity="warning" />
                        </div> -->
                        <div class="product-item-stock">
                            <span
                                >Terjual
                                <span class="product-item-stock-number">{{
                                    Math.floor(Math.random() * 23) + 1
                                }}</span>
                                sisa stok
                                <span class="product-item-stock-number"
                                    >100</span
                                >
                                pcs</span
                            >
                        </div>
                        <div class="product-item-variant">
                            <Tag
                                v-for="item in product.packaging"
                                :label="`${item.size}${
                                    item.uom === 'grams' ? 'gr' : item.uom
                                }`"
                            />
                        </div>
                        <div class="product-item-price">
                            <span>{{ priceRange(product.packaging) }}</span>
                        </div>
                    </div>
                    <div class="product-item-right">
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
                        <div class="product-item-button">
                            <Button
                                @click="onSelectProduct(index)"
                                label="Tambah"
                                :class="{ hidden: checkCart(product.key) }"
                            />
                            <div
                                class="product-item-button-one-var"
                                v-if="product.packaging.length === 1"
                                :class="{ hidden: !checkCart(product.key) }"
                            >
                                <Button
                                    icon="remove"
                                    @click.prevent="
                                        removeProductOfCart(product.key)
                                    "
                                    style="padding: 0.5rem"
                                />
                                <span>{{
                                    checkCart(product.key)
                                        ? checkCart(product.key).amount
                                        : 0
                                }}</span>
                                <Button
                                    icon="add"
                                    @click.prevent="
                                        addProductOfCart(product.key)
                                    "
                                    style="padding: 0.5rem"
                                />
                            </div>
                            <div
                                class="product-item-button-many-var"
                                v-else
                                :class="{ hidden: !checkCart(product.key) }"
                            >
                                <Button
                                    icon="edit_note"
                                    :label="
                                        checkCart(product.key)
                                            ? checkCart(product.key).amount +
                                              ' item'
                                            : 0 + ' item'
                                    "
                                    outline
                                />
                            </div>
                        </div>
                    </div>
                </li>
            </div>
        </ul>
    </div>

    <div class="cart-wrapper">
        <div class="cart" role="button" tabindex="-1">
            <div class="cart-amount-item">
                <span class="material-symbols-outlined"> shopping_cart </span>
                <span
                    >Total
                    {{
                        cart.length ? cart.reduce((p, c) => p + c.amount, 0) : 0
                    }}
                    item</span
                >
            </div>
            <div class="cart-amount-price">
                {{
                    cart.length
                        ? new Intl.NumberFormat("id-ID", {
                              style: "currency",
                              currency: "IDR",
                          }).format(
                              cart.reduce((p, c) => p + c.amount * c.price, 0)
                          )
                        : 0
                }}
            </div>
        </div>
    </div>

    <Modal v-model:visible="visible" navType="back" :modalStyle="modalStyle">
        <template #header>{{ products[productIndex].name }}</template>
        <template #footer>
            <div class="summ">
                <div class="total-item">
                    {{ `Total ( ${amount} ) produk` }}
                </div>
                <div class="total-price">
                    {{
                        model.price
                            ? new Intl.NumberFormat("id-ID", {
                                  style: "currency",
                                  currency: "IDR",
                              }).format(amount * model.price)
                            : 0
                    }}
                </div>
            </div>
            <div class="add-to-cart-label">
                <span class="label">Jumlah pembelian</span>
                <div class="amount-set">
                    <Button
                        icon="remove"
                        outline
                        rounded
                        style="padding: 0.4rem"
                        @click.prevent="if (amount > 1 && model.size) amount--;"
                    />
                    <div class="amount">
                        <InputNumber
                            v-model="amount"
                            inputId="amount"
                            tabindex="-1"
                        />
                    </div>
                    <Button
                        icon="add"
                        outline
                        rounded
                        style="padding: 0.4rem"
                        @click.prevent="if (model.size) amount++;"
                    />
                </div>
            </div>
            <div class="add-to-cart-button">
                <Button
                    @click.prevent="addToCart"
                    label="Tambah"
                    icon="shopping_cart"
                    class="flex w-full"
                    tabindex="-1"
                    style="padding: 1rem"
                />
            </div>
        </template>

        <div class="select-variant">
            <div class="title">Pilih varian</div>
            <div class="options">
                <div
                    v-for="(_model, index) in products[productIndex].packaging"
                    class="options-variant"
                >
                    <RadioButton
                        name="variant"
                        :value="_model"
                        v-model="model"
                        :inputId="`variant-${index}`"
                        :checked="model === _model"
                    />
                    <label :for="`variant-${index}`">
                        <span>{{ `${_model.size} ${_model.uom}` }}</span>
                        <span>{{
                            new Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR",
                            }).format(_model.price)
                        }}</span>
                    </label>
                </div>
            </div>
        </div>

        <!-- TODO: DELETE THIS WHEN FINISHED -->
        <!-- <pre>{{
            { key, name, amount, model, total: amount * model.price }
        }}</pre> -->
    </Modal>
</template>

<script setup>
import { useProductStore } from "../../stores/ProductStore";
import { ref, onBeforeMount } from "vue";

const productStore = useProductStore();
const products = ref([]);
const visible = ref(false);
const modalStyle = ref({
    position: "fixed",
    bottom: "-1rem",
    height: "auto",
    width: "100%",
    "padding-bottom": "2.5rem",
});

const key = ref("");
const name = ref("");
const amount = ref(null);
const model = ref({});

const productIndex = ref(null);
const cart = ref([]);

onBeforeMount(async () => {
    await productStore.getProducts();
    products.value = productStore.products;
});

const onSelectProduct = (index) => {
    /** set inital value on select a product */
    key.value = products.value[index].key;
    name.value = products.value[index].name;
    amount.value = 1;
    model.value = products.value[index].packaging[0];

    /** pass the index of selected product and open the modal */
    productIndex.value = index;
    visible.value = true;
};

const addToCart = () => {
    /** validating before push to cart */
    if (!key.value) return;
    if (!name.value) return;
    if (isNaN(amount.value)) return;
    if (amount.value < 1) return;
    if (!model.value.size) return;
    if (!model.value.uom) return;
    if (!model.value.price) return;

    /** assign to cart */
    cart.value.push({
        key: key.value,
        name: name.value,
        amount: amount.value,
        size: model.value.size,
        uom: model.value.uom,
        price: model.value.price,
    });

    /** close the modal */
    visible.value = false;
    console.log(cart.value);
};

const checkCart = (key) => {
    if (cart.value.length < 1) return;
    let foundProduct = cart.value.find((p) => p.key === key);
    if (!foundProduct) return false;
    if (foundProduct) return foundProduct;
};

const addProductOfCart = (key) => {
    let cartIndex = cart.value.map((item) => item.key).indexOf(key);
    cart.value[cartIndex].amount++;
};
const removeProductOfCart = (key) => {
    let cartIndex = cart.value.map((item) => item.key).indexOf(key);
    if (cart.value[cartIndex].amount < 2) {
        cart.value.splice(cartIndex, 1);
        return;
    }
    cart.value[cartIndex].amount--;
};

const priceRange = (items) => {
    let lowest = new Intl.NumberFormat("id-ID").format(
        items.reduce(
            (min, p) => (p.price < min ? p.price : min),
            items[0].price
        )
    );
    let higest = new Intl.NumberFormat("id-ID").format(
        items.reduce(
            (min, p) => (p.price > min ? p.price : min),
            items[0].price
        )
    );
    if (lowest === higest) return lowest;
    return `${lowest} - ${higest}`;
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
    padding: 0;
}

.products {
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;

    div:last-child .product-item::after {
        border-bottom: 2px dashed var(--surface-input-border);
    }

    div:first-child .product-item::before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: calc(85% / 2 * -1);
        width: 85%;
        border-top: 2px dashed var(--surface-input-border);
    }

    .product-item {
        display: flex;
        position: relative;
        justify-content: space-between;
        padding: 1.5rem 1.5rem 1.5rem 2rem;
        transition: background-color 0.2s ease;

        &:hover {
            background-color: var(--primary-a0);
        }

        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            margin-left: calc(85% / 2 * -1);
            width: 85%;
            border-bottom: 2px dashed var(--surface-input-border);
        }

        .product-item-left {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .product-item-name {
                text-transform: capitalize;
                max-width: 10rem;
                font-weight: 500;
            }

            .product-item-rank {
                font-size: 0.8rem;
                color: var(--text-color-secondary);
            }

            .product-item-stock {
                font-size: 0.8rem;
                color: var(--text-color-secondary);

                .product-item-stock-number {
                    font-weight: 500;
                    color: var(--text-color);
                }
            }

            .product-item-variant {
                display: flex;
                gap: 0.3rem;
            }

            .product-item-price {
                font-weight: 500;
            }
        }

        .product-item-right {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;

            .product-item-img {
                display: flex;
                aspect-ratio: 7/6;
                width: 6rem;

                .img-none {
                    display: flex;
                    width: 100%;
                    justify-content: center;
                    align-items: center;
                    background-color: var(--surface-ground-darker);
                    border-radius: var(--border-radius);
                    border: 1px solid var(--surface-input-border);

                    & > span {
                        color: var(--text-color-secondary);
                    }
                }
            }

            .product-item-button {
                display: flex;
                align-items: center;
                justify-content: center;
                & > button {
                    width: 100%;
                }
                .product-item-button-one-var {
                    span {
                        display: inline-block;
                        padding: 0 0.5rem;
                        width: 2rem;
                        text-align: center;
                    }
                }
                .product-item-button-many-var {
                    width: 100%;
                }
            }
        }
    }

    .product-item-marked {
        background-color: var(--primary-a1);
        .product-item-name {
            color: var(--primary-600);
        }
    }
}

.select-variant {
    user-select: none;

    .title {
        font-weight: 500;
        margin-bottom: 1rem;
    }

    .options {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        .options-variant {
            display: flex;
            gap: 0.5rem;

            label {
                display: flex;
                width: 100%;
                justify-content: space-between;
            }
        }
    }
}

.summ {
    display: flex;
    justify-content: space-between;
    padding-top: 1.5rem;
    border-top: 2px dashed var(--surface-input-border);
}

.add-to-cart-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 0 1.25rem 0;
    user-select: none;

    .amount-set {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        .amount {
            width: 2.5rem;

            input[type="number"] {
                width: 100%;
                padding: 0.5rem 0;
                border: none;
            }
        }
    }
}

.cart-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    padding: 0 1.25rem 1.5rem 1.25rem;

    .cart {
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 2rem;
        box-sizing: border-box;
        border-radius: var(--border-radius-2);
        box-shadow: var(--box-shadow-set);
        transition: all 0.2s ease;

        // <!-- Pilih style cart -->

        // GLASSMORPHISM
        // color: var(--text-primary);
        // background: var(--primary-a7);
        // border: 2px solid var(--primary-a7);
        // backdrop-filter: blur(15px);

        // OUTLINED
        // color: var(--primary);
        // background: var(--surface-card);
        // border: 2px solid var(--primary);

        // FILLED
        color: var(--text-primary);
        background: var(--primary);
        border: 1px solid var(--primary-200);

        &:hover {
            filter: brightness(90%);
        }
        &:active {
            filter: brightness(100%);
        }
        &:focus {
            outline: 3px solid var(--primary-a);
        }

        .cart-amount-item {
            display: flex;
            gap: 0.5rem;
            align-items: center;

            span:first-child {
                font-size: 1.5rem;
            }
        }
    }
}
</style>
