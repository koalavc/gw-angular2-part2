import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private apiUrl = "https://jordomav.ngrok.io";

  constructor(private http: HttpClient) {}

  get(url) {
    return this.http.get(`${this.apiUrl}${url}`);
  }

  post(url, data) {
    return this.http.post(`${this.apiUrl}${url}`, data);
  }
}
