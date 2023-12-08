<template>
    <div class="card">
        <h5>Pengaturan</h5>
        <div class="subheader">
            <span>Pilih Tone</span>
        </div>
        <div class="tone-select-group">
            <div v-for="option in options" class="tone-select-rad">
                <RadioButton
                    v-model="tone"
                    name="tone"
                    :inputId="`tone-${option}`"
                    :value="`tone-${option}`"
                    :tone="`tone-${option}`"
                />
                <label :for="`tone-${option}`">
                    <span>Tone {{ option }}</span>
                    <div
                        class="sample-tone"
                        :style="{ backgroundColor: `var(--tone-${option})` }"
                    ></div>
                </label>
            </div>
        </div>
        <div class="flex justify-content-end" style="margin-top: 2rem">
            <Button
                label="Save changes"
                @click="layoutStore.onChangeTone(tone)"
            />
        </div>
    </div>
    <div class="card" style="margin-top: 2rem">
        <div class="flex flex-col userinfo">
            <h5>User</h5>
            <div class="flex userinfo-item">
                <span>Nama</span>
                <span>{{ authStore.auth.user.name }}</span>
            </div>
            <div class="flex userinfo-item">
                <span>Username</span>
                <span>{{ authStore.auth.user.username }}</span>
            </div>
            <div class="flex userinfo-item">
                <span>Email</span>
                <span>{{ authStore.auth.user.email }}</span>
            </div>
            <div class="flex userinfo-item">
                <span>Role</span>
                <span>{{ authStore.auth.user.role }}</span>
            </div>
        </div>
        <div class="flex justify-content-end">
            <Button @click="logout()" icon="logout" label="Logout" />
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useLayoutStore } from "../../stores/LayoutStore";
import { useAuthStore } from "../../stores/AuthStore";
import { useRouter } from "vue-router";

const router = useRouter();
const authStore = useAuthStore();
const layoutStore = useLayoutStore();
const tone = ref(layoutStore.layoutConfig.tone);
const options = ref(["green", "blue", "orange", "purple", "red"]);

watch(
    () => layoutStore.layoutConfig.tone || layoutStore.layoutConfig.theme,
    () => {
        localStorage.setItem("layoutTone", layoutStore.layoutConfig.tone);
        localStorage.setItem("layoutTheme", layoutStore.layoutConfig.theme);
    }
);

const logout = () => {
    authStore.logout();
    router.push({ name: "login" });
};

//
</script>

<style scoped lang="scss">
.userinfo {
    margin-bottom: 2rem;
    .userinfo-item {
        span:first-of-type {
            display: inline-flex;
            width: 6rem;
            color: var(--text-color-secondary);
        }
        span:last-of-type::before {
            content: ":";
            color: var(--text-color-secondary);
            margin-right: 0.5rem;
        }
        &:first-of-type,
        &:last-of-type {
            span:last-of-type {
                text-transform: capitalize;
            }
        }
    }
}
.subheader {
    margin-bottom: 1rem;
}
.tone-select-group {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .tone-select-rad {
        display: flex;
        gap: 1rem;

        label {
            display: flex;
            gap: 0.5rem;
            .sample-tone {
                height: 1.5rem;
                width: 1.5rem;
                border-radius: 5px;
            }
        }
    }
}
</style>
