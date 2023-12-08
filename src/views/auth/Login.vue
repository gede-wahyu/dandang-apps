<template>
    <div class="login-wrapper">
        <div class="apps">dandang apps</div>
        <div class="login-card">
            <form @submit.prevent="onSubmit()">
                <div class="login-card-header">
                    <h5>Masuk</h5>
                    <span>Masuk ke akun anda untuk melanjutkan.</span>
                </div>
                <div class="login-card-form">
                    <div>
                        <label for="username">Username / Email</label>
                        <span class="d-sideicon-set">
                            <span class="material-symbols-outlined">
                                person
                            </span>
                            <InputText
                                v-model="username"
                                v-bind="usernameAttrs"
                                inputId="username"
                                class="d-input-iconleft"
                                style="width: 100%"
                            />
                        </span>
                        <small class="d-invalid">{{
                            errors.username || "&nbsp"
                        }}</small>
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <span class="d-sideicon-set">
                            <span class="material-symbols-outlined">
                                lock
                            </span>
                            <InputPassword
                                v-model="password"
                                v-bind="passwordAttrs"
                                inputId="password"
                                inputClass="d-input-iconleft"
                                style="width: 100%"
                            />
                        </span>
                        <small class="d-invalid">{{
                            errors.password || "&nbsp"
                        }}</small>
                    </div>
                </div>
                <div class="login-card-footer">
                    <Button
                        v-if="authStore.users < 1"
                        type="submit"
                        icon="login"
                        label="Masuk"
                        disabled
                    />
                    <Button v-else type="submit" icon="login" label="Masuk" />
                </div>
            </form>
        </div>
        <div class="footer">
            <span>Omah IT</span>
            <div class="contact">
                <a
                    tabindex="-1"
                    href="https://www.linkedin.com/in/i-gede-wahyu-sedana/"
                    ><i class="pi pi-linkedin"
                /></a>
                <span>|</span>
                <a tabindex="-1" href="https://github.com/gede-wahyu"
                    ><i class="pi pi-github"
                /></a>
                <span>|</span>
                <a
                    tabindex="-1"
                    href="https://www.linkedin.com/in/thomas-edwin-suryo-prayogo-02670a212/"
                    ><i class="pi pi-linkedin"
                /></a>
                <span>|</span>
                <a tabindex="-1" href="https://github.com/Thomasborn"
                    ><i class="pi pi-github"
                /></a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/AuthStore";
import { useForm } from "vee-validate";
import * as yup from "yup";

const router = useRouter();
const authStore = useAuthStore();
const { errors, handleSubmit, defineField } = useForm({
    validationSchema: yup.object({
        username: yup.string().required("username wajib diisi"),
        password: yup
            .string()
            .min(6, "minimal 6 karakter")
            .required("password wajib diisi"),
    }),
});
const [username, usernameAttrs] = defineField("username");
const [password, passwordAttrs] = defineField("password");

onBeforeMount(async () => {
    await authStore.getUsers();
});

const onSubmit = handleSubmit(() => {
    let auth = authStore.login(username.value, password.value);
    if (auth.authenticated) {
        router.push({ name: "home" });
    } else {
        console.log("login gagal");
    }
});

//
</script>

<style scoped lang="scss">
.login-wrapper {
    width: 100vw;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 1.5rem;
    background: linear-gradient((to right bottom, #46c4ff, #58e0a9));

    .apps {
        padding-top: 2rem;
        text-transform: uppercase;
        font-size: 0.75rem;
        font-weight: 600;
        text-align: center;
    }

    .footer {
        padding-bottom: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.5rem;
        text-align: center;
        text-transform: uppercase;

        & > span {
            font-size: 0.75rem;
            font-weight: 600;
        }
        .contact {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 0.5rem;
            a,
            span {
                color: var(--text-color);
            }
        }
    }

    .login-card {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 1.5rem;
        background: var(--surface-card);
        border-radius: var(--border-radius);

        .login-card-header {
            h5 {
                margin-bottom: 1rem;
                padding-top: 1rem;
                text-align: center;
            }
            span {
                color: var(--text-color-secondary);
                display: none;
            }
        }
        .login-card-form {
            display: flex;
            flex-direction: column;
            padding: 1rem 0;

            div {
                display: flex;
                flex-direction: column;

                label {
                    margin-bottom: 0.5rem;
                }
                small {
                    margin-top: 3px;
                    text-align: end;
                }
            }
        }
        .login-card-footer {
            padding: 1rem 0;
            display: flex;
            justify-content: center;

            button {
                width: 8rem;
            }
        }
    }
}
/** tablet */
@media screen and (min-width: 768px) {
    .login-wrapper {
        padding: 0 12rem;
    }
}
/** smaller laptop */
@media screen and (min-width: 992px) {
    .login-wrapper {
        padding: 0 24rem;
    }
}
/** wider laptop */
@media screen and (min-width: 1200px) {
    .login-wrapper {
        padding: 0 30rem;
    }
}
/** desktop */
@media screen and (min-width: 1400px) {
    .login-wrapper {
        padding: 0 34rem;
    }
}
</style>
