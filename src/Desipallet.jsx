import { useState, useEffect, useRef, useCallback } from "react";

// ─── SEO: inject meta tags once ──────────────────────────────────────────────
function useSEO() {
  useEffect(() => {
    document.title = "Desi pallet | Premium Wooden Pallet Manufacturer — Hyderabad, India";
    const metas = [
      { name: "description", content: "Desi pallet manufactures ISPM-15 certified wooden pallets in Hyderabad. Standard, Euro/EPAL, Export & Custom pallets. Pan-India delivery. 48-hour dispatch. Request a free quote today." },
      { name: "keywords", content: "wooden pallets, ISPM-15 pallets, export pallets, pallet manufacturer Hyderabad, Euro pallets, EPAL pallets, custom pallets India, heat treated pallets" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Desi pallet — Premium Wooden Pallet Manufacturer, Hyderabad" },
      { property: "og:description", content: "ISPM-15 certified. Custom built. 48H dispatch. Pan-India & worldwide delivery. Get a free quote now." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.Desi pallet.in" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Desi pallet | Wooden Pallet Manufacturer India" },
      { name: "twitter:description", content: "ISPM-15 certified wooden pallets. Custom sizes. Pan-India delivery. Request a quote today." },
      { name: "author", content: "Desi pallet, Hyderabad" },
      { name: "geo.region", content: "IN-TG" },
      { name: "geo.placename", content: "Hyderabad, Telangana, India" },
    ];
    const injected = [];
    metas.forEach(attrs => {
      const tag = document.createElement("meta");
      Object.entries(attrs).forEach(([k, v]) => tag.setAttribute(k, v));
      document.head.appendChild(tag);
      injected.push(tag);
    });
    // Canonical
    const canonical = document.createElement("link");
    canonical.rel = "canonical"; canonical.href = "https://www.Desi pallet.in";
    document.head.appendChild(canonical);
    injected.push(canonical);
    // Schema.org JSON-LD
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org", "@type": "LocalBusiness",
      "name": "Desi pallet", "url": "https://www.Desi pallet.in",
      "logo": "https://www.Desi pallet.in/logo.png",
      "description": "ISPM-15 certified wooden pallet manufacturer based in Hyderabad, India. Custom pallets, export pallets, Euro/EPAL pallets. Pan-India delivery.",
      "address": { "@type": "PostalAddress", "streetAddress": "IDA Jeedimetla", "addressLocality": "Hyderabad", "addressRegion": "Telangana", "postalCode": "500055", "addressCountry": "IN" },
      "telephone": "+914040062841", "email": "sales@Desi pallet.in",
      "openingHours": "Mo-Sa 09:00-18:00",
      "geo": { "@type": "GeoCoordinates", "latitude": 17.5093, "longitude": 78.4877 },
      "priceRange": "₹₹", "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Bank Transfer, UPI",
      "areaServed": "India",
      "sameAs": []
    });
    document.head.appendChild(schema);
    injected.push(schema);
    return () => injected.forEach(el => el.parentNode?.removeChild(el));
  }, []);
}

// ─── CSS injected once ───────────────────────────────────────────────────────
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;500;600&family=Barlow+Condensed:wght@400;500;600;700&display=swap');

:root {
  --ink:#1C1A17; --ink2:#2A2520; --amber:#D4880A; --amber-lt:#F0A820;
  --wood:#8B6F4E; --wood-lt:#C4A882; --wood-pale:#F0E6D0;
  --cream:#FAF7F2; --white:#FFFFFF; --border:#E8E0D4; --border2:#D4C8B8;
  --muted:#8A7A6A; --light:#F5F0E8;
}
*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; }
body { font-family:'Barlow',sans-serif; background:#FFFFFF; color:var(--ink); overflow-x:hidden; }

/* ── PRELOADER ── */
.pp-pre { position:fixed; inset:0; background:var(--ink); z-index:99999;
  display:flex; flex-direction:column; align-items:center; justify-content:center;
  transition:opacity .6s ease,visibility .6s ease; }
.pp-pre.done { opacity:0; visibility:hidden; pointer-events:none; }
.pp-pre-logo { font-family:'Bebas Neue',sans-serif; font-size:48px; letter-spacing:3px;
  color:#fff; margin-bottom:40px; }
.pp-pre-logo em { color:var(--amber); font-style:normal; }
.pp-pre-pallet { display:flex; flex-direction:column; gap:5px; margin-bottom:32px; }
.pp-plank { height:8px; border-radius:2px; background:var(--wood-lt); width:180px;
  transform:scaleX(0); transform-origin:left; }
.pp-plank:nth-child(1){animation:plankGrow .4s .2s ease forwards;}
.pp-plank:nth-child(2){animation:plankGrow .4s .45s ease forwards;}
.pp-plank:nth-child(3){animation:plankGrow .4s .7s ease forwards;}
.pp-support { display:flex; gap:40px; margin-top:5px; }
.pp-leg { width:30px; height:16px; border-radius:2px; background:var(--wood);
  transform:scaleY(0); transform-origin:top; }
.pp-leg:nth-child(1){animation:legGrow .3s .95s ease forwards;}
.pp-leg:nth-child(2){animation:legGrow .3s 1.05s ease forwards;}
.pp-leg:nth-child(3){animation:legGrow .3s 1.15s ease forwards;}
@keyframes plankGrow{to{transform:scaleX(1);}}
@keyframes legGrow{to{transform:scaleY(1);}}
.pp-pre-bar{width:180px;height:2px;background:rgba(255,255,255,.1);border-radius:2px;overflow:hidden;margin-top:16px;}
.pp-pre-fill{height:100%;background:var(--amber);border-radius:2px;animation:barFill 1.8s ease forwards;}
@keyframes barFill{from{width:0}to{width:100%}}
.pp-pre-txt{font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;
  text-transform:uppercase;color:rgba(255,255,255,.3);margin-top:10px;}

/* ── NAV ── */
.pp-nav { position:fixed; top:0; left:0; right:0; z-index:1000; padding:0 clamp(16px,5vw,60px);
  height:68px; display:grid; grid-template-columns:auto 1fr auto; align-items:center; gap:20px;
  background:rgba(255,255,255,.92); backdrop-filter:blur(16px);
  border-bottom:1px solid var(--border); transition:box-shadow .3s; }
.pp-nav.scrolled { box-shadow:0 2px 30px rgba(28,26,23,.08); }
.pp-logo { display:flex; align-items:center; gap:12px; text-decoration:none; }
.pp-logo-icon { display:flex; flex-direction:column; gap:3.5px; width:32px; }
.pp-logo-icon b { display:block; height:5px; border-radius:1.5px; }
.pp-logo-icon b:nth-child(1){background:var(--amber);}
.pp-logo-icon b:nth-child(2){background:var(--wood);margin:0 4px;}
.pp-logo-icon b:nth-child(3){background:var(--wood-lt);}
.pp-logo-text{font-family:'Bebas Neue',sans-serif;font-size:26px;letter-spacing:1.5px;color:var(--ink);}
.pp-logo-text em{color:var(--amber);font-style:normal;}
.pp-nav-links{display:flex;gap:clamp(14px,2.5vw,36px);list-style:none;justify-content:center;}
.pp-nav-links a{font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:2px;
  text-transform:uppercase;color:var(--muted);text-decoration:none;transition:color .2s;position:relative;}
.pp-nav-links a::after{content:'';position:absolute;bottom:-4px;left:0;right:0;height:1.5px;
  background:var(--amber);transform:scaleX(0);transition:transform .25s;}
.pp-nav-links a:hover{color:var(--amber);}
.pp-nav-links a:hover::after,.pp-nav-links a.active::after{transform:scaleX(1);}
.pp-nav-links a.active{color:var(--amber);}
.pp-nav-btn{font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:2px;
  text-transform:uppercase;font-weight:600;padding:10px 24px;background:var(--amber);color:#fff;
  border:none;cursor:pointer;text-decoration:none;
  clip-path:polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%);
  transition:background .2s;white-space:nowrap;}
.pp-nav-btn:hover{background:var(--amber-lt);}
.pp-hamburger{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:4px;}
.pp-hamburger span{display:block;width:24px;height:2px;background:var(--ink);border-radius:2px;transition:all .3s;}
.pp-mobile-menu{display:none;position:fixed;top:68px;left:0;right:0;background:rgba(255,255,255,.97);
  backdrop-filter:blur(16px);border-bottom:1px solid var(--border);padding:20px clamp(16px,5vw,60px);
  z-index:999;flex-direction:column;gap:0;}
.pp-mobile-menu.open{display:flex;}
.pp-mobile-menu a{font-family:'Barlow Condensed',sans-serif;font-size:15px;letter-spacing:2px;
  text-transform:uppercase;color:var(--muted);text-decoration:none;padding:14px 0;
  border-bottom:1px solid var(--border);transition:color .2s;}
.pp-mobile-menu a:hover{color:var(--amber);}

/* ── HERO ── */
.pp-hero{min-height:100vh;position:relative;overflow:hidden;display:flex;align-items:center;padding-top:68px;}
.pp-hero-bg{position:absolute;inset:-40px;will-change:transform;transition:transform .1s linear;}
.pp-hero-dots{position:absolute;inset:0;background-image:radial-gradient(var(--border) 1px,transparent 1px);
  background-size:28px 28px;opacity:.7;}
.pp-hero-amber-bg{position:absolute;top:0;right:0;width:52%;bottom:0;background:var(--light);
  clip-path:polygon(12% 0%,100% 0%,100% 100%,0% 100%);}
.pp-hero-grain{position:absolute;top:0;right:0;width:52%;bottom:0;
  background:repeating-linear-gradient(175deg,transparent 0px,transparent 18px,
  rgba(139,111,78,.04) 18px,rgba(139,111,78,.04) 20px);
  clip-path:polygon(12% 0%,100% 0%,100% 100%,0% 100%);}
.pp-hero-content{position:relative;z-index:2;display:grid;
  grid-template-columns:1fr 1fr;align-items:center;width:100%;
  padding:60px clamp(16px,5vw,60px);}
.pp-hero-eyebrow{font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:4px;
  text-transform:uppercase;color:var(--amber);margin-bottom:20px;display:flex;align-items:center;gap:12px;
  opacity:0;animation:fUp .7s .3s ease forwards;}
.pp-hero-eyebrow::before{content:'';display:block;width:32px;height:1.5px;background:var(--amber);}
.pp-hero-h1{font-family:'Bebas Neue',sans-serif;font-size:clamp(56px,9vw,130px);
  line-height:.88;letter-spacing:.5px;color:var(--ink);opacity:0;animation:fUp .8s .45s ease forwards;}
.pp-hero-h1 .a{color:var(--amber);display:block;}
.pp-hero-h1 .b{color:var(--wood);display:block;}
.pp-hero-sub{max-width:440px;margin-top:28px;font-size:clamp(15px,2vw,17px);line-height:1.85;
  color:var(--muted);font-weight:300;opacity:0;animation:fUp .7s .8s ease forwards;}
.pp-hero-btns{display:flex;gap:14px;margin-top:40px;flex-wrap:wrap;
  opacity:0;animation:fUp .7s 1s ease forwards;}
.pp-btn-p{font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:2px;
  text-transform:uppercase;font-weight:600;padding:16px 38px;background:var(--amber);color:#fff;
  border:none;cursor:pointer;text-decoration:none;
  clip-path:polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%);transition:background .2s;}
