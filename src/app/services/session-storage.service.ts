import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  private app = 'mean.';

  set(key, data) {
    return sessionStorage.setItem(`${this.app}${key}`, JSON.stringify(data));
  }

  get(key) {
    return JSON.parse(sessionStorage.getItem(`${this.app}${key}`));
  }

  remove(key) {
    return sessionStorage.removeItem(`${this.app}${key}`);
  }
}
