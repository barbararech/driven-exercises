import { _setup } from "../utils/serverRunner";
import fs from "fs";

describe("Usage of schema middleware", () => {
  it("should be using schema middleware", () => {
    const schemaValidationMiddleware = fs.readFileSync("./src/middlewares/userSchemaValidationMiddleware.js", "utf8");

    expect(schemaValidationMiddleware.length).toBeGreaterThan(1);
  });
});
