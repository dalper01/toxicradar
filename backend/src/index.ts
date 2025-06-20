import express from "express";
import cors from "cors";
import https from "https";
import fs from "fs";
import selfsigned from "selfsigned";

const app = express();
const port = process.env.PORT || 4000;

// Allow requests from your frontend
app.use(
  cors({
    origin: "https://localhost:3000",
  })
);

app.get("/", (req, res) => {
  res.send("ToxicRadar backend is running!");
});

// Try to read SSL certificate and key, otherwise generate self-signed for dev
let sslOptions;
try {
  sslOptions = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert"),
  };
} catch (err) {
  console.warn(
    "SSL cert files not found, generating self-signed certificate for development."
  );
  const pems = selfsigned.generate(null, { days: 365 });
  sslOptions = {
    key: pems.private,
    cert: pems.cert,
  };
}

// Start HTTPS server
https.createServer(sslOptions, app).listen(port, () => {
  console.log(`HTTPS server listening on port ${port}`);
});

/*
  Next steps:
  - Add more API routes as needed (e.g., /api/data)
  - Connect to a database if required
  - For production, use trusted SSL certificates and update CORS origin
*/