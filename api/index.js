"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// server.js
var server_exports = {};
__export(server_exports, {
  default: () => server_default
});
module.exports = __toCommonJS(server_exports);

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/global.css
var global_default = "/build/_assets/global-2LCVJ2WT.css";

// app/root.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function links() {
  return [
    { rel: "stylesheet", href: global_default },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" }
  ];
}
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
        ]
      })
    ]
  });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action,
  default: () => Index
});
var import_node2 = require("@remix-run/node"), import_gsap3 = require("gsap"), import_ScrollTrigger = require("gsap/dist/ScrollTrigger"), import_react6 = require("react");

// app/components/Footer.tsx
var import_react3 = require("@remix-run/react"), import_jsx_runtime3 = require("react/jsx-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
    className: "footer",
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
      className: "contentFooter",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
          className: "textFooter",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", {
              children: "Vous \xEAtes int\xE9ress\xE9s ?"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", {
              children: "Inscrivez-vous \xE0 la newsletters"
            })
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
          children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react3.Form, {
            method: "post",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", {
                className: "inputemail",
                type: "text",
                name: "email",
                id: "email"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", {
                className: "submit",
                type: "submit",
                value: "s'inscrire"
              })
            ]
          })
        })
      ]
    })
  });
}

// app/components/Header.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Header() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", {
    className: "header",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
        className: "logoHeader"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", {
        href: "https://www.apple.com/fr/app-store/",
        target: "_blank",
        children: "T\xE9l\xE9charger l'application"
      })
    ]
  });
}

// app/components/Section1.tsx
var import_gsap = require("gsap"), import_react4 = require("react"), import_jsx_runtime5 = require("react/jsx-runtime");
function Section1() {
  return (0, import_react4.useEffect)(() => {
    import_gsap.gsap.timeline({
      delay: 0.5
    }).fromTo(".section1-text", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []), /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
    className: "section1",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
        className: "section1-text",
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", {
          children: "Avec Recif, d\xE9couvrez des pi\xE8ces unique et \xE9thique gr\xE2ce \xE0 nos cr\xE9ateurs"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
        className: "img1"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
        className: "img2",
        children: "Nous avons con\xE7u une plateforme de vente en ligne responsable recensant les cr\xE9ateurs textile"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
        className: "img3"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
        className: "img4"
      })
    ]
  });
}

// app/components/Section2.tsx
var import_gsap2 = require("gsap"), import_react5 = require("react"), import_jsx_runtime6 = require("react/jsx-runtime");
function Section2() {
  let phoneRef = (0, import_react5.useRef)(null);
  return (0, import_react5.useEffect)(() => {
    import_gsap2.gsap.fromTo(".phoneImg", { y: 300 }, { y: 0, duration: 1, delay: 0.5 }), import_gsap2.gsap.set(phoneRef.current, { scale: 1 });
    function intro() {
      let tl = import_gsap2.gsap.timeline();
      return tl.fromTo(phoneRef.current, { y: 200 }, { y: 0, duration: 0 }), tl;
    }
    function stopTrigger() {
      return import_gsap2.gsap.timeline({
        delay: 1,
        scrollTrigger: {
          trigger: phoneRef.current,
          start: "top top",
          end: "+=2000",
          pin: !0,
          scrub: !0
        }
      });
    }
    let master = import_gsap2.gsap.timeline();
    master.add(intro()), master.add(stopTrigger());
  }, []), /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
    className: "section2",
    ref: phoneRef,
    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
      className: "phoneImg"
    })
  });
}

// app/components/Section3.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function Section3() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", {
        className: "section3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", {
            className: "section3-valeur",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", {
                className: "txticon",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", {
                    className: "icn icon1"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", {
                    children: "Raret\xE9"
                  })
                ]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", {
                className: "txticon",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", {
                    className: "icn icon2"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", {
                    children: "Partage"
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", {
            className: "section3-valeur",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", {
                className: "txticon",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", {
                    className: "icn icon3"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", {
                    children: "Engagement"
                  })
                ]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", {
                className: "txticon",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", {
                    className: "icn icon4"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", {
                    children: "Transparence"
                  })
                ]
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", {
        className: "section3-titre",
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", {
          children: "Parce qu\u2019avec R\xE9cif..."
        })
      })
    ]
  });
}

// app/components/Section4.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function Section4() {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", {
    className: "section4",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", {
        className: "qstn",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", {
            className: "qstn1-text qstnGlobal",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", {
                children: "Acheter des v\xEAtements uniques :"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", {
                children: "Repr\xE9senter votre style avec des pieces qui vous ressemble"
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", {
            className: "qstn2-text qstnGlobal",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", {
                children: "Briller de mani\xE8re responsable :"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", {
                children: "Chez r\xE9cif, mode et eco-responsabilit\xE9 forme un cercle vertueux"
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", {
            className: "qstn3-text qstnGlobal",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", {
                children: "Suivre l\u2019histoire des cr\xE9ateurs :"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", {
                children: "D\xE9couvrez les coulisses de cr\xE9ations de vos produits en toute transparence"
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", {
        className: "section4-img"
      })
    ]
  });
}

// app/components/Section5.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function Section5() {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", {
    className: "section5",
    children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h4", {
      children: "C'est possible !"
    })
  });
}

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
db = new import_client.PrismaClient();

// app/utils/repository.server.ts
async function storeEmail(email) {
  return db.email.create({
    data: {
      email
    }
  });
}

// app/routes/index.tsx
var import_jsx_runtime10 = require("react/jsx-runtime"), action = async ({ request }) => {
  await new Promise((res) => setTimeout(res, 1e3));
  let email = (await request.formData()).get("email");
  return email ? (await storeEmail(email.toString()), (0, import_node2.json)({
    subscription: !0
  })) : (0, import_node2.json)({
    error: !0,
    message: "L'email est requis"
  });
};
function Index() {
  if ((0, import_react6.useEffect)(() => {
    import_gsap3.gsap.registerPlugin(import_ScrollTrigger.ScrollTrigger);
  }, []), typeof window < "u") {
    var body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "#1D4F49", window.onscroll = function(event) {
      var scroll = window.pageYOffset;
      scroll < 550 ? body.style.backgroundColor = "#1D4F49" : scroll >= 550 && scroll < 1500 ? body.style.backgroundColor = "#EDEDED" : scroll >= 2220 && scroll < 3630 ? body.style.backgroundColor = "#E5CCB5" : scroll >= 3630 && scroll < 4500 ? body.style.backgroundColor = "#EDEDED" : body.style.backgroundColor = "white";
    };
  }
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Header, {}),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Section1, {}),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Section2, {}),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Section3, {}),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Section4, {}),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Section5, {}),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Footer, {})
    ]
  });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "5bb6408e", entry: { module: "/build/entry.client-VLPQO2RC.js", imports: ["/build/_shared/chunk-BGFL6637.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-ZEOBQVNO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-CIMKWSKN.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-5BB6408E.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
var import_vercel = require("@remix-run/vercel"), server_default = (0, import_vercel.createRequestHandler)({ build: server_build_exports, mode: "production" });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
