const ClientAddressNotAvailable = {
  name: "ClientAddressNotAvailable",
  title: "`Astro.clientAddress` is not available in current adapter.",
  message: (adapterName) => `\`Astro.clientAddress\` is not available in the \`${adapterName}\` adapter. File an issue with the adapter to add support.`
};
const StaticClientAddressNotAvailable = {
  name: "StaticClientAddressNotAvailable",
  title: "`Astro.clientAddress` is not available in static mode.",
  message: "`Astro.clientAddress` is only available when using `output: 'server'` or `output: 'hybrid'`. Update your Astro config if you need SSR features.",
  hint: "See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR."
};
const NoMatchingStaticPathFound = {
  name: "NoMatchingStaticPathFound",
  title: "No static path found for requested path.",
  message: (pathName) => `A \`getStaticPaths()\` route pattern was matched, but no matching static path was found for requested path \`${pathName}\`.`,
  hint: (possibleRoutes) => `Possible dynamic routes being matched: ${possibleRoutes.join(", ")}.`
};
const OnlyResponseCanBeReturned = {
  name: "OnlyResponseCanBeReturned",
  title: "Invalid type returned by Astro page.",
  message: (route, returnedValue) => `Route \`${route ? route : ""}\` returned a \`${returnedValue}\`. Only a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned from Astro files.`,
  hint: "See https://docs.astro.build/en/guides/server-side-rendering/#response for more information."
};
const MissingMediaQueryDirective = {
  name: "MissingMediaQueryDirective",
  title: "Missing value for `client:media` directive.",
  message: 'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided'
};
const NoMatchingRenderer = {
  name: "NoMatchingRenderer",
  title: "No matching renderer found.",
  message: (componentName, componentExtension, plural, validRenderersCount) => `Unable to render \`${componentName}\`.

${validRenderersCount > 0 ? `There ${plural ? "are" : "is"} ${validRenderersCount} renderer${plural ? "s" : ""} configured in your \`astro.config.mjs\` file,
but ${plural ? "none were" : "it was not"} able to server-side render \`${componentName}\`.` : `No valid renderer was found ${componentExtension ? `for the \`.${componentExtension}\` file extension.` : `for this file extension.`}`}`,
  hint: (probableRenderers) => `Did you mean to enable the ${probableRenderers} integration?

See https://docs.astro.build/en/core-concepts/framework-components/ for more information on how to install and configure integrations.`
};
const NoClientEntrypoint = {
  name: "NoClientEntrypoint",
  title: "No client entrypoint specified in renderer.",
  message: (componentName, clientDirective, rendererName) => `\`${componentName}\` component has a \`client:${clientDirective}\` directive, but no client entrypoint was provided by \`${rendererName}\`.`,
  hint: "See https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option for more information on how to configure your renderer."
};
const NoClientOnlyHint = {
  name: "NoClientOnlyHint",
  title: "Missing hint on client:only directive.",
  message: (componentName) => `Unable to render \`${componentName}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,
  hint: (probableRenderers) => `Did you mean to pass \`client:only="${probableRenderers}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`
};
const InvalidGetStaticPathParam = {
  name: "InvalidGetStaticPathParam",
  title: "Invalid value returned by a `getStaticPaths` path.",
  message: (paramType) => `Invalid params given to \`getStaticPaths\` path. Expected an \`object\`, got \`${paramType}\``,
  hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
};
const InvalidGetStaticPathsReturn = {
  name: "InvalidGetStaticPathsReturn",
  title: "Invalid value returned by getStaticPaths.",
  message: (returnType) => `Invalid type returned by \`getStaticPaths\`. Expected an \`array\`, got \`${returnType}\``,
  hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
};
const GetStaticPathsRemovedRSSHelper = {
  name: "GetStaticPathsRemovedRSSHelper",
  title: "getStaticPaths RSS helper is not available anymore.",
  message: "The RSS helper has been removed from `getStaticPaths`. Try the new @astrojs/rss package instead.",
  hint: "See https://docs.astro.build/en/guides/rss/ for more information."
};
const GetStaticPathsExpectedParams = {
  name: "GetStaticPathsExpectedParams",
  title: "Missing params property on `getStaticPaths` route.",
  message: "Missing or empty required `params` property on `getStaticPaths` route.",
  hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
};
const GetStaticPathsInvalidRouteParam = {
  name: "GetStaticPathsInvalidRouteParam",
  title: "Invalid value for `getStaticPaths` route parameter.",
  message: (key, value, valueType) => `Invalid getStaticPaths route parameter for \`${key}\`. Expected undefined, a string or a number, received \`${valueType}\` (\`${value}\`)`,
  hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
};
const GetStaticPathsRequired = {
  name: "GetStaticPathsRequired",
  title: "`getStaticPaths()` function required for dynamic routes.",
  message: "`getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths` function from your dynamic route.",
  hint: `See https://docs.astro.build/en/core-concepts/routing/#dynamic-routes for more information on dynamic routes.

Alternatively, set \`output: "server"\` or \`output: "hybrid"\` in your Astro config file to switch to a non-static server build. This error can also occur if using \`export const prerender = true;\`.
See https://docs.astro.build/en/guides/server-side-rendering/ for more information on non-static rendering.`
};
const ReservedSlotName = {
  name: "ReservedSlotName",
  title: "Invalid slot name.",
  message: (slotName) => `Unable to create a slot named \`${slotName}\`. \`${slotName}\` is a reserved slot name. Please update the name of this slot.`
};
const InvalidComponentArgs = {
  name: "InvalidComponentArgs",
  title: "Invalid component arguments.",
  message: (name) => `Invalid arguments passed to${name ? ` <${name}>` : ""} component.`,
  hint: "Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`."
};
const PageNumberParamNotFound = {
  name: "PageNumberParamNotFound",
  title: "Page number param not found.",
  message: (paramName) => `[paginate()] page number param \`${paramName}\` not found in your filepath.`,
  hint: "Rename your file to `[page].astro` or `[...page].astro`."
};
const PrerenderDynamicEndpointPathCollide = {
  name: "PrerenderDynamicEndpointPathCollide",
  title: "Prerendered dynamic endpoint has path collision.",
  message: (pathname) => `Could not render \`${pathname}\` with an \`undefined\` param as the generated path will collide during prerendering. Prevent passing \`undefined\` as \`params\` for the endpoint's \`getStaticPaths()\` function, or add an additional extension to the endpoint's filename.`,
  hint: (filename) => `Rename \`${filename}\` to \`${filename.replace(/\.(js|ts)/, (m) => `.json` + m)}\``
};
const ResponseSentError = {
  name: "ResponseSentError",
  title: "Unable to set response.",
  message: "The response has already been sent to the browser and cannot be altered."
};
const MiddlewareNoDataOrNextCalled = {
  name: "MiddlewareNoDataOrNextCalled",
  title: "The middleware didn't return a response or call `next`.",
  message: "The middleware needs to either return a `Response` object or call the `next` function."
};
const MiddlewareNotAResponse = {
  name: "MiddlewareNotAResponse",
  title: "The middleware returned something that is not a `Response` object.",
  message: "Any data returned from middleware must be a valid `Response` object."
};
const LocalsNotAnObject = {
  name: "LocalsNotAnObject",
  title: "Value assigned to `locals` is not accepted.",
  message: "`locals` can only be assigned to an object. Other values like numbers, strings, etc. are not accepted.",
  hint: "If you tried to remove some information from the `locals` object, try to use `delete` or set the property to `undefined`."
};
const AstroGlobUsedOutside = {
  name: "AstroGlobUsedOutside",
  title: "Astro.glob() used outside of an Astro file.",
  message: (globStr) => `\`Astro.glob(${globStr})\` can only be used in \`.astro\` files. \`import.meta.glob(${globStr})\` can be used instead to achieve a similar result.`,
  hint: "See Vite's documentation on `import.meta.glob` for more information: https://vitejs.dev/guide/features.html#glob-import"
};
const AstroGlobNoMatch = {
  name: "AstroGlobNoMatch",
  title: "Astro.glob() did not match any files.",
  message: (globStr) => `\`Astro.glob(${globStr})\` did not return any matching files. Check the pattern for typos.`
};

function normalizeLF(code) {
  return code.replace(/\r\n|\r(?!\n)|\n/g, "\n");
}

function codeFrame(src, loc) {
  if (!loc || loc.line === void 0 || loc.column === void 0) {
    return "";
  }
  const lines = normalizeLF(src).split("\n").map((ln) => ln.replace(/\t/g, "  "));
  const visibleLines = [];
  for (let n = -2; n <= 2; n++) {
    if (lines[loc.line + n])
      visibleLines.push(loc.line + n);
  }
  let gutterWidth = 0;
  for (const lineNo of visibleLines) {
    let w = `> ${lineNo}`;
    if (w.length > gutterWidth)
      gutterWidth = w.length;
  }
  let output = "";
  for (const lineNo of visibleLines) {
    const isFocusedLine = lineNo === loc.line - 1;
    output += isFocusedLine ? "> " : "  ";
    output += `${lineNo + 1} | ${lines[lineNo]}
`;
    if (isFocusedLine)
      output += `${Array.from({ length: gutterWidth }).join(" ")}  | ${Array.from({
        length: loc.column
      }).join(" ")}^
`;
  }
  return output;
}

class AstroError extends Error {
  constructor(props, ...params) {
    super(...params);
    this.type = "AstroError";
    const { name, title, message, stack, location, hint, frame } = props;
    this.title = title;
    this.name = name;
    if (message)
      this.message = message;
    this.stack = stack ? stack : this.stack;
    this.loc = location;
    this.hint = hint;
    this.frame = frame;
  }
  setLocation(location) {
    this.loc = location;
  }
  setName(name) {
    this.name = name;
  }
  setMessage(message) {
    this.message = message;
  }
  setHint(hint) {
    this.hint = hint;
  }
  setFrame(source, location) {
    this.frame = codeFrame(source, location);
  }
  static is(err) {
    return err.type === "AstroError";
  }
}

function validateArgs(args) {
  if (args.length !== 3)
    return false;
  if (!args[0] || typeof args[0] !== "object")
    return false;
  return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
  var _a;
  const name = ((_a = moduleId == null ? void 0 : moduleId.split("/").pop()) == null ? void 0 : _a.replace(".astro", "")) ?? "";
  const fn = (...args) => {
    if (!validateArgs(args)) {
      throw new AstroError({
        ...InvalidComponentArgs,
        message: InvalidComponentArgs.message(name)
      });
    }
    return cb(...args);
  };
  Object.defineProperty(fn, "name", { value: name, writable: false });
  fn.isAstroComponentFactory = true;
  fn.moduleId = moduleId;
  fn.propagation = propagation;
  return fn;
}
function createComponentWithOptions(opts) {
  const cb = baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
  return cb;
}
function createComponent(arg1, moduleId, propagation) {
  if (typeof arg1 === "function") {
    return baseCreateComponent(arg1, moduleId, propagation);
  } else {
    return createComponentWithOptions(arg1);
  }
}

const ASTRO_VERSION = "2.10.14";

function createAstroGlobFn() {
  const globHandler = (importMetaGlobResult) => {
    if (typeof importMetaGlobResult === "string") {
      throw new AstroError({
        ...AstroGlobUsedOutside,
        message: AstroGlobUsedOutside.message(JSON.stringify(importMetaGlobResult))
      });
    }
    let allEntries = [...Object.values(importMetaGlobResult)];
    if (allEntries.length === 0) {
      throw new AstroError({
        ...AstroGlobNoMatch,
        message: AstroGlobNoMatch.message(JSON.stringify(importMetaGlobResult))
      });
    }
    return Promise.all(allEntries.map((fn) => fn()));
  };
  return globHandler;
}
function createAstro(site) {
  return {
    site: site ? new URL(site) : void 0,
    generator: `Astro v${ASTRO_VERSION}`,
    glob: createAstroGlobFn()
  };
}

function getHandlerFromModule(mod, method) {
  if (mod[method]) {
    return mod[method];
  }
  if (method === "delete" && mod["del"]) {
    return mod["del"];
  }
  if (mod["all"]) {
    return mod["all"];
  }
  return void 0;
}
async function renderEndpoint(mod, context, ssr) {
  var _a;
  const { request, params } = context;
  const chosenMethod = (_a = request.method) == null ? void 0 : _a.toLowerCase();
  const handler = getHandlerFromModule(mod, chosenMethod);
  if (!ssr && ssr === false && chosenMethod && chosenMethod !== "get") {
    console.warn(`
${chosenMethod} requests are not available when building a static site. Update your config to \`output: 'server'\` or \`output: 'hybrid'\` with an \`export const prerender = false\` to handle ${chosenMethod} requests.`);
  }
  if (!handler || typeof handler !== "function") {
    let response = new Response(null, {
      status: 404,
      headers: {
        "X-Astro-Response": "Not-Found"
      }
    });
    return response;
  }
  if (handler.length > 1) {
    console.warn(`
API routes with 2 arguments have been deprecated. Instead they take a single argument in the form of:

export function get({ params, request }) {
	//...
}

Update your code to remove this warning.`);
  }
  const proxy = new Proxy(context, {
    get(target, prop) {
      if (prop in target) {
        return Reflect.get(target, prop);
      } else if (prop in params) {
        console.warn(`
API routes no longer pass params as the first argument. Instead an object containing a params property is provided in the form of:

export function get({ params }) {
	// ...
}

Update your code to remove this warning.`);
        return Reflect.get(params, prop);
      } else {
        return void 0;
      }
    }
  });
  return handler.call(mod, proxy, request);
}

/**
 * Copyright (C) 2017-present by Andrea Giammarchi - @WebReflection
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

const {replace} = '';
const ca = /[&<>'"]/g;

const esca = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&#39;',
  '"': '&quot;'
};
const pe = m => esca[m];

/**
 * Safely escape HTML entities such as `&`, `<`, `>`, `"`, and `'`.
 * @param {string} es the input to safely escape
 * @returns {string} the escaped input, and it **throws** an error if
 *  the input type is unexpected, except for boolean and numbers,
 *  converted as string.
 */
const escape = es => replace.call(es, ca, pe);

function serializeListValue(value) {
  const hash = {};
  push(value);
  return Object.keys(hash).join(" ");
  function push(item) {
    if (item && typeof item.forEach === "function")
      item.forEach(push);
    else if (item === Object(item))
      Object.keys(item).forEach((name) => {
        if (item[name])
          push(name);
      });
    else {
      item = item === false || item == null ? "" : String(item).trim();
      if (item) {
        item.split(/\s+/).forEach((name) => {
          hash[name] = true;
        });
      }
    }
  }
}
function isPromise(value) {
  return !!value && typeof value === "object" && typeof value.then === "function";
}
async function* streamAsyncIterator(stream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done)
        return;
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}

const escapeHTML = escape;
class HTMLString extends String {
  get [Symbol.toStringTag]() {
    return "HTMLString";
  }
}
const markHTMLString = (value) => {
  if (value instanceof HTMLString) {
    return value;
  }
  if (typeof value === "string") {
    return new HTMLString(value);
  }
  return value;
};
function isHTMLString(value) {
  return Object.prototype.toString.call(value) === "[object HTMLString]";
}

const RenderInstructionSymbol = Symbol.for("astro:render");
function createRenderInstruction(instruction) {
  return Object.defineProperty(instruction, RenderInstructionSymbol, {
    value: true
  });
}
function isRenderInstruction(chunk) {
  return chunk && typeof chunk === "object" && chunk[RenderInstructionSymbol];
}

const PROP_TYPE = {
  Value: 0,
  JSON: 1,
  // Actually means Array
  RegExp: 2,
  Date: 3,
  Map: 4,
  Set: 5,
  BigInt: 6,
  URL: 7,
  Uint8Array: 8,
  Uint16Array: 9,
  Uint32Array: 10
};
function serializeArray(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = value.map((v) => {
    return convertToSerializedForm(v, metadata, parents);
  });
  parents.delete(value);
  return serialized;
}
function serializeObject(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = Object.fromEntries(
    Object.entries(value).map(([k, v]) => {
      return [k, convertToSerializedForm(v, metadata, parents)];
    })
  );
  parents.delete(value);
  return serialized;
}
function convertToSerializedForm(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  const tag = Object.prototype.toString.call(value);
  switch (tag) {
    case "[object Date]": {
      return [PROP_TYPE.Date, value.toISOString()];
    }
    case "[object RegExp]": {
      return [PROP_TYPE.RegExp, value.source];
    }
    case "[object Map]": {
      return [PROP_TYPE.Map, serializeArray(Array.from(value), metadata, parents)];
    }
    case "[object Set]": {
      return [PROP_TYPE.Set, serializeArray(Array.from(value), metadata, parents)];
    }
    case "[object BigInt]": {
      return [PROP_TYPE.BigInt, value.toString()];
    }
    case "[object URL]": {
      return [PROP_TYPE.URL, value.toString()];
    }
    case "[object Array]": {
      return [PROP_TYPE.JSON, serializeArray(value, metadata, parents)];
    }
    case "[object Uint8Array]": {
      return [PROP_TYPE.Uint8Array, Array.from(value)];
    }
    case "[object Uint16Array]": {
      return [PROP_TYPE.Uint16Array, Array.from(value)];
    }
    case "[object Uint32Array]": {
      return [PROP_TYPE.Uint32Array, Array.from(value)];
    }
    default: {
      if (value !== null && typeof value === "object") {
        return [PROP_TYPE.Value, serializeObject(value, metadata, parents)];
      } else if (value === void 0) {
        return [PROP_TYPE.Value];
      } else {
        return [PROP_TYPE.Value, value];
      }
    }
  }
}
function serializeProps(props, metadata) {
  const serialized = JSON.stringify(serializeObject(props, metadata));
  return serialized;
}

const transitionDirectivesToCopyOnIsland = Object.freeze([
  "data-astro-transition-scope",
  "data-astro-transition-persist"
]);
function extractDirectives(inputProps, clientDirectives) {
  let extracted = {
    isPage: false,
    hydration: null,
    props: {}
  };
  for (const [key, value] of Object.entries(inputProps)) {
    if (key.startsWith("server:")) {
      if (key === "server:root") {
        extracted.isPage = true;
      }
    }
    if (key.startsWith("client:")) {
      if (!extracted.hydration) {
        extracted.hydration = {
          directive: "",
          value: "",
          componentUrl: "",
          componentExport: { value: "" }
        };
      }
      switch (key) {
        case "client:component-path": {
          extracted.hydration.componentUrl = value;
          break;
        }
        case "client:component-export": {
          extracted.hydration.componentExport.value = value;
          break;
        }
        case "client:component-hydration": {
          break;
        }
        case "client:display-name": {
          break;
        }
        default: {
          extracted.hydration.directive = key.split(":")[1];
          extracted.hydration.value = value;
          if (!clientDirectives.has(extracted.hydration.directive)) {
            const hydrationMethods = Array.from(clientDirectives.keys()).map((d) => `client:${d}`).join(", ");
            throw new Error(
              `Error: invalid hydration directive "${key}". Supported hydration methods: ${hydrationMethods}`
            );
          }
          if (extracted.hydration.directive === "media" && typeof extracted.hydration.value !== "string") {
            throw new AstroError(MissingMediaQueryDirective);
          }
          break;
        }
      }
    } else if (key === "class:list") {
      if (value) {
        extracted.props[key.slice(0, -5)] = serializeListValue(value);
      }
    } else {
      extracted.props[key] = value;
    }
  }
  for (const sym of Object.getOwnPropertySymbols(inputProps)) {
    extracted.props[sym] = inputProps[sym];
  }
  return extracted;
}
async function generateHydrateScript(scriptOptions, metadata) {
  const { renderer, result, astroId, props, attrs } = scriptOptions;
  const { hydrate, componentUrl, componentExport } = metadata;
  if (!componentExport.value) {
    throw new Error(
      `Unable to resolve a valid export for "${metadata.displayName}"! Please open an issue at https://astro.build/issues!`
    );
  }
  const island = {
    children: "",
    props: {
      // This is for HMR, probably can avoid it in prod
      uid: astroId
    }
  };
  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      island.props[key] = escapeHTML(value);
    }
  }
  island.props["component-url"] = await result.resolve(decodeURI(componentUrl));
  if (renderer.clientEntrypoint) {
    island.props["component-export"] = componentExport.value;
    island.props["renderer-url"] = await result.resolve(decodeURI(renderer.clientEntrypoint));
    island.props["props"] = escapeHTML(serializeProps(props, metadata));
  }
  island.props["ssr"] = "";
  island.props["client"] = hydrate;
  let beforeHydrationUrl = await result.resolve("astro:scripts/before-hydration.js");
  if (beforeHydrationUrl.length) {
    island.props["before-hydration-url"] = beforeHydrationUrl;
  }
  island.props["opts"] = escapeHTML(
    JSON.stringify({
      name: metadata.displayName,
      value: metadata.hydrateArgs || ""
    })
  );
  transitionDirectivesToCopyOnIsland.forEach((name) => {
    if (props[name]) {
      island.props[name] = props[name];
    }
  });
  return island;
}

