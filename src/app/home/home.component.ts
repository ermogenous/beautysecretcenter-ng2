import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css']
})
export class HomeComponent {
  
  public _lang: string;
  constructor(private _cookieService: CookieService) {
    this._lang = _cookieService.get("lang");
    this._cookieService.put("page","home");
    
  }
}
