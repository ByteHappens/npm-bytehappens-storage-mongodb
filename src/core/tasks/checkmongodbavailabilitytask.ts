import { MongoClient } from "mongodb";
import { logging, runtimes } from "bytehappens";

import { IMongoDbConnection } from "../interfaces/imongodbconnection";
import { IMongoDbUser } from "../interfaces/imongodbuser";
import { CreateMongoDbClientAsync } from "../functions/createmongodbclient";

export class CheckMongoDbAvailabilityTask<
  TLog extends logging.ILog,
  TLogger extends logging.ILogger<TLog>,
  TLoggerFactory extends logging.ILoggerFactory<TLog, TLogger>
> extends runtimes.tasks.LambdaTask<TLog, TLogger, TLoggerFactory> {
  public constructor(connection: IMongoDbConnection, user: IMongoDbUser, loggerFactory: TLoggerFactory) {
    super(
      async () => {
        //  SCK: If we can create client, then it is available
        let client: MongoClient = await CreateMongoDbClientAsync(connection, user);
        client.close();
        return true;
      },
      "CheckMongoDbAvailabilityTask",
      loggerFactory
    );
  }
}