.pp-btn-p:hover{background:var(--amber-lt);}
.pp-btn-s{font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:2px;
  text-transform:uppercase;font-weight:500;padding:16px 38px;background:transparent;
  color:var(--ink);border:1.5px solid var(--border2);cursor:pointer;text-decoration:none;
  transition:border-color .2s,color .2s;}
.pp-btn-s:hover{border-color:var(--amber);color:var(--amber);}
.pp-hero-stats{display:flex;gap:clamp(20px,4vw,48px);flex-wrap:wrap;margin-top:56px;padding-top:32px;
  border-top:1px solid var(--border);opacity:0;animation:fUp .7s 1.2s ease forwards;}
.pp-hs-odo{font-family:'Bebas Neue',sans-serif;font-size:clamp(36px,5vw,52px);
  line-height:1;color:var(--amber);}
.pp-hs-suf{font-family:'Bebas Neue',sans-serif;font-size:26px;color:var(--wood);
  display:inline-block;vertical-align:top;margin-top:4px;}
.pp-hs-l{font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:2px;
  text-transform:uppercase;color:var(--muted);margin-top:4px;}

/* Hero image card */
.pp-hero-right{position:relative;z-index:2;display:flex;align-items:center;
  justify-content:center;padding:40px 0 40px 20px;}
.pp-tilt-card{position:relative;width:100%;max-width:500px;transition:transform .15s ease;}
.pp-img-main{position:relative;overflow:hidden;border-radius:3px;
  box-shadow:0 40px 100px rgba(28,26,23,.2);}
.pp-img-main img{width:100%;height:clamp(220px,30vw,380px);object-fit:cover;
  filter:saturate(.8) brightness(.9);display:block;transition:transform .6s ease;}
.pp-tilt-card:hover .pp-img-main img{transform:scale(1.03);}
.pp-img-main::after{content:'';position:absolute;inset:0;
  background:linear-gradient(180deg,transparent 55%,rgba(28,26,23,.3));}
.pp-scan{position:absolute;left:0;right:0;height:2px;
  background:linear-gradient(to right,transparent,rgba(212,136,10,.8),transparent);
  animation:scanA 4s ease-in-out infinite;pointer-events:none;z-index:3;}
@keyframes scanA{0%{top:0;opacity:0;}8%{opacity:1;}92%{opacity:1;}100%{top:100%;opacity:0;}}
.pp-float-badge{position:absolute;top:20px;right:-14px;background:var(--amber);padding:12px 20px;z-index:4;}
.pp-float-badge-n{font-family:'Bebas Neue',sans-serif;font-size:30px;color:#fff;line-height:1;}
.pp-float-badge-l{font-family:'Barlow Condensed',sans-serif;font-size:9px;letter-spacing:2px;
  text-transform:uppercase;color:rgba(255,255,255,.8);}
.pp-float-mini{position:absolute;bottom:-24px;left:-28px;width:180px;overflow:hidden;
  border-radius:3px;border:3px solid #fff;box-shadow:0 16px 50px rgba(28,26,23,.2);z-index:5;
  animation:miniFloat 5s 1s ease-in-out infinite;}
@keyframes miniFloat{0%,100%{transform:translateY(0) rotate(1.5deg);}50%{transform:translateY(-8px) rotate(-.5deg);}}
.pp-float-mini img{width:100%;height:120px;object-fit:cover;display:block;}

@keyframes fUp{from{opacity:0;transform:translateY(22px);}to{opacity:1;transform:translateY(0);}}

/* ── MARQUEE ── */
.pp-mq{background:var(--amber);padding:13px 0;overflow:hidden;}
.pp-mq-track{display:inline-flex;animation:mqa 28s linear infinite;white-space:nowrap;}
.pp-mq-track span{font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:3px;
  text-transform:uppercase;color:#fff;padding:0 36px;font-weight:600;}
.pp-mq-track .dot{color:rgba(255,255,255,.4);padding:0 4px;}
@keyframes mqa{from{transform:translateX(0);}to{transform:translateX(-50%);}}

/* ── GALLERY STRIP ── */
.pp-gstrip{overflow:hidden;border-top:1px solid var(--border);border-bottom:1px solid var(--border);}
.pp-grow{display:flex;gap:2px;animation:gs 42s linear infinite;}
.pp-grow img{width:260px;height:175px;object-fit:cover;filter:saturate(.55) brightness(.88);
  flex-shrink:0;transition:filter .4s,transform .4s;}
.pp-grow img:hover{filter:saturate(.95) brightness(1);transform:scale(1.03);}
@keyframes gs{from{transform:translateX(0);}to{transform:translateX(-50%);}}

/* ── SECTION BASE ── */
.pp-section{padding:clamp(60px,8vw,110px) clamp(16px,5vw,60px);position:relative;}
.pp-stag{font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:4px;
  text-transform:uppercase;color:var(--amber);margin-bottom:14px;display:flex;align-items:center;gap:12px;}
.pp-stag::before{content:'';display:block;width:28px;height:1.5px;background:var(--amber);}
.pp-sh{font-family:'Bebas Neue',sans-serif;font-size:clamp(36px,5.5vw,80px);
  line-height:.93;letter-spacing:.5px;color:var(--ink);}
.pp-sh em{color:var(--amber);font-style:normal;}
.pp-reveal{opacity:0;transform:translateY(28px);transition:opacity .8s ease,transform .8s ease;}
.pp-reveal.visible{opacity:1;transform:translateY(0);}

/* ── 3D PALLET BUILDER ── */
.pp-builder{background:var(--ink);}
.pp-builder .pp-stag{color:var(--amber-lt);}
.pp-builder .pp-stag::before{background:var(--amber-lt);}
.pp-builder .pp-sh{color:#fff;}
.pp-builder .pp-sh em{color:var(--amber-lt);}
.pp-builder-sub{font-size:16px;color:rgba(255,255,255,.45);font-weight:300;margin-top:12px;max-width:500px;}
.pp-builder-layout{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr));
  gap:clamp(24px,4vw,60px);margin-top:56px;align-items:start;}
.pp-builder-controls{display:flex;flex-direction:column;gap:28px;}
.pp-ctrl-group{display:flex;flex-direction:column;gap:10px;}
.pp-ctrl-label{display:flex;justify-content:space-between;align-items:center;}
.pp-ctrl-name{font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:2px;
  text-transform:uppercase;color:rgba(255,255,255,.5);}
.pp-ctrl-val{font-family:'Bebas Neue',sans-serif;font-size:22px;color:var(--amber);}
.pp-ctrl-slider{-webkit-appearance:none;width:100%;height:4px;background:rgba(255,255,255,.1);
  border-radius:2px;outline:none;cursor:pointer;}
.pp-ctrl-slider::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;border-radius:50%;
  background:var(--amber);cursor:pointer;box-shadow:0 0 0 4px rgba(212,136,10,.2);}
.pp-ctrl-wood{display:flex;gap:10px;margin-top:4px;}
.pp-wood-opt{width:32px;height:32px;border-radius:3px;cursor:pointer;border:2px solid transparent;transition:border-color .2s,transform .2s;}
.pp-wood-opt.active{border-color:var(--amber);transform:scale(1.1);}
.pp-builder-result{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);
  padding:20px;margin-top:16px;border-left:3px solid var(--amber);}
.pp-br-row{display:flex;justify-content:space-between;font-size:13px;margin-bottom:8px;}
.pp-br-row:last-child{margin:0;}
.pp-br-row span:first-child{color:rgba(255,255,255,.4);font-family:'Barlow Condensed',sans-serif;
  letter-spacing:1px;text-transform:uppercase;font-size:11px;}
.pp-br-row span:last-child{color:#fff;font-weight:500;}
#pp-palletCanvas{width:100%;height:clamp(260px,35vw,360px);border-radius:4px;background:var(--ink2);}

/* ── PRODUCTS ── */
.pp-products{background:var(--cream);}
.pp-prod-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));
  gap:3px;margin-top:56px;}
.pp-prod-card{background:var(--white);border:1px solid var(--border);position:relative;
  overflow:hidden;cursor:pointer;transition:box-shadow .3s,transform .2s;}
.pp-prod-card:hover{box-shadow:0 20px 60px rgba(212,136,10,.15);}
.pp-prod-card::before{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;
  background:linear-gradient(to right,var(--amber),var(--amber-lt));
  transform:scaleX(0);transform-origin:left;transition:transform .4s;}
.pp-prod-card:hover::before{transform:scaleX(1);}
.pp-prod-inner{padding:clamp(20px,3vw,36px) clamp(16px,2.5vw,28px);position:relative;}
.pp-prod-num{font-family:'Bebas Neue',sans-serif;font-size:64px;line-height:1;
  color:rgba(212,136,10,.08);position:absolute;top:10px;right:14px;}
.pp-prod-icon{font-size:36px;margin-bottom:20px;display:block;transition:transform .3s;}
.pp-prod-card:hover .pp-prod-icon{transform:scale(1.2) rotate(-5deg);}
.pp-prod-name{font-family:'Bebas Neue',sans-serif;font-size:26px;letter-spacing:.5px;
  color:var(--ink);margin-bottom:10px;}
.pp-prod-desc{font-size:14px;line-height:1.8;color:var(--muted);font-weight:300;margin-bottom:18px;}
.pp-prod-tags{display:flex;flex-wrap:wrap;gap:6px;}
.pp-ptag{font-family:'Barlow Condensed',sans-serif;font-size:10px;letter-spacing:1.5px;
  text-transform:uppercase;padding:4px 10px;border:1px solid var(--border2);color:var(--wood);background:var(--light);}

/* ── INDIA MAP ── */
.pp-map-sec{background:var(--white);}
.pp-map-layout{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));
  gap:clamp(24px,4vw,60px);margin-top:56px;align-items:center;}
.pp-map-info{display:flex;flex-direction:column;gap:20px;}
.pp-map-state-display{background:var(--light);padding:24px;border-left:3px solid var(--amber);min-height:80px;}
.pp-msd-name{font-family:'Bebas Neue',sans-serif;font-size:36px;color:var(--amber);line-height:1;}
.pp-msd-info{font-size:14px;color:var(--muted);margin-top:6px;}
.pp-map-stats{display:grid;grid-template-columns:1fr 1fr;gap:3px;}
.pp-ms-item{background:var(--light);padding:16px;border-top:2px solid var(--amber);}
.pp-ms-n{font-family:'Bebas Neue',sans-serif;font-size:36px;color:var(--amber);line-height:1;}
.pp-ms-l{font-family:'Barlow Condensed',sans-serif;font-size:10px;letter-spacing:2px;
  text-transform:uppercase;color:var(--muted);margin-top:2px;}
