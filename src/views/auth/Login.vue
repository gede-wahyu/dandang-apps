<template>
    <div class="login-wrapper">
        <div class="login-card">
            <form @submit.prevent="onSubmit()">
                <div class="login-card-header">
                    <h5>Masuk</h5>
                    <span>Masuk ke akun anda untuk melanjutkan.</span>
                </div>
                <div class="login-card-form">
                    <div>
                        <label for="email">Email</label>
                        <span class="d-sideicon-set">
                            <span class="material-symbols-outlined">
                                email
                            </span>
                            <InputText
                                v-model="email"
                                v-bind="emailAttrs"
                                inputId="email"
                                class="d-input-iconleft"
                                style="width: 100%"
                            />
                        </span>
                        <small class="d-invalid">{{
                            errors.email || "&nbsp"
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
                    <Button type="submit" icon="login" label="Masuk" />
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";

const { errors, handleSubmit, defineField } = useForm({
    validationSchema: yup.object({
        email: yup
            .string()
            .email("email harus valid")
            .required("email wajib diisi"),
        password: yup
            .string()
            .min(6, "minimal 6 karakter")
            .required("password wajib diisi"),
    }),
});
const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");

const onSubmit = handleSubmit(() => {
    console.log(email.value, password.value);
});

//
</script>

<style scoped lang="scss">
.login-wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    background: linear-gradient((to right bottom, #46c4ff, #58e0a9));

    .login-card {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 1.5rem;
        background: var(--surface-card);
        border-radius: var(--border-radius);

        .login-card-header {
            h5 {
                margin: 0;
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
            gap: 0.5rem;

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
</style>
