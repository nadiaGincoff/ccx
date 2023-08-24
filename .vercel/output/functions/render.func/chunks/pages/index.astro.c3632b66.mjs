/* empty css                               */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderComponent } from '../astro.01a06957.mjs';
import { r as releases, $ as $$Layout } from './_release_.astro.afb01f34.mjs';
/* empty css                           */import 'framer-motion';
import 'react';
import 'react/jsx-runtime';

const paint = "/paint.png";

const portrait = "/main-portrait.jpg";

const $$Astro$3 = createAstro();
const $$Intro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Intro;
  return renderTemplate`${maybeRenderHead()}<div class="text-white relative mx-12 pt-16 flex flex-col items-center justify-center gap-12 xl:flex-row xl:gap-36 h-full astro-U43OZX4M" slot="content">
  <div class="w-full xl:w-1/2 astro-U43OZX4M">
    <h1 class="text-3xl astro-U43OZX4M">
      <span class="font-bold text-xl md:text-4xl upper atmospheric  astro-U43OZX4M">
        Inspired by sound vibration<span class="font-bold text-primary astro-U43OZX4M">.</span>
      </span>
    </h1>
    <div class="relative mt-12 astro-U43OZX4M">
      <svg class="absolute h-full w-full overflow-visible astro-U43OZX4M">
        <defs class="astro-U43OZX4M">
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" class="astro-U43OZX4M">
            <stop offset="0%"${addAttribute({ stopColor: "#f9ac45ff", stopOpacity: 1 }, "style")} class="astro-U43OZX4M"></stop>
            <stop offset="100%"${addAttribute({ stopColor: "#3b7366", stopOpacity: 1 }, "style")} class="astro-U43OZX4M"></stop>
          </linearGradient>
        </defs>
        <path id="border-path" fill="none" stroke="url(#gradient)" stroke-width="2" class="astro-U43OZX4M">
        </path>
      </svg>
      <p id="anim-p" class="text-l md:text-xl sm:p-5 md:p-10 text-main text-white/70 astro-U43OZX4M">
        Hey there, I'm <span class="font-bold text-primary astro-U43OZX4M">CCX</span> a drum and bass music artist proudly representing Buenos Aires, Argentina. <br class="astro-U43OZX4M"> 
        <br class="astro-U43OZX4M"> 
        Rhythm runs through my veins, and I've cultivated a deep love for crafting captivating beats that set dancefloors ablaze.<br class="astro-U43OZX4M"> 
        <br class="astro-U43OZX4M"> 
        Drawing inspiration from the vibrant energy of my city, my tracks blend infectious grooves and mesmerizing melodies, taking listeners on an electrifying sonic journey.  <br class="astro-U43OZX4M"> 
        <br class="astro-U43OZX4M"> As both a skilled producer and a magnetic performer, I'm driven to push the boundaries of drum and bass, aiming to leave a lasting impact on the genre. Keep your eyes and ears open as I continue to make waves and share my passion with the world. Let's ride this musical journey together!
      </p>
    </div>
    <div class="flex justify-center pt-20 pb-12 text-center text-main text-content xl:gap-16 astro-U43OZX4M">
      <h1 class="text-center text-2xl md:text-3xl  block mx-10 font-[aAtmospheric] astro-U43OZX4M">

      </h1>
    </div>
  </div>
  <div class="relative astro-U43OZX4M">
    <img class="max-h-[500px] astro-U43OZX4M"${addAttribute(portrait, "src")} alt="Hua's portrait">
    <div id="paint" class="absolute bottom-0 right-0 translate-y-1/4 astro-U43OZX4M">
      <img${addAttribute(paint, "src")} alt="paint" class="astro-U43OZX4M">
    </div>
  </div>
</div>

<div class="mt-12 h-4 w-full bg-red astro-U43OZX4M"></div>`;
}, "/Users/nais/Projects/ccx/src/components/Intro.astro", void 0);

const $$Astro$2 = createAstro();
const $$ReleaseItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ReleaseItem;
  const { release } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="sm:w-[350px] group relative cursor-pointer hover:scale-105 inline-block transition-all hover:contrast-125 hover:shadow-2xl">
  <a${addAttribute(`/${release.id}`, "href")}>
    <img class="sm:w-[350px] sm:h-[350px] md:aspect-[500/500] shadow-md relative z-10 w-full rounded-lg transition-all group-hover:-translate-xy-1 contrast-110"${addAttribute(release.img, "src")}${addAttribute(`${release.id}`, "alt")}${addAttribute(`view-transition-name: release-${release.id}`, "style")}>
    <div class="sm:w-[350px] sm:h-[350px] md:aspect-[500/500] absolute left-0 top-0 h-full w-full rounded-lg bg-black transition-all group-hover:translate-x-2 group-hover:translate-y-4">
    </div>
  </a> 
</div>`;
}, "/Users/nais/Projects/ccx/src/components/ReleaseItem.astro", void 0);

const $$Astro$1 = createAstro();
const $$ReleaseGallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ReleaseGallery;
  return renderTemplate`${maybeRenderHead()}<h1 class="text-white my-24 text-center text-4xl text-sp astro-TWMODPTP"${addAttribute({ fontFamily: "aAtmospheric" }, "style")}>
  DISCOGRAPHY<span class="font-bold text-primary astro-TWMODPTP">.</span>
</h1> 
<ul class="flex flex-row flex-wrap justify-center items-center gap-10 pb-16 astro-TWMODPTP">
  ${releases.map((release) => {
    return renderTemplate`<li class="astro-TWMODPTP">
          ${renderComponent($$result, "ReleaseItem", $$ReleaseItem, { "release": release, "class": "astro-TWMODPTP" })}
        </li>`;
  })}
</ul>`;
}, "/Users/nais/Projects/ccx/src/components/ReleaseGallery.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Artist" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<main class="m-auto w-full flex justify-center items-center flex-col">
		${renderComponent($$result2, "Intro", $$Intro, {})}
		${renderComponent($$result2, "ReleaseGallery", $$ReleaseGallery, {})}
	</main>
` })}`;
}, "/Users/nais/Projects/ccx/src/pages/index.astro", void 0);

const $$file = "/Users/nais/Projects/ccx/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
