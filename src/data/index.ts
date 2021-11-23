//
// index.ts
// blackgate
// 
// Author: Wess Cope (me@wess.io)
// Created: 11/23/2021
// 
// Copywrite (c) 2021 Wess.io
//

export default {
  get(key:string): any | null {
    var res = localStorage.getItem(key);
    if(res != null) {
      res = JSON.parse(res);
    }

    return res;
  },

  set(key:string, value:any) {
    localStorage.setItem(
      key, 
      JSON.stringify(value)
    );
  },

  delete(key:string): any | null {
    let res = this.get(key);

    if(res != null) {
      localStorage.removeItem(key);
    }

    return res;
  },

  clear() {
    localStorage.clear();
  }
}
