import { createReadStream } from "node:fs";
import { createServer } from "node:http";
const files = new Map([
  ["/", ["demo/index.html", "text/html"]],
  ["/demo/demo.js", ["demo/demo.js", "application/javascript"]],
  [
    "/waste-pickup-planner-card.js",
    ["waste-pickup-planner-card.js", "application/javascript"],
  ],
]);
createServer((request, response) => {
  if (request.url === "/favicon.ico") {
    response.writeHead(204);
    response.end();
    return;
  }
  const file = files.get((request.url ?? "/").split("?")[0]);
  if (!file) {
    response.writeHead(404);
    response.end();
    return;
  }
  response.writeHead(200, {
    "content-type": file[1],
    "cache-control": "no-store",
  });
  const stream = createReadStream(file[0]);
  stream.on("error", () => response.end());
  stream.pipe(response);
}).listen(Number(process.env.PORT ?? 4174), "127.0.0.1", () =>
  console.log("Waste Pickup Planner preview: http://127.0.0.1:4174"),
);
