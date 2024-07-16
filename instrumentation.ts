import { OTLPHttpJsonTraceExporter, registerOTel } from "@vercel/otel";

/* export function register() {
  registerOTel({ serviceName: "pokedex-next-app" });
} */

export function register() {
  registerOTel({
    serviceName: "pokedex-next-app",
    instrumentationConfig: {
      fetch: {
        propagateContextUrls: ["*"],
      },
    },

    traceExporter: new OTLPHttpJsonTraceExporter({
      url: "https://agent-b0fd7500d1ab0740-bf80c4d36043094f.tracetest.io:443",
    }),
  });
}
