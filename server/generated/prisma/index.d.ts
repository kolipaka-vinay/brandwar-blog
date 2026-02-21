
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
 * Model Blog
 * 
 */
export type Blog = $Result.DefaultSelection<Prisma.$BlogPayload>
/**
 * Model BlogContentBlock
 * 
 */
export type BlogContentBlock = $Result.DefaultSelection<Prisma.$BlogContentBlockPayload>
/**
 * Model News
 * 
 */
export type News = $Result.DefaultSelection<Prisma.$NewsPayload>
/**
 * Model VideoFolder
 * 
 */
export type VideoFolder = $Result.DefaultSelection<Prisma.$VideoFolderPayload>
/**
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>
/**
 * Model NewsContentBlock
 * 
 */
export type NewsContentBlock = $Result.DefaultSelection<Prisma.$NewsContentBlockPayload>
/**
 * Model ImageFolder
 * 
 */
export type ImageFolder = $Result.DefaultSelection<Prisma.$ImageFolderPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  SUPERADMIN: 'SUPERADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

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
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogContentBlock`: Exposes CRUD operations for the **BlogContentBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogContentBlocks
    * const blogContentBlocks = await prisma.blogContentBlock.findMany()
    * ```
    */
  get blogContentBlock(): Prisma.BlogContentBlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.news`: Exposes CRUD operations for the **News** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News
    * const news = await prisma.news.findMany()
    * ```
    */
  get news(): Prisma.NewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videoFolder`: Exposes CRUD operations for the **VideoFolder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoFolders
    * const videoFolders = await prisma.videoFolder.findMany()
    * ```
    */
  get videoFolder(): Prisma.VideoFolderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsContentBlock`: Exposes CRUD operations for the **NewsContentBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsContentBlocks
    * const newsContentBlocks = await prisma.newsContentBlock.findMany()
    * ```
    */
  get newsContentBlock(): Prisma.NewsContentBlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imageFolder`: Exposes CRUD operations for the **ImageFolder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImageFolders
    * const imageFolders = await prisma.imageFolder.findMany()
    * ```
    */
  get imageFolder(): Prisma.ImageFolderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;
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
    Blog: 'Blog',
    BlogContentBlock: 'BlogContentBlock',
    News: 'News',
    VideoFolder: 'VideoFolder',
    Video: 'Video',
    NewsContentBlock: 'NewsContentBlock',
    ImageFolder: 'ImageFolder',
    Image: 'Image'
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
      modelProps: "user" | "blog" | "blogContentBlock" | "news" | "videoFolder" | "video" | "newsContentBlock" | "imageFolder" | "image"
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
      Blog: {
        payload: Prisma.$BlogPayload<ExtArgs>
        fields: Prisma.BlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findFirst: {
            args: Prisma.BlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findMany: {
            args: Prisma.BlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          create: {
            args: Prisma.BlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          createMany: {
            args: Prisma.BlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          delete: {
            args: Prisma.BlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          update: {
            args: Prisma.BlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          deleteMany: {
            args: Prisma.BlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          upsert: {
            args: Prisma.BlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
          }
        }
      }
      BlogContentBlock: {
        payload: Prisma.$BlogContentBlockPayload<ExtArgs>
        fields: Prisma.BlogContentBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogContentBlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogContentBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogContentBlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogContentBlockPayload>
          }
          findFirst: {
            args: Prisma.BlogContentBlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogContentBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogContentBlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogContentBlockPayload>
          }
          findMany: {
            args: Prisma.BlogContentBlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogContentBlockPayload>[]
          }
          create: {
            args: Prisma.BlogContentBlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogContentBlockPayload>
          }
          createMany: {
            args: Prisma.BlogContentBlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogContentBlockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogContentBlockPayload>[]
          }
          delete: {
            args: Prisma.BlogContentBlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogContentBlockPayload>
          }
          update: {
            args: Prisma.BlogContentBlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogContentBlockPayload>
          }
          deleteMany: {
            args: Prisma.BlogContentBlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogContentBlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogContentBlockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogContentBlockPayload>[]
          }
          upsert: {
            args: Prisma.BlogContentBlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogContentBlockPayload>
          }
          aggregate: {
            args: Prisma.BlogContentBlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogContentBlock>
          }
          groupBy: {
            args: Prisma.BlogContentBlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogContentBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogContentBlockCountArgs<ExtArgs>
            result: $Utils.Optional<BlogContentBlockCountAggregateOutputType> | number
          }
        }
      }
      News: {
        payload: Prisma.$NewsPayload<ExtArgs>
        fields: Prisma.NewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findFirst: {
            args: Prisma.NewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findMany: {
            args: Prisma.NewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          create: {
            args: Prisma.NewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          createMany: {
            args: Prisma.NewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          delete: {
            args: Prisma.NewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          update: {
            args: Prisma.NewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          deleteMany: {
            args: Prisma.NewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          upsert: {
            args: Prisma.NewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          aggregate: {
            args: Prisma.NewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNews>
          }
          groupBy: {
            args: Prisma.NewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCountAggregateOutputType> | number
          }
        }
      }
      VideoFolder: {
        payload: Prisma.$VideoFolderPayload<ExtArgs>
        fields: Prisma.VideoFolderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFolderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoFolderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFolderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoFolderPayload>
          }
          findFirst: {
            args: Prisma.VideoFolderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoFolderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFolderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoFolderPayload>
          }
          findMany: {
            args: Prisma.VideoFolderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoFolderPayload>[]
          }
          create: {
            args: Prisma.VideoFolderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoFolderPayload>
          }
          createMany: {
            args: Prisma.VideoFolderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoFolderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoFolderPayload>[]
          }
          delete: {
            args: Prisma.VideoFolderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoFolderPayload>
          }
          update: {
            args: Prisma.VideoFolderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoFolderPayload>
          }
          deleteMany: {
            args: Prisma.VideoFolderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoFolderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoFolderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoFolderPayload>[]
          }
          upsert: {
            args: Prisma.VideoFolderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoFolderPayload>
          }
          aggregate: {
            args: Prisma.VideoFolderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideoFolder>
          }
          groupBy: {
            args: Prisma.VideoFolderGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoFolderGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoFolderCountArgs<ExtArgs>
            result: $Utils.Optional<VideoFolderCountAggregateOutputType> | number
          }
        }
      }
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
      NewsContentBlock: {
        payload: Prisma.$NewsContentBlockPayload<ExtArgs>
        fields: Prisma.NewsContentBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsContentBlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsContentBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsContentBlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsContentBlockPayload>
          }
          findFirst: {
            args: Prisma.NewsContentBlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsContentBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsContentBlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsContentBlockPayload>
          }
          findMany: {
            args: Prisma.NewsContentBlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsContentBlockPayload>[]
          }
          create: {
            args: Prisma.NewsContentBlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsContentBlockPayload>
          }
          createMany: {
            args: Prisma.NewsContentBlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsContentBlockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsContentBlockPayload>[]
          }
          delete: {
            args: Prisma.NewsContentBlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsContentBlockPayload>
          }
          update: {
            args: Prisma.NewsContentBlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsContentBlockPayload>
          }
          deleteMany: {
            args: Prisma.NewsContentBlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsContentBlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsContentBlockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsContentBlockPayload>[]
          }
          upsert: {
            args: Prisma.NewsContentBlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsContentBlockPayload>
          }
          aggregate: {
            args: Prisma.NewsContentBlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsContentBlock>
          }
          groupBy: {
            args: Prisma.NewsContentBlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsContentBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsContentBlockCountArgs<ExtArgs>
            result: $Utils.Optional<NewsContentBlockCountAggregateOutputType> | number
          }
        }
      }
      ImageFolder: {
        payload: Prisma.$ImageFolderPayload<ExtArgs>
        fields: Prisma.ImageFolderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFolderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageFolderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFolderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageFolderPayload>
          }
          findFirst: {
            args: Prisma.ImageFolderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageFolderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFolderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageFolderPayload>
          }
          findMany: {
            args: Prisma.ImageFolderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageFolderPayload>[]
          }
          create: {
            args: Prisma.ImageFolderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageFolderPayload>
          }
          createMany: {
            args: Prisma.ImageFolderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageFolderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageFolderPayload>[]
          }
          delete: {
            args: Prisma.ImageFolderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageFolderPayload>
          }
          update: {
            args: Prisma.ImageFolderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageFolderPayload>
          }
          deleteMany: {
            args: Prisma.ImageFolderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageFolderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageFolderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageFolderPayload>[]
          }
          upsert: {
            args: Prisma.ImageFolderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageFolderPayload>
          }
          aggregate: {
            args: Prisma.ImageFolderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImageFolder>
          }
          groupBy: {
            args: Prisma.ImageFolderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageFolderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageFolderCountArgs<ExtArgs>
            result: $Utils.Optional<ImageFolderCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
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
    blog?: BlogOmit
    blogContentBlock?: BlogContentBlockOmit
    news?: NewsOmit
    videoFolder?: VideoFolderOmit
    video?: VideoOmit
    newsContentBlock?: NewsContentBlockOmit
    imageFolder?: ImageFolderOmit
    image?: ImageOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    blogs: number
    news: number
    imageFolders: number
    VideoFolders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | UserCountOutputTypeCountBlogsArgs
    news?: boolean | UserCountOutputTypeCountNewsArgs
    imageFolders?: boolean | UserCountOutputTypeCountImageFoldersArgs
    VideoFolders?: boolean | UserCountOutputTypeCountVideoFoldersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountImageFoldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageFolderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVideoFoldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoFolderWhereInput
  }


  /**
   * Count Type BlogCountOutputType
   */

  export type BlogCountOutputType = {
    contents: number
  }

  export type BlogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contents?: boolean | BlogCountOutputTypeCountContentsArgs
  }

  // Custom InputTypes
  /**
   * BlogCountOutputType without action
   */
  export type BlogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCountOutputType
     */
    select?: BlogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogCountOutputType without action
   */
  export type BlogCountOutputTypeCountContentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogContentBlockWhereInput
  }


  /**
   * Count Type NewsCountOutputType
   */

  export type NewsCountOutputType = {
    contents: number
  }

  export type NewsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contents?: boolean | NewsCountOutputTypeCountContentsArgs
  }

  // Custom InputTypes
  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCountOutputType
     */
    select?: NewsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeCountContentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsContentBlockWhereInput
  }


  /**
   * Count Type VideoFolderCountOutputType
   */

  export type VideoFolderCountOutputType = {
    videos: number
  }

  export type VideoFolderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | VideoFolderCountOutputTypeCountVideosArgs
  }

  // Custom InputTypes
  /**
   * VideoFolderCountOutputType without action
   */
  export type VideoFolderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoFolderCountOutputType
     */
    select?: VideoFolderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VideoFolderCountOutputType without action
   */
  export type VideoFolderCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }


  /**
   * Count Type ImageFolderCountOutputType
   */

  export type ImageFolderCountOutputType = {
    images: number
  }

  export type ImageFolderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ImageFolderCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * ImageFolderCountOutputType without action
   */
  export type ImageFolderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageFolderCountOutputType
     */
    select?: ImageFolderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImageFolderCountOutputType without action
   */
  export type ImageFolderCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    company_name: string | null
    website: string | null
    email: string | null
    logo: string | null
    primary_color: string | null
    secondary_color: string | null
    name: string | null
    contact_number: string | null
    address: string | null
    password: string | null
    role: $Enums.Role | null
    allowBlogs: boolean | null
    allowNews: boolean | null
    allowImages: boolean | null
    allowVideos: boolean | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    company_name: string | null
    website: string | null
    email: string | null
    logo: string | null
    primary_color: string | null
    secondary_color: string | null
    name: string | null
    contact_number: string | null
    address: string | null
    password: string | null
    role: $Enums.Role | null
    allowBlogs: boolean | null
    allowNews: boolean | null
    allowImages: boolean | null
    allowVideos: boolean | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    company_name: number
    website: number
    email: number
    logo: number
    primary_color: number
    secondary_color: number
    name: number
    contact_number: number
    address: number
    password: number
    role: number
    allowBlogs: number
    allowNews: number
    allowImages: number
    allowVideos: number
    startDate: number
    endDate: number
    isActive: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    company_name?: true
    website?: true
    email?: true
    logo?: true
    primary_color?: true
    secondary_color?: true
    name?: true
    contact_number?: true
    address?: true
    password?: true
    role?: true
    allowBlogs?: true
    allowNews?: true
    allowImages?: true
    allowVideos?: true
    startDate?: true
    endDate?: true
    isActive?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    company_name?: true
    website?: true
    email?: true
    logo?: true
    primary_color?: true
    secondary_color?: true
    name?: true
    contact_number?: true
    address?: true
    password?: true
    role?: true
    allowBlogs?: true
    allowNews?: true
    allowImages?: true
    allowVideos?: true
    startDate?: true
    endDate?: true
    isActive?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    company_name?: true
    website?: true
    email?: true
    logo?: true
    primary_color?: true
    secondary_color?: true
    name?: true
    contact_number?: true
    address?: true
    password?: true
    role?: true
    allowBlogs?: true
    allowNews?: true
    allowImages?: true
    allowVideos?: true
    startDate?: true
    endDate?: true
    isActive?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    company_name: string
    website: string
    email: string
    logo: string
    primary_color: string
    secondary_color: string
    name: string
    contact_number: string
    address: string
    password: string
    role: $Enums.Role
    allowBlogs: boolean
    allowNews: boolean
    allowImages: boolean
    allowVideos: boolean
    startDate: Date
    endDate: Date
    isActive: boolean
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    company_name?: boolean
    website?: boolean
    email?: boolean
    logo?: boolean
    primary_color?: boolean
    secondary_color?: boolean
    name?: boolean
    contact_number?: boolean
    address?: boolean
    password?: boolean
    role?: boolean
    allowBlogs?: boolean
    allowNews?: boolean
    allowImages?: boolean
    allowVideos?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blogs?: boolean | User$blogsArgs<ExtArgs>
    news?: boolean | User$newsArgs<ExtArgs>
    imageFolders?: boolean | User$imageFoldersArgs<ExtArgs>
    VideoFolders?: boolean | User$VideoFoldersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_name?: boolean
    website?: boolean
    email?: boolean
    logo?: boolean
    primary_color?: boolean
    secondary_color?: boolean
    name?: boolean
    contact_number?: boolean
    address?: boolean
    password?: boolean
    role?: boolean
    allowBlogs?: boolean
    allowNews?: boolean
    allowImages?: boolean
    allowVideos?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_name?: boolean
    website?: boolean
    email?: boolean
    logo?: boolean
    primary_color?: boolean
    secondary_color?: boolean
    name?: boolean
    contact_number?: boolean
    address?: boolean
    password?: boolean
    role?: boolean
    allowBlogs?: boolean
    allowNews?: boolean
    allowImages?: boolean
    allowVideos?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    company_name?: boolean
    website?: boolean
    email?: boolean
    logo?: boolean
    primary_color?: boolean
    secondary_color?: boolean
    name?: boolean
    contact_number?: boolean
    address?: boolean
    password?: boolean
    role?: boolean
    allowBlogs?: boolean
    allowNews?: boolean
    allowImages?: boolean
    allowVideos?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company_name" | "website" | "email" | "logo" | "primary_color" | "secondary_color" | "name" | "contact_number" | "address" | "password" | "role" | "allowBlogs" | "allowNews" | "allowImages" | "allowVideos" | "startDate" | "endDate" | "isActive" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | User$blogsArgs<ExtArgs>
    news?: boolean | User$newsArgs<ExtArgs>
    imageFolders?: boolean | User$imageFoldersArgs<ExtArgs>
    VideoFolders?: boolean | User$VideoFoldersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      blogs: Prisma.$BlogPayload<ExtArgs>[]
      news: Prisma.$NewsPayload<ExtArgs>[]
      imageFolders: Prisma.$ImageFolderPayload<ExtArgs>[]
      VideoFolders: Prisma.$VideoFolderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company_name: string
      website: string
      email: string
      logo: string
      primary_color: string
      secondary_color: string
      name: string
      contact_number: string
      address: string
      password: string
      role: $Enums.Role
      allowBlogs: boolean
      allowNews: boolean
      allowImages: boolean
      allowVideos: boolean
      startDate: Date
      endDate: Date
      isActive: boolean
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
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
    blogs<T extends User$blogsArgs<ExtArgs> = {}>(args?: Subset<T, User$blogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    news<T extends User$newsArgs<ExtArgs> = {}>(args?: Subset<T, User$newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    imageFolders<T extends User$imageFoldersArgs<ExtArgs> = {}>(args?: Subset<T, User$imageFoldersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageFolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    VideoFolders<T extends User$VideoFoldersArgs<ExtArgs> = {}>(args?: Subset<T, User$VideoFoldersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoFolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly company_name: FieldRef<"User", 'String'>
    readonly website: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly logo: FieldRef<"User", 'String'>
    readonly primary_color: FieldRef<"User", 'String'>
    readonly secondary_color: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly contact_number: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly allowBlogs: FieldRef<"User", 'Boolean'>
    readonly allowNews: FieldRef<"User", 'Boolean'>
    readonly allowImages: FieldRef<"User", 'Boolean'>
    readonly allowVideos: FieldRef<"User", 'Boolean'>
    readonly startDate: FieldRef<"User", 'DateTime'>
    readonly endDate: FieldRef<"User", 'DateTime'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly isDeleted: FieldRef<"User", 'Boolean'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.blogs
   */
  export type User$blogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    cursor?: BlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * User.news
   */
  export type User$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    cursor?: NewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * User.imageFolders
   */
  export type User$imageFoldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageFolder
     */
    select?: ImageFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageFolder
     */
    omit?: ImageFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageFolderInclude<ExtArgs> | null
    where?: ImageFolderWhereInput
    orderBy?: ImageFolderOrderByWithRelationInput | ImageFolderOrderByWithRelationInput[]
    cursor?: ImageFolderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageFolderScalarFieldEnum | ImageFolderScalarFieldEnum[]
  }

  /**
   * User.VideoFolders
   */
  export type User$VideoFoldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoFolder
     */
    select?: VideoFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoFolder
     */
    omit?: VideoFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoFolderInclude<ExtArgs> | null
    where?: VideoFolderWhereInput
    orderBy?: VideoFolderOrderByWithRelationInput | VideoFolderOrderByWithRelationInput[]
    cursor?: VideoFolderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoFolderScalarFieldEnum | VideoFolderScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    slug: string | null
    description: string | null
    createdAt: Date | null
  }

  export type BlogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    slug: string | null
    description: string | null
    createdAt: Date | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    slug: number
    description: number
    keywords: number
    createdAt: number
    _all: number
  }


  export type BlogMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    slug?: true
    description?: true
    createdAt?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    slug?: true
    description?: true
    createdAt?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    slug?: true
    description?: true
    keywords?: true
    createdAt?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog to aggregate.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithAggregationInput | BlogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: string
    userId: string
    title: string
    slug: string
    description: string | null
    keywords: JsonValue | null
    createdAt: Date
    _count: BlogCountAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    keywords?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    contents?: boolean | Blog$contentsArgs<ExtArgs>
    _count?: boolean | BlogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    keywords?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    keywords?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    keywords?: boolean
    createdAt?: boolean
  }

  export type BlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "slug" | "description" | "keywords" | "createdAt", ExtArgs["result"]["blog"]>
  export type BlogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    contents?: boolean | Blog$contentsArgs<ExtArgs>
    _count?: boolean | BlogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      contents: Prisma.$BlogContentBlockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      slug: string
      description: string | null
      keywords: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }

  type BlogGetPayload<S extends boolean | null | undefined | BlogDefaultArgs> = $Result.GetResult<Prisma.$BlogPayload, S>

  type BlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCountAggregateInputType | true
    }

  export interface BlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog'], meta: { name: 'Blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogFindUniqueArgs>(args: SelectSubset<T, BlogFindUniqueArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogFindFirstArgs>(args?: SelectSubset<T, BlogFindFirstArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogFindManyArgs>(args?: SelectSubset<T, BlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
     */
    create<T extends BlogCreateArgs>(args: SelectSubset<T, BlogCreateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blogs.
     * @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCreateManyArgs>(args?: SelectSubset<T, BlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blogs and returns the data saved in the database.
     * @param {BlogCreateManyAndReturnArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
     */
    delete<T extends BlogDeleteArgs>(args: SelectSubset<T, BlogDeleteArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogUpdateArgs>(args: SelectSubset<T, BlogUpdateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogDeleteManyArgs>(args?: SelectSubset<T, BlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogUpdateManyArgs>(args: SelectSubset<T, BlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs and returns the data updated in the database.
     * @param {BlogUpdateManyAndReturnArgs} args - Arguments to update many Blogs.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.updateManyAndReturn({
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
    updateManyAndReturn<T extends BlogUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
     */
    upsert<T extends BlogUpsertArgs>(args: SelectSubset<T, BlogUpsertArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
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
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog model
   */
  readonly fields: BlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contents<T extends Blog$contentsArgs<ExtArgs> = {}>(args?: Subset<T, Blog$contentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogContentBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Blog model
   */
  interface BlogFieldRefs {
    readonly id: FieldRef<"Blog", 'String'>
    readonly userId: FieldRef<"Blog", 'String'>
    readonly title: FieldRef<"Blog", 'String'>
    readonly slug: FieldRef<"Blog", 'String'>
    readonly description: FieldRef<"Blog", 'String'>
    readonly keywords: FieldRef<"Blog", 'Json'>
    readonly createdAt: FieldRef<"Blog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findUniqueOrThrow
   */
  export type BlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findFirstOrThrow
   */
  export type BlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findMany
   */
  export type BlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog create
   */
  export type BlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to create a Blog.
     */
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }

  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog createManyAndReturn
   */
  export type BlogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Blog update
   */
  export type BlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to update a Blog.
     */
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog updateManyAndReturn
   */
  export type BlogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Blog upsert
   */
  export type BlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The filter to search for the Blog to update in case it exists.
     */
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     */
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }

  /**
   * Blog delete
   */
  export type BlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter which Blog to delete.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to delete.
     */
    limit?: number
  }

  /**
   * Blog.contents
   */
  export type Blog$contentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogContentBlock
     */
    select?: BlogContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogContentBlock
     */
    omit?: BlogContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogContentBlockInclude<ExtArgs> | null
    where?: BlogContentBlockWhereInput
    orderBy?: BlogContentBlockOrderByWithRelationInput | BlogContentBlockOrderByWithRelationInput[]
    cursor?: BlogContentBlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogContentBlockScalarFieldEnum | BlogContentBlockScalarFieldEnum[]
  }

  /**
   * Blog without action
   */
  export type BlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
  }


  /**
   * Model BlogContentBlock
   */

  export type AggregateBlogContentBlock = {
    _count: BlogContentBlockCountAggregateOutputType | null
    _avg: BlogContentBlockAvgAggregateOutputType | null
    _sum: BlogContentBlockSumAggregateOutputType | null
    _min: BlogContentBlockMinAggregateOutputType | null
    _max: BlogContentBlockMaxAggregateOutputType | null
  }

  export type BlogContentBlockAvgAggregateOutputType = {
    order: number | null
  }

  export type BlogContentBlockSumAggregateOutputType = {
    order: number | null
  }

  export type BlogContentBlockMinAggregateOutputType = {
    id: string | null
    type: string | null
    content: string | null
    order: number | null
    createdAt: Date | null
    blogId: string | null
  }

  export type BlogContentBlockMaxAggregateOutputType = {
    id: string | null
    type: string | null
    content: string | null
    order: number | null
    createdAt: Date | null
    blogId: string | null
  }

  export type BlogContentBlockCountAggregateOutputType = {
    id: number
    type: number
    content: number
    order: number
    createdAt: number
    blogId: number
    _all: number
  }


  export type BlogContentBlockAvgAggregateInputType = {
    order?: true
  }

  export type BlogContentBlockSumAggregateInputType = {
    order?: true
  }

  export type BlogContentBlockMinAggregateInputType = {
    id?: true
    type?: true
    content?: true
    order?: true
    createdAt?: true
    blogId?: true
  }

  export type BlogContentBlockMaxAggregateInputType = {
    id?: true
    type?: true
    content?: true
    order?: true
    createdAt?: true
    blogId?: true
  }

  export type BlogContentBlockCountAggregateInputType = {
    id?: true
    type?: true
    content?: true
    order?: true
    createdAt?: true
    blogId?: true
    _all?: true
  }

  export type BlogContentBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogContentBlock to aggregate.
     */
    where?: BlogContentBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogContentBlocks to fetch.
     */
    orderBy?: BlogContentBlockOrderByWithRelationInput | BlogContentBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogContentBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogContentBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogContentBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogContentBlocks
    **/
    _count?: true | BlogContentBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogContentBlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogContentBlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogContentBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogContentBlockMaxAggregateInputType
  }

  export type GetBlogContentBlockAggregateType<T extends BlogContentBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogContentBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogContentBlock[P]>
      : GetScalarType<T[P], AggregateBlogContentBlock[P]>
  }




  export type BlogContentBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogContentBlockWhereInput
    orderBy?: BlogContentBlockOrderByWithAggregationInput | BlogContentBlockOrderByWithAggregationInput[]
    by: BlogContentBlockScalarFieldEnum[] | BlogContentBlockScalarFieldEnum
    having?: BlogContentBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogContentBlockCountAggregateInputType | true
    _avg?: BlogContentBlockAvgAggregateInputType
    _sum?: BlogContentBlockSumAggregateInputType
    _min?: BlogContentBlockMinAggregateInputType
    _max?: BlogContentBlockMaxAggregateInputType
  }

  export type BlogContentBlockGroupByOutputType = {
    id: string
    type: string
    content: string
    order: number
    createdAt: Date
    blogId: string
    _count: BlogContentBlockCountAggregateOutputType | null
    _avg: BlogContentBlockAvgAggregateOutputType | null
    _sum: BlogContentBlockSumAggregateOutputType | null
    _min: BlogContentBlockMinAggregateOutputType | null
    _max: BlogContentBlockMaxAggregateOutputType | null
  }

  type GetBlogContentBlockGroupByPayload<T extends BlogContentBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogContentBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogContentBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogContentBlockGroupByOutputType[P]>
            : GetScalarType<T[P], BlogContentBlockGroupByOutputType[P]>
        }
      >
    >


  export type BlogContentBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    content?: boolean
    order?: boolean
    createdAt?: boolean
    blogId?: boolean
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogContentBlock"]>

  export type BlogContentBlockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    content?: boolean
    order?: boolean
    createdAt?: boolean
    blogId?: boolean
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogContentBlock"]>

  export type BlogContentBlockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    content?: boolean
    order?: boolean
    createdAt?: boolean
    blogId?: boolean
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogContentBlock"]>

  export type BlogContentBlockSelectScalar = {
    id?: boolean
    type?: boolean
    content?: boolean
    order?: boolean
    createdAt?: boolean
    blogId?: boolean
  }

  export type BlogContentBlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "content" | "order" | "createdAt" | "blogId", ExtArgs["result"]["blogContentBlock"]>
  export type BlogContentBlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }
  export type BlogContentBlockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }
  export type BlogContentBlockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }

  export type $BlogContentBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogContentBlock"
    objects: {
      blog: Prisma.$BlogPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      content: string
      order: number
      createdAt: Date
      blogId: string
    }, ExtArgs["result"]["blogContentBlock"]>
    composites: {}
  }

  type BlogContentBlockGetPayload<S extends boolean | null | undefined | BlogContentBlockDefaultArgs> = $Result.GetResult<Prisma.$BlogContentBlockPayload, S>

  type BlogContentBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogContentBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogContentBlockCountAggregateInputType | true
    }

  export interface BlogContentBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogContentBlock'], meta: { name: 'BlogContentBlock' } }
    /**
     * Find zero or one BlogContentBlock that matches the filter.
     * @param {BlogContentBlockFindUniqueArgs} args - Arguments to find a BlogContentBlock
     * @example
     * // Get one BlogContentBlock
     * const blogContentBlock = await prisma.blogContentBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogContentBlockFindUniqueArgs>(args: SelectSubset<T, BlogContentBlockFindUniqueArgs<ExtArgs>>): Prisma__BlogContentBlockClient<$Result.GetResult<Prisma.$BlogContentBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogContentBlock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogContentBlockFindUniqueOrThrowArgs} args - Arguments to find a BlogContentBlock
     * @example
     * // Get one BlogContentBlock
     * const blogContentBlock = await prisma.blogContentBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogContentBlockFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogContentBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogContentBlockClient<$Result.GetResult<Prisma.$BlogContentBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogContentBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogContentBlockFindFirstArgs} args - Arguments to find a BlogContentBlock
     * @example
     * // Get one BlogContentBlock
     * const blogContentBlock = await prisma.blogContentBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogContentBlockFindFirstArgs>(args?: SelectSubset<T, BlogContentBlockFindFirstArgs<ExtArgs>>): Prisma__BlogContentBlockClient<$Result.GetResult<Prisma.$BlogContentBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogContentBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogContentBlockFindFirstOrThrowArgs} args - Arguments to find a BlogContentBlock
     * @example
     * // Get one BlogContentBlock
     * const blogContentBlock = await prisma.blogContentBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogContentBlockFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogContentBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogContentBlockClient<$Result.GetResult<Prisma.$BlogContentBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogContentBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogContentBlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogContentBlocks
     * const blogContentBlocks = await prisma.blogContentBlock.findMany()
     * 
     * // Get first 10 BlogContentBlocks
     * const blogContentBlocks = await prisma.blogContentBlock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogContentBlockWithIdOnly = await prisma.blogContentBlock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogContentBlockFindManyArgs>(args?: SelectSubset<T, BlogContentBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogContentBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogContentBlock.
     * @param {BlogContentBlockCreateArgs} args - Arguments to create a BlogContentBlock.
     * @example
     * // Create one BlogContentBlock
     * const BlogContentBlock = await prisma.blogContentBlock.create({
     *   data: {
     *     // ... data to create a BlogContentBlock
     *   }
     * })
     * 
     */
    create<T extends BlogContentBlockCreateArgs>(args: SelectSubset<T, BlogContentBlockCreateArgs<ExtArgs>>): Prisma__BlogContentBlockClient<$Result.GetResult<Prisma.$BlogContentBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogContentBlocks.
     * @param {BlogContentBlockCreateManyArgs} args - Arguments to create many BlogContentBlocks.
     * @example
     * // Create many BlogContentBlocks
     * const blogContentBlock = await prisma.blogContentBlock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogContentBlockCreateManyArgs>(args?: SelectSubset<T, BlogContentBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogContentBlocks and returns the data saved in the database.
     * @param {BlogContentBlockCreateManyAndReturnArgs} args - Arguments to create many BlogContentBlocks.
     * @example
     * // Create many BlogContentBlocks
     * const blogContentBlock = await prisma.blogContentBlock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogContentBlocks and only return the `id`
     * const blogContentBlockWithIdOnly = await prisma.blogContentBlock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogContentBlockCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogContentBlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogContentBlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogContentBlock.
     * @param {BlogContentBlockDeleteArgs} args - Arguments to delete one BlogContentBlock.
     * @example
     * // Delete one BlogContentBlock
     * const BlogContentBlock = await prisma.blogContentBlock.delete({
     *   where: {
     *     // ... filter to delete one BlogContentBlock
     *   }
     * })
     * 
     */
    delete<T extends BlogContentBlockDeleteArgs>(args: SelectSubset<T, BlogContentBlockDeleteArgs<ExtArgs>>): Prisma__BlogContentBlockClient<$Result.GetResult<Prisma.$BlogContentBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogContentBlock.
     * @param {BlogContentBlockUpdateArgs} args - Arguments to update one BlogContentBlock.
     * @example
     * // Update one BlogContentBlock
     * const blogContentBlock = await prisma.blogContentBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogContentBlockUpdateArgs>(args: SelectSubset<T, BlogContentBlockUpdateArgs<ExtArgs>>): Prisma__BlogContentBlockClient<$Result.GetResult<Prisma.$BlogContentBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogContentBlocks.
     * @param {BlogContentBlockDeleteManyArgs} args - Arguments to filter BlogContentBlocks to delete.
     * @example
     * // Delete a few BlogContentBlocks
     * const { count } = await prisma.blogContentBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogContentBlockDeleteManyArgs>(args?: SelectSubset<T, BlogContentBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogContentBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogContentBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogContentBlocks
     * const blogContentBlock = await prisma.blogContentBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogContentBlockUpdateManyArgs>(args: SelectSubset<T, BlogContentBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogContentBlocks and returns the data updated in the database.
     * @param {BlogContentBlockUpdateManyAndReturnArgs} args - Arguments to update many BlogContentBlocks.
     * @example
     * // Update many BlogContentBlocks
     * const blogContentBlock = await prisma.blogContentBlock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogContentBlocks and only return the `id`
     * const blogContentBlockWithIdOnly = await prisma.blogContentBlock.updateManyAndReturn({
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
    updateManyAndReturn<T extends BlogContentBlockUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogContentBlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogContentBlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogContentBlock.
     * @param {BlogContentBlockUpsertArgs} args - Arguments to update or create a BlogContentBlock.
     * @example
     * // Update or create a BlogContentBlock
     * const blogContentBlock = await prisma.blogContentBlock.upsert({
     *   create: {
     *     // ... data to create a BlogContentBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogContentBlock we want to update
     *   }
     * })
     */
    upsert<T extends BlogContentBlockUpsertArgs>(args: SelectSubset<T, BlogContentBlockUpsertArgs<ExtArgs>>): Prisma__BlogContentBlockClient<$Result.GetResult<Prisma.$BlogContentBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogContentBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogContentBlockCountArgs} args - Arguments to filter BlogContentBlocks to count.
     * @example
     * // Count the number of BlogContentBlocks
     * const count = await prisma.blogContentBlock.count({
     *   where: {
     *     // ... the filter for the BlogContentBlocks we want to count
     *   }
     * })
    **/
    count<T extends BlogContentBlockCountArgs>(
      args?: Subset<T, BlogContentBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogContentBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogContentBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogContentBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogContentBlockAggregateArgs>(args: Subset<T, BlogContentBlockAggregateArgs>): Prisma.PrismaPromise<GetBlogContentBlockAggregateType<T>>

    /**
     * Group by BlogContentBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogContentBlockGroupByArgs} args - Group by arguments.
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
      T extends BlogContentBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogContentBlockGroupByArgs['orderBy'] }
        : { orderBy?: BlogContentBlockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogContentBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogContentBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogContentBlock model
   */
  readonly fields: BlogContentBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogContentBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogContentBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blog<T extends BlogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogDefaultArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BlogContentBlock model
   */
  interface BlogContentBlockFieldRefs {
    readonly id: FieldRef<"BlogContentBlock", 'String'>
    readonly type: FieldRef<"BlogContentBlock", 'String'>
    readonly content: FieldRef<"BlogContentBlock", 'String'>
    readonly order: FieldRef<"BlogContentBlock", 'Int'>
    readonly createdAt: FieldRef<"BlogContentBlock", 'DateTime'>
    readonly blogId: FieldRef<"BlogContentBlock", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BlogContentBlock findUnique
   */
  export type BlogContentBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogContentBlock
     */
    select?: BlogContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogContentBlock
     */
    omit?: BlogContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogContentBlockInclude<ExtArgs> | null
    /**
     * Filter, which BlogContentBlock to fetch.
     */
    where: BlogContentBlockWhereUniqueInput
  }

  /**
   * BlogContentBlock findUniqueOrThrow
   */
  export type BlogContentBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogContentBlock
     */
    select?: BlogContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogContentBlock
     */
    omit?: BlogContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogContentBlockInclude<ExtArgs> | null
    /**
     * Filter, which BlogContentBlock to fetch.
     */
    where: BlogContentBlockWhereUniqueInput
  }

  /**
   * BlogContentBlock findFirst
   */
  export type BlogContentBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogContentBlock
     */
    select?: BlogContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogContentBlock
     */
    omit?: BlogContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogContentBlockInclude<ExtArgs> | null
    /**
     * Filter, which BlogContentBlock to fetch.
     */
    where?: BlogContentBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogContentBlocks to fetch.
     */
    orderBy?: BlogContentBlockOrderByWithRelationInput | BlogContentBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogContentBlocks.
     */
    cursor?: BlogContentBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogContentBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogContentBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogContentBlocks.
     */
    distinct?: BlogContentBlockScalarFieldEnum | BlogContentBlockScalarFieldEnum[]
  }

  /**
   * BlogContentBlock findFirstOrThrow
   */
  export type BlogContentBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogContentBlock
     */
    select?: BlogContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogContentBlock
     */
    omit?: BlogContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogContentBlockInclude<ExtArgs> | null
    /**
     * Filter, which BlogContentBlock to fetch.
     */
    where?: BlogContentBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogContentBlocks to fetch.
     */
    orderBy?: BlogContentBlockOrderByWithRelationInput | BlogContentBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogContentBlocks.
     */
    cursor?: BlogContentBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogContentBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogContentBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogContentBlocks.
     */
    distinct?: BlogContentBlockScalarFieldEnum | BlogContentBlockScalarFieldEnum[]
  }

  /**
   * BlogContentBlock findMany
   */
  export type BlogContentBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogContentBlock
     */
    select?: BlogContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogContentBlock
     */
    omit?: BlogContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogContentBlockInclude<ExtArgs> | null
    /**
     * Filter, which BlogContentBlocks to fetch.
     */
    where?: BlogContentBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogContentBlocks to fetch.
     */
    orderBy?: BlogContentBlockOrderByWithRelationInput | BlogContentBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogContentBlocks.
     */
    cursor?: BlogContentBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogContentBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogContentBlocks.
     */
    skip?: number
    distinct?: BlogContentBlockScalarFieldEnum | BlogContentBlockScalarFieldEnum[]
  }

  /**
   * BlogContentBlock create
   */
  export type BlogContentBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogContentBlock
     */
    select?: BlogContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogContentBlock
     */
    omit?: BlogContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogContentBlockInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogContentBlock.
     */
    data: XOR<BlogContentBlockCreateInput, BlogContentBlockUncheckedCreateInput>
  }

  /**
   * BlogContentBlock createMany
   */
  export type BlogContentBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogContentBlocks.
     */
    data: BlogContentBlockCreateManyInput | BlogContentBlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogContentBlock createManyAndReturn
   */
  export type BlogContentBlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogContentBlock
     */
    select?: BlogContentBlockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogContentBlock
     */
    omit?: BlogContentBlockOmit<ExtArgs> | null
    /**
     * The data used to create many BlogContentBlocks.
     */
    data: BlogContentBlockCreateManyInput | BlogContentBlockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogContentBlockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogContentBlock update
   */
  export type BlogContentBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogContentBlock
     */
    select?: BlogContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogContentBlock
     */
    omit?: BlogContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogContentBlockInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogContentBlock.
     */
    data: XOR<BlogContentBlockUpdateInput, BlogContentBlockUncheckedUpdateInput>
    /**
     * Choose, which BlogContentBlock to update.
     */
    where: BlogContentBlockWhereUniqueInput
  }

  /**
   * BlogContentBlock updateMany
   */
  export type BlogContentBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogContentBlocks.
     */
    data: XOR<BlogContentBlockUpdateManyMutationInput, BlogContentBlockUncheckedUpdateManyInput>
    /**
     * Filter which BlogContentBlocks to update
     */
    where?: BlogContentBlockWhereInput
    /**
     * Limit how many BlogContentBlocks to update.
     */
    limit?: number
  }

  /**
   * BlogContentBlock updateManyAndReturn
   */
  export type BlogContentBlockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogContentBlock
     */
    select?: BlogContentBlockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogContentBlock
     */
    omit?: BlogContentBlockOmit<ExtArgs> | null
    /**
     * The data used to update BlogContentBlocks.
     */
    data: XOR<BlogContentBlockUpdateManyMutationInput, BlogContentBlockUncheckedUpdateManyInput>
    /**
     * Filter which BlogContentBlocks to update
     */
    where?: BlogContentBlockWhereInput
    /**
     * Limit how many BlogContentBlocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogContentBlockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogContentBlock upsert
   */
  export type BlogContentBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogContentBlock
     */
    select?: BlogContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogContentBlock
     */
    omit?: BlogContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogContentBlockInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogContentBlock to update in case it exists.
     */
    where: BlogContentBlockWhereUniqueInput
    /**
     * In case the BlogContentBlock found by the `where` argument doesn't exist, create a new BlogContentBlock with this data.
     */
    create: XOR<BlogContentBlockCreateInput, BlogContentBlockUncheckedCreateInput>
    /**
     * In case the BlogContentBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogContentBlockUpdateInput, BlogContentBlockUncheckedUpdateInput>
  }

  /**
   * BlogContentBlock delete
   */
  export type BlogContentBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogContentBlock
     */
    select?: BlogContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogContentBlock
     */
    omit?: BlogContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogContentBlockInclude<ExtArgs> | null
    /**
     * Filter which BlogContentBlock to delete.
     */
    where: BlogContentBlockWhereUniqueInput
  }

  /**
   * BlogContentBlock deleteMany
   */
  export type BlogContentBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogContentBlocks to delete
     */
    where?: BlogContentBlockWhereInput
    /**
     * Limit how many BlogContentBlocks to delete.
     */
    limit?: number
  }

  /**
   * BlogContentBlock without action
   */
  export type BlogContentBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogContentBlock
     */
    select?: BlogContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogContentBlock
     */
    omit?: BlogContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogContentBlockInclude<ExtArgs> | null
  }


  /**
   * Model News
   */

  export type AggregateNews = {
    _count: NewsCountAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  export type NewsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    slug: string | null
    description: string | null
    createdAt: Date | null
  }

  export type NewsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    slug: string | null
    description: string | null
    createdAt: Date | null
  }

  export type NewsCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    slug: number
    description: number
    keywords: number
    createdAt: number
    _all: number
  }


  export type NewsMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    slug?: true
    description?: true
    createdAt?: true
  }

  export type NewsMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    slug?: true
    description?: true
    createdAt?: true
  }

  export type NewsCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    slug?: true
    description?: true
    keywords?: true
    createdAt?: true
    _all?: true
  }

  export type NewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to aggregate.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned News
    **/
    _count?: true | NewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsMaxAggregateInputType
  }

  export type GetNewsAggregateType<T extends NewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews[P]>
      : GetScalarType<T[P], AggregateNews[P]>
  }




  export type NewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithAggregationInput | NewsOrderByWithAggregationInput[]
    by: NewsScalarFieldEnum[] | NewsScalarFieldEnum
    having?: NewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCountAggregateInputType | true
    _min?: NewsMinAggregateInputType
    _max?: NewsMaxAggregateInputType
  }

  export type NewsGroupByOutputType = {
    id: string
    userId: string
    title: string
    slug: string
    description: string | null
    keywords: JsonValue | null
    createdAt: Date
    _count: NewsCountAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  type GetNewsGroupByPayload<T extends NewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsGroupByOutputType[P]>
        }
      >
    >


  export type NewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    keywords?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    contents?: boolean | News$contentsArgs<ExtArgs>
    _count?: boolean | NewsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    keywords?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    keywords?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    keywords?: boolean
    createdAt?: boolean
  }

  export type NewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "slug" | "description" | "keywords" | "createdAt", ExtArgs["result"]["news"]>
  export type NewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    contents?: boolean | News$contentsArgs<ExtArgs>
    _count?: boolean | NewsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "News"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      contents: Prisma.$NewsContentBlockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      slug: string
      description: string | null
      keywords: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["news"]>
    composites: {}
  }

  type NewsGetPayload<S extends boolean | null | undefined | NewsDefaultArgs> = $Result.GetResult<Prisma.$NewsPayload, S>

  type NewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsCountAggregateInputType | true
    }

  export interface NewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['News'], meta: { name: 'News' } }
    /**
     * Find zero or one News that matches the filter.
     * @param {NewsFindUniqueArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsFindUniqueArgs>(args: SelectSubset<T, NewsFindUniqueArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one News that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsFindUniqueOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsFindFirstArgs>(args?: SelectSubset<T, NewsFindFirstArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News
     * const news = await prisma.news.findMany()
     * 
     * // Get first 10 News
     * const news = await prisma.news.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsWithIdOnly = await prisma.news.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsFindManyArgs>(args?: SelectSubset<T, NewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a News.
     * @param {NewsCreateArgs} args - Arguments to create a News.
     * @example
     * // Create one News
     * const News = await prisma.news.create({
     *   data: {
     *     // ... data to create a News
     *   }
     * })
     * 
     */
    create<T extends NewsCreateArgs>(args: SelectSubset<T, NewsCreateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many News.
     * @param {NewsCreateManyArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCreateManyArgs>(args?: SelectSubset<T, NewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many News and returns the data saved in the database.
     * @param {NewsCreateManyAndReturnArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many News and only return the `id`
     * const newsWithIdOnly = await prisma.news.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a News.
     * @param {NewsDeleteArgs} args - Arguments to delete one News.
     * @example
     * // Delete one News
     * const News = await prisma.news.delete({
     *   where: {
     *     // ... filter to delete one News
     *   }
     * })
     * 
     */
    delete<T extends NewsDeleteArgs>(args: SelectSubset<T, NewsDeleteArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one News.
     * @param {NewsUpdateArgs} args - Arguments to update one News.
     * @example
     * // Update one News
     * const news = await prisma.news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsUpdateArgs>(args: SelectSubset<T, NewsUpdateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more News.
     * @param {NewsDeleteManyArgs} args - Arguments to filter News to delete.
     * @example
     * // Delete a few News
     * const { count } = await prisma.news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsDeleteManyArgs>(args?: SelectSubset<T, NewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News
     * const news = await prisma.news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsUpdateManyArgs>(args: SelectSubset<T, NewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News and returns the data updated in the database.
     * @param {NewsUpdateManyAndReturnArgs} args - Arguments to update many News.
     * @example
     * // Update many News
     * const news = await prisma.news.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more News and only return the `id`
     * const newsWithIdOnly = await prisma.news.updateManyAndReturn({
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
    updateManyAndReturn<T extends NewsUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one News.
     * @param {NewsUpsertArgs} args - Arguments to update or create a News.
     * @example
     * // Update or create a News
     * const news = await prisma.news.upsert({
     *   create: {
     *     // ... data to create a News
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News we want to update
     *   }
     * })
     */
    upsert<T extends NewsUpsertArgs>(args: SelectSubset<T, NewsUpsertArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCountArgs} args - Arguments to filter News to count.
     * @example
     * // Count the number of News
     * const count = await prisma.news.count({
     *   where: {
     *     // ... the filter for the News we want to count
     *   }
     * })
    **/
    count<T extends NewsCountArgs>(
      args?: Subset<T, NewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsAggregateArgs>(args: Subset<T, NewsAggregateArgs>): Prisma.PrismaPromise<GetNewsAggregateType<T>>

    /**
     * Group by News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsGroupByArgs} args - Group by arguments.
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
      T extends NewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsGroupByArgs['orderBy'] }
        : { orderBy?: NewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the News model
   */
  readonly fields: NewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for News.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contents<T extends News$contentsArgs<ExtArgs> = {}>(args?: Subset<T, News$contentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsContentBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the News model
   */
  interface NewsFieldRefs {
    readonly id: FieldRef<"News", 'String'>
    readonly userId: FieldRef<"News", 'String'>
    readonly title: FieldRef<"News", 'String'>
    readonly slug: FieldRef<"News", 'String'>
    readonly description: FieldRef<"News", 'String'>
    readonly keywords: FieldRef<"News", 'Json'>
    readonly createdAt: FieldRef<"News", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * News findUnique
   */
  export type NewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findUniqueOrThrow
   */
  export type NewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findFirst
   */
  export type NewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findFirstOrThrow
   */
  export type NewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findMany
   */
  export type NewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News create
   */
  export type NewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to create a News.
     */
    data: XOR<NewsCreateInput, NewsUncheckedCreateInput>
  }

  /**
   * News createMany
   */
  export type NewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News createManyAndReturn
   */
  export type NewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * News update
   */
  export type NewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to update a News.
     */
    data: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
    /**
     * Choose, which News to update.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News updateMany
   */
  export type NewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
  }

  /**
   * News updateManyAndReturn
   */
  export type NewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * News upsert
   */
  export type NewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The filter to search for the News to update in case it exists.
     */
    where: NewsWhereUniqueInput
    /**
     * In case the News found by the `where` argument doesn't exist, create a new News with this data.
     */
    create: XOR<NewsCreateInput, NewsUncheckedCreateInput>
    /**
     * In case the News was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
  }

  /**
   * News delete
   */
  export type NewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter which News to delete.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News deleteMany
   */
  export type NewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to delete
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to delete.
     */
    limit?: number
  }

  /**
   * News.contents
   */
  export type News$contentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsContentBlock
     */
    select?: NewsContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsContentBlock
     */
    omit?: NewsContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsContentBlockInclude<ExtArgs> | null
    where?: NewsContentBlockWhereInput
    orderBy?: NewsContentBlockOrderByWithRelationInput | NewsContentBlockOrderByWithRelationInput[]
    cursor?: NewsContentBlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsContentBlockScalarFieldEnum | NewsContentBlockScalarFieldEnum[]
  }

  /**
   * News without action
   */
  export type NewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
  }


  /**
   * Model VideoFolder
   */

  export type AggregateVideoFolder = {
    _count: VideoFolderCountAggregateOutputType | null
    _min: VideoFolderMinAggregateOutputType | null
    _max: VideoFolderMaxAggregateOutputType | null
  }

  export type VideoFolderMinAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type VideoFolderMaxAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type VideoFolderCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    userId: number
    _all: number
  }


  export type VideoFolderMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    userId?: true
  }

  export type VideoFolderMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    userId?: true
  }

  export type VideoFolderCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type VideoFolderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoFolder to aggregate.
     */
    where?: VideoFolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoFolders to fetch.
     */
    orderBy?: VideoFolderOrderByWithRelationInput | VideoFolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoFolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoFolders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoFolders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VideoFolders
    **/
    _count?: true | VideoFolderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoFolderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoFolderMaxAggregateInputType
  }

  export type GetVideoFolderAggregateType<T extends VideoFolderAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoFolder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoFolder[P]>
      : GetScalarType<T[P], AggregateVideoFolder[P]>
  }




  export type VideoFolderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoFolderWhereInput
    orderBy?: VideoFolderOrderByWithAggregationInput | VideoFolderOrderByWithAggregationInput[]
    by: VideoFolderScalarFieldEnum[] | VideoFolderScalarFieldEnum
    having?: VideoFolderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoFolderCountAggregateInputType | true
    _min?: VideoFolderMinAggregateInputType
    _max?: VideoFolderMaxAggregateInputType
  }

  export type VideoFolderGroupByOutputType = {
    id: string
    title: string
    createdAt: Date
    userId: string
    _count: VideoFolderCountAggregateOutputType | null
    _min: VideoFolderMinAggregateOutputType | null
    _max: VideoFolderMaxAggregateOutputType | null
  }

  type GetVideoFolderGroupByPayload<T extends VideoFolderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoFolderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoFolderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoFolderGroupByOutputType[P]>
            : GetScalarType<T[P], VideoFolderGroupByOutputType[P]>
        }
      >
    >


  export type VideoFolderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    videos?: boolean | VideoFolder$videosArgs<ExtArgs>
    _count?: boolean | VideoFolderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoFolder"]>

  export type VideoFolderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoFolder"]>

  export type VideoFolderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoFolder"]>

  export type VideoFolderSelectScalar = {
    id?: boolean
    title?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type VideoFolderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "createdAt" | "userId", ExtArgs["result"]["videoFolder"]>
  export type VideoFolderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    videos?: boolean | VideoFolder$videosArgs<ExtArgs>
    _count?: boolean | VideoFolderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VideoFolderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VideoFolderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VideoFolderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VideoFolder"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      videos: Prisma.$VideoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["videoFolder"]>
    composites: {}
  }

  type VideoFolderGetPayload<S extends boolean | null | undefined | VideoFolderDefaultArgs> = $Result.GetResult<Prisma.$VideoFolderPayload, S>

  type VideoFolderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoFolderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoFolderCountAggregateInputType | true
    }

  export interface VideoFolderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VideoFolder'], meta: { name: 'VideoFolder' } }
    /**
     * Find zero or one VideoFolder that matches the filter.
     * @param {VideoFolderFindUniqueArgs} args - Arguments to find a VideoFolder
     * @example
     * // Get one VideoFolder
     * const videoFolder = await prisma.videoFolder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFolderFindUniqueArgs>(args: SelectSubset<T, VideoFolderFindUniqueArgs<ExtArgs>>): Prisma__VideoFolderClient<$Result.GetResult<Prisma.$VideoFolderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VideoFolder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoFolderFindUniqueOrThrowArgs} args - Arguments to find a VideoFolder
     * @example
     * // Get one VideoFolder
     * const videoFolder = await prisma.videoFolder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFolderFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFolderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoFolderClient<$Result.GetResult<Prisma.$VideoFolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoFolder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFolderFindFirstArgs} args - Arguments to find a VideoFolder
     * @example
     * // Get one VideoFolder
     * const videoFolder = await prisma.videoFolder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFolderFindFirstArgs>(args?: SelectSubset<T, VideoFolderFindFirstArgs<ExtArgs>>): Prisma__VideoFolderClient<$Result.GetResult<Prisma.$VideoFolderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoFolder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFolderFindFirstOrThrowArgs} args - Arguments to find a VideoFolder
     * @example
     * // Get one VideoFolder
     * const videoFolder = await prisma.videoFolder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFolderFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFolderFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoFolderClient<$Result.GetResult<Prisma.$VideoFolderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VideoFolders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFolderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoFolders
     * const videoFolders = await prisma.videoFolder.findMany()
     * 
     * // Get first 10 VideoFolders
     * const videoFolders = await prisma.videoFolder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoFolderWithIdOnly = await prisma.videoFolder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoFolderFindManyArgs>(args?: SelectSubset<T, VideoFolderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoFolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VideoFolder.
     * @param {VideoFolderCreateArgs} args - Arguments to create a VideoFolder.
     * @example
     * // Create one VideoFolder
     * const VideoFolder = await prisma.videoFolder.create({
     *   data: {
     *     // ... data to create a VideoFolder
     *   }
     * })
     * 
     */
    create<T extends VideoFolderCreateArgs>(args: SelectSubset<T, VideoFolderCreateArgs<ExtArgs>>): Prisma__VideoFolderClient<$Result.GetResult<Prisma.$VideoFolderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VideoFolders.
     * @param {VideoFolderCreateManyArgs} args - Arguments to create many VideoFolders.
     * @example
     * // Create many VideoFolders
     * const videoFolder = await prisma.videoFolder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoFolderCreateManyArgs>(args?: SelectSubset<T, VideoFolderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VideoFolders and returns the data saved in the database.
     * @param {VideoFolderCreateManyAndReturnArgs} args - Arguments to create many VideoFolders.
     * @example
     * // Create many VideoFolders
     * const videoFolder = await prisma.videoFolder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VideoFolders and only return the `id`
     * const videoFolderWithIdOnly = await prisma.videoFolder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoFolderCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoFolderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoFolderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VideoFolder.
     * @param {VideoFolderDeleteArgs} args - Arguments to delete one VideoFolder.
     * @example
     * // Delete one VideoFolder
     * const VideoFolder = await prisma.videoFolder.delete({
     *   where: {
     *     // ... filter to delete one VideoFolder
     *   }
     * })
     * 
     */
    delete<T extends VideoFolderDeleteArgs>(args: SelectSubset<T, VideoFolderDeleteArgs<ExtArgs>>): Prisma__VideoFolderClient<$Result.GetResult<Prisma.$VideoFolderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VideoFolder.
     * @param {VideoFolderUpdateArgs} args - Arguments to update one VideoFolder.
     * @example
     * // Update one VideoFolder
     * const videoFolder = await prisma.videoFolder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoFolderUpdateArgs>(args: SelectSubset<T, VideoFolderUpdateArgs<ExtArgs>>): Prisma__VideoFolderClient<$Result.GetResult<Prisma.$VideoFolderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VideoFolders.
     * @param {VideoFolderDeleteManyArgs} args - Arguments to filter VideoFolders to delete.
     * @example
     * // Delete a few VideoFolders
     * const { count } = await prisma.videoFolder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoFolderDeleteManyArgs>(args?: SelectSubset<T, VideoFolderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoFolders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFolderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoFolders
     * const videoFolder = await prisma.videoFolder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoFolderUpdateManyArgs>(args: SelectSubset<T, VideoFolderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoFolders and returns the data updated in the database.
     * @param {VideoFolderUpdateManyAndReturnArgs} args - Arguments to update many VideoFolders.
     * @example
     * // Update many VideoFolders
     * const videoFolder = await prisma.videoFolder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VideoFolders and only return the `id`
     * const videoFolderWithIdOnly = await prisma.videoFolder.updateManyAndReturn({
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
    updateManyAndReturn<T extends VideoFolderUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoFolderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoFolderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VideoFolder.
     * @param {VideoFolderUpsertArgs} args - Arguments to update or create a VideoFolder.
     * @example
     * // Update or create a VideoFolder
     * const videoFolder = await prisma.videoFolder.upsert({
     *   create: {
     *     // ... data to create a VideoFolder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoFolder we want to update
     *   }
     * })
     */
    upsert<T extends VideoFolderUpsertArgs>(args: SelectSubset<T, VideoFolderUpsertArgs<ExtArgs>>): Prisma__VideoFolderClient<$Result.GetResult<Prisma.$VideoFolderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VideoFolders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFolderCountArgs} args - Arguments to filter VideoFolders to count.
     * @example
     * // Count the number of VideoFolders
     * const count = await prisma.videoFolder.count({
     *   where: {
     *     // ... the filter for the VideoFolders we want to count
     *   }
     * })
    **/
    count<T extends VideoFolderCountArgs>(
      args?: Subset<T, VideoFolderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoFolderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoFolder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFolderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoFolderAggregateArgs>(args: Subset<T, VideoFolderAggregateArgs>): Prisma.PrismaPromise<GetVideoFolderAggregateType<T>>

    /**
     * Group by VideoFolder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFolderGroupByArgs} args - Group by arguments.
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
      T extends VideoFolderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoFolderGroupByArgs['orderBy'] }
        : { orderBy?: VideoFolderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoFolderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoFolderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VideoFolder model
   */
  readonly fields: VideoFolderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VideoFolder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoFolderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    videos<T extends VideoFolder$videosArgs<ExtArgs> = {}>(args?: Subset<T, VideoFolder$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the VideoFolder model
   */
  interface VideoFolderFieldRefs {
    readonly id: FieldRef<"VideoFolder", 'String'>
    readonly title: FieldRef<"VideoFolder", 'String'>
    readonly createdAt: FieldRef<"VideoFolder", 'DateTime'>
    readonly userId: FieldRef<"VideoFolder", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VideoFolder findUnique
   */
  export type VideoFolderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoFolder
     */
    select?: VideoFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoFolder
     */
    omit?: VideoFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoFolderInclude<ExtArgs> | null
    /**
     * Filter, which VideoFolder to fetch.
     */
    where: VideoFolderWhereUniqueInput
  }

  /**
   * VideoFolder findUniqueOrThrow
   */
  export type VideoFolderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoFolder
     */
    select?: VideoFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoFolder
     */
    omit?: VideoFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoFolderInclude<ExtArgs> | null
    /**
     * Filter, which VideoFolder to fetch.
     */
    where: VideoFolderWhereUniqueInput
  }

  /**
   * VideoFolder findFirst
   */
  export type VideoFolderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoFolder
     */
    select?: VideoFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoFolder
     */
    omit?: VideoFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoFolderInclude<ExtArgs> | null
    /**
     * Filter, which VideoFolder to fetch.
     */
    where?: VideoFolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoFolders to fetch.
     */
    orderBy?: VideoFolderOrderByWithRelationInput | VideoFolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoFolders.
     */
    cursor?: VideoFolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoFolders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoFolders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoFolders.
     */
    distinct?: VideoFolderScalarFieldEnum | VideoFolderScalarFieldEnum[]
  }

  /**
   * VideoFolder findFirstOrThrow
   */
  export type VideoFolderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoFolder
     */
    select?: VideoFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoFolder
     */
    omit?: VideoFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoFolderInclude<ExtArgs> | null
    /**
     * Filter, which VideoFolder to fetch.
     */
    where?: VideoFolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoFolders to fetch.
     */
    orderBy?: VideoFolderOrderByWithRelationInput | VideoFolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoFolders.
     */
    cursor?: VideoFolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoFolders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoFolders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoFolders.
     */
    distinct?: VideoFolderScalarFieldEnum | VideoFolderScalarFieldEnum[]
  }

  /**
   * VideoFolder findMany
   */
  export type VideoFolderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoFolder
     */
    select?: VideoFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoFolder
     */
    omit?: VideoFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoFolderInclude<ExtArgs> | null
    /**
     * Filter, which VideoFolders to fetch.
     */
    where?: VideoFolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoFolders to fetch.
     */
    orderBy?: VideoFolderOrderByWithRelationInput | VideoFolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VideoFolders.
     */
    cursor?: VideoFolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoFolders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoFolders.
     */
    skip?: number
    distinct?: VideoFolderScalarFieldEnum | VideoFolderScalarFieldEnum[]
  }

  /**
   * VideoFolder create
   */
  export type VideoFolderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoFolder
     */
    select?: VideoFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoFolder
     */
    omit?: VideoFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoFolderInclude<ExtArgs> | null
    /**
     * The data needed to create a VideoFolder.
     */
    data: XOR<VideoFolderCreateInput, VideoFolderUncheckedCreateInput>
  }

  /**
   * VideoFolder createMany
   */
  export type VideoFolderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VideoFolders.
     */
    data: VideoFolderCreateManyInput | VideoFolderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoFolder createManyAndReturn
   */
  export type VideoFolderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoFolder
     */
    select?: VideoFolderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoFolder
     */
    omit?: VideoFolderOmit<ExtArgs> | null
    /**
     * The data used to create many VideoFolders.
     */
    data: VideoFolderCreateManyInput | VideoFolderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoFolderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoFolder update
   */
  export type VideoFolderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoFolder
     */
    select?: VideoFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoFolder
     */
    omit?: VideoFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoFolderInclude<ExtArgs> | null
    /**
     * The data needed to update a VideoFolder.
     */
    data: XOR<VideoFolderUpdateInput, VideoFolderUncheckedUpdateInput>
    /**
     * Choose, which VideoFolder to update.
     */
    where: VideoFolderWhereUniqueInput
  }

  /**
   * VideoFolder updateMany
   */
  export type VideoFolderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VideoFolders.
     */
    data: XOR<VideoFolderUpdateManyMutationInput, VideoFolderUncheckedUpdateManyInput>
    /**
     * Filter which VideoFolders to update
     */
    where?: VideoFolderWhereInput
    /**
     * Limit how many VideoFolders to update.
     */
    limit?: number
  }

  /**
   * VideoFolder updateManyAndReturn
   */
  export type VideoFolderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoFolder
     */
    select?: VideoFolderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoFolder
     */
    omit?: VideoFolderOmit<ExtArgs> | null
    /**
     * The data used to update VideoFolders.
     */
    data: XOR<VideoFolderUpdateManyMutationInput, VideoFolderUncheckedUpdateManyInput>
    /**
     * Filter which VideoFolders to update
     */
    where?: VideoFolderWhereInput
    /**
     * Limit how many VideoFolders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoFolderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoFolder upsert
   */
  export type VideoFolderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoFolder
     */
    select?: VideoFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoFolder
     */
    omit?: VideoFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoFolderInclude<ExtArgs> | null
    /**
     * The filter to search for the VideoFolder to update in case it exists.
     */
    where: VideoFolderWhereUniqueInput
    /**
     * In case the VideoFolder found by the `where` argument doesn't exist, create a new VideoFolder with this data.
     */
    create: XOR<VideoFolderCreateInput, VideoFolderUncheckedCreateInput>
    /**
     * In case the VideoFolder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoFolderUpdateInput, VideoFolderUncheckedUpdateInput>
  }

  /**
   * VideoFolder delete
   */
  export type VideoFolderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoFolder
     */
    select?: VideoFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoFolder
     */
    omit?: VideoFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoFolderInclude<ExtArgs> | null
    /**
     * Filter which VideoFolder to delete.
     */
    where: VideoFolderWhereUniqueInput
  }

  /**
   * VideoFolder deleteMany
   */
  export type VideoFolderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoFolders to delete
     */
    where?: VideoFolderWhereInput
    /**
     * Limit how many VideoFolders to delete.
     */
    limit?: number
  }

  /**
   * VideoFolder.videos
   */
  export type VideoFolder$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * VideoFolder without action
   */
  export type VideoFolderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoFolder
     */
    select?: VideoFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoFolder
     */
    omit?: VideoFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoFolderInclude<ExtArgs> | null
  }


  /**
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoMinAggregateOutputType = {
    id: string | null
    title: string | null
    language: string | null
    location: string | null
    url: string | null
    createdAt: Date | null
    folderId: string | null
  }

  export type VideoMaxAggregateOutputType = {
    id: string | null
    title: string | null
    language: string | null
    location: string | null
    url: string | null
    createdAt: Date | null
    folderId: string | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    title: number
    language: number
    location: number
    url: number
    createdAt: number
    folderId: number
    _all: number
  }


  export type VideoMinAggregateInputType = {
    id?: true
    title?: true
    language?: true
    location?: true
    url?: true
    createdAt?: true
    folderId?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    title?: true
    language?: true
    location?: true
    url?: true
    createdAt?: true
    folderId?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    title?: true
    language?: true
    location?: true
    url?: true
    createdAt?: true
    folderId?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: string
    title: string
    language: string | null
    location: string | null
    url: string
    createdAt: Date
    folderId: string
    _count: VideoCountAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    language?: boolean
    location?: boolean
    url?: boolean
    createdAt?: boolean
    folderId?: boolean
    folder?: boolean | VideoFolderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    language?: boolean
    location?: boolean
    url?: boolean
    createdAt?: boolean
    folderId?: boolean
    folder?: boolean | VideoFolderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    language?: boolean
    location?: boolean
    url?: boolean
    createdAt?: boolean
    folderId?: boolean
    folder?: boolean | VideoFolderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectScalar = {
    id?: boolean
    title?: boolean
    language?: boolean
    location?: boolean
    url?: boolean
    createdAt?: boolean
    folderId?: boolean
  }

  export type VideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "language" | "location" | "url" | "createdAt" | "folderId", ExtArgs["result"]["video"]>
  export type VideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folder?: boolean | VideoFolderDefaultArgs<ExtArgs>
  }
  export type VideoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folder?: boolean | VideoFolderDefaultArgs<ExtArgs>
  }
  export type VideoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folder?: boolean | VideoFolderDefaultArgs<ExtArgs>
  }

  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {
      folder: Prisma.$VideoFolderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      language: string | null
      location: string | null
      url: string
      createdAt: Date
      folderId: string
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videos and returns the data saved in the database.
     * @param {VideoCreateManyAndReturnArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos and returns the data updated in the database.
     * @param {VideoUpdateManyAndReturnArgs} args - Arguments to update many Videos.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.updateManyAndReturn({
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
    updateManyAndReturn<T extends VideoUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
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
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    folder<T extends VideoFolderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoFolderDefaultArgs<ExtArgs>>): Prisma__VideoFolderClient<$Result.GetResult<Prisma.$VideoFolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Video model
   */
  interface VideoFieldRefs {
    readonly id: FieldRef<"Video", 'String'>
    readonly title: FieldRef<"Video", 'String'>
    readonly language: FieldRef<"Video", 'String'>
    readonly location: FieldRef<"Video", 'String'>
    readonly url: FieldRef<"Video", 'String'>
    readonly createdAt: FieldRef<"Video", 'DateTime'>
    readonly folderId: FieldRef<"Video", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Video createManyAndReturn
   */
  export type VideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video updateManyAndReturn
   */
  export type VideoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to delete.
     */
    limit?: number
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
  }


  /**
   * Model NewsContentBlock
   */

  export type AggregateNewsContentBlock = {
    _count: NewsContentBlockCountAggregateOutputType | null
    _avg: NewsContentBlockAvgAggregateOutputType | null
    _sum: NewsContentBlockSumAggregateOutputType | null
    _min: NewsContentBlockMinAggregateOutputType | null
    _max: NewsContentBlockMaxAggregateOutputType | null
  }

  export type NewsContentBlockAvgAggregateOutputType = {
    order: number | null
  }

  export type NewsContentBlockSumAggregateOutputType = {
    order: number | null
  }

  export type NewsContentBlockMinAggregateOutputType = {
    id: string | null
    type: string | null
    content: string | null
    order: number | null
    createdAt: Date | null
    newsId: string | null
  }

  export type NewsContentBlockMaxAggregateOutputType = {
    id: string | null
    type: string | null
    content: string | null
    order: number | null
    createdAt: Date | null
    newsId: string | null
  }

  export type NewsContentBlockCountAggregateOutputType = {
    id: number
    type: number
    content: number
    order: number
    createdAt: number
    newsId: number
    _all: number
  }


  export type NewsContentBlockAvgAggregateInputType = {
    order?: true
  }

  export type NewsContentBlockSumAggregateInputType = {
    order?: true
  }

  export type NewsContentBlockMinAggregateInputType = {
    id?: true
    type?: true
    content?: true
    order?: true
    createdAt?: true
    newsId?: true
  }

  export type NewsContentBlockMaxAggregateInputType = {
    id?: true
    type?: true
    content?: true
    order?: true
    createdAt?: true
    newsId?: true
  }

  export type NewsContentBlockCountAggregateInputType = {
    id?: true
    type?: true
    content?: true
    order?: true
    createdAt?: true
    newsId?: true
    _all?: true
  }

  export type NewsContentBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsContentBlock to aggregate.
     */
    where?: NewsContentBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsContentBlocks to fetch.
     */
    orderBy?: NewsContentBlockOrderByWithRelationInput | NewsContentBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsContentBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsContentBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsContentBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsContentBlocks
    **/
    _count?: true | NewsContentBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsContentBlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsContentBlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsContentBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsContentBlockMaxAggregateInputType
  }

  export type GetNewsContentBlockAggregateType<T extends NewsContentBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsContentBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsContentBlock[P]>
      : GetScalarType<T[P], AggregateNewsContentBlock[P]>
  }




  export type NewsContentBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsContentBlockWhereInput
    orderBy?: NewsContentBlockOrderByWithAggregationInput | NewsContentBlockOrderByWithAggregationInput[]
    by: NewsContentBlockScalarFieldEnum[] | NewsContentBlockScalarFieldEnum
    having?: NewsContentBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsContentBlockCountAggregateInputType | true
    _avg?: NewsContentBlockAvgAggregateInputType
    _sum?: NewsContentBlockSumAggregateInputType
    _min?: NewsContentBlockMinAggregateInputType
    _max?: NewsContentBlockMaxAggregateInputType
  }

  export type NewsContentBlockGroupByOutputType = {
    id: string
    type: string
    content: string
    order: number
    createdAt: Date
    newsId: string
    _count: NewsContentBlockCountAggregateOutputType | null
    _avg: NewsContentBlockAvgAggregateOutputType | null
    _sum: NewsContentBlockSumAggregateOutputType | null
    _min: NewsContentBlockMinAggregateOutputType | null
    _max: NewsContentBlockMaxAggregateOutputType | null
  }

  type GetNewsContentBlockGroupByPayload<T extends NewsContentBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsContentBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsContentBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsContentBlockGroupByOutputType[P]>
            : GetScalarType<T[P], NewsContentBlockGroupByOutputType[P]>
        }
      >
    >


  export type NewsContentBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    content?: boolean
    order?: boolean
    createdAt?: boolean
    newsId?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsContentBlock"]>

  export type NewsContentBlockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    content?: boolean
    order?: boolean
    createdAt?: boolean
    newsId?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsContentBlock"]>

  export type NewsContentBlockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    content?: boolean
    order?: boolean
    createdAt?: boolean
    newsId?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsContentBlock"]>

  export type NewsContentBlockSelectScalar = {
    id?: boolean
    type?: boolean
    content?: boolean
    order?: boolean
    createdAt?: boolean
    newsId?: boolean
  }

  export type NewsContentBlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "content" | "order" | "createdAt" | "newsId", ExtArgs["result"]["newsContentBlock"]>
  export type NewsContentBlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }
  export type NewsContentBlockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }
  export type NewsContentBlockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }

  export type $NewsContentBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsContentBlock"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      content: string
      order: number
      createdAt: Date
      newsId: string
    }, ExtArgs["result"]["newsContentBlock"]>
    composites: {}
  }

  type NewsContentBlockGetPayload<S extends boolean | null | undefined | NewsContentBlockDefaultArgs> = $Result.GetResult<Prisma.$NewsContentBlockPayload, S>

  type NewsContentBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsContentBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsContentBlockCountAggregateInputType | true
    }

  export interface NewsContentBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsContentBlock'], meta: { name: 'NewsContentBlock' } }
    /**
     * Find zero or one NewsContentBlock that matches the filter.
     * @param {NewsContentBlockFindUniqueArgs} args - Arguments to find a NewsContentBlock
     * @example
     * // Get one NewsContentBlock
     * const newsContentBlock = await prisma.newsContentBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsContentBlockFindUniqueArgs>(args: SelectSubset<T, NewsContentBlockFindUniqueArgs<ExtArgs>>): Prisma__NewsContentBlockClient<$Result.GetResult<Prisma.$NewsContentBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsContentBlock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsContentBlockFindUniqueOrThrowArgs} args - Arguments to find a NewsContentBlock
     * @example
     * // Get one NewsContentBlock
     * const newsContentBlock = await prisma.newsContentBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsContentBlockFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsContentBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsContentBlockClient<$Result.GetResult<Prisma.$NewsContentBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsContentBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsContentBlockFindFirstArgs} args - Arguments to find a NewsContentBlock
     * @example
     * // Get one NewsContentBlock
     * const newsContentBlock = await prisma.newsContentBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsContentBlockFindFirstArgs>(args?: SelectSubset<T, NewsContentBlockFindFirstArgs<ExtArgs>>): Prisma__NewsContentBlockClient<$Result.GetResult<Prisma.$NewsContentBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsContentBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsContentBlockFindFirstOrThrowArgs} args - Arguments to find a NewsContentBlock
     * @example
     * // Get one NewsContentBlock
     * const newsContentBlock = await prisma.newsContentBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsContentBlockFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsContentBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsContentBlockClient<$Result.GetResult<Prisma.$NewsContentBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsContentBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsContentBlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsContentBlocks
     * const newsContentBlocks = await prisma.newsContentBlock.findMany()
     * 
     * // Get first 10 NewsContentBlocks
     * const newsContentBlocks = await prisma.newsContentBlock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsContentBlockWithIdOnly = await prisma.newsContentBlock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsContentBlockFindManyArgs>(args?: SelectSubset<T, NewsContentBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsContentBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsContentBlock.
     * @param {NewsContentBlockCreateArgs} args - Arguments to create a NewsContentBlock.
     * @example
     * // Create one NewsContentBlock
     * const NewsContentBlock = await prisma.newsContentBlock.create({
     *   data: {
     *     // ... data to create a NewsContentBlock
     *   }
     * })
     * 
     */
    create<T extends NewsContentBlockCreateArgs>(args: SelectSubset<T, NewsContentBlockCreateArgs<ExtArgs>>): Prisma__NewsContentBlockClient<$Result.GetResult<Prisma.$NewsContentBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsContentBlocks.
     * @param {NewsContentBlockCreateManyArgs} args - Arguments to create many NewsContentBlocks.
     * @example
     * // Create many NewsContentBlocks
     * const newsContentBlock = await prisma.newsContentBlock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsContentBlockCreateManyArgs>(args?: SelectSubset<T, NewsContentBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsContentBlocks and returns the data saved in the database.
     * @param {NewsContentBlockCreateManyAndReturnArgs} args - Arguments to create many NewsContentBlocks.
     * @example
     * // Create many NewsContentBlocks
     * const newsContentBlock = await prisma.newsContentBlock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsContentBlocks and only return the `id`
     * const newsContentBlockWithIdOnly = await prisma.newsContentBlock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsContentBlockCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsContentBlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsContentBlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsContentBlock.
     * @param {NewsContentBlockDeleteArgs} args - Arguments to delete one NewsContentBlock.
     * @example
     * // Delete one NewsContentBlock
     * const NewsContentBlock = await prisma.newsContentBlock.delete({
     *   where: {
     *     // ... filter to delete one NewsContentBlock
     *   }
     * })
     * 
     */
    delete<T extends NewsContentBlockDeleteArgs>(args: SelectSubset<T, NewsContentBlockDeleteArgs<ExtArgs>>): Prisma__NewsContentBlockClient<$Result.GetResult<Prisma.$NewsContentBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsContentBlock.
     * @param {NewsContentBlockUpdateArgs} args - Arguments to update one NewsContentBlock.
     * @example
     * // Update one NewsContentBlock
     * const newsContentBlock = await prisma.newsContentBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsContentBlockUpdateArgs>(args: SelectSubset<T, NewsContentBlockUpdateArgs<ExtArgs>>): Prisma__NewsContentBlockClient<$Result.GetResult<Prisma.$NewsContentBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsContentBlocks.
     * @param {NewsContentBlockDeleteManyArgs} args - Arguments to filter NewsContentBlocks to delete.
     * @example
     * // Delete a few NewsContentBlocks
     * const { count } = await prisma.newsContentBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsContentBlockDeleteManyArgs>(args?: SelectSubset<T, NewsContentBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsContentBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsContentBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsContentBlocks
     * const newsContentBlock = await prisma.newsContentBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsContentBlockUpdateManyArgs>(args: SelectSubset<T, NewsContentBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsContentBlocks and returns the data updated in the database.
     * @param {NewsContentBlockUpdateManyAndReturnArgs} args - Arguments to update many NewsContentBlocks.
     * @example
     * // Update many NewsContentBlocks
     * const newsContentBlock = await prisma.newsContentBlock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsContentBlocks and only return the `id`
     * const newsContentBlockWithIdOnly = await prisma.newsContentBlock.updateManyAndReturn({
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
    updateManyAndReturn<T extends NewsContentBlockUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsContentBlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsContentBlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsContentBlock.
     * @param {NewsContentBlockUpsertArgs} args - Arguments to update or create a NewsContentBlock.
     * @example
     * // Update or create a NewsContentBlock
     * const newsContentBlock = await prisma.newsContentBlock.upsert({
     *   create: {
     *     // ... data to create a NewsContentBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsContentBlock we want to update
     *   }
     * })
     */
    upsert<T extends NewsContentBlockUpsertArgs>(args: SelectSubset<T, NewsContentBlockUpsertArgs<ExtArgs>>): Prisma__NewsContentBlockClient<$Result.GetResult<Prisma.$NewsContentBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsContentBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsContentBlockCountArgs} args - Arguments to filter NewsContentBlocks to count.
     * @example
     * // Count the number of NewsContentBlocks
     * const count = await prisma.newsContentBlock.count({
     *   where: {
     *     // ... the filter for the NewsContentBlocks we want to count
     *   }
     * })
    **/
    count<T extends NewsContentBlockCountArgs>(
      args?: Subset<T, NewsContentBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsContentBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsContentBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsContentBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsContentBlockAggregateArgs>(args: Subset<T, NewsContentBlockAggregateArgs>): Prisma.PrismaPromise<GetNewsContentBlockAggregateType<T>>

    /**
     * Group by NewsContentBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsContentBlockGroupByArgs} args - Group by arguments.
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
      T extends NewsContentBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsContentBlockGroupByArgs['orderBy'] }
        : { orderBy?: NewsContentBlockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsContentBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsContentBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsContentBlock model
   */
  readonly fields: NewsContentBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsContentBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsContentBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends NewsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsDefaultArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NewsContentBlock model
   */
  interface NewsContentBlockFieldRefs {
    readonly id: FieldRef<"NewsContentBlock", 'String'>
    readonly type: FieldRef<"NewsContentBlock", 'String'>
    readonly content: FieldRef<"NewsContentBlock", 'String'>
    readonly order: FieldRef<"NewsContentBlock", 'Int'>
    readonly createdAt: FieldRef<"NewsContentBlock", 'DateTime'>
    readonly newsId: FieldRef<"NewsContentBlock", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NewsContentBlock findUnique
   */
  export type NewsContentBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsContentBlock
     */
    select?: NewsContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsContentBlock
     */
    omit?: NewsContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsContentBlockInclude<ExtArgs> | null
    /**
     * Filter, which NewsContentBlock to fetch.
     */
    where: NewsContentBlockWhereUniqueInput
  }

  /**
   * NewsContentBlock findUniqueOrThrow
   */
  export type NewsContentBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsContentBlock
     */
    select?: NewsContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsContentBlock
     */
    omit?: NewsContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsContentBlockInclude<ExtArgs> | null
    /**
     * Filter, which NewsContentBlock to fetch.
     */
    where: NewsContentBlockWhereUniqueInput
  }

  /**
   * NewsContentBlock findFirst
   */
  export type NewsContentBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsContentBlock
     */
    select?: NewsContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsContentBlock
     */
    omit?: NewsContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsContentBlockInclude<ExtArgs> | null
    /**
     * Filter, which NewsContentBlock to fetch.
     */
    where?: NewsContentBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsContentBlocks to fetch.
     */
    orderBy?: NewsContentBlockOrderByWithRelationInput | NewsContentBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsContentBlocks.
     */
    cursor?: NewsContentBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsContentBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsContentBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsContentBlocks.
     */
    distinct?: NewsContentBlockScalarFieldEnum | NewsContentBlockScalarFieldEnum[]
  }

  /**
   * NewsContentBlock findFirstOrThrow
   */
  export type NewsContentBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsContentBlock
     */
    select?: NewsContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsContentBlock
     */
    omit?: NewsContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsContentBlockInclude<ExtArgs> | null
    /**
     * Filter, which NewsContentBlock to fetch.
     */
    where?: NewsContentBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsContentBlocks to fetch.
     */
    orderBy?: NewsContentBlockOrderByWithRelationInput | NewsContentBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsContentBlocks.
     */
    cursor?: NewsContentBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsContentBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsContentBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsContentBlocks.
     */
    distinct?: NewsContentBlockScalarFieldEnum | NewsContentBlockScalarFieldEnum[]
  }

  /**
   * NewsContentBlock findMany
   */
  export type NewsContentBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsContentBlock
     */
    select?: NewsContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsContentBlock
     */
    omit?: NewsContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsContentBlockInclude<ExtArgs> | null
    /**
     * Filter, which NewsContentBlocks to fetch.
     */
    where?: NewsContentBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsContentBlocks to fetch.
     */
    orderBy?: NewsContentBlockOrderByWithRelationInput | NewsContentBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsContentBlocks.
     */
    cursor?: NewsContentBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsContentBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsContentBlocks.
     */
    skip?: number
    distinct?: NewsContentBlockScalarFieldEnum | NewsContentBlockScalarFieldEnum[]
  }

  /**
   * NewsContentBlock create
   */
  export type NewsContentBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsContentBlock
     */
    select?: NewsContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsContentBlock
     */
    omit?: NewsContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsContentBlockInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsContentBlock.
     */
    data: XOR<NewsContentBlockCreateInput, NewsContentBlockUncheckedCreateInput>
  }

  /**
   * NewsContentBlock createMany
   */
  export type NewsContentBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsContentBlocks.
     */
    data: NewsContentBlockCreateManyInput | NewsContentBlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsContentBlock createManyAndReturn
   */
  export type NewsContentBlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsContentBlock
     */
    select?: NewsContentBlockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsContentBlock
     */
    omit?: NewsContentBlockOmit<ExtArgs> | null
    /**
     * The data used to create many NewsContentBlocks.
     */
    data: NewsContentBlockCreateManyInput | NewsContentBlockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsContentBlockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsContentBlock update
   */
  export type NewsContentBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsContentBlock
     */
    select?: NewsContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsContentBlock
     */
    omit?: NewsContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsContentBlockInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsContentBlock.
     */
    data: XOR<NewsContentBlockUpdateInput, NewsContentBlockUncheckedUpdateInput>
    /**
     * Choose, which NewsContentBlock to update.
     */
    where: NewsContentBlockWhereUniqueInput
  }

  /**
   * NewsContentBlock updateMany
   */
  export type NewsContentBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsContentBlocks.
     */
    data: XOR<NewsContentBlockUpdateManyMutationInput, NewsContentBlockUncheckedUpdateManyInput>
    /**
     * Filter which NewsContentBlocks to update
     */
    where?: NewsContentBlockWhereInput
    /**
     * Limit how many NewsContentBlocks to update.
     */
    limit?: number
  }

  /**
   * NewsContentBlock updateManyAndReturn
   */
  export type NewsContentBlockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsContentBlock
     */
    select?: NewsContentBlockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsContentBlock
     */
    omit?: NewsContentBlockOmit<ExtArgs> | null
    /**
     * The data used to update NewsContentBlocks.
     */
    data: XOR<NewsContentBlockUpdateManyMutationInput, NewsContentBlockUncheckedUpdateManyInput>
    /**
     * Filter which NewsContentBlocks to update
     */
    where?: NewsContentBlockWhereInput
    /**
     * Limit how many NewsContentBlocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsContentBlockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsContentBlock upsert
   */
  export type NewsContentBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsContentBlock
     */
    select?: NewsContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsContentBlock
     */
    omit?: NewsContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsContentBlockInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsContentBlock to update in case it exists.
     */
    where: NewsContentBlockWhereUniqueInput
    /**
     * In case the NewsContentBlock found by the `where` argument doesn't exist, create a new NewsContentBlock with this data.
     */
    create: XOR<NewsContentBlockCreateInput, NewsContentBlockUncheckedCreateInput>
    /**
     * In case the NewsContentBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsContentBlockUpdateInput, NewsContentBlockUncheckedUpdateInput>
  }

  /**
   * NewsContentBlock delete
   */
  export type NewsContentBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsContentBlock
     */
    select?: NewsContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsContentBlock
     */
    omit?: NewsContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsContentBlockInclude<ExtArgs> | null
    /**
     * Filter which NewsContentBlock to delete.
     */
    where: NewsContentBlockWhereUniqueInput
  }

  /**
   * NewsContentBlock deleteMany
   */
  export type NewsContentBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsContentBlocks to delete
     */
    where?: NewsContentBlockWhereInput
    /**
     * Limit how many NewsContentBlocks to delete.
     */
    limit?: number
  }

  /**
   * NewsContentBlock without action
   */
  export type NewsContentBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsContentBlock
     */
    select?: NewsContentBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsContentBlock
     */
    omit?: NewsContentBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsContentBlockInclude<ExtArgs> | null
  }


  /**
   * Model ImageFolder
   */

  export type AggregateImageFolder = {
    _count: ImageFolderCountAggregateOutputType | null
    _min: ImageFolderMinAggregateOutputType | null
    _max: ImageFolderMaxAggregateOutputType | null
  }

  export type ImageFolderMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    createdAt: Date | null
  }

  export type ImageFolderMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    createdAt: Date | null
  }

  export type ImageFolderCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    createdAt: number
    _all: number
  }


  export type ImageFolderMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    createdAt?: true
  }

  export type ImageFolderMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    createdAt?: true
  }

  export type ImageFolderCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    createdAt?: true
    _all?: true
  }

  export type ImageFolderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageFolder to aggregate.
     */
    where?: ImageFolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageFolders to fetch.
     */
    orderBy?: ImageFolderOrderByWithRelationInput | ImageFolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageFolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageFolders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageFolders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImageFolders
    **/
    _count?: true | ImageFolderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageFolderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageFolderMaxAggregateInputType
  }

  export type GetImageFolderAggregateType<T extends ImageFolderAggregateArgs> = {
        [P in keyof T & keyof AggregateImageFolder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImageFolder[P]>
      : GetScalarType<T[P], AggregateImageFolder[P]>
  }




  export type ImageFolderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageFolderWhereInput
    orderBy?: ImageFolderOrderByWithAggregationInput | ImageFolderOrderByWithAggregationInput[]
    by: ImageFolderScalarFieldEnum[] | ImageFolderScalarFieldEnum
    having?: ImageFolderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageFolderCountAggregateInputType | true
    _min?: ImageFolderMinAggregateInputType
    _max?: ImageFolderMaxAggregateInputType
  }

  export type ImageFolderGroupByOutputType = {
    id: string
    userId: string
    title: string
    createdAt: Date
    _count: ImageFolderCountAggregateOutputType | null
    _min: ImageFolderMinAggregateOutputType | null
    _max: ImageFolderMaxAggregateOutputType | null
  }

  type GetImageFolderGroupByPayload<T extends ImageFolderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageFolderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageFolderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageFolderGroupByOutputType[P]>
            : GetScalarType<T[P], ImageFolderGroupByOutputType[P]>
        }
      >
    >


  export type ImageFolderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    images?: boolean | ImageFolder$imagesArgs<ExtArgs>
    _count?: boolean | ImageFolderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imageFolder"]>

  export type ImageFolderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imageFolder"]>

  export type ImageFolderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imageFolder"]>

  export type ImageFolderSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    createdAt?: boolean
  }

  export type ImageFolderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "createdAt", ExtArgs["result"]["imageFolder"]>
  export type ImageFolderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    images?: boolean | ImageFolder$imagesArgs<ExtArgs>
    _count?: boolean | ImageFolderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ImageFolderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ImageFolderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ImageFolderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImageFolder"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      images: Prisma.$ImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      createdAt: Date
    }, ExtArgs["result"]["imageFolder"]>
    composites: {}
  }

  type ImageFolderGetPayload<S extends boolean | null | undefined | ImageFolderDefaultArgs> = $Result.GetResult<Prisma.$ImageFolderPayload, S>

  type ImageFolderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFolderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageFolderCountAggregateInputType | true
    }

  export interface ImageFolderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImageFolder'], meta: { name: 'ImageFolder' } }
    /**
     * Find zero or one ImageFolder that matches the filter.
     * @param {ImageFolderFindUniqueArgs} args - Arguments to find a ImageFolder
     * @example
     * // Get one ImageFolder
     * const imageFolder = await prisma.imageFolder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFolderFindUniqueArgs>(args: SelectSubset<T, ImageFolderFindUniqueArgs<ExtArgs>>): Prisma__ImageFolderClient<$Result.GetResult<Prisma.$ImageFolderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImageFolder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFolderFindUniqueOrThrowArgs} args - Arguments to find a ImageFolder
     * @example
     * // Get one ImageFolder
     * const imageFolder = await prisma.imageFolder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFolderFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFolderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageFolderClient<$Result.GetResult<Prisma.$ImageFolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImageFolder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFolderFindFirstArgs} args - Arguments to find a ImageFolder
     * @example
     * // Get one ImageFolder
     * const imageFolder = await prisma.imageFolder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFolderFindFirstArgs>(args?: SelectSubset<T, ImageFolderFindFirstArgs<ExtArgs>>): Prisma__ImageFolderClient<$Result.GetResult<Prisma.$ImageFolderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImageFolder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFolderFindFirstOrThrowArgs} args - Arguments to find a ImageFolder
     * @example
     * // Get one ImageFolder
     * const imageFolder = await prisma.imageFolder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFolderFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFolderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageFolderClient<$Result.GetResult<Prisma.$ImageFolderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImageFolders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFolderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImageFolders
     * const imageFolders = await prisma.imageFolder.findMany()
     * 
     * // Get first 10 ImageFolders
     * const imageFolders = await prisma.imageFolder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageFolderWithIdOnly = await prisma.imageFolder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFolderFindManyArgs>(args?: SelectSubset<T, ImageFolderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageFolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImageFolder.
     * @param {ImageFolderCreateArgs} args - Arguments to create a ImageFolder.
     * @example
     * // Create one ImageFolder
     * const ImageFolder = await prisma.imageFolder.create({
     *   data: {
     *     // ... data to create a ImageFolder
     *   }
     * })
     * 
     */
    create<T extends ImageFolderCreateArgs>(args: SelectSubset<T, ImageFolderCreateArgs<ExtArgs>>): Prisma__ImageFolderClient<$Result.GetResult<Prisma.$ImageFolderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImageFolders.
     * @param {ImageFolderCreateManyArgs} args - Arguments to create many ImageFolders.
     * @example
     * // Create many ImageFolders
     * const imageFolder = await prisma.imageFolder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageFolderCreateManyArgs>(args?: SelectSubset<T, ImageFolderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImageFolders and returns the data saved in the database.
     * @param {ImageFolderCreateManyAndReturnArgs} args - Arguments to create many ImageFolders.
     * @example
     * // Create many ImageFolders
     * const imageFolder = await prisma.imageFolder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImageFolders and only return the `id`
     * const imageFolderWithIdOnly = await prisma.imageFolder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageFolderCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageFolderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageFolderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImageFolder.
     * @param {ImageFolderDeleteArgs} args - Arguments to delete one ImageFolder.
     * @example
     * // Delete one ImageFolder
     * const ImageFolder = await prisma.imageFolder.delete({
     *   where: {
     *     // ... filter to delete one ImageFolder
     *   }
     * })
     * 
     */
    delete<T extends ImageFolderDeleteArgs>(args: SelectSubset<T, ImageFolderDeleteArgs<ExtArgs>>): Prisma__ImageFolderClient<$Result.GetResult<Prisma.$ImageFolderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImageFolder.
     * @param {ImageFolderUpdateArgs} args - Arguments to update one ImageFolder.
     * @example
     * // Update one ImageFolder
     * const imageFolder = await prisma.imageFolder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageFolderUpdateArgs>(args: SelectSubset<T, ImageFolderUpdateArgs<ExtArgs>>): Prisma__ImageFolderClient<$Result.GetResult<Prisma.$ImageFolderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImageFolders.
     * @param {ImageFolderDeleteManyArgs} args - Arguments to filter ImageFolders to delete.
     * @example
     * // Delete a few ImageFolders
     * const { count } = await prisma.imageFolder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageFolderDeleteManyArgs>(args?: SelectSubset<T, ImageFolderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageFolders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFolderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImageFolders
     * const imageFolder = await prisma.imageFolder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageFolderUpdateManyArgs>(args: SelectSubset<T, ImageFolderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageFolders and returns the data updated in the database.
     * @param {ImageFolderUpdateManyAndReturnArgs} args - Arguments to update many ImageFolders.
     * @example
     * // Update many ImageFolders
     * const imageFolder = await prisma.imageFolder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImageFolders and only return the `id`
     * const imageFolderWithIdOnly = await prisma.imageFolder.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImageFolderUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageFolderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageFolderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImageFolder.
     * @param {ImageFolderUpsertArgs} args - Arguments to update or create a ImageFolder.
     * @example
     * // Update or create a ImageFolder
     * const imageFolder = await prisma.imageFolder.upsert({
     *   create: {
     *     // ... data to create a ImageFolder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImageFolder we want to update
     *   }
     * })
     */
    upsert<T extends ImageFolderUpsertArgs>(args: SelectSubset<T, ImageFolderUpsertArgs<ExtArgs>>): Prisma__ImageFolderClient<$Result.GetResult<Prisma.$ImageFolderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImageFolders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFolderCountArgs} args - Arguments to filter ImageFolders to count.
     * @example
     * // Count the number of ImageFolders
     * const count = await prisma.imageFolder.count({
     *   where: {
     *     // ... the filter for the ImageFolders we want to count
     *   }
     * })
    **/
    count<T extends ImageFolderCountArgs>(
      args?: Subset<T, ImageFolderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageFolderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImageFolder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFolderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageFolderAggregateArgs>(args: Subset<T, ImageFolderAggregateArgs>): Prisma.PrismaPromise<GetImageFolderAggregateType<T>>

    /**
     * Group by ImageFolder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFolderGroupByArgs} args - Group by arguments.
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
      T extends ImageFolderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageFolderGroupByArgs['orderBy'] }
        : { orderBy?: ImageFolderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageFolderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageFolderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImageFolder model
   */
  readonly fields: ImageFolderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImageFolder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageFolderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends ImageFolder$imagesArgs<ExtArgs> = {}>(args?: Subset<T, ImageFolder$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ImageFolder model
   */
  interface ImageFolderFieldRefs {
    readonly id: FieldRef<"ImageFolder", 'String'>
    readonly userId: FieldRef<"ImageFolder", 'String'>
    readonly title: FieldRef<"ImageFolder", 'String'>
    readonly createdAt: FieldRef<"ImageFolder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ImageFolder findUnique
   */
  export type ImageFolderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageFolder
     */
    select?: ImageFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageFolder
     */
    omit?: ImageFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageFolderInclude<ExtArgs> | null
    /**
     * Filter, which ImageFolder to fetch.
     */
    where: ImageFolderWhereUniqueInput
  }

  /**
   * ImageFolder findUniqueOrThrow
   */
  export type ImageFolderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageFolder
     */
    select?: ImageFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageFolder
     */
    omit?: ImageFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageFolderInclude<ExtArgs> | null
    /**
     * Filter, which ImageFolder to fetch.
     */
    where: ImageFolderWhereUniqueInput
  }

  /**
   * ImageFolder findFirst
   */
  export type ImageFolderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageFolder
     */
    select?: ImageFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageFolder
     */
    omit?: ImageFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageFolderInclude<ExtArgs> | null
    /**
     * Filter, which ImageFolder to fetch.
     */
    where?: ImageFolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageFolders to fetch.
     */
    orderBy?: ImageFolderOrderByWithRelationInput | ImageFolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageFolders.
     */
    cursor?: ImageFolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageFolders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageFolders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageFolders.
     */
    distinct?: ImageFolderScalarFieldEnum | ImageFolderScalarFieldEnum[]
  }

  /**
   * ImageFolder findFirstOrThrow
   */
  export type ImageFolderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageFolder
     */
    select?: ImageFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageFolder
     */
    omit?: ImageFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageFolderInclude<ExtArgs> | null
    /**
     * Filter, which ImageFolder to fetch.
     */
    where?: ImageFolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageFolders to fetch.
     */
    orderBy?: ImageFolderOrderByWithRelationInput | ImageFolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageFolders.
     */
    cursor?: ImageFolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageFolders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageFolders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageFolders.
     */
    distinct?: ImageFolderScalarFieldEnum | ImageFolderScalarFieldEnum[]
  }

  /**
   * ImageFolder findMany
   */
  export type ImageFolderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageFolder
     */
    select?: ImageFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageFolder
     */
    omit?: ImageFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageFolderInclude<ExtArgs> | null
    /**
     * Filter, which ImageFolders to fetch.
     */
    where?: ImageFolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageFolders to fetch.
     */
    orderBy?: ImageFolderOrderByWithRelationInput | ImageFolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImageFolders.
     */
    cursor?: ImageFolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageFolders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageFolders.
     */
    skip?: number
    distinct?: ImageFolderScalarFieldEnum | ImageFolderScalarFieldEnum[]
  }

  /**
   * ImageFolder create
   */
  export type ImageFolderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageFolder
     */
    select?: ImageFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageFolder
     */
    omit?: ImageFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageFolderInclude<ExtArgs> | null
    /**
     * The data needed to create a ImageFolder.
     */
    data: XOR<ImageFolderCreateInput, ImageFolderUncheckedCreateInput>
  }

  /**
   * ImageFolder createMany
   */
  export type ImageFolderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImageFolders.
     */
    data: ImageFolderCreateManyInput | ImageFolderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImageFolder createManyAndReturn
   */
  export type ImageFolderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageFolder
     */
    select?: ImageFolderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImageFolder
     */
    omit?: ImageFolderOmit<ExtArgs> | null
    /**
     * The data used to create many ImageFolders.
     */
    data: ImageFolderCreateManyInput | ImageFolderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageFolderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImageFolder update
   */
  export type ImageFolderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageFolder
     */
    select?: ImageFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageFolder
     */
    omit?: ImageFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageFolderInclude<ExtArgs> | null
    /**
     * The data needed to update a ImageFolder.
     */
    data: XOR<ImageFolderUpdateInput, ImageFolderUncheckedUpdateInput>
    /**
     * Choose, which ImageFolder to update.
     */
    where: ImageFolderWhereUniqueInput
  }

  /**
   * ImageFolder updateMany
   */
  export type ImageFolderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImageFolders.
     */
    data: XOR<ImageFolderUpdateManyMutationInput, ImageFolderUncheckedUpdateManyInput>
    /**
     * Filter which ImageFolders to update
     */
    where?: ImageFolderWhereInput
    /**
     * Limit how many ImageFolders to update.
     */
    limit?: number
  }

  /**
   * ImageFolder updateManyAndReturn
   */
  export type ImageFolderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageFolder
     */
    select?: ImageFolderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImageFolder
     */
    omit?: ImageFolderOmit<ExtArgs> | null
    /**
     * The data used to update ImageFolders.
     */
    data: XOR<ImageFolderUpdateManyMutationInput, ImageFolderUncheckedUpdateManyInput>
    /**
     * Filter which ImageFolders to update
     */
    where?: ImageFolderWhereInput
    /**
     * Limit how many ImageFolders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageFolderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImageFolder upsert
   */
  export type ImageFolderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageFolder
     */
    select?: ImageFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageFolder
     */
    omit?: ImageFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageFolderInclude<ExtArgs> | null
    /**
     * The filter to search for the ImageFolder to update in case it exists.
     */
    where: ImageFolderWhereUniqueInput
    /**
     * In case the ImageFolder found by the `where` argument doesn't exist, create a new ImageFolder with this data.
     */
    create: XOR<ImageFolderCreateInput, ImageFolderUncheckedCreateInput>
    /**
     * In case the ImageFolder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageFolderUpdateInput, ImageFolderUncheckedUpdateInput>
  }

  /**
   * ImageFolder delete
   */
  export type ImageFolderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageFolder
     */
    select?: ImageFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageFolder
     */
    omit?: ImageFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageFolderInclude<ExtArgs> | null
    /**
     * Filter which ImageFolder to delete.
     */
    where: ImageFolderWhereUniqueInput
  }

  /**
   * ImageFolder deleteMany
   */
  export type ImageFolderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageFolders to delete
     */
    where?: ImageFolderWhereInput
    /**
     * Limit how many ImageFolders to delete.
     */
    limit?: number
  }

  /**
   * ImageFolder.images
   */
  export type ImageFolder$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * ImageFolder without action
   */
  export type ImageFolderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageFolder
     */
    select?: ImageFolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageFolder
     */
    omit?: ImageFolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageFolderInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    size: number | null
  }

  export type ImageSumAggregateOutputType = {
    size: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: string | null
    folderId: string | null
    url: string | null
    size: number | null
    createdAt: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    id: string | null
    folderId: string | null
    url: string | null
    size: number | null
    createdAt: Date | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    folderId: number
    url: number
    size: number
    createdAt: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    size?: true
  }

  export type ImageSumAggregateInputType = {
    size?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    folderId?: true
    url?: true
    size?: true
    createdAt?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    folderId?: true
    url?: true
    size?: true
    createdAt?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    folderId?: true
    url?: true
    size?: true
    createdAt?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: string
    folderId: string
    url: string
    size: number
    createdAt: Date
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    folderId?: boolean
    url?: boolean
    size?: boolean
    createdAt?: boolean
    folder?: boolean | ImageFolderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    folderId?: boolean
    url?: boolean
    size?: boolean
    createdAt?: boolean
    folder?: boolean | ImageFolderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    folderId?: boolean
    url?: boolean
    size?: boolean
    createdAt?: boolean
    folder?: boolean | ImageFolderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    folderId?: boolean
    url?: boolean
    size?: boolean
    createdAt?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "folderId" | "url" | "size" | "createdAt", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folder?: boolean | ImageFolderDefaultArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folder?: boolean | ImageFolderDefaultArgs<ExtArgs>
  }
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folder?: boolean | ImageFolderDefaultArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      folder: Prisma.$ImageFolderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      folderId: string
      url: string
      size: number
      createdAt: Date
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    folder<T extends ImageFolderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImageFolderDefaultArgs<ExtArgs>>): Prisma__ImageFolderClient<$Result.GetResult<Prisma.$ImageFolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'String'>
    readonly folderId: FieldRef<"Image", 'String'>
    readonly url: FieldRef<"Image", 'String'>
    readonly size: FieldRef<"Image", 'Int'>
    readonly createdAt: FieldRef<"Image", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
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
    company_name: 'company_name',
    website: 'website',
    email: 'email',
    logo: 'logo',
    primary_color: 'primary_color',
    secondary_color: 'secondary_color',
    name: 'name',
    contact_number: 'contact_number',
    address: 'address',
    password: 'password',
    role: 'role',
    allowBlogs: 'allowBlogs',
    allowNews: 'allowNews',
    allowImages: 'allowImages',
    allowVideos: 'allowVideos',
    startDate: 'startDate',
    endDate: 'endDate',
    isActive: 'isActive',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    slug: 'slug',
    description: 'description',
    keywords: 'keywords',
    createdAt: 'createdAt'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const BlogContentBlockScalarFieldEnum: {
    id: 'id',
    type: 'type',
    content: 'content',
    order: 'order',
    createdAt: 'createdAt',
    blogId: 'blogId'
  };

  export type BlogContentBlockScalarFieldEnum = (typeof BlogContentBlockScalarFieldEnum)[keyof typeof BlogContentBlockScalarFieldEnum]


  export const NewsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    slug: 'slug',
    description: 'description',
    keywords: 'keywords',
    createdAt: 'createdAt'
  };

  export type NewsScalarFieldEnum = (typeof NewsScalarFieldEnum)[keyof typeof NewsScalarFieldEnum]


  export const VideoFolderScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type VideoFolderScalarFieldEnum = (typeof VideoFolderScalarFieldEnum)[keyof typeof VideoFolderScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    id: 'id',
    title: 'title',
    language: 'language',
    location: 'location',
    url: 'url',
    createdAt: 'createdAt',
    folderId: 'folderId'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const NewsContentBlockScalarFieldEnum: {
    id: 'id',
    type: 'type',
    content: 'content',
    order: 'order',
    createdAt: 'createdAt',
    newsId: 'newsId'
  };

  export type NewsContentBlockScalarFieldEnum = (typeof NewsContentBlockScalarFieldEnum)[keyof typeof NewsContentBlockScalarFieldEnum]


  export const ImageFolderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    createdAt: 'createdAt'
  };

  export type ImageFolderScalarFieldEnum = (typeof ImageFolderScalarFieldEnum)[keyof typeof ImageFolderScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    folderId: 'folderId',
    url: 'url',
    size: 'size',
    createdAt: 'createdAt'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
    id?: StringFilter<"User"> | string
    company_name?: StringFilter<"User"> | string
    website?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    logo?: StringFilter<"User"> | string
    primary_color?: StringFilter<"User"> | string
    secondary_color?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    contact_number?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    allowBlogs?: BoolFilter<"User"> | boolean
    allowNews?: BoolFilter<"User"> | boolean
    allowImages?: BoolFilter<"User"> | boolean
    allowVideos?: BoolFilter<"User"> | boolean
    startDate?: DateTimeFilter<"User"> | Date | string
    endDate?: DateTimeFilter<"User"> | Date | string
    isActive?: BoolFilter<"User"> | boolean
    isDeleted?: BoolFilter<"User"> | boolean
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    blogs?: BlogListRelationFilter
    news?: NewsListRelationFilter
    imageFolders?: ImageFolderListRelationFilter
    VideoFolders?: VideoFolderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    company_name?: SortOrder
    website?: SortOrder
    email?: SortOrder
    logo?: SortOrder
    primary_color?: SortOrder
    secondary_color?: SortOrder
    name?: SortOrder
    contact_number?: SortOrder
    address?: SortOrder
    password?: SortOrder
    role?: SortOrder
    allowBlogs?: SortOrder
    allowNews?: SortOrder
    allowImages?: SortOrder
    allowVideos?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blogs?: BlogOrderByRelationAggregateInput
    news?: NewsOrderByRelationAggregateInput
    imageFolders?: ImageFolderOrderByRelationAggregateInput
    VideoFolders?: VideoFolderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    contact_number?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    company_name?: StringFilter<"User"> | string
    website?: StringFilter<"User"> | string
    logo?: StringFilter<"User"> | string
    primary_color?: StringFilter<"User"> | string
    secondary_color?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    allowBlogs?: BoolFilter<"User"> | boolean
    allowNews?: BoolFilter<"User"> | boolean
    allowImages?: BoolFilter<"User"> | boolean
    allowVideos?: BoolFilter<"User"> | boolean
    startDate?: DateTimeFilter<"User"> | Date | string
    endDate?: DateTimeFilter<"User"> | Date | string
    isActive?: BoolFilter<"User"> | boolean
    isDeleted?: BoolFilter<"User"> | boolean
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    blogs?: BlogListRelationFilter
    news?: NewsListRelationFilter
    imageFolders?: ImageFolderListRelationFilter
    VideoFolders?: VideoFolderListRelationFilter
  }, "id" | "email" | "contact_number">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    company_name?: SortOrder
    website?: SortOrder
    email?: SortOrder
    logo?: SortOrder
    primary_color?: SortOrder
    secondary_color?: SortOrder
    name?: SortOrder
    contact_number?: SortOrder
    address?: SortOrder
    password?: SortOrder
    role?: SortOrder
    allowBlogs?: SortOrder
    allowNews?: SortOrder
    allowImages?: SortOrder
    allowVideos?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    company_name?: StringWithAggregatesFilter<"User"> | string
    website?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    logo?: StringWithAggregatesFilter<"User"> | string
    primary_color?: StringWithAggregatesFilter<"User"> | string
    secondary_color?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    contact_number?: StringWithAggregatesFilter<"User"> | string
    address?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    allowBlogs?: BoolWithAggregatesFilter<"User"> | boolean
    allowNews?: BoolWithAggregatesFilter<"User"> | boolean
    allowImages?: BoolWithAggregatesFilter<"User"> | boolean
    allowVideos?: BoolWithAggregatesFilter<"User"> | boolean
    startDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"User"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BlogWhereInput = {
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    id?: StringFilter<"Blog"> | string
    userId?: StringFilter<"Blog"> | string
    title?: StringFilter<"Blog"> | string
    slug?: StringFilter<"Blog"> | string
    description?: StringNullableFilter<"Blog"> | string | null
    keywords?: JsonNullableFilter<"Blog">
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    contents?: BlogContentBlockListRelationFilter
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    contents?: BlogContentBlockOrderByRelationAggregateInput
  }

  export type BlogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    userId?: StringFilter<"Blog"> | string
    title?: StringFilter<"Blog"> | string
    description?: StringNullableFilter<"Blog"> | string | null
    keywords?: JsonNullableFilter<"Blog">
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    contents?: BlogContentBlockListRelationFilter
  }, "id" | "slug">

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BlogCountOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    OR?: BlogScalarWhereWithAggregatesInput[]
    NOT?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Blog"> | string
    userId?: StringWithAggregatesFilter<"Blog"> | string
    title?: StringWithAggregatesFilter<"Blog"> | string
    slug?: StringWithAggregatesFilter<"Blog"> | string
    description?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    keywords?: JsonNullableWithAggregatesFilter<"Blog">
    createdAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
  }

  export type BlogContentBlockWhereInput = {
    AND?: BlogContentBlockWhereInput | BlogContentBlockWhereInput[]
    OR?: BlogContentBlockWhereInput[]
    NOT?: BlogContentBlockWhereInput | BlogContentBlockWhereInput[]
    id?: StringFilter<"BlogContentBlock"> | string
    type?: StringFilter<"BlogContentBlock"> | string
    content?: StringFilter<"BlogContentBlock"> | string
    order?: IntFilter<"BlogContentBlock"> | number
    createdAt?: DateTimeFilter<"BlogContentBlock"> | Date | string
    blogId?: StringFilter<"BlogContentBlock"> | string
    blog?: XOR<BlogScalarRelationFilter, BlogWhereInput>
  }

  export type BlogContentBlockOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    blogId?: SortOrder
    blog?: BlogOrderByWithRelationInput
  }

  export type BlogContentBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlogContentBlockWhereInput | BlogContentBlockWhereInput[]
    OR?: BlogContentBlockWhereInput[]
    NOT?: BlogContentBlockWhereInput | BlogContentBlockWhereInput[]
    type?: StringFilter<"BlogContentBlock"> | string
    content?: StringFilter<"BlogContentBlock"> | string
    order?: IntFilter<"BlogContentBlock"> | number
    createdAt?: DateTimeFilter<"BlogContentBlock"> | Date | string
    blogId?: StringFilter<"BlogContentBlock"> | string
    blog?: XOR<BlogScalarRelationFilter, BlogWhereInput>
  }, "id">

  export type BlogContentBlockOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    blogId?: SortOrder
    _count?: BlogContentBlockCountOrderByAggregateInput
    _avg?: BlogContentBlockAvgOrderByAggregateInput
    _max?: BlogContentBlockMaxOrderByAggregateInput
    _min?: BlogContentBlockMinOrderByAggregateInput
    _sum?: BlogContentBlockSumOrderByAggregateInput
  }

  export type BlogContentBlockScalarWhereWithAggregatesInput = {
    AND?: BlogContentBlockScalarWhereWithAggregatesInput | BlogContentBlockScalarWhereWithAggregatesInput[]
    OR?: BlogContentBlockScalarWhereWithAggregatesInput[]
    NOT?: BlogContentBlockScalarWhereWithAggregatesInput | BlogContentBlockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogContentBlock"> | string
    type?: StringWithAggregatesFilter<"BlogContentBlock"> | string
    content?: StringWithAggregatesFilter<"BlogContentBlock"> | string
    order?: IntWithAggregatesFilter<"BlogContentBlock"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BlogContentBlock"> | Date | string
    blogId?: StringWithAggregatesFilter<"BlogContentBlock"> | string
  }

  export type NewsWhereInput = {
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    id?: StringFilter<"News"> | string
    userId?: StringFilter<"News"> | string
    title?: StringFilter<"News"> | string
    slug?: StringFilter<"News"> | string
    description?: StringNullableFilter<"News"> | string | null
    keywords?: JsonNullableFilter<"News">
    createdAt?: DateTimeFilter<"News"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    contents?: NewsContentBlockListRelationFilter
  }

  export type NewsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    contents?: NewsContentBlockOrderByRelationAggregateInput
  }

  export type NewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    userId?: StringFilter<"News"> | string
    title?: StringFilter<"News"> | string
    description?: StringNullableFilter<"News"> | string | null
    keywords?: JsonNullableFilter<"News">
    createdAt?: DateTimeFilter<"News"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    contents?: NewsContentBlockListRelationFilter
  }, "id" | "slug">

  export type NewsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: NewsCountOrderByAggregateInput
    _max?: NewsMaxOrderByAggregateInput
    _min?: NewsMinOrderByAggregateInput
  }

  export type NewsScalarWhereWithAggregatesInput = {
    AND?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    OR?: NewsScalarWhereWithAggregatesInput[]
    NOT?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"News"> | string
    userId?: StringWithAggregatesFilter<"News"> | string
    title?: StringWithAggregatesFilter<"News"> | string
    slug?: StringWithAggregatesFilter<"News"> | string
    description?: StringNullableWithAggregatesFilter<"News"> | string | null
    keywords?: JsonNullableWithAggregatesFilter<"News">
    createdAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
  }

  export type VideoFolderWhereInput = {
    AND?: VideoFolderWhereInput | VideoFolderWhereInput[]
    OR?: VideoFolderWhereInput[]
    NOT?: VideoFolderWhereInput | VideoFolderWhereInput[]
    id?: StringFilter<"VideoFolder"> | string
    title?: StringFilter<"VideoFolder"> | string
    createdAt?: DateTimeFilter<"VideoFolder"> | Date | string
    userId?: StringFilter<"VideoFolder"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    videos?: VideoListRelationFilter
  }

  export type VideoFolderOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    videos?: VideoOrderByRelationAggregateInput
  }

  export type VideoFolderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VideoFolderWhereInput | VideoFolderWhereInput[]
    OR?: VideoFolderWhereInput[]
    NOT?: VideoFolderWhereInput | VideoFolderWhereInput[]
    title?: StringFilter<"VideoFolder"> | string
    createdAt?: DateTimeFilter<"VideoFolder"> | Date | string
    userId?: StringFilter<"VideoFolder"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    videos?: VideoListRelationFilter
  }, "id">

  export type VideoFolderOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: VideoFolderCountOrderByAggregateInput
    _max?: VideoFolderMaxOrderByAggregateInput
    _min?: VideoFolderMinOrderByAggregateInput
  }

  export type VideoFolderScalarWhereWithAggregatesInput = {
    AND?: VideoFolderScalarWhereWithAggregatesInput | VideoFolderScalarWhereWithAggregatesInput[]
    OR?: VideoFolderScalarWhereWithAggregatesInput[]
    NOT?: VideoFolderScalarWhereWithAggregatesInput | VideoFolderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VideoFolder"> | string
    title?: StringWithAggregatesFilter<"VideoFolder"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VideoFolder"> | Date | string
    userId?: StringWithAggregatesFilter<"VideoFolder"> | string
  }

  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: StringFilter<"Video"> | string
    title?: StringFilter<"Video"> | string
    language?: StringNullableFilter<"Video"> | string | null
    location?: StringNullableFilter<"Video"> | string | null
    url?: StringFilter<"Video"> | string
    createdAt?: DateTimeFilter<"Video"> | Date | string
    folderId?: StringFilter<"Video"> | string
    folder?: XOR<VideoFolderScalarRelationFilter, VideoFolderWhereInput>
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    language?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    folderId?: SortOrder
    folder?: VideoFolderOrderByWithRelationInput
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    title?: StringFilter<"Video"> | string
    language?: StringNullableFilter<"Video"> | string | null
    location?: StringNullableFilter<"Video"> | string | null
    url?: StringFilter<"Video"> | string
    createdAt?: DateTimeFilter<"Video"> | Date | string
    folderId?: StringFilter<"Video"> | string
    folder?: XOR<VideoFolderScalarRelationFilter, VideoFolderWhereInput>
  }, "id">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    language?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    folderId?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Video"> | string
    title?: StringWithAggregatesFilter<"Video"> | string
    language?: StringNullableWithAggregatesFilter<"Video"> | string | null
    location?: StringNullableWithAggregatesFilter<"Video"> | string | null
    url?: StringWithAggregatesFilter<"Video"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
    folderId?: StringWithAggregatesFilter<"Video"> | string
  }

  export type NewsContentBlockWhereInput = {
    AND?: NewsContentBlockWhereInput | NewsContentBlockWhereInput[]
    OR?: NewsContentBlockWhereInput[]
    NOT?: NewsContentBlockWhereInput | NewsContentBlockWhereInput[]
    id?: StringFilter<"NewsContentBlock"> | string
    type?: StringFilter<"NewsContentBlock"> | string
    content?: StringFilter<"NewsContentBlock"> | string
    order?: IntFilter<"NewsContentBlock"> | number
    createdAt?: DateTimeFilter<"NewsContentBlock"> | Date | string
    newsId?: StringFilter<"NewsContentBlock"> | string
    news?: XOR<NewsScalarRelationFilter, NewsWhereInput>
  }

  export type NewsContentBlockOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    newsId?: SortOrder
    news?: NewsOrderByWithRelationInput
  }

  export type NewsContentBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NewsContentBlockWhereInput | NewsContentBlockWhereInput[]
    OR?: NewsContentBlockWhereInput[]
    NOT?: NewsContentBlockWhereInput | NewsContentBlockWhereInput[]
    type?: StringFilter<"NewsContentBlock"> | string
    content?: StringFilter<"NewsContentBlock"> | string
    order?: IntFilter<"NewsContentBlock"> | number
    createdAt?: DateTimeFilter<"NewsContentBlock"> | Date | string
    newsId?: StringFilter<"NewsContentBlock"> | string
    news?: XOR<NewsScalarRelationFilter, NewsWhereInput>
  }, "id">

  export type NewsContentBlockOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    newsId?: SortOrder
    _count?: NewsContentBlockCountOrderByAggregateInput
    _avg?: NewsContentBlockAvgOrderByAggregateInput
    _max?: NewsContentBlockMaxOrderByAggregateInput
    _min?: NewsContentBlockMinOrderByAggregateInput
    _sum?: NewsContentBlockSumOrderByAggregateInput
  }

  export type NewsContentBlockScalarWhereWithAggregatesInput = {
    AND?: NewsContentBlockScalarWhereWithAggregatesInput | NewsContentBlockScalarWhereWithAggregatesInput[]
    OR?: NewsContentBlockScalarWhereWithAggregatesInput[]
    NOT?: NewsContentBlockScalarWhereWithAggregatesInput | NewsContentBlockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsContentBlock"> | string
    type?: StringWithAggregatesFilter<"NewsContentBlock"> | string
    content?: StringWithAggregatesFilter<"NewsContentBlock"> | string
    order?: IntWithAggregatesFilter<"NewsContentBlock"> | number
    createdAt?: DateTimeWithAggregatesFilter<"NewsContentBlock"> | Date | string
    newsId?: StringWithAggregatesFilter<"NewsContentBlock"> | string
  }

  export type ImageFolderWhereInput = {
    AND?: ImageFolderWhereInput | ImageFolderWhereInput[]
    OR?: ImageFolderWhereInput[]
    NOT?: ImageFolderWhereInput | ImageFolderWhereInput[]
    id?: StringFilter<"ImageFolder"> | string
    userId?: StringFilter<"ImageFolder"> | string
    title?: StringFilter<"ImageFolder"> | string
    createdAt?: DateTimeFilter<"ImageFolder"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    images?: ImageListRelationFilter
  }

  export type ImageFolderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    images?: ImageOrderByRelationAggregateInput
  }

  export type ImageFolderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImageFolderWhereInput | ImageFolderWhereInput[]
    OR?: ImageFolderWhereInput[]
    NOT?: ImageFolderWhereInput | ImageFolderWhereInput[]
    userId?: StringFilter<"ImageFolder"> | string
    title?: StringFilter<"ImageFolder"> | string
    createdAt?: DateTimeFilter<"ImageFolder"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    images?: ImageListRelationFilter
  }, "id">

  export type ImageFolderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    _count?: ImageFolderCountOrderByAggregateInput
    _max?: ImageFolderMaxOrderByAggregateInput
    _min?: ImageFolderMinOrderByAggregateInput
  }

  export type ImageFolderScalarWhereWithAggregatesInput = {
    AND?: ImageFolderScalarWhereWithAggregatesInput | ImageFolderScalarWhereWithAggregatesInput[]
    OR?: ImageFolderScalarWhereWithAggregatesInput[]
    NOT?: ImageFolderScalarWhereWithAggregatesInput | ImageFolderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ImageFolder"> | string
    userId?: StringWithAggregatesFilter<"ImageFolder"> | string
    title?: StringWithAggregatesFilter<"ImageFolder"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ImageFolder"> | Date | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: StringFilter<"Image"> | string
    folderId?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    size?: IntFilter<"Image"> | number
    createdAt?: DateTimeFilter<"Image"> | Date | string
    folder?: XOR<ImageFolderScalarRelationFilter, ImageFolderWhereInput>
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    folderId?: SortOrder
    url?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    folder?: ImageFolderOrderByWithRelationInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    folderId?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    size?: IntFilter<"Image"> | number
    createdAt?: DateTimeFilter<"Image"> | Date | string
    folder?: XOR<ImageFolderScalarRelationFilter, ImageFolderWhereInput>
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    folderId?: SortOrder
    url?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Image"> | string
    folderId?: StringWithAggregatesFilter<"Image"> | string
    url?: StringWithAggregatesFilter<"Image"> | string
    size?: IntWithAggregatesFilter<"Image"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    company_name: string
    website: string
    email: string
    logo: string
    primary_color: string
    secondary_color: string
    name: string
    contact_number: string
    address: string
    password: string
    role?: $Enums.Role
    allowBlogs?: boolean
    allowNews?: boolean
    allowImages?: boolean
    allowVideos?: boolean
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogs?: BlogCreateNestedManyWithoutUserInput
    news?: NewsCreateNestedManyWithoutUserInput
    imageFolders?: ImageFolderCreateNestedManyWithoutUserInput
    VideoFolders?: VideoFolderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    company_name: string
    website: string
    email: string
    logo: string
    primary_color: string
    secondary_color: string
    name: string
    contact_number: string
    address: string
    password: string
    role?: $Enums.Role
    allowBlogs?: boolean
    allowNews?: boolean
    allowImages?: boolean
    allowVideos?: boolean
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogs?: BlogUncheckedCreateNestedManyWithoutUserInput
    news?: NewsUncheckedCreateNestedManyWithoutUserInput
    imageFolders?: ImageFolderUncheckedCreateNestedManyWithoutUserInput
    VideoFolders?: VideoFolderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    primary_color?: StringFieldUpdateOperationsInput | string
    secondary_color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    allowBlogs?: BoolFieldUpdateOperationsInput | boolean
    allowNews?: BoolFieldUpdateOperationsInput | boolean
    allowImages?: BoolFieldUpdateOperationsInput | boolean
    allowVideos?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: BlogUpdateManyWithoutUserNestedInput
    news?: NewsUpdateManyWithoutUserNestedInput
    imageFolders?: ImageFolderUpdateManyWithoutUserNestedInput
    VideoFolders?: VideoFolderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    primary_color?: StringFieldUpdateOperationsInput | string
    secondary_color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    allowBlogs?: BoolFieldUpdateOperationsInput | boolean
    allowNews?: BoolFieldUpdateOperationsInput | boolean
    allowImages?: BoolFieldUpdateOperationsInput | boolean
    allowVideos?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput
    news?: NewsUncheckedUpdateManyWithoutUserNestedInput
    imageFolders?: ImageFolderUncheckedUpdateManyWithoutUserNestedInput
    VideoFolders?: VideoFolderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    company_name: string
    website: string
    email: string
    logo: string
    primary_color: string
    secondary_color: string
    name: string
    contact_number: string
    address: string
    password: string
    role?: $Enums.Role
    allowBlogs?: boolean
    allowNews?: boolean
    allowImages?: boolean
    allowVideos?: boolean
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    primary_color?: StringFieldUpdateOperationsInput | string
    secondary_color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    allowBlogs?: BoolFieldUpdateOperationsInput | boolean
    allowNews?: BoolFieldUpdateOperationsInput | boolean
    allowImages?: BoolFieldUpdateOperationsInput | boolean
    allowVideos?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    primary_color?: StringFieldUpdateOperationsInput | string
    secondary_color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    allowBlogs?: BoolFieldUpdateOperationsInput | boolean
    allowNews?: BoolFieldUpdateOperationsInput | boolean
    allowImages?: BoolFieldUpdateOperationsInput | boolean
    allowVideos?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBlogsInput
    contents?: BlogContentBlockCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    slug: string
    description?: string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    contents?: BlogContentBlockUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBlogsNestedInput
    contents?: BlogContentBlockUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: BlogContentBlockUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type BlogCreateManyInput = {
    id?: string
    userId: string
    title: string
    slug: string
    description?: string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type BlogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogContentBlockCreateInput = {
    id?: string
    type: string
    content: string
    order: number
    createdAt?: Date | string
    blog: BlogCreateNestedOneWithoutContentsInput
  }

  export type BlogContentBlockUncheckedCreateInput = {
    id?: string
    type: string
    content: string
    order: number
    createdAt?: Date | string
    blogId: string
  }

  export type BlogContentBlockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blog?: BlogUpdateOneRequiredWithoutContentsNestedInput
  }

  export type BlogContentBlockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogContentBlockCreateManyInput = {
    id?: string
    type: string
    content: string
    order: number
    createdAt?: Date | string
    blogId: string
  }

  export type BlogContentBlockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogContentBlockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogId?: StringFieldUpdateOperationsInput | string
  }

  export type NewsCreateInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNewsInput
    contents?: NewsContentBlockCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    slug: string
    description?: string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    contents?: NewsContentBlockUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNewsNestedInput
    contents?: NewsContentBlockUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: NewsContentBlockUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type NewsCreateManyInput = {
    id?: string
    userId: string
    title: string
    slug: string
    description?: string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type NewsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoFolderCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutVideoFoldersInput
    videos?: VideoCreateNestedManyWithoutFolderInput
  }

  export type VideoFolderUncheckedCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    userId: string
    videos?: VideoUncheckedCreateNestedManyWithoutFolderInput
  }

  export type VideoFolderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVideoFoldersNestedInput
    videos?: VideoUpdateManyWithoutFolderNestedInput
  }

  export type VideoFolderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    videos?: VideoUncheckedUpdateManyWithoutFolderNestedInput
  }

  export type VideoFolderCreateManyInput = {
    id?: string
    title: string
    createdAt?: Date | string
    userId: string
  }

  export type VideoFolderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoFolderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type VideoCreateInput = {
    id?: string
    title: string
    language?: string | null
    location?: string | null
    url: string
    createdAt?: Date | string
    folder: VideoFolderCreateNestedOneWithoutVideosInput
  }

  export type VideoUncheckedCreateInput = {
    id?: string
    title: string
    language?: string | null
    location?: string | null
    url: string
    createdAt?: Date | string
    folderId: string
  }

  export type VideoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folder?: VideoFolderUpdateOneRequiredWithoutVideosNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folderId?: StringFieldUpdateOperationsInput | string
  }

  export type VideoCreateManyInput = {
    id?: string
    title: string
    language?: string | null
    location?: string | null
    url: string
    createdAt?: Date | string
    folderId: string
  }

  export type VideoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folderId?: StringFieldUpdateOperationsInput | string
  }

  export type NewsContentBlockCreateInput = {
    id?: string
    type: string
    content: string
    order: number
    createdAt?: Date | string
    news: NewsCreateNestedOneWithoutContentsInput
  }

  export type NewsContentBlockUncheckedCreateInput = {
    id?: string
    type: string
    content: string
    order: number
    createdAt?: Date | string
    newsId: string
  }

  export type NewsContentBlockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateOneRequiredWithoutContentsNestedInput
  }

  export type NewsContentBlockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsId?: StringFieldUpdateOperationsInput | string
  }

  export type NewsContentBlockCreateManyInput = {
    id?: string
    type: string
    content: string
    order: number
    createdAt?: Date | string
    newsId: string
  }

  export type NewsContentBlockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsContentBlockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsId?: StringFieldUpdateOperationsInput | string
  }

  export type ImageFolderCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutImageFoldersInput
    images?: ImageCreateNestedManyWithoutFolderInput
  }

  export type ImageFolderUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    createdAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutFolderInput
  }

  export type ImageFolderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutImageFoldersNestedInput
    images?: ImageUpdateManyWithoutFolderNestedInput
  }

  export type ImageFolderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutFolderNestedInput
  }

  export type ImageFolderCreateManyInput = {
    id?: string
    userId: string
    title: string
    createdAt?: Date | string
  }

  export type ImageFolderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageFolderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    id?: string
    url: string
    size: number
    createdAt?: Date | string
    folder: ImageFolderCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateInput = {
    id?: string
    folderId: string
    url: string
    size: number
    createdAt?: Date | string
  }

  export type ImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folder?: ImageFolderUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    folderId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyInput = {
    id?: string
    folderId: string
    url: string
    size: number
    createdAt?: Date | string
  }

  export type ImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    folderId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BlogListRelationFilter = {
    every?: BlogWhereInput
    some?: BlogWhereInput
    none?: BlogWhereInput
  }

  export type NewsListRelationFilter = {
    every?: NewsWhereInput
    some?: NewsWhereInput
    none?: NewsWhereInput
  }

  export type ImageFolderListRelationFilter = {
    every?: ImageFolderWhereInput
    some?: ImageFolderWhereInput
    none?: ImageFolderWhereInput
  }

  export type VideoFolderListRelationFilter = {
    every?: VideoFolderWhereInput
    some?: VideoFolderWhereInput
    none?: VideoFolderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BlogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageFolderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoFolderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    website?: SortOrder
    email?: SortOrder
    logo?: SortOrder
    primary_color?: SortOrder
    secondary_color?: SortOrder
    name?: SortOrder
    contact_number?: SortOrder
    address?: SortOrder
    password?: SortOrder
    role?: SortOrder
    allowBlogs?: SortOrder
    allowNews?: SortOrder
    allowImages?: SortOrder
    allowVideos?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    website?: SortOrder
    email?: SortOrder
    logo?: SortOrder
    primary_color?: SortOrder
    secondary_color?: SortOrder
    name?: SortOrder
    contact_number?: SortOrder
    address?: SortOrder
    password?: SortOrder
    role?: SortOrder
    allowBlogs?: SortOrder
    allowNews?: SortOrder
    allowImages?: SortOrder
    allowVideos?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    website?: SortOrder
    email?: SortOrder
    logo?: SortOrder
    primary_color?: SortOrder
    secondary_color?: SortOrder
    name?: SortOrder
    contact_number?: SortOrder
    address?: SortOrder
    password?: SortOrder
    role?: SortOrder
    allowBlogs?: SortOrder
    allowNews?: SortOrder
    allowImages?: SortOrder
    allowVideos?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BlogContentBlockListRelationFilter = {
    every?: BlogContentBlockWhereInput
    some?: BlogContentBlockWhereInput
    none?: BlogContentBlockWhereInput
  }

  export type BlogContentBlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    keywords?: SortOrder
    createdAt?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
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

  export type BlogScalarRelationFilter = {
    is?: BlogWhereInput
    isNot?: BlogWhereInput
  }

  export type BlogContentBlockCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    blogId?: SortOrder
  }

  export type BlogContentBlockAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type BlogContentBlockMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    blogId?: SortOrder
  }

  export type BlogContentBlockMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    blogId?: SortOrder
  }

  export type BlogContentBlockSumOrderByAggregateInput = {
    order?: SortOrder
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

  export type NewsContentBlockListRelationFilter = {
    every?: NewsContentBlockWhereInput
    some?: NewsContentBlockWhereInput
    none?: NewsContentBlockWhereInput
  }

  export type NewsContentBlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    keywords?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type VideoListRelationFilter = {
    every?: VideoWhereInput
    some?: VideoWhereInput
    none?: VideoWhereInput
  }

  export type VideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoFolderCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type VideoFolderMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type VideoFolderMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type VideoFolderScalarRelationFilter = {
    is?: VideoFolderWhereInput
    isNot?: VideoFolderWhereInput
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    language?: SortOrder
    location?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    folderId?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    language?: SortOrder
    location?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    folderId?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    language?: SortOrder
    location?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    folderId?: SortOrder
  }

  export type NewsScalarRelationFilter = {
    is?: NewsWhereInput
    isNot?: NewsWhereInput
  }

  export type NewsContentBlockCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    newsId?: SortOrder
  }

  export type NewsContentBlockAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type NewsContentBlockMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    newsId?: SortOrder
  }

  export type NewsContentBlockMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    newsId?: SortOrder
  }

  export type NewsContentBlockSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageFolderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageFolderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageFolderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageFolderScalarRelationFilter = {
    is?: ImageFolderWhereInput
    isNot?: ImageFolderWhereInput
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    folderId?: SortOrder
    url?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    folderId?: SortOrder
    url?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    folderId?: SortOrder
    url?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type BlogCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput> | BlogCreateWithoutUserInput[] | BlogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutUserInput | BlogCreateOrConnectWithoutUserInput[]
    createMany?: BlogCreateManyUserInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type NewsCreateNestedManyWithoutUserInput = {
    create?: XOR<NewsCreateWithoutUserInput, NewsUncheckedCreateWithoutUserInput> | NewsCreateWithoutUserInput[] | NewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutUserInput | NewsCreateOrConnectWithoutUserInput[]
    createMany?: NewsCreateManyUserInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type ImageFolderCreateNestedManyWithoutUserInput = {
    create?: XOR<ImageFolderCreateWithoutUserInput, ImageFolderUncheckedCreateWithoutUserInput> | ImageFolderCreateWithoutUserInput[] | ImageFolderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImageFolderCreateOrConnectWithoutUserInput | ImageFolderCreateOrConnectWithoutUserInput[]
    createMany?: ImageFolderCreateManyUserInputEnvelope
    connect?: ImageFolderWhereUniqueInput | ImageFolderWhereUniqueInput[]
  }

  export type VideoFolderCreateNestedManyWithoutUserInput = {
    create?: XOR<VideoFolderCreateWithoutUserInput, VideoFolderUncheckedCreateWithoutUserInput> | VideoFolderCreateWithoutUserInput[] | VideoFolderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoFolderCreateOrConnectWithoutUserInput | VideoFolderCreateOrConnectWithoutUserInput[]
    createMany?: VideoFolderCreateManyUserInputEnvelope
    connect?: VideoFolderWhereUniqueInput | VideoFolderWhereUniqueInput[]
  }

  export type BlogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput> | BlogCreateWithoutUserInput[] | BlogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutUserInput | BlogCreateOrConnectWithoutUserInput[]
    createMany?: BlogCreateManyUserInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type NewsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NewsCreateWithoutUserInput, NewsUncheckedCreateWithoutUserInput> | NewsCreateWithoutUserInput[] | NewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutUserInput | NewsCreateOrConnectWithoutUserInput[]
    createMany?: NewsCreateManyUserInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type ImageFolderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ImageFolderCreateWithoutUserInput, ImageFolderUncheckedCreateWithoutUserInput> | ImageFolderCreateWithoutUserInput[] | ImageFolderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImageFolderCreateOrConnectWithoutUserInput | ImageFolderCreateOrConnectWithoutUserInput[]
    createMany?: ImageFolderCreateManyUserInputEnvelope
    connect?: ImageFolderWhereUniqueInput | ImageFolderWhereUniqueInput[]
  }

  export type VideoFolderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VideoFolderCreateWithoutUserInput, VideoFolderUncheckedCreateWithoutUserInput> | VideoFolderCreateWithoutUserInput[] | VideoFolderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoFolderCreateOrConnectWithoutUserInput | VideoFolderCreateOrConnectWithoutUserInput[]
    createMany?: VideoFolderCreateManyUserInputEnvelope
    connect?: VideoFolderWhereUniqueInput | VideoFolderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BlogUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput> | BlogCreateWithoutUserInput[] | BlogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutUserInput | BlogCreateOrConnectWithoutUserInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutUserInput | BlogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogCreateManyUserInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutUserInput | BlogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutUserInput | BlogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type NewsUpdateManyWithoutUserNestedInput = {
    create?: XOR<NewsCreateWithoutUserInput, NewsUncheckedCreateWithoutUserInput> | NewsCreateWithoutUserInput[] | NewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutUserInput | NewsCreateOrConnectWithoutUserInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutUserInput | NewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NewsCreateManyUserInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutUserInput | NewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutUserInput | NewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type ImageFolderUpdateManyWithoutUserNestedInput = {
    create?: XOR<ImageFolderCreateWithoutUserInput, ImageFolderUncheckedCreateWithoutUserInput> | ImageFolderCreateWithoutUserInput[] | ImageFolderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImageFolderCreateOrConnectWithoutUserInput | ImageFolderCreateOrConnectWithoutUserInput[]
    upsert?: ImageFolderUpsertWithWhereUniqueWithoutUserInput | ImageFolderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ImageFolderCreateManyUserInputEnvelope
    set?: ImageFolderWhereUniqueInput | ImageFolderWhereUniqueInput[]
    disconnect?: ImageFolderWhereUniqueInput | ImageFolderWhereUniqueInput[]
    delete?: ImageFolderWhereUniqueInput | ImageFolderWhereUniqueInput[]
    connect?: ImageFolderWhereUniqueInput | ImageFolderWhereUniqueInput[]
    update?: ImageFolderUpdateWithWhereUniqueWithoutUserInput | ImageFolderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ImageFolderUpdateManyWithWhereWithoutUserInput | ImageFolderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ImageFolderScalarWhereInput | ImageFolderScalarWhereInput[]
  }

  export type VideoFolderUpdateManyWithoutUserNestedInput = {
    create?: XOR<VideoFolderCreateWithoutUserInput, VideoFolderUncheckedCreateWithoutUserInput> | VideoFolderCreateWithoutUserInput[] | VideoFolderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoFolderCreateOrConnectWithoutUserInput | VideoFolderCreateOrConnectWithoutUserInput[]
    upsert?: VideoFolderUpsertWithWhereUniqueWithoutUserInput | VideoFolderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VideoFolderCreateManyUserInputEnvelope
    set?: VideoFolderWhereUniqueInput | VideoFolderWhereUniqueInput[]
    disconnect?: VideoFolderWhereUniqueInput | VideoFolderWhereUniqueInput[]
    delete?: VideoFolderWhereUniqueInput | VideoFolderWhereUniqueInput[]
    connect?: VideoFolderWhereUniqueInput | VideoFolderWhereUniqueInput[]
    update?: VideoFolderUpdateWithWhereUniqueWithoutUserInput | VideoFolderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VideoFolderUpdateManyWithWhereWithoutUserInput | VideoFolderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VideoFolderScalarWhereInput | VideoFolderScalarWhereInput[]
  }

  export type BlogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput> | BlogCreateWithoutUserInput[] | BlogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutUserInput | BlogCreateOrConnectWithoutUserInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutUserInput | BlogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogCreateManyUserInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutUserInput | BlogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutUserInput | BlogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type NewsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NewsCreateWithoutUserInput, NewsUncheckedCreateWithoutUserInput> | NewsCreateWithoutUserInput[] | NewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutUserInput | NewsCreateOrConnectWithoutUserInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutUserInput | NewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NewsCreateManyUserInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutUserInput | NewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutUserInput | NewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type ImageFolderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ImageFolderCreateWithoutUserInput, ImageFolderUncheckedCreateWithoutUserInput> | ImageFolderCreateWithoutUserInput[] | ImageFolderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImageFolderCreateOrConnectWithoutUserInput | ImageFolderCreateOrConnectWithoutUserInput[]
    upsert?: ImageFolderUpsertWithWhereUniqueWithoutUserInput | ImageFolderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ImageFolderCreateManyUserInputEnvelope
    set?: ImageFolderWhereUniqueInput | ImageFolderWhereUniqueInput[]
    disconnect?: ImageFolderWhereUniqueInput | ImageFolderWhereUniqueInput[]
    delete?: ImageFolderWhereUniqueInput | ImageFolderWhereUniqueInput[]
    connect?: ImageFolderWhereUniqueInput | ImageFolderWhereUniqueInput[]
    update?: ImageFolderUpdateWithWhereUniqueWithoutUserInput | ImageFolderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ImageFolderUpdateManyWithWhereWithoutUserInput | ImageFolderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ImageFolderScalarWhereInput | ImageFolderScalarWhereInput[]
  }

  export type VideoFolderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VideoFolderCreateWithoutUserInput, VideoFolderUncheckedCreateWithoutUserInput> | VideoFolderCreateWithoutUserInput[] | VideoFolderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoFolderCreateOrConnectWithoutUserInput | VideoFolderCreateOrConnectWithoutUserInput[]
    upsert?: VideoFolderUpsertWithWhereUniqueWithoutUserInput | VideoFolderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VideoFolderCreateManyUserInputEnvelope
    set?: VideoFolderWhereUniqueInput | VideoFolderWhereUniqueInput[]
    disconnect?: VideoFolderWhereUniqueInput | VideoFolderWhereUniqueInput[]
    delete?: VideoFolderWhereUniqueInput | VideoFolderWhereUniqueInput[]
    connect?: VideoFolderWhereUniqueInput | VideoFolderWhereUniqueInput[]
    update?: VideoFolderUpdateWithWhereUniqueWithoutUserInput | VideoFolderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VideoFolderUpdateManyWithWhereWithoutUserInput | VideoFolderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VideoFolderScalarWhereInput | VideoFolderScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBlogsInput = {
    create?: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogsInput
    connect?: UserWhereUniqueInput
  }

  export type BlogContentBlockCreateNestedManyWithoutBlogInput = {
    create?: XOR<BlogContentBlockCreateWithoutBlogInput, BlogContentBlockUncheckedCreateWithoutBlogInput> | BlogContentBlockCreateWithoutBlogInput[] | BlogContentBlockUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: BlogContentBlockCreateOrConnectWithoutBlogInput | BlogContentBlockCreateOrConnectWithoutBlogInput[]
    createMany?: BlogContentBlockCreateManyBlogInputEnvelope
    connect?: BlogContentBlockWhereUniqueInput | BlogContentBlockWhereUniqueInput[]
  }

  export type BlogContentBlockUncheckedCreateNestedManyWithoutBlogInput = {
    create?: XOR<BlogContentBlockCreateWithoutBlogInput, BlogContentBlockUncheckedCreateWithoutBlogInput> | BlogContentBlockCreateWithoutBlogInput[] | BlogContentBlockUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: BlogContentBlockCreateOrConnectWithoutBlogInput | BlogContentBlockCreateOrConnectWithoutBlogInput[]
    createMany?: BlogContentBlockCreateManyBlogInputEnvelope
    connect?: BlogContentBlockWhereUniqueInput | BlogContentBlockWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutBlogsNestedInput = {
    create?: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogsInput
    upsert?: UserUpsertWithoutBlogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlogsInput, UserUpdateWithoutBlogsInput>, UserUncheckedUpdateWithoutBlogsInput>
  }

  export type BlogContentBlockUpdateManyWithoutBlogNestedInput = {
    create?: XOR<BlogContentBlockCreateWithoutBlogInput, BlogContentBlockUncheckedCreateWithoutBlogInput> | BlogContentBlockCreateWithoutBlogInput[] | BlogContentBlockUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: BlogContentBlockCreateOrConnectWithoutBlogInput | BlogContentBlockCreateOrConnectWithoutBlogInput[]
    upsert?: BlogContentBlockUpsertWithWhereUniqueWithoutBlogInput | BlogContentBlockUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: BlogContentBlockCreateManyBlogInputEnvelope
    set?: BlogContentBlockWhereUniqueInput | BlogContentBlockWhereUniqueInput[]
    disconnect?: BlogContentBlockWhereUniqueInput | BlogContentBlockWhereUniqueInput[]
    delete?: BlogContentBlockWhereUniqueInput | BlogContentBlockWhereUniqueInput[]
    connect?: BlogContentBlockWhereUniqueInput | BlogContentBlockWhereUniqueInput[]
    update?: BlogContentBlockUpdateWithWhereUniqueWithoutBlogInput | BlogContentBlockUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: BlogContentBlockUpdateManyWithWhereWithoutBlogInput | BlogContentBlockUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: BlogContentBlockScalarWhereInput | BlogContentBlockScalarWhereInput[]
  }

  export type BlogContentBlockUncheckedUpdateManyWithoutBlogNestedInput = {
    create?: XOR<BlogContentBlockCreateWithoutBlogInput, BlogContentBlockUncheckedCreateWithoutBlogInput> | BlogContentBlockCreateWithoutBlogInput[] | BlogContentBlockUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: BlogContentBlockCreateOrConnectWithoutBlogInput | BlogContentBlockCreateOrConnectWithoutBlogInput[]
    upsert?: BlogContentBlockUpsertWithWhereUniqueWithoutBlogInput | BlogContentBlockUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: BlogContentBlockCreateManyBlogInputEnvelope
    set?: BlogContentBlockWhereUniqueInput | BlogContentBlockWhereUniqueInput[]
    disconnect?: BlogContentBlockWhereUniqueInput | BlogContentBlockWhereUniqueInput[]
    delete?: BlogContentBlockWhereUniqueInput | BlogContentBlockWhereUniqueInput[]
    connect?: BlogContentBlockWhereUniqueInput | BlogContentBlockWhereUniqueInput[]
    update?: BlogContentBlockUpdateWithWhereUniqueWithoutBlogInput | BlogContentBlockUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: BlogContentBlockUpdateManyWithWhereWithoutBlogInput | BlogContentBlockUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: BlogContentBlockScalarWhereInput | BlogContentBlockScalarWhereInput[]
  }

  export type BlogCreateNestedOneWithoutContentsInput = {
    create?: XOR<BlogCreateWithoutContentsInput, BlogUncheckedCreateWithoutContentsInput>
    connectOrCreate?: BlogCreateOrConnectWithoutContentsInput
    connect?: BlogWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BlogUpdateOneRequiredWithoutContentsNestedInput = {
    create?: XOR<BlogCreateWithoutContentsInput, BlogUncheckedCreateWithoutContentsInput>
    connectOrCreate?: BlogCreateOrConnectWithoutContentsInput
    upsert?: BlogUpsertWithoutContentsInput
    connect?: BlogWhereUniqueInput
    update?: XOR<XOR<BlogUpdateToOneWithWhereWithoutContentsInput, BlogUpdateWithoutContentsInput>, BlogUncheckedUpdateWithoutContentsInput>
  }

  export type UserCreateNestedOneWithoutNewsInput = {
    create?: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsInput
    connect?: UserWhereUniqueInput
  }

  export type NewsContentBlockCreateNestedManyWithoutNewsInput = {
    create?: XOR<NewsContentBlockCreateWithoutNewsInput, NewsContentBlockUncheckedCreateWithoutNewsInput> | NewsContentBlockCreateWithoutNewsInput[] | NewsContentBlockUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsContentBlockCreateOrConnectWithoutNewsInput | NewsContentBlockCreateOrConnectWithoutNewsInput[]
    createMany?: NewsContentBlockCreateManyNewsInputEnvelope
    connect?: NewsContentBlockWhereUniqueInput | NewsContentBlockWhereUniqueInput[]
  }

  export type NewsContentBlockUncheckedCreateNestedManyWithoutNewsInput = {
    create?: XOR<NewsContentBlockCreateWithoutNewsInput, NewsContentBlockUncheckedCreateWithoutNewsInput> | NewsContentBlockCreateWithoutNewsInput[] | NewsContentBlockUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsContentBlockCreateOrConnectWithoutNewsInput | NewsContentBlockCreateOrConnectWithoutNewsInput[]
    createMany?: NewsContentBlockCreateManyNewsInputEnvelope
    connect?: NewsContentBlockWhereUniqueInput | NewsContentBlockWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutNewsNestedInput = {
    create?: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsInput
    upsert?: UserUpsertWithoutNewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNewsInput, UserUpdateWithoutNewsInput>, UserUncheckedUpdateWithoutNewsInput>
  }

  export type NewsContentBlockUpdateManyWithoutNewsNestedInput = {
    create?: XOR<NewsContentBlockCreateWithoutNewsInput, NewsContentBlockUncheckedCreateWithoutNewsInput> | NewsContentBlockCreateWithoutNewsInput[] | NewsContentBlockUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsContentBlockCreateOrConnectWithoutNewsInput | NewsContentBlockCreateOrConnectWithoutNewsInput[]
    upsert?: NewsContentBlockUpsertWithWhereUniqueWithoutNewsInput | NewsContentBlockUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: NewsContentBlockCreateManyNewsInputEnvelope
    set?: NewsContentBlockWhereUniqueInput | NewsContentBlockWhereUniqueInput[]
    disconnect?: NewsContentBlockWhereUniqueInput | NewsContentBlockWhereUniqueInput[]
    delete?: NewsContentBlockWhereUniqueInput | NewsContentBlockWhereUniqueInput[]
    connect?: NewsContentBlockWhereUniqueInput | NewsContentBlockWhereUniqueInput[]
    update?: NewsContentBlockUpdateWithWhereUniqueWithoutNewsInput | NewsContentBlockUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: NewsContentBlockUpdateManyWithWhereWithoutNewsInput | NewsContentBlockUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: NewsContentBlockScalarWhereInput | NewsContentBlockScalarWhereInput[]
  }

  export type NewsContentBlockUncheckedUpdateManyWithoutNewsNestedInput = {
    create?: XOR<NewsContentBlockCreateWithoutNewsInput, NewsContentBlockUncheckedCreateWithoutNewsInput> | NewsContentBlockCreateWithoutNewsInput[] | NewsContentBlockUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsContentBlockCreateOrConnectWithoutNewsInput | NewsContentBlockCreateOrConnectWithoutNewsInput[]
    upsert?: NewsContentBlockUpsertWithWhereUniqueWithoutNewsInput | NewsContentBlockUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: NewsContentBlockCreateManyNewsInputEnvelope
    set?: NewsContentBlockWhereUniqueInput | NewsContentBlockWhereUniqueInput[]
    disconnect?: NewsContentBlockWhereUniqueInput | NewsContentBlockWhereUniqueInput[]
    delete?: NewsContentBlockWhereUniqueInput | NewsContentBlockWhereUniqueInput[]
    connect?: NewsContentBlockWhereUniqueInput | NewsContentBlockWhereUniqueInput[]
    update?: NewsContentBlockUpdateWithWhereUniqueWithoutNewsInput | NewsContentBlockUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: NewsContentBlockUpdateManyWithWhereWithoutNewsInput | NewsContentBlockUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: NewsContentBlockScalarWhereInput | NewsContentBlockScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVideoFoldersInput = {
    create?: XOR<UserCreateWithoutVideoFoldersInput, UserUncheckedCreateWithoutVideoFoldersInput>
    connectOrCreate?: UserCreateOrConnectWithoutVideoFoldersInput
    connect?: UserWhereUniqueInput
  }

  export type VideoCreateNestedManyWithoutFolderInput = {
    create?: XOR<VideoCreateWithoutFolderInput, VideoUncheckedCreateWithoutFolderInput> | VideoCreateWithoutFolderInput[] | VideoUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutFolderInput | VideoCreateOrConnectWithoutFolderInput[]
    createMany?: VideoCreateManyFolderInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutFolderInput = {
    create?: XOR<VideoCreateWithoutFolderInput, VideoUncheckedCreateWithoutFolderInput> | VideoCreateWithoutFolderInput[] | VideoUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutFolderInput | VideoCreateOrConnectWithoutFolderInput[]
    createMany?: VideoCreateManyFolderInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutVideoFoldersNestedInput = {
    create?: XOR<UserCreateWithoutVideoFoldersInput, UserUncheckedCreateWithoutVideoFoldersInput>
    connectOrCreate?: UserCreateOrConnectWithoutVideoFoldersInput
    upsert?: UserUpsertWithoutVideoFoldersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVideoFoldersInput, UserUpdateWithoutVideoFoldersInput>, UserUncheckedUpdateWithoutVideoFoldersInput>
  }

  export type VideoUpdateManyWithoutFolderNestedInput = {
    create?: XOR<VideoCreateWithoutFolderInput, VideoUncheckedCreateWithoutFolderInput> | VideoCreateWithoutFolderInput[] | VideoUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutFolderInput | VideoCreateOrConnectWithoutFolderInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutFolderInput | VideoUpsertWithWhereUniqueWithoutFolderInput[]
    createMany?: VideoCreateManyFolderInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutFolderInput | VideoUpdateWithWhereUniqueWithoutFolderInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutFolderInput | VideoUpdateManyWithWhereWithoutFolderInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutFolderNestedInput = {
    create?: XOR<VideoCreateWithoutFolderInput, VideoUncheckedCreateWithoutFolderInput> | VideoCreateWithoutFolderInput[] | VideoUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutFolderInput | VideoCreateOrConnectWithoutFolderInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutFolderInput | VideoUpsertWithWhereUniqueWithoutFolderInput[]
    createMany?: VideoCreateManyFolderInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutFolderInput | VideoUpdateWithWhereUniqueWithoutFolderInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutFolderInput | VideoUpdateManyWithWhereWithoutFolderInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type VideoFolderCreateNestedOneWithoutVideosInput = {
    create?: XOR<VideoFolderCreateWithoutVideosInput, VideoFolderUncheckedCreateWithoutVideosInput>
    connectOrCreate?: VideoFolderCreateOrConnectWithoutVideosInput
    connect?: VideoFolderWhereUniqueInput
  }

  export type VideoFolderUpdateOneRequiredWithoutVideosNestedInput = {
    create?: XOR<VideoFolderCreateWithoutVideosInput, VideoFolderUncheckedCreateWithoutVideosInput>
    connectOrCreate?: VideoFolderCreateOrConnectWithoutVideosInput
    upsert?: VideoFolderUpsertWithoutVideosInput
    connect?: VideoFolderWhereUniqueInput
    update?: XOR<XOR<VideoFolderUpdateToOneWithWhereWithoutVideosInput, VideoFolderUpdateWithoutVideosInput>, VideoFolderUncheckedUpdateWithoutVideosInput>
  }

  export type NewsCreateNestedOneWithoutContentsInput = {
    create?: XOR<NewsCreateWithoutContentsInput, NewsUncheckedCreateWithoutContentsInput>
    connectOrCreate?: NewsCreateOrConnectWithoutContentsInput
    connect?: NewsWhereUniqueInput
  }

  export type NewsUpdateOneRequiredWithoutContentsNestedInput = {
    create?: XOR<NewsCreateWithoutContentsInput, NewsUncheckedCreateWithoutContentsInput>
    connectOrCreate?: NewsCreateOrConnectWithoutContentsInput
    upsert?: NewsUpsertWithoutContentsInput
    connect?: NewsWhereUniqueInput
    update?: XOR<XOR<NewsUpdateToOneWithWhereWithoutContentsInput, NewsUpdateWithoutContentsInput>, NewsUncheckedUpdateWithoutContentsInput>
  }

  export type UserCreateNestedOneWithoutImageFoldersInput = {
    create?: XOR<UserCreateWithoutImageFoldersInput, UserUncheckedCreateWithoutImageFoldersInput>
    connectOrCreate?: UserCreateOrConnectWithoutImageFoldersInput
    connect?: UserWhereUniqueInput
  }

  export type ImageCreateNestedManyWithoutFolderInput = {
    create?: XOR<ImageCreateWithoutFolderInput, ImageUncheckedCreateWithoutFolderInput> | ImageCreateWithoutFolderInput[] | ImageUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutFolderInput | ImageCreateOrConnectWithoutFolderInput[]
    createMany?: ImageCreateManyFolderInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutFolderInput = {
    create?: XOR<ImageCreateWithoutFolderInput, ImageUncheckedCreateWithoutFolderInput> | ImageCreateWithoutFolderInput[] | ImageUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutFolderInput | ImageCreateOrConnectWithoutFolderInput[]
    createMany?: ImageCreateManyFolderInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutImageFoldersNestedInput = {
    create?: XOR<UserCreateWithoutImageFoldersInput, UserUncheckedCreateWithoutImageFoldersInput>
    connectOrCreate?: UserCreateOrConnectWithoutImageFoldersInput
    upsert?: UserUpsertWithoutImageFoldersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutImageFoldersInput, UserUpdateWithoutImageFoldersInput>, UserUncheckedUpdateWithoutImageFoldersInput>
  }

  export type ImageUpdateManyWithoutFolderNestedInput = {
    create?: XOR<ImageCreateWithoutFolderInput, ImageUncheckedCreateWithoutFolderInput> | ImageCreateWithoutFolderInput[] | ImageUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutFolderInput | ImageCreateOrConnectWithoutFolderInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutFolderInput | ImageUpsertWithWhereUniqueWithoutFolderInput[]
    createMany?: ImageCreateManyFolderInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutFolderInput | ImageUpdateWithWhereUniqueWithoutFolderInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutFolderInput | ImageUpdateManyWithWhereWithoutFolderInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutFolderNestedInput = {
    create?: XOR<ImageCreateWithoutFolderInput, ImageUncheckedCreateWithoutFolderInput> | ImageCreateWithoutFolderInput[] | ImageUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutFolderInput | ImageCreateOrConnectWithoutFolderInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutFolderInput | ImageUpsertWithWhereUniqueWithoutFolderInput[]
    createMany?: ImageCreateManyFolderInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutFolderInput | ImageUpdateWithWhereUniqueWithoutFolderInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutFolderInput | ImageUpdateManyWithWhereWithoutFolderInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ImageFolderCreateNestedOneWithoutImagesInput = {
    create?: XOR<ImageFolderCreateWithoutImagesInput, ImageFolderUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ImageFolderCreateOrConnectWithoutImagesInput
    connect?: ImageFolderWhereUniqueInput
  }

  export type ImageFolderUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ImageFolderCreateWithoutImagesInput, ImageFolderUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ImageFolderCreateOrConnectWithoutImagesInput
    upsert?: ImageFolderUpsertWithoutImagesInput
    connect?: ImageFolderWhereUniqueInput
    update?: XOR<XOR<ImageFolderUpdateToOneWithWhereWithoutImagesInput, ImageFolderUpdateWithoutImagesInput>, ImageFolderUncheckedUpdateWithoutImagesInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type BlogCreateWithoutUserInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    contents?: BlogContentBlockCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    contents?: BlogContentBlockUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogCreateOrConnectWithoutUserInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput>
  }

  export type BlogCreateManyUserInputEnvelope = {
    data: BlogCreateManyUserInput | BlogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NewsCreateWithoutUserInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    contents?: NewsContentBlockCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    contents?: NewsContentBlockUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsCreateOrConnectWithoutUserInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutUserInput, NewsUncheckedCreateWithoutUserInput>
  }

  export type NewsCreateManyUserInputEnvelope = {
    data: NewsCreateManyUserInput | NewsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ImageFolderCreateWithoutUserInput = {
    id?: string
    title: string
    createdAt?: Date | string
    images?: ImageCreateNestedManyWithoutFolderInput
  }

  export type ImageFolderUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    createdAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutFolderInput
  }

  export type ImageFolderCreateOrConnectWithoutUserInput = {
    where: ImageFolderWhereUniqueInput
    create: XOR<ImageFolderCreateWithoutUserInput, ImageFolderUncheckedCreateWithoutUserInput>
  }

  export type ImageFolderCreateManyUserInputEnvelope = {
    data: ImageFolderCreateManyUserInput | ImageFolderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VideoFolderCreateWithoutUserInput = {
    id?: string
    title: string
    createdAt?: Date | string
    videos?: VideoCreateNestedManyWithoutFolderInput
  }

  export type VideoFolderUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    createdAt?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutFolderInput
  }

  export type VideoFolderCreateOrConnectWithoutUserInput = {
    where: VideoFolderWhereUniqueInput
    create: XOR<VideoFolderCreateWithoutUserInput, VideoFolderUncheckedCreateWithoutUserInput>
  }

  export type VideoFolderCreateManyUserInputEnvelope = {
    data: VideoFolderCreateManyUserInput | VideoFolderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BlogUpsertWithWhereUniqueWithoutUserInput = {
    where: BlogWhereUniqueInput
    update: XOR<BlogUpdateWithoutUserInput, BlogUncheckedUpdateWithoutUserInput>
    create: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput>
  }

  export type BlogUpdateWithWhereUniqueWithoutUserInput = {
    where: BlogWhereUniqueInput
    data: XOR<BlogUpdateWithoutUserInput, BlogUncheckedUpdateWithoutUserInput>
  }

  export type BlogUpdateManyWithWhereWithoutUserInput = {
    where: BlogScalarWhereInput
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyWithoutUserInput>
  }

  export type BlogScalarWhereInput = {
    AND?: BlogScalarWhereInput | BlogScalarWhereInput[]
    OR?: BlogScalarWhereInput[]
    NOT?: BlogScalarWhereInput | BlogScalarWhereInput[]
    id?: StringFilter<"Blog"> | string
    userId?: StringFilter<"Blog"> | string
    title?: StringFilter<"Blog"> | string
    slug?: StringFilter<"Blog"> | string
    description?: StringNullableFilter<"Blog"> | string | null
    keywords?: JsonNullableFilter<"Blog">
    createdAt?: DateTimeFilter<"Blog"> | Date | string
  }

  export type NewsUpsertWithWhereUniqueWithoutUserInput = {
    where: NewsWhereUniqueInput
    update: XOR<NewsUpdateWithoutUserInput, NewsUncheckedUpdateWithoutUserInput>
    create: XOR<NewsCreateWithoutUserInput, NewsUncheckedCreateWithoutUserInput>
  }

  export type NewsUpdateWithWhereUniqueWithoutUserInput = {
    where: NewsWhereUniqueInput
    data: XOR<NewsUpdateWithoutUserInput, NewsUncheckedUpdateWithoutUserInput>
  }

  export type NewsUpdateManyWithWhereWithoutUserInput = {
    where: NewsScalarWhereInput
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyWithoutUserInput>
  }

  export type NewsScalarWhereInput = {
    AND?: NewsScalarWhereInput | NewsScalarWhereInput[]
    OR?: NewsScalarWhereInput[]
    NOT?: NewsScalarWhereInput | NewsScalarWhereInput[]
    id?: StringFilter<"News"> | string
    userId?: StringFilter<"News"> | string
    title?: StringFilter<"News"> | string
    slug?: StringFilter<"News"> | string
    description?: StringNullableFilter<"News"> | string | null
    keywords?: JsonNullableFilter<"News">
    createdAt?: DateTimeFilter<"News"> | Date | string
  }

  export type ImageFolderUpsertWithWhereUniqueWithoutUserInput = {
    where: ImageFolderWhereUniqueInput
    update: XOR<ImageFolderUpdateWithoutUserInput, ImageFolderUncheckedUpdateWithoutUserInput>
    create: XOR<ImageFolderCreateWithoutUserInput, ImageFolderUncheckedCreateWithoutUserInput>
  }

  export type ImageFolderUpdateWithWhereUniqueWithoutUserInput = {
    where: ImageFolderWhereUniqueInput
    data: XOR<ImageFolderUpdateWithoutUserInput, ImageFolderUncheckedUpdateWithoutUserInput>
  }

  export type ImageFolderUpdateManyWithWhereWithoutUserInput = {
    where: ImageFolderScalarWhereInput
    data: XOR<ImageFolderUpdateManyMutationInput, ImageFolderUncheckedUpdateManyWithoutUserInput>
  }

  export type ImageFolderScalarWhereInput = {
    AND?: ImageFolderScalarWhereInput | ImageFolderScalarWhereInput[]
    OR?: ImageFolderScalarWhereInput[]
    NOT?: ImageFolderScalarWhereInput | ImageFolderScalarWhereInput[]
    id?: StringFilter<"ImageFolder"> | string
    userId?: StringFilter<"ImageFolder"> | string
    title?: StringFilter<"ImageFolder"> | string
    createdAt?: DateTimeFilter<"ImageFolder"> | Date | string
  }

  export type VideoFolderUpsertWithWhereUniqueWithoutUserInput = {
    where: VideoFolderWhereUniqueInput
    update: XOR<VideoFolderUpdateWithoutUserInput, VideoFolderUncheckedUpdateWithoutUserInput>
    create: XOR<VideoFolderCreateWithoutUserInput, VideoFolderUncheckedCreateWithoutUserInput>
  }

  export type VideoFolderUpdateWithWhereUniqueWithoutUserInput = {
    where: VideoFolderWhereUniqueInput
    data: XOR<VideoFolderUpdateWithoutUserInput, VideoFolderUncheckedUpdateWithoutUserInput>
  }

  export type VideoFolderUpdateManyWithWhereWithoutUserInput = {
    where: VideoFolderScalarWhereInput
    data: XOR<VideoFolderUpdateManyMutationInput, VideoFolderUncheckedUpdateManyWithoutUserInput>
  }

  export type VideoFolderScalarWhereInput = {
    AND?: VideoFolderScalarWhereInput | VideoFolderScalarWhereInput[]
    OR?: VideoFolderScalarWhereInput[]
    NOT?: VideoFolderScalarWhereInput | VideoFolderScalarWhereInput[]
    id?: StringFilter<"VideoFolder"> | string
    title?: StringFilter<"VideoFolder"> | string
    createdAt?: DateTimeFilter<"VideoFolder"> | Date | string
    userId?: StringFilter<"VideoFolder"> | string
  }

  export type UserCreateWithoutBlogsInput = {
    id?: string
    company_name: string
    website: string
    email: string
    logo: string
    primary_color: string
    secondary_color: string
    name: string
    contact_number: string
    address: string
    password: string
    role?: $Enums.Role
    allowBlogs?: boolean
    allowNews?: boolean
    allowImages?: boolean
    allowVideos?: boolean
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsCreateNestedManyWithoutUserInput
    imageFolders?: ImageFolderCreateNestedManyWithoutUserInput
    VideoFolders?: VideoFolderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlogsInput = {
    id?: string
    company_name: string
    website: string
    email: string
    logo: string
    primary_color: string
    secondary_color: string
    name: string
    contact_number: string
    address: string
    password: string
    role?: $Enums.Role
    allowBlogs?: boolean
    allowNews?: boolean
    allowImages?: boolean
    allowVideos?: boolean
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutUserInput
    imageFolders?: ImageFolderUncheckedCreateNestedManyWithoutUserInput
    VideoFolders?: VideoFolderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
  }

  export type BlogContentBlockCreateWithoutBlogInput = {
    id?: string
    type: string
    content: string
    order: number
    createdAt?: Date | string
  }

  export type BlogContentBlockUncheckedCreateWithoutBlogInput = {
    id?: string
    type: string
    content: string
    order: number
    createdAt?: Date | string
  }

  export type BlogContentBlockCreateOrConnectWithoutBlogInput = {
    where: BlogContentBlockWhereUniqueInput
    create: XOR<BlogContentBlockCreateWithoutBlogInput, BlogContentBlockUncheckedCreateWithoutBlogInput>
  }

  export type BlogContentBlockCreateManyBlogInputEnvelope = {
    data: BlogContentBlockCreateManyBlogInput | BlogContentBlockCreateManyBlogInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBlogsInput = {
    update: XOR<UserUpdateWithoutBlogsInput, UserUncheckedUpdateWithoutBlogsInput>
    create: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlogsInput, UserUncheckedUpdateWithoutBlogsInput>
  }

  export type UserUpdateWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    primary_color?: StringFieldUpdateOperationsInput | string
    secondary_color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    allowBlogs?: BoolFieldUpdateOperationsInput | boolean
    allowNews?: BoolFieldUpdateOperationsInput | boolean
    allowImages?: BoolFieldUpdateOperationsInput | boolean
    allowVideos?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateManyWithoutUserNestedInput
    imageFolders?: ImageFolderUpdateManyWithoutUserNestedInput
    VideoFolders?: VideoFolderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    primary_color?: StringFieldUpdateOperationsInput | string
    secondary_color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    allowBlogs?: BoolFieldUpdateOperationsInput | boolean
    allowNews?: BoolFieldUpdateOperationsInput | boolean
    allowImages?: BoolFieldUpdateOperationsInput | boolean
    allowVideos?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutUserNestedInput
    imageFolders?: ImageFolderUncheckedUpdateManyWithoutUserNestedInput
    VideoFolders?: VideoFolderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BlogContentBlockUpsertWithWhereUniqueWithoutBlogInput = {
    where: BlogContentBlockWhereUniqueInput
    update: XOR<BlogContentBlockUpdateWithoutBlogInput, BlogContentBlockUncheckedUpdateWithoutBlogInput>
    create: XOR<BlogContentBlockCreateWithoutBlogInput, BlogContentBlockUncheckedCreateWithoutBlogInput>
  }

  export type BlogContentBlockUpdateWithWhereUniqueWithoutBlogInput = {
    where: BlogContentBlockWhereUniqueInput
    data: XOR<BlogContentBlockUpdateWithoutBlogInput, BlogContentBlockUncheckedUpdateWithoutBlogInput>
  }

  export type BlogContentBlockUpdateManyWithWhereWithoutBlogInput = {
    where: BlogContentBlockScalarWhereInput
    data: XOR<BlogContentBlockUpdateManyMutationInput, BlogContentBlockUncheckedUpdateManyWithoutBlogInput>
  }

  export type BlogContentBlockScalarWhereInput = {
    AND?: BlogContentBlockScalarWhereInput | BlogContentBlockScalarWhereInput[]
    OR?: BlogContentBlockScalarWhereInput[]
    NOT?: BlogContentBlockScalarWhereInput | BlogContentBlockScalarWhereInput[]
    id?: StringFilter<"BlogContentBlock"> | string
    type?: StringFilter<"BlogContentBlock"> | string
    content?: StringFilter<"BlogContentBlock"> | string
    order?: IntFilter<"BlogContentBlock"> | number
    createdAt?: DateTimeFilter<"BlogContentBlock"> | Date | string
    blogId?: StringFilter<"BlogContentBlock"> | string
  }

  export type BlogCreateWithoutContentsInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBlogsInput
  }

  export type BlogUncheckedCreateWithoutContentsInput = {
    id?: string
    userId: string
    title: string
    slug: string
    description?: string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type BlogCreateOrConnectWithoutContentsInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutContentsInput, BlogUncheckedCreateWithoutContentsInput>
  }

  export type BlogUpsertWithoutContentsInput = {
    update: XOR<BlogUpdateWithoutContentsInput, BlogUncheckedUpdateWithoutContentsInput>
    create: XOR<BlogCreateWithoutContentsInput, BlogUncheckedCreateWithoutContentsInput>
    where?: BlogWhereInput
  }

  export type BlogUpdateToOneWithWhereWithoutContentsInput = {
    where?: BlogWhereInput
    data: XOR<BlogUpdateWithoutContentsInput, BlogUncheckedUpdateWithoutContentsInput>
  }

  export type BlogUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBlogsNestedInput
  }

  export type BlogUncheckedUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutNewsInput = {
    id?: string
    company_name: string
    website: string
    email: string
    logo: string
    primary_color: string
    secondary_color: string
    name: string
    contact_number: string
    address: string
    password: string
    role?: $Enums.Role
    allowBlogs?: boolean
    allowNews?: boolean
    allowImages?: boolean
    allowVideos?: boolean
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogs?: BlogCreateNestedManyWithoutUserInput
    imageFolders?: ImageFolderCreateNestedManyWithoutUserInput
    VideoFolders?: VideoFolderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNewsInput = {
    id?: string
    company_name: string
    website: string
    email: string
    logo: string
    primary_color: string
    secondary_color: string
    name: string
    contact_number: string
    address: string
    password: string
    role?: $Enums.Role
    allowBlogs?: boolean
    allowNews?: boolean
    allowImages?: boolean
    allowVideos?: boolean
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogs?: BlogUncheckedCreateNestedManyWithoutUserInput
    imageFolders?: ImageFolderUncheckedCreateNestedManyWithoutUserInput
    VideoFolders?: VideoFolderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
  }

  export type NewsContentBlockCreateWithoutNewsInput = {
    id?: string
    type: string
    content: string
    order: number
    createdAt?: Date | string
  }

  export type NewsContentBlockUncheckedCreateWithoutNewsInput = {
    id?: string
    type: string
    content: string
    order: number
    createdAt?: Date | string
  }

  export type NewsContentBlockCreateOrConnectWithoutNewsInput = {
    where: NewsContentBlockWhereUniqueInput
    create: XOR<NewsContentBlockCreateWithoutNewsInput, NewsContentBlockUncheckedCreateWithoutNewsInput>
  }

  export type NewsContentBlockCreateManyNewsInputEnvelope = {
    data: NewsContentBlockCreateManyNewsInput | NewsContentBlockCreateManyNewsInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutNewsInput = {
    update: XOR<UserUpdateWithoutNewsInput, UserUncheckedUpdateWithoutNewsInput>
    create: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNewsInput, UserUncheckedUpdateWithoutNewsInput>
  }

  export type UserUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    primary_color?: StringFieldUpdateOperationsInput | string
    secondary_color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    allowBlogs?: BoolFieldUpdateOperationsInput | boolean
    allowNews?: BoolFieldUpdateOperationsInput | boolean
    allowImages?: BoolFieldUpdateOperationsInput | boolean
    allowVideos?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: BlogUpdateManyWithoutUserNestedInput
    imageFolders?: ImageFolderUpdateManyWithoutUserNestedInput
    VideoFolders?: VideoFolderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    primary_color?: StringFieldUpdateOperationsInput | string
    secondary_color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    allowBlogs?: BoolFieldUpdateOperationsInput | boolean
    allowNews?: BoolFieldUpdateOperationsInput | boolean
    allowImages?: BoolFieldUpdateOperationsInput | boolean
    allowVideos?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput
    imageFolders?: ImageFolderUncheckedUpdateManyWithoutUserNestedInput
    VideoFolders?: VideoFolderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NewsContentBlockUpsertWithWhereUniqueWithoutNewsInput = {
    where: NewsContentBlockWhereUniqueInput
    update: XOR<NewsContentBlockUpdateWithoutNewsInput, NewsContentBlockUncheckedUpdateWithoutNewsInput>
    create: XOR<NewsContentBlockCreateWithoutNewsInput, NewsContentBlockUncheckedCreateWithoutNewsInput>
  }

  export type NewsContentBlockUpdateWithWhereUniqueWithoutNewsInput = {
    where: NewsContentBlockWhereUniqueInput
    data: XOR<NewsContentBlockUpdateWithoutNewsInput, NewsContentBlockUncheckedUpdateWithoutNewsInput>
  }

  export type NewsContentBlockUpdateManyWithWhereWithoutNewsInput = {
    where: NewsContentBlockScalarWhereInput
    data: XOR<NewsContentBlockUpdateManyMutationInput, NewsContentBlockUncheckedUpdateManyWithoutNewsInput>
  }

  export type NewsContentBlockScalarWhereInput = {
    AND?: NewsContentBlockScalarWhereInput | NewsContentBlockScalarWhereInput[]
    OR?: NewsContentBlockScalarWhereInput[]
    NOT?: NewsContentBlockScalarWhereInput | NewsContentBlockScalarWhereInput[]
    id?: StringFilter<"NewsContentBlock"> | string
    type?: StringFilter<"NewsContentBlock"> | string
    content?: StringFilter<"NewsContentBlock"> | string
    order?: IntFilter<"NewsContentBlock"> | number
    createdAt?: DateTimeFilter<"NewsContentBlock"> | Date | string
    newsId?: StringFilter<"NewsContentBlock"> | string
  }

  export type UserCreateWithoutVideoFoldersInput = {
    id?: string
    company_name: string
    website: string
    email: string
    logo: string
    primary_color: string
    secondary_color: string
    name: string
    contact_number: string
    address: string
    password: string
    role?: $Enums.Role
    allowBlogs?: boolean
    allowNews?: boolean
    allowImages?: boolean
    allowVideos?: boolean
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogs?: BlogCreateNestedManyWithoutUserInput
    news?: NewsCreateNestedManyWithoutUserInput
    imageFolders?: ImageFolderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVideoFoldersInput = {
    id?: string
    company_name: string
    website: string
    email: string
    logo: string
    primary_color: string
    secondary_color: string
    name: string
    contact_number: string
    address: string
    password: string
    role?: $Enums.Role
    allowBlogs?: boolean
    allowNews?: boolean
    allowImages?: boolean
    allowVideos?: boolean
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogs?: BlogUncheckedCreateNestedManyWithoutUserInput
    news?: NewsUncheckedCreateNestedManyWithoutUserInput
    imageFolders?: ImageFolderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVideoFoldersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVideoFoldersInput, UserUncheckedCreateWithoutVideoFoldersInput>
  }

  export type VideoCreateWithoutFolderInput = {
    id?: string
    title: string
    language?: string | null
    location?: string | null
    url: string
    createdAt?: Date | string
  }

  export type VideoUncheckedCreateWithoutFolderInput = {
    id?: string
    title: string
    language?: string | null
    location?: string | null
    url: string
    createdAt?: Date | string
  }

  export type VideoCreateOrConnectWithoutFolderInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutFolderInput, VideoUncheckedCreateWithoutFolderInput>
  }

  export type VideoCreateManyFolderInputEnvelope = {
    data: VideoCreateManyFolderInput | VideoCreateManyFolderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVideoFoldersInput = {
    update: XOR<UserUpdateWithoutVideoFoldersInput, UserUncheckedUpdateWithoutVideoFoldersInput>
    create: XOR<UserCreateWithoutVideoFoldersInput, UserUncheckedCreateWithoutVideoFoldersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVideoFoldersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVideoFoldersInput, UserUncheckedUpdateWithoutVideoFoldersInput>
  }

  export type UserUpdateWithoutVideoFoldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    primary_color?: StringFieldUpdateOperationsInput | string
    secondary_color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    allowBlogs?: BoolFieldUpdateOperationsInput | boolean
    allowNews?: BoolFieldUpdateOperationsInput | boolean
    allowImages?: BoolFieldUpdateOperationsInput | boolean
    allowVideos?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: BlogUpdateManyWithoutUserNestedInput
    news?: NewsUpdateManyWithoutUserNestedInput
    imageFolders?: ImageFolderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVideoFoldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    primary_color?: StringFieldUpdateOperationsInput | string
    secondary_color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    allowBlogs?: BoolFieldUpdateOperationsInput | boolean
    allowNews?: BoolFieldUpdateOperationsInput | boolean
    allowImages?: BoolFieldUpdateOperationsInput | boolean
    allowVideos?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput
    news?: NewsUncheckedUpdateManyWithoutUserNestedInput
    imageFolders?: ImageFolderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VideoUpsertWithWhereUniqueWithoutFolderInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutFolderInput, VideoUncheckedUpdateWithoutFolderInput>
    create: XOR<VideoCreateWithoutFolderInput, VideoUncheckedCreateWithoutFolderInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutFolderInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutFolderInput, VideoUncheckedUpdateWithoutFolderInput>
  }

  export type VideoUpdateManyWithWhereWithoutFolderInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutFolderInput>
  }

  export type VideoScalarWhereInput = {
    AND?: VideoScalarWhereInput | VideoScalarWhereInput[]
    OR?: VideoScalarWhereInput[]
    NOT?: VideoScalarWhereInput | VideoScalarWhereInput[]
    id?: StringFilter<"Video"> | string
    title?: StringFilter<"Video"> | string
    language?: StringNullableFilter<"Video"> | string | null
    location?: StringNullableFilter<"Video"> | string | null
    url?: StringFilter<"Video"> | string
    createdAt?: DateTimeFilter<"Video"> | Date | string
    folderId?: StringFilter<"Video"> | string
  }

  export type VideoFolderCreateWithoutVideosInput = {
    id?: string
    title: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutVideoFoldersInput
  }

  export type VideoFolderUncheckedCreateWithoutVideosInput = {
    id?: string
    title: string
    createdAt?: Date | string
    userId: string
  }

  export type VideoFolderCreateOrConnectWithoutVideosInput = {
    where: VideoFolderWhereUniqueInput
    create: XOR<VideoFolderCreateWithoutVideosInput, VideoFolderUncheckedCreateWithoutVideosInput>
  }

  export type VideoFolderUpsertWithoutVideosInput = {
    update: XOR<VideoFolderUpdateWithoutVideosInput, VideoFolderUncheckedUpdateWithoutVideosInput>
    create: XOR<VideoFolderCreateWithoutVideosInput, VideoFolderUncheckedCreateWithoutVideosInput>
    where?: VideoFolderWhereInput
  }

  export type VideoFolderUpdateToOneWithWhereWithoutVideosInput = {
    where?: VideoFolderWhereInput
    data: XOR<VideoFolderUpdateWithoutVideosInput, VideoFolderUncheckedUpdateWithoutVideosInput>
  }

  export type VideoFolderUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVideoFoldersNestedInput
  }

  export type VideoFolderUncheckedUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type NewsCreateWithoutContentsInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutContentsInput = {
    id?: string
    userId: string
    title: string
    slug: string
    description?: string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type NewsCreateOrConnectWithoutContentsInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutContentsInput, NewsUncheckedCreateWithoutContentsInput>
  }

  export type NewsUpsertWithoutContentsInput = {
    update: XOR<NewsUpdateWithoutContentsInput, NewsUncheckedUpdateWithoutContentsInput>
    create: XOR<NewsCreateWithoutContentsInput, NewsUncheckedCreateWithoutContentsInput>
    where?: NewsWhereInput
  }

  export type NewsUpdateToOneWithWhereWithoutContentsInput = {
    where?: NewsWhereInput
    data: XOR<NewsUpdateWithoutContentsInput, NewsUncheckedUpdateWithoutContentsInput>
  }

  export type NewsUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutImageFoldersInput = {
    id?: string
    company_name: string
    website: string
    email: string
    logo: string
    primary_color: string
    secondary_color: string
    name: string
    contact_number: string
    address: string
    password: string
    role?: $Enums.Role
    allowBlogs?: boolean
    allowNews?: boolean
    allowImages?: boolean
    allowVideos?: boolean
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogs?: BlogCreateNestedManyWithoutUserInput
    news?: NewsCreateNestedManyWithoutUserInput
    VideoFolders?: VideoFolderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutImageFoldersInput = {
    id?: string
    company_name: string
    website: string
    email: string
    logo: string
    primary_color: string
    secondary_color: string
    name: string
    contact_number: string
    address: string
    password: string
    role?: $Enums.Role
    allowBlogs?: boolean
    allowNews?: boolean
    allowImages?: boolean
    allowVideos?: boolean
    startDate?: Date | string
    endDate: Date | string
    isActive?: boolean
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogs?: BlogUncheckedCreateNestedManyWithoutUserInput
    news?: NewsUncheckedCreateNestedManyWithoutUserInput
    VideoFolders?: VideoFolderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutImageFoldersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutImageFoldersInput, UserUncheckedCreateWithoutImageFoldersInput>
  }

  export type ImageCreateWithoutFolderInput = {
    id?: string
    url: string
    size: number
    createdAt?: Date | string
  }

  export type ImageUncheckedCreateWithoutFolderInput = {
    id?: string
    url: string
    size: number
    createdAt?: Date | string
  }

  export type ImageCreateOrConnectWithoutFolderInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutFolderInput, ImageUncheckedCreateWithoutFolderInput>
  }

  export type ImageCreateManyFolderInputEnvelope = {
    data: ImageCreateManyFolderInput | ImageCreateManyFolderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutImageFoldersInput = {
    update: XOR<UserUpdateWithoutImageFoldersInput, UserUncheckedUpdateWithoutImageFoldersInput>
    create: XOR<UserCreateWithoutImageFoldersInput, UserUncheckedCreateWithoutImageFoldersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutImageFoldersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutImageFoldersInput, UserUncheckedUpdateWithoutImageFoldersInput>
  }

  export type UserUpdateWithoutImageFoldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    primary_color?: StringFieldUpdateOperationsInput | string
    secondary_color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    allowBlogs?: BoolFieldUpdateOperationsInput | boolean
    allowNews?: BoolFieldUpdateOperationsInput | boolean
    allowImages?: BoolFieldUpdateOperationsInput | boolean
    allowVideos?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: BlogUpdateManyWithoutUserNestedInput
    news?: NewsUpdateManyWithoutUserNestedInput
    VideoFolders?: VideoFolderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutImageFoldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    primary_color?: StringFieldUpdateOperationsInput | string
    secondary_color?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    allowBlogs?: BoolFieldUpdateOperationsInput | boolean
    allowNews?: BoolFieldUpdateOperationsInput | boolean
    allowImages?: BoolFieldUpdateOperationsInput | boolean
    allowVideos?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput
    news?: NewsUncheckedUpdateManyWithoutUserNestedInput
    VideoFolders?: VideoFolderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ImageUpsertWithWhereUniqueWithoutFolderInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutFolderInput, ImageUncheckedUpdateWithoutFolderInput>
    create: XOR<ImageCreateWithoutFolderInput, ImageUncheckedCreateWithoutFolderInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutFolderInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutFolderInput, ImageUncheckedUpdateWithoutFolderInput>
  }

  export type ImageUpdateManyWithWhereWithoutFolderInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutFolderInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: StringFilter<"Image"> | string
    folderId?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    size?: IntFilter<"Image"> | number
    createdAt?: DateTimeFilter<"Image"> | Date | string
  }

  export type ImageFolderCreateWithoutImagesInput = {
    id?: string
    title: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutImageFoldersInput
  }

  export type ImageFolderUncheckedCreateWithoutImagesInput = {
    id?: string
    userId: string
    title: string
    createdAt?: Date | string
  }

  export type ImageFolderCreateOrConnectWithoutImagesInput = {
    where: ImageFolderWhereUniqueInput
    create: XOR<ImageFolderCreateWithoutImagesInput, ImageFolderUncheckedCreateWithoutImagesInput>
  }

  export type ImageFolderUpsertWithoutImagesInput = {
    update: XOR<ImageFolderUpdateWithoutImagesInput, ImageFolderUncheckedUpdateWithoutImagesInput>
    create: XOR<ImageFolderCreateWithoutImagesInput, ImageFolderUncheckedCreateWithoutImagesInput>
    where?: ImageFolderWhereInput
  }

  export type ImageFolderUpdateToOneWithWhereWithoutImagesInput = {
    where?: ImageFolderWhereInput
    data: XOR<ImageFolderUpdateWithoutImagesInput, ImageFolderUncheckedUpdateWithoutImagesInput>
  }

  export type ImageFolderUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutImageFoldersNestedInput
  }

  export type ImageFolderUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateManyUserInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type NewsCreateManyUserInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ImageFolderCreateManyUserInput = {
    id?: string
    title: string
    createdAt?: Date | string
  }

  export type VideoFolderCreateManyUserInput = {
    id?: string
    title: string
    createdAt?: Date | string
  }

  export type BlogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: BlogContentBlockUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: BlogContentBlockUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: NewsContentBlockUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: NewsContentBlockUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageFolderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutFolderNestedInput
  }

  export type ImageFolderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutFolderNestedInput
  }

  export type ImageFolderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoFolderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutFolderNestedInput
  }

  export type VideoFolderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutFolderNestedInput
  }

  export type VideoFolderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogContentBlockCreateManyBlogInput = {
    id?: string
    type: string
    content: string
    order: number
    createdAt?: Date | string
  }

  export type BlogContentBlockUpdateWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogContentBlockUncheckedUpdateWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogContentBlockUncheckedUpdateManyWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsContentBlockCreateManyNewsInput = {
    id?: string
    type: string
    content: string
    order: number
    createdAt?: Date | string
  }

  export type NewsContentBlockUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsContentBlockUncheckedUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsContentBlockUncheckedUpdateManyWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateManyFolderInput = {
    id?: string
    title: string
    language?: string | null
    location?: string | null
    url: string
    createdAt?: Date | string
  }

  export type VideoUpdateWithoutFolderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateWithoutFolderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyWithoutFolderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyFolderInput = {
    id?: string
    url: string
    size: number
    createdAt?: Date | string
  }

  export type ImageUpdateWithoutFolderInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateWithoutFolderInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyWithoutFolderInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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