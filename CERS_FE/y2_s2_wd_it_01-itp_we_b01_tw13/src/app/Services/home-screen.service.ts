import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

const behaviorSubjectForRefreshEvents = new BehaviorSubject<boolean>(null);

@Injectable()
export class HomeScreenService { 
  
}
