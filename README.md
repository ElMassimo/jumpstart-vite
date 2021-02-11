<h1 align="center">
  <a href="https://vite-ruby.netlify.app/">
    <img src="https://raw.githubusercontent.com/ElMassimo/vite_ruby/main/docs/public/logo.svg" width="200px"/>
  </a>

  <br>

  <a href="https://github.com/excid3/jumpstart">Jumpstart Rails</a>
  with
  <a href="https://vite-ruby.netlify.app/">Vite</a>

  <br>

  <p align="center">
    <a href="https://github.com/ElMassimo/vite_ruby/blob/master/LICENSE.txt">
      <img alt="License" src="https://img.shields.io/badge/license-MIT-428F7E.svg"/>
    </a>
  </p>
</h1>

[jumpstart]: https://github.com/excid3/jumpstart
[pro]: https://jumpstartrails.com
[vite_rails]: https://github.com/ElMassimo/vite_rails/tree/main/vite_rails
[esbuild]: https://github.com/evanw/esbuild
[significantly faster]: https://github.com/evanw/esbuild#why
[no bundling]: https://vitejs.dev/guide/introduction.html#the-problem
[bundling]: https://vitejs.dev/guide/introduction.html#why-bundle-for-production

This repo is a fork of the [__Jumpstart Rails__][jumpstart] template, which is
like Laravel Spark, for Rails.

This fork replaces webpacker with [__Vite Rails__][vite_rails], and extends the
basic setup to include a working Stimulus example and Hotwire integration.

## Features ⚡️

- 💡 Instant server start
- ⚡️ Blazing fast hot reload
- 🚀 Stimulus + Turbo Hotwire
- [And more!][jumpstart]

## Installation 💿

```bash
rails new myapp -d postgresql -m https://raw.githubusercontent.com/ElMassimo/jumpstart-vite/master/template.rb
```

For the rest of the instructions, head to [Jumpstart Rails][jumpstart].

## Video Comparison 🎥

### Webpacker

Installing the vanilla Jumpstart template takes 5 minutes, be prepared to watch
`node-sass` spin for a while, along with all the webpack dependencies.

<img width="350" alt="jumpstart-webpacker-node-sass" src="https://user-images.githubusercontent.com/1158253/107692177-2e6bc200-6c8b-11eb-8943-c03a2f3a5023.png"><img width="480" alt="jumpstart-webpacker-installation" src="https://user-images.githubusercontent.com/1158253/107692176-2e6bc200-6c8b-11eb-9511-69124f6bf844.png">

Once it's installed, and we have run `bin/rake db:create db:migrate`, we'll start it twice:

<a href="https://user-images.githubusercontent.com/1158253/107692172-2ca1fe80-6c8b-11eb-9e2b-d44c069a45b0.mp4" target="_blank" rel="noreferrer">
  <img width="828" alt="Screen Shot 2021-02-11 at 17 21 03" src="https://user-images.githubusercontent.com/1158253/107694027-a1763800-6c8d-11eb-935a-76facdaba764.png">
</a>

Cold start is particularly slow, and it locks Rails rendering.

<br/>
<br/>

### Vite ⚡️

Installing the Jumpstart template with Vite takes 1 minute.

<img width="359" alt="jumpstart-vite-installation" src="https://user-images.githubusercontent.com/1158253/107692180-2f045880-6c8b-11eb-9fbe-8289100d22b8.png">

Once it's installed, and we have run `bin/rake db:create db:migrate`, we'll start it twice:

<a href="https://user-images.githubusercontent.com/1158253/107692148-2744b400-6c8b-11eb-833a-7a7d4e46e6be.mp4" target="_blank" rel="noreferrer">
  <img width="828" alt="Screen Shot 2021-02-11 at 17 21 25" src="https://user-images.githubusercontent.com/1158253/107694019-9e7b4780-6c8d-11eb-96da-d1e65f3471a1.png">
</a>

Loads only 9 seconds after `foreman start`, and is also running a Stimulus example.

Subsequent loads are significantly faster.

<br/>

## How does it work? 🤔

Vite is powered by [esbuild], which can process files [significantly faster] than Webpack.

Vite [does not bundle your code during development][no bundling], which means
as your app grows, the dev server will still start fast, and your changes will
continue be __updated instantly__.

In production, Vite [bundles your code][bundling] with tree-shaking, lazy-loading,
and common chunk splitting out of the box, to achieve optimal loading performance.

## Special Thanks 🙌

- [Jumpstart Rails][jumpstart]: 👉 Have in mind they have also built [Jumpstart Pro][pro] which also includes payments with Stripe & Braintree, team accounts, TailwindCSS, and much more.
