import app from "./app.js";
import config from "./config/config.js";
import { main } from "./db/db.js";

main();

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
