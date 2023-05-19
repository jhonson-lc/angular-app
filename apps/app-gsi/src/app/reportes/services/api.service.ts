import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  public getTemperaturas() {
    return this.httpClient.get(
      "https://api.tomorrow.io/v4/timelines?location=40.75872069597532,-73.98529171943665&fields=temperature&timesteps=1h&units=metric&apikey=9zhm5ngnwj0PPDn6zIzyAVaBfsBPCX61",
    );
  }
}
