//
// optional.ts
// arkhamprops
// 
// Author: Wess Cope (me@wess.io)
// Created: 10/13/2021
// 
// Copywrite (c) 2021 Wess.io
//

class _some<T> {
  constructor(public readonly value:T){}
}

export const Some = <T>(value: T): _some<T> => new _some(value);
export type None = null | undefined;

export type Option<T> =
  | _some<T>
  | None
  ;