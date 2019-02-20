import "mocha";
import { expect } from "chai";

import { mongodb } from "../lib";

describe("MongoDb Connection Validation", () => {
  it("Should succeed", done => {
    let connection: mongodb.IMongoDbConnection = {
      host: "host",
      port: 1234
    };

    mongodb.ValidateMongoDbConnection(connection);

    done();
  });
});

describe("MongoDb User Validation", () => {
  it("Should succeed", done => {
    let user: mongodb.IMongoDbUser = { username: "user", password: "password", databaseName: "database" };

    mongodb.ValidateMongoDbUser(user);

    done();
  });
});
