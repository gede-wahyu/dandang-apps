## Dandang apps

### Jump to

-   [How to Use the App](./HOWTOUSEAPP.md)

-   [Current Version](#current-version)

-   [Development Environment](#development-environment)

-   [Development Dependencies](#development-dependencies)

-   [Dependencies](#dependencies)

-   [Develop and Run Project Locally](#develop-and-run-project-locally)

-   [Expose Network and Preview on Other Devices](#expose-network-and-preview-on-other-devices)

### Current Version

-   current commit #19: 0.0.19 (mobile-support only)

### Development Environment

-   windows 11
-   visual studio code: 1.84.2
-   google chrome: 119.0.6045.200
-   my-json-server: my-json-server.typicode.com
-   nodejs: 20.9.0
-   git + github

### Development Dependencies

-   vite: 5.0.0
-   vitejs/plugin-vue: 4.5.0
-   sass: 1.69.5

### Dependencies

-   vue: 3.3.8
-   vue-router: 4.2.5
-   pinia: 2.1.7
-   primeicons: 6.0.1
-   vee-validate: 4.12.2
-   yup: 1.3.2

### Develop and Run Project Locally

1. clone from git using this code:

```
git clone https://github.com/gede-wahyu/dandang-apps.git
```

2. head to the repos

```
cd dandang-apps
```

3. install all dependencies on code editor terminal:

```
npm install
```

4. to start local server run this on terminal:

```
npm run dev
```

or

```
npx vite
```

### Expose Network and Preview on Other Devices

> [!NOTE]
> make sure all devices needed connected to the same wifi

1. start the local server

```
npm run host
```

or

```
npx vite --host
```

2. visit the link that appear in terminal on other devices

> [!TIP]
> if not working, visit this [link](https://www.youtube.com/watch?v=uRYHX4EwYYA) for tutorial