.pp-hubs{padding:20px;background:var(--light);border-left:3px solid var(--amber);}
.pp-hubs-title{font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:2px;
  text-transform:uppercase;color:var(--amber);margin-bottom:10px;}
.pp-hubs-list{display:flex;flex-wrap:wrap;gap:8px;}
.pp-hub-tag{font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:1px;
  text-transform:uppercase;padding:4px 10px;border:1px solid var(--border2);color:var(--wood);}
#pp-indiaMap{width:100%;cursor:default;}
#pp-indiaMap path{fill:var(--wood-pale);stroke:#fff;stroke-width:1;transition:fill .25s,filter .25s;cursor:pointer;}
#pp-indiaMap path:hover{fill:var(--amber);filter:drop-shadow(0 0 8px rgba(212,136,10,.5));}
#pp-indiaMap path.active-state{fill:var(--amber);}

/* Map tooltip */
.pp-map-tooltip{position:fixed;pointer-events:none;z-index:9999;
  background:var(--ink);border:1.5px solid var(--amber);padding:14px 18px;
  min-width:220px;max-width:280px;
  clip-path:polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%);
  box-shadow:0 16px 48px rgba(28,26,23,.35);
  opacity:0;transform:translateY(6px) scale(.97);
  transition:opacity .18s,transform .18s;}
.pp-map-tooltip.visible{opacity:1;transform:translateY(0) scale(1);}
.pp-tt-name{font-family:'Bebas Neue',sans-serif;font-size:22px;color:var(--amber);line-height:1;margin-bottom:4px;}
.pp-tt-info{font-size:12px;color:rgba(255,255,255,.65);line-height:1.6;margin-bottom:10px;}
.pp-tt-badge{display:inline-flex;align-items:center;gap:5px;
  font-family:'Barlow Condensed',sans-serif;font-size:10px;letter-spacing:1.5px;
  text-transform:uppercase;padding:3px 9px;
  background:rgba(212,136,10,.15);border:1px solid rgba(212,136,10,.3);color:var(--amber);}
.pp-tt-badge.hub{background:rgba(212,136,10,.3);border-color:var(--amber);}
.pp-tt-arrow{position:absolute;bottom:-7px;left:24px;
  width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;
  border-top:7px solid var(--amber);}

/* Others pallet type checkboxes */
.pp-others-panel{margin-top:10px;padding:14px 16px;background:var(--light);
  border-left:3px solid var(--amber);animation:fUp .3s ease forwards;}
.pp-others-title{font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:2px;
  text-transform:uppercase;color:var(--amber);margin-bottom:10px;}
.pp-others-checks{display:flex;flex-wrap:wrap;gap:8px;}
.pp-others-check{display:flex;align-items:center;gap:7px;cursor:pointer;padding:6px 10px;
  background:#fff;border:1px solid var(--border2);transition:border-color .2s,background .2s;}
.pp-others-check:hover{border-color:var(--amber);background:var(--wood-pale);}
.pp-others-check input[type=checkbox]{accent-color:var(--amber);width:15px;height:15px;cursor:pointer;}
.pp-others-check span{font-size:13px;color:var(--ink);font-family:'Barlow Condensed',sans-serif;
  letter-spacing:.5px;text-transform:uppercase;}
.pp-others-check.selected{border-color:var(--amber);background:var(--wood-pale);}

/* Form success toast */
.pp-toast{position:fixed;bottom:30px;right:30px;z-index:9999;
  background:var(--ink);border-left:4px solid #5BA85A;padding:16px 22px;
  font-family:'Barlow Condensed',sans-serif;font-size:14px;letter-spacing:1px;
  text-transform:uppercase;color:#fff;
  box-shadow:0 16px 48px rgba(28,26,23,.3);
  opacity:0;transform:translateY(20px);
  transition:opacity .35s,transform .35s;pointer-events:none;}
.pp-toast.show{opacity:1;transform:translateY(0);}
.pp-toast.error{border-left-color:#e55;}
.pp-form-sending{opacity:.6;pointer-events:none;}

/* ── QUOTE CALCULATOR ── */
.pp-calc-sec{background:var(--ink);}
.pp-calc-sec .pp-stag{color:var(--amber-lt);}
.pp-calc-sec .pp-stag::before{background:var(--amber-lt);}
.pp-calc-sec .pp-sh{color:#fff;}
.pp-calc-sec .pp-sh em{color:var(--amber-lt);}
.pp-calc-layout{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));
  gap:clamp(24px,4vw,60px);margin-top:56px;align-items:start;}
.pp-calc-form{display:flex;flex-direction:column;gap:20px;}
.pp-cf-group{display:flex;flex-direction:column;gap:8px;}
.pp-cf-label{font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:2px;
  text-transform:uppercase;color:rgba(255,255,255,.4);}
.pp-cf-input,.pp-cf-select{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);
  color:#fff;padding:14px 16px;font-family:'Barlow',sans-serif;font-size:15px;outline:none;
  transition:border-color .2s;width:100%;}
.pp-cf-input:focus,.pp-cf-select:focus{border-color:var(--amber);}
.pp-cf-select{appearance:none;cursor:pointer;}
.pp-cf-select option{background:var(--ink2);}
.pp-calc-result{background:rgba(212,136,10,.08);border:1px solid rgba(212,136,10,.2);
  padding:32px;position:relative;overflow:hidden;}
.pp-calc-result::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--amber);}
.pp-cr-title{font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;
  text-transform:uppercase;color:var(--amber);margin-bottom:24px;}
.pp-cr-big{font-family:'Bebas Neue',sans-serif;font-size:clamp(56px,8vw,80px);color:#fff;line-height:1;}
.pp-cr-unit{font-family:'Bebas Neue',sans-serif;font-size:28px;color:var(--amber);}
.pp-cr-bars{display:flex;gap:4px;align-items:flex-end;height:60px;margin:20px 0;}
.pp-cr-bar{flex:1;background:rgba(212,136,10,.3);border-radius:2px 2px 0 0;transition:height .6s cubic-bezier(.22,1,.36,1);}
.pp-cr-breakdown{display:flex;flex-direction:column;gap:10px;margin-top:24px;
  padding-top:24px;border-top:1px solid rgba(255,255,255,.08);}
.pp-cr-row{display:flex;justify-content:space-between;font-size:14px;}
.pp-cr-row span:first-child{color:rgba(255,255,255,.4);}
.pp-cr-row span:last-child{color:#fff;font-weight:500;}
.pp-calc-btn{font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:2px;
  text-transform:uppercase;font-weight:600;padding:16px 36px;background:var(--amber);color:#fff;
  border:none;cursor:pointer;clip-path:polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%);
  transition:background .2s;width:100%;margin-top:8px;}
.pp-calc-btn:hover{background:var(--amber-lt);}

/* ── PROCESS ── */
.pp-process{background:var(--light);}
.pp-proc-timeline{display:flex;flex-direction:column;gap:0;margin-top:60px;
  position:relative;padding-left:clamp(32px,5vw,60px);}
.pp-proc-timeline::before{content:'';position:absolute;left:20px;top:0;bottom:0;width:2px;
  background:linear-gradient(to bottom,transparent,var(--amber) 10%,var(--amber) 90%,transparent);}
.pp-pt-step{display:flex;gap:clamp(16px,2.5vw,32px);padding:32px 0;position:relative;
  opacity:0;transform:translateX(-20px);transition:opacity .6s ease,transform .6s ease;}
.pp-pt-step.visible{opacity:1;transform:translateX(0);}
.pp-pt-dot{position:absolute;left:clamp(-42px,-4.5vw,-38px);top:38px;width:20px;height:20px;
  border-radius:50%;background:var(--white);border:2px solid var(--border2);z-index:1;
  transition:background .3s,border-color .3s;}
.pp-pt-step.visible .pp-pt-dot{background:var(--amber);border-color:var(--amber);}
.pp-pt-icon{font-size:36px;flex-shrink:0;width:60px;height:60px;background:var(--white);
  border:1px solid var(--border);display:flex;align-items:center;justify-content:center;
  transition:background .3s,transform .3s;}
.pp-pt-step:hover .pp-pt-icon{background:var(--wood-pale);transform:scale(1.08);}
.pp-pt-body h3{font-family:'Bebas Neue',sans-serif;font-size:28px;color:var(--ink);margin-bottom:8px;}
.pp-pt-body p{font-size:15px;color:var(--muted);line-height:1.8;font-weight:300;}
.pp-pt-num{font-family:'Bebas Neue',sans-serif;font-size:clamp(60px,8vw,100px);
  color:rgba(212,136,10,.06);position:absolute;right:0;top:10px;line-height:1;}

/* ── WHY ── */
.pp-why{background:var(--white);}
.pp-why-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));
  gap:clamp(30px,5vw,80px);margin-top:56px;align-items:start;}
.pp-wi{display:flex;gap:20px;padding:24px 0;border-bottom:1px solid var(--border);
  cursor:default;transition:padding-left .25s;}
.pp-wi:hover{padding-left:12px;}
.pp-wi-n{font-family:'Bebas Neue',sans-serif;font-size:44px;color:rgba(212,136,10,.15);
  min-width:56px;line-height:1;transition:color .3s;}
.pp-wi:hover .pp-wi-n{color:var(--amber);}
.pp-wi-b h3{font-family:'Barlow Condensed',sans-serif;font-size:19px;font-weight:600;
  letter-spacing:.5px;text-transform:uppercase;color:var(--ink);margin-bottom:6px;}
.pp-wi-b p{font-size:14px;color:var(--muted);line-height:1.7;font-weight:300;}
.pp-wvisual{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:3px;height:500px;}
.pp-wvi{overflow:hidden;position:relative;}
.pp-wvi img{width:100%;height:100%;object-fit:cover;filter:saturate(.6) brightness(.88);
  transition:filter .4s,transform .5s;}
.pp-wvi:hover img{filter:saturate(.95) brightness(1);transform:scale(1.05);}
.pp-wvi:first-child{grid-row:span 2;}
.pp-wv-lbl{position:absolute;bottom:10px;left:10px;font-family:'Barlow Condensed',sans-serif;
  font-size:9px;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.7);
  background:rgba(28,26,23,.5);padding:3px 8px;}

/* ── INDUSTRIES ── */
.pp-inds{background:var(--ink);}
.pp-inds .pp-stag{color:var(--amber-lt);}
.pp-inds .pp-stag::before{background:var(--amber-lt);}
.pp-inds .pp-sh{color:#fff;}
.pp-inds .pp-sh em{color:var(--amber-lt);}
.pp-ig{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr));
  gap:1px;margin-top:56px;}
.pp-ic{padding:clamp(20px,3vw,34px) clamp(14px,2vw,20px) 26px;background:rgba(255,255,255,.04);
  border-top:1px solid rgba(255,255,255,.06);cursor:default;transition:background .25s;
  position:relative;overflow:hidden;}
.pp-ic::after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;
  background:var(--amber);transform:scaleX(0);transform-origin:left;transition:transform .35s;}
