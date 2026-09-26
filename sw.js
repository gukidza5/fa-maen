// แคชหน้าแอปไว้ เปิดตอนเน็ตหลุดยังเห็นหน้า (ข้อมูลอากาศยังต้องใช้เน็ต)
const C="fa-v1";
self.addEventListener("install",e=>e.waitUntil(caches.open(C).then(c=>c.addAll(["./","index.html","manifest.json","icon.svg"]))));
self.addEventListener("fetch",e=>{
  if(new URL(e.request.url).origin!==location.origin)return;
  e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
});
