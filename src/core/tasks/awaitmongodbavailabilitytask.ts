import { logging, runtimes } from "bytehappens";

import { IMongoDbConnection } from "../interfaces/imongodbconnection";
import { IMongoDbUser } from "../interfaces/imongodbuser";
import { CheckMongoDbAvailabilityTask } from "./checkmongodbavailabilitytask";

export class AwaitMongoDbAvailabilityTask<
  TLog extends logging.ILog,
  TLogger extends logging.ILogger<TLog>,
  TLoggerFactory extends logging.ILoggerFactory<TLog, TLogger>
> extends runtimes.tasks.RetriableTask<
  TLog,
  TLogger,
  TLoggerFactory,
  CheckMongoDbAvailabilityTask<TLog, TLogger, TLoggerFactory>
> {
  public constructor(
    connection: IMongoDbConnection,
    user: IMongoDbUser,
    maxAttempts: number,
    delayInMs: number,
    loggerFactory: TLoggerFactory
  ) {
    super(
      new CheckMongoDbAvailabilityTask(connection, user, loggerFactory),
      maxAttempts,
      delayInMs,
      "AwaitCheckMongoDbAvailabilityTask",
      loggerFactory
    );
  }
}
