/* empty css                               */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderComponent, f as renderSlot, m as maybeRenderHead } from '../astro.4b38ff7d.mjs';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

const avatar = "/avatar.jpg";

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

const navMotion = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15
    }
  },
  hidden: {
    opacity: 0
  }
};
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
  name: "Blog",
  href: "/blog",
  id: 2
}, {
  name: "Contact",
  href: "/contact",
  id: 3
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
    className: "text-black relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32",
    children: [/* @__PURE__ */ jsx("svg", {
      className: "absolute xl:hidden bottom-0 left-1/2 -translate-x-1/2",
      width: "250",
      height: 4,
      viewBox: "0 0 250 4",
      fill: "none",
      xmlns: "https://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(motion.path, {
        d: "M2 2L428 2",
        stroke: "black",
        strokeWidth: 2,
        strokeLinecap: "round",
        animate: {
          pathLength: 1,
          opacity: 1
        },
        initial: {
          pathLength: 0,
          opacity: 0
        },
        transition: {
          delay: 1,
          duration: 0.75
        }
      })
    }), /* @__PURE__ */ jsx(motion.a, {
      href: "/",
      animate: {
        opacity: 1,
        x: 0
      },
      initial: {
        opacity: 0,
        x: -25
      },
      transition: {
        delay: 0.05
      },
      className: "flex gap-12",
      children: /* @__PURE__ */ jsx("img", {
        src: avatar,
        width: "60rem",
        style: {
          borderRadius: "50%"
        },
        alt: "Logo"
      })
    }), !matches && /* @__PURE__ */ jsx("h1", {
      className: "text-4xl font-bold",
      style: {
        fontFamily: "aAtmospheric"
      },
      children: /* @__PURE__ */ jsx("a", {
        href: "/",
        style: {
          fontFamily: "aAtmospheric"
        },
        children: "CCX."
      })
    }), toggled && /* @__PURE__ */ jsx(motion.div, {
      variants: navMotion,
      animate: "visible",
      initial: "hidden",
      className: "fixed left-0 top-0  z-40 flex h-screen\n          w-full flex-col items-center  justify-center  gap-24 bg-white text-2xl font-bold",
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
      onClick: () => setToggled((prevToggle) => !prevToggle),
      className: "burger z-50 cursor-pointer space-y-1.5 md:hidden",
      children: [/* @__PURE__ */ jsx(motion.span, {
        animate: {
          rotateZ: toggled ? 45 : 0,
          y: toggled ? 8 : 0
        },
        className: "line-1 block h-0.5 w-8 bg-black"
      }), /* @__PURE__ */ jsx(motion.span, {
        animate: {
          width: toggled ? 0 : 24
        },
        className: "line-2 block h-0.5 w-6 bg-black"
      }), /* @__PURE__ */ jsx(motion.span, {
        animate: {
          rotateZ: toggled ? -45 : 0,
          y: toggled ? -8 : 0,
          width: toggled ? 32 : 24
        },
        className: "line-3 block h-0.5 w-4 bg-black"
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
		${renderComponent($$result, "Nav", Nav, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/nadiaginc/projects/practice-projects/astro/ccx/src/components/Nav", "client:component-export": "default" })}
		${renderSlot($$result, $$slots["default"])}
	
</body></html>`;
}, "/home/nadiaginc/projects/practice-projects/astro/ccx/src/layouts/Layout.astro");

const dreamer = "/dreamer.jpg";

const alliwantisyou = "/alliwantisyou.jpg";

const funkandbass = "/funkandbass.jpg";

const orchid = "/orchid.jpg";

const unchained = "/unchained.jpg";

const yatuza = "/yatuza.jpg";

const unveiled = "/unveiled.jpg";

const releases = [
  {
    id: "unveiled",
    soundcloudId: 1342565455,
    img: unveiled
  },
  {
    id: "unchained",
    soundcloudId: 1196616841,
    img: unchained
  },
  {
    id: "yatuza",
    img: yatuza,
    soundcloudId: 1567961161
  },
  {
    id: "orchid",
    img: orchid,
    soundcloudId: 1554278137
  },
  {
    id: "dreamer",
    img: dreamer,
    soundcloudId: 898183684
  },
  {
    id: "alliwantisyou",
    img: alliwantisyou,
    soundcloudId: 863850649
  },
  {
    id: "funkandbass",
    img: funkandbass,
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
  ${maybeRenderHead()}<main class="m-auto p-4 h-full flex flex-col justify-center items-center">
    <div class="flex flex-col">
      <picture class="mb-8 w-full relative">
        <img class="aspect-[500/500] shadow-md relative z-10 w-full rounded-lg transition-all group-hover:-translate-x-3 contrast-110"${addAttribute(info.img, "src")}${addAttribute(`${info.id}`, "alt")}${addAttribute(`view-transition-name: release-${info.id}`, "style")}>
      </picture>
    </div>
    <div class="w-full md:px-10">
      <iframe id="soundcloud" width="100%" height="166" scrolling="yes" frameborder="no" allow="autoplay"${addAttribute(`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${info.soundcloudId}&amp;color=84D290&show_artwork=false&single_active=true`, "src")}>
      </iframe>
    </div>
  </main>
` })}`;
}, "/home/nadiaginc/projects/practice-projects/astro/ccx/src/pages/[release].astro");

const $$file = "/home/nadiaginc/projects/practice-projects/astro/ccx/src/pages/[release].astro";
const $$url = "/[release]";

const _release_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$release,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _release_ as _, releases as r };
