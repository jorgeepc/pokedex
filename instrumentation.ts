import { registerOTel } from "@vercel/otel";

export function register() {
  registerOTel({ serviceName: "pokedex-next-app" });
}

/* export function register() {
  registerOTel({
    instrumentationConfig: {
      fetch: {
        propagateContextUrls: ["*"],
      },
    },
    attributes: {
      "highlight.project_id": "YOUR_PROJECT_ID",
      "highlight.source": "backend",
    },
    traceExporter: new OTLPHttpJsonTraceExporter({
      url: "https://otel.highlight.io:4318/v1/traces",
    }),
    spanProcessors: [
      new BatchSpanProcessor(
        new OTLPHttpJsonTraceExporter({
          url: "https://otel.highlight.io:4318/v1/traces",
        })
      ),
    ],
  });
} */
