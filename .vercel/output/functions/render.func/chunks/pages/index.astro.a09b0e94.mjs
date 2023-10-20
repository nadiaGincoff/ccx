/* empty css                               */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderComponent } from '../astro.c6a359d0.mjs';
import 'html-escaper';
import { r as releases, $ as $$Layout } from './_release_.astro.77d48754.mjs';
/* empty css                           */import 'framer-motion';
import 'react';
import 'react/jsx-runtime';

const paint = "/paint.png";

const portrait = "/main-portrait.jpg";

const $$Astro$3 = createAstro();
const $$Intro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Intro;
  return renderTemplate`${maybeRenderHead()}<div class="text-black relative mx-12 flex flex-col items-center justify-center gap-12 xl:flex-row xl:gap-36 astro-U43OZX4M">
  <div class="w-full xl:w-1/2 astro-U43OZX4M">
    <h1 class="text-3xl astro-U43OZX4M">
      <span class="font-bold text-2xl md:text-4xl upper atmospheric  astro-U43OZX4M">
        Inspired by sound vibration. 
      </span>
    </h1>
    <div class="relative mt-12 astro-U43OZX4M">
      <svg class="absolute h-full w-full overflow-visible astro-U43OZX4M">
        <defs class="astro-U43OZX4M">
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" class="astro-U43OZX4M">
            <stop offset="0%"${addAttribute({ stopColor: "#84D290", stopOpacity: 1 }, "style")} class="astro-U43OZX4M"></stop>
            <stop offset="100%"${addAttribute({ stopColor: "#3b7366", stopOpacity: 1 }, "style")} class="astro-U43OZX4M"></stop>
          </linearGradient>
        </defs>
        <path id="border-path" fill="none" stroke="url(#gradient)" stroke-width="4" class="astro-U43OZX4M">
        </path>
      </svg>
      <p id="anim-p" class="p-6 text-main astro-U43OZX4M">
        Hey there, I'm <span class="font-bold text-[#84D290] astro-U43OZX4M">Joaquin Wilson</span> a drum and bass music artist proudly representing Buenos Aires, Argentina. <br class="astro-U43OZX4M"> 
        <br class="astro-U43OZX4M"> 
        Rhythm runs through my veins, and I've cultivated a deep love for crafting captivating beats that set dancefloors ablaze.<br class="astro-U43OZX4M"> 
        <br class="astro-U43OZX4M"> 
        Drawing inspiration from the vibrant energy of my city, my tracks blend infectious grooves and mesmerizing melodies, taking listeners on an electrifying sonic journey.  <br class="astro-U43OZX4M"> 
        <br class="astro-U43OZX4M"> As both a skilled producer and a magnetic performer, I'm driven to push the boundaries of drum and bass, aiming to leave a lasting impact on the genre. Keep your eyes and ears open as I continue to make waves and share my passion with the world. Let's ride this musical journey together!
      </p>
    </div>
    <div class="flex justify-center pt-20 pb-12 text-center text-main text-content xl:gap-16 astro-U43OZX4M">
      <h1 class="text-center text-2xl md:text-3xl  block mx-10 font-[aAtmospheric] astro-U43OZX4M">
        Don't repeat yourself.
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

<div class="mt-12 h-4 w-full bg-black astro-U43OZX4M"></div>`;
}, "/home/nadiaginc/projects/practice-projects/astro/ccx/src/components/Intro.astro", void 0);

const $$Astro$2 = createAstro();
const $$ReleaseItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ReleaseItem;
  const { release } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="group relative cursor-pointer hover:scale-105 inline-block transition-all hover:contrast-125 hover:shadow-2xl">
  <a${addAttribute(`/${release.id}`, "href")}>
    <img class="aspect-[500/500] shadow-md relative z-10 w-full rounded-lg transition-all group-hover:-translate-x-3 contrast-110"${addAttribute(release.img, "src")}${addAttribute(`${release.id}`, "alt")}${addAttribute(`view-transition-name: release-${release.id}`, "style")}>
    <div class="aspect-[500/500] absolute left-0 top-0 h-full w-full rounded-lg bg-black transition-all group-hover:translate-x-2 group-hover:translate-y-4">
    </div>
  </a> 
</div>`;
}, "/home/nadiaginc/projects/practice-projects/astro/ccx/src/components/ReleaseItem.astro", void 0);

const $$Astro$1 = createAstro();
const $$ReleaseGallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ReleaseGallery;
  return renderTemplate`${maybeRenderHead()}<h1 class="my-24 text-center text-4xl"${addAttribute({ fontFamily: "aAtmospheric" }, "style")}>
    Latest releases
  </h1> 
  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 md:gap-24 px-5">
    ${releases.map((release) => {
    return renderTemplate`<li>
            ${renderComponent($$result, "ReleaseItem", $$ReleaseItem, { "release": release })}
          </li>`;
  })}
  </ul>`;
}, "/home/nadiaginc/projects/practice-projects/astro/ccx/src/components/ReleaseGallery.astro", void 0);

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
}, "/home/nadiaginc/projects/practice-projects/astro/ccx/src/pages/index.astro", void 0);

const $$file = "/home/nadiaginc/projects/practice-projects/astro/ccx/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
