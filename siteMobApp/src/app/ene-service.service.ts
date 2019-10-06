import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EneServiceService {
  api_URL = "localhost:9000/";  
  constructor() { }
}