/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
const dictionary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
const binary = dictionary.length;
function bitwise(str) {
  let hash = 0;
  if (str.length === 0)
    return hash;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    hash = (hash << 5) - hash + ch;
    hash = hash & hash;
  }
  return hash;
}
function shorthash(text) {
  let num;
  let result = "";
  let integer = bitwise(text);
  const sign = integer < 0 ? "Z" : "";
  integer = Math.abs(integer);
  while (integer >= binary) {
    num = integer % binary;
    integer = Math.floor(integer / binary);
    result = dictionary[num] + result;
  }
  if (integer > 0) {
    result = dictionary[integer] + result;
  }
  return sign + result;
}

function isAstroComponentFactory(obj) {
  return obj == null ? false : obj.isAstroComponentFactory === true;
}
function isAPropagatingComponent(result, factory) {
  let hint = factory.propagation || "none";
  if (factory.moduleId && result.componentMetadata.has(factory.moduleId) && hint === "none") {
    hint = result.componentMetadata.get(factory.moduleId).propagation;
  }
  return hint === "in-tree" || hint === "self";
}

const headAndContentSym = Symbol.for("astro.headAndContent");
function isHeadAndContent(obj) {
  return typeof obj === "object" && !!obj[headAndContentSym];
}

var astro_island_prebuilt_default = `(()=>{var d;{let p={0:t=>u(t),1:t=>l(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(l(t)),5:t=>new Set(l(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t)},h=t=>{let[e,n]=t;return e in p?p[e](n):void 0},l=t=>t.map(h),u=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map(([e,n])=>[e,h(n)]));customElements.get("astro-island")||customElements.define("astro-island",(d=class extends HTMLElement{constructor(){super(...arguments);this.hydrate=async()=>{var i;if(!this.hydrator||!this.isConnected)return;let e=(i=this.parentElement)==null?void 0:i.closest("astro-island[ssr]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let n=this.querySelectorAll("astro-slot"),o={},a=this.querySelectorAll("template[data-astro-template]");for(let r of a){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(o[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(let r of n){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(o[r.getAttribute("name")||"default"]=r.innerHTML)}let c;try{c=this.hasAttribute("props")?u(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"<unknown>",y=this.getAttribute("component-export");throw y&&(s+=\` (export \${y})\`),console.error(\`[hydrate] Error parsing props for component \${s}\`,this.getAttribute("props"),r),r}await this.hydrator(this)(this.Component,c,o,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))}}connectedCallback(){!this.hasAttribute("await-children")||this.firstChild?this.childrenConnectedCallback():new MutationObserver((e,n)=>{n.disconnect(),setTimeout(()=>this.childrenConnectedCallback(),0)}).observe(this,{childList:!0})}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}start(){let e=JSON.parse(this.getAttribute("opts")),n=this.getAttribute("client");if(Astro[n]===void 0){window.addEventListener(\`astro:\${n}\`,()=>this.start(),{once:!0});return}Astro[n](async()=>{let o=this.getAttribute("renderer-url"),[a,{default:c}]=await Promise.all([import(this.getAttribute("component-url")),o?import(o):()=>()=>{}]),i=this.getAttribute("component-export")||"default";if(!i.includes("."))this.Component=a[i];else{this.Component=a;for(let r of i.split("."))this.Component=this.Component[r]}return this.hydrator=c,this.hydrate},e,this)}attributeChangedCallback(){this.hydrate()}},d.observedAttributes=["props"],d))}})();`;

const ISLAND_STYLES = `<style>astro-island,astro-slot,astro-static-slot{display:contents}</style>`;
function determineIfNeedsHydrationScript(result) {
  if (result._metadata.hasHydrationScript) {
    return false;
  }
  return result._metadata.hasHydrationScript = true;
}
function determinesIfNeedsDirectiveScript(result, directive) {
  if (result._metadata.hasDirectives.has(directive)) {
    return false;
  }
  result._metadata.hasDirectives.add(directive);
  return true;
}
function getDirectiveScriptText(result, directive) {
  const clientDirectives = result.clientDirectives;
  const clientDirective = clientDirectives.get(directive);
  if (!clientDirective) {
    throw new Error(`Unknown directive: ${directive}`);
  }
  return clientDirective;
}
function getPrescripts(result, type, directive) {
  switch (type) {
    case "both":
      return `${ISLAND_STYLES}<script>${getDirectiveScriptText(
        result,
        directive
      )};${astro_island_prebuilt_default}</script>`;
    case "directive":
      return `<script>${getDirectiveScriptText(result, directive)}</script>`;
  }
  return "";
}

const voidElementNames = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;
const htmlBooleanAttributes = /^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i;
const htmlEnumAttributes = /^(contenteditable|draggable|spellcheck|value)$/i;
const svgEnumAttributes = /^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i;
const STATIC_DIRECTIVES = /* @__PURE__ */ new Set(["set:html", "set:text"]);
const toIdent = (k) => k.trim().replace(/(?:(?!^)\b\w|\s+|[^\w]+)/g, (match, index) => {
  if (/[^\w]|\s/.test(match))
    return "";
  return index === 0 ? match : match.toUpperCase();
});
const toAttributeString = (value, shouldEscape = true) => shouldEscape ? String(value).replace(/&/g, "&#38;").replace(/"/g, "&#34;") : value;
const kebab = (k) => k.toLowerCase() === k ? k : k.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
const toStyleString = (obj) => Object.entries(obj).map(([k, v]) => {
  if (k[0] !== "-" && k[1] !== "-")
    return `${kebab(k)}:${v}`;
  if (kebab(k) !== k)
    return `${kebab(k)}:var(${k});${k}:${v}`;
  return `${k}:${v}`;
}).join(";");
function defineScriptVars(vars) {
  var _a;
  let output = "";
  for (const [key, value] of Object.entries(vars)) {
    output += `const ${toIdent(key)} = ${(_a = JSON.stringify(value)) == null ? void 0 : _a.replace(
      /<\/script>/g,
      "\\x3C/script>"
    )};
`;
  }
  return markHTMLString(output);
}
function formatList(values) {
  if (values.length === 1) {
    return values[0];
  }
  return `${values.slice(0, -1).join(", ")} or ${values[values.length - 1]}`;
}
function addAttribute(value, key, shouldEscape = true) {
  if (value == null) {
    return "";
  }
  if (value === false) {
    if (htmlEnumAttributes.test(key) || svgEnumAttributes.test(key)) {
      return markHTMLString(` ${key}="false"`);
    }
    return "";
  }
  if (STATIC_DIRECTIVES.has(key)) {
    console.warn(`[astro] The "${key}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${key}={value}\`) instead of the dynamic spread syntax (\`{...{ "${key}": value }}\`).`);
    return "";
  }
  if (key === "class:list") {
    const listValue = toAttributeString(serializeListValue(value), shouldEscape);
    if (listValue === "") {
      return "";
    }
    return markHTMLString(` ${key.slice(0, -5)}="${listValue}"`);
  }
  if (key === "style" && !(value instanceof HTMLString)) {
    if (Array.isArray(value) && value.length === 2) {
      return markHTMLString(
        ` ${key}="${toAttributeString(`${toStyleString(value[0])};${value[1]}`, shouldEscape)}"`
      );
    }
    if (typeof value === "object") {
      return markHTMLString(` ${key}="${toAttributeString(toStyleString(value), shouldEscape)}"`);
    }
  }
  if (key === "className") {
    return markHTMLString(` class="${toAttributeString(value, shouldEscape)}"`);
  }
  if (value === true && (key.startsWith("data-") || htmlBooleanAttributes.test(key))) {
    return markHTMLString(` ${key}`);
  } else {
    return markHTMLString(` ${key}="${toAttributeString(value, shouldEscape)}"`);
  }
}
function internalSpreadAttributes(values, shouldEscape = true) {
  let output = "";
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, shouldEscape);
  }
  return markHTMLString(output);
}
function renderElement$1(name, { props: _props, children = "" }, shouldEscape = true) {
  const { lang: _, "data-astro-id": astroId, "define:vars": defineVars, ...props } = _props;
  if (defineVars) {
    if (name === "style") {
      delete props["is:global"];
      delete props["is:scoped"];
    }
    if (name === "script") {
      delete props.hoist;
      children = defineScriptVars(defineVars) + "\n" + children;
    }
  }
  if ((children == null || children == "") && voidElementNames.test(name)) {
    return `<${name}${internalSpreadAttributes(props, shouldEscape)} />`;
  }
  return `<${name}${internalSpreadAttributes(props, shouldEscape)}>${children}</${name}>`;
}
function renderToBufferDestination(bufferRenderFunction) {
  const bufferChunks = [];
  const bufferDestination = {
    write: (chunk) => bufferChunks.push(chunk)
  };
  const renderPromise = bufferRenderFunction(bufferDestination);
  return {
    async renderToFinalDestination(destination) {
      for (const chunk of bufferChunks) {
        destination.write(chunk);
      }
      bufferDestination.write = (chunk) => destination.write(chunk);
      await renderPromise;
    }
  };
}

const uniqueElements = (item, index, all) => {
  const props = JSON.stringify(item.props);
  const children = item.children;
  return index === all.findIndex((i) => JSON.stringify(i.props) === props && i.children == children);
};
function renderAllHeadContent(result) {
  result._metadata.hasRenderedHead = true;
  const styles = Array.from(result.styles).filter(uniqueElements).map(
    (style) => style.props.rel === "stylesheet" ? renderElement$1("link", style) : renderElement$1("style", style)
  );
  result.styles.clear();
  const scripts = Array.from(result.scripts).filter(uniqueElements).map((script) => {
    return renderElement$1("script", script, false);
  });
  const links = Array.from(result.links).filter(uniqueElements).map((link) => renderElement$1("link", link, false));
  let content = links.join("\n") + styles.join("\n") + scripts.join("\n");
  if (result._metadata.extraHead.length > 0) {
    for (const part of result._metadata.extraHead) {
      content += part;
    }
  }
  return markHTMLString(content);
}
function* renderHead() {
  yield createRenderInstruction({ type: "head" });
}
function* maybeRenderHead() {
  yield createRenderInstruction({ type: "maybe-head" });
}

const slotString = Symbol.for("astro:slot-string");
class SlotString extends HTMLString {
  constructor(content, instructions) {
    super(content);
    this.instructions = instructions;
    this[slotString] = true;
  }
}
function isSlotString(str) {
  return !!str[slotString];
}
function renderSlot(result, slotted, fallback) {
  if (!slotted && fallback) {
    return renderSlot(result, fallback);
  }
  return {
    async render(destination) {
      await renderChild(destination, typeof slotted === "function" ? slotted(result) : slotted);
    }
  };
}
async function renderSlotToString(result, slotted, fallback) {
  let content = "";
  let instructions = null;
  const temporaryDestination = {
    write(chunk) {
      if (chunk instanceof Response)
        return;
      if (typeof chunk === "object" && "type" in chunk && typeof chunk.type === "string") {
        if (instructions === null) {
          instructions = [];
        }
        instructions.push(chunk);
      } else {
        content += chunkToString(result, chunk);
      }
    }
  };
  const renderInstance = renderSlot(result, slotted, fallback);
  await renderInstance.render(temporaryDestination);
  return markHTMLString(new SlotString(content, instructions));
}
async function renderSlots(result, slots = {}) {
  let slotInstructions = null;
  let children = {};
  if (slots) {
    await Promise.all(
      Object.entries(slots).map(
        ([key, value]) => renderSlotToString(result, value).then((output) => {
          if (output.instructions) {
            if (slotInstructions === null) {
              slotInstructions = [];
            }
            slotInstructions.push(...output.instructions);
          }
          children[key] = output;
        })
      )
    );
  }
  return { slotInstructions, children };
}

const Fragment = Symbol.for("astro:fragment");
const Renderer = Symbol.for("astro:renderer");
const encoder = new TextEncoder();
const decoder = new TextDecoder();
function stringifyChunk(result, chunk) {
  if (isRenderInstruction(chunk)) {
    const instruction = chunk;
    switch (instruction.type) {
      case "directive": {
        const { hydration } = instruction;
        let needsHydrationScript = hydration && determineIfNeedsHydrationScript(result);
        let needsDirectiveScript = hydration && determinesIfNeedsDirectiveScript(result, hydration.directive);
        let prescriptType = needsHydrationScript ? "both" : needsDirectiveScript ? "directive" : null;
        if (prescriptType) {
          let prescripts = getPrescripts(result, prescriptType, hydration.directive);
          return markHTMLString(prescripts);
        } else {
          return "";
        }
      }
      case "head": {
        if (result._metadata.hasRenderedHead) {
          return "";
        }
        return renderAllHeadContent(result);
      }
      case "maybe-head": {
        if (result._metadata.hasRenderedHead || result._metadata.headInTree) {
          return "";
        }
        return renderAllHeadContent(result);
      }
      default: {
        throw new Error(`Unknown chunk type: ${chunk.type}`);
      }
    }
  } else if (chunk instanceof Response) {
    return "";
  } else if (isSlotString(chunk)) {
    let out = "";
    const c = chunk;
    if (c.instructions) {
      for (const instr of c.instructions) {
        out += stringifyChunk(result, instr);
      }
    }
    out += chunk.toString();
    return out;
  }
  return chunk.toString();
}
function chunkToString(result, chunk) {
  if (ArrayBuffer.isView(chunk)) {
    return decoder.decode(chunk);
  } else {
    return stringifyChunk(result, chunk);
  }
}
function chunkToByteArray(result, chunk) {
  if (ArrayBuffer.isView(chunk)) {
    return chunk;
  } else {
    const stringified = stringifyChunk(result, chunk);
    return encoder.encode(stringified.toString());
  }
}
function isRenderInstance(obj) {
  return !!obj && typeof obj === "object" && "render" in obj && typeof obj.render === "function";
}

async function renderChild(destination, child) {
  child = await child;
  if (child instanceof SlotString) {
    destination.write(child);
  } else if (isHTMLString(child)) {
    destination.write(child);
  } else if (Array.isArray(child)) {
    const childRenders = child.map((c) => {
      return renderToBufferDestination((bufferDestination) => {
        return renderChild(bufferDestination, c);
      });
    });
    for (const childRender of childRenders) {
      await childRender.renderToFinalDestination(destination);
    }
  } else if (typeof child === "function") {
    await renderChild(destination, child());
  } else if (typeof child === "string") {
    destination.write(markHTMLString(escapeHTML(child)));
  } else if (!child && child !== 0) ; else if (isRenderInstance(child)) {
    await child.render(destination);
  } else if (isRenderTemplateResult(child)) {
    await child.render(destination);
  } else if (isAstroComponentInstance(child)) {
    await child.render(destination);
  } else if (ArrayBuffer.isView(child)) {
    destination.write(child);
  } else if (typeof child === "object" && (Symbol.asyncIterator in child || Symbol.iterator in child)) {
    for await (const value of child) {
      await renderChild(destination, value);
    }
  } else {
    destination.write(child);
  }
}

var _a$1;
const astroComponentInstanceSym = Symbol.for("astro.componentInstance");
class AstroComponentInstance {
  constructor(result, props, slots, factory) {
    this[_a$1] = true;
    this.result = result;
    this.props = props;
    this.factory = factory;
    this.slotValues = {};
    for (const name in slots) {
      const value = slots[name](result);
      this.slotValues[name] = () => value;
    }
  }
  async init(result) {
    if (this.returnValue !== void 0)
      return this.returnValue;
    this.returnValue = this.factory(result, this.props, this.slotValues);
    return this.returnValue;
  }
  async render(destination) {
    if (this.returnValue === void 0) {
      await this.init(this.result);
    }
    let value = this.returnValue;
    if (isPromise(value)) {
      value = await value;
    }
    if (isHeadAndContent(value)) {
      await value.content.render(destination);
    } else {
      await renderChild(destination, value);
    }
  }
}
_a$1 = astroComponentInstanceSym;
function validateComponentProps(props, displayName) {
  if (props != null) {
    for (const prop of Object.keys(props)) {
      if (prop.startsWith("client:")) {
        console.warn(
          `You are attempting to render <${displayName} ${prop} />, but ${displayName} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`
        );
      }
    }
  }
}
function createAstroComponentInstance(result, displayName, factory, props, slots = {}) {
  validateComponentProps(props, displayName);
  const instance = new AstroComponentInstance(result, props, slots, factory);
  if (isAPropagatingComponent(result, factory) && !result._metadata.propagators.has(factory)) {
    result._metadata.propagators.set(factory, instance);
  }
  return instance;
}
function isAstroComponentInstance(obj) {
  return typeof obj === "object" && !!obj[astroComponentInstanceSym];
}

var _a;
const renderTemplateResultSym = Symbol.for("astro.renderTemplateResult");
class RenderTemplateResult {
  constructor(htmlParts, expressions) {
    this[_a] = true;
    this.htmlParts = htmlParts;
    this.error = void 0;
    this.expressions = expressions.map((expression) => {
      if (isPromise(expression)) {
        return Promise.resolve(expression).catch((err) => {
          if (!this.error) {
            this.error = err;
            throw err;
          }
        });
      }
      return expression;
    });
  }
  async render(destination) {
    const expRenders = this.expressions.map((exp) => {
      return renderToBufferDestination((bufferDestination) => {
        if (exp || exp === 0) {
          return renderChild(bufferDestination, exp);
        }
      });
    });
    for (let i = 0; i < this.htmlParts.length; i++) {
      const html = this.htmlParts[i];
      const expRender = expRenders[i];
      destination.write(markHTMLString(html));
      if (expRender) {
        await expRender.renderToFinalDestination(destination);
      }
    }
  }
}
_a = renderTemplateResultSym;
function isRenderTemplateResult(obj) {
  return typeof obj === "object" && !!obj[renderTemplateResultSym];
}
function renderTemplate(htmlParts, ...expressions) {
  return new RenderTemplateResult(htmlParts, expressions);
}

async function renderToString(result, componentFactory, props, children, isPage = false, route) {
  const templateResult = await callComponentAsTemplateResultOrResponse(
    result,
    componentFactory,
    props,
    children,
    route
  );
  if (templateResult instanceof Response)
    return templateResult;
  let str = "";
  let renderedFirstPageChunk = false;
  const destination = {
    write(chunk) {
      if (isPage && !renderedFirstPageChunk) {
        renderedFirstPageChunk = true;
        if (!/<!doctype html/i.test(String(chunk))) {
          const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
          str += doctype;
        }
      }
      if (chunk instanceof Response)
        return;
      str += chunkToString(result, chunk);
    }
  };
  await templateResult.render(destination);
  return str;
}
async function renderToReadableStream(result, componentFactory, props, children, isPage = false, route) {
  const templateResult = await callComponentAsTemplateResultOrResponse(
    result,
    componentFactory,
    props,
    children,
    route
  );
  if (templateResult instanceof Response)
    return templateResult;
  let renderedFirstPageChunk = false;
  if (isPage) {
    await bufferHeadContent(result);
  }
  return new ReadableStream({
    start(controller) {
      const destination = {
        write(chunk) {
          if (isPage && !renderedFirstPageChunk) {
            renderedFirstPageChunk = true;
            if (!/<!doctype html/i.test(String(chunk))) {
              const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
              controller.enqueue(encoder.encode(doctype));
            }
          }
          if (chunk instanceof Response) {
            throw new AstroError({
              ...ResponseSentError
            });
          }
          const bytes = chunkToByteArray(result, chunk);
          controller.enqueue(bytes);
        }
      };
      (async () => {
        try {
          await templateResult.render(destination);
          controller.close();
        } catch (e) {
          if (AstroError.is(e) && !e.loc) {
            e.setLocation({
              file: route == null ? void 0 : route.component
            });
          }
          setTimeout(() => controller.error(e), 0);
        }
      })();
    }
  });
}
async function callComponentAsTemplateResultOrResponse(result, componentFactory, props, children, route) {
  const factoryResult = await componentFactory(result, props, children);
  if (factoryResult instanceof Response) {
    return factoryResult;
  } else if (!isRenderTemplateResult(factoryResult)) {
    throw new AstroError({
      ...OnlyResponseCanBeReturned,
      message: OnlyResponseCanBeReturned.message(route == null ? void 0 : route.route, typeof factoryResult),
      location: {
        file: route == null ? void 0 : route.component
      }
    });
  }
  return isHeadAndContent(factoryResult) ? factoryResult.content : factoryResult;
}
async function bufferHeadContent(result) {
  const iterator = result._metadata.propagators.values();
  while (true) {
    const { value, done } = iterator.next();
    if (done) {
      break;
    }
    const returnValue = await value.init(result);
    if (isHeadAndContent(returnValue)) {
      result._metadata.extraHead.push(returnValue.head);
    }
  }
}

