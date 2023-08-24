/* empty css                               */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderComponent, f as renderSlot, m as maybeRenderHead } from '../astro.01a06957.mjs';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

const avatar = "/_astro/avatar.2fcb2c3c.jpg";

function useMediaQuery(query) {
  const getMatches = (query2) => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query2).matches;
    }
    return false;
  };
  const [matches, setMatches] = useState(getMatches(query));
  function handleChange() {
    setMatches(getMatches(query));
  }
  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();
    matchMedia.addEventListener("change", handleChange);
    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]);
  return matches;
}
__astro_tag_component__(useMediaQuery, "@astrojs/react");

const itemMotion = {
  visible: {
    opacity: 1,
    x: 0
  },
  hidden: {
    opacity: 0,
    x: -100
  }
};
const itemMotionDesktop = {
  visible: {
    opacity: 1,
    x: 0
  },
  hidden: {
    opacity: 1,
    x: 0
  }
};
const navLinks = [{
  name: "Home",
  href: "/",
  id: 1
}, {
  name: "Contact",
  href: "/contact",
  id: 2
}];
const NavLinks = ({
  isMobile,
  className
}) => /* @__PURE__ */ jsx("div", {
  className,
  children: navLinks.map(({
    name,
    href,
    id
  }) => /* @__PURE__ */ jsx(motion.a, {
    style: {
      fontFamily: "aAtmospheric"
    },
    variants: isMobile ? itemMotion : itemMotionDesktop,
    href,
    children: name
  }, id))
});
function Nav() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 768px)");
  return /* @__PURE__ */ jsxs("nav", {
    className: "text-white relative mx-8 mb-10 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32",
    children: [/* @__PURE__ */ jsx("a", {
      href: "/",
      className: "flex gap-12",
      children: /* @__PURE__ */ jsx("img", {
        src: avatar,
        width: "60rem",
        style: {
          borderRadius: "50%"
        },
        alt: "Logo"
      })
    }), toggled && /* @__PURE__ */ jsx(motion.div, {
      className: "fixed left-0 top-0  z-50 flex h-screen\n          w-full flex-col items-center  justify-center  gap-24 bg-dark text-2xl font-bold",
      children: /* @__PURE__ */ jsx(NavLinks, {
        className: " flex flex-col gap-24 text-lg ",
        isMobile: !matches
      })
    }), matches && /* @__PURE__ */ jsx(motion.div, {
      animate: {
        opacity: 1,
        x: 0
      },
      initial: {
        opacity: 0,
        x: 25
      },
      transition: {
        delay: 0.35
      },
      className: " xl:flex xl:items-center  xl:justify-center xl:gap-12 xl:text-lg   ",
      children: /* @__PURE__ */ jsx(NavLinks, {
        className: "flex gap-12",
        isMobile: matches
      })
    }), /* @__PURE__ */ jsxs(motion.div, {
      animate: {
        opacity: 1,
        x: 0
      },
      initial: {
        opacity: 0,
        x: 25
      },
      transition: {
        delay: 0.35
      },
      onClick: () => setToggled((prevToggle) => !prevToggle),
      className: "burger z-50 cursor-pointer space-y-1.5 sm:block md:hidden",
      children: [/* @__PURE__ */ jsx(motion.span, {
        animate: {
          rotateZ: toggled ? 45 : 0,
          y: toggled ? 8 : 0
        },
        className: "line-1 block h-0.5 w-8 bg-white"
      }), /* @__PURE__ */ jsx(motion.span, {
        animate: {
          width: toggled ? 0 : 24
        },
        className: "line-2 block h-0.5 w-6 bg-white"
      }), /* @__PURE__ */ jsx(motion.span, {
        animate: {
          rotateZ: toggled ? -45 : 0,
          y: toggled ? -8 : 0,
          width: toggled ? 32 : 24
        },
        className: "line-3 block h-0.5 w-4 bg-white"
      })]
    })]
  });
}
__astro_tag_component__(Nav, "@astrojs/react");

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="CCX">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<meta${addAttribute(title, "title")}>
		<meta name="view-transition" content="same-origin">
	${renderHead()}</head>
	<body>
		${renderComponent($$result, "Nav", Nav, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/nais/Projects/ccx/src/components/Nav", "client:component-export": "default" })}
		${renderSlot($$result, $$slots["default"])}
	<footer class="text-center text-white/70">make with love by Nadia</footer>

</body></html>`;
}, "/Users/nais/Projects/ccx/src/layouts/Layout.astro", void 0);

const dreamer = "/dreamer.jpg";

const alliwantisyou = "/alliwantisyou.jpg";

const funkandbass = "/funkandbass.jpg";

const orchid = "/orchid.jpg";

const stronger = "/unchained.jpg";

const yatuza = "/yatuza.jpg";

const unveiled = "/unveiled.jpg";

const releases = [
  {
    id: "unveiled",
    soundcloudId: 1342565455,
    name: "Unveiled",
    img: unveiled
  },
  {
    id: "stronger",
    soundcloudId: 1196616841,
    name: "Stronger",
    img: stronger
  },
  {
    id: "yatuza",
    img: yatuza,
    name: "Tactics",
    soundcloudId: 1567961161
  },
  {
    id: "orchid",
    img: orchid,
    name: "Orchid",
    soundcloudId: 1554278137
  },
  {
    id: "dreamer",
    img: dreamer,
    name: "Dreamer",
    soundcloudId: 898183684
  },
  {
    id: "alliwantisyou",
    img: alliwantisyou,
    name: "All I Want Is You",
    soundcloudId: 863850649
  },
  {
    id: "funkandbass",
    img: funkandbass,
    name: "Funk and Bass",
    soundcloudId: 525481956
  }
];

const $$Astro = createAstro();
const $$release = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$release;
  const { release } = Astro2.params;
  const info = releases.find((b) => b.id === release);
  if (!info) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": info.id }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<video autoplay muted loop id="backgroundVideo">
    <source src="/public/videos/explotion.mp4" type="video/mp4">
  </video>
  <main class="max-h-screen mx-4 flex flex-col justify-center items-center">
    <div class="flex max-h-screen items-center justify-center">
      <div class="overflow-hidden aspect-[500/500] cursor-pointer rounded-xl relative group">
        <div class="w-full rounded-xl z-40 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute inset-x-0 -bottom-2 pt-30 text-white flex items-end">
          <div>
              <div class="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 bg-gradient-to-t from-black to-transparent pb-10 transform transition duration-300 ease-in-out">
                <div class="font-bold uppercase">${info.name}</div>
                <div class="opacity-80 text-sm w-full">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quis culpa explicabo harum! Non asperiores enim nam? Sint, similique tenetur labore ratione harum omnis ea temporibus culpa expedita dignissimos id.
                </div>
              </div>
          </div>
        </div>
        <img class="object-cover w-full aspect-[500/500] group-hover:scale-110 transition duration-500 ease-in-out"${addAttribute(info.img, "src")}${addAttribute(`${info.id}`, "alt")}${addAttribute(`view-transition-name: release-${info.id}`, "style")}>
      </div>
    </div>
    <div class="pt-4 sm:w-[350px] md:w-[500px]">
      <iframe id="soundcloud" height="166" width="100%" max-width="100%" allow="autoplay" class="soundcloud"${addAttribute(`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${info.soundcloudId}&amp;color=f9ac45ff&show_artwork=false&single_active=true&show_playcount=false`, "src")}>
      </iframe>
    </div>
  </main>
` })}`;
}, "/Users/nais/Projects/ccx/src/pages/[release].astro", void 0);

const $$file = "/Users/nais/Projects/ccx/src/pages/[release].astro";
const $$url = "/[release]";

const _release_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$release,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _release_ as _, releases as r };
