
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model inventory_items
 * 
 */
export type inventory_items = $Result.DefaultSelection<Prisma.$inventory_itemsPayload>
/**
 * Model otg_repairs
 * 
 */
export type otg_repairs = $Result.DefaultSelection<Prisma.$otg_repairsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model app_config
 * 
 */
export type app_config = $Result.DefaultSelection<Prisma.$app_configPayload>
/**
 * Model app_settings
 * 
 */
export type app_settings = $Result.DefaultSelection<Prisma.$app_settingsPayload>
/**
 * Model machines
 * 
 */
export type machines = $Result.DefaultSelection<Prisma.$machinesPayload>
/**
 * Model suppliers
 * 
 */
export type suppliers = $Result.DefaultSelection<Prisma.$suppliersPayload>
/**
 * Model conducteurs
 * 
 */
export type conducteurs = $Result.DefaultSelection<Prisma.$conducteursPayload>
/**
 * Model custom_field_definitions
 * 
 */
export type custom_field_definitions = $Result.DefaultSelection<Prisma.$custom_field_definitionsPayload>
/**
 * Model column_config
 * 
 */
export type column_config = $Result.DefaultSelection<Prisma.$column_configPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventory_items`: Exposes CRUD operations for the **inventory_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventory_items
    * const inventory_items = await prisma.inventory_items.findMany()
    * ```
    */
  get inventory_items(): Prisma.inventory_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otg_repairs`: Exposes CRUD operations for the **otg_repairs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Otg_repairs
    * const otg_repairs = await prisma.otg_repairs.findMany()
    * ```
    */
  get otg_repairs(): Prisma.otg_repairsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.app_config`: Exposes CRUD operations for the **app_config** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more App_configs
    * const app_configs = await prisma.app_config.findMany()
    * ```
    */
  get app_config(): Prisma.app_configDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.app_settings`: Exposes CRUD operations for the **app_settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more App_settings
    * const app_settings = await prisma.app_settings.findMany()
    * ```
    */
  get app_settings(): Prisma.app_settingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.machines`: Exposes CRUD operations for the **machines** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Machines
    * const machines = await prisma.machines.findMany()
    * ```
    */
  get machines(): Prisma.machinesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.suppliers`: Exposes CRUD operations for the **suppliers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.suppliers.findMany()
    * ```
    */
  get suppliers(): Prisma.suppliersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conducteurs`: Exposes CRUD operations for the **conducteurs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conducteurs
    * const conducteurs = await prisma.conducteurs.findMany()
    * ```
    */
  get conducteurs(): Prisma.conducteursDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.custom_field_definitions`: Exposes CRUD operations for the **custom_field_definitions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Custom_field_definitions
    * const custom_field_definitions = await prisma.custom_field_definitions.findMany()
    * ```
    */
  get custom_field_definitions(): Prisma.custom_field_definitionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.column_config`: Exposes CRUD operations for the **column_config** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Column_configs
    * const column_configs = await prisma.column_config.findMany()
    * ```
    */
  get column_config(): Prisma.column_configDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    inventory_items: 'inventory_items',
    otg_repairs: 'otg_repairs',
    users: 'users',
    app_config: 'app_config',
    app_settings: 'app_settings',
    machines: 'machines',
    suppliers: 'suppliers',
    conducteurs: 'conducteurs',
    custom_field_definitions: 'custom_field_definitions',
    column_config: 'column_config'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "inventory_items" | "otg_repairs" | "users" | "app_config" | "app_settings" | "machines" | "suppliers" | "conducteurs" | "custom_field_definitions" | "column_config"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      inventory_items: {
        payload: Prisma.$inventory_itemsPayload<ExtArgs>
        fields: Prisma.inventory_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inventory_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inventory_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_itemsPayload>
          }
          findFirst: {
            args: Prisma.inventory_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inventory_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_itemsPayload>
          }
          findMany: {
            args: Prisma.inventory_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_itemsPayload>[]
          }
          create: {
            args: Prisma.inventory_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_itemsPayload>
          }
          createMany: {
            args: Prisma.inventory_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.inventory_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_itemsPayload>[]
          }
          delete: {
            args: Prisma.inventory_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_itemsPayload>
          }
          update: {
            args: Prisma.inventory_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_itemsPayload>
          }
          deleteMany: {
            args: Prisma.inventory_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inventory_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.inventory_itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_itemsPayload>[]
          }
          upsert: {
            args: Prisma.inventory_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_itemsPayload>
          }
          aggregate: {
            args: Prisma.Inventory_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory_items>
          }
          groupBy: {
            args: Prisma.inventory_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Inventory_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.inventory_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Inventory_itemsCountAggregateOutputType> | number
          }
        }
      }
      otg_repairs: {
        payload: Prisma.$otg_repairsPayload<ExtArgs>
        fields: Prisma.otg_repairsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.otg_repairsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otg_repairsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.otg_repairsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otg_repairsPayload>
          }
          findFirst: {
            args: Prisma.otg_repairsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otg_repairsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.otg_repairsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otg_repairsPayload>
          }
          findMany: {
            args: Prisma.otg_repairsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otg_repairsPayload>[]
          }
          create: {
            args: Prisma.otg_repairsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otg_repairsPayload>
          }
          createMany: {
            args: Prisma.otg_repairsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.otg_repairsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otg_repairsPayload>[]
          }
          delete: {
            args: Prisma.otg_repairsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otg_repairsPayload>
          }
          update: {
            args: Prisma.otg_repairsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otg_repairsPayload>
          }
          deleteMany: {
            args: Prisma.otg_repairsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.otg_repairsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.otg_repairsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otg_repairsPayload>[]
          }
          upsert: {
            args: Prisma.otg_repairsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otg_repairsPayload>
          }
          aggregate: {
            args: Prisma.Otg_repairsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtg_repairs>
          }
          groupBy: {
            args: Prisma.otg_repairsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Otg_repairsGroupByOutputType>[]
          }
          count: {
            args: Prisma.otg_repairsCountArgs<ExtArgs>
            result: $Utils.Optional<Otg_repairsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      app_config: {
        payload: Prisma.$app_configPayload<ExtArgs>
        fields: Prisma.app_configFieldRefs
        operations: {
          findUnique: {
            args: Prisma.app_configFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_configPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.app_configFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_configPayload>
          }
          findFirst: {
            args: Prisma.app_configFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_configPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.app_configFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_configPayload>
          }
          findMany: {
            args: Prisma.app_configFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_configPayload>[]
          }
          create: {
            args: Prisma.app_configCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_configPayload>
          }
          createMany: {
            args: Prisma.app_configCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.app_configCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_configPayload>[]
          }
          delete: {
            args: Prisma.app_configDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_configPayload>
          }
          update: {
            args: Prisma.app_configUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_configPayload>
          }
          deleteMany: {
            args: Prisma.app_configDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.app_configUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.app_configUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_configPayload>[]
          }
          upsert: {
            args: Prisma.app_configUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_configPayload>
          }
          aggregate: {
            args: Prisma.App_configAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApp_config>
          }
          groupBy: {
            args: Prisma.app_configGroupByArgs<ExtArgs>
            result: $Utils.Optional<App_configGroupByOutputType>[]
          }
          count: {
            args: Prisma.app_configCountArgs<ExtArgs>
            result: $Utils.Optional<App_configCountAggregateOutputType> | number
          }
        }
      }
      app_settings: {
        payload: Prisma.$app_settingsPayload<ExtArgs>
        fields: Prisma.app_settingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.app_settingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_settingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.app_settingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_settingsPayload>
          }
          findFirst: {
            args: Prisma.app_settingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_settingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.app_settingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_settingsPayload>
          }
          findMany: {
            args: Prisma.app_settingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_settingsPayload>[]
          }
          create: {
            args: Prisma.app_settingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_settingsPayload>
          }
          createMany: {
            args: Prisma.app_settingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.app_settingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_settingsPayload>[]
          }
          delete: {
            args: Prisma.app_settingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_settingsPayload>
          }
          update: {
            args: Prisma.app_settingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_settingsPayload>
          }
          deleteMany: {
            args: Prisma.app_settingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.app_settingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.app_settingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_settingsPayload>[]
          }
          upsert: {
            args: Prisma.app_settingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_settingsPayload>
          }
          aggregate: {
            args: Prisma.App_settingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApp_settings>
          }
          groupBy: {
            args: Prisma.app_settingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<App_settingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.app_settingsCountArgs<ExtArgs>
            result: $Utils.Optional<App_settingsCountAggregateOutputType> | number
          }
        }
      }
      machines: {
        payload: Prisma.$machinesPayload<ExtArgs>
        fields: Prisma.machinesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.machinesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machinesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.machinesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machinesPayload>
          }
          findFirst: {
            args: Prisma.machinesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machinesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.machinesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machinesPayload>
          }
          findMany: {
            args: Prisma.machinesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machinesPayload>[]
          }
          create: {
            args: Prisma.machinesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machinesPayload>
          }
          createMany: {
            args: Prisma.machinesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.machinesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machinesPayload>[]
          }
          delete: {
            args: Prisma.machinesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machinesPayload>
          }
          update: {
            args: Prisma.machinesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machinesPayload>
          }
          deleteMany: {
            args: Prisma.machinesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.machinesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.machinesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machinesPayload>[]
          }
          upsert: {
            args: Prisma.machinesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$machinesPayload>
          }
          aggregate: {
            args: Prisma.MachinesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMachines>
          }
          groupBy: {
            args: Prisma.machinesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MachinesGroupByOutputType>[]
          }
          count: {
            args: Prisma.machinesCountArgs<ExtArgs>
            result: $Utils.Optional<MachinesCountAggregateOutputType> | number
          }
        }
      }
      suppliers: {
        payload: Prisma.$suppliersPayload<ExtArgs>
        fields: Prisma.suppliersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.suppliersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.suppliersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          findFirst: {
            args: Prisma.suppliersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.suppliersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          findMany: {
            args: Prisma.suppliersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>[]
          }
          create: {
            args: Prisma.suppliersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          createMany: {
            args: Prisma.suppliersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.suppliersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>[]
          }
          delete: {
            args: Prisma.suppliersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          update: {
            args: Prisma.suppliersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          deleteMany: {
            args: Prisma.suppliersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.suppliersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.suppliersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>[]
          }
          upsert: {
            args: Prisma.suppliersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          aggregate: {
            args: Prisma.SuppliersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuppliers>
          }
          groupBy: {
            args: Prisma.suppliersGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuppliersGroupByOutputType>[]
          }
          count: {
            args: Prisma.suppliersCountArgs<ExtArgs>
            result: $Utils.Optional<SuppliersCountAggregateOutputType> | number
          }
        }
      }
      conducteurs: {
        payload: Prisma.$conducteursPayload<ExtArgs>
        fields: Prisma.conducteursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.conducteursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conducteursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.conducteursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conducteursPayload>
          }
          findFirst: {
            args: Prisma.conducteursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conducteursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.conducteursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conducteursPayload>
          }
          findMany: {
            args: Prisma.conducteursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conducteursPayload>[]
          }
          create: {
            args: Prisma.conducteursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conducteursPayload>
          }
          createMany: {
            args: Prisma.conducteursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.conducteursCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conducteursPayload>[]
          }
          delete: {
            args: Prisma.conducteursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conducteursPayload>
          }
          update: {
            args: Prisma.conducteursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conducteursPayload>
          }
          deleteMany: {
            args: Prisma.conducteursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.conducteursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.conducteursUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conducteursPayload>[]
          }
          upsert: {
            args: Prisma.conducteursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conducteursPayload>
          }
          aggregate: {
            args: Prisma.ConducteursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConducteurs>
          }
          groupBy: {
            args: Prisma.conducteursGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConducteursGroupByOutputType>[]
          }
          count: {
            args: Prisma.conducteursCountArgs<ExtArgs>
            result: $Utils.Optional<ConducteursCountAggregateOutputType> | number
          }
        }
      }
      custom_field_definitions: {
        payload: Prisma.$custom_field_definitionsPayload<ExtArgs>
        fields: Prisma.custom_field_definitionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.custom_field_definitionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custom_field_definitionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.custom_field_definitionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custom_field_definitionsPayload>
          }
          findFirst: {
            args: Prisma.custom_field_definitionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custom_field_definitionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.custom_field_definitionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custom_field_definitionsPayload>
          }
          findMany: {
            args: Prisma.custom_field_definitionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custom_field_definitionsPayload>[]
          }
          create: {
            args: Prisma.custom_field_definitionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custom_field_definitionsPayload>
          }
          createMany: {
            args: Prisma.custom_field_definitionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.custom_field_definitionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custom_field_definitionsPayload>[]
          }
          delete: {
            args: Prisma.custom_field_definitionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custom_field_definitionsPayload>
          }
          update: {
            args: Prisma.custom_field_definitionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custom_field_definitionsPayload>
          }
          deleteMany: {
            args: Prisma.custom_field_definitionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.custom_field_definitionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.custom_field_definitionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custom_field_definitionsPayload>[]
          }
          upsert: {
            args: Prisma.custom_field_definitionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$custom_field_definitionsPayload>
          }
          aggregate: {
            args: Prisma.Custom_field_definitionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustom_field_definitions>
          }
          groupBy: {
            args: Prisma.custom_field_definitionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Custom_field_definitionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.custom_field_definitionsCountArgs<ExtArgs>
            result: $Utils.Optional<Custom_field_definitionsCountAggregateOutputType> | number
          }
        }
      }
      column_config: {
        payload: Prisma.$column_configPayload<ExtArgs>
        fields: Prisma.column_configFieldRefs
        operations: {
          findUnique: {
            args: Prisma.column_configFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$column_configPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.column_configFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$column_configPayload>
          }
          findFirst: {
            args: Prisma.column_configFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$column_configPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.column_configFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$column_configPayload>
          }
          findMany: {
            args: Prisma.column_configFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$column_configPayload>[]
          }
          create: {
            args: Prisma.column_configCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$column_configPayload>
          }
          createMany: {
            args: Prisma.column_configCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.column_configCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$column_configPayload>[]
          }
          delete: {
            args: Prisma.column_configDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$column_configPayload>
          }
          update: {
            args: Prisma.column_configUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$column_configPayload>
          }
          deleteMany: {
            args: Prisma.column_configDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.column_configUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.column_configUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$column_configPayload>[]
          }
          upsert: {
            args: Prisma.column_configUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$column_configPayload>
          }
          aggregate: {
            args: Prisma.Column_configAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColumn_config>
          }
          groupBy: {
            args: Prisma.column_configGroupByArgs<ExtArgs>
            result: $Utils.Optional<Column_configGroupByOutputType>[]
          }
          count: {
            args: Prisma.column_configCountArgs<ExtArgs>
            result: $Utils.Optional<Column_configCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    inventory_items?: inventory_itemsOmit
    otg_repairs?: otg_repairsOmit
    users?: usersOmit
    app_config?: app_configOmit
    app_settings?: app_settingsOmit
    machines?: machinesOmit
    suppliers?: suppliersOmit
    conducteurs?: conducteursOmit
    custom_field_definitions?: custom_field_definitionsOmit
    column_config?: column_configOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    email: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    email: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    email: number
    name: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    email: string
    name: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "email" | "name", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      email: string
      name: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model inventory_items
   */

  export type AggregateInventory_items = {
    _count: Inventory_itemsCountAggregateOutputType | null
    _avg: Inventory_itemsAvgAggregateOutputType | null
    _sum: Inventory_itemsSumAggregateOutputType | null
    _min: Inventory_itemsMinAggregateOutputType | null
    _max: Inventory_itemsMaxAggregateOutputType | null
  }

  export type Inventory_itemsAvgAggregateOutputType = {
    poses: number | null
  }

  export type Inventory_itemsSumAggregateOutputType = {
    poses: number | null
  }

  export type Inventory_itemsMinAggregateOutputType = {
    id: string | null
    code_cliche: string | null
    code_forme: string | null
    machine: string | null
    reference: string | null
    client: string | null
    element: string | null
    supplier_cliche: string | null
    supplier_forme: string | null
    poses: number | null
    date_creation: string | null
    date_creation_cliche: string | null
    is_ordered_cliche: boolean | null
    date_order_cliche: string | null
    date_expected_cliche: string | null
    date_delivery_cliche: string | null
    date_creation_forme: string | null
    is_ordered_forme: boolean | null
    date_order_forme: string | null
    date_expected_forme: string | null
    date_delivery_forme: string | null
    comments: string | null
    non_conformity: string | null
  }

  export type Inventory_itemsMaxAggregateOutputType = {
    id: string | null
    code_cliche: string | null
    code_forme: string | null
    machine: string | null
    reference: string | null
    client: string | null
    element: string | null
    supplier_cliche: string | null
    supplier_forme: string | null
    poses: number | null
    date_creation: string | null
    date_creation_cliche: string | null
    is_ordered_cliche: boolean | null
    date_order_cliche: string | null
    date_expected_cliche: string | null
    date_delivery_cliche: string | null
    date_creation_forme: string | null
    is_ordered_forme: boolean | null
    date_order_forme: string | null
    date_expected_forme: string | null
    date_delivery_forme: string | null
    comments: string | null
    non_conformity: string | null
  }

  export type Inventory_itemsCountAggregateOutputType = {
    id: number
    code_cliche: number
    code_forme: number
    machine: number
    reference: number
    client: number
    element: number
    supplier_cliche: number
    supplier_forme: number
    poses: number
    date_creation: number
    date_creation_cliche: number
    is_ordered_cliche: number
    date_order_cliche: number
    date_expected_cliche: number
    date_delivery_cliche: number
    date_creation_forme: number
    is_ordered_forme: number
    date_order_forme: number
    date_expected_forme: number
    date_delivery_forme: number
    comments: number
    non_conformity: number
    custom_fields: number
    _all: number
  }


  export type Inventory_itemsAvgAggregateInputType = {
    poses?: true
  }

  export type Inventory_itemsSumAggregateInputType = {
    poses?: true
  }

  export type Inventory_itemsMinAggregateInputType = {
    id?: true
    code_cliche?: true
    code_forme?: true
    machine?: true
    reference?: true
    client?: true
    element?: true
    supplier_cliche?: true
    supplier_forme?: true
    poses?: true
    date_creation?: true
    date_creation_cliche?: true
    is_ordered_cliche?: true
    date_order_cliche?: true
    date_expected_cliche?: true
    date_delivery_cliche?: true
    date_creation_forme?: true
    is_ordered_forme?: true
    date_order_forme?: true
    date_expected_forme?: true
    date_delivery_forme?: true
    comments?: true
    non_conformity?: true
  }

  export type Inventory_itemsMaxAggregateInputType = {
    id?: true
    code_cliche?: true
    code_forme?: true
    machine?: true
    reference?: true
    client?: true
    element?: true
    supplier_cliche?: true
    supplier_forme?: true
    poses?: true
    date_creation?: true
    date_creation_cliche?: true
    is_ordered_cliche?: true
    date_order_cliche?: true
    date_expected_cliche?: true
    date_delivery_cliche?: true
    date_creation_forme?: true
    is_ordered_forme?: true
    date_order_forme?: true
    date_expected_forme?: true
    date_delivery_forme?: true
    comments?: true
    non_conformity?: true
  }

  export type Inventory_itemsCountAggregateInputType = {
    id?: true
    code_cliche?: true
    code_forme?: true
    machine?: true
    reference?: true
    client?: true
    element?: true
    supplier_cliche?: true
    supplier_forme?: true
    poses?: true
    date_creation?: true
    date_creation_cliche?: true
    is_ordered_cliche?: true
    date_order_cliche?: true
    date_expected_cliche?: true
    date_delivery_cliche?: true
    date_creation_forme?: true
    is_ordered_forme?: true
    date_order_forme?: true
    date_expected_forme?: true
    date_delivery_forme?: true
    comments?: true
    non_conformity?: true
    custom_fields?: true
    _all?: true
  }

  export type Inventory_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventory_items to aggregate.
     */
    where?: inventory_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventory_items to fetch.
     */
    orderBy?: inventory_itemsOrderByWithRelationInput | inventory_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inventory_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventory_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventory_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inventory_items
    **/
    _count?: true | Inventory_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Inventory_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Inventory_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Inventory_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Inventory_itemsMaxAggregateInputType
  }

  export type GetInventory_itemsAggregateType<T extends Inventory_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory_items[P]>
      : GetScalarType<T[P], AggregateInventory_items[P]>
  }




  export type inventory_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventory_itemsWhereInput
    orderBy?: inventory_itemsOrderByWithAggregationInput | inventory_itemsOrderByWithAggregationInput[]
    by: Inventory_itemsScalarFieldEnum[] | Inventory_itemsScalarFieldEnum
    having?: inventory_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Inventory_itemsCountAggregateInputType | true
    _avg?: Inventory_itemsAvgAggregateInputType
    _sum?: Inventory_itemsSumAggregateInputType
    _min?: Inventory_itemsMinAggregateInputType
    _max?: Inventory_itemsMaxAggregateInputType
  }

  export type Inventory_itemsGroupByOutputType = {
    id: string
    code_cliche: string | null
    code_forme: string | null
    machine: string | null
    reference: string | null
    client: string | null
    element: string | null
    supplier_cliche: string | null
    supplier_forme: string | null
    poses: number | null
    date_creation: string | null
    date_creation_cliche: string | null
    is_ordered_cliche: boolean | null
    date_order_cliche: string | null
    date_expected_cliche: string | null
    date_delivery_cliche: string | null
    date_creation_forme: string | null
    is_ordered_forme: boolean | null
    date_order_forme: string | null
    date_expected_forme: string | null
    date_delivery_forme: string | null
    comments: string | null
    non_conformity: string | null
    custom_fields: JsonValue | null
    _count: Inventory_itemsCountAggregateOutputType | null
    _avg: Inventory_itemsAvgAggregateOutputType | null
    _sum: Inventory_itemsSumAggregateOutputType | null
    _min: Inventory_itemsMinAggregateOutputType | null
    _max: Inventory_itemsMaxAggregateOutputType | null
  }

  type GetInventory_itemsGroupByPayload<T extends inventory_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Inventory_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Inventory_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Inventory_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Inventory_itemsGroupByOutputType[P]>
        }
      >
    >


  export type inventory_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code_cliche?: boolean
    code_forme?: boolean
    machine?: boolean
    reference?: boolean
    client?: boolean
    element?: boolean
    supplier_cliche?: boolean
    supplier_forme?: boolean
    poses?: boolean
    date_creation?: boolean
    date_creation_cliche?: boolean
    is_ordered_cliche?: boolean
    date_order_cliche?: boolean
    date_expected_cliche?: boolean
    date_delivery_cliche?: boolean
    date_creation_forme?: boolean
    is_ordered_forme?: boolean
    date_order_forme?: boolean
    date_expected_forme?: boolean
    date_delivery_forme?: boolean
    comments?: boolean
    non_conformity?: boolean
    custom_fields?: boolean
  }, ExtArgs["result"]["inventory_items"]>

  export type inventory_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code_cliche?: boolean
    code_forme?: boolean
    machine?: boolean
    reference?: boolean
    client?: boolean
    element?: boolean
    supplier_cliche?: boolean
    supplier_forme?: boolean
    poses?: boolean
    date_creation?: boolean
    date_creation_cliche?: boolean
    is_ordered_cliche?: boolean
    date_order_cliche?: boolean
    date_expected_cliche?: boolean
    date_delivery_cliche?: boolean
    date_creation_forme?: boolean
    is_ordered_forme?: boolean
    date_order_forme?: boolean
    date_expected_forme?: boolean
    date_delivery_forme?: boolean
    comments?: boolean
    non_conformity?: boolean
    custom_fields?: boolean
  }, ExtArgs["result"]["inventory_items"]>

  export type inventory_itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code_cliche?: boolean
    code_forme?: boolean
    machine?: boolean
    reference?: boolean
    client?: boolean
    element?: boolean
    supplier_cliche?: boolean
    supplier_forme?: boolean
    poses?: boolean
    date_creation?: boolean
    date_creation_cliche?: boolean
    is_ordered_cliche?: boolean
    date_order_cliche?: boolean
    date_expected_cliche?: boolean
    date_delivery_cliche?: boolean
    date_creation_forme?: boolean
    is_ordered_forme?: boolean
    date_order_forme?: boolean
    date_expected_forme?: boolean
    date_delivery_forme?: boolean
    comments?: boolean
    non_conformity?: boolean
    custom_fields?: boolean
  }, ExtArgs["result"]["inventory_items"]>

  export type inventory_itemsSelectScalar = {
    id?: boolean
    code_cliche?: boolean
    code_forme?: boolean
    machine?: boolean
    reference?: boolean
    client?: boolean
    element?: boolean
    supplier_cliche?: boolean
    supplier_forme?: boolean
    poses?: boolean
    date_creation?: boolean
    date_creation_cliche?: boolean
    is_ordered_cliche?: boolean
    date_order_cliche?: boolean
    date_expected_cliche?: boolean
    date_delivery_cliche?: boolean
    date_creation_forme?: boolean
    is_ordered_forme?: boolean
    date_order_forme?: boolean
    date_expected_forme?: boolean
    date_delivery_forme?: boolean
    comments?: boolean
    non_conformity?: boolean
    custom_fields?: boolean
  }

  export type inventory_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code_cliche" | "code_forme" | "machine" | "reference" | "client" | "element" | "supplier_cliche" | "supplier_forme" | "poses" | "date_creation" | "date_creation_cliche" | "is_ordered_cliche" | "date_order_cliche" | "date_expected_cliche" | "date_delivery_cliche" | "date_creation_forme" | "is_ordered_forme" | "date_order_forme" | "date_expected_forme" | "date_delivery_forme" | "comments" | "non_conformity" | "custom_fields", ExtArgs["result"]["inventory_items"]>

  export type $inventory_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inventory_items"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code_cliche: string | null
      code_forme: string | null
      machine: string | null
      reference: string | null
      client: string | null
      element: string | null
      supplier_cliche: string | null
      supplier_forme: string | null
      poses: number | null
      date_creation: string | null
      date_creation_cliche: string | null
      is_ordered_cliche: boolean | null
      date_order_cliche: string | null
      date_expected_cliche: string | null
      date_delivery_cliche: string | null
      date_creation_forme: string | null
      is_ordered_forme: boolean | null
      date_order_forme: string | null
      date_expected_forme: string | null
      date_delivery_forme: string | null
      comments: string | null
      non_conformity: string | null
      custom_fields: Prisma.JsonValue | null
    }, ExtArgs["result"]["inventory_items"]>
    composites: {}
  }

  type inventory_itemsGetPayload<S extends boolean | null | undefined | inventory_itemsDefaultArgs> = $Result.GetResult<Prisma.$inventory_itemsPayload, S>

  type inventory_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<inventory_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Inventory_itemsCountAggregateInputType | true
    }

  export interface inventory_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inventory_items'], meta: { name: 'inventory_items' } }
    /**
     * Find zero or one Inventory_items that matches the filter.
     * @param {inventory_itemsFindUniqueArgs} args - Arguments to find a Inventory_items
     * @example
     * // Get one Inventory_items
     * const inventory_items = await prisma.inventory_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inventory_itemsFindUniqueArgs>(args: SelectSubset<T, inventory_itemsFindUniqueArgs<ExtArgs>>): Prisma__inventory_itemsClient<$Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventory_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inventory_itemsFindUniqueOrThrowArgs} args - Arguments to find a Inventory_items
     * @example
     * // Get one Inventory_items
     * const inventory_items = await prisma.inventory_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inventory_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, inventory_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inventory_itemsClient<$Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_itemsFindFirstArgs} args - Arguments to find a Inventory_items
     * @example
     * // Get one Inventory_items
     * const inventory_items = await prisma.inventory_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inventory_itemsFindFirstArgs>(args?: SelectSubset<T, inventory_itemsFindFirstArgs<ExtArgs>>): Prisma__inventory_itemsClient<$Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_itemsFindFirstOrThrowArgs} args - Arguments to find a Inventory_items
     * @example
     * // Get one Inventory_items
     * const inventory_items = await prisma.inventory_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inventory_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, inventory_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__inventory_itemsClient<$Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventory_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventory_items
     * const inventory_items = await prisma.inventory_items.findMany()
     * 
     * // Get first 10 Inventory_items
     * const inventory_items = await prisma.inventory_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventory_itemsWithIdOnly = await prisma.inventory_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends inventory_itemsFindManyArgs>(args?: SelectSubset<T, inventory_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventory_items.
     * @param {inventory_itemsCreateArgs} args - Arguments to create a Inventory_items.
     * @example
     * // Create one Inventory_items
     * const Inventory_items = await prisma.inventory_items.create({
     *   data: {
     *     // ... data to create a Inventory_items
     *   }
     * })
     * 
     */
    create<T extends inventory_itemsCreateArgs>(args: SelectSubset<T, inventory_itemsCreateArgs<ExtArgs>>): Prisma__inventory_itemsClient<$Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventory_items.
     * @param {inventory_itemsCreateManyArgs} args - Arguments to create many Inventory_items.
     * @example
     * // Create many Inventory_items
     * const inventory_items = await prisma.inventory_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inventory_itemsCreateManyArgs>(args?: SelectSubset<T, inventory_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventory_items and returns the data saved in the database.
     * @param {inventory_itemsCreateManyAndReturnArgs} args - Arguments to create many Inventory_items.
     * @example
     * // Create many Inventory_items
     * const inventory_items = await prisma.inventory_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventory_items and only return the `id`
     * const inventory_itemsWithIdOnly = await prisma.inventory_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends inventory_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, inventory_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inventory_items.
     * @param {inventory_itemsDeleteArgs} args - Arguments to delete one Inventory_items.
     * @example
     * // Delete one Inventory_items
     * const Inventory_items = await prisma.inventory_items.delete({
     *   where: {
     *     // ... filter to delete one Inventory_items
     *   }
     * })
     * 
     */
    delete<T extends inventory_itemsDeleteArgs>(args: SelectSubset<T, inventory_itemsDeleteArgs<ExtArgs>>): Prisma__inventory_itemsClient<$Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventory_items.
     * @param {inventory_itemsUpdateArgs} args - Arguments to update one Inventory_items.
     * @example
     * // Update one Inventory_items
     * const inventory_items = await prisma.inventory_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inventory_itemsUpdateArgs>(args: SelectSubset<T, inventory_itemsUpdateArgs<ExtArgs>>): Prisma__inventory_itemsClient<$Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventory_items.
     * @param {inventory_itemsDeleteManyArgs} args - Arguments to filter Inventory_items to delete.
     * @example
     * // Delete a few Inventory_items
     * const { count } = await prisma.inventory_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inventory_itemsDeleteManyArgs>(args?: SelectSubset<T, inventory_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventory_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventory_items
     * const inventory_items = await prisma.inventory_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inventory_itemsUpdateManyArgs>(args: SelectSubset<T, inventory_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventory_items and returns the data updated in the database.
     * @param {inventory_itemsUpdateManyAndReturnArgs} args - Arguments to update many Inventory_items.
     * @example
     * // Update many Inventory_items
     * const inventory_items = await prisma.inventory_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inventory_items and only return the `id`
     * const inventory_itemsWithIdOnly = await prisma.inventory_items.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends inventory_itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, inventory_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inventory_items.
     * @param {inventory_itemsUpsertArgs} args - Arguments to update or create a Inventory_items.
     * @example
     * // Update or create a Inventory_items
     * const inventory_items = await prisma.inventory_items.upsert({
     *   create: {
     *     // ... data to create a Inventory_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory_items we want to update
     *   }
     * })
     */
    upsert<T extends inventory_itemsUpsertArgs>(args: SelectSubset<T, inventory_itemsUpsertArgs<ExtArgs>>): Prisma__inventory_itemsClient<$Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventory_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_itemsCountArgs} args - Arguments to filter Inventory_items to count.
     * @example
     * // Count the number of Inventory_items
     * const count = await prisma.inventory_items.count({
     *   where: {
     *     // ... the filter for the Inventory_items we want to count
     *   }
     * })
    **/
    count<T extends inventory_itemsCountArgs>(
      args?: Subset<T, inventory_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Inventory_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Inventory_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Inventory_itemsAggregateArgs>(args: Subset<T, Inventory_itemsAggregateArgs>): Prisma.PrismaPromise<GetInventory_itemsAggregateType<T>>

    /**
     * Group by Inventory_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends inventory_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inventory_itemsGroupByArgs['orderBy'] }
        : { orderBy?: inventory_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, inventory_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventory_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inventory_items model
   */
  readonly fields: inventory_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inventory_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inventory_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the inventory_items model
   */
  interface inventory_itemsFieldRefs {
    readonly id: FieldRef<"inventory_items", 'String'>
    readonly code_cliche: FieldRef<"inventory_items", 'String'>
    readonly code_forme: FieldRef<"inventory_items", 'String'>
    readonly machine: FieldRef<"inventory_items", 'String'>
    readonly reference: FieldRef<"inventory_items", 'String'>
    readonly client: FieldRef<"inventory_items", 'String'>
    readonly element: FieldRef<"inventory_items", 'String'>
    readonly supplier_cliche: FieldRef<"inventory_items", 'String'>
    readonly supplier_forme: FieldRef<"inventory_items", 'String'>
    readonly poses: FieldRef<"inventory_items", 'Int'>
    readonly date_creation: FieldRef<"inventory_items", 'String'>
    readonly date_creation_cliche: FieldRef<"inventory_items", 'String'>
    readonly is_ordered_cliche: FieldRef<"inventory_items", 'Boolean'>
    readonly date_order_cliche: FieldRef<"inventory_items", 'String'>
    readonly date_expected_cliche: FieldRef<"inventory_items", 'String'>
    readonly date_delivery_cliche: FieldRef<"inventory_items", 'String'>
    readonly date_creation_forme: FieldRef<"inventory_items", 'String'>
    readonly is_ordered_forme: FieldRef<"inventory_items", 'Boolean'>
    readonly date_order_forme: FieldRef<"inventory_items", 'String'>
    readonly date_expected_forme: FieldRef<"inventory_items", 'String'>
    readonly date_delivery_forme: FieldRef<"inventory_items", 'String'>
    readonly comments: FieldRef<"inventory_items", 'String'>
    readonly non_conformity: FieldRef<"inventory_items", 'String'>
    readonly custom_fields: FieldRef<"inventory_items", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * inventory_items findUnique
   */
  export type inventory_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_items
     */
    select?: inventory_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_items
     */
    omit?: inventory_itemsOmit<ExtArgs> | null
    /**
     * Filter, which inventory_items to fetch.
     */
    where: inventory_itemsWhereUniqueInput
  }

  /**
   * inventory_items findUniqueOrThrow
   */
  export type inventory_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_items
     */
    select?: inventory_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_items
     */
    omit?: inventory_itemsOmit<ExtArgs> | null
    /**
     * Filter, which inventory_items to fetch.
     */
    where: inventory_itemsWhereUniqueInput
  }

  /**
   * inventory_items findFirst
   */
  export type inventory_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_items
     */
    select?: inventory_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_items
     */
    omit?: inventory_itemsOmit<ExtArgs> | null
    /**
     * Filter, which inventory_items to fetch.
     */
    where?: inventory_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventory_items to fetch.
     */
    orderBy?: inventory_itemsOrderByWithRelationInput | inventory_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventory_items.
     */
    cursor?: inventory_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventory_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventory_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventory_items.
     */
    distinct?: Inventory_itemsScalarFieldEnum | Inventory_itemsScalarFieldEnum[]
  }

  /**
   * inventory_items findFirstOrThrow
   */
  export type inventory_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_items
     */
    select?: inventory_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_items
     */
    omit?: inventory_itemsOmit<ExtArgs> | null
    /**
     * Filter, which inventory_items to fetch.
     */
    where?: inventory_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventory_items to fetch.
     */
    orderBy?: inventory_itemsOrderByWithRelationInput | inventory_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventory_items.
     */
    cursor?: inventory_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventory_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventory_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventory_items.
     */
    distinct?: Inventory_itemsScalarFieldEnum | Inventory_itemsScalarFieldEnum[]
  }

  /**
   * inventory_items findMany
   */
  export type inventory_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_items
     */
    select?: inventory_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_items
     */
    omit?: inventory_itemsOmit<ExtArgs> | null
    /**
     * Filter, which inventory_items to fetch.
     */
    where?: inventory_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventory_items to fetch.
     */
    orderBy?: inventory_itemsOrderByWithRelationInput | inventory_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inventory_items.
     */
    cursor?: inventory_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventory_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventory_items.
     */
    skip?: number
    distinct?: Inventory_itemsScalarFieldEnum | Inventory_itemsScalarFieldEnum[]
  }

  /**
   * inventory_items create
   */
  export type inventory_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_items
     */
    select?: inventory_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_items
     */
    omit?: inventory_itemsOmit<ExtArgs> | null
    /**
     * The data needed to create a inventory_items.
     */
    data: XOR<inventory_itemsCreateInput, inventory_itemsUncheckedCreateInput>
  }

  /**
   * inventory_items createMany
   */
  export type inventory_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventory_items.
     */
    data: inventory_itemsCreateManyInput | inventory_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inventory_items createManyAndReturn
   */
  export type inventory_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_items
     */
    select?: inventory_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_items
     */
    omit?: inventory_itemsOmit<ExtArgs> | null
    /**
     * The data used to create many inventory_items.
     */
    data: inventory_itemsCreateManyInput | inventory_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inventory_items update
   */
  export type inventory_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_items
     */
    select?: inventory_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_items
     */
    omit?: inventory_itemsOmit<ExtArgs> | null
    /**
     * The data needed to update a inventory_items.
     */
    data: XOR<inventory_itemsUpdateInput, inventory_itemsUncheckedUpdateInput>
    /**
     * Choose, which inventory_items to update.
     */
    where: inventory_itemsWhereUniqueInput
  }

  /**
   * inventory_items updateMany
   */
  export type inventory_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inventory_items.
     */
    data: XOR<inventory_itemsUpdateManyMutationInput, inventory_itemsUncheckedUpdateManyInput>
    /**
     * Filter which inventory_items to update
     */
    where?: inventory_itemsWhereInput
    /**
     * Limit how many inventory_items to update.
     */
    limit?: number
  }

  /**
   * inventory_items updateManyAndReturn
   */
  export type inventory_itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_items
     */
    select?: inventory_itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_items
     */
    omit?: inventory_itemsOmit<ExtArgs> | null
    /**
     * The data used to update inventory_items.
     */
    data: XOR<inventory_itemsUpdateManyMutationInput, inventory_itemsUncheckedUpdateManyInput>
    /**
     * Filter which inventory_items to update
     */
    where?: inventory_itemsWhereInput
    /**
     * Limit how many inventory_items to update.
     */
    limit?: number
  }

  /**
   * inventory_items upsert
   */
  export type inventory_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_items
     */
    select?: inventory_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_items
     */
    omit?: inventory_itemsOmit<ExtArgs> | null
    /**
     * The filter to search for the inventory_items to update in case it exists.
     */
    where: inventory_itemsWhereUniqueInput
    /**
     * In case the inventory_items found by the `where` argument doesn't exist, create a new inventory_items with this data.
     */
    create: XOR<inventory_itemsCreateInput, inventory_itemsUncheckedCreateInput>
    /**
     * In case the inventory_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inventory_itemsUpdateInput, inventory_itemsUncheckedUpdateInput>
  }

  /**
   * inventory_items delete
   */
  export type inventory_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_items
     */
    select?: inventory_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_items
     */
    omit?: inventory_itemsOmit<ExtArgs> | null
    /**
     * Filter which inventory_items to delete.
     */
    where: inventory_itemsWhereUniqueInput
  }

  /**
   * inventory_items deleteMany
   */
  export type inventory_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventory_items to delete
     */
    where?: inventory_itemsWhereInput
    /**
     * Limit how many inventory_items to delete.
     */
    limit?: number
  }

  /**
   * inventory_items without action
   */
  export type inventory_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_items
     */
    select?: inventory_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_items
     */
    omit?: inventory_itemsOmit<ExtArgs> | null
  }


  /**
   * Model otg_repairs
   */

  export type AggregateOtg_repairs = {
    _count: Otg_repairsCountAggregateOutputType | null
    _min: Otg_repairsMinAggregateOutputType | null
    _max: Otg_repairsMaxAggregateOutputType | null
  }

  export type Otg_repairsMinAggregateOutputType = {
    id: string | null
    type: string | null
    linked_code: string | null
    conducteur: string | null
    machine: string | null
    etat: string | null
    repair_kind: string | null
    supplier: string | null
    declaration_date: string | null
    repair_date: string | null
    problem_description: string | null
    corrective_action: string | null
    status: string | null
  }

  export type Otg_repairsMaxAggregateOutputType = {
    id: string | null
    type: string | null
    linked_code: string | null
    conducteur: string | null
    machine: string | null
    etat: string | null
    repair_kind: string | null
    supplier: string | null
    declaration_date: string | null
    repair_date: string | null
    problem_description: string | null
    corrective_action: string | null
    status: string | null
  }

  export type Otg_repairsCountAggregateOutputType = {
    id: number
    type: number
    linked_code: number
    conducteur: number
    machine: number
    etat: number
    repair_kind: number
    supplier: number
    declaration_date: number
    repair_date: number
    problem_description: number
    corrective_action: number
    status: number
    _all: number
  }


  export type Otg_repairsMinAggregateInputType = {
    id?: true
    type?: true
    linked_code?: true
    conducteur?: true
    machine?: true
    etat?: true
    repair_kind?: true
    supplier?: true
    declaration_date?: true
    repair_date?: true
    problem_description?: true
    corrective_action?: true
    status?: true
  }

  export type Otg_repairsMaxAggregateInputType = {
    id?: true
    type?: true
    linked_code?: true
    conducteur?: true
    machine?: true
    etat?: true
    repair_kind?: true
    supplier?: true
    declaration_date?: true
    repair_date?: true
    problem_description?: true
    corrective_action?: true
    status?: true
  }

  export type Otg_repairsCountAggregateInputType = {
    id?: true
    type?: true
    linked_code?: true
    conducteur?: true
    machine?: true
    etat?: true
    repair_kind?: true
    supplier?: true
    declaration_date?: true
    repair_date?: true
    problem_description?: true
    corrective_action?: true
    status?: true
    _all?: true
  }

  export type Otg_repairsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which otg_repairs to aggregate.
     */
    where?: otg_repairsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otg_repairs to fetch.
     */
    orderBy?: otg_repairsOrderByWithRelationInput | otg_repairsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: otg_repairsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otg_repairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otg_repairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned otg_repairs
    **/
    _count?: true | Otg_repairsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Otg_repairsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Otg_repairsMaxAggregateInputType
  }

  export type GetOtg_repairsAggregateType<T extends Otg_repairsAggregateArgs> = {
        [P in keyof T & keyof AggregateOtg_repairs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtg_repairs[P]>
      : GetScalarType<T[P], AggregateOtg_repairs[P]>
  }




  export type otg_repairsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: otg_repairsWhereInput
    orderBy?: otg_repairsOrderByWithAggregationInput | otg_repairsOrderByWithAggregationInput[]
    by: Otg_repairsScalarFieldEnum[] | Otg_repairsScalarFieldEnum
    having?: otg_repairsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Otg_repairsCountAggregateInputType | true
    _min?: Otg_repairsMinAggregateInputType
    _max?: Otg_repairsMaxAggregateInputType
  }

  export type Otg_repairsGroupByOutputType = {
    id: string
    type: string | null
    linked_code: string | null
    conducteur: string | null
    machine: string | null
    etat: string | null
    repair_kind: string | null
    supplier: string | null
    declaration_date: string | null
    repair_date: string | null
    problem_description: string | null
    corrective_action: string | null
    status: string | null
    _count: Otg_repairsCountAggregateOutputType | null
    _min: Otg_repairsMinAggregateOutputType | null
    _max: Otg_repairsMaxAggregateOutputType | null
  }

  type GetOtg_repairsGroupByPayload<T extends otg_repairsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Otg_repairsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Otg_repairsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Otg_repairsGroupByOutputType[P]>
            : GetScalarType<T[P], Otg_repairsGroupByOutputType[P]>
        }
      >
    >


  export type otg_repairsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    linked_code?: boolean
    conducteur?: boolean
    machine?: boolean
    etat?: boolean
    repair_kind?: boolean
    supplier?: boolean
    declaration_date?: boolean
    repair_date?: boolean
    problem_description?: boolean
    corrective_action?: boolean
    status?: boolean
  }, ExtArgs["result"]["otg_repairs"]>

  export type otg_repairsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    linked_code?: boolean
    conducteur?: boolean
    machine?: boolean
    etat?: boolean
    repair_kind?: boolean
    supplier?: boolean
    declaration_date?: boolean
    repair_date?: boolean
    problem_description?: boolean
    corrective_action?: boolean
    status?: boolean
  }, ExtArgs["result"]["otg_repairs"]>

  export type otg_repairsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    linked_code?: boolean
    conducteur?: boolean
    machine?: boolean
    etat?: boolean
    repair_kind?: boolean
    supplier?: boolean
    declaration_date?: boolean
    repair_date?: boolean
    problem_description?: boolean
    corrective_action?: boolean
    status?: boolean
  }, ExtArgs["result"]["otg_repairs"]>

  export type otg_repairsSelectScalar = {
    id?: boolean
    type?: boolean
    linked_code?: boolean
    conducteur?: boolean
    machine?: boolean
    etat?: boolean
    repair_kind?: boolean
    supplier?: boolean
    declaration_date?: boolean
    repair_date?: boolean
    problem_description?: boolean
    corrective_action?: boolean
    status?: boolean
  }

  export type otg_repairsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "linked_code" | "conducteur" | "machine" | "etat" | "repair_kind" | "supplier" | "declaration_date" | "repair_date" | "problem_description" | "corrective_action" | "status", ExtArgs["result"]["otg_repairs"]>

  export type $otg_repairsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "otg_repairs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string | null
      linked_code: string | null
      conducteur: string | null
      machine: string | null
      etat: string | null
      repair_kind: string | null
      supplier: string | null
      declaration_date: string | null
      repair_date: string | null
      problem_description: string | null
      corrective_action: string | null
      status: string | null
    }, ExtArgs["result"]["otg_repairs"]>
    composites: {}
  }

  type otg_repairsGetPayload<S extends boolean | null | undefined | otg_repairsDefaultArgs> = $Result.GetResult<Prisma.$otg_repairsPayload, S>

  type otg_repairsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<otg_repairsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Otg_repairsCountAggregateInputType | true
    }

  export interface otg_repairsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['otg_repairs'], meta: { name: 'otg_repairs' } }
    /**
     * Find zero or one Otg_repairs that matches the filter.
     * @param {otg_repairsFindUniqueArgs} args - Arguments to find a Otg_repairs
     * @example
     * // Get one Otg_repairs
     * const otg_repairs = await prisma.otg_repairs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends otg_repairsFindUniqueArgs>(args: SelectSubset<T, otg_repairsFindUniqueArgs<ExtArgs>>): Prisma__otg_repairsClient<$Result.GetResult<Prisma.$otg_repairsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Otg_repairs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {otg_repairsFindUniqueOrThrowArgs} args - Arguments to find a Otg_repairs
     * @example
     * // Get one Otg_repairs
     * const otg_repairs = await prisma.otg_repairs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends otg_repairsFindUniqueOrThrowArgs>(args: SelectSubset<T, otg_repairsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__otg_repairsClient<$Result.GetResult<Prisma.$otg_repairsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otg_repairs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otg_repairsFindFirstArgs} args - Arguments to find a Otg_repairs
     * @example
     * // Get one Otg_repairs
     * const otg_repairs = await prisma.otg_repairs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends otg_repairsFindFirstArgs>(args?: SelectSubset<T, otg_repairsFindFirstArgs<ExtArgs>>): Prisma__otg_repairsClient<$Result.GetResult<Prisma.$otg_repairsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otg_repairs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otg_repairsFindFirstOrThrowArgs} args - Arguments to find a Otg_repairs
     * @example
     * // Get one Otg_repairs
     * const otg_repairs = await prisma.otg_repairs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends otg_repairsFindFirstOrThrowArgs>(args?: SelectSubset<T, otg_repairsFindFirstOrThrowArgs<ExtArgs>>): Prisma__otg_repairsClient<$Result.GetResult<Prisma.$otg_repairsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Otg_repairs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otg_repairsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Otg_repairs
     * const otg_repairs = await prisma.otg_repairs.findMany()
     * 
     * // Get first 10 Otg_repairs
     * const otg_repairs = await prisma.otg_repairs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otg_repairsWithIdOnly = await prisma.otg_repairs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends otg_repairsFindManyArgs>(args?: SelectSubset<T, otg_repairsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otg_repairsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Otg_repairs.
     * @param {otg_repairsCreateArgs} args - Arguments to create a Otg_repairs.
     * @example
     * // Create one Otg_repairs
     * const Otg_repairs = await prisma.otg_repairs.create({
     *   data: {
     *     // ... data to create a Otg_repairs
     *   }
     * })
     * 
     */
    create<T extends otg_repairsCreateArgs>(args: SelectSubset<T, otg_repairsCreateArgs<ExtArgs>>): Prisma__otg_repairsClient<$Result.GetResult<Prisma.$otg_repairsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Otg_repairs.
     * @param {otg_repairsCreateManyArgs} args - Arguments to create many Otg_repairs.
     * @example
     * // Create many Otg_repairs
     * const otg_repairs = await prisma.otg_repairs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends otg_repairsCreateManyArgs>(args?: SelectSubset<T, otg_repairsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Otg_repairs and returns the data saved in the database.
     * @param {otg_repairsCreateManyAndReturnArgs} args - Arguments to create many Otg_repairs.
     * @example
     * // Create many Otg_repairs
     * const otg_repairs = await prisma.otg_repairs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Otg_repairs and only return the `id`
     * const otg_repairsWithIdOnly = await prisma.otg_repairs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends otg_repairsCreateManyAndReturnArgs>(args?: SelectSubset<T, otg_repairsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otg_repairsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Otg_repairs.
     * @param {otg_repairsDeleteArgs} args - Arguments to delete one Otg_repairs.
     * @example
     * // Delete one Otg_repairs
     * const Otg_repairs = await prisma.otg_repairs.delete({
     *   where: {
     *     // ... filter to delete one Otg_repairs
     *   }
     * })
     * 
     */
    delete<T extends otg_repairsDeleteArgs>(args: SelectSubset<T, otg_repairsDeleteArgs<ExtArgs>>): Prisma__otg_repairsClient<$Result.GetResult<Prisma.$otg_repairsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Otg_repairs.
     * @param {otg_repairsUpdateArgs} args - Arguments to update one Otg_repairs.
     * @example
     * // Update one Otg_repairs
     * const otg_repairs = await prisma.otg_repairs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends otg_repairsUpdateArgs>(args: SelectSubset<T, otg_repairsUpdateArgs<ExtArgs>>): Prisma__otg_repairsClient<$Result.GetResult<Prisma.$otg_repairsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Otg_repairs.
     * @param {otg_repairsDeleteManyArgs} args - Arguments to filter Otg_repairs to delete.
     * @example
     * // Delete a few Otg_repairs
     * const { count } = await prisma.otg_repairs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends otg_repairsDeleteManyArgs>(args?: SelectSubset<T, otg_repairsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otg_repairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otg_repairsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Otg_repairs
     * const otg_repairs = await prisma.otg_repairs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends otg_repairsUpdateManyArgs>(args: SelectSubset<T, otg_repairsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otg_repairs and returns the data updated in the database.
     * @param {otg_repairsUpdateManyAndReturnArgs} args - Arguments to update many Otg_repairs.
     * @example
     * // Update many Otg_repairs
     * const otg_repairs = await prisma.otg_repairs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Otg_repairs and only return the `id`
     * const otg_repairsWithIdOnly = await prisma.otg_repairs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends otg_repairsUpdateManyAndReturnArgs>(args: SelectSubset<T, otg_repairsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otg_repairsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Otg_repairs.
     * @param {otg_repairsUpsertArgs} args - Arguments to update or create a Otg_repairs.
     * @example
     * // Update or create a Otg_repairs
     * const otg_repairs = await prisma.otg_repairs.upsert({
     *   create: {
     *     // ... data to create a Otg_repairs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Otg_repairs we want to update
     *   }
     * })
     */
    upsert<T extends otg_repairsUpsertArgs>(args: SelectSubset<T, otg_repairsUpsertArgs<ExtArgs>>): Prisma__otg_repairsClient<$Result.GetResult<Prisma.$otg_repairsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Otg_repairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otg_repairsCountArgs} args - Arguments to filter Otg_repairs to count.
     * @example
     * // Count the number of Otg_repairs
     * const count = await prisma.otg_repairs.count({
     *   where: {
     *     // ... the filter for the Otg_repairs we want to count
     *   }
     * })
    **/
    count<T extends otg_repairsCountArgs>(
      args?: Subset<T, otg_repairsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Otg_repairsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Otg_repairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Otg_repairsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Otg_repairsAggregateArgs>(args: Subset<T, Otg_repairsAggregateArgs>): Prisma.PrismaPromise<GetOtg_repairsAggregateType<T>>

    /**
     * Group by Otg_repairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otg_repairsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends otg_repairsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: otg_repairsGroupByArgs['orderBy'] }
        : { orderBy?: otg_repairsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, otg_repairsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtg_repairsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the otg_repairs model
   */
  readonly fields: otg_repairsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for otg_repairs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__otg_repairsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the otg_repairs model
   */
  interface otg_repairsFieldRefs {
    readonly id: FieldRef<"otg_repairs", 'String'>
    readonly type: FieldRef<"otg_repairs", 'String'>
    readonly linked_code: FieldRef<"otg_repairs", 'String'>
    readonly conducteur: FieldRef<"otg_repairs", 'String'>
    readonly machine: FieldRef<"otg_repairs", 'String'>
    readonly etat: FieldRef<"otg_repairs", 'String'>
    readonly repair_kind: FieldRef<"otg_repairs", 'String'>
    readonly supplier: FieldRef<"otg_repairs", 'String'>
    readonly declaration_date: FieldRef<"otg_repairs", 'String'>
    readonly repair_date: FieldRef<"otg_repairs", 'String'>
    readonly problem_description: FieldRef<"otg_repairs", 'String'>
    readonly corrective_action: FieldRef<"otg_repairs", 'String'>
    readonly status: FieldRef<"otg_repairs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * otg_repairs findUnique
   */
  export type otg_repairsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otg_repairs
     */
    select?: otg_repairsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otg_repairs
     */
    omit?: otg_repairsOmit<ExtArgs> | null
    /**
     * Filter, which otg_repairs to fetch.
     */
    where: otg_repairsWhereUniqueInput
  }

  /**
   * otg_repairs findUniqueOrThrow
   */
  export type otg_repairsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otg_repairs
     */
    select?: otg_repairsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otg_repairs
     */
    omit?: otg_repairsOmit<ExtArgs> | null
    /**
     * Filter, which otg_repairs to fetch.
     */
    where: otg_repairsWhereUniqueInput
  }

  /**
   * otg_repairs findFirst
   */
  export type otg_repairsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otg_repairs
     */
    select?: otg_repairsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otg_repairs
     */
    omit?: otg_repairsOmit<ExtArgs> | null
    /**
     * Filter, which otg_repairs to fetch.
     */
    where?: otg_repairsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otg_repairs to fetch.
     */
    orderBy?: otg_repairsOrderByWithRelationInput | otg_repairsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for otg_repairs.
     */
    cursor?: otg_repairsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otg_repairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otg_repairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of otg_repairs.
     */
    distinct?: Otg_repairsScalarFieldEnum | Otg_repairsScalarFieldEnum[]
  }

  /**
   * otg_repairs findFirstOrThrow
   */
  export type otg_repairsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otg_repairs
     */
    select?: otg_repairsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otg_repairs
     */
    omit?: otg_repairsOmit<ExtArgs> | null
    /**
     * Filter, which otg_repairs to fetch.
     */
    where?: otg_repairsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otg_repairs to fetch.
     */
    orderBy?: otg_repairsOrderByWithRelationInput | otg_repairsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for otg_repairs.
     */
    cursor?: otg_repairsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otg_repairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otg_repairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of otg_repairs.
     */
    distinct?: Otg_repairsScalarFieldEnum | Otg_repairsScalarFieldEnum[]
  }

  /**
   * otg_repairs findMany
   */
  export type otg_repairsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otg_repairs
     */
    select?: otg_repairsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otg_repairs
     */
    omit?: otg_repairsOmit<ExtArgs> | null
    /**
     * Filter, which otg_repairs to fetch.
     */
    where?: otg_repairsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otg_repairs to fetch.
     */
    orderBy?: otg_repairsOrderByWithRelationInput | otg_repairsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing otg_repairs.
     */
    cursor?: otg_repairsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otg_repairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otg_repairs.
     */
    skip?: number
    distinct?: Otg_repairsScalarFieldEnum | Otg_repairsScalarFieldEnum[]
  }

  /**
   * otg_repairs create
   */
  export type otg_repairsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otg_repairs
     */
    select?: otg_repairsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otg_repairs
     */
    omit?: otg_repairsOmit<ExtArgs> | null
    /**
     * The data needed to create a otg_repairs.
     */
    data: XOR<otg_repairsCreateInput, otg_repairsUncheckedCreateInput>
  }

  /**
   * otg_repairs createMany
   */
  export type otg_repairsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many otg_repairs.
     */
    data: otg_repairsCreateManyInput | otg_repairsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * otg_repairs createManyAndReturn
   */
  export type otg_repairsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otg_repairs
     */
    select?: otg_repairsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the otg_repairs
     */
    omit?: otg_repairsOmit<ExtArgs> | null
    /**
     * The data used to create many otg_repairs.
     */
    data: otg_repairsCreateManyInput | otg_repairsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * otg_repairs update
   */
  export type otg_repairsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otg_repairs
     */
    select?: otg_repairsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otg_repairs
     */
    omit?: otg_repairsOmit<ExtArgs> | null
    /**
     * The data needed to update a otg_repairs.
     */
    data: XOR<otg_repairsUpdateInput, otg_repairsUncheckedUpdateInput>
    /**
     * Choose, which otg_repairs to update.
     */
    where: otg_repairsWhereUniqueInput
  }

  /**
   * otg_repairs updateMany
   */
  export type otg_repairsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update otg_repairs.
     */
    data: XOR<otg_repairsUpdateManyMutationInput, otg_repairsUncheckedUpdateManyInput>
    /**
     * Filter which otg_repairs to update
     */
    where?: otg_repairsWhereInput
    /**
     * Limit how many otg_repairs to update.
     */
    limit?: number
  }

  /**
   * otg_repairs updateManyAndReturn
   */
  export type otg_repairsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otg_repairs
     */
    select?: otg_repairsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the otg_repairs
     */
    omit?: otg_repairsOmit<ExtArgs> | null
    /**
     * The data used to update otg_repairs.
     */
    data: XOR<otg_repairsUpdateManyMutationInput, otg_repairsUncheckedUpdateManyInput>
    /**
     * Filter which otg_repairs to update
     */
    where?: otg_repairsWhereInput
    /**
     * Limit how many otg_repairs to update.
     */
    limit?: number
  }

  /**
   * otg_repairs upsert
   */
  export type otg_repairsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otg_repairs
     */
    select?: otg_repairsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otg_repairs
     */
    omit?: otg_repairsOmit<ExtArgs> | null
    /**
     * The filter to search for the otg_repairs to update in case it exists.
     */
    where: otg_repairsWhereUniqueInput
    /**
     * In case the otg_repairs found by the `where` argument doesn't exist, create a new otg_repairs with this data.
     */
    create: XOR<otg_repairsCreateInput, otg_repairsUncheckedCreateInput>
    /**
     * In case the otg_repairs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<otg_repairsUpdateInput, otg_repairsUncheckedUpdateInput>
  }

  /**
   * otg_repairs delete
   */
  export type otg_repairsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otg_repairs
     */
    select?: otg_repairsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otg_repairs
     */
    omit?: otg_repairsOmit<ExtArgs> | null
    /**
     * Filter which otg_repairs to delete.
     */
    where: otg_repairsWhereUniqueInput
  }

  /**
   * otg_repairs deleteMany
   */
  export type otg_repairsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which otg_repairs to delete
     */
    where?: otg_repairsWhereInput
    /**
     * Limit how many otg_repairs to delete.
     */
    limit?: number
  }

  /**
   * otg_repairs without action
   */
  export type otg_repairsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otg_repairs
     */
    select?: otg_repairsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otg_repairs
     */
    omit?: otg_repairsOmit<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    password: string | null
    photo: string | null
    role: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    password: string | null
    photo: string | null
    role: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    username: number
    password: number
    photo: number
    role: number
    permissions: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    photo?: true
    role?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    photo?: true
    role?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    photo?: true
    role?: true
    permissions?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    name: string | null
    username: string | null
    password: string | null
    photo: string | null
    role: string | null
    permissions: JsonValue | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    photo?: boolean
    role?: boolean
    permissions?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    photo?: boolean
    role?: boolean
    permissions?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    photo?: boolean
    role?: boolean
    permissions?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    photo?: boolean
    role?: boolean
    permissions?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "password" | "photo" | "role" | "permissions", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      username: string | null
      password: string | null
      photo: string | null
      role: string | null
      permissions: Prisma.JsonValue | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly photo: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly permissions: FieldRef<"users", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
  }


  /**
   * Model app_config
   */

  export type AggregateApp_config = {
    _count: App_configCountAggregateOutputType | null
    _min: App_configMinAggregateOutputType | null
    _max: App_configMaxAggregateOutputType | null
  }

  export type App_configMinAggregateOutputType = {
    id: string | null
  }

  export type App_configMaxAggregateOutputType = {
    id: string | null
  }

  export type App_configCountAggregateOutputType = {
    id: number
    data: number
    _all: number
  }


  export type App_configMinAggregateInputType = {
    id?: true
  }

  export type App_configMaxAggregateInputType = {
    id?: true
  }

  export type App_configCountAggregateInputType = {
    id?: true
    data?: true
    _all?: true
  }

  export type App_configAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which app_config to aggregate.
     */
    where?: app_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of app_configs to fetch.
     */
    orderBy?: app_configOrderByWithRelationInput | app_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: app_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` app_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` app_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned app_configs
    **/
    _count?: true | App_configCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: App_configMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: App_configMaxAggregateInputType
  }

  export type GetApp_configAggregateType<T extends App_configAggregateArgs> = {
        [P in keyof T & keyof AggregateApp_config]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApp_config[P]>
      : GetScalarType<T[P], AggregateApp_config[P]>
  }




  export type app_configGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: app_configWhereInput
    orderBy?: app_configOrderByWithAggregationInput | app_configOrderByWithAggregationInput[]
    by: App_configScalarFieldEnum[] | App_configScalarFieldEnum
    having?: app_configScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: App_configCountAggregateInputType | true
    _min?: App_configMinAggregateInputType
    _max?: App_configMaxAggregateInputType
  }

  export type App_configGroupByOutputType = {
    id: string
    data: JsonValue | null
    _count: App_configCountAggregateOutputType | null
    _min: App_configMinAggregateOutputType | null
    _max: App_configMaxAggregateOutputType | null
  }

  type GetApp_configGroupByPayload<T extends app_configGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<App_configGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof App_configGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], App_configGroupByOutputType[P]>
            : GetScalarType<T[P], App_configGroupByOutputType[P]>
        }
      >
    >


  export type app_configSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
  }, ExtArgs["result"]["app_config"]>

  export type app_configSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
  }, ExtArgs["result"]["app_config"]>

  export type app_configSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
  }, ExtArgs["result"]["app_config"]>

  export type app_configSelectScalar = {
    id?: boolean
    data?: boolean
  }

  export type app_configOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data", ExtArgs["result"]["app_config"]>

  export type $app_configPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "app_config"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      data: Prisma.JsonValue | null
    }, ExtArgs["result"]["app_config"]>
    composites: {}
  }

  type app_configGetPayload<S extends boolean | null | undefined | app_configDefaultArgs> = $Result.GetResult<Prisma.$app_configPayload, S>

  type app_configCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<app_configFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: App_configCountAggregateInputType | true
    }

  export interface app_configDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['app_config'], meta: { name: 'app_config' } }
    /**
     * Find zero or one App_config that matches the filter.
     * @param {app_configFindUniqueArgs} args - Arguments to find a App_config
     * @example
     * // Get one App_config
     * const app_config = await prisma.app_config.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends app_configFindUniqueArgs>(args: SelectSubset<T, app_configFindUniqueArgs<ExtArgs>>): Prisma__app_configClient<$Result.GetResult<Prisma.$app_configPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one App_config that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {app_configFindUniqueOrThrowArgs} args - Arguments to find a App_config
     * @example
     * // Get one App_config
     * const app_config = await prisma.app_config.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends app_configFindUniqueOrThrowArgs>(args: SelectSubset<T, app_configFindUniqueOrThrowArgs<ExtArgs>>): Prisma__app_configClient<$Result.GetResult<Prisma.$app_configPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first App_config that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {app_configFindFirstArgs} args - Arguments to find a App_config
     * @example
     * // Get one App_config
     * const app_config = await prisma.app_config.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends app_configFindFirstArgs>(args?: SelectSubset<T, app_configFindFirstArgs<ExtArgs>>): Prisma__app_configClient<$Result.GetResult<Prisma.$app_configPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first App_config that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {app_configFindFirstOrThrowArgs} args - Arguments to find a App_config
     * @example
     * // Get one App_config
     * const app_config = await prisma.app_config.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends app_configFindFirstOrThrowArgs>(args?: SelectSubset<T, app_configFindFirstOrThrowArgs<ExtArgs>>): Prisma__app_configClient<$Result.GetResult<Prisma.$app_configPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more App_configs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {app_configFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all App_configs
     * const app_configs = await prisma.app_config.findMany()
     * 
     * // Get first 10 App_configs
     * const app_configs = await prisma.app_config.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const app_configWithIdOnly = await prisma.app_config.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends app_configFindManyArgs>(args?: SelectSubset<T, app_configFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$app_configPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a App_config.
     * @param {app_configCreateArgs} args - Arguments to create a App_config.
     * @example
     * // Create one App_config
     * const App_config = await prisma.app_config.create({
     *   data: {
     *     // ... data to create a App_config
     *   }
     * })
     * 
     */
    create<T extends app_configCreateArgs>(args: SelectSubset<T, app_configCreateArgs<ExtArgs>>): Prisma__app_configClient<$Result.GetResult<Prisma.$app_configPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many App_configs.
     * @param {app_configCreateManyArgs} args - Arguments to create many App_configs.
     * @example
     * // Create many App_configs
     * const app_config = await prisma.app_config.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends app_configCreateManyArgs>(args?: SelectSubset<T, app_configCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many App_configs and returns the data saved in the database.
     * @param {app_configCreateManyAndReturnArgs} args - Arguments to create many App_configs.
     * @example
     * // Create many App_configs
     * const app_config = await prisma.app_config.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many App_configs and only return the `id`
     * const app_configWithIdOnly = await prisma.app_config.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends app_configCreateManyAndReturnArgs>(args?: SelectSubset<T, app_configCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$app_configPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a App_config.
     * @param {app_configDeleteArgs} args - Arguments to delete one App_config.
     * @example
     * // Delete one App_config
     * const App_config = await prisma.app_config.delete({
     *   where: {
     *     // ... filter to delete one App_config
     *   }
     * })
     * 
     */
    delete<T extends app_configDeleteArgs>(args: SelectSubset<T, app_configDeleteArgs<ExtArgs>>): Prisma__app_configClient<$Result.GetResult<Prisma.$app_configPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one App_config.
     * @param {app_configUpdateArgs} args - Arguments to update one App_config.
     * @example
     * // Update one App_config
     * const app_config = await prisma.app_config.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends app_configUpdateArgs>(args: SelectSubset<T, app_configUpdateArgs<ExtArgs>>): Prisma__app_configClient<$Result.GetResult<Prisma.$app_configPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more App_configs.
     * @param {app_configDeleteManyArgs} args - Arguments to filter App_configs to delete.
     * @example
     * // Delete a few App_configs
     * const { count } = await prisma.app_config.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends app_configDeleteManyArgs>(args?: SelectSubset<T, app_configDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more App_configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {app_configUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many App_configs
     * const app_config = await prisma.app_config.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends app_configUpdateManyArgs>(args: SelectSubset<T, app_configUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more App_configs and returns the data updated in the database.
     * @param {app_configUpdateManyAndReturnArgs} args - Arguments to update many App_configs.
     * @example
     * // Update many App_configs
     * const app_config = await prisma.app_config.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more App_configs and only return the `id`
     * const app_configWithIdOnly = await prisma.app_config.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends app_configUpdateManyAndReturnArgs>(args: SelectSubset<T, app_configUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$app_configPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one App_config.
     * @param {app_configUpsertArgs} args - Arguments to update or create a App_config.
     * @example
     * // Update or create a App_config
     * const app_config = await prisma.app_config.upsert({
     *   create: {
     *     // ... data to create a App_config
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the App_config we want to update
     *   }
     * })
     */
    upsert<T extends app_configUpsertArgs>(args: SelectSubset<T, app_configUpsertArgs<ExtArgs>>): Prisma__app_configClient<$Result.GetResult<Prisma.$app_configPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of App_configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {app_configCountArgs} args - Arguments to filter App_configs to count.
     * @example
     * // Count the number of App_configs
     * const count = await prisma.app_config.count({
     *   where: {
     *     // ... the filter for the App_configs we want to count
     *   }
     * })
    **/
    count<T extends app_configCountArgs>(
      args?: Subset<T, app_configCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], App_configCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a App_config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {App_configAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends App_configAggregateArgs>(args: Subset<T, App_configAggregateArgs>): Prisma.PrismaPromise<GetApp_configAggregateType<T>>

    /**
     * Group by App_config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {app_configGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends app_configGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: app_configGroupByArgs['orderBy'] }
        : { orderBy?: app_configGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, app_configGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApp_configGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the app_config model
   */
  readonly fields: app_configFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for app_config.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__app_configClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the app_config model
   */
  interface app_configFieldRefs {
    readonly id: FieldRef<"app_config", 'String'>
    readonly data: FieldRef<"app_config", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * app_config findUnique
   */
  export type app_configFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_config
     */
    select?: app_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_config
     */
    omit?: app_configOmit<ExtArgs> | null
    /**
     * Filter, which app_config to fetch.
     */
    where: app_configWhereUniqueInput
  }

  /**
   * app_config findUniqueOrThrow
   */
  export type app_configFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_config
     */
    select?: app_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_config
     */
    omit?: app_configOmit<ExtArgs> | null
    /**
     * Filter, which app_config to fetch.
     */
    where: app_configWhereUniqueInput
  }

  /**
   * app_config findFirst
   */
  export type app_configFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_config
     */
    select?: app_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_config
     */
    omit?: app_configOmit<ExtArgs> | null
    /**
     * Filter, which app_config to fetch.
     */
    where?: app_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of app_configs to fetch.
     */
    orderBy?: app_configOrderByWithRelationInput | app_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for app_configs.
     */
    cursor?: app_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` app_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` app_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of app_configs.
     */
    distinct?: App_configScalarFieldEnum | App_configScalarFieldEnum[]
  }

  /**
   * app_config findFirstOrThrow
   */
  export type app_configFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_config
     */
    select?: app_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_config
     */
    omit?: app_configOmit<ExtArgs> | null
    /**
     * Filter, which app_config to fetch.
     */
    where?: app_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of app_configs to fetch.
     */
    orderBy?: app_configOrderByWithRelationInput | app_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for app_configs.
     */
    cursor?: app_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` app_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` app_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of app_configs.
     */
    distinct?: App_configScalarFieldEnum | App_configScalarFieldEnum[]
  }

  /**
   * app_config findMany
   */
  export type app_configFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_config
     */
    select?: app_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_config
     */
    omit?: app_configOmit<ExtArgs> | null
    /**
     * Filter, which app_configs to fetch.
     */
    where?: app_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of app_configs to fetch.
     */
    orderBy?: app_configOrderByWithRelationInput | app_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing app_configs.
     */
    cursor?: app_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` app_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` app_configs.
     */
    skip?: number
    distinct?: App_configScalarFieldEnum | App_configScalarFieldEnum[]
  }

  /**
   * app_config create
   */
  export type app_configCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_config
     */
    select?: app_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_config
     */
    omit?: app_configOmit<ExtArgs> | null
    /**
     * The data needed to create a app_config.
     */
    data: XOR<app_configCreateInput, app_configUncheckedCreateInput>
  }

  /**
   * app_config createMany
   */
  export type app_configCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many app_configs.
     */
    data: app_configCreateManyInput | app_configCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * app_config createManyAndReturn
   */
  export type app_configCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_config
     */
    select?: app_configSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the app_config
     */
    omit?: app_configOmit<ExtArgs> | null
    /**
     * The data used to create many app_configs.
     */
    data: app_configCreateManyInput | app_configCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * app_config update
   */
  export type app_configUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_config
     */
    select?: app_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_config
     */
    omit?: app_configOmit<ExtArgs> | null
    /**
     * The data needed to update a app_config.
     */
    data: XOR<app_configUpdateInput, app_configUncheckedUpdateInput>
    /**
     * Choose, which app_config to update.
     */
    where: app_configWhereUniqueInput
  }

  /**
   * app_config updateMany
   */
  export type app_configUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update app_configs.
     */
    data: XOR<app_configUpdateManyMutationInput, app_configUncheckedUpdateManyInput>
    /**
     * Filter which app_configs to update
     */
    where?: app_configWhereInput
    /**
     * Limit how many app_configs to update.
     */
    limit?: number
  }

  /**
   * app_config updateManyAndReturn
   */
  export type app_configUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_config
     */
    select?: app_configSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the app_config
     */
    omit?: app_configOmit<ExtArgs> | null
    /**
     * The data used to update app_configs.
     */
    data: XOR<app_configUpdateManyMutationInput, app_configUncheckedUpdateManyInput>
    /**
     * Filter which app_configs to update
     */
    where?: app_configWhereInput
    /**
     * Limit how many app_configs to update.
     */
    limit?: number
  }

  /**
   * app_config upsert
   */
  export type app_configUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_config
     */
    select?: app_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_config
     */
    omit?: app_configOmit<ExtArgs> | null
    /**
     * The filter to search for the app_config to update in case it exists.
     */
    where: app_configWhereUniqueInput
    /**
     * In case the app_config found by the `where` argument doesn't exist, create a new app_config with this data.
     */
    create: XOR<app_configCreateInput, app_configUncheckedCreateInput>
    /**
     * In case the app_config was found with the provided `where` argument, update it with this data.
     */
    update: XOR<app_configUpdateInput, app_configUncheckedUpdateInput>
  }

  /**
   * app_config delete
   */
  export type app_configDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_config
     */
    select?: app_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_config
     */
    omit?: app_configOmit<ExtArgs> | null
    /**
     * Filter which app_config to delete.
     */
    where: app_configWhereUniqueInput
  }

  /**
   * app_config deleteMany
   */
  export type app_configDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which app_configs to delete
     */
    where?: app_configWhereInput
    /**
     * Limit how many app_configs to delete.
     */
    limit?: number
  }

  /**
   * app_config without action
   */
  export type app_configDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_config
     */
    select?: app_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_config
     */
    omit?: app_configOmit<ExtArgs> | null
  }


  /**
   * Model app_settings
   */

  export type AggregateApp_settings = {
    _count: App_settingsCountAggregateOutputType | null
    _min: App_settingsMinAggregateOutputType | null
    _max: App_settingsMaxAggregateOutputType | null
  }

  export type App_settingsMinAggregateOutputType = {
    id: string | null
    primary_color: string | null
    secondary_color: string | null
    logo: string | null
    theme: string | null
    language: string | null
    enable_email_alerts: boolean | null
  }

  export type App_settingsMaxAggregateOutputType = {
    id: string | null
    primary_color: string | null
    secondary_color: string | null
    logo: string | null
    theme: string | null
    language: string | null
    enable_email_alerts: boolean | null
  }

  export type App_settingsCountAggregateOutputType = {
    id: number
    primary_color: number
    secondary_color: number
    logo: number
    theme: number
    language: number
    enable_email_alerts: number
    notification_emails: number
    _all: number
  }


  export type App_settingsMinAggregateInputType = {
    id?: true
    primary_color?: true
    secondary_color?: true
    logo?: true
    theme?: true
    language?: true
    enable_email_alerts?: true
  }

  export type App_settingsMaxAggregateInputType = {
    id?: true
    primary_color?: true
    secondary_color?: true
    logo?: true
    theme?: true
    language?: true
    enable_email_alerts?: true
  }

  export type App_settingsCountAggregateInputType = {
    id?: true
    primary_color?: true
    secondary_color?: true
    logo?: true
    theme?: true
    language?: true
    enable_email_alerts?: true
    notification_emails?: true
    _all?: true
  }

  export type App_settingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which app_settings to aggregate.
     */
    where?: app_settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of app_settings to fetch.
     */
    orderBy?: app_settingsOrderByWithRelationInput | app_settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: app_settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` app_settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` app_settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned app_settings
    **/
    _count?: true | App_settingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: App_settingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: App_settingsMaxAggregateInputType
  }

  export type GetApp_settingsAggregateType<T extends App_settingsAggregateArgs> = {
        [P in keyof T & keyof AggregateApp_settings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApp_settings[P]>
      : GetScalarType<T[P], AggregateApp_settings[P]>
  }




  export type app_settingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: app_settingsWhereInput
    orderBy?: app_settingsOrderByWithAggregationInput | app_settingsOrderByWithAggregationInput[]
    by: App_settingsScalarFieldEnum[] | App_settingsScalarFieldEnum
    having?: app_settingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: App_settingsCountAggregateInputType | true
    _min?: App_settingsMinAggregateInputType
    _max?: App_settingsMaxAggregateInputType
  }

  export type App_settingsGroupByOutputType = {
    id: string
    primary_color: string | null
    secondary_color: string | null
    logo: string | null
    theme: string | null
    language: string | null
    enable_email_alerts: boolean | null
    notification_emails: string[]
    _count: App_settingsCountAggregateOutputType | null
    _min: App_settingsMinAggregateOutputType | null
    _max: App_settingsMaxAggregateOutputType | null
  }

  type GetApp_settingsGroupByPayload<T extends app_settingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<App_settingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof App_settingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], App_settingsGroupByOutputType[P]>
            : GetScalarType<T[P], App_settingsGroupByOutputType[P]>
        }
      >
    >


  export type app_settingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    primary_color?: boolean
    secondary_color?: boolean
    logo?: boolean
    theme?: boolean
    language?: boolean
    enable_email_alerts?: boolean
    notification_emails?: boolean
  }, ExtArgs["result"]["app_settings"]>

  export type app_settingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    primary_color?: boolean
    secondary_color?: boolean
    logo?: boolean
    theme?: boolean
    language?: boolean
    enable_email_alerts?: boolean
    notification_emails?: boolean
  }, ExtArgs["result"]["app_settings"]>

  export type app_settingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    primary_color?: boolean
    secondary_color?: boolean
    logo?: boolean
    theme?: boolean
    language?: boolean
    enable_email_alerts?: boolean
    notification_emails?: boolean
  }, ExtArgs["result"]["app_settings"]>

  export type app_settingsSelectScalar = {
    id?: boolean
    primary_color?: boolean
    secondary_color?: boolean
    logo?: boolean
    theme?: boolean
    language?: boolean
    enable_email_alerts?: boolean
    notification_emails?: boolean
  }

  export type app_settingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "primary_color" | "secondary_color" | "logo" | "theme" | "language" | "enable_email_alerts" | "notification_emails", ExtArgs["result"]["app_settings"]>

  export type $app_settingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "app_settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      primary_color: string | null
      secondary_color: string | null
      logo: string | null
      theme: string | null
      language: string | null
      enable_email_alerts: boolean | null
      notification_emails: string[]
    }, ExtArgs["result"]["app_settings"]>
    composites: {}
  }

  type app_settingsGetPayload<S extends boolean | null | undefined | app_settingsDefaultArgs> = $Result.GetResult<Prisma.$app_settingsPayload, S>

  type app_settingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<app_settingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: App_settingsCountAggregateInputType | true
    }

  export interface app_settingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['app_settings'], meta: { name: 'app_settings' } }
    /**
     * Find zero or one App_settings that matches the filter.
     * @param {app_settingsFindUniqueArgs} args - Arguments to find a App_settings
     * @example
     * // Get one App_settings
     * const app_settings = await prisma.app_settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends app_settingsFindUniqueArgs>(args: SelectSubset<T, app_settingsFindUniqueArgs<ExtArgs>>): Prisma__app_settingsClient<$Result.GetResult<Prisma.$app_settingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one App_settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {app_settingsFindUniqueOrThrowArgs} args - Arguments to find a App_settings
     * @example
     * // Get one App_settings
     * const app_settings = await prisma.app_settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends app_settingsFindUniqueOrThrowArgs>(args: SelectSubset<T, app_settingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__app_settingsClient<$Result.GetResult<Prisma.$app_settingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first App_settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {app_settingsFindFirstArgs} args - Arguments to find a App_settings
     * @example
     * // Get one App_settings
     * const app_settings = await prisma.app_settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends app_settingsFindFirstArgs>(args?: SelectSubset<T, app_settingsFindFirstArgs<ExtArgs>>): Prisma__app_settingsClient<$Result.GetResult<Prisma.$app_settingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first App_settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {app_settingsFindFirstOrThrowArgs} args - Arguments to find a App_settings
     * @example
     * // Get one App_settings
     * const app_settings = await prisma.app_settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends app_settingsFindFirstOrThrowArgs>(args?: SelectSubset<T, app_settingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__app_settingsClient<$Result.GetResult<Prisma.$app_settingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more App_settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {app_settingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all App_settings
     * const app_settings = await prisma.app_settings.findMany()
     * 
     * // Get first 10 App_settings
     * const app_settings = await prisma.app_settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const app_settingsWithIdOnly = await prisma.app_settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends app_settingsFindManyArgs>(args?: SelectSubset<T, app_settingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$app_settingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a App_settings.
     * @param {app_settingsCreateArgs} args - Arguments to create a App_settings.
     * @example
     * // Create one App_settings
     * const App_settings = await prisma.app_settings.create({
     *   data: {
     *     // ... data to create a App_settings
     *   }
     * })
     * 
     */
    create<T extends app_settingsCreateArgs>(args: SelectSubset<T, app_settingsCreateArgs<ExtArgs>>): Prisma__app_settingsClient<$Result.GetResult<Prisma.$app_settingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many App_settings.
     * @param {app_settingsCreateManyArgs} args - Arguments to create many App_settings.
     * @example
     * // Create many App_settings
     * const app_settings = await prisma.app_settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends app_settingsCreateManyArgs>(args?: SelectSubset<T, app_settingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many App_settings and returns the data saved in the database.
     * @param {app_settingsCreateManyAndReturnArgs} args - Arguments to create many App_settings.
     * @example
     * // Create many App_settings
     * const app_settings = await prisma.app_settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many App_settings and only return the `id`
     * const app_settingsWithIdOnly = await prisma.app_settings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends app_settingsCreateManyAndReturnArgs>(args?: SelectSubset<T, app_settingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$app_settingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a App_settings.
     * @param {app_settingsDeleteArgs} args - Arguments to delete one App_settings.
     * @example
     * // Delete one App_settings
     * const App_settings = await prisma.app_settings.delete({
     *   where: {
     *     // ... filter to delete one App_settings
     *   }
     * })
     * 
     */
    delete<T extends app_settingsDeleteArgs>(args: SelectSubset<T, app_settingsDeleteArgs<ExtArgs>>): Prisma__app_settingsClient<$Result.GetResult<Prisma.$app_settingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one App_settings.
     * @param {app_settingsUpdateArgs} args - Arguments to update one App_settings.
     * @example
     * // Update one App_settings
     * const app_settings = await prisma.app_settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends app_settingsUpdateArgs>(args: SelectSubset<T, app_settingsUpdateArgs<ExtArgs>>): Prisma__app_settingsClient<$Result.GetResult<Prisma.$app_settingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more App_settings.
     * @param {app_settingsDeleteManyArgs} args - Arguments to filter App_settings to delete.
     * @example
     * // Delete a few App_settings
     * const { count } = await prisma.app_settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends app_settingsDeleteManyArgs>(args?: SelectSubset<T, app_settingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more App_settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {app_settingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many App_settings
     * const app_settings = await prisma.app_settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends app_settingsUpdateManyArgs>(args: SelectSubset<T, app_settingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more App_settings and returns the data updated in the database.
     * @param {app_settingsUpdateManyAndReturnArgs} args - Arguments to update many App_settings.
     * @example
     * // Update many App_settings
     * const app_settings = await prisma.app_settings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more App_settings and only return the `id`
     * const app_settingsWithIdOnly = await prisma.app_settings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends app_settingsUpdateManyAndReturnArgs>(args: SelectSubset<T, app_settingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$app_settingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one App_settings.
     * @param {app_settingsUpsertArgs} args - Arguments to update or create a App_settings.
     * @example
     * // Update or create a App_settings
     * const app_settings = await prisma.app_settings.upsert({
     *   create: {
     *     // ... data to create a App_settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the App_settings we want to update
     *   }
     * })
     */
    upsert<T extends app_settingsUpsertArgs>(args: SelectSubset<T, app_settingsUpsertArgs<ExtArgs>>): Prisma__app_settingsClient<$Result.GetResult<Prisma.$app_settingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of App_settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {app_settingsCountArgs} args - Arguments to filter App_settings to count.
     * @example
     * // Count the number of App_settings
     * const count = await prisma.app_settings.count({
     *   where: {
     *     // ... the filter for the App_settings we want to count
     *   }
     * })
    **/
    count<T extends app_settingsCountArgs>(
      args?: Subset<T, app_settingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], App_settingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a App_settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {App_settingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends App_settingsAggregateArgs>(args: Subset<T, App_settingsAggregateArgs>): Prisma.PrismaPromise<GetApp_settingsAggregateType<T>>

    /**
     * Group by App_settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {app_settingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends app_settingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: app_settingsGroupByArgs['orderBy'] }
        : { orderBy?: app_settingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, app_settingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApp_settingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the app_settings model
   */
  readonly fields: app_settingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for app_settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__app_settingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the app_settings model
   */
  interface app_settingsFieldRefs {
    readonly id: FieldRef<"app_settings", 'String'>
    readonly primary_color: FieldRef<"app_settings", 'String'>
    readonly secondary_color: FieldRef<"app_settings", 'String'>
    readonly logo: FieldRef<"app_settings", 'String'>
    readonly theme: FieldRef<"app_settings", 'String'>
    readonly language: FieldRef<"app_settings", 'String'>
    readonly enable_email_alerts: FieldRef<"app_settings", 'Boolean'>
    readonly notification_emails: FieldRef<"app_settings", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * app_settings findUnique
   */
  export type app_settingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_settings
     */
    select?: app_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_settings
     */
    omit?: app_settingsOmit<ExtArgs> | null
    /**
     * Filter, which app_settings to fetch.
     */
    where: app_settingsWhereUniqueInput
  }

  /**
   * app_settings findUniqueOrThrow
   */
  export type app_settingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_settings
     */
    select?: app_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_settings
     */
    omit?: app_settingsOmit<ExtArgs> | null
    /**
     * Filter, which app_settings to fetch.
     */
    where: app_settingsWhereUniqueInput
  }

  /**
   * app_settings findFirst
   */
  export type app_settingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_settings
     */
    select?: app_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_settings
     */
    omit?: app_settingsOmit<ExtArgs> | null
    /**
     * Filter, which app_settings to fetch.
     */
    where?: app_settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of app_settings to fetch.
     */
    orderBy?: app_settingsOrderByWithRelationInput | app_settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for app_settings.
     */
    cursor?: app_settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` app_settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` app_settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of app_settings.
     */
    distinct?: App_settingsScalarFieldEnum | App_settingsScalarFieldEnum[]
  }

  /**
   * app_settings findFirstOrThrow
   */
  export type app_settingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_settings
     */
    select?: app_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_settings
     */
    omit?: app_settingsOmit<ExtArgs> | null
    /**
     * Filter, which app_settings to fetch.
     */
    where?: app_settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of app_settings to fetch.
     */
    orderBy?: app_settingsOrderByWithRelationInput | app_settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for app_settings.
     */
    cursor?: app_settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` app_settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` app_settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of app_settings.
     */
    distinct?: App_settingsScalarFieldEnum | App_settingsScalarFieldEnum[]
  }

  /**
   * app_settings findMany
   */
  export type app_settingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_settings
     */
    select?: app_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_settings
     */
    omit?: app_settingsOmit<ExtArgs> | null
    /**
     * Filter, which app_settings to fetch.
     */
    where?: app_settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of app_settings to fetch.
     */
    orderBy?: app_settingsOrderByWithRelationInput | app_settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing app_settings.
     */
    cursor?: app_settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` app_settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` app_settings.
     */
    skip?: number
    distinct?: App_settingsScalarFieldEnum | App_settingsScalarFieldEnum[]
  }

  /**
   * app_settings create
   */
  export type app_settingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_settings
     */
    select?: app_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_settings
     */
    omit?: app_settingsOmit<ExtArgs> | null
    /**
     * The data needed to create a app_settings.
     */
    data: XOR<app_settingsCreateInput, app_settingsUncheckedCreateInput>
  }

  /**
   * app_settings createMany
   */
  export type app_settingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many app_settings.
     */
    data: app_settingsCreateManyInput | app_settingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * app_settings createManyAndReturn
   */
  export type app_settingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_settings
     */
    select?: app_settingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the app_settings
     */
    omit?: app_settingsOmit<ExtArgs> | null
    /**
     * The data used to create many app_settings.
     */
    data: app_settingsCreateManyInput | app_settingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * app_settings update
   */
  export type app_settingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_settings
     */
    select?: app_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_settings
     */
    omit?: app_settingsOmit<ExtArgs> | null
    /**
     * The data needed to update a app_settings.
     */
    data: XOR<app_settingsUpdateInput, app_settingsUncheckedUpdateInput>
    /**
     * Choose, which app_settings to update.
     */
    where: app_settingsWhereUniqueInput
  }

  /**
   * app_settings updateMany
   */
  export type app_settingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update app_settings.
     */
    data: XOR<app_settingsUpdateManyMutationInput, app_settingsUncheckedUpdateManyInput>
    /**
     * Filter which app_settings to update
     */
    where?: app_settingsWhereInput
    /**
     * Limit how many app_settings to update.
     */
    limit?: number
  }

  /**
   * app_settings updateManyAndReturn
   */
  export type app_settingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_settings
     */
    select?: app_settingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the app_settings
     */
    omit?: app_settingsOmit<ExtArgs> | null
    /**
     * The data used to update app_settings.
     */
    data: XOR<app_settingsUpdateManyMutationInput, app_settingsUncheckedUpdateManyInput>
    /**
     * Filter which app_settings to update
     */
    where?: app_settingsWhereInput
    /**
     * Limit how many app_settings to update.
     */
    limit?: number
  }

  /**
   * app_settings upsert
   */
  export type app_settingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_settings
     */
    select?: app_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_settings
     */
    omit?: app_settingsOmit<ExtArgs> | null
    /**
     * The filter to search for the app_settings to update in case it exists.
     */
    where: app_settingsWhereUniqueInput
    /**
     * In case the app_settings found by the `where` argument doesn't exist, create a new app_settings with this data.
     */
    create: XOR<app_settingsCreateInput, app_settingsUncheckedCreateInput>
    /**
     * In case the app_settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<app_settingsUpdateInput, app_settingsUncheckedUpdateInput>
  }

  /**
   * app_settings delete
   */
  export type app_settingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_settings
     */
    select?: app_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_settings
     */
    omit?: app_settingsOmit<ExtArgs> | null
    /**
     * Filter which app_settings to delete.
     */
    where: app_settingsWhereUniqueInput
  }

  /**
   * app_settings deleteMany
   */
  export type app_settingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which app_settings to delete
     */
    where?: app_settingsWhereInput
    /**
     * Limit how many app_settings to delete.
     */
    limit?: number
  }

  /**
   * app_settings without action
   */
  export type app_settingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_settings
     */
    select?: app_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_settings
     */
    omit?: app_settingsOmit<ExtArgs> | null
  }


  /**
   * Model machines
   */

  export type AggregateMachines = {
    _count: MachinesCountAggregateOutputType | null
    _avg: MachinesAvgAggregateOutputType | null
    _sum: MachinesSumAggregateOutputType | null
    _min: MachinesMinAggregateOutputType | null
    _max: MachinesMaxAggregateOutputType | null
  }

  export type MachinesAvgAggregateOutputType = {
    id: number | null
  }

  export type MachinesSumAggregateOutputType = {
    id: number | null
  }

  export type MachinesMinAggregateOutputType = {
    id: number | null
    name: string | null
    color: string | null
  }

  export type MachinesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    color: string | null
  }

  export type MachinesCountAggregateOutputType = {
    id: number
    name: number
    color: number
    _all: number
  }


  export type MachinesAvgAggregateInputType = {
    id?: true
  }

  export type MachinesSumAggregateInputType = {
    id?: true
  }

  export type MachinesMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
  }

  export type MachinesMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
  }

  export type MachinesCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    _all?: true
  }

  export type MachinesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which machines to aggregate.
     */
    where?: machinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of machines to fetch.
     */
    orderBy?: machinesOrderByWithRelationInput | machinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: machinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` machines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` machines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned machines
    **/
    _count?: true | MachinesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MachinesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MachinesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MachinesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MachinesMaxAggregateInputType
  }

  export type GetMachinesAggregateType<T extends MachinesAggregateArgs> = {
        [P in keyof T & keyof AggregateMachines]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMachines[P]>
      : GetScalarType<T[P], AggregateMachines[P]>
  }




  export type machinesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: machinesWhereInput
    orderBy?: machinesOrderByWithAggregationInput | machinesOrderByWithAggregationInput[]
    by: MachinesScalarFieldEnum[] | MachinesScalarFieldEnum
    having?: machinesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MachinesCountAggregateInputType | true
    _avg?: MachinesAvgAggregateInputType
    _sum?: MachinesSumAggregateInputType
    _min?: MachinesMinAggregateInputType
    _max?: MachinesMaxAggregateInputType
  }

  export type MachinesGroupByOutputType = {
    id: number
    name: string
    color: string | null
    _count: MachinesCountAggregateOutputType | null
    _avg: MachinesAvgAggregateOutputType | null
    _sum: MachinesSumAggregateOutputType | null
    _min: MachinesMinAggregateOutputType | null
    _max: MachinesMaxAggregateOutputType | null
  }

  type GetMachinesGroupByPayload<T extends machinesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MachinesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MachinesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MachinesGroupByOutputType[P]>
            : GetScalarType<T[P], MachinesGroupByOutputType[P]>
        }
      >
    >


  export type machinesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
  }, ExtArgs["result"]["machines"]>

  export type machinesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
  }, ExtArgs["result"]["machines"]>

  export type machinesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
  }, ExtArgs["result"]["machines"]>

  export type machinesSelectScalar = {
    id?: boolean
    name?: boolean
    color?: boolean
  }

  export type machinesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "color", ExtArgs["result"]["machines"]>

  export type $machinesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "machines"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      color: string | null
    }, ExtArgs["result"]["machines"]>
    composites: {}
  }

  type machinesGetPayload<S extends boolean | null | undefined | machinesDefaultArgs> = $Result.GetResult<Prisma.$machinesPayload, S>

  type machinesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<machinesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MachinesCountAggregateInputType | true
    }

  export interface machinesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['machines'], meta: { name: 'machines' } }
    /**
     * Find zero or one Machines that matches the filter.
     * @param {machinesFindUniqueArgs} args - Arguments to find a Machines
     * @example
     * // Get one Machines
     * const machines = await prisma.machines.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends machinesFindUniqueArgs>(args: SelectSubset<T, machinesFindUniqueArgs<ExtArgs>>): Prisma__machinesClient<$Result.GetResult<Prisma.$machinesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Machines that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {machinesFindUniqueOrThrowArgs} args - Arguments to find a Machines
     * @example
     * // Get one Machines
     * const machines = await prisma.machines.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends machinesFindUniqueOrThrowArgs>(args: SelectSubset<T, machinesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__machinesClient<$Result.GetResult<Prisma.$machinesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Machines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {machinesFindFirstArgs} args - Arguments to find a Machines
     * @example
     * // Get one Machines
     * const machines = await prisma.machines.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends machinesFindFirstArgs>(args?: SelectSubset<T, machinesFindFirstArgs<ExtArgs>>): Prisma__machinesClient<$Result.GetResult<Prisma.$machinesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Machines that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {machinesFindFirstOrThrowArgs} args - Arguments to find a Machines
     * @example
     * // Get one Machines
     * const machines = await prisma.machines.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends machinesFindFirstOrThrowArgs>(args?: SelectSubset<T, machinesFindFirstOrThrowArgs<ExtArgs>>): Prisma__machinesClient<$Result.GetResult<Prisma.$machinesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Machines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {machinesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Machines
     * const machines = await prisma.machines.findMany()
     * 
     * // Get first 10 Machines
     * const machines = await prisma.machines.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const machinesWithIdOnly = await prisma.machines.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends machinesFindManyArgs>(args?: SelectSubset<T, machinesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$machinesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Machines.
     * @param {machinesCreateArgs} args - Arguments to create a Machines.
     * @example
     * // Create one Machines
     * const Machines = await prisma.machines.create({
     *   data: {
     *     // ... data to create a Machines
     *   }
     * })
     * 
     */
    create<T extends machinesCreateArgs>(args: SelectSubset<T, machinesCreateArgs<ExtArgs>>): Prisma__machinesClient<$Result.GetResult<Prisma.$machinesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Machines.
     * @param {machinesCreateManyArgs} args - Arguments to create many Machines.
     * @example
     * // Create many Machines
     * const machines = await prisma.machines.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends machinesCreateManyArgs>(args?: SelectSubset<T, machinesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Machines and returns the data saved in the database.
     * @param {machinesCreateManyAndReturnArgs} args - Arguments to create many Machines.
     * @example
     * // Create many Machines
     * const machines = await prisma.machines.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Machines and only return the `id`
     * const machinesWithIdOnly = await prisma.machines.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends machinesCreateManyAndReturnArgs>(args?: SelectSubset<T, machinesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$machinesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Machines.
     * @param {machinesDeleteArgs} args - Arguments to delete one Machines.
     * @example
     * // Delete one Machines
     * const Machines = await prisma.machines.delete({
     *   where: {
     *     // ... filter to delete one Machines
     *   }
     * })
     * 
     */
    delete<T extends machinesDeleteArgs>(args: SelectSubset<T, machinesDeleteArgs<ExtArgs>>): Prisma__machinesClient<$Result.GetResult<Prisma.$machinesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Machines.
     * @param {machinesUpdateArgs} args - Arguments to update one Machines.
     * @example
     * // Update one Machines
     * const machines = await prisma.machines.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends machinesUpdateArgs>(args: SelectSubset<T, machinesUpdateArgs<ExtArgs>>): Prisma__machinesClient<$Result.GetResult<Prisma.$machinesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Machines.
     * @param {machinesDeleteManyArgs} args - Arguments to filter Machines to delete.
     * @example
     * // Delete a few Machines
     * const { count } = await prisma.machines.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends machinesDeleteManyArgs>(args?: SelectSubset<T, machinesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Machines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {machinesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Machines
     * const machines = await prisma.machines.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends machinesUpdateManyArgs>(args: SelectSubset<T, machinesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Machines and returns the data updated in the database.
     * @param {machinesUpdateManyAndReturnArgs} args - Arguments to update many Machines.
     * @example
     * // Update many Machines
     * const machines = await prisma.machines.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Machines and only return the `id`
     * const machinesWithIdOnly = await prisma.machines.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends machinesUpdateManyAndReturnArgs>(args: SelectSubset<T, machinesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$machinesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Machines.
     * @param {machinesUpsertArgs} args - Arguments to update or create a Machines.
     * @example
     * // Update or create a Machines
     * const machines = await prisma.machines.upsert({
     *   create: {
     *     // ... data to create a Machines
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Machines we want to update
     *   }
     * })
     */
    upsert<T extends machinesUpsertArgs>(args: SelectSubset<T, machinesUpsertArgs<ExtArgs>>): Prisma__machinesClient<$Result.GetResult<Prisma.$machinesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Machines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {machinesCountArgs} args - Arguments to filter Machines to count.
     * @example
     * // Count the number of Machines
     * const count = await prisma.machines.count({
     *   where: {
     *     // ... the filter for the Machines we want to count
     *   }
     * })
    **/
    count<T extends machinesCountArgs>(
      args?: Subset<T, machinesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MachinesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Machines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachinesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MachinesAggregateArgs>(args: Subset<T, MachinesAggregateArgs>): Prisma.PrismaPromise<GetMachinesAggregateType<T>>

    /**
     * Group by Machines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {machinesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends machinesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: machinesGroupByArgs['orderBy'] }
        : { orderBy?: machinesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, machinesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMachinesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the machines model
   */
  readonly fields: machinesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for machines.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__machinesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the machines model
   */
  interface machinesFieldRefs {
    readonly id: FieldRef<"machines", 'Int'>
    readonly name: FieldRef<"machines", 'String'>
    readonly color: FieldRef<"machines", 'String'>
  }
    

  // Custom InputTypes
  /**
   * machines findUnique
   */
  export type machinesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machines
     */
    select?: machinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the machines
     */
    omit?: machinesOmit<ExtArgs> | null
    /**
     * Filter, which machines to fetch.
     */
    where: machinesWhereUniqueInput
  }

  /**
   * machines findUniqueOrThrow
   */
  export type machinesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machines
     */
    select?: machinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the machines
     */
    omit?: machinesOmit<ExtArgs> | null
    /**
     * Filter, which machines to fetch.
     */
    where: machinesWhereUniqueInput
  }

  /**
   * machines findFirst
   */
  export type machinesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machines
     */
    select?: machinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the machines
     */
    omit?: machinesOmit<ExtArgs> | null
    /**
     * Filter, which machines to fetch.
     */
    where?: machinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of machines to fetch.
     */
    orderBy?: machinesOrderByWithRelationInput | machinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for machines.
     */
    cursor?: machinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` machines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` machines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of machines.
     */
    distinct?: MachinesScalarFieldEnum | MachinesScalarFieldEnum[]
  }

  /**
   * machines findFirstOrThrow
   */
  export type machinesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machines
     */
    select?: machinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the machines
     */
    omit?: machinesOmit<ExtArgs> | null
    /**
     * Filter, which machines to fetch.
     */
    where?: machinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of machines to fetch.
     */
    orderBy?: machinesOrderByWithRelationInput | machinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for machines.
     */
    cursor?: machinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` machines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` machines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of machines.
     */
    distinct?: MachinesScalarFieldEnum | MachinesScalarFieldEnum[]
  }

  /**
   * machines findMany
   */
  export type machinesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machines
     */
    select?: machinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the machines
     */
    omit?: machinesOmit<ExtArgs> | null
    /**
     * Filter, which machines to fetch.
     */
    where?: machinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of machines to fetch.
     */
    orderBy?: machinesOrderByWithRelationInput | machinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing machines.
     */
    cursor?: machinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` machines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` machines.
     */
    skip?: number
    distinct?: MachinesScalarFieldEnum | MachinesScalarFieldEnum[]
  }

  /**
   * machines create
   */
  export type machinesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machines
     */
    select?: machinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the machines
     */
    omit?: machinesOmit<ExtArgs> | null
    /**
     * The data needed to create a machines.
     */
    data: XOR<machinesCreateInput, machinesUncheckedCreateInput>
  }

  /**
   * machines createMany
   */
  export type machinesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many machines.
     */
    data: machinesCreateManyInput | machinesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * machines createManyAndReturn
   */
  export type machinesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machines
     */
    select?: machinesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the machines
     */
    omit?: machinesOmit<ExtArgs> | null
    /**
     * The data used to create many machines.
     */
    data: machinesCreateManyInput | machinesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * machines update
   */
  export type machinesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machines
     */
    select?: machinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the machines
     */
    omit?: machinesOmit<ExtArgs> | null
    /**
     * The data needed to update a machines.
     */
    data: XOR<machinesUpdateInput, machinesUncheckedUpdateInput>
    /**
     * Choose, which machines to update.
     */
    where: machinesWhereUniqueInput
  }

  /**
   * machines updateMany
   */
  export type machinesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update machines.
     */
    data: XOR<machinesUpdateManyMutationInput, machinesUncheckedUpdateManyInput>
    /**
     * Filter which machines to update
     */
    where?: machinesWhereInput
    /**
     * Limit how many machines to update.
     */
    limit?: number
  }

  /**
   * machines updateManyAndReturn
   */
  export type machinesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machines
     */
    select?: machinesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the machines
     */
    omit?: machinesOmit<ExtArgs> | null
    /**
     * The data used to update machines.
     */
    data: XOR<machinesUpdateManyMutationInput, machinesUncheckedUpdateManyInput>
    /**
     * Filter which machines to update
     */
    where?: machinesWhereInput
    /**
     * Limit how many machines to update.
     */
    limit?: number
  }

  /**
   * machines upsert
   */
  export type machinesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machines
     */
    select?: machinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the machines
     */
    omit?: machinesOmit<ExtArgs> | null
    /**
     * The filter to search for the machines to update in case it exists.
     */
    where: machinesWhereUniqueInput
    /**
     * In case the machines found by the `where` argument doesn't exist, create a new machines with this data.
     */
    create: XOR<machinesCreateInput, machinesUncheckedCreateInput>
    /**
     * In case the machines was found with the provided `where` argument, update it with this data.
     */
    update: XOR<machinesUpdateInput, machinesUncheckedUpdateInput>
  }

  /**
   * machines delete
   */
  export type machinesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machines
     */
    select?: machinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the machines
     */
    omit?: machinesOmit<ExtArgs> | null
    /**
     * Filter which machines to delete.
     */
    where: machinesWhereUniqueInput
  }

  /**
   * machines deleteMany
   */
  export type machinesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which machines to delete
     */
    where?: machinesWhereInput
    /**
     * Limit how many machines to delete.
     */
    limit?: number
  }

  /**
   * machines without action
   */
  export type machinesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the machines
     */
    select?: machinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the machines
     */
    omit?: machinesOmit<ExtArgs> | null
  }


  /**
   * Model suppliers
   */

  export type AggregateSuppliers = {
    _count: SuppliersCountAggregateOutputType | null
    _avg: SuppliersAvgAggregateOutputType | null
    _sum: SuppliersSumAggregateOutputType | null
    _min: SuppliersMinAggregateOutputType | null
    _max: SuppliersMaxAggregateOutputType | null
  }

  export type SuppliersAvgAggregateOutputType = {
    id: number | null
  }

  export type SuppliersSumAggregateOutputType = {
    id: number | null
  }

  export type SuppliersMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SuppliersMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SuppliersCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SuppliersAvgAggregateInputType = {
    id?: true
  }

  export type SuppliersSumAggregateInputType = {
    id?: true
  }

  export type SuppliersMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SuppliersMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SuppliersCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SuppliersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which suppliers to aggregate.
     */
    where?: suppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: suppliersOrderByWithRelationInput | suppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: suppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned suppliers
    **/
    _count?: true | SuppliersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuppliersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuppliersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuppliersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuppliersMaxAggregateInputType
  }

  export type GetSuppliersAggregateType<T extends SuppliersAggregateArgs> = {
        [P in keyof T & keyof AggregateSuppliers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuppliers[P]>
      : GetScalarType<T[P], AggregateSuppliers[P]>
  }




  export type suppliersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: suppliersWhereInput
    orderBy?: suppliersOrderByWithAggregationInput | suppliersOrderByWithAggregationInput[]
    by: SuppliersScalarFieldEnum[] | SuppliersScalarFieldEnum
    having?: suppliersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuppliersCountAggregateInputType | true
    _avg?: SuppliersAvgAggregateInputType
    _sum?: SuppliersSumAggregateInputType
    _min?: SuppliersMinAggregateInputType
    _max?: SuppliersMaxAggregateInputType
  }

  export type SuppliersGroupByOutputType = {
    id: number
    name: string
    _count: SuppliersCountAggregateOutputType | null
    _avg: SuppliersAvgAggregateOutputType | null
    _sum: SuppliersSumAggregateOutputType | null
    _min: SuppliersMinAggregateOutputType | null
    _max: SuppliersMaxAggregateOutputType | null
  }

  type GetSuppliersGroupByPayload<T extends suppliersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuppliersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuppliersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuppliersGroupByOutputType[P]>
            : GetScalarType<T[P], SuppliersGroupByOutputType[P]>
        }
      >
    >


  export type suppliersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["suppliers"]>

  export type suppliersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["suppliers"]>

  export type suppliersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["suppliers"]>

  export type suppliersSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type suppliersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["suppliers"]>

  export type $suppliersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "suppliers"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["suppliers"]>
    composites: {}
  }

  type suppliersGetPayload<S extends boolean | null | undefined | suppliersDefaultArgs> = $Result.GetResult<Prisma.$suppliersPayload, S>

  type suppliersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<suppliersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuppliersCountAggregateInputType | true
    }

  export interface suppliersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['suppliers'], meta: { name: 'suppliers' } }
    /**
     * Find zero or one Suppliers that matches the filter.
     * @param {suppliersFindUniqueArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends suppliersFindUniqueArgs>(args: SelectSubset<T, suppliersFindUniqueArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Suppliers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {suppliersFindUniqueOrThrowArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends suppliersFindUniqueOrThrowArgs>(args: SelectSubset<T, suppliersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersFindFirstArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends suppliersFindFirstArgs>(args?: SelectSubset<T, suppliersFindFirstArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suppliers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersFindFirstOrThrowArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends suppliersFindFirstOrThrowArgs>(args?: SelectSubset<T, suppliersFindFirstOrThrowArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.suppliers.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.suppliers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const suppliersWithIdOnly = await prisma.suppliers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends suppliersFindManyArgs>(args?: SelectSubset<T, suppliersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Suppliers.
     * @param {suppliersCreateArgs} args - Arguments to create a Suppliers.
     * @example
     * // Create one Suppliers
     * const Suppliers = await prisma.suppliers.create({
     *   data: {
     *     // ... data to create a Suppliers
     *   }
     * })
     * 
     */
    create<T extends suppliersCreateArgs>(args: SelectSubset<T, suppliersCreateArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {suppliersCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const suppliers = await prisma.suppliers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends suppliersCreateManyArgs>(args?: SelectSubset<T, suppliersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {suppliersCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const suppliers = await prisma.suppliers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const suppliersWithIdOnly = await prisma.suppliers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends suppliersCreateManyAndReturnArgs>(args?: SelectSubset<T, suppliersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Suppliers.
     * @param {suppliersDeleteArgs} args - Arguments to delete one Suppliers.
     * @example
     * // Delete one Suppliers
     * const Suppliers = await prisma.suppliers.delete({
     *   where: {
     *     // ... filter to delete one Suppliers
     *   }
     * })
     * 
     */
    delete<T extends suppliersDeleteArgs>(args: SelectSubset<T, suppliersDeleteArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Suppliers.
     * @param {suppliersUpdateArgs} args - Arguments to update one Suppliers.
     * @example
     * // Update one Suppliers
     * const suppliers = await prisma.suppliers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends suppliersUpdateArgs>(args: SelectSubset<T, suppliersUpdateArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {suppliersDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.suppliers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends suppliersDeleteManyArgs>(args?: SelectSubset<T, suppliersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const suppliers = await prisma.suppliers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends suppliersUpdateManyArgs>(args: SelectSubset<T, suppliersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {suppliersUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const suppliers = await prisma.suppliers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `id`
     * const suppliersWithIdOnly = await prisma.suppliers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends suppliersUpdateManyAndReturnArgs>(args: SelectSubset<T, suppliersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Suppliers.
     * @param {suppliersUpsertArgs} args - Arguments to update or create a Suppliers.
     * @example
     * // Update or create a Suppliers
     * const suppliers = await prisma.suppliers.upsert({
     *   create: {
     *     // ... data to create a Suppliers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Suppliers we want to update
     *   }
     * })
     */
    upsert<T extends suppliersUpsertArgs>(args: SelectSubset<T, suppliersUpsertArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.suppliers.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends suppliersCountArgs>(
      args?: Subset<T, suppliersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuppliersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SuppliersAggregateArgs>(args: Subset<T, SuppliersAggregateArgs>): Prisma.PrismaPromise<GetSuppliersAggregateType<T>>

    /**
     * Group by Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends suppliersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: suppliersGroupByArgs['orderBy'] }
        : { orderBy?: suppliersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, suppliersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuppliersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the suppliers model
   */
  readonly fields: suppliersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for suppliers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__suppliersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the suppliers model
   */
  interface suppliersFieldRefs {
    readonly id: FieldRef<"suppliers", 'Int'>
    readonly name: FieldRef<"suppliers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * suppliers findUnique
   */
  export type suppliersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where: suppliersWhereUniqueInput
  }

  /**
   * suppliers findUniqueOrThrow
   */
  export type suppliersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where: suppliersWhereUniqueInput
  }

  /**
   * suppliers findFirst
   */
  export type suppliersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where?: suppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: suppliersOrderByWithRelationInput | suppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suppliers.
     */
    cursor?: suppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suppliers.
     */
    distinct?: SuppliersScalarFieldEnum | SuppliersScalarFieldEnum[]
  }

  /**
   * suppliers findFirstOrThrow
   */
  export type suppliersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where?: suppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: suppliersOrderByWithRelationInput | suppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suppliers.
     */
    cursor?: suppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suppliers.
     */
    distinct?: SuppliersScalarFieldEnum | SuppliersScalarFieldEnum[]
  }

  /**
   * suppliers findMany
   */
  export type suppliersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where?: suppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: suppliersOrderByWithRelationInput | suppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing suppliers.
     */
    cursor?: suppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    distinct?: SuppliersScalarFieldEnum | SuppliersScalarFieldEnum[]
  }

  /**
   * suppliers create
   */
  export type suppliersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * The data needed to create a suppliers.
     */
    data: XOR<suppliersCreateInput, suppliersUncheckedCreateInput>
  }

  /**
   * suppliers createMany
   */
  export type suppliersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many suppliers.
     */
    data: suppliersCreateManyInput | suppliersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * suppliers createManyAndReturn
   */
  export type suppliersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * The data used to create many suppliers.
     */
    data: suppliersCreateManyInput | suppliersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * suppliers update
   */
  export type suppliersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * The data needed to update a suppliers.
     */
    data: XOR<suppliersUpdateInput, suppliersUncheckedUpdateInput>
    /**
     * Choose, which suppliers to update.
     */
    where: suppliersWhereUniqueInput
  }

  /**
   * suppliers updateMany
   */
  export type suppliersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update suppliers.
     */
    data: XOR<suppliersUpdateManyMutationInput, suppliersUncheckedUpdateManyInput>
    /**
     * Filter which suppliers to update
     */
    where?: suppliersWhereInput
    /**
     * Limit how many suppliers to update.
     */
    limit?: number
  }

  /**
   * suppliers updateManyAndReturn
   */
  export type suppliersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * The data used to update suppliers.
     */
    data: XOR<suppliersUpdateManyMutationInput, suppliersUncheckedUpdateManyInput>
    /**
     * Filter which suppliers to update
     */
    where?: suppliersWhereInput
    /**
     * Limit how many suppliers to update.
     */
    limit?: number
  }

  /**
   * suppliers upsert
   */
  export type suppliersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * The filter to search for the suppliers to update in case it exists.
     */
    where: suppliersWhereUniqueInput
    /**
     * In case the suppliers found by the `where` argument doesn't exist, create a new suppliers with this data.
     */
    create: XOR<suppliersCreateInput, suppliersUncheckedCreateInput>
    /**
     * In case the suppliers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<suppliersUpdateInput, suppliersUncheckedUpdateInput>
  }

  /**
   * suppliers delete
   */
  export type suppliersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Filter which suppliers to delete.
     */
    where: suppliersWhereUniqueInput
  }

  /**
   * suppliers deleteMany
   */
  export type suppliersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which suppliers to delete
     */
    where?: suppliersWhereInput
    /**
     * Limit how many suppliers to delete.
     */
    limit?: number
  }

  /**
   * suppliers without action
   */
  export type suppliersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
  }


  /**
   * Model conducteurs
   */

  export type AggregateConducteurs = {
    _count: ConducteursCountAggregateOutputType | null
    _avg: ConducteursAvgAggregateOutputType | null
    _sum: ConducteursSumAggregateOutputType | null
    _min: ConducteursMinAggregateOutputType | null
    _max: ConducteursMaxAggregateOutputType | null
  }

  export type ConducteursAvgAggregateOutputType = {
    id: number | null
  }

  export type ConducteursSumAggregateOutputType = {
    id: number | null
  }

  export type ConducteursMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ConducteursMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ConducteursCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ConducteursAvgAggregateInputType = {
    id?: true
  }

  export type ConducteursSumAggregateInputType = {
    id?: true
  }

  export type ConducteursMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ConducteursMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ConducteursCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ConducteursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conducteurs to aggregate.
     */
    where?: conducteursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conducteurs to fetch.
     */
    orderBy?: conducteursOrderByWithRelationInput | conducteursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: conducteursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conducteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conducteurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned conducteurs
    **/
    _count?: true | ConducteursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConducteursAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConducteursSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConducteursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConducteursMaxAggregateInputType
  }

  export type GetConducteursAggregateType<T extends ConducteursAggregateArgs> = {
        [P in keyof T & keyof AggregateConducteurs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConducteurs[P]>
      : GetScalarType<T[P], AggregateConducteurs[P]>
  }




  export type conducteursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conducteursWhereInput
    orderBy?: conducteursOrderByWithAggregationInput | conducteursOrderByWithAggregationInput[]
    by: ConducteursScalarFieldEnum[] | ConducteursScalarFieldEnum
    having?: conducteursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConducteursCountAggregateInputType | true
    _avg?: ConducteursAvgAggregateInputType
    _sum?: ConducteursSumAggregateInputType
    _min?: ConducteursMinAggregateInputType
    _max?: ConducteursMaxAggregateInputType
  }

  export type ConducteursGroupByOutputType = {
    id: number
    name: string
    _count: ConducteursCountAggregateOutputType | null
    _avg: ConducteursAvgAggregateOutputType | null
    _sum: ConducteursSumAggregateOutputType | null
    _min: ConducteursMinAggregateOutputType | null
    _max: ConducteursMaxAggregateOutputType | null
  }

  type GetConducteursGroupByPayload<T extends conducteursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConducteursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConducteursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConducteursGroupByOutputType[P]>
            : GetScalarType<T[P], ConducteursGroupByOutputType[P]>
        }
      >
    >


  export type conducteursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["conducteurs"]>

  export type conducteursSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["conducteurs"]>

  export type conducteursSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["conducteurs"]>

  export type conducteursSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type conducteursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["conducteurs"]>

  export type $conducteursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "conducteurs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["conducteurs"]>
    composites: {}
  }

  type conducteursGetPayload<S extends boolean | null | undefined | conducteursDefaultArgs> = $Result.GetResult<Prisma.$conducteursPayload, S>

  type conducteursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<conducteursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConducteursCountAggregateInputType | true
    }

  export interface conducteursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['conducteurs'], meta: { name: 'conducteurs' } }
    /**
     * Find zero or one Conducteurs that matches the filter.
     * @param {conducteursFindUniqueArgs} args - Arguments to find a Conducteurs
     * @example
     * // Get one Conducteurs
     * const conducteurs = await prisma.conducteurs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends conducteursFindUniqueArgs>(args: SelectSubset<T, conducteursFindUniqueArgs<ExtArgs>>): Prisma__conducteursClient<$Result.GetResult<Prisma.$conducteursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conducteurs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {conducteursFindUniqueOrThrowArgs} args - Arguments to find a Conducteurs
     * @example
     * // Get one Conducteurs
     * const conducteurs = await prisma.conducteurs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends conducteursFindUniqueOrThrowArgs>(args: SelectSubset<T, conducteursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__conducteursClient<$Result.GetResult<Prisma.$conducteursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conducteurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conducteursFindFirstArgs} args - Arguments to find a Conducteurs
     * @example
     * // Get one Conducteurs
     * const conducteurs = await prisma.conducteurs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends conducteursFindFirstArgs>(args?: SelectSubset<T, conducteursFindFirstArgs<ExtArgs>>): Prisma__conducteursClient<$Result.GetResult<Prisma.$conducteursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conducteurs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conducteursFindFirstOrThrowArgs} args - Arguments to find a Conducteurs
     * @example
     * // Get one Conducteurs
     * const conducteurs = await prisma.conducteurs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends conducteursFindFirstOrThrowArgs>(args?: SelectSubset<T, conducteursFindFirstOrThrowArgs<ExtArgs>>): Prisma__conducteursClient<$Result.GetResult<Prisma.$conducteursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conducteurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conducteursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conducteurs
     * const conducteurs = await prisma.conducteurs.findMany()
     * 
     * // Get first 10 Conducteurs
     * const conducteurs = await prisma.conducteurs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conducteursWithIdOnly = await prisma.conducteurs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends conducteursFindManyArgs>(args?: SelectSubset<T, conducteursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conducteursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conducteurs.
     * @param {conducteursCreateArgs} args - Arguments to create a Conducteurs.
     * @example
     * // Create one Conducteurs
     * const Conducteurs = await prisma.conducteurs.create({
     *   data: {
     *     // ... data to create a Conducteurs
     *   }
     * })
     * 
     */
    create<T extends conducteursCreateArgs>(args: SelectSubset<T, conducteursCreateArgs<ExtArgs>>): Prisma__conducteursClient<$Result.GetResult<Prisma.$conducteursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conducteurs.
     * @param {conducteursCreateManyArgs} args - Arguments to create many Conducteurs.
     * @example
     * // Create many Conducteurs
     * const conducteurs = await prisma.conducteurs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends conducteursCreateManyArgs>(args?: SelectSubset<T, conducteursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conducteurs and returns the data saved in the database.
     * @param {conducteursCreateManyAndReturnArgs} args - Arguments to create many Conducteurs.
     * @example
     * // Create many Conducteurs
     * const conducteurs = await prisma.conducteurs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conducteurs and only return the `id`
     * const conducteursWithIdOnly = await prisma.conducteurs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends conducteursCreateManyAndReturnArgs>(args?: SelectSubset<T, conducteursCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conducteursPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conducteurs.
     * @param {conducteursDeleteArgs} args - Arguments to delete one Conducteurs.
     * @example
     * // Delete one Conducteurs
     * const Conducteurs = await prisma.conducteurs.delete({
     *   where: {
     *     // ... filter to delete one Conducteurs
     *   }
     * })
     * 
     */
    delete<T extends conducteursDeleteArgs>(args: SelectSubset<T, conducteursDeleteArgs<ExtArgs>>): Prisma__conducteursClient<$Result.GetResult<Prisma.$conducteursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conducteurs.
     * @param {conducteursUpdateArgs} args - Arguments to update one Conducteurs.
     * @example
     * // Update one Conducteurs
     * const conducteurs = await prisma.conducteurs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends conducteursUpdateArgs>(args: SelectSubset<T, conducteursUpdateArgs<ExtArgs>>): Prisma__conducteursClient<$Result.GetResult<Prisma.$conducteursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conducteurs.
     * @param {conducteursDeleteManyArgs} args - Arguments to filter Conducteurs to delete.
     * @example
     * // Delete a few Conducteurs
     * const { count } = await prisma.conducteurs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends conducteursDeleteManyArgs>(args?: SelectSubset<T, conducteursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conducteurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conducteursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conducteurs
     * const conducteurs = await prisma.conducteurs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends conducteursUpdateManyArgs>(args: SelectSubset<T, conducteursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conducteurs and returns the data updated in the database.
     * @param {conducteursUpdateManyAndReturnArgs} args - Arguments to update many Conducteurs.
     * @example
     * // Update many Conducteurs
     * const conducteurs = await prisma.conducteurs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conducteurs and only return the `id`
     * const conducteursWithIdOnly = await prisma.conducteurs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends conducteursUpdateManyAndReturnArgs>(args: SelectSubset<T, conducteursUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conducteursPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conducteurs.
     * @param {conducteursUpsertArgs} args - Arguments to update or create a Conducteurs.
     * @example
     * // Update or create a Conducteurs
     * const conducteurs = await prisma.conducteurs.upsert({
     *   create: {
     *     // ... data to create a Conducteurs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conducteurs we want to update
     *   }
     * })
     */
    upsert<T extends conducteursUpsertArgs>(args: SelectSubset<T, conducteursUpsertArgs<ExtArgs>>): Prisma__conducteursClient<$Result.GetResult<Prisma.$conducteursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conducteurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conducteursCountArgs} args - Arguments to filter Conducteurs to count.
     * @example
     * // Count the number of Conducteurs
     * const count = await prisma.conducteurs.count({
     *   where: {
     *     // ... the filter for the Conducteurs we want to count
     *   }
     * })
    **/
    count<T extends conducteursCountArgs>(
      args?: Subset<T, conducteursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConducteursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conducteurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConducteursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConducteursAggregateArgs>(args: Subset<T, ConducteursAggregateArgs>): Prisma.PrismaPromise<GetConducteursAggregateType<T>>

    /**
     * Group by Conducteurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conducteursGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends conducteursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: conducteursGroupByArgs['orderBy'] }
        : { orderBy?: conducteursGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, conducteursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConducteursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the conducteurs model
   */
  readonly fields: conducteursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for conducteurs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__conducteursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the conducteurs model
   */
  interface conducteursFieldRefs {
    readonly id: FieldRef<"conducteurs", 'Int'>
    readonly name: FieldRef<"conducteurs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * conducteurs findUnique
   */
  export type conducteursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conducteurs
     */
    select?: conducteursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conducteurs
     */
    omit?: conducteursOmit<ExtArgs> | null
    /**
     * Filter, which conducteurs to fetch.
     */
    where: conducteursWhereUniqueInput
  }

  /**
   * conducteurs findUniqueOrThrow
   */
  export type conducteursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conducteurs
     */
    select?: conducteursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conducteurs
     */
    omit?: conducteursOmit<ExtArgs> | null
    /**
     * Filter, which conducteurs to fetch.
     */
    where: conducteursWhereUniqueInput
  }

  /**
   * conducteurs findFirst
   */
  export type conducteursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conducteurs
     */
    select?: conducteursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conducteurs
     */
    omit?: conducteursOmit<ExtArgs> | null
    /**
     * Filter, which conducteurs to fetch.
     */
    where?: conducteursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conducteurs to fetch.
     */
    orderBy?: conducteursOrderByWithRelationInput | conducteursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for conducteurs.
     */
    cursor?: conducteursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conducteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conducteurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conducteurs.
     */
    distinct?: ConducteursScalarFieldEnum | ConducteursScalarFieldEnum[]
  }

  /**
   * conducteurs findFirstOrThrow
   */
  export type conducteursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conducteurs
     */
    select?: conducteursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conducteurs
     */
    omit?: conducteursOmit<ExtArgs> | null
    /**
     * Filter, which conducteurs to fetch.
     */
    where?: conducteursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conducteurs to fetch.
     */
    orderBy?: conducteursOrderByWithRelationInput | conducteursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for conducteurs.
     */
    cursor?: conducteursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conducteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conducteurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conducteurs.
     */
    distinct?: ConducteursScalarFieldEnum | ConducteursScalarFieldEnum[]
  }

  /**
   * conducteurs findMany
   */
  export type conducteursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conducteurs
     */
    select?: conducteursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conducteurs
     */
    omit?: conducteursOmit<ExtArgs> | null
    /**
     * Filter, which conducteurs to fetch.
     */
    where?: conducteursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conducteurs to fetch.
     */
    orderBy?: conducteursOrderByWithRelationInput | conducteursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing conducteurs.
     */
    cursor?: conducteursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conducteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conducteurs.
     */
    skip?: number
    distinct?: ConducteursScalarFieldEnum | ConducteursScalarFieldEnum[]
  }

  /**
   * conducteurs create
   */
  export type conducteursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conducteurs
     */
    select?: conducteursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conducteurs
     */
    omit?: conducteursOmit<ExtArgs> | null
    /**
     * The data needed to create a conducteurs.
     */
    data: XOR<conducteursCreateInput, conducteursUncheckedCreateInput>
  }

  /**
   * conducteurs createMany
   */
  export type conducteursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many conducteurs.
     */
    data: conducteursCreateManyInput | conducteursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * conducteurs createManyAndReturn
   */
  export type conducteursCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conducteurs
     */
    select?: conducteursSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the conducteurs
     */
    omit?: conducteursOmit<ExtArgs> | null
    /**
     * The data used to create many conducteurs.
     */
    data: conducteursCreateManyInput | conducteursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * conducteurs update
   */
  export type conducteursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conducteurs
     */
    select?: conducteursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conducteurs
     */
    omit?: conducteursOmit<ExtArgs> | null
    /**
     * The data needed to update a conducteurs.
     */
    data: XOR<conducteursUpdateInput, conducteursUncheckedUpdateInput>
    /**
     * Choose, which conducteurs to update.
     */
    where: conducteursWhereUniqueInput
  }

  /**
   * conducteurs updateMany
   */
  export type conducteursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update conducteurs.
     */
    data: XOR<conducteursUpdateManyMutationInput, conducteursUncheckedUpdateManyInput>
    /**
     * Filter which conducteurs to update
     */
    where?: conducteursWhereInput
    /**
     * Limit how many conducteurs to update.
     */
    limit?: number
  }

  /**
   * conducteurs updateManyAndReturn
   */
  export type conducteursUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conducteurs
     */
    select?: conducteursSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the conducteurs
     */
    omit?: conducteursOmit<ExtArgs> | null
    /**
     * The data used to update conducteurs.
     */
    data: XOR<conducteursUpdateManyMutationInput, conducteursUncheckedUpdateManyInput>
    /**
     * Filter which conducteurs to update
     */
    where?: conducteursWhereInput
    /**
     * Limit how many conducteurs to update.
     */
    limit?: number
  }

  /**
   * conducteurs upsert
   */
  export type conducteursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conducteurs
     */
    select?: conducteursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conducteurs
     */
    omit?: conducteursOmit<ExtArgs> | null
    /**
     * The filter to search for the conducteurs to update in case it exists.
     */
    where: conducteursWhereUniqueInput
    /**
     * In case the conducteurs found by the `where` argument doesn't exist, create a new conducteurs with this data.
     */
    create: XOR<conducteursCreateInput, conducteursUncheckedCreateInput>
    /**
     * In case the conducteurs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<conducteursUpdateInput, conducteursUncheckedUpdateInput>
  }

  /**
   * conducteurs delete
   */
  export type conducteursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conducteurs
     */
    select?: conducteursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conducteurs
     */
    omit?: conducteursOmit<ExtArgs> | null
    /**
     * Filter which conducteurs to delete.
     */
    where: conducteursWhereUniqueInput
  }

  /**
   * conducteurs deleteMany
   */
  export type conducteursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conducteurs to delete
     */
    where?: conducteursWhereInput
    /**
     * Limit how many conducteurs to delete.
     */
    limit?: number
  }

  /**
   * conducteurs without action
   */
  export type conducteursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conducteurs
     */
    select?: conducteursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conducteurs
     */
    omit?: conducteursOmit<ExtArgs> | null
  }


  /**
   * Model custom_field_definitions
   */

  export type AggregateCustom_field_definitions = {
    _count: Custom_field_definitionsCountAggregateOutputType | null
    _min: Custom_field_definitionsMinAggregateOutputType | null
    _max: Custom_field_definitionsMaxAggregateOutputType | null
  }

  export type Custom_field_definitionsMinAggregateOutputType = {
    id: string | null
    label: string | null
    type: string | null
  }

  export type Custom_field_definitionsMaxAggregateOutputType = {
    id: string | null
    label: string | null
    type: string | null
  }

  export type Custom_field_definitionsCountAggregateOutputType = {
    id: number
    label: number
    type: number
    _all: number
  }


  export type Custom_field_definitionsMinAggregateInputType = {
    id?: true
    label?: true
    type?: true
  }

  export type Custom_field_definitionsMaxAggregateInputType = {
    id?: true
    label?: true
    type?: true
  }

  export type Custom_field_definitionsCountAggregateInputType = {
    id?: true
    label?: true
    type?: true
    _all?: true
  }

  export type Custom_field_definitionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which custom_field_definitions to aggregate.
     */
    where?: custom_field_definitionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of custom_field_definitions to fetch.
     */
    orderBy?: custom_field_definitionsOrderByWithRelationInput | custom_field_definitionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: custom_field_definitionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` custom_field_definitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` custom_field_definitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned custom_field_definitions
    **/
    _count?: true | Custom_field_definitionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Custom_field_definitionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Custom_field_definitionsMaxAggregateInputType
  }

  export type GetCustom_field_definitionsAggregateType<T extends Custom_field_definitionsAggregateArgs> = {
        [P in keyof T & keyof AggregateCustom_field_definitions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustom_field_definitions[P]>
      : GetScalarType<T[P], AggregateCustom_field_definitions[P]>
  }




  export type custom_field_definitionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: custom_field_definitionsWhereInput
    orderBy?: custom_field_definitionsOrderByWithAggregationInput | custom_field_definitionsOrderByWithAggregationInput[]
    by: Custom_field_definitionsScalarFieldEnum[] | Custom_field_definitionsScalarFieldEnum
    having?: custom_field_definitionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Custom_field_definitionsCountAggregateInputType | true
    _min?: Custom_field_definitionsMinAggregateInputType
    _max?: Custom_field_definitionsMaxAggregateInputType
  }

  export type Custom_field_definitionsGroupByOutputType = {
    id: string
    label: string
    type: string
    _count: Custom_field_definitionsCountAggregateOutputType | null
    _min: Custom_field_definitionsMinAggregateOutputType | null
    _max: Custom_field_definitionsMaxAggregateOutputType | null
  }

  type GetCustom_field_definitionsGroupByPayload<T extends custom_field_definitionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Custom_field_definitionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Custom_field_definitionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Custom_field_definitionsGroupByOutputType[P]>
            : GetScalarType<T[P], Custom_field_definitionsGroupByOutputType[P]>
        }
      >
    >


  export type custom_field_definitionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    type?: boolean
  }, ExtArgs["result"]["custom_field_definitions"]>

  export type custom_field_definitionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    type?: boolean
  }, ExtArgs["result"]["custom_field_definitions"]>

  export type custom_field_definitionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    type?: boolean
  }, ExtArgs["result"]["custom_field_definitions"]>

  export type custom_field_definitionsSelectScalar = {
    id?: boolean
    label?: boolean
    type?: boolean
  }

  export type custom_field_definitionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "type", ExtArgs["result"]["custom_field_definitions"]>

  export type $custom_field_definitionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "custom_field_definitions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
      type: string
    }, ExtArgs["result"]["custom_field_definitions"]>
    composites: {}
  }

  type custom_field_definitionsGetPayload<S extends boolean | null | undefined | custom_field_definitionsDefaultArgs> = $Result.GetResult<Prisma.$custom_field_definitionsPayload, S>

  type custom_field_definitionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<custom_field_definitionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Custom_field_definitionsCountAggregateInputType | true
    }

  export interface custom_field_definitionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['custom_field_definitions'], meta: { name: 'custom_field_definitions' } }
    /**
     * Find zero or one Custom_field_definitions that matches the filter.
     * @param {custom_field_definitionsFindUniqueArgs} args - Arguments to find a Custom_field_definitions
     * @example
     * // Get one Custom_field_definitions
     * const custom_field_definitions = await prisma.custom_field_definitions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends custom_field_definitionsFindUniqueArgs>(args: SelectSubset<T, custom_field_definitionsFindUniqueArgs<ExtArgs>>): Prisma__custom_field_definitionsClient<$Result.GetResult<Prisma.$custom_field_definitionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Custom_field_definitions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {custom_field_definitionsFindUniqueOrThrowArgs} args - Arguments to find a Custom_field_definitions
     * @example
     * // Get one Custom_field_definitions
     * const custom_field_definitions = await prisma.custom_field_definitions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends custom_field_definitionsFindUniqueOrThrowArgs>(args: SelectSubset<T, custom_field_definitionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__custom_field_definitionsClient<$Result.GetResult<Prisma.$custom_field_definitionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Custom_field_definitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {custom_field_definitionsFindFirstArgs} args - Arguments to find a Custom_field_definitions
     * @example
     * // Get one Custom_field_definitions
     * const custom_field_definitions = await prisma.custom_field_definitions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends custom_field_definitionsFindFirstArgs>(args?: SelectSubset<T, custom_field_definitionsFindFirstArgs<ExtArgs>>): Prisma__custom_field_definitionsClient<$Result.GetResult<Prisma.$custom_field_definitionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Custom_field_definitions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {custom_field_definitionsFindFirstOrThrowArgs} args - Arguments to find a Custom_field_definitions
     * @example
     * // Get one Custom_field_definitions
     * const custom_field_definitions = await prisma.custom_field_definitions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends custom_field_definitionsFindFirstOrThrowArgs>(args?: SelectSubset<T, custom_field_definitionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__custom_field_definitionsClient<$Result.GetResult<Prisma.$custom_field_definitionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Custom_field_definitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {custom_field_definitionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Custom_field_definitions
     * const custom_field_definitions = await prisma.custom_field_definitions.findMany()
     * 
     * // Get first 10 Custom_field_definitions
     * const custom_field_definitions = await prisma.custom_field_definitions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const custom_field_definitionsWithIdOnly = await prisma.custom_field_definitions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends custom_field_definitionsFindManyArgs>(args?: SelectSubset<T, custom_field_definitionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$custom_field_definitionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Custom_field_definitions.
     * @param {custom_field_definitionsCreateArgs} args - Arguments to create a Custom_field_definitions.
     * @example
     * // Create one Custom_field_definitions
     * const Custom_field_definitions = await prisma.custom_field_definitions.create({
     *   data: {
     *     // ... data to create a Custom_field_definitions
     *   }
     * })
     * 
     */
    create<T extends custom_field_definitionsCreateArgs>(args: SelectSubset<T, custom_field_definitionsCreateArgs<ExtArgs>>): Prisma__custom_field_definitionsClient<$Result.GetResult<Prisma.$custom_field_definitionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Custom_field_definitions.
     * @param {custom_field_definitionsCreateManyArgs} args - Arguments to create many Custom_field_definitions.
     * @example
     * // Create many Custom_field_definitions
     * const custom_field_definitions = await prisma.custom_field_definitions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends custom_field_definitionsCreateManyArgs>(args?: SelectSubset<T, custom_field_definitionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Custom_field_definitions and returns the data saved in the database.
     * @param {custom_field_definitionsCreateManyAndReturnArgs} args - Arguments to create many Custom_field_definitions.
     * @example
     * // Create many Custom_field_definitions
     * const custom_field_definitions = await prisma.custom_field_definitions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Custom_field_definitions and only return the `id`
     * const custom_field_definitionsWithIdOnly = await prisma.custom_field_definitions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends custom_field_definitionsCreateManyAndReturnArgs>(args?: SelectSubset<T, custom_field_definitionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$custom_field_definitionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Custom_field_definitions.
     * @param {custom_field_definitionsDeleteArgs} args - Arguments to delete one Custom_field_definitions.
     * @example
     * // Delete one Custom_field_definitions
     * const Custom_field_definitions = await prisma.custom_field_definitions.delete({
     *   where: {
     *     // ... filter to delete one Custom_field_definitions
     *   }
     * })
     * 
     */
    delete<T extends custom_field_definitionsDeleteArgs>(args: SelectSubset<T, custom_field_definitionsDeleteArgs<ExtArgs>>): Prisma__custom_field_definitionsClient<$Result.GetResult<Prisma.$custom_field_definitionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Custom_field_definitions.
     * @param {custom_field_definitionsUpdateArgs} args - Arguments to update one Custom_field_definitions.
     * @example
     * // Update one Custom_field_definitions
     * const custom_field_definitions = await prisma.custom_field_definitions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends custom_field_definitionsUpdateArgs>(args: SelectSubset<T, custom_field_definitionsUpdateArgs<ExtArgs>>): Prisma__custom_field_definitionsClient<$Result.GetResult<Prisma.$custom_field_definitionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Custom_field_definitions.
     * @param {custom_field_definitionsDeleteManyArgs} args - Arguments to filter Custom_field_definitions to delete.
     * @example
     * // Delete a few Custom_field_definitions
     * const { count } = await prisma.custom_field_definitions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends custom_field_definitionsDeleteManyArgs>(args?: SelectSubset<T, custom_field_definitionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Custom_field_definitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {custom_field_definitionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Custom_field_definitions
     * const custom_field_definitions = await prisma.custom_field_definitions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends custom_field_definitionsUpdateManyArgs>(args: SelectSubset<T, custom_field_definitionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Custom_field_definitions and returns the data updated in the database.
     * @param {custom_field_definitionsUpdateManyAndReturnArgs} args - Arguments to update many Custom_field_definitions.
     * @example
     * // Update many Custom_field_definitions
     * const custom_field_definitions = await prisma.custom_field_definitions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Custom_field_definitions and only return the `id`
     * const custom_field_definitionsWithIdOnly = await prisma.custom_field_definitions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends custom_field_definitionsUpdateManyAndReturnArgs>(args: SelectSubset<T, custom_field_definitionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$custom_field_definitionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Custom_field_definitions.
     * @param {custom_field_definitionsUpsertArgs} args - Arguments to update or create a Custom_field_definitions.
     * @example
     * // Update or create a Custom_field_definitions
     * const custom_field_definitions = await prisma.custom_field_definitions.upsert({
     *   create: {
     *     // ... data to create a Custom_field_definitions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Custom_field_definitions we want to update
     *   }
     * })
     */
    upsert<T extends custom_field_definitionsUpsertArgs>(args: SelectSubset<T, custom_field_definitionsUpsertArgs<ExtArgs>>): Prisma__custom_field_definitionsClient<$Result.GetResult<Prisma.$custom_field_definitionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Custom_field_definitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {custom_field_definitionsCountArgs} args - Arguments to filter Custom_field_definitions to count.
     * @example
     * // Count the number of Custom_field_definitions
     * const count = await prisma.custom_field_definitions.count({
     *   where: {
     *     // ... the filter for the Custom_field_definitions we want to count
     *   }
     * })
    **/
    count<T extends custom_field_definitionsCountArgs>(
      args?: Subset<T, custom_field_definitionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Custom_field_definitionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Custom_field_definitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Custom_field_definitionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Custom_field_definitionsAggregateArgs>(args: Subset<T, Custom_field_definitionsAggregateArgs>): Prisma.PrismaPromise<GetCustom_field_definitionsAggregateType<T>>

    /**
     * Group by Custom_field_definitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {custom_field_definitionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends custom_field_definitionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: custom_field_definitionsGroupByArgs['orderBy'] }
        : { orderBy?: custom_field_definitionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, custom_field_definitionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustom_field_definitionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the custom_field_definitions model
   */
  readonly fields: custom_field_definitionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for custom_field_definitions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__custom_field_definitionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the custom_field_definitions model
   */
  interface custom_field_definitionsFieldRefs {
    readonly id: FieldRef<"custom_field_definitions", 'String'>
    readonly label: FieldRef<"custom_field_definitions", 'String'>
    readonly type: FieldRef<"custom_field_definitions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * custom_field_definitions findUnique
   */
  export type custom_field_definitionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custom_field_definitions
     */
    select?: custom_field_definitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custom_field_definitions
     */
    omit?: custom_field_definitionsOmit<ExtArgs> | null
    /**
     * Filter, which custom_field_definitions to fetch.
     */
    where: custom_field_definitionsWhereUniqueInput
  }

  /**
   * custom_field_definitions findUniqueOrThrow
   */
  export type custom_field_definitionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custom_field_definitions
     */
    select?: custom_field_definitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custom_field_definitions
     */
    omit?: custom_field_definitionsOmit<ExtArgs> | null
    /**
     * Filter, which custom_field_definitions to fetch.
     */
    where: custom_field_definitionsWhereUniqueInput
  }

  /**
   * custom_field_definitions findFirst
   */
  export type custom_field_definitionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custom_field_definitions
     */
    select?: custom_field_definitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custom_field_definitions
     */
    omit?: custom_field_definitionsOmit<ExtArgs> | null
    /**
     * Filter, which custom_field_definitions to fetch.
     */
    where?: custom_field_definitionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of custom_field_definitions to fetch.
     */
    orderBy?: custom_field_definitionsOrderByWithRelationInput | custom_field_definitionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for custom_field_definitions.
     */
    cursor?: custom_field_definitionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` custom_field_definitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` custom_field_definitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of custom_field_definitions.
     */
    distinct?: Custom_field_definitionsScalarFieldEnum | Custom_field_definitionsScalarFieldEnum[]
  }

  /**
   * custom_field_definitions findFirstOrThrow
   */
  export type custom_field_definitionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custom_field_definitions
     */
    select?: custom_field_definitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custom_field_definitions
     */
    omit?: custom_field_definitionsOmit<ExtArgs> | null
    /**
     * Filter, which custom_field_definitions to fetch.
     */
    where?: custom_field_definitionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of custom_field_definitions to fetch.
     */
    orderBy?: custom_field_definitionsOrderByWithRelationInput | custom_field_definitionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for custom_field_definitions.
     */
    cursor?: custom_field_definitionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` custom_field_definitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` custom_field_definitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of custom_field_definitions.
     */
    distinct?: Custom_field_definitionsScalarFieldEnum | Custom_field_definitionsScalarFieldEnum[]
  }

  /**
   * custom_field_definitions findMany
   */
  export type custom_field_definitionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custom_field_definitions
     */
    select?: custom_field_definitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custom_field_definitions
     */
    omit?: custom_field_definitionsOmit<ExtArgs> | null
    /**
     * Filter, which custom_field_definitions to fetch.
     */
    where?: custom_field_definitionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of custom_field_definitions to fetch.
     */
    orderBy?: custom_field_definitionsOrderByWithRelationInput | custom_field_definitionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing custom_field_definitions.
     */
    cursor?: custom_field_definitionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` custom_field_definitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` custom_field_definitions.
     */
    skip?: number
    distinct?: Custom_field_definitionsScalarFieldEnum | Custom_field_definitionsScalarFieldEnum[]
  }

  /**
   * custom_field_definitions create
   */
  export type custom_field_definitionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custom_field_definitions
     */
    select?: custom_field_definitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custom_field_definitions
     */
    omit?: custom_field_definitionsOmit<ExtArgs> | null
    /**
     * The data needed to create a custom_field_definitions.
     */
    data: XOR<custom_field_definitionsCreateInput, custom_field_definitionsUncheckedCreateInput>
  }

  /**
   * custom_field_definitions createMany
   */
  export type custom_field_definitionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many custom_field_definitions.
     */
    data: custom_field_definitionsCreateManyInput | custom_field_definitionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * custom_field_definitions createManyAndReturn
   */
  export type custom_field_definitionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custom_field_definitions
     */
    select?: custom_field_definitionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the custom_field_definitions
     */
    omit?: custom_field_definitionsOmit<ExtArgs> | null
    /**
     * The data used to create many custom_field_definitions.
     */
    data: custom_field_definitionsCreateManyInput | custom_field_definitionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * custom_field_definitions update
   */
  export type custom_field_definitionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custom_field_definitions
     */
    select?: custom_field_definitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custom_field_definitions
     */
    omit?: custom_field_definitionsOmit<ExtArgs> | null
    /**
     * The data needed to update a custom_field_definitions.
     */
    data: XOR<custom_field_definitionsUpdateInput, custom_field_definitionsUncheckedUpdateInput>
    /**
     * Choose, which custom_field_definitions to update.
     */
    where: custom_field_definitionsWhereUniqueInput
  }

  /**
   * custom_field_definitions updateMany
   */
  export type custom_field_definitionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update custom_field_definitions.
     */
    data: XOR<custom_field_definitionsUpdateManyMutationInput, custom_field_definitionsUncheckedUpdateManyInput>
    /**
     * Filter which custom_field_definitions to update
     */
    where?: custom_field_definitionsWhereInput
    /**
     * Limit how many custom_field_definitions to update.
     */
    limit?: number
  }

  /**
   * custom_field_definitions updateManyAndReturn
   */
  export type custom_field_definitionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custom_field_definitions
     */
    select?: custom_field_definitionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the custom_field_definitions
     */
    omit?: custom_field_definitionsOmit<ExtArgs> | null
    /**
     * The data used to update custom_field_definitions.
     */
    data: XOR<custom_field_definitionsUpdateManyMutationInput, custom_field_definitionsUncheckedUpdateManyInput>
    /**
     * Filter which custom_field_definitions to update
     */
    where?: custom_field_definitionsWhereInput
    /**
     * Limit how many custom_field_definitions to update.
     */
    limit?: number
  }

  /**
   * custom_field_definitions upsert
   */
  export type custom_field_definitionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custom_field_definitions
     */
    select?: custom_field_definitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custom_field_definitions
     */
    omit?: custom_field_definitionsOmit<ExtArgs> | null
    /**
     * The filter to search for the custom_field_definitions to update in case it exists.
     */
    where: custom_field_definitionsWhereUniqueInput
    /**
     * In case the custom_field_definitions found by the `where` argument doesn't exist, create a new custom_field_definitions with this data.
     */
    create: XOR<custom_field_definitionsCreateInput, custom_field_definitionsUncheckedCreateInput>
    /**
     * In case the custom_field_definitions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<custom_field_definitionsUpdateInput, custom_field_definitionsUncheckedUpdateInput>
  }

  /**
   * custom_field_definitions delete
   */
  export type custom_field_definitionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custom_field_definitions
     */
    select?: custom_field_definitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custom_field_definitions
     */
    omit?: custom_field_definitionsOmit<ExtArgs> | null
    /**
     * Filter which custom_field_definitions to delete.
     */
    where: custom_field_definitionsWhereUniqueInput
  }

  /**
   * custom_field_definitions deleteMany
   */
  export type custom_field_definitionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which custom_field_definitions to delete
     */
    where?: custom_field_definitionsWhereInput
    /**
     * Limit how many custom_field_definitions to delete.
     */
    limit?: number
  }

  /**
   * custom_field_definitions without action
   */
  export type custom_field_definitionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the custom_field_definitions
     */
    select?: custom_field_definitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the custom_field_definitions
     */
    omit?: custom_field_definitionsOmit<ExtArgs> | null
  }


  /**
   * Model column_config
   */

  export type AggregateColumn_config = {
    _count: Column_configCountAggregateOutputType | null
    _avg: Column_configAvgAggregateOutputType | null
    _sum: Column_configSumAggregateOutputType | null
    _min: Column_configMinAggregateOutputType | null
    _max: Column_configMaxAggregateOutputType | null
  }

  export type Column_configAvgAggregateOutputType = {
    sort_order: number | null
  }

  export type Column_configSumAggregateOutputType = {
    sort_order: number | null
  }

  export type Column_configMinAggregateOutputType = {
    id: string | null
    label: string | null
    visible: boolean | null
    sort_order: number | null
  }

  export type Column_configMaxAggregateOutputType = {
    id: string | null
    label: string | null
    visible: boolean | null
    sort_order: number | null
  }

  export type Column_configCountAggregateOutputType = {
    id: number
    label: number
    visible: number
    sort_order: number
    _all: number
  }


  export type Column_configAvgAggregateInputType = {
    sort_order?: true
  }

  export type Column_configSumAggregateInputType = {
    sort_order?: true
  }

  export type Column_configMinAggregateInputType = {
    id?: true
    label?: true
    visible?: true
    sort_order?: true
  }

  export type Column_configMaxAggregateInputType = {
    id?: true
    label?: true
    visible?: true
    sort_order?: true
  }

  export type Column_configCountAggregateInputType = {
    id?: true
    label?: true
    visible?: true
    sort_order?: true
    _all?: true
  }

  export type Column_configAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which column_config to aggregate.
     */
    where?: column_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of column_configs to fetch.
     */
    orderBy?: column_configOrderByWithRelationInput | column_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: column_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` column_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` column_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned column_configs
    **/
    _count?: true | Column_configCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Column_configAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Column_configSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Column_configMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Column_configMaxAggregateInputType
  }

  export type GetColumn_configAggregateType<T extends Column_configAggregateArgs> = {
        [P in keyof T & keyof AggregateColumn_config]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColumn_config[P]>
      : GetScalarType<T[P], AggregateColumn_config[P]>
  }




  export type column_configGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: column_configWhereInput
    orderBy?: column_configOrderByWithAggregationInput | column_configOrderByWithAggregationInput[]
    by: Column_configScalarFieldEnum[] | Column_configScalarFieldEnum
    having?: column_configScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Column_configCountAggregateInputType | true
    _avg?: Column_configAvgAggregateInputType
    _sum?: Column_configSumAggregateInputType
    _min?: Column_configMinAggregateInputType
    _max?: Column_configMaxAggregateInputType
  }

  export type Column_configGroupByOutputType = {
    id: string
    label: string
    visible: boolean | null
    sort_order: number | null
    _count: Column_configCountAggregateOutputType | null
    _avg: Column_configAvgAggregateOutputType | null
    _sum: Column_configSumAggregateOutputType | null
    _min: Column_configMinAggregateOutputType | null
    _max: Column_configMaxAggregateOutputType | null
  }

  type GetColumn_configGroupByPayload<T extends column_configGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Column_configGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Column_configGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Column_configGroupByOutputType[P]>
            : GetScalarType<T[P], Column_configGroupByOutputType[P]>
        }
      >
    >


  export type column_configSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    visible?: boolean
    sort_order?: boolean
  }, ExtArgs["result"]["column_config"]>

  export type column_configSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    visible?: boolean
    sort_order?: boolean
  }, ExtArgs["result"]["column_config"]>

  export type column_configSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    visible?: boolean
    sort_order?: boolean
  }, ExtArgs["result"]["column_config"]>

  export type column_configSelectScalar = {
    id?: boolean
    label?: boolean
    visible?: boolean
    sort_order?: boolean
  }

  export type column_configOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "visible" | "sort_order", ExtArgs["result"]["column_config"]>

  export type $column_configPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "column_config"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
      visible: boolean | null
      sort_order: number | null
    }, ExtArgs["result"]["column_config"]>
    composites: {}
  }

  type column_configGetPayload<S extends boolean | null | undefined | column_configDefaultArgs> = $Result.GetResult<Prisma.$column_configPayload, S>

  type column_configCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<column_configFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Column_configCountAggregateInputType | true
    }

  export interface column_configDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['column_config'], meta: { name: 'column_config' } }
    /**
     * Find zero or one Column_config that matches the filter.
     * @param {column_configFindUniqueArgs} args - Arguments to find a Column_config
     * @example
     * // Get one Column_config
     * const column_config = await prisma.column_config.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends column_configFindUniqueArgs>(args: SelectSubset<T, column_configFindUniqueArgs<ExtArgs>>): Prisma__column_configClient<$Result.GetResult<Prisma.$column_configPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Column_config that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {column_configFindUniqueOrThrowArgs} args - Arguments to find a Column_config
     * @example
     * // Get one Column_config
     * const column_config = await prisma.column_config.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends column_configFindUniqueOrThrowArgs>(args: SelectSubset<T, column_configFindUniqueOrThrowArgs<ExtArgs>>): Prisma__column_configClient<$Result.GetResult<Prisma.$column_configPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Column_config that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {column_configFindFirstArgs} args - Arguments to find a Column_config
     * @example
     * // Get one Column_config
     * const column_config = await prisma.column_config.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends column_configFindFirstArgs>(args?: SelectSubset<T, column_configFindFirstArgs<ExtArgs>>): Prisma__column_configClient<$Result.GetResult<Prisma.$column_configPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Column_config that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {column_configFindFirstOrThrowArgs} args - Arguments to find a Column_config
     * @example
     * // Get one Column_config
     * const column_config = await prisma.column_config.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends column_configFindFirstOrThrowArgs>(args?: SelectSubset<T, column_configFindFirstOrThrowArgs<ExtArgs>>): Prisma__column_configClient<$Result.GetResult<Prisma.$column_configPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Column_configs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {column_configFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Column_configs
     * const column_configs = await prisma.column_config.findMany()
     * 
     * // Get first 10 Column_configs
     * const column_configs = await prisma.column_config.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const column_configWithIdOnly = await prisma.column_config.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends column_configFindManyArgs>(args?: SelectSubset<T, column_configFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$column_configPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Column_config.
     * @param {column_configCreateArgs} args - Arguments to create a Column_config.
     * @example
     * // Create one Column_config
     * const Column_config = await prisma.column_config.create({
     *   data: {
     *     // ... data to create a Column_config
     *   }
     * })
     * 
     */
    create<T extends column_configCreateArgs>(args: SelectSubset<T, column_configCreateArgs<ExtArgs>>): Prisma__column_configClient<$Result.GetResult<Prisma.$column_configPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Column_configs.
     * @param {column_configCreateManyArgs} args - Arguments to create many Column_configs.
     * @example
     * // Create many Column_configs
     * const column_config = await prisma.column_config.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends column_configCreateManyArgs>(args?: SelectSubset<T, column_configCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Column_configs and returns the data saved in the database.
     * @param {column_configCreateManyAndReturnArgs} args - Arguments to create many Column_configs.
     * @example
     * // Create many Column_configs
     * const column_config = await prisma.column_config.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Column_configs and only return the `id`
     * const column_configWithIdOnly = await prisma.column_config.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends column_configCreateManyAndReturnArgs>(args?: SelectSubset<T, column_configCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$column_configPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Column_config.
     * @param {column_configDeleteArgs} args - Arguments to delete one Column_config.
     * @example
     * // Delete one Column_config
     * const Column_config = await prisma.column_config.delete({
     *   where: {
     *     // ... filter to delete one Column_config
     *   }
     * })
     * 
     */
    delete<T extends column_configDeleteArgs>(args: SelectSubset<T, column_configDeleteArgs<ExtArgs>>): Prisma__column_configClient<$Result.GetResult<Prisma.$column_configPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Column_config.
     * @param {column_configUpdateArgs} args - Arguments to update one Column_config.
     * @example
     * // Update one Column_config
     * const column_config = await prisma.column_config.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends column_configUpdateArgs>(args: SelectSubset<T, column_configUpdateArgs<ExtArgs>>): Prisma__column_configClient<$Result.GetResult<Prisma.$column_configPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Column_configs.
     * @param {column_configDeleteManyArgs} args - Arguments to filter Column_configs to delete.
     * @example
     * // Delete a few Column_configs
     * const { count } = await prisma.column_config.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends column_configDeleteManyArgs>(args?: SelectSubset<T, column_configDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Column_configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {column_configUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Column_configs
     * const column_config = await prisma.column_config.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends column_configUpdateManyArgs>(args: SelectSubset<T, column_configUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Column_configs and returns the data updated in the database.
     * @param {column_configUpdateManyAndReturnArgs} args - Arguments to update many Column_configs.
     * @example
     * // Update many Column_configs
     * const column_config = await prisma.column_config.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Column_configs and only return the `id`
     * const column_configWithIdOnly = await prisma.column_config.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends column_configUpdateManyAndReturnArgs>(args: SelectSubset<T, column_configUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$column_configPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Column_config.
     * @param {column_configUpsertArgs} args - Arguments to update or create a Column_config.
     * @example
     * // Update or create a Column_config
     * const column_config = await prisma.column_config.upsert({
     *   create: {
     *     // ... data to create a Column_config
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Column_config we want to update
     *   }
     * })
     */
    upsert<T extends column_configUpsertArgs>(args: SelectSubset<T, column_configUpsertArgs<ExtArgs>>): Prisma__column_configClient<$Result.GetResult<Prisma.$column_configPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Column_configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {column_configCountArgs} args - Arguments to filter Column_configs to count.
     * @example
     * // Count the number of Column_configs
     * const count = await prisma.column_config.count({
     *   where: {
     *     // ... the filter for the Column_configs we want to count
     *   }
     * })
    **/
    count<T extends column_configCountArgs>(
      args?: Subset<T, column_configCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Column_configCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Column_config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Column_configAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Column_configAggregateArgs>(args: Subset<T, Column_configAggregateArgs>): Prisma.PrismaPromise<GetColumn_configAggregateType<T>>

    /**
     * Group by Column_config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {column_configGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends column_configGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: column_configGroupByArgs['orderBy'] }
        : { orderBy?: column_configGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, column_configGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColumn_configGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the column_config model
   */
  readonly fields: column_configFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for column_config.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__column_configClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the column_config model
   */
  interface column_configFieldRefs {
    readonly id: FieldRef<"column_config", 'String'>
    readonly label: FieldRef<"column_config", 'String'>
    readonly visible: FieldRef<"column_config", 'Boolean'>
    readonly sort_order: FieldRef<"column_config", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * column_config findUnique
   */
  export type column_configFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the column_config
     */
    select?: column_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the column_config
     */
    omit?: column_configOmit<ExtArgs> | null
    /**
     * Filter, which column_config to fetch.
     */
    where: column_configWhereUniqueInput
  }

  /**
   * column_config findUniqueOrThrow
   */
  export type column_configFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the column_config
     */
    select?: column_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the column_config
     */
    omit?: column_configOmit<ExtArgs> | null
    /**
     * Filter, which column_config to fetch.
     */
    where: column_configWhereUniqueInput
  }

  /**
   * column_config findFirst
   */
  export type column_configFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the column_config
     */
    select?: column_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the column_config
     */
    omit?: column_configOmit<ExtArgs> | null
    /**
     * Filter, which column_config to fetch.
     */
    where?: column_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of column_configs to fetch.
     */
    orderBy?: column_configOrderByWithRelationInput | column_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for column_configs.
     */
    cursor?: column_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` column_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` column_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of column_configs.
     */
    distinct?: Column_configScalarFieldEnum | Column_configScalarFieldEnum[]
  }

  /**
   * column_config findFirstOrThrow
   */
  export type column_configFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the column_config
     */
    select?: column_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the column_config
     */
    omit?: column_configOmit<ExtArgs> | null
    /**
     * Filter, which column_config to fetch.
     */
    where?: column_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of column_configs to fetch.
     */
    orderBy?: column_configOrderByWithRelationInput | column_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for column_configs.
     */
    cursor?: column_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` column_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` column_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of column_configs.
     */
    distinct?: Column_configScalarFieldEnum | Column_configScalarFieldEnum[]
  }

  /**
   * column_config findMany
   */
  export type column_configFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the column_config
     */
    select?: column_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the column_config
     */
    omit?: column_configOmit<ExtArgs> | null
    /**
     * Filter, which column_configs to fetch.
     */
    where?: column_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of column_configs to fetch.
     */
    orderBy?: column_configOrderByWithRelationInput | column_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing column_configs.
     */
    cursor?: column_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` column_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` column_configs.
     */
    skip?: number
    distinct?: Column_configScalarFieldEnum | Column_configScalarFieldEnum[]
  }

  /**
   * column_config create
   */
  export type column_configCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the column_config
     */
    select?: column_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the column_config
     */
    omit?: column_configOmit<ExtArgs> | null
    /**
     * The data needed to create a column_config.
     */
    data: XOR<column_configCreateInput, column_configUncheckedCreateInput>
  }

  /**
   * column_config createMany
   */
  export type column_configCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many column_configs.
     */
    data: column_configCreateManyInput | column_configCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * column_config createManyAndReturn
   */
  export type column_configCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the column_config
     */
    select?: column_configSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the column_config
     */
    omit?: column_configOmit<ExtArgs> | null
    /**
     * The data used to create many column_configs.
     */
    data: column_configCreateManyInput | column_configCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * column_config update
   */
  export type column_configUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the column_config
     */
    select?: column_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the column_config
     */
    omit?: column_configOmit<ExtArgs> | null
    /**
     * The data needed to update a column_config.
     */
    data: XOR<column_configUpdateInput, column_configUncheckedUpdateInput>
    /**
     * Choose, which column_config to update.
     */
    where: column_configWhereUniqueInput
  }

  /**
   * column_config updateMany
   */
  export type column_configUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update column_configs.
     */
    data: XOR<column_configUpdateManyMutationInput, column_configUncheckedUpdateManyInput>
    /**
     * Filter which column_configs to update
     */
    where?: column_configWhereInput
    /**
     * Limit how many column_configs to update.
     */
    limit?: number
  }

  /**
   * column_config updateManyAndReturn
   */
  export type column_configUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the column_config
     */
    select?: column_configSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the column_config
     */
    omit?: column_configOmit<ExtArgs> | null
    /**
     * The data used to update column_configs.
     */
    data: XOR<column_configUpdateManyMutationInput, column_configUncheckedUpdateManyInput>
    /**
     * Filter which column_configs to update
     */
    where?: column_configWhereInput
    /**
     * Limit how many column_configs to update.
     */
    limit?: number
  }

  /**
   * column_config upsert
   */
  export type column_configUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the column_config
     */
    select?: column_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the column_config
     */
    omit?: column_configOmit<ExtArgs> | null
    /**
     * The filter to search for the column_config to update in case it exists.
     */
    where: column_configWhereUniqueInput
    /**
     * In case the column_config found by the `where` argument doesn't exist, create a new column_config with this data.
     */
    create: XOR<column_configCreateInput, column_configUncheckedCreateInput>
    /**
     * In case the column_config was found with the provided `where` argument, update it with this data.
     */
    update: XOR<column_configUpdateInput, column_configUncheckedUpdateInput>
  }

  /**
   * column_config delete
   */
  export type column_configDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the column_config
     */
    select?: column_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the column_config
     */
    omit?: column_configOmit<ExtArgs> | null
    /**
     * Filter which column_config to delete.
     */
    where: column_configWhereUniqueInput
  }

  /**
   * column_config deleteMany
   */
  export type column_configDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which column_configs to delete
     */
    where?: column_configWhereInput
    /**
     * Limit how many column_configs to delete.
     */
    limit?: number
  }

  /**
   * column_config without action
   */
  export type column_configDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the column_config
     */
    select?: column_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the column_config
     */
    omit?: column_configOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    email: 'email',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Inventory_itemsScalarFieldEnum: {
    id: 'id',
    code_cliche: 'code_cliche',
    code_forme: 'code_forme',
    machine: 'machine',
    reference: 'reference',
    client: 'client',
    element: 'element',
    supplier_cliche: 'supplier_cliche',
    supplier_forme: 'supplier_forme',
    poses: 'poses',
    date_creation: 'date_creation',
    date_creation_cliche: 'date_creation_cliche',
    is_ordered_cliche: 'is_ordered_cliche',
    date_order_cliche: 'date_order_cliche',
    date_expected_cliche: 'date_expected_cliche',
    date_delivery_cliche: 'date_delivery_cliche',
    date_creation_forme: 'date_creation_forme',
    is_ordered_forme: 'is_ordered_forme',
    date_order_forme: 'date_order_forme',
    date_expected_forme: 'date_expected_forme',
    date_delivery_forme: 'date_delivery_forme',
    comments: 'comments',
    non_conformity: 'non_conformity',
    custom_fields: 'custom_fields'
  };

  export type Inventory_itemsScalarFieldEnum = (typeof Inventory_itemsScalarFieldEnum)[keyof typeof Inventory_itemsScalarFieldEnum]


  export const Otg_repairsScalarFieldEnum: {
    id: 'id',
    type: 'type',
    linked_code: 'linked_code',
    conducteur: 'conducteur',
    machine: 'machine',
    etat: 'etat',
    repair_kind: 'repair_kind',
    supplier: 'supplier',
    declaration_date: 'declaration_date',
    repair_date: 'repair_date',
    problem_description: 'problem_description',
    corrective_action: 'corrective_action',
    status: 'status'
  };

  export type Otg_repairsScalarFieldEnum = (typeof Otg_repairsScalarFieldEnum)[keyof typeof Otg_repairsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    password: 'password',
    photo: 'photo',
    role: 'role',
    permissions: 'permissions'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const App_configScalarFieldEnum: {
    id: 'id',
    data: 'data'
  };

  export type App_configScalarFieldEnum = (typeof App_configScalarFieldEnum)[keyof typeof App_configScalarFieldEnum]


  export const App_settingsScalarFieldEnum: {
    id: 'id',
    primary_color: 'primary_color',
    secondary_color: 'secondary_color',
    logo: 'logo',
    theme: 'theme',
    language: 'language',
    enable_email_alerts: 'enable_email_alerts',
    notification_emails: 'notification_emails'
  };

  export type App_settingsScalarFieldEnum = (typeof App_settingsScalarFieldEnum)[keyof typeof App_settingsScalarFieldEnum]


  export const MachinesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color'
  };

  export type MachinesScalarFieldEnum = (typeof MachinesScalarFieldEnum)[keyof typeof MachinesScalarFieldEnum]


  export const SuppliersScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SuppliersScalarFieldEnum = (typeof SuppliersScalarFieldEnum)[keyof typeof SuppliersScalarFieldEnum]


  export const ConducteursScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ConducteursScalarFieldEnum = (typeof ConducteursScalarFieldEnum)[keyof typeof ConducteursScalarFieldEnum]


  export const Custom_field_definitionsScalarFieldEnum: {
    id: 'id',
    label: 'label',
    type: 'type'
  };

  export type Custom_field_definitionsScalarFieldEnum = (typeof Custom_field_definitionsScalarFieldEnum)[keyof typeof Custom_field_definitionsScalarFieldEnum]


  export const Column_configScalarFieldEnum: {
    id: 'id',
    label: 'label',
    visible: 'visible',
    sort_order: 'sort_order'
  };

  export type Column_configScalarFieldEnum = (typeof Column_configScalarFieldEnum)[keyof typeof Column_configScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    name?: StringNullableFilter<"User"> | string | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type inventory_itemsWhereInput = {
    AND?: inventory_itemsWhereInput | inventory_itemsWhereInput[]
    OR?: inventory_itemsWhereInput[]
    NOT?: inventory_itemsWhereInput | inventory_itemsWhereInput[]
    id?: StringFilter<"inventory_items"> | string
    code_cliche?: StringNullableFilter<"inventory_items"> | string | null
    code_forme?: StringNullableFilter<"inventory_items"> | string | null
    machine?: StringNullableFilter<"inventory_items"> | string | null
    reference?: StringNullableFilter<"inventory_items"> | string | null
    client?: StringNullableFilter<"inventory_items"> | string | null
    element?: StringNullableFilter<"inventory_items"> | string | null
    supplier_cliche?: StringNullableFilter<"inventory_items"> | string | null
    supplier_forme?: StringNullableFilter<"inventory_items"> | string | null
    poses?: IntNullableFilter<"inventory_items"> | number | null
    date_creation?: StringNullableFilter<"inventory_items"> | string | null
    date_creation_cliche?: StringNullableFilter<"inventory_items"> | string | null
    is_ordered_cliche?: BoolNullableFilter<"inventory_items"> | boolean | null
    date_order_cliche?: StringNullableFilter<"inventory_items"> | string | null
    date_expected_cliche?: StringNullableFilter<"inventory_items"> | string | null
    date_delivery_cliche?: StringNullableFilter<"inventory_items"> | string | null
    date_creation_forme?: StringNullableFilter<"inventory_items"> | string | null
    is_ordered_forme?: BoolNullableFilter<"inventory_items"> | boolean | null
    date_order_forme?: StringNullableFilter<"inventory_items"> | string | null
    date_expected_forme?: StringNullableFilter<"inventory_items"> | string | null
    date_delivery_forme?: StringNullableFilter<"inventory_items"> | string | null
    comments?: StringNullableFilter<"inventory_items"> | string | null
    non_conformity?: StringNullableFilter<"inventory_items"> | string | null
    custom_fields?: JsonNullableFilter<"inventory_items">
  }

  export type inventory_itemsOrderByWithRelationInput = {
    id?: SortOrder
    code_cliche?: SortOrderInput | SortOrder
    code_forme?: SortOrderInput | SortOrder
    machine?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    client?: SortOrderInput | SortOrder
    element?: SortOrderInput | SortOrder
    supplier_cliche?: SortOrderInput | SortOrder
    supplier_forme?: SortOrderInput | SortOrder
    poses?: SortOrderInput | SortOrder
    date_creation?: SortOrderInput | SortOrder
    date_creation_cliche?: SortOrderInput | SortOrder
    is_ordered_cliche?: SortOrderInput | SortOrder
    date_order_cliche?: SortOrderInput | SortOrder
    date_expected_cliche?: SortOrderInput | SortOrder
    date_delivery_cliche?: SortOrderInput | SortOrder
    date_creation_forme?: SortOrderInput | SortOrder
    is_ordered_forme?: SortOrderInput | SortOrder
    date_order_forme?: SortOrderInput | SortOrder
    date_expected_forme?: SortOrderInput | SortOrder
    date_delivery_forme?: SortOrderInput | SortOrder
    comments?: SortOrderInput | SortOrder
    non_conformity?: SortOrderInput | SortOrder
    custom_fields?: SortOrderInput | SortOrder
  }

  export type inventory_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: inventory_itemsWhereInput | inventory_itemsWhereInput[]
    OR?: inventory_itemsWhereInput[]
    NOT?: inventory_itemsWhereInput | inventory_itemsWhereInput[]
    code_cliche?: StringNullableFilter<"inventory_items"> | string | null
    code_forme?: StringNullableFilter<"inventory_items"> | string | null
    machine?: StringNullableFilter<"inventory_items"> | string | null
    reference?: StringNullableFilter<"inventory_items"> | string | null
    client?: StringNullableFilter<"inventory_items"> | string | null
    element?: StringNullableFilter<"inventory_items"> | string | null
    supplier_cliche?: StringNullableFilter<"inventory_items"> | string | null
    supplier_forme?: StringNullableFilter<"inventory_items"> | string | null
    poses?: IntNullableFilter<"inventory_items"> | number | null
    date_creation?: StringNullableFilter<"inventory_items"> | string | null
    date_creation_cliche?: StringNullableFilter<"inventory_items"> | string | null
    is_ordered_cliche?: BoolNullableFilter<"inventory_items"> | boolean | null
    date_order_cliche?: StringNullableFilter<"inventory_items"> | string | null
    date_expected_cliche?: StringNullableFilter<"inventory_items"> | string | null
    date_delivery_cliche?: StringNullableFilter<"inventory_items"> | string | null
    date_creation_forme?: StringNullableFilter<"inventory_items"> | string | null
    is_ordered_forme?: BoolNullableFilter<"inventory_items"> | boolean | null
    date_order_forme?: StringNullableFilter<"inventory_items"> | string | null
    date_expected_forme?: StringNullableFilter<"inventory_items"> | string | null
    date_delivery_forme?: StringNullableFilter<"inventory_items"> | string | null
    comments?: StringNullableFilter<"inventory_items"> | string | null
    non_conformity?: StringNullableFilter<"inventory_items"> | string | null
    custom_fields?: JsonNullableFilter<"inventory_items">
  }, "id">

  export type inventory_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    code_cliche?: SortOrderInput | SortOrder
    code_forme?: SortOrderInput | SortOrder
    machine?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    client?: SortOrderInput | SortOrder
    element?: SortOrderInput | SortOrder
    supplier_cliche?: SortOrderInput | SortOrder
    supplier_forme?: SortOrderInput | SortOrder
    poses?: SortOrderInput | SortOrder
    date_creation?: SortOrderInput | SortOrder
    date_creation_cliche?: SortOrderInput | SortOrder
    is_ordered_cliche?: SortOrderInput | SortOrder
    date_order_cliche?: SortOrderInput | SortOrder
    date_expected_cliche?: SortOrderInput | SortOrder
    date_delivery_cliche?: SortOrderInput | SortOrder
    date_creation_forme?: SortOrderInput | SortOrder
    is_ordered_forme?: SortOrderInput | SortOrder
    date_order_forme?: SortOrderInput | SortOrder
    date_expected_forme?: SortOrderInput | SortOrder
    date_delivery_forme?: SortOrderInput | SortOrder
    comments?: SortOrderInput | SortOrder
    non_conformity?: SortOrderInput | SortOrder
    custom_fields?: SortOrderInput | SortOrder
    _count?: inventory_itemsCountOrderByAggregateInput
    _avg?: inventory_itemsAvgOrderByAggregateInput
    _max?: inventory_itemsMaxOrderByAggregateInput
    _min?: inventory_itemsMinOrderByAggregateInput
    _sum?: inventory_itemsSumOrderByAggregateInput
  }

  export type inventory_itemsScalarWhereWithAggregatesInput = {
    AND?: inventory_itemsScalarWhereWithAggregatesInput | inventory_itemsScalarWhereWithAggregatesInput[]
    OR?: inventory_itemsScalarWhereWithAggregatesInput[]
    NOT?: inventory_itemsScalarWhereWithAggregatesInput | inventory_itemsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"inventory_items"> | string
    code_cliche?: StringNullableWithAggregatesFilter<"inventory_items"> | string | null
    code_forme?: StringNullableWithAggregatesFilter<"inventory_items"> | string | null
    machine?: StringNullableWithAggregatesFilter<"inventory_items"> | string | null
    reference?: StringNullableWithAggregatesFilter<"inventory_items"> | string | null
    client?: StringNullableWithAggregatesFilter<"inventory_items"> | string | null
    element?: StringNullableWithAggregatesFilter<"inventory_items"> | string | null
    supplier_cliche?: StringNullableWithAggregatesFilter<"inventory_items"> | string | null
    supplier_forme?: StringNullableWithAggregatesFilter<"inventory_items"> | string | null
    poses?: IntNullableWithAggregatesFilter<"inventory_items"> | number | null
    date_creation?: StringNullableWithAggregatesFilter<"inventory_items"> | string | null
    date_creation_cliche?: StringNullableWithAggregatesFilter<"inventory_items"> | string | null
    is_ordered_cliche?: BoolNullableWithAggregatesFilter<"inventory_items"> | boolean | null
    date_order_cliche?: StringNullableWithAggregatesFilter<"inventory_items"> | string | null
    date_expected_cliche?: StringNullableWithAggregatesFilter<"inventory_items"> | string | null
    date_delivery_cliche?: StringNullableWithAggregatesFilter<"inventory_items"> | string | null
    date_creation_forme?: StringNullableWithAggregatesFilter<"inventory_items"> | string | null
    is_ordered_forme?: BoolNullableWithAggregatesFilter<"inventory_items"> | boolean | null
    date_order_forme?: StringNullableWithAggregatesFilter<"inventory_items"> | string | null
    date_expected_forme?: StringNullableWithAggregatesFilter<"inventory_items"> | string | null
    date_delivery_forme?: StringNullableWithAggregatesFilter<"inventory_items"> | string | null
    comments?: StringNullableWithAggregatesFilter<"inventory_items"> | string | null
    non_conformity?: StringNullableWithAggregatesFilter<"inventory_items"> | string | null
    custom_fields?: JsonNullableWithAggregatesFilter<"inventory_items">
  }

  export type otg_repairsWhereInput = {
    AND?: otg_repairsWhereInput | otg_repairsWhereInput[]
    OR?: otg_repairsWhereInput[]
    NOT?: otg_repairsWhereInput | otg_repairsWhereInput[]
    id?: StringFilter<"otg_repairs"> | string
    type?: StringNullableFilter<"otg_repairs"> | string | null
    linked_code?: StringNullableFilter<"otg_repairs"> | string | null
    conducteur?: StringNullableFilter<"otg_repairs"> | string | null
    machine?: StringNullableFilter<"otg_repairs"> | string | null
    etat?: StringNullableFilter<"otg_repairs"> | string | null
    repair_kind?: StringNullableFilter<"otg_repairs"> | string | null
    supplier?: StringNullableFilter<"otg_repairs"> | string | null
    declaration_date?: StringNullableFilter<"otg_repairs"> | string | null
    repair_date?: StringNullableFilter<"otg_repairs"> | string | null
    problem_description?: StringNullableFilter<"otg_repairs"> | string | null
    corrective_action?: StringNullableFilter<"otg_repairs"> | string | null
    status?: StringNullableFilter<"otg_repairs"> | string | null
  }

  export type otg_repairsOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    linked_code?: SortOrderInput | SortOrder
    conducteur?: SortOrderInput | SortOrder
    machine?: SortOrderInput | SortOrder
    etat?: SortOrderInput | SortOrder
    repair_kind?: SortOrderInput | SortOrder
    supplier?: SortOrderInput | SortOrder
    declaration_date?: SortOrderInput | SortOrder
    repair_date?: SortOrderInput | SortOrder
    problem_description?: SortOrderInput | SortOrder
    corrective_action?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
  }

  export type otg_repairsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: otg_repairsWhereInput | otg_repairsWhereInput[]
    OR?: otg_repairsWhereInput[]
    NOT?: otg_repairsWhereInput | otg_repairsWhereInput[]
    type?: StringNullableFilter<"otg_repairs"> | string | null
    linked_code?: StringNullableFilter<"otg_repairs"> | string | null
    conducteur?: StringNullableFilter<"otg_repairs"> | string | null
    machine?: StringNullableFilter<"otg_repairs"> | string | null
    etat?: StringNullableFilter<"otg_repairs"> | string | null
    repair_kind?: StringNullableFilter<"otg_repairs"> | string | null
    supplier?: StringNullableFilter<"otg_repairs"> | string | null
    declaration_date?: StringNullableFilter<"otg_repairs"> | string | null
    repair_date?: StringNullableFilter<"otg_repairs"> | string | null
    problem_description?: StringNullableFilter<"otg_repairs"> | string | null
    corrective_action?: StringNullableFilter<"otg_repairs"> | string | null
    status?: StringNullableFilter<"otg_repairs"> | string | null
  }, "id">

  export type otg_repairsOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    linked_code?: SortOrderInput | SortOrder
    conducteur?: SortOrderInput | SortOrder
    machine?: SortOrderInput | SortOrder
    etat?: SortOrderInput | SortOrder
    repair_kind?: SortOrderInput | SortOrder
    supplier?: SortOrderInput | SortOrder
    declaration_date?: SortOrderInput | SortOrder
    repair_date?: SortOrderInput | SortOrder
    problem_description?: SortOrderInput | SortOrder
    corrective_action?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: otg_repairsCountOrderByAggregateInput
    _max?: otg_repairsMaxOrderByAggregateInput
    _min?: otg_repairsMinOrderByAggregateInput
  }

  export type otg_repairsScalarWhereWithAggregatesInput = {
    AND?: otg_repairsScalarWhereWithAggregatesInput | otg_repairsScalarWhereWithAggregatesInput[]
    OR?: otg_repairsScalarWhereWithAggregatesInput[]
    NOT?: otg_repairsScalarWhereWithAggregatesInput | otg_repairsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"otg_repairs"> | string
    type?: StringNullableWithAggregatesFilter<"otg_repairs"> | string | null
    linked_code?: StringNullableWithAggregatesFilter<"otg_repairs"> | string | null
    conducteur?: StringNullableWithAggregatesFilter<"otg_repairs"> | string | null
    machine?: StringNullableWithAggregatesFilter<"otg_repairs"> | string | null
    etat?: StringNullableWithAggregatesFilter<"otg_repairs"> | string | null
    repair_kind?: StringNullableWithAggregatesFilter<"otg_repairs"> | string | null
    supplier?: StringNullableWithAggregatesFilter<"otg_repairs"> | string | null
    declaration_date?: StringNullableWithAggregatesFilter<"otg_repairs"> | string | null
    repair_date?: StringNullableWithAggregatesFilter<"otg_repairs"> | string | null
    problem_description?: StringNullableWithAggregatesFilter<"otg_repairs"> | string | null
    corrective_action?: StringNullableWithAggregatesFilter<"otg_repairs"> | string | null
    status?: StringNullableWithAggregatesFilter<"otg_repairs"> | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    name?: StringNullableFilter<"users"> | string | null
    username?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    photo?: StringNullableFilter<"users"> | string | null
    role?: StringNullableFilter<"users"> | string | null
    permissions?: JsonNullableFilter<"users">
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    permissions?: SortOrderInput | SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    photo?: StringNullableFilter<"users"> | string | null
    role?: StringNullableFilter<"users"> | string | null
    permissions?: JsonNullableFilter<"users">
  }, "id" | "username">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    permissions?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    username?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    photo?: StringNullableWithAggregatesFilter<"users"> | string | null
    role?: StringNullableWithAggregatesFilter<"users"> | string | null
    permissions?: JsonNullableWithAggregatesFilter<"users">
  }

  export type app_configWhereInput = {
    AND?: app_configWhereInput | app_configWhereInput[]
    OR?: app_configWhereInput[]
    NOT?: app_configWhereInput | app_configWhereInput[]
    id?: StringFilter<"app_config"> | string
    data?: JsonNullableFilter<"app_config">
  }

  export type app_configOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrderInput | SortOrder
  }

  export type app_configWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: app_configWhereInput | app_configWhereInput[]
    OR?: app_configWhereInput[]
    NOT?: app_configWhereInput | app_configWhereInput[]
    data?: JsonNullableFilter<"app_config">
  }, "id">

  export type app_configOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrderInput | SortOrder
    _count?: app_configCountOrderByAggregateInput
    _max?: app_configMaxOrderByAggregateInput
    _min?: app_configMinOrderByAggregateInput
  }

  export type app_configScalarWhereWithAggregatesInput = {
    AND?: app_configScalarWhereWithAggregatesInput | app_configScalarWhereWithAggregatesInput[]
    OR?: app_configScalarWhereWithAggregatesInput[]
    NOT?: app_configScalarWhereWithAggregatesInput | app_configScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"app_config"> | string
    data?: JsonNullableWithAggregatesFilter<"app_config">
  }

  export type app_settingsWhereInput = {
    AND?: app_settingsWhereInput | app_settingsWhereInput[]
    OR?: app_settingsWhereInput[]
    NOT?: app_settingsWhereInput | app_settingsWhereInput[]
    id?: StringFilter<"app_settings"> | string
    primary_color?: StringNullableFilter<"app_settings"> | string | null
    secondary_color?: StringNullableFilter<"app_settings"> | string | null
    logo?: StringNullableFilter<"app_settings"> | string | null
    theme?: StringNullableFilter<"app_settings"> | string | null
    language?: StringNullableFilter<"app_settings"> | string | null
    enable_email_alerts?: BoolNullableFilter<"app_settings"> | boolean | null
    notification_emails?: StringNullableListFilter<"app_settings">
  }

  export type app_settingsOrderByWithRelationInput = {
    id?: SortOrder
    primary_color?: SortOrderInput | SortOrder
    secondary_color?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    theme?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    enable_email_alerts?: SortOrderInput | SortOrder
    notification_emails?: SortOrder
  }

  export type app_settingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: app_settingsWhereInput | app_settingsWhereInput[]
    OR?: app_settingsWhereInput[]
    NOT?: app_settingsWhereInput | app_settingsWhereInput[]
    primary_color?: StringNullableFilter<"app_settings"> | string | null
    secondary_color?: StringNullableFilter<"app_settings"> | string | null
    logo?: StringNullableFilter<"app_settings"> | string | null
    theme?: StringNullableFilter<"app_settings"> | string | null
    language?: StringNullableFilter<"app_settings"> | string | null
    enable_email_alerts?: BoolNullableFilter<"app_settings"> | boolean | null
    notification_emails?: StringNullableListFilter<"app_settings">
  }, "id">

  export type app_settingsOrderByWithAggregationInput = {
    id?: SortOrder
    primary_color?: SortOrderInput | SortOrder
    secondary_color?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    theme?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    enable_email_alerts?: SortOrderInput | SortOrder
    notification_emails?: SortOrder
    _count?: app_settingsCountOrderByAggregateInput
    _max?: app_settingsMaxOrderByAggregateInput
    _min?: app_settingsMinOrderByAggregateInput
  }

  export type app_settingsScalarWhereWithAggregatesInput = {
    AND?: app_settingsScalarWhereWithAggregatesInput | app_settingsScalarWhereWithAggregatesInput[]
    OR?: app_settingsScalarWhereWithAggregatesInput[]
    NOT?: app_settingsScalarWhereWithAggregatesInput | app_settingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"app_settings"> | string
    primary_color?: StringNullableWithAggregatesFilter<"app_settings"> | string | null
    secondary_color?: StringNullableWithAggregatesFilter<"app_settings"> | string | null
    logo?: StringNullableWithAggregatesFilter<"app_settings"> | string | null
    theme?: StringNullableWithAggregatesFilter<"app_settings"> | string | null
    language?: StringNullableWithAggregatesFilter<"app_settings"> | string | null
    enable_email_alerts?: BoolNullableWithAggregatesFilter<"app_settings"> | boolean | null
    notification_emails?: StringNullableListFilter<"app_settings">
  }

  export type machinesWhereInput = {
    AND?: machinesWhereInput | machinesWhereInput[]
    OR?: machinesWhereInput[]
    NOT?: machinesWhereInput | machinesWhereInput[]
    id?: IntFilter<"machines"> | number
    name?: StringFilter<"machines"> | string
    color?: StringNullableFilter<"machines"> | string | null
  }

  export type machinesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
  }

  export type machinesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: machinesWhereInput | machinesWhereInput[]
    OR?: machinesWhereInput[]
    NOT?: machinesWhereInput | machinesWhereInput[]
    color?: StringNullableFilter<"machines"> | string | null
  }, "id" | "name">

  export type machinesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    _count?: machinesCountOrderByAggregateInput
    _avg?: machinesAvgOrderByAggregateInput
    _max?: machinesMaxOrderByAggregateInput
    _min?: machinesMinOrderByAggregateInput
    _sum?: machinesSumOrderByAggregateInput
  }

  export type machinesScalarWhereWithAggregatesInput = {
    AND?: machinesScalarWhereWithAggregatesInput | machinesScalarWhereWithAggregatesInput[]
    OR?: machinesScalarWhereWithAggregatesInput[]
    NOT?: machinesScalarWhereWithAggregatesInput | machinesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"machines"> | number
    name?: StringWithAggregatesFilter<"machines"> | string
    color?: StringNullableWithAggregatesFilter<"machines"> | string | null
  }

  export type suppliersWhereInput = {
    AND?: suppliersWhereInput | suppliersWhereInput[]
    OR?: suppliersWhereInput[]
    NOT?: suppliersWhereInput | suppliersWhereInput[]
    id?: IntFilter<"suppliers"> | number
    name?: StringFilter<"suppliers"> | string
  }

  export type suppliersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type suppliersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: suppliersWhereInput | suppliersWhereInput[]
    OR?: suppliersWhereInput[]
    NOT?: suppliersWhereInput | suppliersWhereInput[]
  }, "id" | "name">

  export type suppliersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: suppliersCountOrderByAggregateInput
    _avg?: suppliersAvgOrderByAggregateInput
    _max?: suppliersMaxOrderByAggregateInput
    _min?: suppliersMinOrderByAggregateInput
    _sum?: suppliersSumOrderByAggregateInput
  }

  export type suppliersScalarWhereWithAggregatesInput = {
    AND?: suppliersScalarWhereWithAggregatesInput | suppliersScalarWhereWithAggregatesInput[]
    OR?: suppliersScalarWhereWithAggregatesInput[]
    NOT?: suppliersScalarWhereWithAggregatesInput | suppliersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"suppliers"> | number
    name?: StringWithAggregatesFilter<"suppliers"> | string
  }

  export type conducteursWhereInput = {
    AND?: conducteursWhereInput | conducteursWhereInput[]
    OR?: conducteursWhereInput[]
    NOT?: conducteursWhereInput | conducteursWhereInput[]
    id?: IntFilter<"conducteurs"> | number
    name?: StringFilter<"conducteurs"> | string
  }

  export type conducteursOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type conducteursWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: conducteursWhereInput | conducteursWhereInput[]
    OR?: conducteursWhereInput[]
    NOT?: conducteursWhereInput | conducteursWhereInput[]
  }, "id" | "name">

  export type conducteursOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: conducteursCountOrderByAggregateInput
    _avg?: conducteursAvgOrderByAggregateInput
    _max?: conducteursMaxOrderByAggregateInput
    _min?: conducteursMinOrderByAggregateInput
    _sum?: conducteursSumOrderByAggregateInput
  }

  export type conducteursScalarWhereWithAggregatesInput = {
    AND?: conducteursScalarWhereWithAggregatesInput | conducteursScalarWhereWithAggregatesInput[]
    OR?: conducteursScalarWhereWithAggregatesInput[]
    NOT?: conducteursScalarWhereWithAggregatesInput | conducteursScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"conducteurs"> | number
    name?: StringWithAggregatesFilter<"conducteurs"> | string
  }

  export type custom_field_definitionsWhereInput = {
    AND?: custom_field_definitionsWhereInput | custom_field_definitionsWhereInput[]
    OR?: custom_field_definitionsWhereInput[]
    NOT?: custom_field_definitionsWhereInput | custom_field_definitionsWhereInput[]
    id?: StringFilter<"custom_field_definitions"> | string
    label?: StringFilter<"custom_field_definitions"> | string
    type?: StringFilter<"custom_field_definitions"> | string
  }

  export type custom_field_definitionsOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    type?: SortOrder
  }

  export type custom_field_definitionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: custom_field_definitionsWhereInput | custom_field_definitionsWhereInput[]
    OR?: custom_field_definitionsWhereInput[]
    NOT?: custom_field_definitionsWhereInput | custom_field_definitionsWhereInput[]
    label?: StringFilter<"custom_field_definitions"> | string
    type?: StringFilter<"custom_field_definitions"> | string
  }, "id">

  export type custom_field_definitionsOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    type?: SortOrder
    _count?: custom_field_definitionsCountOrderByAggregateInput
    _max?: custom_field_definitionsMaxOrderByAggregateInput
    _min?: custom_field_definitionsMinOrderByAggregateInput
  }

  export type custom_field_definitionsScalarWhereWithAggregatesInput = {
    AND?: custom_field_definitionsScalarWhereWithAggregatesInput | custom_field_definitionsScalarWhereWithAggregatesInput[]
    OR?: custom_field_definitionsScalarWhereWithAggregatesInput[]
    NOT?: custom_field_definitionsScalarWhereWithAggregatesInput | custom_field_definitionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"custom_field_definitions"> | string
    label?: StringWithAggregatesFilter<"custom_field_definitions"> | string
    type?: StringWithAggregatesFilter<"custom_field_definitions"> | string
  }

  export type column_configWhereInput = {
    AND?: column_configWhereInput | column_configWhereInput[]
    OR?: column_configWhereInput[]
    NOT?: column_configWhereInput | column_configWhereInput[]
    id?: StringFilter<"column_config"> | string
    label?: StringFilter<"column_config"> | string
    visible?: BoolNullableFilter<"column_config"> | boolean | null
    sort_order?: IntNullableFilter<"column_config"> | number | null
  }

  export type column_configOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    visible?: SortOrderInput | SortOrder
    sort_order?: SortOrderInput | SortOrder
  }

  export type column_configWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: column_configWhereInput | column_configWhereInput[]
    OR?: column_configWhereInput[]
    NOT?: column_configWhereInput | column_configWhereInput[]
    label?: StringFilter<"column_config"> | string
    visible?: BoolNullableFilter<"column_config"> | boolean | null
    sort_order?: IntNullableFilter<"column_config"> | number | null
  }, "id">

  export type column_configOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    visible?: SortOrderInput | SortOrder
    sort_order?: SortOrderInput | SortOrder
    _count?: column_configCountOrderByAggregateInput
    _avg?: column_configAvgOrderByAggregateInput
    _max?: column_configMaxOrderByAggregateInput
    _min?: column_configMinOrderByAggregateInput
    _sum?: column_configSumOrderByAggregateInput
  }

  export type column_configScalarWhereWithAggregatesInput = {
    AND?: column_configScalarWhereWithAggregatesInput | column_configScalarWhereWithAggregatesInput[]
    OR?: column_configScalarWhereWithAggregatesInput[]
    NOT?: column_configScalarWhereWithAggregatesInput | column_configScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"column_config"> | string
    label?: StringWithAggregatesFilter<"column_config"> | string
    visible?: BoolNullableWithAggregatesFilter<"column_config"> | boolean | null
    sort_order?: IntNullableWithAggregatesFilter<"column_config"> | number | null
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    email: string
    name?: string | null
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    email: string
    name?: string | null
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyInput = {
    id?: number
    createdAt?: Date | string
    email: string
    name?: string | null
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type inventory_itemsCreateInput = {
    id: string
    code_cliche?: string | null
    code_forme?: string | null
    machine?: string | null
    reference?: string | null
    client?: string | null
    element?: string | null
    supplier_cliche?: string | null
    supplier_forme?: string | null
    poses?: number | null
    date_creation?: string | null
    date_creation_cliche?: string | null
    is_ordered_cliche?: boolean | null
    date_order_cliche?: string | null
    date_expected_cliche?: string | null
    date_delivery_cliche?: string | null
    date_creation_forme?: string | null
    is_ordered_forme?: boolean | null
    date_order_forme?: string | null
    date_expected_forme?: string | null
    date_delivery_forme?: string | null
    comments?: string | null
    non_conformity?: string | null
    custom_fields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type inventory_itemsUncheckedCreateInput = {
    id: string
    code_cliche?: string | null
    code_forme?: string | null
    machine?: string | null
    reference?: string | null
    client?: string | null
    element?: string | null
    supplier_cliche?: string | null
    supplier_forme?: string | null
    poses?: number | null
    date_creation?: string | null
    date_creation_cliche?: string | null
    is_ordered_cliche?: boolean | null
    date_order_cliche?: string | null
    date_expected_cliche?: string | null
    date_delivery_cliche?: string | null
    date_creation_forme?: string | null
    is_ordered_forme?: boolean | null
    date_order_forme?: string | null
    date_expected_forme?: string | null
    date_delivery_forme?: string | null
    comments?: string | null
    non_conformity?: string | null
    custom_fields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type inventory_itemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code_cliche?: NullableStringFieldUpdateOperationsInput | string | null
    code_forme?: NullableStringFieldUpdateOperationsInput | string | null
    machine?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableStringFieldUpdateOperationsInput | string | null
    supplier_cliche?: NullableStringFieldUpdateOperationsInput | string | null
    supplier_forme?: NullableStringFieldUpdateOperationsInput | string | null
    poses?: NullableIntFieldUpdateOperationsInput | number | null
    date_creation?: NullableStringFieldUpdateOperationsInput | string | null
    date_creation_cliche?: NullableStringFieldUpdateOperationsInput | string | null
    is_ordered_cliche?: NullableBoolFieldUpdateOperationsInput | boolean | null
    date_order_cliche?: NullableStringFieldUpdateOperationsInput | string | null
    date_expected_cliche?: NullableStringFieldUpdateOperationsInput | string | null
    date_delivery_cliche?: NullableStringFieldUpdateOperationsInput | string | null
    date_creation_forme?: NullableStringFieldUpdateOperationsInput | string | null
    is_ordered_forme?: NullableBoolFieldUpdateOperationsInput | boolean | null
    date_order_forme?: NullableStringFieldUpdateOperationsInput | string | null
    date_expected_forme?: NullableStringFieldUpdateOperationsInput | string | null
    date_delivery_forme?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    non_conformity?: NullableStringFieldUpdateOperationsInput | string | null
    custom_fields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type inventory_itemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code_cliche?: NullableStringFieldUpdateOperationsInput | string | null
    code_forme?: NullableStringFieldUpdateOperationsInput | string | null
    machine?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableStringFieldUpdateOperationsInput | string | null
    supplier_cliche?: NullableStringFieldUpdateOperationsInput | string | null
    supplier_forme?: NullableStringFieldUpdateOperationsInput | string | null
    poses?: NullableIntFieldUpdateOperationsInput | number | null
    date_creation?: NullableStringFieldUpdateOperationsInput | string | null
    date_creation_cliche?: NullableStringFieldUpdateOperationsInput | string | null
    is_ordered_cliche?: NullableBoolFieldUpdateOperationsInput | boolean | null
    date_order_cliche?: NullableStringFieldUpdateOperationsInput | string | null
    date_expected_cliche?: NullableStringFieldUpdateOperationsInput | string | null
    date_delivery_cliche?: NullableStringFieldUpdateOperationsInput | string | null
    date_creation_forme?: NullableStringFieldUpdateOperationsInput | string | null
    is_ordered_forme?: NullableBoolFieldUpdateOperationsInput | boolean | null
    date_order_forme?: NullableStringFieldUpdateOperationsInput | string | null
    date_expected_forme?: NullableStringFieldUpdateOperationsInput | string | null
    date_delivery_forme?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    non_conformity?: NullableStringFieldUpdateOperationsInput | string | null
    custom_fields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type inventory_itemsCreateManyInput = {
    id: string
    code_cliche?: string | null
    code_forme?: string | null
    machine?: string | null
    reference?: string | null
    client?: string | null
    element?: string | null
    supplier_cliche?: string | null
    supplier_forme?: string | null
    poses?: number | null
    date_creation?: string | null
    date_creation_cliche?: string | null
    is_ordered_cliche?: boolean | null
    date_order_cliche?: string | null
    date_expected_cliche?: string | null
    date_delivery_cliche?: string | null
    date_creation_forme?: string | null
    is_ordered_forme?: boolean | null
    date_order_forme?: string | null
    date_expected_forme?: string | null
    date_delivery_forme?: string | null
    comments?: string | null
    non_conformity?: string | null
    custom_fields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type inventory_itemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code_cliche?: NullableStringFieldUpdateOperationsInput | string | null
    code_forme?: NullableStringFieldUpdateOperationsInput | string | null
    machine?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableStringFieldUpdateOperationsInput | string | null
    supplier_cliche?: NullableStringFieldUpdateOperationsInput | string | null
    supplier_forme?: NullableStringFieldUpdateOperationsInput | string | null
    poses?: NullableIntFieldUpdateOperationsInput | number | null
    date_creation?: NullableStringFieldUpdateOperationsInput | string | null
    date_creation_cliche?: NullableStringFieldUpdateOperationsInput | string | null
    is_ordered_cliche?: NullableBoolFieldUpdateOperationsInput | boolean | null
    date_order_cliche?: NullableStringFieldUpdateOperationsInput | string | null
    date_expected_cliche?: NullableStringFieldUpdateOperationsInput | string | null
    date_delivery_cliche?: NullableStringFieldUpdateOperationsInput | string | null
    date_creation_forme?: NullableStringFieldUpdateOperationsInput | string | null
    is_ordered_forme?: NullableBoolFieldUpdateOperationsInput | boolean | null
    date_order_forme?: NullableStringFieldUpdateOperationsInput | string | null
    date_expected_forme?: NullableStringFieldUpdateOperationsInput | string | null
    date_delivery_forme?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    non_conformity?: NullableStringFieldUpdateOperationsInput | string | null
    custom_fields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type inventory_itemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code_cliche?: NullableStringFieldUpdateOperationsInput | string | null
    code_forme?: NullableStringFieldUpdateOperationsInput | string | null
    machine?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableStringFieldUpdateOperationsInput | string | null
    supplier_cliche?: NullableStringFieldUpdateOperationsInput | string | null
    supplier_forme?: NullableStringFieldUpdateOperationsInput | string | null
    poses?: NullableIntFieldUpdateOperationsInput | number | null
    date_creation?: NullableStringFieldUpdateOperationsInput | string | null
    date_creation_cliche?: NullableStringFieldUpdateOperationsInput | string | null
    is_ordered_cliche?: NullableBoolFieldUpdateOperationsInput | boolean | null
    date_order_cliche?: NullableStringFieldUpdateOperationsInput | string | null
    date_expected_cliche?: NullableStringFieldUpdateOperationsInput | string | null
    date_delivery_cliche?: NullableStringFieldUpdateOperationsInput | string | null
    date_creation_forme?: NullableStringFieldUpdateOperationsInput | string | null
    is_ordered_forme?: NullableBoolFieldUpdateOperationsInput | boolean | null
    date_order_forme?: NullableStringFieldUpdateOperationsInput | string | null
    date_expected_forme?: NullableStringFieldUpdateOperationsInput | string | null
    date_delivery_forme?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    non_conformity?: NullableStringFieldUpdateOperationsInput | string | null
    custom_fields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type otg_repairsCreateInput = {
    id: string
    type?: string | null
    linked_code?: string | null
    conducteur?: string | null
    machine?: string | null
    etat?: string | null
    repair_kind?: string | null
    supplier?: string | null
    declaration_date?: string | null
    repair_date?: string | null
    problem_description?: string | null
    corrective_action?: string | null
    status?: string | null
  }

  export type otg_repairsUncheckedCreateInput = {
    id: string
    type?: string | null
    linked_code?: string | null
    conducteur?: string | null
    machine?: string | null
    etat?: string | null
    repair_kind?: string | null
    supplier?: string | null
    declaration_date?: string | null
    repair_date?: string | null
    problem_description?: string | null
    corrective_action?: string | null
    status?: string | null
  }

  export type otg_repairsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    linked_code?: NullableStringFieldUpdateOperationsInput | string | null
    conducteur?: NullableStringFieldUpdateOperationsInput | string | null
    machine?: NullableStringFieldUpdateOperationsInput | string | null
    etat?: NullableStringFieldUpdateOperationsInput | string | null
    repair_kind?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    declaration_date?: NullableStringFieldUpdateOperationsInput | string | null
    repair_date?: NullableStringFieldUpdateOperationsInput | string | null
    problem_description?: NullableStringFieldUpdateOperationsInput | string | null
    corrective_action?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type otg_repairsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    linked_code?: NullableStringFieldUpdateOperationsInput | string | null
    conducteur?: NullableStringFieldUpdateOperationsInput | string | null
    machine?: NullableStringFieldUpdateOperationsInput | string | null
    etat?: NullableStringFieldUpdateOperationsInput | string | null
    repair_kind?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    declaration_date?: NullableStringFieldUpdateOperationsInput | string | null
    repair_date?: NullableStringFieldUpdateOperationsInput | string | null
    problem_description?: NullableStringFieldUpdateOperationsInput | string | null
    corrective_action?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type otg_repairsCreateManyInput = {
    id: string
    type?: string | null
    linked_code?: string | null
    conducteur?: string | null
    machine?: string | null
    etat?: string | null
    repair_kind?: string | null
    supplier?: string | null
    declaration_date?: string | null
    repair_date?: string | null
    problem_description?: string | null
    corrective_action?: string | null
    status?: string | null
  }

  export type otg_repairsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    linked_code?: NullableStringFieldUpdateOperationsInput | string | null
    conducteur?: NullableStringFieldUpdateOperationsInput | string | null
    machine?: NullableStringFieldUpdateOperationsInput | string | null
    etat?: NullableStringFieldUpdateOperationsInput | string | null
    repair_kind?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    declaration_date?: NullableStringFieldUpdateOperationsInput | string | null
    repair_date?: NullableStringFieldUpdateOperationsInput | string | null
    problem_description?: NullableStringFieldUpdateOperationsInput | string | null
    corrective_action?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type otg_repairsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    linked_code?: NullableStringFieldUpdateOperationsInput | string | null
    conducteur?: NullableStringFieldUpdateOperationsInput | string | null
    machine?: NullableStringFieldUpdateOperationsInput | string | null
    etat?: NullableStringFieldUpdateOperationsInput | string | null
    repair_kind?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    declaration_date?: NullableStringFieldUpdateOperationsInput | string | null
    repair_date?: NullableStringFieldUpdateOperationsInput | string | null
    problem_description?: NullableStringFieldUpdateOperationsInput | string | null
    corrective_action?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateInput = {
    id: string
    name?: string | null
    username?: string | null
    password?: string | null
    photo?: string | null
    role?: string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type usersUncheckedCreateInput = {
    id: string
    name?: string | null
    username?: string | null
    password?: string | null
    photo?: string | null
    role?: string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type usersCreateManyInput = {
    id: string
    name?: string | null
    username?: string | null
    password?: string | null
    photo?: string | null
    role?: string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type app_configCreateInput = {
    id: string
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type app_configUncheckedCreateInput = {
    id: string
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type app_configUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type app_configUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type app_configCreateManyInput = {
    id: string
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type app_configUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type app_configUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type app_settingsCreateInput = {
    id: string
    primary_color?: string | null
    secondary_color?: string | null
    logo?: string | null
    theme?: string | null
    language?: string | null
    enable_email_alerts?: boolean | null
    notification_emails?: app_settingsCreatenotification_emailsInput | string[]
  }

  export type app_settingsUncheckedCreateInput = {
    id: string
    primary_color?: string | null
    secondary_color?: string | null
    logo?: string | null
    theme?: string | null
    language?: string | null
    enable_email_alerts?: boolean | null
    notification_emails?: app_settingsCreatenotification_emailsInput | string[]
  }

  export type app_settingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    primary_color?: NullableStringFieldUpdateOperationsInput | string | null
    secondary_color?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    enable_email_alerts?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notification_emails?: app_settingsUpdatenotification_emailsInput | string[]
  }

  export type app_settingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    primary_color?: NullableStringFieldUpdateOperationsInput | string | null
    secondary_color?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    enable_email_alerts?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notification_emails?: app_settingsUpdatenotification_emailsInput | string[]
  }

  export type app_settingsCreateManyInput = {
    id: string
    primary_color?: string | null
    secondary_color?: string | null
    logo?: string | null
    theme?: string | null
    language?: string | null
    enable_email_alerts?: boolean | null
    notification_emails?: app_settingsCreatenotification_emailsInput | string[]
  }

  export type app_settingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    primary_color?: NullableStringFieldUpdateOperationsInput | string | null
    secondary_color?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    enable_email_alerts?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notification_emails?: app_settingsUpdatenotification_emailsInput | string[]
  }

  export type app_settingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    primary_color?: NullableStringFieldUpdateOperationsInput | string | null
    secondary_color?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    enable_email_alerts?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notification_emails?: app_settingsUpdatenotification_emailsInput | string[]
  }

  export type machinesCreateInput = {
    name: string
    color?: string | null
  }

  export type machinesUncheckedCreateInput = {
    id?: number
    name: string
    color?: string | null
  }

  export type machinesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type machinesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type machinesCreateManyInput = {
    id?: number
    name: string
    color?: string | null
  }

  export type machinesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type machinesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type suppliersCreateInput = {
    name: string
  }

  export type suppliersUncheckedCreateInput = {
    id?: number
    name: string
  }

  export type suppliersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type suppliersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type suppliersCreateManyInput = {
    id?: number
    name: string
  }

  export type suppliersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type suppliersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type conducteursCreateInput = {
    name: string
  }

  export type conducteursUncheckedCreateInput = {
    id?: number
    name: string
  }

  export type conducteursUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type conducteursUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type conducteursCreateManyInput = {
    id?: number
    name: string
  }

  export type conducteursUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type conducteursUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type custom_field_definitionsCreateInput = {
    id: string
    label: string
    type: string
  }

  export type custom_field_definitionsUncheckedCreateInput = {
    id: string
    label: string
    type: string
  }

  export type custom_field_definitionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type custom_field_definitionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type custom_field_definitionsCreateManyInput = {
    id: string
    label: string
    type: string
  }

  export type custom_field_definitionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type custom_field_definitionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type column_configCreateInput = {
    id: string
    label: string
    visible?: boolean | null
    sort_order?: number | null
  }

  export type column_configUncheckedCreateInput = {
    id: string
    label: string
    visible?: boolean | null
    sort_order?: number | null
  }

  export type column_configUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type column_configUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type column_configCreateManyInput = {
    id: string
    label: string
    visible?: boolean | null
    sort_order?: number | null
  }

  export type column_configUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type column_configUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type inventory_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    code_cliche?: SortOrder
    code_forme?: SortOrder
    machine?: SortOrder
    reference?: SortOrder
    client?: SortOrder
    element?: SortOrder
    supplier_cliche?: SortOrder
    supplier_forme?: SortOrder
    poses?: SortOrder
    date_creation?: SortOrder
    date_creation_cliche?: SortOrder
    is_ordered_cliche?: SortOrder
    date_order_cliche?: SortOrder
    date_expected_cliche?: SortOrder
    date_delivery_cliche?: SortOrder
    date_creation_forme?: SortOrder
    is_ordered_forme?: SortOrder
    date_order_forme?: SortOrder
    date_expected_forme?: SortOrder
    date_delivery_forme?: SortOrder
    comments?: SortOrder
    non_conformity?: SortOrder
    custom_fields?: SortOrder
  }

  export type inventory_itemsAvgOrderByAggregateInput = {
    poses?: SortOrder
  }

  export type inventory_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    code_cliche?: SortOrder
    code_forme?: SortOrder
    machine?: SortOrder
    reference?: SortOrder
    client?: SortOrder
    element?: SortOrder
    supplier_cliche?: SortOrder
    supplier_forme?: SortOrder
    poses?: SortOrder
    date_creation?: SortOrder
    date_creation_cliche?: SortOrder
    is_ordered_cliche?: SortOrder
    date_order_cliche?: SortOrder
    date_expected_cliche?: SortOrder
    date_delivery_cliche?: SortOrder
    date_creation_forme?: SortOrder
    is_ordered_forme?: SortOrder
    date_order_forme?: SortOrder
    date_expected_forme?: SortOrder
    date_delivery_forme?: SortOrder
    comments?: SortOrder
    non_conformity?: SortOrder
  }

  export type inventory_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    code_cliche?: SortOrder
    code_forme?: SortOrder
    machine?: SortOrder
    reference?: SortOrder
    client?: SortOrder
    element?: SortOrder
    supplier_cliche?: SortOrder
    supplier_forme?: SortOrder
    poses?: SortOrder
    date_creation?: SortOrder
    date_creation_cliche?: SortOrder
    is_ordered_cliche?: SortOrder
    date_order_cliche?: SortOrder
    date_expected_cliche?: SortOrder
    date_delivery_cliche?: SortOrder
    date_creation_forme?: SortOrder
    is_ordered_forme?: SortOrder
    date_order_forme?: SortOrder
    date_expected_forme?: SortOrder
    date_delivery_forme?: SortOrder
    comments?: SortOrder
    non_conformity?: SortOrder
  }

  export type inventory_itemsSumOrderByAggregateInput = {
    poses?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type otg_repairsCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    linked_code?: SortOrder
    conducteur?: SortOrder
    machine?: SortOrder
    etat?: SortOrder
    repair_kind?: SortOrder
    supplier?: SortOrder
    declaration_date?: SortOrder
    repair_date?: SortOrder
    problem_description?: SortOrder
    corrective_action?: SortOrder
    status?: SortOrder
  }

  export type otg_repairsMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    linked_code?: SortOrder
    conducteur?: SortOrder
    machine?: SortOrder
    etat?: SortOrder
    repair_kind?: SortOrder
    supplier?: SortOrder
    declaration_date?: SortOrder
    repair_date?: SortOrder
    problem_description?: SortOrder
    corrective_action?: SortOrder
    status?: SortOrder
  }

  export type otg_repairsMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    linked_code?: SortOrder
    conducteur?: SortOrder
    machine?: SortOrder
    etat?: SortOrder
    repair_kind?: SortOrder
    supplier?: SortOrder
    declaration_date?: SortOrder
    repair_date?: SortOrder
    problem_description?: SortOrder
    corrective_action?: SortOrder
    status?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    photo?: SortOrder
    role?: SortOrder
    permissions?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    photo?: SortOrder
    role?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    photo?: SortOrder
    role?: SortOrder
  }

  export type app_configCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
  }

  export type app_configMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type app_configMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type app_settingsCountOrderByAggregateInput = {
    id?: SortOrder
    primary_color?: SortOrder
    secondary_color?: SortOrder
    logo?: SortOrder
    theme?: SortOrder
    language?: SortOrder
    enable_email_alerts?: SortOrder
    notification_emails?: SortOrder
  }

  export type app_settingsMaxOrderByAggregateInput = {
    id?: SortOrder
    primary_color?: SortOrder
    secondary_color?: SortOrder
    logo?: SortOrder
    theme?: SortOrder
    language?: SortOrder
    enable_email_alerts?: SortOrder
  }

  export type app_settingsMinOrderByAggregateInput = {
    id?: SortOrder
    primary_color?: SortOrder
    secondary_color?: SortOrder
    logo?: SortOrder
    theme?: SortOrder
    language?: SortOrder
    enable_email_alerts?: SortOrder
  }

  export type machinesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
  }

  export type machinesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type machinesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
  }

  export type machinesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
  }

  export type machinesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type suppliersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type suppliersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type suppliersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type suppliersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type suppliersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type conducteursCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type conducteursAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type conducteursMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type conducteursMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type conducteursSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type custom_field_definitionsCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    type?: SortOrder
  }

  export type custom_field_definitionsMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    type?: SortOrder
  }

  export type custom_field_definitionsMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    type?: SortOrder
  }

  export type column_configCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    visible?: SortOrder
    sort_order?: SortOrder
  }

  export type column_configAvgOrderByAggregateInput = {
    sort_order?: SortOrder
  }

  export type column_configMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    visible?: SortOrder
    sort_order?: SortOrder
  }

  export type column_configMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    visible?: SortOrder
    sort_order?: SortOrder
  }

  export type column_configSumOrderByAggregateInput = {
    sort_order?: SortOrder
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type app_settingsCreatenotification_emailsInput = {
    set: string[]
  }

  export type app_settingsUpdatenotification_emailsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}