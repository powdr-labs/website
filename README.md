# Powdr Labs Website

## Installation

```bash
yarn
```

Please note, that if you are using Windows, you may need to run:

```bash
$env:PWD = $(Get-Location).Path
```

## Development

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Edit the layout in `app` or content in `data`. With live reloading, the pages auto-updates as you edit them.

## Build

Run:

```sh
$ EXPORT=1 UNOPTIMIZED=1 yarn build
```

If you're facing Prettier issues on build, run

```
yarn prettier --write .
```

and build after that.

## License

[MIT](LICENSE)

Based on [tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog)
