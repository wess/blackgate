//
// array.ts
// asylum
// 
// Author: Wess Cope (me@wess.io)
// Created: 11/01/2021
// 
// Copywrite (c) 2021 Wess.io
//

export {};

declare global {
  interface Array<T> {
    last(): T | null;  
    first(): T | null;
  }
}

Array.prototype.last = function() {
  return this.length > 0 ? this[this.length - 1] : null;
}

Array.prototype.first = function() {
  return this.length > 0 ? this[0] : null;
}