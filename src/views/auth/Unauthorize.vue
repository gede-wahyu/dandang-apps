<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>
<template>
    <div class="wrapper">
        <div class="apps">dandang apps</div>
        <div class="content">
            <span class="material-symbols-outlined"> warning </span>
            <span>Akses Tanpa Izin</span>
            <p>
                Mencoba mengakses konten yang berada diluar izin yang diberikan.
                Silakan menghubungi admin.
            </p>
            <div>
                <Button
                    label="Kembali"
                    @click="router.push({ name: 'home' })"
                />
            </div>
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

<style scoped lang="scss">
.wrapper {
    width: 100vw;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 1.5rem;
    background: linear-gradient((to right bottom, #46c4ff, #58e0a9));

    .content {
        color: var(--text-primary);
        text-align: center;
        span:first-child {
            display: block;
            font-size: 4rem;
            color: var(--color-danger-a8);
        }
        span:nth-child(2) {
            font-size: 2rem;
            font-weight: 600;
        }
        p {
            // display: inline-block;
            padding: 0 1rem;
            margin-top: 0.75rem;
            line-height: 1.5rem;
            font-size: 0.9rem;
        }
        div {
            display: flex;
            justify-content: center;
            margin-top: 1.5rem;
        }
    }

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
}
</style>
