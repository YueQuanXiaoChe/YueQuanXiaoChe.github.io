/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "277d0eb9bda686302ee5d5ef9a4afabe"
  },
  {
    "url": "assets/css/0.styles.2fbf6f8b.css",
    "revision": "2ed4c8df4ff33bc36857f179247b429c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b4468b68.js",
    "revision": "22d7eb9fe55aba7ca0da9a3a5469fc4e"
  },
  {
    "url": "assets/js/11.b2b3a759.js",
    "revision": "c544fe6f3c52b97e48bb4547c42151c0"
  },
  {
    "url": "assets/js/12.0d2e16b9.js",
    "revision": "017328146e914ffc584771bb42ca4539"
  },
  {
    "url": "assets/js/13.32edb07e.js",
    "revision": "60da7f5f3581d8a61c732d5b71a8a46f"
  },
  {
    "url": "assets/js/14.c9f46244.js",
    "revision": "74e484b207d979c87b150011ed9c6e95"
  },
  {
    "url": "assets/js/15.ccbfee22.js",
    "revision": "5c99bb42cd4a6ca4e8f5f80a014a4091"
  },
  {
    "url": "assets/js/16.6662129d.js",
    "revision": "6078a010426ac390f99631af15a0d3f8"
  },
  {
    "url": "assets/js/17.e885b0fc.js",
    "revision": "aacfb4264299dddd6496c57b432a1054"
  },
  {
    "url": "assets/js/18.5da99f7f.js",
    "revision": "bc73942bc9e69c568a5da84507e3bb42"
  },
  {
    "url": "assets/js/19.5f89ae6f.js",
    "revision": "05f12adc6430964d12016c6b115c24e9"
  },
  {
    "url": "assets/js/2.8c6a5a82.js",
    "revision": "04191a059203297ee65f7a91c576ac94"
  },
  {
    "url": "assets/js/20.e152c9a1.js",
    "revision": "7c564892a86733287015dfe33debe50c"
  },
  {
    "url": "assets/js/21.218799b0.js",
    "revision": "f275bb2e9c249828cb5ab3c2ebc4b877"
  },
  {
    "url": "assets/js/3.e2c49864.js",
    "revision": "3642d3d983da028a140d7422e56161e3"
  },
  {
    "url": "assets/js/4.f9249acc.js",
    "revision": "ad69f0357c50d721fb06e5730e631f2e"
  },
  {
    "url": "assets/js/5.5c98e1c1.js",
    "revision": "57413cc576281d53e93c0f71c58a7fd9"
  },
  {
    "url": "assets/js/6.259a75a7.js",
    "revision": "0d04602bd112610811d98daba0e9ace3"
  },
  {
    "url": "assets/js/7.aadc6782.js",
    "revision": "a73bd1c0a97ce0410ad5b15bddc5d188"
  },
  {
    "url": "assets/js/8.ec86ca5b.js",
    "revision": "4881709f4a8da9f5e8fbaf3ec74f9c4a"
  },
  {
    "url": "assets/js/9.5e7c1173.js",
    "revision": "cf57383906256a3b1208368747946555"
  },
  {
    "url": "assets/js/app.40464460.js",
    "revision": "2f53089a660cca2786686aab303d3d95"
  },
  {
    "url": "blog/git/index.html",
    "revision": "c55be22d80834043bfd4dc064ba73aef"
  },
  {
    "url": "blog/java/index.html",
    "revision": "6109f5067cc788a3d6fba3acd7521164"
  },
  {
    "url": "blog/javascript/index.html",
    "revision": "29eecd5ba0ea46ba6126e6d57a719f80"
  },
  {
    "url": "blog/javascript/prototype.html",
    "revision": "8606a752111216d65cc9e86561e17eb6"
  },
  {
    "url": "blog/javascript/varHoisting.html",
    "revision": "caee4436a2752372a30b9b920702be97"
  },
  {
    "url": "blog/lifeRecord/index.html",
    "revision": "e97afc58dc4af203295170b924869f5c"
  },
  {
    "url": "blog/lifeRecord/record2019.html",
    "revision": "3c0cc2a667b2da0181124d5e57aeb893"
  },
  {
    "url": "blog/lifeRecord/word.html",
    "revision": "98db85b978f40f73da122cbcf0c76a67"
  },
  {
    "url": "blog/python/index.html",
    "revision": "f3d18884e226f30320e82bfa34a7ed81"
  },
  {
    "url": "blog/typescript/index.html",
    "revision": "b03ab3b80658997d92f8571405a5b446"
  },
  {
    "url": "friends/index.html",
    "revision": "bc4276f26b2b05cddf38f126058a171c"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "7ccee15eca8bb23a6b2ea1236f2b6429"
  },
  {
    "url": "project/index.html",
    "revision": "2474ffd5d8fcc26af06df522164175ce"
  },
  {
    "url": "resume/index.html",
    "revision": "01a5880fbdb0f409bc15b2827ce8e454"
  },
  {
    "url": "sharing/bookSharing/index.html",
    "revision": "a1a7ac688b1ed4c69c4683e1664ed0fb"
  },
  {
    "url": "sharing/softwareSharing/index.html",
    "revision": "156aa8bceeb374d03550e7383a9b404c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