.pp-ic:hover{background:rgba(255,255,255,.09);}
.pp-ic:hover::after{transform:scaleX(1);}
.pp-ic-icon{font-size:30px;margin-bottom:16px;display:block;transition:transform .3s;}
.pp-ic:hover .pp-ic-icon{transform:scale(1.15) rotate(-8deg);}
.pp-ic-name{font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:600;
  letter-spacing:.5px;text-transform:uppercase;color:#fff;margin-bottom:8px;}
.pp-ic-desc{font-size:13px;line-height:1.7;color:rgba(255,255,255,.4);}

/* ── TESTIMONIALS ── */
.pp-testi{background:var(--cream);overflow:hidden;}
.pp-testi-slider{position:relative;margin-top:56px;}
.pp-tslides{display:flex;transition:transform .6s cubic-bezier(.22,1,.36,1);}
.pp-tslide{min-width:100%;padding:0 4px;}
.pp-tc-inner{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:3px;}
.pp-tc{padding:clamp(20px,3vw,36px) clamp(16px,2.5vw,28px);background:var(--white);
  border:1px solid var(--border);border-top:3px solid transparent;transition:border-top-color .25s,transform .25s;}
.pp-tc:hover{border-top-color:var(--amber);transform:translateY(-4px);}
.pp-tq{font-family:'Bebas Neue',sans-serif;font-size:80px;line-height:.7;
  color:rgba(212,136,10,.1);margin-bottom:12px;}
.pp-ttext{font-size:15px;line-height:1.85;color:var(--muted);font-style:italic;
  font-weight:300;margin-bottom:24px;}
.pp-tauth{display:flex;gap:14px;align-items:center;}
.pp-tav{width:44px;height:44px;border-radius:50%;background:var(--amber);display:flex;
  align-items:center;justify-content:center;font-family:'Bebas Neue',sans-serif;
  font-size:16px;color:#fff;flex-shrink:0;}
.pp-taname{font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:600;
  text-transform:uppercase;letter-spacing:.5px;color:var(--ink);}
.pp-taco{font-size:12px;color:var(--muted);margin-top:2px;}
.pp-testi-nav{display:flex;gap:12px;align-items:center;margin-top:28px;}
.pp-t-btn{width:40px;height:40px;background:var(--white);border:1.5px solid var(--border2);
  display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:18px;
  transition:background .2s,border-color .2s;}
.pp-t-btn:hover{background:var(--amber);border-color:var(--amber);color:#fff;}
.pp-t-progress{flex:1;height:2px;background:var(--border);border-radius:2px;overflow:hidden;}
.pp-t-fill{height:100%;background:var(--amber);border-radius:2px;transition:width .4s ease;}

/* ── CONTACT ── */
.pp-contact-sec{background:var(--ink2);}
.pp-contact-sec .pp-stag{color:var(--amber-lt);}
.pp-contact-sec .pp-stag::before{background:var(--amber-lt);}
.pp-contact-sec .pp-sh{color:#fff;}
.pp-contact-sec .pp-sh em{color:var(--amber-lt);}
.pp-cgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));
  gap:clamp(30px,5vw,80px);margin-top:56px;}
.pp-cinfo{display:flex;flex-direction:column;gap:24px;}
.pp-citem{display:flex;gap:16px;}
.pp-cicon{width:44px;height:44px;background:rgba(212,136,10,.12);border:1px solid rgba(212,136,10,.25);
  display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;transition:background .2s;}
.pp-citem:hover .pp-cicon{background:rgba(212,136,10,.25);}
.pp-cilbl{font-family:'Barlow Condensed',sans-serif;font-size:10px;letter-spacing:2px;
  text-transform:uppercase;color:var(--amber);margin-bottom:4px;}
.pp-cival{font-size:15px;color:#fff;}
.pp-cisub{font-size:13px;color:rgba(255,255,255,.35);margin-top:2px;}
.pp-quick-facts{padding:20px;background:rgba(212,136,10,.1);border-left:3px solid var(--amber);}
.pp-qf-title{font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:2px;
  text-transform:uppercase;color:var(--amber);margin-bottom:12px;}
.pp-qf-row{display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px;}
.pp-qf-row span:first-child{color:rgba(255,255,255,.4);}
.pp-qf-row span:last-child{color:#fff;}
.pp-cform{display:flex;flex-direction:column;gap:14px;}
.pp-crow{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.pp-cg{display:flex;flex-direction:column;gap:7px;}
.pp-cg label{font-family:'Barlow Condensed',sans-serif;font-size:10px;letter-spacing:2px;
  text-transform:uppercase;color:rgba(255,255,255,.35);}
.pp-cg input,.pp-cg select,.pp-cg textarea{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);
  color:#fff;padding:13px 15px;font-family:'Barlow',sans-serif;font-size:14px;outline:none;
  transition:border-color .2s;width:100%;}
.pp-cg input:focus,.pp-cg select:focus,.pp-cg textarea:focus{border-color:var(--amber);}
.pp-cg input::placeholder,.pp-cg textarea::placeholder{color:rgba(255,255,255,.2);}
.pp-cg textarea{min-height:110px;resize:vertical;}
.pp-cg select{appearance:none;cursor:pointer;color:#fff;}
.pp-cg select option{background:var(--ink2);}
.pp-csub{font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:2px;
  text-transform:uppercase;font-weight:600;padding:16px 40px;background:var(--amber);color:#fff;
  border:none;cursor:pointer;clip-path:polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%);
  transition:background .2s;}
.pp-csub:hover{background:var(--amber-lt);}

/* ── FOOTER ── */
.pp-footer{background:var(--ink);padding:clamp(40px,6vw,60px) clamp(16px,5vw,60px) 28px;border-top:3px solid var(--amber);width:100%;}
.pp-fg{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,160px),1fr));
  gap:clamp(24px,4vw,60px);margin-bottom:56px;}
.pp-fd{font-size:13px;line-height:1.8;color:rgba(255,255,255,.35);margin-top:16px;max-width:260px;font-weight:300;}
.pp-fct{font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;
  text-transform:uppercase;color:var(--amber);margin-bottom:18px;}
.pp-fl{list-style:none;display:flex;flex-direction:column;gap:10px;}
.pp-fl a{font-size:13px;color:rgba(255,255,255,.35);text-decoration:none;
  transition:color .2s,padding-left .2s;}
.pp-fl a:hover{color:var(--amber-lt);padding-left:6px;}
.pp-fbot{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;
  padding-top:28px;border-top:1px solid rgba(255,255,255,.06);
  font-family:'Barlow Condensed',sans-serif;font-size:12px;color:rgba(255,255,255,.25);}
.pp-fbot .highlight{color:var(--amber);}

/* ── BACK TO TOP ── */
.pp-btt{position:fixed;bottom:32px;right:32px;width:44px;height:44px;background:var(--amber);
  display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:20px;
  color:#fff;opacity:0;transform:translateY(20px);transition:opacity .3s,transform .3s;
  z-index:500;clip-path:polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%);border:none;}
.pp-btt.show{opacity:1;transform:translateY(0);}

