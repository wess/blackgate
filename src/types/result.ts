//
// result.ts
// blackgate
// 
// Author: Wess Cope (me@wess.io)
// Created: 10/08/2021
// 
// Copywrite (c) 2021 Wess.io
//

class _ok<T,E> {
  constructor(public readonly value:T) {}

  isOk(): this is _ok<T,E> {
    return true;
  }

  isErr(): this is _err<T,E> {
    return false;
  }
}

class _err<T,E> {
  constructor(public readonly error:E) {}

  isOk(): this is _ok<T,E> {
    return false;
  }

  isErr(): this is _err<T,E> {
    return true;
  }
}

export type Result<T,E> =
  | _ok<T,E> 
  | _err<T,E>
  ;

export const Ok = <T,E>(value: T): _ok<T,E> => new _ok(value);
export const Err = <T,E>(error: E): _err<T,E> => new _err(error);