import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['../app.component.css']
})
export class ServicesComponent {

  public _lang: string;
  constructor(private _cookieService: CookieService) {
    this._lang = _cookieService.get("lang");
    this._cookieService.put("page","services");
    
  }
}
