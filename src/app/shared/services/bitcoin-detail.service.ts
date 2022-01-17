import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BitconDetail } from '../models/bitcoin-detail.model';

@Injectable({
  providedIn: 'root'
})
export class BitcoinDetailService {

  private baseUrl :string =  environment.baseUrl;
  private servicePath : string = "/BitcoinDetails";
  
  constructor(private http : HttpClient) { }

  getAll(){
    return this.http.get<BitconDetail[]>(`${this.baseUrl}${this.servicePath}`);
  }

}