function componentIsHTMLElement(Component) {
  return typeof HTMLElement !== "undefined" && HTMLElement.isPrototypeOf(Component);
}
async function renderHTMLElement(result, constructor, props, slots) {
  const name = getHTMLElementName(constructor);
  let attrHTML = "";
  for (const attr in props) {
    attrHTML += ` ${attr}="${toAttributeString(await props[attr])}"`;
  }
  return markHTMLString(
    `<${name}${attrHTML}>${await renderSlotToString(result, slots == null ? void 0 : slots.default)}</${name}>`
  );
}
function getHTMLElementName(constructor) {
  const definedName = customElements.getName(constructor);
  if (definedName)
    return definedName;
  const assignedName = constructor.name.replace(/^HTML|Element$/g, "").replace(/[A-Z]/g, "-$&").toLowerCase().replace(/^-/, "html-");
  return assignedName;
}

const needsHeadRenderingSymbol = Symbol.for("astro.needsHeadRendering");
const rendererAliases = /* @__PURE__ */ new Map([["solid", "solid-js"]]);
function guessRenderers(componentUrl) {
  const extname = componentUrl == null ? void 0 : componentUrl.split(".").pop();
  switch (extname) {
    case "svelte":
      return ["@astrojs/svelte"];
    case "vue":
      return ["@astrojs/vue"];
    case "jsx":
    case "tsx":
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/solid-js", "@astrojs/vue (jsx)"];
    default:
      return [
        "@astrojs/react",
        "@astrojs/preact",
        "@astrojs/solid-js",
        "@astrojs/vue",
        "@astrojs/svelte",
        "@astrojs/lit"
      ];
  }
}
function isFragmentComponent(Component) {
  return Component === Fragment;
}
function isHTMLComponent(Component) {
  return Component && Component["astro:html"] === true;
}
const ASTRO_SLOT_EXP = /\<\/?astro-slot\b[^>]*>/g;
const ASTRO_STATIC_SLOT_EXP = /\<\/?astro-static-slot\b[^>]*>/g;
function removeStaticAstroSlot(html, supportsAstroStaticSlot) {
  const exp = supportsAstroStaticSlot ? ASTRO_STATIC_SLOT_EXP : ASTRO_SLOT_EXP;
  return html.replace(exp, "");
}
async function renderFrameworkComponent(result, displayName, Component, _props, slots = {}) {
  var _a, _b, _c;
  if (!Component && !_props["client:only"]) {
    throw new Error(
      `Unable to render ${displayName} because it is ${Component}!
Did you forget to import the component or is it possible there is a typo?`
    );
  }
  const { renderers, clientDirectives } = result;
  const metadata = {
    astroStaticSlot: true,
    displayName
  };
  const { hydration, isPage, props } = extractDirectives(_props, clientDirectives);
  let html = "";
  let attrs = void 0;
  if (hydration) {
    metadata.hydrate = hydration.directive;
    metadata.hydrateArgs = hydration.value;
    metadata.componentExport = hydration.componentExport;
    metadata.componentUrl = hydration.componentUrl;
  }
  const probableRendererNames = guessRenderers(metadata.componentUrl);
  const validRenderers = renderers.filter((r) => r.name !== "astro:jsx");
  const { children, slotInstructions } = await renderSlots(result, slots);
  let renderer;
  if (metadata.hydrate !== "only") {
    let isTagged = false;
    try {
      isTagged = Component && Component[Renderer];
    } catch {
    }
    if (isTagged) {
      const rendererName = Component[Renderer];
      renderer = renderers.find(({ name }) => name === rendererName);
    }
    if (!renderer) {
      let error;
      for (const r of renderers) {
        try {
          if (await r.ssr.check.call({ result }, Component, props, children)) {
            renderer = r;
            break;
          }
        } catch (e) {
          error ??= e;
        }
      }
      if (!renderer && error) {
        throw error;
      }
    }
    if (!renderer && typeof HTMLElement === "function" && componentIsHTMLElement(Component)) {
      const output = await renderHTMLElement(
        result,
        Component,
        _props,
        slots
      );
      return {
        render(destination) {
          destination.write(output);
        }
      };
    }
  } else {
    if (metadata.hydrateArgs) {
      const passedName = metadata.hydrateArgs;
      const rendererName = rendererAliases.has(passedName) ? rendererAliases.get(passedName) : passedName;
      renderer = renderers.find(
        ({ name }) => name === `@astrojs/${rendererName}` || name === rendererName
      );
    }
    if (!renderer && validRenderers.length === 1) {
      renderer = validRenderers[0];
    }
    if (!renderer) {
      const extname = (_a = metadata.componentUrl) == null ? void 0 : _a.split(".").pop();
      renderer = renderers.filter(
        ({ name }) => name === `@astrojs/${extname}` || name === extname
      )[0];
    }
  }
  if (!renderer) {
    if (metadata.hydrate === "only") {
      throw new AstroError({
        ...NoClientOnlyHint,
        message: NoClientOnlyHint.message(metadata.displayName),
        hint: NoClientOnlyHint.hint(
          probableRendererNames.map((r) => r.replace("@astrojs/", "")).join("|")
        )
      });
    } else if (typeof Component !== "string") {
      const matchingRenderers = validRenderers.filter(
        (r) => probableRendererNames.includes(r.name)
      );
      const plural = validRenderers.length > 1;
      if (matchingRenderers.length === 0) {
        throw new AstroError({
          ...NoMatchingRenderer,
          message: NoMatchingRenderer.message(
            metadata.displayName,
            (_b = metadata == null ? void 0 : metadata.componentUrl) == null ? void 0 : _b.split(".").pop(),
            plural,
            validRenderers.length
          ),
          hint: NoMatchingRenderer.hint(
            formatList(probableRendererNames.map((r) => "`" + r + "`"))
          )
        });
      } else if (matchingRenderers.length === 1) {
        renderer = matchingRenderers[0];
        ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call(
          { result },
          Component,
          props,
          children,
          metadata
        ));
      } else {
        throw new Error(`Unable to render ${metadata.displayName}!

This component likely uses ${formatList(probableRendererNames)},
but Astro encountered an error during server-side rendering.

Please ensure that ${metadata.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
      }
    }
  } else {
    if (metadata.hydrate === "only") {
      html = await renderSlotToString(result, slots == null ? void 0 : slots.fallback);
    } else {
      ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call(
        { result },
        Component,
        props,
        children,
        metadata
      ));
    }
  }
  if (renderer && !renderer.clientEntrypoint && renderer.name !== "@astrojs/lit" && metadata.hydrate) {
    throw new AstroError({
      ...NoClientEntrypoint,
      message: NoClientEntrypoint.message(
        displayName,
        metadata.hydrate,
        renderer.name
      )
    });
  }
  if (!html && typeof Component === "string") {
    const Tag = sanitizeElementName(Component);
    const childSlots = Object.values(children).join("");
    const renderTemplateResult = renderTemplate`<${Tag}${internalSpreadAttributes(
      props
    )}${markHTMLString(
      childSlots === "" && voidElementNames.test(Tag) ? `/>` : `>${childSlots}</${Tag}>`
    )}`;
    html = "";
    const destination = {
      write(chunk) {
        if (chunk instanceof Response)
          return;
        html += chunkToString(result, chunk);
      }
    };
    await renderTemplateResult.render(destination);
  }
  if (!hydration) {
    return {
      render(destination) {
        var _a2;
        if (slotInstructions) {
          for (const instruction of slotInstructions) {
            destination.write(instruction);
          }
        }
        if (isPage || (renderer == null ? void 0 : renderer.name) === "astro:jsx") {
          destination.write(html);
        } else if (html && html.length > 0) {
          destination.write(
            markHTMLString(
              removeStaticAstroSlot(html, ((_a2 = renderer == null ? void 0 : renderer.ssr) == null ? void 0 : _a2.supportsAstroStaticSlot) ?? false)
            )
          );
        }
      }
    };
  }
  const astroId = shorthash(
    `<!--${metadata.componentExport.value}:${metadata.componentUrl}-->
${html}
${serializeProps(
      props,
      metadata
    )}`
  );
  const island = await generateHydrateScript(
    { renderer, result, astroId, props, attrs },
    metadata
  );
  let unrenderedSlots = [];
  if (html) {
    if (Object.keys(children).length > 0) {
      for (const key of Object.keys(children)) {
        let tagName = ((_c = renderer == null ? void 0 : renderer.ssr) == null ? void 0 : _c.supportsAstroStaticSlot) ? !!metadata.hydrate ? "astro-slot" : "astro-static-slot" : "astro-slot";
        let expectedHTML = key === "default" ? `<${tagName}>` : `<${tagName} name="${key}">`;
        if (!html.includes(expectedHTML)) {
          unrenderedSlots.push(key);
        }
      }
    }
  } else {
    unrenderedSlots = Object.keys(children);
  }
  const template = unrenderedSlots.length > 0 ? unrenderedSlots.map(
    (key) => `<template data-astro-template${key !== "default" ? `="${key}"` : ""}>${children[key]}</template>`
  ).join("") : "";
  island.children = `${html ?? ""}${template}`;
  if (island.children) {
    island.props["await-children"] = "";
  }
  return {
    render(destination) {
      if (slotInstructions) {
        for (const instruction of slotInstructions) {
          destination.write(instruction);
        }
      }
      destination.write(createRenderInstruction({ type: "directive", hydration }));
      destination.write(markHTMLString(renderElement$1("astro-island", island, false)));
    }
  };
}
function sanitizeElementName(tag) {
  const unsafe = /[&<>'"\s]+/g;
  if (!unsafe.test(tag))
    return tag;
  return tag.trim().split(unsafe)[0].trim();
}
async function renderFragmentComponent(result, slots = {}) {
  const children = await renderSlotToString(result, slots == null ? void 0 : slots.default);
  return {
    render(destination) {
      if (children == null)
        return;
      destination.write(children);
    }
  };
}
async function renderHTMLComponent(result, Component, _props, slots = {}) {
  const { slotInstructions, children } = await renderSlots(result, slots);
  const html = Component({ slots: children });
  const hydrationHtml = slotInstructions ? slotInstructions.map((instr) => chunkToString(result, instr)).join("") : "";
  return {
    render(destination) {
      destination.write(markHTMLString(hydrationHtml + html));
    }
  };
}
function renderAstroComponent(result, displayName, Component, props, slots = {}) {
  const instance = createAstroComponentInstance(result, displayName, Component, props, slots);
  return {
    async render(destination) {
      await instance.render(destination);
    }
  };
}
async function renderComponent(result, displayName, Component, props, slots = {}) {
  if (isPromise(Component)) {
    Component = await Component;
  }
  if (isFragmentComponent(Component)) {
    return await renderFragmentComponent(result, slots);
  }
  if (isHTMLComponent(Component)) {
    return await renderHTMLComponent(result, Component, props, slots);
  }
  if (isAstroComponentFactory(Component)) {
    return renderAstroComponent(result, displayName, Component, props, slots);
  }
  return await renderFrameworkComponent(result, displayName, Component, props, slots);
}
async function renderComponentToString(result, displayName, Component, props, slots = {}, isPage = false, route) {
  let str = "";
  let renderedFirstPageChunk = false;
  let head = "";
  if (nonAstroPageNeedsHeadInjection(Component)) {
    for (const headChunk of maybeRenderHead()) {
      head += chunkToString(result, headChunk);
    }
  }
  try {
    const destination = {
      write(chunk) {
        if (isPage && !renderedFirstPageChunk) {
          renderedFirstPageChunk = true;
          if (!/<!doctype html/i.test(String(chunk))) {
            const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
            str += doctype + head;
          }
        }
        if (chunk instanceof Response)
          return;
        str += chunkToString(result, chunk);
      }
    };
    const renderInstance = await renderComponent(result, displayName, Component, props, slots);
    await renderInstance.render(destination);
  } catch (e) {
    if (AstroError.is(e) && !e.loc) {
      e.setLocation({
        file: route == null ? void 0 : route.component
      });
    }
    throw e;
  }
  return str;
}
function nonAstroPageNeedsHeadInjection(pageComponent) {
  return !!(pageComponent == null ? void 0 : pageComponent[needsHeadRenderingSymbol]);
}

const ClientOnlyPlaceholder = "astro-client-only";
class Skip {
  constructor(vnode) {
    this.vnode = vnode;
    this.count = 0;
  }
  increment() {
    this.count++;
  }
  haveNoTried() {
    return this.count === 0;
  }
  isCompleted() {
    return this.count > 2;
  }
}
Skip.symbol = Symbol("astro:jsx:skip");
let originalConsoleError;
let consoleFilterRefs = 0;
async function renderJSX(result, vnode) {
  switch (true) {
    case vnode instanceof HTMLString:
      if (vnode.toString().trim() === "") {
        return "";
      }
      return vnode;
    case typeof vnode === "string":
      return markHTMLString(escapeHTML(vnode));
    case typeof vnode === "function":
      return vnode;
    case (!vnode && vnode !== 0):
      return "";
    case Array.isArray(vnode):
      return markHTMLString(
        (await Promise.all(vnode.map((v) => renderJSX(result, v)))).join("")
      );
  }
  let skip;
  if (vnode.props) {
    if (vnode.props[Skip.symbol]) {
      skip = vnode.props[Skip.symbol];
    } else {
      skip = new Skip(vnode);
    }
  } else {
    skip = new Skip(vnode);
  }
  return renderJSXVNode(result, vnode, skip);
}
async function renderJSXVNode(result, vnode, skip) {
  if (isVNode(vnode)) {
    switch (true) {
      case !vnode.type: {
        throw new Error(`Unable to render ${result.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);
      }
      case vnode.type === Symbol.for("astro:fragment"):
        return renderJSX(result, vnode.props.children);
      case vnode.type.isAstroComponentFactory: {
        let props = {};
        let slots = {};
        for (const [key, value] of Object.entries(vnode.props ?? {})) {
          if (key === "children" || value && typeof value === "object" && value["$$slot"]) {
            slots[key === "children" ? "default" : key] = () => renderJSX(result, value);
          } else {
            props[key] = value;
          }
        }
        const str = await renderToString(result, vnode.type, props, slots);
        if (str instanceof Response) {
          throw str;
        }
        const html = markHTMLString(str);
        return html;
      }
      case (!vnode.type && vnode.type !== 0):
        return "";
      case (typeof vnode.type === "string" && vnode.type !== ClientOnlyPlaceholder):
        return markHTMLString(await renderElement(result, vnode.type, vnode.props ?? {}));
    }
    if (vnode.type) {
      let extractSlots2 = function(child) {
        if (Array.isArray(child)) {
          return child.map((c) => extractSlots2(c));
        }
        if (!isVNode(child)) {
          _slots.default.push(child);
          return;
        }
        if ("slot" in child.props) {
          _slots[child.props.slot] = [..._slots[child.props.slot] ?? [], child];
          delete child.props.slot;
          return;
        }
        _slots.default.push(child);
      };
      if (typeof vnode.type === "function" && vnode.type["astro:renderer"]) {
        skip.increment();
      }
      if (typeof vnode.type === "function" && vnode.props["server:root"]) {
        const output2 = await vnode.type(vnode.props ?? {});
        return await renderJSX(result, output2);
      }
      if (typeof vnode.type === "function") {
        if (skip.haveNoTried() || skip.isCompleted()) {
          useConsoleFilter();
          try {
            const output2 = await vnode.type(vnode.props ?? {});
            let renderResult;
            if (output2 == null ? void 0 : output2[AstroJSX]) {
              renderResult = await renderJSXVNode(result, output2, skip);
              return renderResult;
            } else if (!output2) {
              renderResult = await renderJSXVNode(result, output2, skip);
              return renderResult;
            }
          } catch (e) {
            if (skip.isCompleted()) {
              throw e;
            }
            skip.increment();
          } finally {
            finishUsingConsoleFilter();
          }
        } else {
          skip.increment();
        }
      }
      const { children = null, ...props } = vnode.props ?? {};
      const _slots = {
        default: []
      };
      extractSlots2(children);
      for (const [key, value] of Object.entries(props)) {
        if (value["$$slot"]) {
          _slots[key] = value;
          delete props[key];
        }
      }
      const slotPromises = [];
      const slots = {};
      for (const [key, value] of Object.entries(_slots)) {
        slotPromises.push(
          renderJSX(result, value).then((output2) => {
            if (output2.toString().trim().length === 0)
              return;
            slots[key] = () => output2;
          })
        );
      }
      await Promise.all(slotPromises);
      props[Skip.symbol] = skip;
      let output;
      if (vnode.type === ClientOnlyPlaceholder && vnode.props["client:only"]) {
        output = await renderComponentToString(
          result,
          vnode.props["client:display-name"] ?? "",
          null,
          props,
          slots
        );
      } else {
        output = await renderComponentToString(
          result,
          typeof vnode.type === "function" ? vnode.type.name : vnode.type,
          vnode.type,
          props,
          slots
        );
      }
      return markHTMLString(output);
    }
  }
  return markHTMLString(`${vnode}`);
}
async function renderElement(result, tag, { children, ...props }) {
  return markHTMLString(
    `<${tag}${spreadAttributes(props)}${markHTMLString(
      (children == null || children == "") && voidElementNames.test(tag) ? `/>` : `>${children == null ? "" : await renderJSX(result, prerenderElementChildren(tag, children))}</${tag}>`
    )}`
  );
}
function prerenderElementChildren(tag, children) {
  if (typeof children === "string" && (tag === "style" || tag === "script")) {
    return markHTMLString(children);
  } else {
    return children;
  }
}
function useConsoleFilter() {
  consoleFilterRefs++;
  if (!originalConsoleError) {
    originalConsoleError = console.error;
    try {
      console.error = filteredConsoleError;
    } catch (error) {
    }
  }
}
function finishUsingConsoleFilter() {
  consoleFilterRefs--;
}
function filteredConsoleError(msg, ...rest) {
  if (consoleFilterRefs > 0 && typeof msg === "string") {
    const isKnownReactHookError = msg.includes("Warning: Invalid hook call.") && msg.includes("https://reactjs.org/link/invalid-hook-call");
    if (isKnownReactHookError)
      return;
  }
  originalConsoleError(msg, ...rest);
}

const isNodeJS = typeof process === "object" && Object.prototype.toString.call(process) === "[object process]";
let StreamingCompatibleResponse;
function createResponseClass() {
  StreamingCompatibleResponse = class extends Response {
    #isStream;
    #body;
    constructor(body, init) {
      let isStream = body instanceof ReadableStream;
      super(isStream ? null : body, init);
      this.#isStream = isStream;
      this.#body = body;
    }
    get body() {
      return this.#body;
    }
    async text() {
      if (this.#isStream && isNodeJS) {
        let decoder = new TextDecoder();
        let body = this.#body;
        let out = "";
        for await (let chunk of streamAsyncIterator(body)) {
          out += decoder.decode(chunk);
        }
        return out;
      }
      return super.text();
    }
    async arrayBuffer() {
      if (this.#isStream && isNodeJS) {
        let body = this.#body;
        let chunks = [];
        let len = 0;
        for await (let chunk of streamAsyncIterator(body)) {
          chunks.push(chunk);
          len += chunk.length;
        }
        let ab = new Uint8Array(len);
        let offset = 0;
        for (const chunk of chunks) {
          ab.set(chunk, offset);
          offset += chunk.length;
        }
        return ab;
      }
      return super.arrayBuffer();
    }
    clone() {
      return new StreamingCompatibleResponse(this.#body, {
        status: this.status,
        statusText: this.statusText,
        headers: this.headers
      });
    }
  };
  return StreamingCompatibleResponse;
}
const createResponse = isNodeJS ? (body, init) => {
  if (typeof body === "string" || ArrayBuffer.isView(body)) {
    return new Response(body, init);
  }
  if (typeof StreamingCompatibleResponse === "undefined") {
    return new (createResponseClass())(body, init);
  }
  return new StreamingCompatibleResponse(body, init);
} : (body, init) => new Response(body, init);

