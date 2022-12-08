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

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
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
var global_default = "/build/_assets/global-3MBLUQCE.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 30,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 34,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 35,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 36,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 37,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action,
  default: () => Index
});
var import_node2 = require("@remix-run/node"), import_gsap3 = require("gsap"), import_ScrollTrigger = require("gsap/dist/ScrollTrigger"), import_react6 = require("react");

// app/components/Footer.tsx
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", {
    className: "footer",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", {
      className: "contentFooter",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", {
          className: "textFooter",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", {
              children: "Vous \xEAtes int\xE9ress\xE9s ?"
            }, void 0, !1, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 8,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", {
              children: "Inscrivez-vous \xE0 la newsletters"
            }, void 0, !1, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 9,
              columnNumber: 21
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 7,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Form, {
            method: "post",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", {
                className: "inputemail",
                type: "text",
                name: "email",
                id: "email"
              }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 13,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", {
                className: "submit",
                type: "submit",
                value: "s'inscrire"
              }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 14,
                columnNumber: 25
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 12,
            columnNumber: 21
          }, this)
        }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 11,
          columnNumber: 17
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/components/Header.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", {
    className: "header",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", {
        className: "logoHeader"
      }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 4,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", {
        href: "https://www.apple.com/fr/app-store/",
        target: "_blank",
        children: "T\xE9l\xE9charger l'application"
      }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 5,
        columnNumber: 13
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/Header.tsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/components/Section1.tsx
var import_gsap = require("gsap"), import_react4 = require("react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Section1() {
  return (0, import_react4.useEffect)(() => {
    import_gsap.gsap.timeline({
      delay: 0.5
    }).fromTo(".section1-text", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", {
    className: "section1",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", {
        className: "section1-text",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", {
          children: "Avec Recif, d\xE9couvrez des pi\xE8ces uniques et \xE9thiques gr\xE2ce \xE0 nos cr\xE9ateurs"
        }, void 0, !1, {
          fileName: "app/components/Section1.tsx",
          lineNumber: 14,
          columnNumber: 17
        }, this)
      }, void 0, !1, {
        fileName: "app/components/Section1.tsx",
        lineNumber: 13,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", {
        className: "img1"
      }, void 0, !1, {
        fileName: "app/components/Section1.tsx",
        lineNumber: 16,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", {
        className: "img2",
        children: "Nous avons con\xE7u une plateforme de vente en ligne responsable recensant les cr\xE9ateurs textile"
      }, void 0, !1, {
        fileName: "app/components/Section1.tsx",
        lineNumber: 17,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", {
        className: "img3"
      }, void 0, !1, {
        fileName: "app/components/Section1.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", {
        className: "img4"
      }, void 0, !1, {
        fileName: "app/components/Section1.tsx",
        lineNumber: 19,
        columnNumber: 13
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/Section1.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

// app/components/Section2.tsx
var import_gsap2 = require("gsap"), import_react5 = require("react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
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
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", {
    className: "section2",
    ref: phoneRef,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", {
      className: "phoneImg"
    }, void 0, !1, {
      fileName: "app/components/Section2.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this)
  }, void 0, !1, {
    fileName: "app/components/Section2.tsx",
    lineNumber: 35,
    columnNumber: 9
  }, this);
}

// app/components/Section3.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Section3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", {
        className: "section3",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", {
            className: "section3-valeur",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", {
                className: "txticon",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", {
                    className: "icn icon1"
                  }, void 0, !1, {
                    fileName: "app/components/Section3.tsx",
                    lineNumber: 7,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", {
                    children: "Raret\xE9"
                  }, void 0, !1, {
                    fileName: "app/components/Section3.tsx",
                    lineNumber: 8,
                    columnNumber: 25
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/Section3.tsx",
                lineNumber: 6,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", {
                className: "txticon",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", {
                    className: "icn icon2"
                  }, void 0, !1, {
                    fileName: "app/components/Section3.tsx",
                    lineNumber: 11,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", {
                    children: "Partage"
                  }, void 0, !1, {
                    fileName: "app/components/Section3.tsx",
                    lineNumber: 12,
                    columnNumber: 25
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/Section3.tsx",
                lineNumber: 10,
                columnNumber: 21
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/Section3.tsx",
            lineNumber: 5,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", {
            className: "section3-valeur",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", {
                className: "txticon",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", {
                    className: "icn icon3"
                  }, void 0, !1, {
                    fileName: "app/components/Section3.tsx",
                    lineNumber: 17,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", {
                    children: "Engagement"
                  }, void 0, !1, {
                    fileName: "app/components/Section3.tsx",
                    lineNumber: 18,
                    columnNumber: 25
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/Section3.tsx",
                lineNumber: 16,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", {
                className: "txticon",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", {
                    className: "icn icon4"
                  }, void 0, !1, {
                    fileName: "app/components/Section3.tsx",
                    lineNumber: 21,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", {
                    children: "Transparence"
                  }, void 0, !1, {
                    fileName: "app/components/Section3.tsx",
                    lineNumber: 22,
                    columnNumber: 25
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/Section3.tsx",
                lineNumber: 20,
                columnNumber: 21
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/Section3.tsx",
            lineNumber: 15,
            columnNumber: 17
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/Section3.tsx",
        lineNumber: 4,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", {
        className: "section3-titre",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", {
          children: "Parce que avec R\xE9cif \u{1F4F1}"
        }, void 0, !1, {
          fileName: "app/components/Section3.tsx",
          lineNumber: 27,
          columnNumber: 17
        }, this)
      }, void 0, !1, {
        fileName: "app/components/Section3.tsx",
        lineNumber: 26,
        columnNumber: 13
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/Section3.tsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/components/Section4.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Section4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {
    className: "section4",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {
        className: "qstn",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {
            className: "qstn1-text qstnGlobal",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", {
                children: "Acheter des v\xEAtements uniques :"
              }, void 0, !1, {
                fileName: "app/components/Section4.tsx",
                lineNumber: 6,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", {
                children: "Repr\xE9sentez votre style avec des pi\xE8ces qui vous ressemble"
              }, void 0, !1, {
                fileName: "app/components/Section4.tsx",
                lineNumber: 7,
                columnNumber: 21
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/Section4.tsx",
            lineNumber: 5,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {
            className: "qstn2-text qstnGlobal",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", {
                children: "Briller de mani\xE8re responsable :"
              }, void 0, !1, {
                fileName: "app/components/Section4.tsx",
                lineNumber: 10,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", {
                children: "Chez Recif, mode et \xE9co-responsabilit\xE9 forme un cercle vertueux"
              }, void 0, !1, {
                fileName: "app/components/Section4.tsx",
                lineNumber: 11,
                columnNumber: 21
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/Section4.tsx",
            lineNumber: 9,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {
            className: "qstn3-text qstnGlobal",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", {
                children: "Suivre l\u2019histoire des cr\xE9ateurs :"
              }, void 0, !1, {
                fileName: "app/components/Section4.tsx",
                lineNumber: 14,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", {
                children: "D\xE9couvrez les coulisses de cr\xE9ation de vos produits en toute transparence"
              }, void 0, !1, {
                fileName: "app/components/Section4.tsx",
                lineNumber: 15,
                columnNumber: 21
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/Section4.tsx",
            lineNumber: 13,
            columnNumber: 17
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/Section4.tsx",
        lineNumber: 4,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {
        className: "section4-img"
      }, void 0, !1, {
        fileName: "app/components/Section4.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/Section4.tsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/components/Section5.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Section5() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", {
    className: "section5",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h4", {
      children: "C'est possible \u{1F389}"
    }, void 0, !1, {
      fileName: "app/components/Section5.tsx",
      lineNumber: 4,
      columnNumber: 13
    }, this)
  }, void 0, !1, {
    fileName: "app/components/Section5.tsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient()), db = global.__db;

// app/utils/repository.server.ts
async function storeEmail(email) {
  return db.email.create({
    data: {
      email
    }
  });
}

// app/routes/index.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), action = async ({ request }) => {
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
      console.log(scroll), scroll < 550 ? body.style.backgroundColor = "#1D4F49" : scroll >= 550 && scroll < 2540 || scroll >= 2540 && scroll < 3630 || scroll >= 3630 && scroll < 4500 ? body.style.backgroundColor = "#EDEDED" : body.style.backgroundColor = "white";
    };
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Header, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 64,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Section1, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 65,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Section2, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 66,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Section3, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 67,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Section4, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 68,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Section5, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Footer, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 70,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "b4124023", entry: { module: "/build/entry.client-A7UKX5ZO.js", imports: ["/build/_shared/chunk-TYZYKHPR.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-JF47WUI2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-HJWJF3A2.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-B4124023.js" };

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
