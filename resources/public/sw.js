const cacheName = 'app-v1';
const staticAssets = [
  './',
  './index.html',
  './styles/main.css',
  './cljs-out/dev-main.js',

  './icons/cultures/arab.svg',
  './icons/cultures/brahma.svg',
  './icons/cultures/communist.svg',
  './icons/cultures/cowboy-hat.svg',
  './icons/cultures/dragon.svg',
  './icons/cultures/fuji.svg',
  './icons/cultures/indian.svg',
  './icons/cultures/maracas.svg',
  './icons/cultures/mask.svg',
  './icons/cultures/monk.svg',
  './icons/cultures/peasant.svg',
  './icons/cultures/shield.svg',

  './icons/emotions/alert.svg',
  './icons/emotions/amulet.svg',
  './icons/emotions/angry-pineapple.svg',
  './icons/emotions/artificial-intelligence.svg',
  './icons/emotions/attack.svg',
  './icons/emotions/balloon.svg',
  './icons/emotions/battery.svg',
  './icons/emotions/bird.svg',
  './icons/emotions/black-cat.svg',
  './icons/emotions/book.svg',
  './icons/emotions/brain.svg',
  './icons/emotions/chicken.svg',
  './icons/emotions/christmas.svg',
  './icons/emotions/cold.svg',
  './icons/emotions/collaboration.svg',
  './icons/emotions/creativity.svg',
  './icons/emotions/crossed-fingers.svg',
  './icons/emotions/crown.svg',
  './icons/emotions/crying.svg',
  './icons/emotions/desire.svg',
  './icons/emotions/devil.svg',
  './icons/emotions/dog.svg',
  './icons/emotions/evil.svg',
  './icons/emotions/excited.svg',
  './icons/emotions/family.svg',
  './icons/emotions/feminism.svg',
  './icons/emotions/fertilize.svg',
  './icons/emotions/fist.svg',
  './icons/emotions/flamingo.svg',
  './icons/emotions/flower.svg',
  './icons/emotions/freedom.svg',
  './icons/emotions/fun.svg',
  './icons/emotions/garden.svg',
  './icons/emotions/god.svg',
  './icons/emotions/gods.svg',
  './icons/emotions/gratitude.svg',
  './icons/emotions/gravestone.svg',
  './icons/emotions/happy-pineapple.svg',
  './icons/emotions/harvest.svg',
  './icons/emotions/healthy.svg',
  './icons/emotions/heart.svg',
  './icons/emotions/heat.svg',
  './icons/emotions/heaven.svg',
  './icons/emotions/hit.svg',
  './icons/emotions/hug.svg',
  './icons/emotions/illness.svg',
  './icons/emotions/insight.svg',
  './icons/emotions/jealousy.svg',
  './icons/emotions/knight.svg',
  './icons/emotions/ladybug.svg',
  './icons/emotions/law.svg',
  './icons/emotions/leaves.svg',
  './icons/emotions/legal.svg',
  './icons/emotions/meditation.svg',
  './icons/emotions/mind.svg',
  './icons/emotions/money.svg',
  './icons/emotions/monk.svg',
  './icons/emotions/motivation.svg',
  './icons/emotions/mourning.svg',
  './icons/emotions/nail.svg',
  './icons/emotions/ouroboros.svg',
  './icons/emotions/owl.svg',
  './icons/emotions/peace.svg',
  './icons/emotions/plant.svg',
  './icons/emotions/power.svg',
  './icons/emotions/pray.svg',
  './icons/emotions/prize.svg',
  './icons/emotions/purity.svg',
  './icons/emotions/reason.svg',
  './icons/emotions/respect.svg',
  './icons/emotions/ring.svg',
  './icons/emotions/rocking-horse.svg',
  './icons/emotions/scared.svg',
  './icons/emotions/sexual.svg',
  './icons/emotions/shalat.svg',
  './icons/emotions/shamrock.svg',
  './icons/emotions/sherlock-holmes.svg',
  './icons/emotions/snowflake.svg',
  './icons/emotions/soil.svg',
  './icons/emotions/sun-glasses.svg',
  './icons/emotions/sunbathing.svg',
  './icons/emotions/toast.svg',
  './icons/emotions/trouble.svg',
  './icons/emotions/trust.svg',
  './icons/emotions/under-construction.svg',
  './icons/emotions/value.svg',
  './icons/emotions/violence.svg',
  './icons/emotions/visualize.svg',
  './icons/emotions/water.svg',
  './icons/emotions/yin-yang.svg',
];

self.addEventListener('install', async event => {
  const cache = await caches.open(cacheName); 
  await cache.addAll(staticAssets); 
});

self.addEventListener('fetch', event => {
  const req = event.request;
  event.respondWith(cacheFirst(req));
});

async function cacheFirst(req) {
  const cache = await caches.open(cacheName); 
  const cachedResponse = await cache.match(req); 
  return cachedResponse || fetch(req); 
}