/* ── RESPONSIVE ── */
@media (max-width:768px){
  .pp-hero-content{grid-template-columns:1fr;padding:60px 16px 60px;}
  .pp-hero-right{display:none;}
  .pp-nav-links{display:none;}
  .pp-nav-btn{display:none;}
  .pp-hamburger{display:flex;}
  .pp-crow{grid-template-columns:1fr;}
  .pp-wvisual{display:none;}
  .pp-proc-timeline{padding-left:36px;}
}
@media (max-width:480px){
  .pp-hero-h1{font-size:clamp(44px,14vw,72px);}
  .pp-hero-btns{flex-direction:column;}
  .pp-btn-p,.pp-btn-s{text-align:center;}
}
`;

// ─── DATA ────────────────────────────────────────────────────────────────────
const products = [
  { num: "01", icon: "🪵", name: "Standard Pallet", desc: "The backbone of supply chains. 1200×800mm and 1200×1000mm. Pinewood or hardwood for warehousing, logistics and retail.", tags: ["Pinewood", "Hardwood", "2/4-way entry"] },
  { num: "02", icon: "🔥", name: "ISPM-15 Export", desc: "Heat-treated and certified for all international shipments. Stamped, documented and customs-ready worldwide.", tags: ["Heat Treated", "Export Grade", "HT Stamped"] },
  { num: "03", icon: "🇪🇺", name: "Euro / EPAL", desc: "1200×800mm EPAL standard. Four-way entry block-type for European supply chains and automated handling systems.", tags: ["1200×800mm", "EPAL Spec", "Block Type"] },
  { num: "04", icon: "⚡", name: "Plywood Pallet", desc: "Lightweight with high strength-to-weight ratio. Smooth deck for pharma and food industries. Recyclable and eco-friendly.", tags: ["Lightweight", "Pharma Grade", "Eco"] },
  { num: "05", icon: "🏗️", name: "Heavy Duty", desc: "Up to 5,000 kg load capacity. Double-layered reinforced stringers for automotive, steel and heavy manufacturing.", tags: ["5000 kg", "Hardwood", "Industrial"] },
  { num: "06", icon: "✏️", name: "Custom / Bespoke", desc: "Your exact drawings, any dimension, any wood. MOQ 50 pieces. 7-day lead time. Fully engineered to specification.", tags: ["Any Dimension", "Any Wood", "MOQ 50"] },
];

const industries = [
  { icon: "🏭", name: "Logistics", desc: "Warehouse racking and freight movement pallets." },
  { icon: "💊", name: "Pharma", desc: "GMP-compliant smooth-deck plywood pallets." },
  { icon: "🌾", name: "Food & Beverage", desc: "Food-safe moisture-resistant FMCG pallets." },
  { icon: "🚗", name: "Automotive", desc: "5,000 kg capacity heavy-duty assembly pallets." },
  { icon: "🏗️", name: "Construction", desc: "Cement, brick and building materials pallets." },
  { icon: "📦", name: "E-Commerce", desc: "GMA fulfilment centre standard pallets." },
  { icon: "✈️", name: "Export", desc: "ISPM-15 certified for US, EU, Middle East." },
  { icon: "⚗️", name: "Chemical", desc: "Hazmat-compatible drum and container pallets." },
];

const processSteps = [
  { icon: "🌲", title: "Timber Sourcing", desc: "FSC-certified pinewood, hardwood and country wood sourced from verified sustainable suppliers across India. Every batch tested for moisture content and structural integrity before entering production." },
  { icon: "⚙️", title: "Precision Cutting", desc: "CNC-guided band saws cut every board to ±1mm tolerance. Automated sorting systems reject any board that doesn't meet spec. Zero compromise on dimensional accuracy." },
  { icon: "🔨", title: "Assembly", desc: "Automated pneumatic nailing machines assemble pallets to EPAL and GMA standards. Nail placement, penetration depth and spacing all controlled and monitored in real time." },
  { icon: "🔥", title: "Heat Treatment", desc: "Government-approved ISPM-15 heat treatment at 56°C core temperature for 30 continuous minutes. Every pallet stamped, documented and traceable. Certificates issued same day." },
  { icon: "🔍", title: "Quality Check", desc: "100% visual and dimensional inspection before packing. Any defective pallet is rejected and recycled. QC report generated for every batch — available on request." },
  { icon: "🚚", title: "Dispatch", desc: "Strapped, palletised and dispatched within 48 hours. Real-time tracking shared via WhatsApp. Pan-India delivery. Export documentation handled in-house." },
];

const testimonialSlides = [
  [
    { initials: "RK", name: "Rajesh Kumar", company: "Export Manager · Hyderabad Pharma Ltd.", text: "Desi pallet has been our go-to for two years. ISPM-15 pallets clear customs every time without issues. Delivery and quality are consistently outstanding." },
    { initials: "SA", name: "Sunita Agarwal", company: "Logistics Head · FastFreight India", text: "Switched to Desi pallet and the difference was immediate. Better wood quality, tighter tolerances and 48-hour dispatch is a game changer." },
    { initials: "PM", name: "Pradeep Mistry", company: "Plant Manager · AutoParts Telangana", text: "Custom heavy-duty pallets to exact drawings. Responsive team, the pallets handle 4-ton engine loads without any issues whatsoever." },
  ],
  [
    { initials: "AK", name: "Anil Krishnamurthy", company: "Director · Deccan Export House", text: "ISPM-15 pallets for our US exports — zero rejections in 18 months. Desi pallet's documentation is thorough and the HT stamps are always compliant." },
    { initials: "NR", name: "Nisha Reddy", company: "Supply Chain · BioTech Pharma", text: "We needed 2,000 plywood pallets for our pharma dispatch within a week. Desi pallet delivered on day 6, full QC report included. Impressive." },
    { initials: "VG", name: "Vijay Gupta", company: "Procurement · IndoSteel Ltd.", text: "The 3D builder tool on their website actually helped us visualise our custom size before ordering. Great service throughout from enquiry to delivery." },
  ],
];

const woodColors = { pine: "#C4A882", hard: "#8B6F4E", ply: "#D4B898", teak: "#5C3A1E" };
const woodNames = { pine: "Pinewood", hard: "Hardwood", ply: "Plywood", teak: "Teak" };

// ─── HOOKS ───────────────────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".pp-reveal,.pp-pt-step").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function useScrollEffects(setScrolled, setShowBtt, setActiveSection) {
  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setShowBtt(y > 400);
      const sections = document.querySelectorAll("section[id]");
      sections.forEach(s => {
        if (y + 100 >= s.offsetTop && y + 100 < s.offsetTop + s.offsetHeight) {
          setActiveSection(s.id);
        }
      });
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [setScrolled, setShowBtt, setActiveSection]);
}

// ─── SIMPLE 2D PALLET CANVAS ─────────────────────────────────────────────────
function PalletCanvas({ length, width: palletWidth, boards, woodType }) {
  const canvasRef = useRef(null);
  // Store latest props in a ref so the ResizeObserver callback can always read them
  const propsRef = useRef({ length, palletWidth, boards, woodType });
  propsRef.current = { length, palletWidth, boards, woodType };

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { length: L, palletWidth: PW, boards: B, woodType: WT } = propsRef.current;

    // Use getBoundingClientRect for accurate CSS size after any viewport change
    const rect = canvas.getBoundingClientRect();
    const cw = rect.width || canvas.offsetWidth || 400;
    const ch = rect.height || canvas.offsetHeight || 320;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = Math.round(cw * dpr);
    canvas.height = Math.round(ch * dpr);

    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    ctx.clearRect(0, 0, cw, ch);
    ctx.fillStyle = "#1C1A17";
    ctx.fillRect(0, 0, cw, ch);

    const col = woodColors[WT] || woodColors.pine;
    const aspect = L / PW;
    const pw = Math.min(cw * 0.75, ch * 0.65 * aspect);
    const ph = pw / aspect;
    const ox = (cw - pw) / 2, oy = (ch - ph) / 2;
    const boardH = ph / (B + 2);
    const legW = pw * 0.08;

    // supports (legs)
    ctx.globalAlpha = 0.6;
    ctx.fillStyle = col;
    [ox, ox + pw / 2 - legW / 2, ox + pw - legW].forEach(lx => {
      ctx.fillRect(lx, oy + boardH * 0.8, legW, ph - boardH * 1.6);
    });

    // boards
    ctx.globalAlpha = 1;
    for (let i = 0; i < B; i++) {
      ctx.fillStyle = i % 2 === 0 ? col : adjustColor(col, -20);
      ctx.fillRect(ox, oy + i * boardH, pw, boardH * 0.85);
    }
    // bottom board
    ctx.globalAlpha = 0.85;
    ctx.fillStyle = col;
    ctx.fillRect(ox, oy + ph - boardH * 0.9, pw, boardH * 0.85);

    // amber edge accent
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#D4880A";
    ctx.fillRect(ox, oy, 4, ph);

    // grid lines
    ctx.globalAlpha = 0.08;
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;
    for (let i = 1; i < B; i++) {
      ctx.beginPath();
      ctx.moveTo(ox, oy + i * boardH);
      ctx.lineTo(ox + pw, oy + i * boardH);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }, []);

  // Redraw whenever props change
  useEffect(() => { draw(); }, [length, palletWidth, boards, woodType, draw]);

  // Redraw whenever the canvas element is resized (handles DevTools viewport changes)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ro = new ResizeObserver(() => { draw(); });
    ro.observe(canvas);
    return () => ro.disconnect();
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      id="pp-palletCanvas"
      style={{ display: "block", width: "100%", height: "clamp(260px,35vw,360px)" }}
    />
  );
}

function adjustColor(hex, amount) {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + amount));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0xff) + amount));
  const b = Math.min(255, Math.max(0, (num & 0xff) + amount));
  return `rgb(${r},${g},${b})`;
}

// ─── INDIA MAP ───────────────────────────────────────────────────────────────
const states = [
  { name: "Jammu & Kashmir", info: "Northern-most region, supplied via Delhi hub", dispatch: "5–7 days", hub: false, d: "M180,20 L220,15 L260,25 L270,50 L250,70 L220,80 L190,70 L170,50 Z" },
  { name: "Himachal Pradesh", info: "Mountain state, routed via Delhi", dispatch: "4–5 days", hub: false, d: "M210,80 L250,70 L265,85 L255,105 L225,110 L205,100 Z" },
  { name: "Punjab", info: "Major agricultural hub, high pallet demand", dispatch: "3–4 days", hub: false, d: "M170,75 L210,80 L205,100 L185,110 L160,100 L155,85 Z" },
  { name: "Haryana", info: "Industrial corridor, fast turnaround", dispatch: "2–3 days", hub: false, d: "M185,110 L225,110 L230,130 L210,145 L185,140 L175,125 Z" },
  { name: "Delhi", info: "★ Key Hub — Express dispatch available", dispatch: "24H Express", hub: true, special: true, fill: "#D4880A", opacity: "0.6", d: "M210,130 L230,130 L232,148 L210,150 L205,140 Z" },
  { name: "Rajasthan", info: "Largest state — 3–4 day delivery zone", dispatch: "3–4 days", hub: false, d: "M120,110 L175,100 L185,140 L175,200 L145,230 L100,220 L80,180 L90,140 Z" },
  { name: "Uttar Pradesh", info: "Largest population, massive logistics demand", dispatch: "2–3 days", hub: false, d: "M210,150 L285,130 L320,155 L310,210 L270,230 L220,225 L185,210 L175,180 L185,160 Z" },
  { name: "Uttarakhand", info: "Hill state, routed via Delhi hub", dispatch: "3–5 days", hub: false, d: "M230,100 L270,85 L295,100 L290,125 L255,130 L230,130 Z" },
  { name: "Bihar", info: "Growing industrial base", dispatch: "3–4 days", hub: false, d: "M310,155 L360,145 L375,175 L365,205 L330,215 L310,210 Z" },
  { name: "Jharkhand", info: "Steel industry — heavy-duty pallet demand", dispatch: "3–4 days", hub: false, d: "M330,215 L375,200 L390,225 L370,255 L340,255 L320,240 Z" },
  { name: "West Bengal", info: "Major port city — export pallets available", dispatch: "3–4 days", hub: false, d: "M365,165 L400,160 L415,190 L405,230 L380,245 L360,225 L375,195 Z" },
  { name: "Sikkim", info: "Small state — 5–7 day delivery", dispatch: "5–7 days", hub: false, d: "M380,145 L400,140 L405,160 L385,165 Z" },
  { name: "Assam", info: "Northeast gateway", dispatch: "5–6 days", hub: false, d: "M400,155 L445,150 L460,170 L445,190 L415,195 L405,175 Z" },
  { name: "Meghalaya", info: "Northeast state", dispatch: "5–7 days", hub: false, d: "M415,195 L450,192 L455,215 L430,220 L415,210 Z" },
  { name: "Nagaland", info: "Northeast state", dispatch: "6–8 days", hub: false, d: "M455,160 L480,155 L485,178 L460,182 Z" },
  { name: "Manipur", info: "Northeast state", dispatch: "6–8 days", hub: false, d: "M460,182 L485,178 L488,205 L462,208 Z" },
  { name: "Mizoram", info: "Northeast state", dispatch: "6–8 days", hub: false, d: "M455,215 L480,210 L482,235 L456,238 Z" },
  { name: "Tripura", info: "Northeast state", dispatch: "6–8 days", hub: false, d: "M435,222 L458,218 L460,240 L435,242 Z" },
  { name: "Madhya Pradesh", info: "Central India hub — 2–3 day coverage", dispatch: "2–3 days", hub: false, d: "M145,225 L220,225 L270,230 L285,270 L265,305 L220,310 L170,300 L135,270 L130,245 Z" },
  { name: "Gujarat", info: "Largest port access — export specialist zone", dispatch: "2–3 days", hub: false, d: "M60,200 L100,200 L130,230 L130,275 L100,295 L65,285 L45,255 L50,225 Z" },
  { name: "Maharashtra", info: "★ Key Hub — Mumbai, fast dispatch", dispatch: "48H", hub: true, special: true, fill: "#C4A882", opacity: "0.7", d: "M100,295 L165,300 L220,310 L225,355 L200,385 L165,390 L130,375 L95,345 L80,315 Z" },
  { name: "Chhattisgarh", info: "Mineral rich — industrial pallets in demand", dispatch: "3–4 days", hub: false, d: "M265,270 L320,265 L340,295 L325,340 L290,350 L265,330 L255,300 Z" },
  { name: "Odisha", info: "East coast — port city access", dispatch: "3–4 days", hub: false, d: "M340,255 L390,250 L400,290 L380,330 L345,340 L325,315 L340,280 Z" },
  { name: "Telangana", info: "★ HOME BASE — Priority dispatch", dispatch: "24H Express", hub: true, special: true, fill: "#D4880A", opacity: "0.8", d: "M225,355 L265,345 L290,360 L285,400 L255,415 L225,405 L210,385 Z" },
  { name: "Andhra Pradesh", info: "Coastal state — port export access", dispatch: "24–48H", hub: false, d: "M255,415 L295,400 L325,415 L320,460 L285,475 L255,460 L240,435 Z" },
  { name: "Karnataka", info: "★ Bangalore tech hub — high demand", dispatch: "48H", hub: true, special: true, fill: "#C4A882", opacity: "0.7", d: "M165,390 L210,385 L225,405 L240,435 L225,470 L195,485 L160,470 L145,440 L150,410 Z" },
  { name: "Goa", info: "Small state — tourist and export", dispatch: "2–3 days", hub: false, d: "M130,445 L150,440 L155,460 L135,465 Z" },
  { name: "Kerala", info: "Southern coast — spice export pallets", dispatch: "2–3 days", hub: false, d: "M170,470 L195,465 L200,505 L180,520 L160,510 L155,485 Z" },
  { name: "Tamil Nadu", info: "★ Key Hub — Chennai, fast dispatch", dispatch: "48H", hub: true, special: true, fill: "#C4A882", opacity: "0.7", d: "M225,465 L285,475 L290,515 L265,540 L240,545 L215,530 L205,500 L215,475 Z" },
];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function Desipallet() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBtt, setShowBtt] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [testiSlide, setTestiSlide] = useState(0);
  const [hoveredState, setHoveredState] = useState({ name: "Hover any state", info: "We deliver to all 28 states and 8 UTs across India", dispatch: null, hub: false });

  // Map tooltip
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, state: null });

  // 3D Builder state
  const [builderLength, setBuilderLength] = useState(1200);
  const [builderWidth, setBuilderWidth] = useState(800);
  const [builderBoards, setBuilderBoards] = useState(3);
  const [builderCap, setBuilderCap] = useState(1500);
  const [woodType, setWoodType] = useState("pine");

  // Calculator state
  const [calcType, setCalcType] = useState("standard");
  const [calcQty, setCalcQty] = useState(100);
  const [calcSize, setCalcSize] = useState("1200x800");
  const [calcDel, setCalcDel] = useState("local");
  const [calcResult, setCalcResult] = useState({
    lead: "7", breakdown: [
      { label: "Estimated Lead Time", val: "7 working days" },
      { label: "Total Pallets", val: "100 pcs" },
      { label: "Pallet Type", val: "Standard" },
      { label: "Est. Total Weight", val: "1,820 kg" },
      { label: "Truck Loads Required", val: "~1 truck" },
      { label: "ISPM-15", val: "Not Required", green: false },
    ]
  });

  // Contact form
  const [formData, setFormData] = useState({ name: "", company: "", phone: "", email: "", palletType: "Standard Wooden Pallet", qty: "", message: "" });
  const [othersChecked, setOthersChecked] = useState([]);
  const [formSending, setFormSending] = useState(false);
  const [toast, setToast] = useState({ show: false, msg: "", error: false });

  const othersOptions = ["Fumigated Pallets", "Notched Pallets", "Block Pallets", "Reversible Pallets", "Presswood / Moulded", "Recycled / Reconditioned", "Collared Pallets", "Other / Custom Spec"];

  useSEO();
  useReveal();
  useScrollEffects(setScrolled, setShowBtt, setActiveSection);

  useEffect(() => {
    const t = setTimeout(() => setPreloaderDone(true), 2200);
    return () => clearTimeout(t);
  }, []);

  // Inject CSS once
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = CSS;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const buildEstWeight = () => ((builderLength / 1000) * (builderWidth / 1000) * builderBoards * 2.8 * 600 * 0.001).toFixed(1);

  const calculateQuote = useCallback(() => {
    const typePrices = { standard: 580, export: 720, euro: 650, plywood: 490, heavy: 980, custom: 1100 };
    const delFactors = { local: 1, ap: 1.08, south: 1.15, pan: 1.22, export: 1.45 };
    const base = typePrices[calcType] || 580;
    const factor = delFactors[calcDel] || 1;
    const qtyDisc = calcQty >= 500 ? 0.88 : calcQty >= 200 ? 0.92 : calcQty >= 100 ? 0.96 : 1;
    const unitPrice = Math.round(base * factor * qtyDisc);
    const total = unitPrice * calcQty;
    const leadDays = calcDel === "export" ? 12 : calcDel === "pan" ? 7 : calcQty > 500 ? 5 : 2;
    const trucks = Math.ceil(calcQty * 18 / 8000);
    const isISPM = calcType === "export";
    const typeNames = { standard: "Standard", export: "ISPM-15 Export", euro: "Euro/EPAL", plywood: "Plywood", heavy: "Heavy Duty", custom: "Custom" };
    setCalcResult({
      lead: String(leadDays),
      breakdown: [
        { label: "Estimated Lead Time", val: `${leadDays} working days` },
        { label: "Total Pallets", val: `${calcQty.toLocaleString()} pcs` },
        { label: "Pallet Type", val: typeNames[calcType] || "Standard" },
        { label: "Est. Unit Price", val: `₹${unitPrice.toLocaleString()}` },
        { label: "Est. Total", val: `₹${total.toLocaleString()}` },
        { label: "Truck Loads Required", val: `~${trucks} truck${trucks > 1 ? "s" : ""}` },
        { label: "ISPM-15", val: isISPM ? "✓ Included" : "Not Required", green: isISPM },
      ]
    });
  }, [calcType, calcQty, calcSize, calcDel]);

  const showToast = (msg, error = false) => {
    setToast({ show: true, msg, error });
    setTimeout(() => setToast(t => ({ ...t, show: false })), 5000);
  };

  // ── Web3Forms — get your FREE access key in 30 seconds ──
  // 1. Go to https://web3forms.com
  // 2. Enter rohitvarma95152@gmail.com and click "Create Access Key"
  // 3. Check your Gmail inbox for the key and paste it below
  const WEB3FORMS_KEY = "3f563029-49ba-46cf-a595-580de78abc26";

  const sendQuote = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      showToast("⚠ Please fill in Name, Email and Phone", true);
      return;
    }
    setFormSending(true);
    const othersStr = othersChecked.length > 0
      ? `Others — ${othersChecked.join(", ")}`
      : formData.palletType;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Quote Request from ${formData.name} — Desi pallet`,
          from_name: "Desi pallet Website",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company || "—",
          pallet_type: othersStr,
          quantity: formData.qty || "Not specified",
          message: formData.message || "—",
        }),
      });
      const data = await res.json();
      if (data.success) {
        playKnock();
        showToast("✓ Quote sent! We'll respond within 4 business hours.");
        setFormData({ name: "", company: "", phone: "", email: "", palletType: "Standard Wooden Pallet", qty: "", message: "" });
        setOthersChecked([]);
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      console.error("Web3Forms error:", err);
      showToast("✗ Failed to send. Please try calling us directly.", true);
    } finally {
      setFormSending(false);
    }
  };

  const playKnock = () => {
    try {
      const ctx2 = new (window.AudioContext || window.webkitAudioContext)();
      const buf = ctx2.createBuffer(1, ctx2.sampleRate * 0.08, ctx2.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * Math.exp(-i / 800);
      const src = ctx2.createBufferSource(); src.buffer = buf;
      const gain = ctx2.createGain(); gain.gain.value = 0.18;
      src.connect(gain); gain.connect(ctx2.destination); src.start();
    } catch (e) { }
  };

  const navLinks = [
    { href: "#builder", label: "3D Builder" },
    { href: "#products", label: "Products" },
    { href: "#map", label: "Delivery Map" },
    { href: "#calculator", label: "Calculator" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" },
  ];

  const mq = ["ISPM-15 Certified", "Custom Sizes", "Heat Treated", "Pinewood · Hardwood · Plywood", "Pan-India Delivery", "Export Specialists", "EPAL · GMA · ISO", "Bulk Orders Welcome"];
  const galleryImgs = [
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=520&q=72",
    "https://images.unsplash.com/photo-1553413077-190dd305871c?w=520&q=72",
    "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=520&q=72",
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=520&q=72",
    "https://images.unsplash.com/photo-1610484826917-0f101a7bf7f4?w=520&q=72",
    "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?w=520&q=72",
  ];

  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh", overflowX: "hidden" }}>
      {/* Preloader */}
      <div className={`pp-pre${preloaderDone ? " done" : ""}`}>
        <div className="pp-pre-logo">DESI<em>PALLET</em></div>
        <div className="pp-pre-pallet">
          <div className="pp-plank" />
          <div className="pp-plank" />
          <div className="pp-plank" />
          <div className="pp-support">
            <div className="pp-leg" /><div className="pp-leg" /><div className="pp-leg" />
          </div>
        </div>
        <div className="pp-pre-bar"><div className="pp-pre-fill" /></div>
        <div className="pp-pre-txt">Loading experience...</div>
      </div>

      {/* Nav */}
      <nav className={`pp-nav${scrolled ? " scrolled" : ""}`}>
        <a href="#home" className="pp-logo">
          <div className="pp-logo-icon"><b /><b /><b /></div>
          <div className="pp-logo-text">DESI<em>PALLET</em></div>
        </a>
        <ul className="pp-nav-links">
          {navLinks.map(l => (
            <li key={l.href}><a href={l.href} className={activeSection === l.href.slice(1) ? "active" : ""}>{l.label}</a></li>
          ))}
        </ul>
        <a href="#contact" className="pp-nav-btn" onClick={playKnock}>Get a Quote</a>
        <button className="pp-hamburger" onClick={() => setMobileMenuOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>
      <div className={`pp-mobile-menu${mobileMenuOpen ? " open" : ""}`}>
        {navLinks.map(l => <a key={l.href} href={l.href} onClick={() => setMobileMenuOpen(false)}>{l.label}</a>)}
        <a href="#contact" onClick={() => { setMobileMenuOpen(false); playKnock(); }} style={{ color: "var(--amber)", fontWeight: 600 }}>Get a Quote →</a>
      </div>

      {/* Hero */}
      <section className="pp-hero" id="home">
        <div className="pp-hero-bg" id="pp-heroBg">
          <div className="pp-hero-dots" />
          <div className="pp-hero-amber-bg" />
          <div className="pp-hero-grain" />
        </div>
        <div className="pp-hero-content">
          <div className="pp-hero-left">
            <div className="pp-hero-eyebrow">Est. 2024 — Hyderabad, India</div>
            <h1 className="pp-hero-h1">
              PRECISION<br />
              <span className="a">BUILT.</span>
              <span className="b">GLOBALLY</span>
              SHIPPED.
            </h1>
            <p className="pp-hero-sub">Desi pallet manufactures premium wooden pallets for logistics, warehousing and export. ISPM-15 certified. Custom engineered. Pan-India and worldwide.</p>
            <div className="pp-hero-btns">
              <a href="#products" className="pp-btn-p" onClick={playKnock}>Explore Products →</a>
              <a href="#contact" className="pp-btn-s">Request Quote</a>
            </div>
            <div className="pp-hero-stats">
              {[["10", "K+", "Pallets / Month"], ["15", "+", "Industries"], ["500", "+", "Clients"], ["48", "H", "Dispatch"]].map(([num, suf, lbl]) => (
                <div key={lbl}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 2 }}>
                    <span className="pp-hs-odo">{num}</span>
                    <span className="pp-hs-suf">{suf}</span>
                  </div>
                  <div className="pp-hs-l">{lbl}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="pp-hero-right">
            <div className="pp-tilt-card">
              <div className="pp-tilt-inner">
                <div className="pp-img-main">
                  <div className="pp-scan" />
                  <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" alt="Wooden pallets warehouse" />
                </div>
                <div className="pp-float-badge">
                  <div className="pp-float-badge-n">100%</div>
                  <div className="pp-float-badge-l">ISPM-15<br />Certified</div>
                </div>
                <div className="pp-float-mini">
                  <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&q=80" alt="Production" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="pp-mq">
        <div className="pp-mq-track">
          {[...mq, ...mq].map((t, i) => (
            <span key={i}>{i % 2 === 0 ? t : <><span className="dot">◆</span>{t}</>}</span>
          ))}
        </div>
      </div>

      {/* Gallery Strip */}
      <div className="pp-gstrip">
        <div className="pp-grow">
          {[...galleryImgs, ...galleryImgs].map((src, i) => (
            <img key={i} src={src} alt="pallet" loading="lazy" />
          ))}
        </div>
      </div>

      {/* 3D Builder */}
      <section className="pp-section pp-builder pp-reveal" id="builder">
        <div className="pp-stag">Interactive Feature</div>
        <h2 className="pp-sh">3D PALLET <em>BUILDER</em></h2>
        <p className="pp-builder-sub">Drag the sliders to customise your pallet in real time. See dimensions, weight and capacity update instantly.</p>
        <div className="pp-builder-layout">
          <div className="pp-builder-controls pp-reveal">
            {[
              { label: "Length", id: "length", min: 800, max: 2000, step: 50, val: builderLength, unit: "mm", setter: setBuilderLength },
              { label: "Width", id: "width", min: 600, max: 1400, step: 50, val: builderWidth, unit: "mm", setter: setBuilderWidth },
              { label: "Height / Boards", id: "boards", min: 3, max: 7, step: 1, val: builderBoards, unit: " boards", setter: setBuilderBoards },
              { label: "Load Capacity", id: "cap", min: 500, max: 5000, step: 100, val: builderCap, unit: " kg", setter: setBuilderCap },
            ].map(s => (
              <div key={s.id} className="pp-ctrl-group">
                <div className="pp-ctrl-label">
                  <span className="pp-ctrl-name">{s.label}</span>
                  <span className="pp-ctrl-val">{s.id === "boards" ? builderBoards * 48 + " mm" : s.id === "cap" ? s.val.toLocaleString() + " kg" : s.val + " mm"}</span>
                </div>
                <input type="range" className="pp-ctrl-slider" min={s.min} max={s.max} step={s.step} value={s.val}
                  onChange={e => s.setter(Number(e.target.value))} />
              </div>
            ))}
            <div className="pp-ctrl-group">
              <div className="pp-ctrl-name" style={{ marginBottom: 10 }}>Wood Type</div>
              <div className="pp-ctrl-wood">
                {Object.entries(woodColors).map(([k, col]) => (
                  <div key={k} className={`pp-wood-opt${woodType === k ? " active" : ""}`}
                    style={{ background: col }} title={woodNames[k]}
                    onClick={() => setWoodType(k)} />
                ))}
              </div>
            </div>
            <div className="pp-builder-result">
              <div className="pp-br-row"><span>Dimensions</span><span>{builderLength} × {builderWidth} × {builderBoards * 48} mm</span></div>
              <div className="pp-br-row"><span>Est. Weight</span><span>{buildEstWeight()} kg</span></div>
              <div className="pp-br-row"><span>Load Capacity</span><span>{builderCap.toLocaleString()} kg</span></div>
              <div className="pp-br-row"><span>Wood Type</span><span>{woodNames[woodType]}</span></div>
              <div className="pp-br-row"><span>ISPM-15</span><span style={{ color: "#5BA85A" }}>✓ Available</span></div>
            </div>
          </div>
          <div className="pp-reveal">
            <PalletCanvas length={builderLength} width={builderWidth} boards={builderBoards} woodType={woodType} />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="pp-section pp-products pp-reveal" id="products">
        <div className="pp-stag">What We Make</div>
        <h2 className="pp-sh">OUR <em>PALLET</em> RANGE</h2>
        <div className="pp-prod-grid">
          {products.map(p => (
            <div key={p.num} className="pp-prod-card">
              <div className="pp-prod-inner">
                <div className="pp-prod-num">{p.num}</div>
                <span className="pp-prod-icon">{p.icon}</span>
                <h3 className="pp-prod-name">{p.name}</h3>
                <p className="pp-prod-desc">{p.desc}</p>
                <div className="pp-prod-tags">{p.tags.map(t => <span key={t} className="pp-ptag">{t}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* India Map */}
      <section className="pp-section pp-map-sec pp-reveal" id="map">
        <div className="pp-stag">Pan-India Delivery</div>
        <h2 className="pp-sh">HOVER A STATE TO <em>EXPLORE</em></h2>
        <div className="pp-map-layout">
          <div className="pp-map-info">
            <div className="pp-map-state-display">
              <div className="pp-msd-name">{hoveredState.name}</div>
              <div className="pp-msd-info">{hoveredState.info}</div>
              {hoveredState.dispatch && (
                <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", padding: "3px 10px", background: "rgba(212,136,10,.15)", border: "1px solid rgba(212,136,10,.4)", color: "var(--amber)" }}>
                    🚚 Dispatch: {hoveredState.dispatch}
                  </span>
                  {hoveredState.hub && (
                    <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", padding: "3px 10px", background: "rgba(212,136,10,.3)", border: "1px solid var(--amber)", color: "var(--amber)" }}>
                      ★ KEY HUB
                    </span>
                  )}
                </div>
              )}
            </div>
            <div className="pp-map-stats">
              {[["28+", "States Covered"], ["48H", "Avg Dispatch"], ["15+", "Export Countries"], ["500+", "Happy Clients"]].map(([n, l]) => (
                <div key={l} className="pp-ms-item"><div className="pp-ms-n">{n}</div><div className="pp-ms-l">{l}</div></div>
              ))}
            </div>
            <div className="pp-hubs">
              <div className="pp-hubs-title">Key Hubs</div>
              <div className="pp-hubs-list">
                {["Hyderabad", "Mumbai", "Delhi", "Chennai", "Bangalore", "Pune"].map(h => (
                  <span key={h} className="pp-hub-tag">{h}</span>
                ))}
              </div>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <svg id="pp-indiaMap" viewBox="0 0 500 560" xmlns="http://www.w3.org/2000/svg"
              onMouseLeave={() => {
                setTooltip(t => ({ ...t, visible: false }));
                setHoveredState({ name: "Hover any state", info: "We deliver to all 28 states and 8 UTs across India", dispatch: null, hub: false });
              }}>
              <g>
                {states.map(s => (
                  <path key={s.name} d={s.d}
                    style={{ fill: s.special ? s.fill : "var(--wood-pale)", opacity: s.opacity || 1 }}
                    onMouseEnter={(e) => {
                      setHoveredState({ name: s.name, info: s.info, dispatch: s.dispatch, hub: s.hub || false });
                      const rect = e.currentTarget.closest("svg").getBoundingClientRect();
                      const x = e.clientX;
                      const y = e.clientY;
                      setTooltip({ visible: true, x, y, state: s });
                    }}
                    onMouseMove={(e) => {
                      setTooltip(t => ({ ...t, x: e.clientX, y: e.clientY }));
                    }}
                    onMouseLeave={() => setTooltip(t => ({ ...t, visible: false }))}
                  />
                ))}
              </g>
              <circle cx="252" cy="382" r="6" fill="#D4880A" stroke="#fff" strokeWidth="2" />
              <circle cx="252" cy="382" r="12" fill="none" stroke="#D4880A" strokeWidth="1.5" opacity=".5">
                <animate attributeName="r" from="6" to="18" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" from=".8" to="0" dur="2s" repeatCount="indefinite" />
              </circle>
              <text x="260" y="373" fontFamily="'Barlow Condensed',sans-serif" fontSize="10" fill="#D4880A" fontWeight="600" letterSpacing="1">HYDERABAD HQ</text>
            </svg>
            {/* Floating Tooltip */}
            {tooltip.state && (
              <div className={`pp-map-tooltip${tooltip.visible ? " visible" : ""}`}
                style={{ left: tooltip.x + 14, top: tooltip.y - 10, position: "fixed" }}>
                <div className="pp-tt-name">{tooltip.state.name}</div>
                <div className="pp-tt-info">{tooltip.state.info}</div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {tooltip.state.dispatch && (
                    <span className="pp-tt-badge">🚚 {tooltip.state.dispatch}</span>
                  )}
                  {tooltip.state.hub && (
                    <span className="pp-tt-badge hub">★ Key Hub</span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="pp-section pp-calc-sec pp-reveal" id="calculator">
        <div className="pp-stag">Smart Tool</div>
        <h2 className="pp-sh">INSTANT QUOTE <em>CALCULATOR</em></h2>
        <div className="pp-calc-layout">
          <div className="pp-calc-form">
            <div className="pp-cf-group">
              <label className="pp-cf-label">Pallet Type</label>
              <select className="pp-cf-select" value={calcType} onChange={e => setCalcType(e.target.value)}>
                <option value="standard">Standard Wooden Pallet</option>
                <option value="export">ISPM-15 Export Pallet</option>
                <option value="euro">Euro / EPAL Pallet</option>
                <option value="plywood">Plywood Pallet</option>
                <option value="heavy">Heavy Duty Pallet</option>
                <option value="custom">Custom / Bespoke</option>
              </select>
            </div>
            <div className="pp-cf-group">
              <label className="pp-cf-label">Quantity Required</label>
              <input className="pp-cf-input" type="number" placeholder="e.g. 500" min="50" value={calcQty}
                onChange={e => setCalcQty(Number(e.target.value))} />
            </div>
            <div className="pp-cf-group">
              <label className="pp-cf-label">Size</label>
              <select className="pp-cf-select" value={calcSize} onChange={e => setCalcSize(e.target.value)}>
                <option value="1200x800">1200 × 800 mm (Euro)</option>
                <option value="1200x1000">1200 × 1000 mm</option>
                <option value="1100x1100">1100 × 1100 mm</option>
                <option value="custom">Custom Size</option>
              </select>
            </div>
            <div className="pp-cf-group">
              <label className="pp-cf-label">Delivery Location</label>
              <select className="pp-cf-select" value={calcDel} onChange={e => setCalcDel(e.target.value)}>
                <option value="local">Hyderabad (Local)</option>
                <option value="ap">Andhra Pradesh / Telangana</option>
                <option value="south">South India</option>
                <option value="pan">Pan India</option>
                <option value="export">International Export</option>
              </select>
            </div>
            <button className="pp-calc-btn" onClick={() => { calculateQuote(); playKnock(); }}>Calculate Estimate →</button>
          </div>
          <div className="pp-calc-result">
            <div className="pp-cr-title">Live Estimate</div>
            <div>
              <span className="pp-cr-big">{calcResult.lead}</span>
              <span className="pp-cr-unit"> DAYS</span>
            </div>
            <div className="pp-cr-bars">
              {[30, 50, 80, 60, 90, 70, 45].map((h, i) => <div key={i} className="pp-cr-bar" style={{ height: `${h}%` }} />)}
            </div>
            <div className="pp-cr-breakdown">
              {calcResult.breakdown.map(r => (
                <div key={r.label} className="pp-cr-row">
                  <span>{r.label}</span>
                  <span style={r.green ? { color: "#5BA85A" } : {}}>{r.val}</span>
                </div>
              ))}
              <div className="pp-cr-row" style={{ paddingTop: 10, borderTop: "1px solid rgba(255,255,255,.08)", marginTop: 4 }}>
                <span>Next Step</span><span style={{ color: "var(--amber)" }}>Request formal quote →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="pp-section pp-process" id="process">
        <div className="pp-stag pp-reveal">How We Work</div>
        <h2 className="pp-sh pp-reveal">FROM <em>TIMBER</em> TO YOUR DOOR</h2>
        <div className="pp-proc-timeline">
          {processSteps.map((step, i) => (
            <div key={step.title} className="pp-pt-step" style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="pp-pt-dot" />
              <div className="pp-pt-icon">{step.icon}</div>
              <div className="pp-pt-body">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              <div className="pp-pt-num">{String(i + 1).padStart(2, "0")}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="pp-section pp-why pp-reveal" id="why">
        <div className="pp-stag">Why Choose Us</div>
        <h2 className="pp-sh">THE <em>Desi pallet</em> DIFFERENCE</h2>
        <div className="pp-why-grid">
          <div>
            {[
              ["01", "Consistent Quality", "Every batch inspected before dispatch. Board thickness, nail spacing and moisture content documented against international standards."],
              ["02", "48-Hour Turnaround", "Standard orders dispatched within 48 hours. Ready stock for common sizes. Bulk 500+ units within 5 working days."],
              ["03", "Competitive Rates", "Volume-based transparent pricing. No hidden charges. Discounts from 100 pieces onwards."],
              ["04", "Pan-India Delivery", "Full coverage — Hyderabad, Mumbai, Delhi, Chennai, Pune, Bangalore and all industrial zones."],
              ["05", "Export Expertise", "In-house HT facility. All ISPM-15 stamps and certificates. Trusted by exporters to USA, EU and Middle East."],
            ].map(([num, title, desc]) => (
              <div key={num} className="pp-wi">
                <div className="pp-wi-n">{num}</div>
                <div className="pp-wi-b"><h3>{title}</h3><p>{desc}</p></div>
              </div>
            ))}
          </div>
          <div className="pp-wvisual">
            <div className="pp-wvi"><img src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=75" alt="Warehouse" /><div className="pp-wv-lbl">Warehouse ops</div></div>
            <div className="pp-wvi"><img src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=75" alt="Logistics" /><div className="pp-wv-lbl">Logistics</div></div>
            <div className="pp-wvi"><img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=75" alt="Timber" /><div className="pp-wv-lbl">Quality timber</div></div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="pp-section pp-inds pp-reveal" id="industries">
        <div className="pp-stag">Who We Serve</div>
        <h2 className="pp-sh">INDUSTRIES WE <em>SUPPLY</em></h2>
        <div className="pp-ig">
          {industries.map(ind => (
            <div key={ind.name} className="pp-ic">
              <span className="pp-ic-icon">{ind.icon}</span>
              <h3 className="pp-ic-name">{ind.name}</h3>
              <p className="pp-ic-desc">{ind.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="pp-section pp-testi pp-reveal" id="testi">
        <div className="pp-stag">Client Voices</div>
        <h2 className="pp-sh">WHAT CLIENTS <em>SAY</em></h2>
        <div className="pp-testi-slider">
          <div className="pp-tslides" style={{ transform: `translateX(-${testiSlide * 100}%)` }}>
            {testimonialSlides.map((slide, si) => (
              <div key={si} className="pp-tslide">
                <div className="pp-tc-inner">
                  {slide.map(t => (
                    <div key={t.name} className="pp-tc">
                      <div className="pp-tq">"</div>
                      <p className="pp-ttext">{t.text}</p>
                      <div className="pp-tauth">
                        <div className="pp-tav">{t.initials}</div>
                        <div><div className="pp-taname">{t.name}</div><div className="pp-taco">{t.company}</div></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="pp-testi-nav">
            <button className="pp-t-btn" onClick={() => setTestiSlide(s => Math.max(0, s - 1))}>←</button>
            <div className="pp-t-progress">
              <div className="pp-t-fill" style={{ width: `${((testiSlide + 1) / testimonialSlides.length) * 100}%` }} />
            </div>
            <button className="pp-t-btn" onClick={() => setTestiSlide(s => Math.min(testimonialSlides.length - 1, s + 1))}>→</button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="pp-section pp-contact-sec pp-reveal" id="contact">
        <div className="pp-stag">Get In Touch</div>
        <h2 className="pp-sh">REQUEST A <em>QUOTE</em></h2>
        <div className="pp-cgrid">
          <div className="pp-cinfo">
            {[
              ["📍", "Factory", "IDA Jeedimetla, Hyderabad", "Telangana — 500 055, India"],
              ["📞", "Call Us", "+91 40 4006 2841", "Mon–Sat · 9:00 AM – 6:00 PM"],
              ["✉️", "Email", "sales@Desi pallet.in", "Response within 4 business hours"],
              ["💬", "WhatsApp", "+91 98765 43210", "Quick quotes and order tracking"],
            ].map(([icon, lbl, val, sub]) => (
              <div key={lbl} className="pp-citem">
                <div className="pp-cicon">{icon}</div>
                <div><div className="pp-cilbl">{lbl}</div><div className="pp-cival">{val}</div><div className="pp-cisub">{sub}</div></div>
              </div>
            ))}
            <div className="pp-quick-facts">
              <div className="pp-qf-title">Quick Facts</div>
              {[["Standard dispatch", "48 hours"], ["Bulk order lead", "5 working days"], ["Minimum order qty", "50 pieces"], ["Custom lead time", "7 days"]].map(([l, v]) => (
                <div key={l} className="pp-qf-row"><span>{l}</span><span>{v}</span></div>
              ))}
            </div>
          </div>
          <div className="pp-cform">
            <div className="pp-crow">
              <div className="pp-cg"><label>Your Name</label><input type="text" placeholder="John Smith" value={formData.name} onChange={e => setFormData(f => ({ ...f, name: e.target.value }))} /></div>
              <div className="pp-cg"><label>Company</label><input type="text" placeholder="Your Company Ltd." value={formData.company} onChange={e => setFormData(f => ({ ...f, company: e.target.value }))} /></div>
            </div>
            <div className="pp-crow">
              <div className="pp-cg"><label>Phone</label><input type="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={e => setFormData(f => ({ ...f, phone: e.target.value }))} /></div>
              <div className="pp-cg"><label>Email</label><input type="email" placeholder="email@company.com" value={formData.email} onChange={e => setFormData(f => ({ ...f, email: e.target.value }))} /></div>
            </div>
            <div className="pp-crow">
              <div className="pp-cg">
                <label>Pallet Type</label>
                <select value={formData.palletType} onChange={e => { setFormData(f => ({ ...f, palletType: e.target.value })); if (e.target.value !== "Others") setOthersChecked([]); }}>
                  <option>Standard Wooden Pallet</option><option>ISPM-15 Export</option>
                  <option>Euro / EPAL</option><option>Plywood Pallet</option>
                  <option>Heavy Duty</option><option>Custom / Bespoke</option>
                  <option>Others</option>
                </select>
                {formData.palletType === "Others" && (
                  <div className="pp-others-panel">
                    <div className="pp-others-title">Select all that apply</div>
                    <div className="pp-others-checks">
                      {othersOptions.map(opt => {
                        const checked = othersChecked.includes(opt);
                        return (
                          <label key={opt} className={`pp-others-check${checked ? " selected" : ""}`}>
                            <input type="checkbox" checked={checked}
                              onChange={() => setOthersChecked(prev =>
                                checked ? prev.filter(o => o !== opt) : [...prev, opt]
                              )} />
                            <span>{opt}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
              <div className="pp-cg"><label>Quantity</label><input type="number" placeholder="e.g. 500" value={formData.qty} onChange={e => setFormData(f => ({ ...f, qty: e.target.value }))} /></div>
            </div>
            <div className="pp-cg"><label>Additional Requirements</label>
              <textarea placeholder="Size, wood type, delivery location, ISPM-15 needed, export destination..." value={formData.message} onChange={e => setFormData(f => ({ ...f, message: e.target.value }))} />
            </div>
            <button className={`pp-csub${formSending ? " pp-form-sending" : ""}`} onClick={sendQuote}>
              {formSending ? "Sending..." : "Send Quote Request →"}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pp-footer">
        <div className="pp-fg">
          <div>
            <a href="#home" className="pp-logo">
              <div className="pp-logo-icon"><b /><b /><b /></div>
              <div className="pp-logo-text" style={{ color: "#fff" }}>DESI<em>PALLET</em></div>
            </a>
            <p className="pp-fd">Hyderabad's trusted wooden pallet manufacturer. ISPM-15 certified. Custom built. Nationwide delivery. Supplying quality pallets to India and the world since 2024.</p>
          </div>
          <div>
            <h4 className="pp-fct">Products</h4>
            <ul className="pp-fl">
              {["Standard Pallets", "ISPM-15 Export", "Euro / EPAL", "Plywood Pallets", "Heavy Duty", "Custom Orders"].map(l => <li key={l}><a href="#products">{l}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="pp-fct">Industries</h4>
            <ul className="pp-fl">
              {["Logistics", "Pharmaceuticals", "Food & Beverage", "Automotive", "Construction", "Export"].map(l => <li key={l}><a href="#industries">{l}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="pp-fct">Company</h4>
            <ul className="pp-fl">
              {["About Us", "Certifications", "3D Builder", "Quote Calculator", "Careers", "Contact"].map(l => <li key={l}><a href="#contact">{l}</a></li>)}
            </ul>
          </div>
        </div>
        <div className="pp-fbot">
          <span>© 2024 Desi pallet. All rights reserved. Made in <span className="highlight">Hyderabad 🇮🇳</span></span>
          <span>ISPM-15 · EPAL · GMA · ISO Certified</span>
        </div>
      </footer>

      {/* Toast */}
      <div className={`pp-toast${toast.show ? " show" : ""}${toast.error ? " error" : ""}`}>{toast.msg}</div>

      {/* Back to Top */}
      <button className={`pp-btt${showBtt ? " show" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑</button>
    </div>
  );
}