async function renderPage$1(result, componentFactory, props, children, streaming, route) {
  var _a, _b;
  if (!isAstroComponentFactory(componentFactory)) {
    result._metadata.headInTree = ((_a = result.componentMetadata.get(componentFactory.moduleId)) == null ? void 0 : _a.containsHead) ?? false;
    const pageProps = { ...props ?? {}, "server:root": true };
    const str = await renderComponentToString(
      result,
      componentFactory.name,
      componentFactory,
      pageProps,
      null,
      true,
      route
    );
    const bytes = encoder.encode(str);
    return new Response(bytes, {
      headers: new Headers([
        ["Content-Type", "text/html; charset=utf-8"],
        ["Content-Length", bytes.byteLength.toString()]
      ])
    });
  }
  result._metadata.headInTree = ((_b = result.componentMetadata.get(componentFactory.moduleId)) == null ? void 0 : _b.containsHead) ?? false;
  let body;
  if (streaming) {
    body = await renderToReadableStream(result, componentFactory, props, children, true, route);
  } else {
    body = await renderToString(result, componentFactory, props, children, true, route);
  }
  if (body instanceof Response)
    return body;
  const init = result.response;
  const headers = new Headers(init.headers);
  if (!streaming && typeof body === "string") {
    body = encoder.encode(body);
    headers.set("Content-Length", body.byteLength.toString());
  }
  const response = createResponse(body, { ...init, headers });
  return response;
}

function __astro_tag_component__(Component, rendererName) {
  if (!Component)
    return;
  if (typeof Component !== "function")
    return;
  Object.defineProperty(Component, Renderer, {
    value: rendererName,
    enumerable: false,
    writable: false
  });
}
function spreadAttributes(values = {}, _name, { class: scopedClassName } = {}) {
  let output = "";
  if (scopedClassName) {
    if (typeof values.class !== "undefined") {
      values.class += ` ${scopedClassName}`;
    } else if (typeof values["class:list"] !== "undefined") {
      values["class:list"] = [values["class:list"], scopedClassName];
    } else {
      values.class = scopedClassName;
    }
  }
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, true);
  }
  return markHTMLString(output);
}

const AstroJSX = "astro:jsx";
const Empty = Symbol("empty");
const toSlotName = (slotAttr) => slotAttr;
function isVNode(vnode) {
  return vnode && typeof vnode === "object" && vnode[AstroJSX];
}
function transformSlots(vnode) {
  if (typeof vnode.type === "string")
    return vnode;
  const slots = {};
  if (isVNode(vnode.props.children)) {
    const child = vnode.props.children;
    if (!isVNode(child))
      return;
    if (!("slot" in child.props))
      return;
    const name = toSlotName(child.props.slot);
    slots[name] = [child];
    slots[name]["$$slot"] = true;
    delete child.props.slot;
    delete vnode.props.children;
  }
  if (Array.isArray(vnode.props.children)) {
    vnode.props.children = vnode.props.children.map((child) => {
      if (!isVNode(child))
        return child;
      if (!("slot" in child.props))
        return child;
      const name = toSlotName(child.props.slot);
      if (Array.isArray(slots[name])) {
        slots[name].push(child);
      } else {
        slots[name] = [child];
        slots[name]["$$slot"] = true;
      }
      delete child.props.slot;
      return Empty;
    }).filter((v) => v !== Empty);
  }
  Object.assign(vnode.props, slots);
}
function markRawChildren(child) {
  if (typeof child === "string")
    return markHTMLString(child);
  if (Array.isArray(child))
    return child.map((c) => markRawChildren(c));
  return child;
}
function transformSetDirectives(vnode) {
  if (!("set:html" in vnode.props || "set:text" in vnode.props))
    return;
  if ("set:html" in vnode.props) {
    const children = markRawChildren(vnode.props["set:html"]);
    delete vnode.props["set:html"];
    Object.assign(vnode.props, { children });
    return;
  }
  if ("set:text" in vnode.props) {
    const children = vnode.props["set:text"];
    delete vnode.props["set:text"];
    Object.assign(vnode.props, { children });
    return;
  }
}
function createVNode(type, props) {
  const vnode = {
    [Renderer]: "astro:jsx",
    [AstroJSX]: true,
    type,
    props: props ?? {}
  };
  transformSetDirectives(vnode);
  transformSlots(vnode);
  return vnode;
}

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
async function check(Component, props, { default: children = null, ...slotted } = {}) {
  if (typeof Component !== "function")
    return false;
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  try {
    const result = await Component({ ...props, ...slots, children });
    return result[AstroJSX];
  } catch (e) {
    const error = e;
    if (Component[Symbol.for("mdx-component")]) {
      throw createFormattedError({
        message: error.message,
        title: error.name,
        hint: `This issue often occurs when your MDX component encounters runtime errors.`,
        name: error.name,
        stack: error.stack
      });
    }
  }
  return false;
}
async function renderToStaticMarkup(Component, props = {}, { default: children = null, ...slotted } = {}) {
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  const { result } = this;
  const html = await renderJSX(result, createVNode(Component, { ...props, ...slots, children }));
  return { html };
}
function createFormattedError({ message, name, stack, hint }) {
  const error = new Error(message);
  error.name = name;
  error.stack = stack;
  error.hint = hint;
  return error;
}
var server_default = {
  check,
  renderToStaticMarkup
};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

/**
 * @param typeMap [Object] Map of MIME type -> Array[extensions]
 * @param ...
 */
function Mime$1() {
  this._types = Object.create(null);
  this._extensions = Object.create(null);

  for (let i = 0; i < arguments.length; i++) {
    this.define(arguments[i]);
  }

  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}

/**
 * Define mimetype -> extension mappings.  Each key is a mime-type that maps
 * to an array of extensions associated with the type.  The first extension is
 * used as the default extension for the type.
 *
 * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
 *
 * If a type declares an extension that has already been defined, an error will
 * be thrown.  To suppress this error and force the extension to be associated
 * with the new type, pass `force`=true.  Alternatively, you may prefix the
 * extension with "*" to map the type to extension, without mapping the
 * extension to the type.
 *
 * e.g. mime.define({'audio/wav', ['wav']}, {'audio/x-wav', ['*wav']});
 *
 *
 * @param map (Object) type definitions
 * @param force (Boolean) if true, force overriding of existing definitions
 */
Mime$1.prototype.define = function(typeMap, force) {
  for (let type in typeMap) {
    let extensions = typeMap[type].map(function(t) {
      return t.toLowerCase();
    });
    type = type.toLowerCase();

    for (let i = 0; i < extensions.length; i++) {
      const ext = extensions[i];

      // '*' prefix = not the preferred type for this extension.  So fixup the
      // extension, and skip it.
      if (ext[0] === '*') {
        continue;
      }

      if (!force && (ext in this._types)) {
        throw new Error(
          'Attempt to change mapping for "' + ext +
          '" extension from "' + this._types[ext] + '" to "' + type +
          '". Pass `force=true` to allow this, otherwise remove "' + ext +
          '" from the list of extensions for "' + type + '".'
        );
      }

      this._types[ext] = type;
    }

    // Use first extension as default
    if (force || !this._extensions[type]) {
      const ext = extensions[0];
      this._extensions[type] = (ext[0] !== '*') ? ext : ext.substr(1);
    }
  }
};

/**
 * Lookup a mime type based on extension
 */
Mime$1.prototype.getType = function(path) {
  path = String(path);
  let last = path.replace(/^.*[/\\]/, '').toLowerCase();
  let ext = last.replace(/^.*\./, '').toLowerCase();

  let hasPath = last.length < path.length;
  let hasDot = ext.length < last.length - 1;

  return (hasDot || !hasPath) && this._types[ext] || null;
};

/**
 * Return file extension associated with a mime type
 */
Mime$1.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};

var Mime_1 = Mime$1;

