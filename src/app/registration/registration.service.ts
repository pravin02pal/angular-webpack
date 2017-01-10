import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegistrationService {

  constructor(private http: Http) {}

}
