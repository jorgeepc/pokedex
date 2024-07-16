import { SimpleSpanProcessor } from "@opentelemetry/sdk-trace-base";
import { OTLPHttpJsonTraceExporter, registerOTel } from "@vercel/otel";

export function register() {
  registerOTel({
    serviceName: "pokedex-next-app",
    spanProcessors: [
      new SimpleSpanProcessor(
        new OTLPHttpJsonTraceExporter({
          url: "https://agent-b0fd7500d1ab0740-bf80c4d36043094f.tracetest.io:443/v1/traces",
        })
      ),
    ],
    instrumentationConfig: {
      fetch: {
        propagateContextUrls: [
          "https://agent-b0fd7500d1ab0740-bf80c4d36043094f.tracetest.io:443",
        ],
      },
    },
  });
}