var standard = {"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomdeleted+xml":["atomdeleted"],"application/atomsvc+xml":["atomsvc"],"application/atsc-dwd+xml":["dwd"],"application/atsc-held+xml":["held"],"application/atsc-rsat+xml":["rsat"],"application/bdoc":["bdoc"],"application/calendar+xml":["xcs"],"application/ccxml+xml":["ccxml"],"application/cdfx+xml":["cdfx"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["es","ecma"],"application/emma+xml":["emma"],"application/emotionml+xml":["emotionml"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/express":["exp"],"application/fdt+xml":["fdt"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/its+xml":["its"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lgr+xml":["lgr"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mmt-aei+xml":["maei"],"application/mmt-usd+xml":["musd"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/node":["cjs"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/p2p-overlay+xml":["relo"],"application/patch-ops-error+xml":["xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/provenance+xml":["provx"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/route-apd+xml":["rapd"],"application/route-s-tsid+xml":["sls"],"application/route-usd+xml":["rusd"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/senml+xml":["senmlx"],"application/sensml+xml":["sensmlx"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/swid+xml":["swidtag"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/toml":["toml"],"application/trig":["trig"],"application/ttml+xml":["ttml"],"application/ubjson":["ubj"],"application/urc-ressheet+xml":["rsheet"],"application/urc-targetdesc+xml":["td"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-att+xml":["xav"],"application/xcap-caps+xml":["xca"],"application/xcap-diff+xml":["xdf"],"application/xcap-el+xml":["xel"],"application/xcap-ns+xml":["xns"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xliff+xml":["xlf"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["*xsl","xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/amr":["amr"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mobile-xmf":["mxmf"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx","opus"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/avif":["avif"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/hej2k":["hej2"],"image/hsj2":["hsj2"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jph":["jph"],"image/jphc":["jhc"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/jxra":["jxra"],"image/jxrs":["jxrs"],"image/jxs":["jxs"],"image/jxsc":["jxsc"],"image/jxsi":["jxsi"],"image/jxss":["jxss"],"image/ktx":["ktx"],"image/ktx2":["ktx2"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/mtl":["mtl"],"model/obj":["obj"],"model/step+xml":["stpx"],"model/step+zip":["stpz"],"model/step-xml+zip":["stpxz"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/spdx":["spdx"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/iso.segment":["m4s"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]};

var other = {"application/prs.cww":["cww"],"application/vnd.1000minds.decision-model+xml":["1km"],"application/vnd.3gpp.pic-bw-large":["plb"],"application/vnd.3gpp.pic-bw-small":["psb"],"application/vnd.3gpp.pic-bw-var":["pvb"],"application/vnd.3gpp2.tcap":["tcap"],"application/vnd.3m.post-it-notes":["pwn"],"application/vnd.accpac.simply.aso":["aso"],"application/vnd.accpac.simply.imp":["imp"],"application/vnd.acucobol":["acu"],"application/vnd.acucorp":["atc","acutc"],"application/vnd.adobe.air-application-installer-package+zip":["air"],"application/vnd.adobe.formscentral.fcdt":["fcdt"],"application/vnd.adobe.fxp":["fxp","fxpl"],"application/vnd.adobe.xdp+xml":["xdp"],"application/vnd.adobe.xfdf":["xfdf"],"application/vnd.ahead.space":["ahead"],"application/vnd.airzip.filesecure.azf":["azf"],"application/vnd.airzip.filesecure.azs":["azs"],"application/vnd.amazon.ebook":["azw"],"application/vnd.americandynamics.acc":["acc"],"application/vnd.amiga.ami":["ami"],"application/vnd.android.package-archive":["apk"],"application/vnd.anser-web-certificate-issue-initiation":["cii"],"application/vnd.anser-web-funds-transfer-initiation":["fti"],"application/vnd.antix.game-component":["atx"],"application/vnd.apple.installer+xml":["mpkg"],"application/vnd.apple.keynote":["key"],"application/vnd.apple.mpegurl":["m3u8"],"application/vnd.apple.numbers":["numbers"],"application/vnd.apple.pages":["pages"],"application/vnd.apple.pkpass":["pkpass"],"application/vnd.aristanetworks.swi":["swi"],"application/vnd.astraea-software.iota":["iota"],"application/vnd.audiograph":["aep"],"application/vnd.balsamiq.bmml+xml":["bmml"],"application/vnd.blueice.multipass":["mpm"],"application/vnd.bmi":["bmi"],"application/vnd.businessobjects":["rep"],"application/vnd.chemdraw+xml":["cdxml"],"application/vnd.chipnuts.karaoke-mmd":["mmd"],"application/vnd.cinderella":["cdy"],"application/vnd.citationstyles.style+xml":["csl"],"application/vnd.claymore":["cla"],"application/vnd.cloanto.rp9":["rp9"],"application/vnd.clonk.c4group":["c4g","c4d","c4f","c4p","c4u"],"application/vnd.cluetrust.cartomobile-config":["c11amc"],"application/vnd.cluetrust.cartomobile-config-pkg":["c11amz"],"application/vnd.commonspace":["csp"],"application/vnd.contact.cmsg":["cdbcmsg"],"application/vnd.cosmocaller":["cmc"],"application/vnd.crick.clicker":["clkx"],"application/vnd.crick.clicker.keyboard":["clkk"],"application/vnd.crick.clicker.palette":["clkp"],"application/vnd.crick.clicker.template":["clkt"],"application/vnd.crick.clicker.wordbank":["clkw"],"application/vnd.criticaltools.wbs+xml":["wbs"],"application/vnd.ctc-posml":["pml"],"application/vnd.cups-ppd":["ppd"],"application/vnd.curl.car":["car"],"application/vnd.curl.pcurl":["pcurl"],"application/vnd.dart":["dart"],"application/vnd.data-vision.rdz":["rdz"],"application/vnd.dbf":["dbf"],"application/vnd.dece.data":["uvf","uvvf","uvd","uvvd"],"application/vnd.dece.ttml+xml":["uvt","uvvt"],"application/vnd.dece.unspecified":["uvx","uvvx"],"application/vnd.dece.zip":["uvz","uvvz"],"application/vnd.denovo.fcselayout-link":["fe_launch"],"application/vnd.dna":["dna"],"application/vnd.dolby.mlp":["mlp"],"application/vnd.dpgraph":["dpg"],"application/vnd.dreamfactory":["dfac"],"application/vnd.ds-keypoint":["kpxx"],"application/vnd.dvb.ait":["ait"],"application/vnd.dvb.service":["svc"],"application/vnd.dynageo":["geo"],"application/vnd.ecowin.chart":["mag"],"application/vnd.enliven":["nml"],"application/vnd.epson.esf":["esf"],"application/vnd.epson.msf":["msf"],"application/vnd.epson.quickanime":["qam"],"application/vnd.epson.salt":["slt"],"application/vnd.epson.ssf":["ssf"],"application/vnd.eszigno3+xml":["es3","et3"],"application/vnd.ezpix-album":["ez2"],"application/vnd.ezpix-package":["ez3"],"application/vnd.fdf":["fdf"],"application/vnd.fdsn.mseed":["mseed"],"application/vnd.fdsn.seed":["seed","dataless"],"application/vnd.flographit":["gph"],"application/vnd.fluxtime.clip":["ftc"],"application/vnd.framemaker":["fm","frame","maker","book"],"application/vnd.frogans.fnc":["fnc"],"application/vnd.frogans.ltf":["ltf"],"application/vnd.fsc.weblaunch":["fsc"],"application/vnd.fujitsu.oasys":["oas"],"application/vnd.fujitsu.oasys2":["oa2"],"application/vnd.fujitsu.oasys3":["oa3"],"application/vnd.fujitsu.oasysgp":["fg5"],"application/vnd.fujitsu.oasysprs":["bh2"],"application/vnd.fujixerox.ddd":["ddd"],"application/vnd.fujixerox.docuworks":["xdw"],"application/vnd.fujixerox.docuworks.binder":["xbd"],"application/vnd.fuzzysheet":["fzs"],"application/vnd.genomatix.tuxedo":["txd"],"application/vnd.geogebra.file":["ggb"],"application/vnd.geogebra.tool":["ggt"],"application/vnd.geometry-explorer":["gex","gre"],"application/vnd.geonext":["gxt"],"application/vnd.geoplan":["g2w"],"application/vnd.geospace":["g3w"],"application/vnd.gmx":["gmx"],"application/vnd.google-apps.document":["gdoc"],"application/vnd.google-apps.presentation":["gslides"],"application/vnd.google-apps.spreadsheet":["gsheet"],"application/vnd.google-earth.kml+xml":["kml"],"application/vnd.google-earth.kmz":["kmz"],"application/vnd.grafeq":["gqf","gqs"],"application/vnd.groove-account":["gac"],"application/vnd.groove-help":["ghf"],"application/vnd.groove-identity-message":["gim"],"application/vnd.groove-injector":["grv"],"application/vnd.groove-tool-message":["gtm"],"application/vnd.groove-tool-template":["tpl"],"application/vnd.groove-vcard":["vcg"],"application/vnd.hal+xml":["hal"],"application/vnd.handheld-entertainment+xml":["zmm"],"application/vnd.hbci":["hbci"],"application/vnd.hhe.lesson-player":["les"],"application/vnd.hp-hpgl":["hpgl"],"application/vnd.hp-hpid":["hpid"],"application/vnd.hp-hps":["hps"],"application/vnd.hp-jlyt":["jlt"],"application/vnd.hp-pcl":["pcl"],"application/vnd.hp-pclxl":["pclxl"],"application/vnd.hydrostatix.sof-data":["sfd-hdstx"],"application/vnd.ibm.minipay":["mpy"],"application/vnd.ibm.modcap":["afp","listafp","list3820"],"application/vnd.ibm.rights-management":["irm"],"application/vnd.ibm.secure-container":["sc"],"application/vnd.iccprofile":["icc","icm"],"application/vnd.igloader":["igl"],"application/vnd.immervision-ivp":["ivp"],"application/vnd.immervision-ivu":["ivu"],"application/vnd.insors.igm":["igm"],"application/vnd.intercon.formnet":["xpw","xpx"],"application/vnd.intergeo":["i2g"],"application/vnd.intu.qbo":["qbo"],"application/vnd.intu.qfx":["qfx"],"application/vnd.ipunplugged.rcprofile":["rcprofile"],"application/vnd.irepository.package+xml":["irp"],"application/vnd.is-xpr":["xpr"],"application/vnd.isac.fcs":["fcs"],"application/vnd.jam":["jam"],"application/vnd.jcp.javame.midlet-rms":["rms"],"application/vnd.jisp":["jisp"],"application/vnd.joost.joda-archive":["joda"],"application/vnd.kahootz":["ktz","ktr"],"application/vnd.kde.karbon":["karbon"],"application/vnd.kde.kchart":["chrt"],"application/vnd.kde.kformula":["kfo"],"application/vnd.kde.kivio":["flw"],"application/vnd.kde.kontour":["kon"],"application/vnd.kde.kpresenter":["kpr","kpt"],"application/vnd.kde.kspread":["ksp"],"application/vnd.kde.kword":["kwd","kwt"],"application/vnd.kenameaapp":["htke"],"application/vnd.kidspiration":["kia"],"application/vnd.kinar":["kne","knp"],"application/vnd.koan":["skp","skd","skt","skm"],"application/vnd.kodak-descriptor":["sse"],"application/vnd.las.las+xml":["lasxml"],"application/vnd.llamagraphics.life-balance.desktop":["lbd"],"application/vnd.llamagraphics.life-balance.exchange+xml":["lbe"],"application/vnd.lotus-1-2-3":["123"],"application/vnd.lotus-approach":["apr"],"application/vnd.lotus-freelance":["pre"],"application/vnd.lotus-notes":["nsf"],"application/vnd.lotus-organizer":["org"],"application/vnd.lotus-screencam":["scm"],"application/vnd.lotus-wordpro":["lwp"],"application/vnd.macports.portpkg":["portpkg"],"application/vnd.mapbox-vector-tile":["mvt"],"application/vnd.mcd":["mcd"],"application/vnd.medcalcdata":["mc1"],"application/vnd.mediastation.cdkey":["cdkey"],"application/vnd.mfer":["mwf"],"application/vnd.mfmp":["mfm"],"application/vnd.micrografx.flo":["flo"],"application/vnd.micrografx.igx":["igx"],"application/vnd.mif":["mif"],"application/vnd.mobius.daf":["daf"],"application/vnd.mobius.dis":["dis"],"application/vnd.mobius.mbk":["mbk"],"application/vnd.mobius.mqy":["mqy"],"application/vnd.mobius.msl":["msl"],"application/vnd.mobius.plc":["plc"],"application/vnd.mobius.txf":["txf"],"application/vnd.mophun.application":["mpn"],"application/vnd.mophun.certificate":["mpc"],"application/vnd.mozilla.xul+xml":["xul"],"application/vnd.ms-artgalry":["cil"],"application/vnd.ms-cab-compressed":["cab"],"application/vnd.ms-excel":["xls","xlm","xla","xlc","xlt","xlw"],"application/vnd.ms-excel.addin.macroenabled.12":["xlam"],"application/vnd.ms-excel.sheet.binary.macroenabled.12":["xlsb"],"application/vnd.ms-excel.sheet.macroenabled.12":["xlsm"],"application/vnd.ms-excel.template.macroenabled.12":["xltm"],"application/vnd.ms-fontobject":["eot"],"application/vnd.ms-htmlhelp":["chm"],"application/vnd.ms-ims":["ims"],"application/vnd.ms-lrm":["lrm"],"application/vnd.ms-officetheme":["thmx"],"application/vnd.ms-outlook":["msg"],"application/vnd.ms-pki.seccat":["cat"],"application/vnd.ms-pki.stl":["*stl"],"application/vnd.ms-powerpoint":["ppt","pps","pot"],"application/vnd.ms-powerpoint.addin.macroenabled.12":["ppam"],"application/vnd.ms-powerpoint.presentation.macroenabled.12":["pptm"],"application/vnd.ms-powerpoint.slide.macroenabled.12":["sldm"],"application/vnd.ms-powerpoint.slideshow.macroenabled.12":["ppsm"],"application/vnd.ms-powerpoint.template.macroenabled.12":["potm"],"application/vnd.ms-project":["mpp","mpt"],"application/vnd.ms-word.document.macroenabled.12":["docm"],"application/vnd.ms-word.template.macroenabled.12":["dotm"],"application/vnd.ms-works":["wps","wks","wcm","wdb"],"application/vnd.ms-wpl":["wpl"],"application/vnd.ms-xpsdocument":["xps"],"application/vnd.mseq":["mseq"],"application/vnd.musician":["mus"],"application/vnd.muvee.style":["msty"],"application/vnd.mynfc":["taglet"],"application/vnd.neurolanguage.nlu":["nlu"],"application/vnd.nitf":["ntf","nitf"],"application/vnd.noblenet-directory":["nnd"],"application/vnd.noblenet-sealer":["nns"],"application/vnd.noblenet-web":["nnw"],"application/vnd.nokia.n-gage.ac+xml":["*ac"],"application/vnd.nokia.n-gage.data":["ngdat"],"application/vnd.nokia.n-gage.symbian.install":["n-gage"],"application/vnd.nokia.radio-preset":["rpst"],"application/vnd.nokia.radio-presets":["rpss"],"application/vnd.novadigm.edm":["edm"],"application/vnd.novadigm.edx":["edx"],"application/vnd.novadigm.ext":["ext"],"application/vnd.oasis.opendocument.chart":["odc"],"application/vnd.oasis.opendocument.chart-template":["otc"],"application/vnd.oasis.opendocument.database":["odb"],"application/vnd.oasis.opendocument.formula":["odf"],"application/vnd.oasis.opendocument.formula-template":["odft"],"application/vnd.oasis.opendocument.graphics":["odg"],"application/vnd.oasis.opendocument.graphics-template":["otg"],"application/vnd.oasis.opendocument.image":["odi"],"application/vnd.oasis.opendocument.image-template":["oti"],"application/vnd.oasis.opendocument.presentation":["odp"],"application/vnd.oasis.opendocument.presentation-template":["otp"],"application/vnd.oasis.opendocument.spreadsheet":["ods"],"application/vnd.oasis.opendocument.spreadsheet-template":["ots"],"application/vnd.oasis.opendocument.text":["odt"],"application/vnd.oasis.opendocument.text-master":["odm"],"application/vnd.oasis.opendocument.text-template":["ott"],"application/vnd.oasis.opendocument.text-web":["oth"],"application/vnd.olpc-sugar":["xo"],"application/vnd.oma.dd2+xml":["dd2"],"application/vnd.openblox.game+xml":["obgx"],"application/vnd.openofficeorg.extension":["oxt"],"application/vnd.openstreetmap.data+xml":["osm"],"application/vnd.openxmlformats-officedocument.presentationml.presentation":["pptx"],"application/vnd.openxmlformats-officedocument.presentationml.slide":["sldx"],"application/vnd.openxmlformats-officedocument.presentationml.slideshow":["ppsx"],"application/vnd.openxmlformats-officedocument.presentationml.template":["potx"],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":["xlsx"],"application/vnd.openxmlformats-officedocument.spreadsheetml.template":["xltx"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":["docx"],"application/vnd.openxmlformats-officedocument.wordprocessingml.template":["dotx"],"application/vnd.osgeo.mapguide.package":["mgp"],"application/vnd.osgi.dp":["dp"],"application/vnd.osgi.subsystem":["esa"],"application/vnd.palm":["pdb","pqa","oprc"],"application/vnd.pawaafile":["paw"],"application/vnd.pg.format":["str"],"application/vnd.pg.osasli":["ei6"],"application/vnd.picsel":["efif"],"application/vnd.pmi.widget":["wg"],"application/vnd.pocketlearn":["plf"],"application/vnd.powerbuilder6":["pbd"],"application/vnd.previewsystems.box":["box"],"application/vnd.proteus.magazine":["mgz"],"application/vnd.publishare-delta-tree":["qps"],"application/vnd.pvi.ptid1":["ptid"],"application/vnd.quark.quarkxpress":["qxd","qxt","qwd","qwt","qxl","qxb"],"application/vnd.rar":["rar"],"application/vnd.realvnc.bed":["bed"],"application/vnd.recordare.musicxml":["mxl"],"application/vnd.recordare.musicxml+xml":["musicxml"],"application/vnd.rig.cryptonote":["cryptonote"],"application/vnd.rim.cod":["cod"],"application/vnd.rn-realmedia":["rm"],"application/vnd.rn-realmedia-vbr":["rmvb"],"application/vnd.route66.link66+xml":["link66"],"application/vnd.sailingtracker.track":["st"],"application/vnd.seemail":["see"],"application/vnd.sema":["sema"],"application/vnd.semd":["semd"],"application/vnd.semf":["semf"],"application/vnd.shana.informed.formdata":["ifm"],"application/vnd.shana.informed.formtemplate":["itp"],"application/vnd.shana.informed.interchange":["iif"],"application/vnd.shana.informed.package":["ipk"],"application/vnd.simtech-mindmapper":["twd","twds"],"application/vnd.smaf":["mmf"],"application/vnd.smart.teacher":["teacher"],"application/vnd.software602.filler.form+xml":["fo"],"application/vnd.solent.sdkm+xml":["sdkm","sdkd"],"application/vnd.spotfire.dxp":["dxp"],"application/vnd.spotfire.sfs":["sfs"],"application/vnd.stardivision.calc":["sdc"],"application/vnd.stardivision.draw":["sda"],"application/vnd.stardivision.impress":["sdd"],"application/vnd.stardivision.math":["smf"],"application/vnd.stardivision.writer":["sdw","vor"],"application/vnd.stardivision.writer-global":["sgl"],"application/vnd.stepmania.package":["smzip"],"application/vnd.stepmania.stepchart":["sm"],"application/vnd.sun.wadl+xml":["wadl"],"application/vnd.sun.xml.calc":["sxc"],"application/vnd.sun.xml.calc.template":["stc"],"application/vnd.sun.xml.draw":["sxd"],"application/vnd.sun.xml.draw.template":["std"],"application/vnd.sun.xml.impress":["sxi"],"application/vnd.sun.xml.impress.template":["sti"],"application/vnd.sun.xml.math":["sxm"],"application/vnd.sun.xml.writer":["sxw"],"application/vnd.sun.xml.writer.global":["sxg"],"application/vnd.sun.xml.writer.template":["stw"],"application/vnd.sus-calendar":["sus","susp"],"application/vnd.svd":["svd"],"application/vnd.symbian.install":["sis","sisx"],"application/vnd.syncml+xml":["xsm"],"application/vnd.syncml.dm+wbxml":["bdm"],"application/vnd.syncml.dm+xml":["xdm"],"application/vnd.syncml.dmddf+xml":["ddf"],"application/vnd.tao.intent-module-archive":["tao"],"application/vnd.tcpdump.pcap":["pcap","cap","dmp"],"application/vnd.tmobile-livetv":["tmo"],"application/vnd.trid.tpt":["tpt"],"application/vnd.triscape.mxs":["mxs"],"application/vnd.trueapp":["tra"],"application/vnd.ufdl":["ufd","ufdl"],"application/vnd.uiq.theme":["utz"],"application/vnd.umajin":["umj"],"application/vnd.unity":["unityweb"],"application/vnd.uoml+xml":["uoml"],"application/vnd.vcx":["vcx"],"application/vnd.visio":["vsd","vst","vss","vsw"],"application/vnd.visionary":["vis"],"application/vnd.vsf":["vsf"],"application/vnd.wap.wbxml":["wbxml"],"application/vnd.wap.wmlc":["wmlc"],"application/vnd.wap.wmlscriptc":["wmlsc"],"application/vnd.webturbo":["wtb"],"application/vnd.wolfram.player":["nbp"],"application/vnd.wordperfect":["wpd"],"application/vnd.wqd":["wqd"],"application/vnd.wt.stf":["stf"],"application/vnd.xara":["xar"],"application/vnd.xfdl":["xfdl"],"application/vnd.yamaha.hv-dic":["hvd"],"application/vnd.yamaha.hv-script":["hvs"],"application/vnd.yamaha.hv-voice":["hvp"],"application/vnd.yamaha.openscoreformat":["osf"],"application/vnd.yamaha.openscoreformat.osfpvg+xml":["osfpvg"],"application/vnd.yamaha.smaf-audio":["saf"],"application/vnd.yamaha.smaf-phrase":["spf"],"application/vnd.yellowriver-custom-menu":["cmp"],"application/vnd.zul":["zir","zirz"],"application/vnd.zzazz.deck+xml":["zaz"],"application/x-7z-compressed":["7z"],"application/x-abiword":["abw"],"application/x-ace-compressed":["ace"],"application/x-apple-diskimage":["*dmg"],"application/x-arj":["arj"],"application/x-authorware-bin":["aab","x32","u32","vox"],"application/x-authorware-map":["aam"],"application/x-authorware-seg":["aas"],"application/x-bcpio":["bcpio"],"application/x-bdoc":["*bdoc"],"application/x-bittorrent":["torrent"],"application/x-blorb":["blb","blorb"],"application/x-bzip":["bz"],"application/x-bzip2":["bz2","boz"],"application/x-cbr":["cbr","cba","cbt","cbz","cb7"],"application/x-cdlink":["vcd"],"application/x-cfs-compressed":["cfs"],"application/x-chat":["chat"],"application/x-chess-pgn":["pgn"],"application/x-chrome-extension":["crx"],"application/x-cocoa":["cco"],"application/x-conference":["nsc"],"application/x-cpio":["cpio"],"application/x-csh":["csh"],"application/x-debian-package":["*deb","udeb"],"application/x-dgc-compressed":["dgc"],"application/x-director":["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"],"application/x-doom":["wad"],"application/x-dtbncx+xml":["ncx"],"application/x-dtbook+xml":["dtb"],"application/x-dtbresource+xml":["res"],"application/x-dvi":["dvi"],"application/x-envoy":["evy"],"application/x-eva":["eva"],"application/x-font-bdf":["bdf"],"application/x-font-ghostscript":["gsf"],"application/x-font-linux-psf":["psf"],"application/x-font-pcf":["pcf"],"application/x-font-snf":["snf"],"application/x-font-type1":["pfa","pfb","pfm","afm"],"application/x-freearc":["arc"],"application/x-futuresplash":["spl"],"application/x-gca-compressed":["gca"],"application/x-glulx":["ulx"],"application/x-gnumeric":["gnumeric"],"application/x-gramps-xml":["gramps"],"application/x-gtar":["gtar"],"application/x-hdf":["hdf"],"application/x-httpd-php":["php"],"application/x-install-instructions":["install"],"application/x-iso9660-image":["*iso"],"application/x-iwork-keynote-sffkey":["*key"],"application/x-iwork-numbers-sffnumbers":["*numbers"],"application/x-iwork-pages-sffpages":["*pages"],"application/x-java-archive-diff":["jardiff"],"application/x-java-jnlp-file":["jnlp"],"application/x-keepass2":["kdbx"],"application/x-latex":["latex"],"application/x-lua-bytecode":["luac"],"application/x-lzh-compressed":["lzh","lha"],"application/x-makeself":["run"],"application/x-mie":["mie"],"application/x-mobipocket-ebook":["prc","mobi"],"application/x-ms-application":["application"],"application/x-ms-shortcut":["lnk"],"application/x-ms-wmd":["wmd"],"application/x-ms-wmz":["wmz"],"application/x-ms-xbap":["xbap"],"application/x-msaccess":["mdb"],"application/x-msbinder":["obd"],"application/x-mscardfile":["crd"],"application/x-msclip":["clp"],"application/x-msdos-program":["*exe"],"application/x-msdownload":["*exe","*dll","com","bat","*msi"],"application/x-msmediaview":["mvb","m13","m14"],"application/x-msmetafile":["*wmf","*wmz","*emf","emz"],"application/x-msmoney":["mny"],"application/x-mspublisher":["pub"],"application/x-msschedule":["scd"],"application/x-msterminal":["trm"],"application/x-mswrite":["wri"],"application/x-netcdf":["nc","cdf"],"application/x-ns-proxy-autoconfig":["pac"],"application/x-nzb":["nzb"],"application/x-perl":["pl","pm"],"application/x-pilot":["*prc","*pdb"],"application/x-pkcs12":["p12","pfx"],"application/x-pkcs7-certificates":["p7b","spc"],"application/x-pkcs7-certreqresp":["p7r"],"application/x-rar-compressed":["*rar"],"application/x-redhat-package-manager":["rpm"],"application/x-research-info-systems":["ris"],"application/x-sea":["sea"],"application/x-sh":["sh"],"application/x-shar":["shar"],"application/x-shockwave-flash":["swf"],"application/x-silverlight-app":["xap"],"application/x-sql":["sql"],"application/x-stuffit":["sit"],"application/x-stuffitx":["sitx"],"application/x-subrip":["srt"],"application/x-sv4cpio":["sv4cpio"],"application/x-sv4crc":["sv4crc"],"application/x-t3vm-image":["t3"],"application/x-tads":["gam"],"application/x-tar":["tar"],"application/x-tcl":["tcl","tk"],"application/x-tex":["tex"],"application/x-tex-tfm":["tfm"],"application/x-texinfo":["texinfo","texi"],"application/x-tgif":["*obj"],"application/x-ustar":["ustar"],"application/x-virtualbox-hdd":["hdd"],"application/x-virtualbox-ova":["ova"],"application/x-virtualbox-ovf":["ovf"],"application/x-virtualbox-vbox":["vbox"],"application/x-virtualbox-vbox-extpack":["vbox-extpack"],"application/x-virtualbox-vdi":["vdi"],"application/x-virtualbox-vhd":["vhd"],"application/x-virtualbox-vmdk":["vmdk"],"application/x-wais-source":["src"],"application/x-web-app-manifest+json":["webapp"],"application/x-x509-ca-cert":["der","crt","pem"],"application/x-xfig":["fig"],"application/x-xliff+xml":["*xlf"],"application/x-xpinstall":["xpi"],"application/x-xz":["xz"],"application/x-zmachine":["z1","z2","z3","z4","z5","z6","z7","z8"],"audio/vnd.dece.audio":["uva","uvva"],"audio/vnd.digital-winds":["eol"],"audio/vnd.dra":["dra"],"audio/vnd.dts":["dts"],"audio/vnd.dts.hd":["dtshd"],"audio/vnd.lucent.voice":["lvp"],"audio/vnd.ms-playready.media.pya":["pya"],"audio/vnd.nuera.ecelp4800":["ecelp4800"],"audio/vnd.nuera.ecelp7470":["ecelp7470"],"audio/vnd.nuera.ecelp9600":["ecelp9600"],"audio/vnd.rip":["rip"],"audio/x-aac":["aac"],"audio/x-aiff":["aif","aiff","aifc"],"audio/x-caf":["caf"],"audio/x-flac":["flac"],"audio/x-m4a":["*m4a"],"audio/x-matroska":["mka"],"audio/x-mpegurl":["m3u"],"audio/x-ms-wax":["wax"],"audio/x-ms-wma":["wma"],"audio/x-pn-realaudio":["ram","ra"],"audio/x-pn-realaudio-plugin":["rmp"],"audio/x-realaudio":["*ra"],"audio/x-wav":["*wav"],"chemical/x-cdx":["cdx"],"chemical/x-cif":["cif"],"chemical/x-cmdf":["cmdf"],"chemical/x-cml":["cml"],"chemical/x-csml":["csml"],"chemical/x-xyz":["xyz"],"image/prs.btif":["btif"],"image/prs.pti":["pti"],"image/vnd.adobe.photoshop":["psd"],"image/vnd.airzip.accelerator.azv":["azv"],"image/vnd.dece.graphic":["uvi","uvvi","uvg","uvvg"],"image/vnd.djvu":["djvu","djv"],"image/vnd.dvb.subtitle":["*sub"],"image/vnd.dwg":["dwg"],"image/vnd.dxf":["dxf"],"image/vnd.fastbidsheet":["fbs"],"image/vnd.fpx":["fpx"],"image/vnd.fst":["fst"],"image/vnd.fujixerox.edmics-mmr":["mmr"],"image/vnd.fujixerox.edmics-rlc":["rlc"],"image/vnd.microsoft.icon":["ico"],"image/vnd.ms-dds":["dds"],"image/vnd.ms-modi":["mdi"],"image/vnd.ms-photo":["wdp"],"image/vnd.net-fpx":["npx"],"image/vnd.pco.b16":["b16"],"image/vnd.tencent.tap":["tap"],"image/vnd.valve.source.texture":["vtf"],"image/vnd.wap.wbmp":["wbmp"],"image/vnd.xiff":["xif"],"image/vnd.zbrush.pcx":["pcx"],"image/x-3ds":["3ds"],"image/x-cmu-raster":["ras"],"image/x-cmx":["cmx"],"image/x-freehand":["fh","fhc","fh4","fh5","fh7"],"image/x-icon":["*ico"],"image/x-jng":["jng"],"image/x-mrsid-image":["sid"],"image/x-ms-bmp":["*bmp"],"image/x-pcx":["*pcx"],"image/x-pict":["pic","pct"],"image/x-portable-anymap":["pnm"],"image/x-portable-bitmap":["pbm"],"image/x-portable-graymap":["pgm"],"image/x-portable-pixmap":["ppm"],"image/x-rgb":["rgb"],"image/x-tga":["tga"],"image/x-xbitmap":["xbm"],"image/x-xpixmap":["xpm"],"image/x-xwindowdump":["xwd"],"message/vnd.wfa.wsc":["wsc"],"model/vnd.collada+xml":["dae"],"model/vnd.dwf":["dwf"],"model/vnd.gdl":["gdl"],"model/vnd.gtw":["gtw"],"model/vnd.mts":["mts"],"model/vnd.opengex":["ogex"],"model/vnd.parasolid.transmit.binary":["x_b"],"model/vnd.parasolid.transmit.text":["x_t"],"model/vnd.sap.vds":["vds"],"model/vnd.usdz+zip":["usdz"],"model/vnd.valve.source.compiled-map":["bsp"],"model/vnd.vtu":["vtu"],"text/prs.lines.tag":["dsc"],"text/vnd.curl":["curl"],"text/vnd.curl.dcurl":["dcurl"],"text/vnd.curl.mcurl":["mcurl"],"text/vnd.curl.scurl":["scurl"],"text/vnd.dvb.subtitle":["sub"],"text/vnd.fly":["fly"],"text/vnd.fmi.flexstor":["flx"],"text/vnd.graphviz":["gv"],"text/vnd.in3d.3dml":["3dml"],"text/vnd.in3d.spot":["spot"],"text/vnd.sun.j2me.app-descriptor":["jad"],"text/vnd.wap.wml":["wml"],"text/vnd.wap.wmlscript":["wmls"],"text/x-asm":["s","asm"],"text/x-c":["c","cc","cxx","cpp","h","hh","dic"],"text/x-component":["htc"],"text/x-fortran":["f","for","f77","f90"],"text/x-handlebars-template":["hbs"],"text/x-java-source":["java"],"text/x-lua":["lua"],"text/x-markdown":["mkd"],"text/x-nfo":["nfo"],"text/x-opml":["opml"],"text/x-org":["*org"],"text/x-pascal":["p","pas"],"text/x-processing":["pde"],"text/x-sass":["sass"],"text/x-scss":["scss"],"text/x-setext":["etx"],"text/x-sfv":["sfv"],"text/x-suse-ymp":["ymp"],"text/x-uuencode":["uu"],"text/x-vcalendar":["vcs"],"text/x-vcard":["vcf"],"video/vnd.dece.hd":["uvh","uvvh"],"video/vnd.dece.mobile":["uvm","uvvm"],"video/vnd.dece.pd":["uvp","uvvp"],"video/vnd.dece.sd":["uvs","uvvs"],"video/vnd.dece.video":["uvv","uvvv"],"video/vnd.dvb.file":["dvb"],"video/vnd.fvt":["fvt"],"video/vnd.mpegurl":["mxu","m4u"],"video/vnd.ms-playready.media.pyv":["pyv"],"video/vnd.uvvu.mp4":["uvu","uvvu"],"video/vnd.vivo":["viv"],"video/x-f4v":["f4v"],"video/x-fli":["fli"],"video/x-flv":["flv"],"video/x-m4v":["m4v"],"video/x-matroska":["mkv","mk3d","mks"],"video/x-mng":["mng"],"video/x-ms-asf":["asf","asx"],"video/x-ms-vob":["vob"],"video/x-ms-wm":["wm"],"video/x-ms-wmv":["wmv"],"video/x-ms-wmx":["wmx"],"video/x-ms-wvx":["wvx"],"video/x-msvideo":["avi"],"video/x-sgi-movie":["movie"],"video/x-smv":["smv"],"x-conference/x-cooltalk":["ice"]};

let Mime = Mime_1;
var mime = new Mime(standard, other);

const mime$1 = /*@__PURE__*/getDefaultExportFromCjs(mime);

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

var parse_1 = parse$1;
var serialize_1 = serialize;

/**
 * Module variables.
 * @private
 */

var __toString = Object.prototype.toString;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse$1(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {};
  var opt = options || {};
  var dec = opt.decode || decode;

  var index = 0;
  while (index < str.length) {
    var eqIdx = str.indexOf('=', index);

    // no more cookie pairs
    if (eqIdx === -1) {
      break
    }

    var endIdx = str.indexOf(';', index);

    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      // backtrack on prior semicolon
      index = str.lastIndexOf(';', eqIdx - 1) + 1;
      continue
    }

    var key = str.slice(index, eqIdx).trim();

    // only assign once
    if (undefined === obj[key]) {
      var val = str.slice(eqIdx + 1, endIdx).trim();

      // quoted values
      if (val.charCodeAt(0) === 0x22) {
        val = val.slice(1, -1);
      }

      obj[key] = tryDecode(val, dec);
    }

    index = endIdx + 1;
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;

    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError('option maxAge is invalid')
    }

    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    var expires = opt.expires;

    if (!isDate(expires) || isNaN(expires.valueOf())) {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.priority) {
    var priority = typeof opt.priority === 'string'
      ? opt.priority.toLowerCase()
      : opt.priority;

    switch (priority) {
      case 'low':
        str += '; Priority=Low';
        break
      case 'medium':
        str += '; Priority=Medium';
        break
      case 'high':
        str += '; Priority=High';
        break
      default:
        throw new TypeError('option priority is invalid')
    }
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * URL-decode string value. Optimized to skip native call when no %.
 *
 * @param {string} str
 * @returns {string}
 */

function decode (str) {
  return str.indexOf('%') !== -1
    ? decodeURIComponent(str)
    : str
}

/**
 * URL-encode value.
 *
 * @param {string} str
 * @returns {string}
 */

function encode (val) {
  return encodeURIComponent(val)
}

/**
 * Determine if value is a Date.
 *
 * @param {*} val
 * @private
 */

function isDate (val) {
  return __toString.call(val) === '[object Date]' ||
    val instanceof Date
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

const DELETED_EXPIRATION = /* @__PURE__ */ new Date(0);
const DELETED_VALUE = "deleted";
const responseSentSymbol$2 = Symbol.for("astro.responseSent");
class AstroCookie {
  constructor(value) {
    this.value = value;
  }
  json() {
    if (this.value === void 0) {
      throw new Error(`Cannot convert undefined to an object.`);
    }
    return JSON.parse(this.value);
  }
  number() {
    return Number(this.value);
  }
  boolean() {
    if (this.value === "false")
      return false;
    if (this.value === "0")
      return false;
    return Boolean(this.value);
  }
}
class AstroCookies {
  #request;
  #requestValues;
  #outgoing;
  constructor(request) {
    this.#request = request;
    this.#requestValues = null;
    this.#outgoing = null;
  }
  /**
   * Astro.cookies.delete(key) is used to delete a cookie. Using this method will result
   * in a Set-Cookie header added to the response.
   * @param key The cookie to delete
   * @param options Options related to this deletion, such as the path of the cookie.
   */
  delete(key, options) {
    const serializeOptions = {
      expires: DELETED_EXPIRATION
    };
    if (options == null ? void 0 : options.domain) {
      serializeOptions.domain = options.domain;
    }
    if (options == null ? void 0 : options.path) {
      serializeOptions.path = options.path;
    }
    this.#ensureOutgoingMap().set(key, [
      DELETED_VALUE,
      serialize_1(key, DELETED_VALUE, serializeOptions),
      false
    ]);
  }
  /**
   * Astro.cookies.get(key) is used to get a cookie value. The cookie value is read from the
   * request. If you have set a cookie via Astro.cookies.set(key, value), the value will be taken
   * from that set call, overriding any values already part of the request.
   * @param key The cookie to get.
   * @returns An object containing the cookie value as well as convenience methods for converting its value.
   */
  get(key) {
    var _a;
    if ((_a = this.#outgoing) == null ? void 0 : _a.has(key)) {
      let [serializedValue, , isSetValue] = this.#outgoing.get(key);
      if (isSetValue) {
        return new AstroCookie(serializedValue);
      } else {
        return new AstroCookie(void 0);
      }
    }
    const values = this.#ensureParsed();
    const value = values[key];
    return new AstroCookie(value);
  }
  /**
   * Astro.cookies.has(key) returns a boolean indicating whether this cookie is either
   * part of the initial request or set via Astro.cookies.set(key)
   * @param key The cookie to check for.
   * @returns
   */
  has(key) {
    var _a;
    if ((_a = this.#outgoing) == null ? void 0 : _a.has(key)) {
      let [, , isSetValue] = this.#outgoing.get(key);
      return isSetValue;
    }
    const values = this.#ensureParsed();
    return !!values[key];
  }
  /**
   * Astro.cookies.set(key, value) is used to set a cookie's value. If provided
   * an object it will be stringified via JSON.stringify(value). Additionally you
   * can provide options customizing how this cookie will be set, such as setting httpOnly
   * in order to prevent the cookie from being read in client-side JavaScript.
   * @param key The name of the cookie to set.
   * @param value A value, either a string or other primitive or an object.
   * @param options Options for the cookie, such as the path and security settings.
   */
  set(key, value, options) {
    let serializedValue;
    if (typeof value === "string") {
      serializedValue = value;
    } else {
      let toStringValue = value.toString();
      if (toStringValue === Object.prototype.toString.call(value)) {
        serializedValue = JSON.stringify(value);
      } else {
        serializedValue = toStringValue;
      }
    }
    const serializeOptions = {};
    if (options) {
      Object.assign(serializeOptions, options);
    }
    this.#ensureOutgoingMap().set(key, [
      serializedValue,
      serialize_1(key, serializedValue, serializeOptions),
      true
    ]);
    if (this.#request[responseSentSymbol$2]) {
      throw new AstroError({
        ...ResponseSentError
      });
    }
  }
  /**
   * Astro.cookies.header() returns an iterator for the cookies that have previously
   * been set by either Astro.cookies.set() or Astro.cookies.delete().
   * This method is primarily used by adapters to set the header on outgoing responses.
   * @returns
   */
  *headers() {
    if (this.#outgoing == null)
      return;
    for (const [, value] of this.#outgoing) {
      yield value[1];
    }
  }
  #ensureParsed() {
    if (!this.#requestValues) {
      this.#parse();
    }
    if (!this.#requestValues) {
      this.#requestValues = {};
    }
    return this.#requestValues;
  }
  #ensureOutgoingMap() {
    if (!this.#outgoing) {
      this.#outgoing = /* @__PURE__ */ new Map();
    }
    return this.#outgoing;
  }
  #parse() {
    const raw = this.#request.headers.get("cookie");
    if (!raw) {
      return;
    }
    this.#requestValues = parse_1(raw);
  }
}

const astroCookiesSymbol = Symbol.for("astro.cookies");
function attachToResponse(response, cookies) {
  Reflect.set(response, astroCookiesSymbol, cookies);
}
function getFromResponse(response) {
  let cookies = Reflect.get(response, astroCookiesSymbol);
  if (cookies != null) {
    return cookies;
  } else {
    return void 0;
  }
}
function* getSetCookiesFromResponse(response) {
  const cookies = getFromResponse(response);
  if (!cookies) {
    return [];
  }
  for (const headerValue of cookies.headers()) {
    yield headerValue;
  }
  return [];
}

let FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM, isTTY=true;
if (typeof process !== 'undefined') {
	({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
	isTTY = process.stdout && process.stdout.isTTY;
}

const $ = {
	enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== 'dumb' && (
		FORCE_COLOR != null && FORCE_COLOR !== '0' || isTTY
	)
};

function init(x, y) {
	let rgx = new RegExp(`\\x1b\\[${y}m`, 'g');
	let open = `\x1b[${x}m`, close = `\x1b[${y}m`;

	return function (txt) {
		if (!$.enabled || txt == null) return txt;
		return open + (!!~(''+txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
	};
}

// modifiers
const reset = init(0, 0);
const bold = init(1, 22);
const dim = init(2, 22);
const red = init(31, 39);
const yellow = init(33, 39);
const cyan = init(36, 39);

var eastasianwidth = {exports: {}};

(function (module) {
	var eaw = {};

	{
	  module.exports = eaw;
	}

	eaw.eastAsianWidth = function(character) {
	  var x = character.charCodeAt(0);
	  var y = (character.length == 2) ? character.charCodeAt(1) : 0;
	  var codePoint = x;
	  if ((0xD800 <= x && x <= 0xDBFF) && (0xDC00 <= y && y <= 0xDFFF)) {
	    x &= 0x3FF;
	    y &= 0x3FF;
	    codePoint = (x << 10) | y;
	    codePoint += 0x10000;
	  }

	  if ((0x3000 == codePoint) ||
	      (0xFF01 <= codePoint && codePoint <= 0xFF60) ||
	      (0xFFE0 <= codePoint && codePoint <= 0xFFE6)) {
	    return 'F';
	  }
	  if ((0x20A9 == codePoint) ||
	      (0xFF61 <= codePoint && codePoint <= 0xFFBE) ||
	      (0xFFC2 <= codePoint && codePoint <= 0xFFC7) ||
	      (0xFFCA <= codePoint && codePoint <= 0xFFCF) ||
	      (0xFFD2 <= codePoint && codePoint <= 0xFFD7) ||
	      (0xFFDA <= codePoint && codePoint <= 0xFFDC) ||
	      (0xFFE8 <= codePoint && codePoint <= 0xFFEE)) {
	    return 'H';
	  }
	  if ((0x1100 <= codePoint && codePoint <= 0x115F) ||
	      (0x11A3 <= codePoint && codePoint <= 0x11A7) ||
	      (0x11FA <= codePoint && codePoint <= 0x11FF) ||
	      (0x2329 <= codePoint && codePoint <= 0x232A) ||
	      (0x2E80 <= codePoint && codePoint <= 0x2E99) ||
	      (0x2E9B <= codePoint && codePoint <= 0x2EF3) ||
	      (0x2F00 <= codePoint && codePoint <= 0x2FD5) ||
	      (0x2FF0 <= codePoint && codePoint <= 0x2FFB) ||
	      (0x3001 <= codePoint && codePoint <= 0x303E) ||
	      (0x3041 <= codePoint && codePoint <= 0x3096) ||
	      (0x3099 <= codePoint && codePoint <= 0x30FF) ||
	      (0x3105 <= codePoint && codePoint <= 0x312D) ||
	      (0x3131 <= codePoint && codePoint <= 0x318E) ||
	      (0x3190 <= codePoint && codePoint <= 0x31BA) ||
	      (0x31C0 <= codePoint && codePoint <= 0x31E3) ||
	      (0x31F0 <= codePoint && codePoint <= 0x321E) ||
	      (0x3220 <= codePoint && codePoint <= 0x3247) ||
	      (0x3250 <= codePoint && codePoint <= 0x32FE) ||
	      (0x3300 <= codePoint && codePoint <= 0x4DBF) ||
	      (0x4E00 <= codePoint && codePoint <= 0xA48C) ||
	      (0xA490 <= codePoint && codePoint <= 0xA4C6) ||
	      (0xA960 <= codePoint && codePoint <= 0xA97C) ||
	      (0xAC00 <= codePoint && codePoint <= 0xD7A3) ||
	      (0xD7B0 <= codePoint && codePoint <= 0xD7C6) ||
	      (0xD7CB <= codePoint && codePoint <= 0xD7FB) ||
	      (0xF900 <= codePoint && codePoint <= 0xFAFF) ||
	      (0xFE10 <= codePoint && codePoint <= 0xFE19) ||
	      (0xFE30 <= codePoint && codePoint <= 0xFE52) ||
	      (0xFE54 <= codePoint && codePoint <= 0xFE66) ||
	      (0xFE68 <= codePoint && codePoint <= 0xFE6B) ||
	      (0x1B000 <= codePoint && codePoint <= 0x1B001) ||
	      (0x1F200 <= codePoint && codePoint <= 0x1F202) ||
	      (0x1F210 <= codePoint && codePoint <= 0x1F23A) ||
	      (0x1F240 <= codePoint && codePoint <= 0x1F248) ||
	      (0x1F250 <= codePoint && codePoint <= 0x1F251) ||
	      (0x20000 <= codePoint && codePoint <= 0x2F73F) ||
	      (0x2B740 <= codePoint && codePoint <= 0x2FFFD) ||
	      (0x30000 <= codePoint && codePoint <= 0x3FFFD)) {
	    return 'W';
	  }
	  if ((0x0020 <= codePoint && codePoint <= 0x007E) ||
	      (0x00A2 <= codePoint && codePoint <= 0x00A3) ||
	      (0x00A5 <= codePoint && codePoint <= 0x00A6) ||
	      (0x00AC == codePoint) ||
	      (0x00AF == codePoint) ||
	      (0x27E6 <= codePoint && codePoint <= 0x27ED) ||
	      (0x2985 <= codePoint && codePoint <= 0x2986)) {
	    return 'Na';
	  }
	  if ((0x00A1 == codePoint) ||
	      (0x00A4 == codePoint) ||
	      (0x00A7 <= codePoint && codePoint <= 0x00A8) ||
	      (0x00AA == codePoint) ||
	      (0x00AD <= codePoint && codePoint <= 0x00AE) ||
	      (0x00B0 <= codePoint && codePoint <= 0x00B4) ||
	      (0x00B6 <= codePoint && codePoint <= 0x00BA) ||
	      (0x00BC <= codePoint && codePoint <= 0x00BF) ||
	      (0x00C6 == codePoint) ||
	      (0x00D0 == codePoint) ||
	      (0x00D7 <= codePoint && codePoint <= 0x00D8) ||
	      (0x00DE <= codePoint && codePoint <= 0x00E1) ||
	      (0x00E6 == codePoint) ||
	      (0x00E8 <= codePoint && codePoint <= 0x00EA) ||
	      (0x00EC <= codePoint && codePoint <= 0x00ED) ||
	      (0x00F0 == codePoint) ||
	      (0x00F2 <= codePoint && codePoint <= 0x00F3) ||
	      (0x00F7 <= codePoint && codePoint <= 0x00FA) ||
	      (0x00FC == codePoint) ||
	      (0x00FE == codePoint) ||
	      (0x0101 == codePoint) ||
	      (0x0111 == codePoint) ||
	      (0x0113 == codePoint) ||
	      (0x011B == codePoint) ||
	      (0x0126 <= codePoint && codePoint <= 0x0127) ||
	      (0x012B == codePoint) ||
	      (0x0131 <= codePoint && codePoint <= 0x0133) ||
	      (0x0138 == codePoint) ||
	      (0x013F <= codePoint && codePoint <= 0x0142) ||
	      (0x0144 == codePoint) ||
	      (0x0148 <= codePoint && codePoint <= 0x014B) ||
	      (0x014D == codePoint) ||
	      (0x0152 <= codePoint && codePoint <= 0x0153) ||
	      (0x0166 <= codePoint && codePoint <= 0x0167) ||
	      (0x016B == codePoint) ||
	      (0x01CE == codePoint) ||
	      (0x01D0 == codePoint) ||
	      (0x01D2 == codePoint) ||
	      (0x01D4 == codePoint) ||
	      (0x01D6 == codePoint) ||
	      (0x01D8 == codePoint) ||
	      (0x01DA == codePoint) ||
	      (0x01DC == codePoint) ||
	      (0x0251 == codePoint) ||
	      (0x0261 == codePoint) ||
	      (0x02C4 == codePoint) ||
	      (0x02C7 == codePoint) ||
	      (0x02C9 <= codePoint && codePoint <= 0x02CB) ||
	      (0x02CD == codePoint) ||
	      (0x02D0 == codePoint) ||
	      (0x02D8 <= codePoint && codePoint <= 0x02DB) ||
	      (0x02DD == codePoint) ||
	      (0x02DF == codePoint) ||
	      (0x0300 <= codePoint && codePoint <= 0x036F) ||
	      (0x0391 <= codePoint && codePoint <= 0x03A1) ||
	      (0x03A3 <= codePoint && codePoint <= 0x03A9) ||
	      (0x03B1 <= codePoint && codePoint <= 0x03C1) ||
	      (0x03C3 <= codePoint && codePoint <= 0x03C9) ||
	      (0x0401 == codePoint) ||
	      (0x0410 <= codePoint && codePoint <= 0x044F) ||
	      (0x0451 == codePoint) ||
	      (0x2010 == codePoint) ||
	      (0x2013 <= codePoint && codePoint <= 0x2016) ||
	      (0x2018 <= codePoint && codePoint <= 0x2019) ||
	      (0x201C <= codePoint && codePoint <= 0x201D) ||
	      (0x2020 <= codePoint && codePoint <= 0x2022) ||
	      (0x2024 <= codePoint && codePoint <= 0x2027) ||
	      (0x2030 == codePoint) ||
	      (0x2032 <= codePoint && codePoint <= 0x2033) ||
	      (0x2035 == codePoint) ||
	      (0x203B == codePoint) ||
	      (0x203E == codePoint) ||
	      (0x2074 == codePoint) ||
	      (0x207F == codePoint) ||
	      (0x2081 <= codePoint && codePoint <= 0x2084) ||
	      (0x20AC == codePoint) ||
	      (0x2103 == codePoint) ||
	      (0x2105 == codePoint) ||
	      (0x2109 == codePoint) ||
	      (0x2113 == codePoint) ||
	      (0x2116 == codePoint) ||
	      (0x2121 <= codePoint && codePoint <= 0x2122) ||
	      (0x2126 == codePoint) ||
	      (0x212B == codePoint) ||
	      (0x2153 <= codePoint && codePoint <= 0x2154) ||
	      (0x215B <= codePoint && codePoint <= 0x215E) ||
	      (0x2160 <= codePoint && codePoint <= 0x216B) ||
	      (0x2170 <= codePoint && codePoint <= 0x2179) ||
	      (0x2189 == codePoint) ||
	      (0x2190 <= codePoint && codePoint <= 0x2199) ||
	      (0x21B8 <= codePoint && codePoint <= 0x21B9) ||
	      (0x21D2 == codePoint) ||
	      (0x21D4 == codePoint) ||
	      (0x21E7 == codePoint) ||
	      (0x2200 == codePoint) ||
	      (0x2202 <= codePoint && codePoint <= 0x2203) ||
	      (0x2207 <= codePoint && codePoint <= 0x2208) ||
	      (0x220B == codePoint) ||
	      (0x220F == codePoint) ||
	      (0x2211 == codePoint) ||
	      (0x2215 == codePoint) ||
	      (0x221A == codePoint) ||
	      (0x221D <= codePoint && codePoint <= 0x2220) ||
	      (0x2223 == codePoint) ||
	      (0x2225 == codePoint) ||
	      (0x2227 <= codePoint && codePoint <= 0x222C) ||
	      (0x222E == codePoint) ||
	      (0x2234 <= codePoint && codePoint <= 0x2237) ||
	      (0x223C <= codePoint && codePoint <= 0x223D) ||
	      (0x2248 == codePoint) ||
	      (0x224C == codePoint) ||
	      (0x2252 == codePoint) ||
	      (0x2260 <= codePoint && codePoint <= 0x2261) ||
	      (0x2264 <= codePoint && codePoint <= 0x2267) ||
	      (0x226A <= codePoint && codePoint <= 0x226B) ||
	      (0x226E <= codePoint && codePoint <= 0x226F) ||
	      (0x2282 <= codePoint && codePoint <= 0x2283) ||
	      (0x2286 <= codePoint && codePoint <= 0x2287) ||
	      (0x2295 == codePoint) ||
	      (0x2299 == codePoint) ||
	      (0x22A5 == codePoint) ||
	      (0x22BF == codePoint) ||
	      (0x2312 == codePoint) ||
	      (0x2460 <= codePoint && codePoint <= 0x24E9) ||
	      (0x24EB <= codePoint && codePoint <= 0x254B) ||
	      (0x2550 <= codePoint && codePoint <= 0x2573) ||
	      (0x2580 <= codePoint && codePoint <= 0x258F) ||
	      (0x2592 <= codePoint && codePoint <= 0x2595) ||
	      (0x25A0 <= codePoint && codePoint <= 0x25A1) ||
	      (0x25A3 <= codePoint && codePoint <= 0x25A9) ||
	      (0x25B2 <= codePoint && codePoint <= 0x25B3) ||
	      (0x25B6 <= codePoint && codePoint <= 0x25B7) ||
	      (0x25BC <= codePoint && codePoint <= 0x25BD) ||
	      (0x25C0 <= codePoint && codePoint <= 0x25C1) ||
	      (0x25C6 <= codePoint && codePoint <= 0x25C8) ||
	      (0x25CB == codePoint) ||
	      (0x25CE <= codePoint && codePoint <= 0x25D1) ||
	      (0x25E2 <= codePoint && codePoint <= 0x25E5) ||
	      (0x25EF == codePoint) ||
	      (0x2605 <= codePoint && codePoint <= 0x2606) ||
	      (0x2609 == codePoint) ||
	      (0x260E <= codePoint && codePoint <= 0x260F) ||
	      (0x2614 <= codePoint && codePoint <= 0x2615) ||
	      (0x261C == codePoint) ||
	      (0x261E == codePoint) ||
	      (0x2640 == codePoint) ||
	      (0x2642 == codePoint) ||
	      (0x2660 <= codePoint && codePoint <= 0x2661) ||
	      (0x2663 <= codePoint && codePoint <= 0x2665) ||
	      (0x2667 <= codePoint && codePoint <= 0x266A) ||
	      (0x266C <= codePoint && codePoint <= 0x266D) ||
	      (0x266F == codePoint) ||
	      (0x269E <= codePoint && codePoint <= 0x269F) ||
	      (0x26BE <= codePoint && codePoint <= 0x26BF) ||
	      (0x26C4 <= codePoint && codePoint <= 0x26CD) ||
	      (0x26CF <= codePoint && codePoint <= 0x26E1) ||
	      (0x26E3 == codePoint) ||
	      (0x26E8 <= codePoint && codePoint <= 0x26FF) ||
	      (0x273D == codePoint) ||
	      (0x2757 == codePoint) ||
	      (0x2776 <= codePoint && codePoint <= 0x277F) ||
	      (0x2B55 <= codePoint && codePoint <= 0x2B59) ||
	      (0x3248 <= codePoint && codePoint <= 0x324F) ||
	      (0xE000 <= codePoint && codePoint <= 0xF8FF) ||
	      (0xFE00 <= codePoint && codePoint <= 0xFE0F) ||
	      (0xFFFD == codePoint) ||
	      (0x1F100 <= codePoint && codePoint <= 0x1F10A) ||
	      (0x1F110 <= codePoint && codePoint <= 0x1F12D) ||
	      (0x1F130 <= codePoint && codePoint <= 0x1F169) ||
	      (0x1F170 <= codePoint && codePoint <= 0x1F19A) ||
	      (0xE0100 <= codePoint && codePoint <= 0xE01EF) ||
	      (0xF0000 <= codePoint && codePoint <= 0xFFFFD) ||
	      (0x100000 <= codePoint && codePoint <= 0x10FFFD)) {
	    return 'A';
	  }

	  return 'N';
	};

	eaw.characterLength = function(character) {
	  var code = this.eastAsianWidth(character);
	  if (code == 'F' || code == 'W' || code == 'A') {
	    return 2;
	  } else {
	    return 1;
	  }
	};

	// Split a string considering surrogate-pairs.
	function stringToArray(string) {
	  return string.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
	}

	eaw.length = function(string) {
	  var characters = stringToArray(string);
	  var len = 0;
	  for (var i = 0; i < characters.length; i++) {
	    len = len + this.characterLength(characters[i]);
	  }
	  return len;
	};

	eaw.slice = function(text, start, end) {
	  textLen = eaw.length(text);
	  start = start ? start : 0;
	  end = end ? end : 1;
	  if (start < 0) {
	      start = textLen + start;
	  }
	  if (end < 0) {
	      end = textLen + end;
	  }
	  var result = '';
	  var eawLen = 0;
	  var chars = stringToArray(text);
	  for (var i = 0; i < chars.length; i++) {
	    var char = chars[i];
	    var charLen = eaw.length(char);
	    if (eawLen >= start - (charLen == 2 ? 1 : 0)) {
	        if (eawLen + charLen <= end) {
	            result += char;
	        } else {
	            break;
	        }
	    }
	    eawLen += charLen;
	  }
	  return result;
	}; 
} (eastasianwidth));

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, type, message) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    type,
    level,
    message
  };
  if (levels[logLevel] > levels[level]) {
    return;
  }
  dest.write(event);
}
function warn(opts, type, message) {
  return log(opts, "warn", type, message);
}
function error(opts, type, message) {
  return log(opts, "error", type, message);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

let lastMessage;
let lastMessageCount = 1;
const consoleLogDestination = {
  write(event) {
    let dest = console.error;
    if (levels[event.level] < levels["error"]) {
      dest = console.log;
    }
    function getPrefix() {
      let prefix = "";
      let type = event.type;
      if (type) {
        prefix += dim(dateTimeFormat.format(/* @__PURE__ */ new Date()) + " ");
        if (event.level === "info") {
          type = bold(cyan(`[${type}]`));
        } else if (event.level === "warn") {
          type = bold(yellow(`[${type}]`));
        } else if (event.level === "error") {
          type = bold(red(`[${type}]`));
        }
        prefix += `${type} `;
      }
      return reset(prefix);
    }
    let message = event.message;
    if (message === lastMessage) {
      lastMessageCount++;
      message = `${message} ${yellow(`(x${lastMessageCount})`)}`;
    } else {
      lastMessage = message;
      lastMessageCount = 1;
    }
    const outMessage = getPrefix() + message;
    dest(outMessage);
    return true;
  }
};

function prependForwardSlash(path) {
  return path[0] === "/" ? path : "/" + path;
}
function collapseDuplicateSlashes(path) {
  return path.replace(/(?<!:)\/\/+/g, "/");
}
function removeTrailingForwardSlash(path) {
  return path.endsWith("/") ? path.slice(0, path.length - 1) : path;
}
function removeLeadingForwardSlash(path) {
  return path.startsWith("/") ? path.substring(1) : path;
}
function trimSlashes(path) {
  return path.replace(/^\/|\/$/g, "");
}
function isString(path) {
  return typeof path === "string" || path instanceof String;
}
function joinPaths(...paths) {
  return paths.filter(isString).map((path, i) => {
    if (i === 0) {
      return removeTrailingForwardSlash(path);
    } else if (i === paths.length - 1) {
      return removeLeadingForwardSlash(path);
    } else {
      return trimSlashes(path);
    }
  }).join("/");
}
function slash(path) {
  return path.replace(/\\/g, "/");
}

const RedirectComponentInstance = {
  default() {
    return new Response(null, {
      status: 301
    });
  }
};
const RedirectSinglePageBuiltModule = {
  page: () => Promise.resolve(RedirectComponentInstance),
  onRequest: (ctx, next) => next(),
  renderers: []
};

function routeIsRedirect(route) {
  return (route == null ? void 0 : route.type) === "redirect";
}
function redirectRouteGenerate(redirectRoute, data) {
  const routeData = redirectRoute.redirectRoute;
  const route = redirectRoute.redirect;
  if (typeof routeData !== "undefined") {
    return (routeData == null ? void 0 : routeData.generate(data)) || (routeData == null ? void 0 : routeData.pathname) || "/";
  } else if (typeof route === "string") {
    return route;
  } else if (typeof route === "undefined") {
    return "/";
  }
  return route.destination;
}
function redirectRouteStatus(redirectRoute, method = "GET") {
  const routeData = redirectRoute.redirectRoute;
  if (typeof (routeData == null ? void 0 : routeData.redirect) === "object") {
    return routeData.redirect.status;
  } else if (method !== "GET") {
    return 308;
  }
  return 301;
}

async function callMiddleware(logging, onRequest, apiContext, responseFunction) {
  let nextCalled = false;
  let responseFunctionPromise = void 0;
  const next = async () => {
    nextCalled = true;
    responseFunctionPromise = responseFunction();
    return responseFunctionPromise;
  };
  let middlewarePromise = onRequest(apiContext, next);
  return await Promise.resolve(middlewarePromise).then(async (value) => {
    if (isEndpointOutput(value)) {
      warn(
        logging,
        "middleware",
        `Using simple endpoints can cause unexpected issues in the chain of middleware functions.
It's strongly suggested to use full ${bold("Response")} objects.`
      );
    }
    if (nextCalled) {
      if (typeof value !== "undefined") {
        if (value instanceof Response === false) {
          throw new AstroError(MiddlewareNotAResponse);
        }
        return value;
      } else {
        if (responseFunctionPromise) {
          return responseFunctionPromise;
        } else {
          throw new AstroError(MiddlewareNotAResponse);
        }
      }
    } else if (typeof value === "undefined") {
      throw new AstroError(MiddlewareNoDataOrNextCalled);
    } else if (value instanceof Response === false) {
      throw new AstroError(MiddlewareNotAResponse);
    } else {
      return value;
    }
  });
}
function isEndpointOutput(endpointResult) {
  return !(endpointResult instanceof Response) && typeof endpointResult === "object" && typeof endpointResult.body === "string";
}

const clientAddressSymbol$1 = Symbol.for("astro.clientAddress");
const clientLocalsSymbol$2 = Symbol.for("astro.locals");
function createAPIContext({
  request,
  params,
  site,
  props,
  adapterName
}) {
  const context = {
    cookies: new AstroCookies(request),
    request,
    params,
    site: site ? new URL(site) : void 0,
    generator: `Astro v${ASTRO_VERSION}`,
    props,
    redirect(path, status) {
      return new Response(null, {
        status: status || 302,
        headers: {
          Location: path
        }
      });
    },
    url: new URL(request.url),
    get clientAddress() {
      if (!(clientAddressSymbol$1 in request)) {
        if (adapterName) {
          throw new AstroError({
            ...ClientAddressNotAvailable,
            message: ClientAddressNotAvailable.message(adapterName)
          });
        } else {
          throw new AstroError(StaticClientAddressNotAvailable);
        }
      }
      return Reflect.get(request, clientAddressSymbol$1);
    }
  };
  Object.defineProperty(context, "locals", {
    enumerable: true,
    get() {
      return Reflect.get(request, clientLocalsSymbol$2);
    },
    set(val) {
      if (typeof val !== "object") {
        throw new AstroError(LocalsNotAnObject);
      } else {
        Reflect.set(request, clientLocalsSymbol$2, val);
      }
    }
  });
  return context;
}
async function callEndpoint(mod, env, ctx, onRequest) {
  var _a;
  const context = createAPIContext({
    request: ctx.request,
    params: ctx.params,
    props: ctx.props,
    site: env.site,
    adapterName: env.adapterName
  });
  let response;
  if (onRequest) {
    response = await callMiddleware(
      env.logging,
      onRequest,
      context,
      async () => {
        return await renderEndpoint(mod, context, env.ssr);
      }
    );
  } else {
    response = await renderEndpoint(mod, context, env.ssr);
  }
  if (response instanceof Response) {
    attachToResponse(response, context.cookies);
    return {
      type: "response",
      response
    };
  }
  if (env.ssr && !((_a = ctx.route) == null ? void 0 : _a.prerender)) {
    if (response.hasOwnProperty("headers")) {
      warn(
        env.logging,
        "ssr",
        "Setting headers is not supported when returning an object. Please return an instance of Response. See https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes for more information."
      );
    }
    if (response.encoding) {
      warn(
        env.logging,
        "ssr",
        "`encoding` is ignored in SSR. To return a charset other than UTF-8, please return an instance of Response. See https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes for more information."
      );
    }
  }
  return {
    ...response,
    type: "simple",
    cookies: context.cookies
  };
}

const clientAddressSymbol = Symbol.for("astro.clientAddress");
const responseSentSymbol$1 = Symbol.for("astro.responseSent");
function getFunctionExpression(slot) {
  var _a;
  if (!slot)
    return;
  if (((_a = slot.expressions) == null ? void 0 : _a.length) !== 1)
    return;
  return slot.expressions[0];
}
class Slots {
  #result;
  #slots;
  #loggingOpts;
  constructor(result, slots, logging) {
    this.#result = result;
    this.#slots = slots;
    this.#loggingOpts = logging;
    if (slots) {
      for (const key of Object.keys(slots)) {
        if (this[key] !== void 0) {
          throw new AstroError({
            ...ReservedSlotName,
            message: ReservedSlotName.message(key)
          });
        }
        Object.defineProperty(this, key, {
          get() {
            return true;
          },
          enumerable: true
        });
      }
    }
  }
  has(name) {
    if (!this.#slots)
      return false;
    return Boolean(this.#slots[name]);
  }
  async render(name, args = []) {
    if (!this.#slots || !this.has(name))
      return;
    const result = this.#result;
    if (!Array.isArray(args)) {
      warn(
        this.#loggingOpts,
        "Astro.slots.render",
        `Expected second parameter to be an array, received a ${typeof args}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as a item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`
      );
    } else if (args.length > 0) {
      const slotValue = this.#slots[name];
      const component = typeof slotValue === "function" ? await slotValue(result) : await slotValue;
      const expression = getFunctionExpression(component);
      if (expression) {
        const slot = async () => typeof expression === "function" ? expression(...args) : expression;
        return await renderSlotToString(result, slot).then((res) => {
          return res != null ? String(res) : res;
        });
      }
      if (typeof component === "function") {
        return await renderJSX(result, component(...args)).then(
          (res) => res != null ? String(res) : res
        );
      }
    }
    const content = await renderSlotToString(result, this.#slots[name]);
    const outHTML = chunkToString(result, content);
    return outHTML;
  }
}
let renderMarkdown = null;
function createResult(args) {
  const { markdown, params, request, resolve, locals } = args;
  const url = new URL(request.url);
  const headers = new Headers();
  headers.set("Content-Type", "text/html");
  const response = {
    status: args.status,
    statusText: "OK",
    headers
  };
  Object.defineProperty(response, "headers", {
    value: response.headers,
    enumerable: true,
    writable: false
  });
  let cookies = args.cookies;
  const result = {
    styles: args.styles ?? /* @__PURE__ */ new Set(),
    scripts: args.scripts ?? /* @__PURE__ */ new Set(),
    links: args.links ?? /* @__PURE__ */ new Set(),
    componentMetadata: args.componentMetadata ?? /* @__PURE__ */ new Map(),
    renderers: args.renderers,
    clientDirectives: args.clientDirectives,
    compressHTML: args.compressHTML,
    pathname: args.pathname,
    cookies,
    /** This function returns the `Astro` faux-global */
    createAstro(astroGlobal, props, slots) {
      const astroSlots = new Slots(result, slots, args.logging);
      const Astro = {
        // @ts-expect-error
        __proto__: astroGlobal,
        get clientAddress() {
          if (!(clientAddressSymbol in request)) {
            if (args.adapterName) {
              throw new AstroError({
                ...ClientAddressNotAvailable,
                message: ClientAddressNotAvailable.message(args.adapterName)
              });
            } else {
              throw new AstroError(StaticClientAddressNotAvailable);
            }
          }
          return Reflect.get(request, clientAddressSymbol);
        },
        get cookies() {
          if (cookies) {
            return cookies;
          }
          cookies = new AstroCookies(request);
          result.cookies = cookies;
          return cookies;
        },
        params,
        props,
        locals,
        request,
        url,
        redirect(path, status) {
          if (request[responseSentSymbol$1]) {
            throw new AstroError({
              ...ResponseSentError
            });
          }
          return new Response(null, {
            status: status || 302,
            headers: {
              Location: path
            }
          });
        },
        response,
        slots: astroSlots
      };
      Object.defineProperty(Astro, "__renderMarkdown", {
        // Ensure this API is not exposed to users
        enumerable: false,
        writable: false,
        // TODO: Remove this hole "Deno" logic once our plugin gets Deno support
        value: async function(content, opts) {
          if (typeof Deno !== "undefined") {
            throw new Error("Markdown is not supported in Deno SSR");
          }
          if (!renderMarkdown) {
            let astroRemark = "@astrojs/";
            astroRemark += "markdown-remark";
            renderMarkdown = (await import(astroRemark)).renderMarkdown;
          }
          const { code } = await renderMarkdown(content, { ...markdown, ...opts ?? {} });
          return code;
        }
      });
      return Astro;
    },
    resolve,
    response,
    _metadata: {
      hasHydrationScript: false,
      hasRenderedHead: false,
      hasDirectives: /* @__PURE__ */ new Set(),
      headInTree: false,
      extraHead: [],
      propagators: /* @__PURE__ */ new Map()
    }
  };
  return result;
}

async function renderPage({ mod, renderContext, env, cookies }) {
  if (routeIsRedirect(renderContext.route)) {
    return new Response(null, {
      status: redirectRouteStatus(renderContext.route, renderContext.request.method),
      headers: {
        location: redirectRouteGenerate(renderContext.route, renderContext.params)
      }
    });
  }
  const Component = mod.default;
  if (!Component)
    throw new Error(`Expected an exported Astro component but received typeof ${typeof Component}`);
  const result = createResult({
    adapterName: env.adapterName,
    links: renderContext.links,
    styles: renderContext.styles,
    logging: env.logging,
    markdown: env.markdown,
    params: renderContext.params,
    pathname: renderContext.pathname,
    componentMetadata: renderContext.componentMetadata,
    resolve: env.resolve,
    renderers: env.renderers,
    clientDirectives: env.clientDirectives,
    compressHTML: env.compressHTML,
    request: renderContext.request,
    site: env.site,
    scripts: renderContext.scripts,
    ssr: env.ssr,
    status: renderContext.status ?? 200,
    cookies,
    locals: renderContext.locals ?? {}
  });
  if (typeof mod.components === "object") {
    Object.assign(renderContext.props, { components: mod.components });
  }
  let response = await renderPage$1(
    result,
    Component,
    renderContext.props,
    null,
    env.streaming,
    renderContext.route
  );
  if (result.cookies) {
    attachToResponse(response, result.cookies);
  }
  return response;
}
async function tryRenderRoute(routeType, renderContext, env, mod, onRequest) {
  const apiContext = createAPIContext({
    request: renderContext.request,
    params: renderContext.params,
    props: renderContext.props,
    site: env.site,
    adapterName: env.adapterName
  });
  switch (routeType) {
    case "page":
    case "redirect": {
      if (onRequest) {
        return await callMiddleware(
          env.logging,
          onRequest,
          apiContext,
          () => {
            return renderPage({
              mod,
              renderContext,
              env,
              cookies: apiContext.cookies
            });
          }
        );
      } else {
        return await renderPage({
          mod,
          renderContext,
          env,
          cookies: apiContext.cookies
        });
      }
    }
    case "endpoint": {
      const result = await callEndpoint(
        mod,
        env,
        renderContext,
        onRequest
      );
      return result;
    }
    default:
      throw new Error(`Couldn't find route of type [${routeType}]`);
  }
}
function isResponse(result, routeType) {
  return result instanceof Response && (routeType === "page" || routeType === "redirect");
}

const VALID_PARAM_TYPES = ["string", "number", "undefined"];
function validateGetStaticPathsParameter([key, value], route) {
  if (!VALID_PARAM_TYPES.includes(typeof value)) {
    throw new AstroError({
      ...GetStaticPathsInvalidRouteParam,
      message: GetStaticPathsInvalidRouteParam.message(key, value, typeof value),
      location: {
        file: route
      }
    });
  }
}
function validateDynamicRouteModule(mod, {
  ssr,
  route
}) {
  if ((!ssr || route.prerender) && !mod.getStaticPaths) {
    throw new AstroError({
      ...GetStaticPathsRequired,
      location: { file: route.component }
    });
  }
}
function validateGetStaticPathsResult(result, logging, route) {
  if (!Array.isArray(result)) {
    throw new AstroError({
      ...InvalidGetStaticPathsReturn,
      message: InvalidGetStaticPathsReturn.message(typeof result),
      location: {
        file: route.component
      }
    });
  }
  result.forEach((pathObject) => {
    if (pathObject.params === void 0 || pathObject.params === null || pathObject.params && Object.keys(pathObject.params).length === 0) {
      throw new AstroError({
        ...GetStaticPathsExpectedParams,
        location: {
          file: route.component
        }
      });
    }
    if (typeof pathObject.params !== "object") {
      throw new AstroError({
        ...InvalidGetStaticPathParam,
        message: InvalidGetStaticPathParam.message(typeof pathObject.params),
        location: {
          file: route.component
        }
      });
    }
    for (const [key, val] of Object.entries(pathObject.params)) {
      if (!(typeof val === "undefined" || typeof val === "string" || typeof val === "number")) {
        warn(
          logging,
          "getStaticPaths",
          `invalid path param: ${key}. A string, number or undefined value was expected, but got \`${JSON.stringify(
            val
          )}\`.`
        );
      }
      if (typeof val === "string" && val === "") {
        warn(
          logging,
          "getStaticPaths",
          `invalid path param: ${key}. \`undefined\` expected for an optional param, but got empty string.`
        );
      }
    }
  });
}

function getParams(array) {
  const fn = (match) => {
    const params = {};
    array.forEach((key, i) => {
      if (key.startsWith("...")) {
        params[key.slice(3)] = match[i + 1] ? decodeURIComponent(match[i + 1]) : void 0;
      } else {
        params[key] = decodeURIComponent(match[i + 1]);
      }
    });
    return params;
  };
  return fn;
}
function stringifyParams(params, route) {
  const validatedParams = Object.entries(params).reduce((acc, next) => {
    validateGetStaticPathsParameter(next, route.component);
    const [key, value] = next;
    acc[key] = value == null ? void 0 : value.toString();
    return acc;
  }, {});
  return JSON.stringify(route.generate(validatedParams));
}

function generatePaginateFunction(routeMatch) {
  return function paginateUtility(data, args = {}) {
    let { pageSize: _pageSize, params: _params, props: _props } = args;
    const pageSize = _pageSize || 10;
    const paramName = "page";
    const additionalParams = _params || {};
    const additionalProps = _props || {};
    let includesFirstPageNumber;
    if (routeMatch.params.includes(`...${paramName}`)) {
      includesFirstPageNumber = false;
    } else if (routeMatch.params.includes(`${paramName}`)) {
      includesFirstPageNumber = true;
    } else {
      throw new AstroError({
        ...PageNumberParamNotFound,
        message: PageNumberParamNotFound.message(paramName)
      });
    }
    const lastPage = Math.max(1, Math.ceil(data.length / pageSize));
    const result = [...Array(lastPage).keys()].map((num) => {
      const pageNum = num + 1;
      const start = pageSize === Infinity ? 0 : (pageNum - 1) * pageSize;
      const end = Math.min(start + pageSize, data.length);
      const params = {
        ...additionalParams,
        [paramName]: includesFirstPageNumber || pageNum > 1 ? String(pageNum) : void 0
      };
      const current = correctIndexRoute(routeMatch.generate({ ...params }));
      const next = pageNum === lastPage ? void 0 : correctIndexRoute(routeMatch.generate({ ...params, page: String(pageNum + 1) }));
      const prev = pageNum === 1 ? void 0 : correctIndexRoute(
        routeMatch.generate({
          ...params,
          page: !includesFirstPageNumber && pageNum - 1 === 1 ? void 0 : String(pageNum - 1)
        })
      );
      return {
        params,
        props: {
          ...additionalProps,
          page: {
            data: data.slice(start, end),
            start,
            end: end - 1,
            size: pageSize,
            total: data.length,
            currentPage: pageNum,
            lastPage,
            url: { current, next, prev }
          }
        }
      };
    });
    return result;
  };
}
function correctIndexRoute(route) {
  if (route === "") {
    return "/";
  }
  return route;
}

async function callGetStaticPaths({
  mod,
  route,
  routeCache,
  isValidate,
  logging,
  ssr
}) {
  const cached = routeCache.get(route);
  if (cached == null ? void 0 : cached.staticPaths)
    return cached.staticPaths;
  validateDynamicRouteModule(mod, { ssr, route });
  if (ssr && !route.prerender) {
    const entry = Object.assign([], { keyed: /* @__PURE__ */ new Map() });
    routeCache.set(route, { ...cached, staticPaths: entry });
    return entry;
  }
  if (!mod.getStaticPaths) {
    throw new Error("Unexpected Error.");
  }
  let staticPaths = [];
  staticPaths = await mod.getStaticPaths({
    paginate: generatePaginateFunction(route),
    rss() {
      throw new AstroError(GetStaticPathsRemovedRSSHelper);
    }
  });
  if (Array.isArray(staticPaths)) {
    staticPaths = staticPaths.flat();
  }
  if (isValidate) {
    validateGetStaticPathsResult(staticPaths, logging, route);
  }
  const keyedStaticPaths = staticPaths;
  keyedStaticPaths.keyed = /* @__PURE__ */ new Map();
  for (const sp of keyedStaticPaths) {
    const paramsKey = stringifyParams(sp.params, route);
    keyedStaticPaths.keyed.set(paramsKey, sp);
  }
  routeCache.set(route, { ...cached, staticPaths: keyedStaticPaths });
  return keyedStaticPaths;
}
class RouteCache {
  constructor(logging, mode = "production") {
    this.cache = {};
    this.logging = logging;
    this.mode = mode;
  }
  /** Clear the cache. */
  clearAll() {
    this.cache = {};
  }
  set(route, entry) {
    var _a;
    if (this.mode === "production" && ((_a = this.cache[route.component]) == null ? void 0 : _a.staticPaths)) {
      warn(
        this.logging,
        "routeCache",
        `Internal Warning: route cache overwritten. (${route.component})`
      );
    }
    this.cache[route.component] = entry;
  }
  get(route) {
    return this.cache[route.component];
  }
}
function findPathItemByKey(staticPaths, params, route) {
  const paramsKey = stringifyParams(params, route);
  const matchedStaticPath = staticPaths.keyed.get(paramsKey);
  if (matchedStaticPath) {
    return matchedStaticPath;
  }
  debug("findPathItemByKey", `Unexpected cache miss looking for ${paramsKey}`);
}

async function getParamsAndProps(opts) {
  const { logging, mod, route, routeCache, pathname, ssr } = opts;
  if (!route || route.pathname) {
    return [{}, {}];
  }
  const params = getRouteParams(route, pathname) ?? {};
  validatePrerenderEndpointCollision(route, mod, params);
  const staticPaths = await callGetStaticPaths({
    mod,
    route,
    routeCache,
    isValidate: true,
    logging,
    ssr
  });
  const matchedStaticPath = findPathItemByKey(staticPaths, params, route);
  if (!matchedStaticPath && (ssr ? route.prerender : true)) {
    throw new AstroError({
      ...NoMatchingStaticPathFound,
      message: NoMatchingStaticPathFound.message(pathname),
      hint: NoMatchingStaticPathFound.hint([route.component])
    });
  }
  const props = (matchedStaticPath == null ? void 0 : matchedStaticPath.props) ? { ...matchedStaticPath.props } : {};
  return [params, props];
}
function getRouteParams(route, pathname) {
  if (route.params.length) {
    const paramsMatch = route.pattern.exec(decodeURIComponent(pathname));
    if (paramsMatch) {
      return getParams(route.params)(paramsMatch);
    }
  }
}
function validatePrerenderEndpointCollision(route, mod, params) {
  if (route.type === "endpoint" && mod.getStaticPaths) {
    const lastSegment = route.segments[route.segments.length - 1];
    const paramValues = Object.values(params);
    const lastParam = paramValues[paramValues.length - 1];
    if (lastSegment.length === 1 && lastSegment[0].dynamic && lastParam === void 0) {
      throw new AstroError({
        ...PrerenderDynamicEndpointPathCollide,
        message: PrerenderDynamicEndpointPathCollide.message(route.route),
        hint: PrerenderDynamicEndpointPathCollide.hint(route.component),
        location: {
          file: route.component
        }
      });
    }
  }
}

const clientLocalsSymbol$1 = Symbol.for("astro.locals");
async function createRenderContext(options) {
  const request = options.request;
  const pathname = options.pathname ?? new URL(request.url).pathname;
  const [params, props] = await getParamsAndProps({
    mod: options.mod,
    route: options.route,
    routeCache: options.env.routeCache,
    pathname,
    logging: options.env.logging,
    ssr: options.env.ssr
  });
  const context = {
    ...options,
    pathname,
    params,
    props
  };
  Object.defineProperty(context, "locals", {
    enumerable: true,
    get() {
      return Reflect.get(request, clientLocalsSymbol$1);
    },
    set(val) {
      if (typeof val !== "object") {
        throw new AstroError(LocalsNotAnObject);
      } else {
        Reflect.set(request, clientLocalsSymbol$1, val);
      }
    }
  });
  return context;
}

function createEnvironment(options) {
  return options;
}

function createAssetLink(href, base, assetsPrefix) {
  if (assetsPrefix) {
    return joinPaths(assetsPrefix, slash(href));
  } else if (base) {
    return prependForwardSlash(joinPaths(base, slash(href)));
  } else {
    return href;
  }
}
function createStylesheetElement(stylesheet, base, assetsPrefix) {
  if (stylesheet.type === "inline") {
    return {
      props: {
        type: "text/css"
      },
      children: stylesheet.content
    };
  } else {
    return {
      props: {
        rel: "stylesheet",
        href: createAssetLink(stylesheet.src, base, assetsPrefix)
      },
      children: ""
    };
  }
}
function createStylesheetElementSet(stylesheets, base, assetsPrefix) {
  return new Set(stylesheets.map((s) => createStylesheetElement(s, base, assetsPrefix)));
}
function createModuleScriptElement(script, base, assetsPrefix) {
  if (script.type === "external") {
    return createModuleScriptElementWithSrc(script.value, base, assetsPrefix);
  } else {
    return {
      props: {
        type: "module"
      },
      children: script.value
    };
  }
}
function createModuleScriptElementWithSrc(src, base, assetsPrefix) {
  return {
    props: {
      type: "module",
      src: createAssetLink(src, base, assetsPrefix)
    },
    children: ""
  };
}

function matchRoute(pathname, manifest) {
  return manifest.routes.find((route) => route.pattern.test(decodeURI(pathname)));
}

/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const clientLocalsSymbol = Symbol.for("astro.locals");
const responseSentSymbol = Symbol.for("astro.responseSent");
const STATUS_CODES = /* @__PURE__ */ new Set([404, 500]);
class App {
  /**
   * The current environment of the application
   */
  #env;
  #manifest;
  #manifestData;
  #routeDataToRouteInfo;
  #encoder = new TextEncoder();
  #logging = {
    dest: consoleLogDestination,
    level: "info"
  };
  #baseWithoutTrailingSlash;
  constructor(manifest, streaming = true) {
    this.#manifest = manifest;
    this.#manifestData = {
      routes: manifest.routes.map((route) => route.routeData)
    };
    this.#routeDataToRouteInfo = new Map(manifest.routes.map((route) => [route.routeData, route]));
    this.#baseWithoutTrailingSlash = removeTrailingForwardSlash(this.#manifest.base);
    this.#env = this.#createEnvironment(streaming);
  }
  set setManifest(newManifest) {
    this.#manifest = newManifest;
  }
  /**
   * Creates an environment by reading the stored manifest
   *
   * @param streaming
   * @private
   */
  #createEnvironment(streaming = false) {
    return createEnvironment({
      adapterName: this.#manifest.adapterName,
      logging: this.#logging,
      markdown: this.#manifest.markdown,
      mode: "production",
      compressHTML: this.#manifest.compressHTML,
      renderers: this.#manifest.renderers,
      clientDirectives: this.#manifest.clientDirectives,
      resolve: async (specifier) => {
        if (!(specifier in this.#manifest.entryModules)) {
          throw new Error(`Unable to resolve [${specifier}]`);
        }
        const bundlePath = this.#manifest.entryModules[specifier];
        switch (true) {
          case bundlePath.startsWith("data:"):
          case bundlePath.length === 0: {
            return bundlePath;
          }
          default: {
            return createAssetLink(bundlePath, this.#manifest.base, this.#manifest.assetsPrefix);
          }
        }
      },
      routeCache: new RouteCache(this.#logging),
      site: this.#manifest.site,
      ssr: true,
      streaming
    });
  }
  set setManifestData(newManifestData) {
    this.#manifestData = newManifestData;
  }
  removeBase(pathname) {
    if (pathname.startsWith(this.#manifest.base)) {
      return pathname.slice(this.#baseWithoutTrailingSlash.length + 1);
    }
    return pathname;
  }
  // Disable no-unused-vars to avoid breaking signature change
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  match(request, _opts = {}) {
    const url = new URL(request.url);
    if (this.#manifest.assets.has(url.pathname))
      return void 0;
    const pathname = prependForwardSlash(this.removeBase(url.pathname));
    const routeData = matchRoute(pathname, this.#manifestData);
    if (!routeData || routeData.prerender)
      return void 0;
    return routeData;
  }
  async render(request, routeData, locals) {
    if (request.url !== collapseDuplicateSlashes(request.url)) {
      request = new Request(collapseDuplicateSlashes(request.url), request);
    }
    if (!routeData) {
      routeData = this.match(request);
    }
    if (!routeData) {
      return this.#renderError(request, { status: 404 });
    }
    Reflect.set(request, clientLocalsSymbol, locals ?? {});
    const defaultStatus = this.#getDefaultStatusCode(routeData.route);
    const mod = await this.#getModuleForRoute(routeData);
    const pageModule = await mod.page();
    const url = new URL(request.url);
    const renderContext = await this.#createRenderContext(
      url,
      request,
      routeData,
      mod,
      defaultStatus
    );
    let response;
    try {
      response = await tryRenderRoute(
        routeData.type,
        renderContext,
        this.#env,
        pageModule,
        mod.onRequest
      );
    } catch (err) {
      error(this.#logging, "ssr", err.stack || err.message || String(err));
      return this.#renderError(request, { status: 500 });
    }
    if (isResponse(response, routeData.type)) {
      if (STATUS_CODES.has(response.status)) {
        return this.#renderError(request, {
          response,
          status: response.status
        });
      }
      Reflect.set(response, responseSentSymbol, true);
      return response;
    } else {
      if (response.type === "response") {
        if (response.response.headers.get("X-Astro-Response") === "Not-Found") {
          return this.#renderError(request, {
            response: response.response,
            status: 404
          });
        }
        return response.response;
      } else {
        const headers = new Headers();
        const mimeType = mime$1.getType(url.pathname);
        if (mimeType) {
          headers.set("Content-Type", `${mimeType};charset=utf-8`);
        } else {
          headers.set("Content-Type", "text/plain;charset=utf-8");
        }
        const bytes = response.encoding !== "binary" ? this.#encoder.encode(response.body) : response.body;
        headers.set("Content-Length", bytes.byteLength.toString());
        const newResponse = new Response(bytes, {
          status: 200,
          headers
        });
        attachToResponse(newResponse, response.cookies);
        return newResponse;
      }
    }
  }
  setCookieHeaders(response) {
    return getSetCookiesFromResponse(response);
  }
  /**
   * Creates the render context of the current route
   */
  async #createRenderContext(url, request, routeData, page, status = 200) {
    if (routeData.type === "endpoint") {
      const pathname = "/" + this.removeBase(url.pathname);
      const mod = await page.page();
      const handler = mod;
      return await createRenderContext({
        request,
        pathname,
        route: routeData,
        status,
        env: this.#env,
        mod: handler
      });
    } else {
      const pathname = prependForwardSlash(this.removeBase(url.pathname));
      const info = this.#routeDataToRouteInfo.get(routeData);
      const links = /* @__PURE__ */ new Set();
      const styles = createStylesheetElementSet(info.styles);
      let scripts = /* @__PURE__ */ new Set();
      for (const script of info.scripts) {
        if ("stage" in script) {
          if (script.stage === "head-inline") {
            scripts.add({
              props: {},
              children: script.children
            });
          }
        } else {
          scripts.add(createModuleScriptElement(script));
        }
      }
      const mod = await page.page();
      return await createRenderContext({
        request,
        pathname,
        componentMetadata: this.#manifest.componentMetadata,
        scripts,
        styles,
        links,
        route: routeData,
        status,
        mod,
        env: this.#env
      });
    }
  }
  /**
   * If it is a known error code, try sending the according page (e.g. 404.astro / 500.astro).
   * This also handles pre-rendered /404 or /500 routes
   */
  async #renderError(request, { status, response: originalResponse }) {
    const errorRouteData = matchRoute("/" + status, this.#manifestData);
    const url = new URL(request.url);
    if (errorRouteData) {
      if (errorRouteData.prerender) {
        const maybeDotHtml = errorRouteData.route.endsWith(`/${status}`) ? ".html" : "";
        const statusURL = new URL(
          `${this.#baseWithoutTrailingSlash}/${status}${maybeDotHtml}`,
          url
        );
        const response2 = await fetch(statusURL.toString());
        const override = { status };
        return this.#mergeResponses(response2, originalResponse, override);
      }
      const mod = await this.#getModuleForRoute(errorRouteData);
      try {
        const newRenderContext = await this.#createRenderContext(
          url,
          request,
          errorRouteData,
          mod,
          status
        );
        const page = await mod.page();
        const response2 = await tryRenderRoute(
          "page",
          // this is hardcoded to ensure proper behavior for missing endpoints
          newRenderContext,
          this.#env,
          page
        );
        return this.#mergeResponses(response2, originalResponse);
      } catch {
      }
    }
    const response = this.#mergeResponses(new Response(null, { status }), originalResponse);
    Reflect.set(response, responseSentSymbol, true);
    return response;
  }
  #mergeResponses(newResponse, oldResponse, override) {
    if (!oldResponse) {
      if (override !== void 0) {
        return new Response(newResponse.body, {
          status: override.status,
          statusText: newResponse.statusText,
          headers: newResponse.headers
        });
      }
      return newResponse;
    }
    const { statusText, headers } = oldResponse;
    const status = (override == null ? void 0 : override.status) ? override.status : oldResponse.status === 200 ? newResponse.status : oldResponse.status;
    return new Response(newResponse.body, {
      status,
      statusText: status === 200 ? newResponse.statusText : statusText,
      headers: new Headers(Array.from(headers))
    });
  }
  #getDefaultStatusCode(route) {
    route = removeTrailingForwardSlash(route);
    if (route.endsWith("/404"))
      return 404;
    if (route.endsWith("/500"))
      return 500;
    return 200;
  }
  async #getModuleForRoute(route) {
    if (route.type === "redirect") {
      return RedirectSinglePageBuiltModule;
    } else {
      if (this.#manifest.pageMap) {
        const importComponentInstance = this.#manifest.pageMap.get(route.component);
        if (!importComponentInstance) {
          throw new Error(
            `Unexpectedly unable to find a component instance for route ${route.route}`
          );
        }
        const pageModule = await importComponentInstance();
        return pageModule;
      } else if (this.#manifest.pageModule) {
        const importComponentInstance = this.#manifest.pageModule;
        return importComponentInstance;
      } else {
        throw new Error(
          "Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error, please file an issue."
        );
      }
    }
  }
}

export { App as A, __astro_tag_component__ as _, createComponent as a, addAttribute as b, createAstro as c, renderHead as d, renderComponent as e, renderSlot as f, deserializeManifest as g, maybeRenderHead as m, renderTemplate as r, server_default as s };
