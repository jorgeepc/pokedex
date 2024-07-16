import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-base";
import { OTLPHttpJsonTraceExporter, registerOTel } from "@vercel/otel";

export function register() {
  registerOTel({
    instrumentationConfig: {
      fetch: {
        propagateContextUrls: ["*"],
      },
    },
    attributes: {
      "highlight.project_id": "5g521rlg",
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
}
