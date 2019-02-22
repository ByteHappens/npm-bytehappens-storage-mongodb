import "mocha";
import { expect } from "chai";

import { storageMongoDb } from "../lib";

describe("MongoDb Connection Validation", () => {
  it("Should succeed", done => {
    let connection: storageMongoDb.core.IMongoDbConnection = {
      host: "host",
      port: 1234
    };

    storageMongoDb.core.ValidateMongoDbConnection(connection);

    done();
  });
});

describe("MongoDb User Validation", () => {
  it("Should succeed", done => {
    let user: storageMongoDb.core.IMongoDbUser = { username: "user", password: "password", databaseName: "database" };

    storageMongoDb.core.ValidateMongoDbUser(user);

    done();
  });
});
