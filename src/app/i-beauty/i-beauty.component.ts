import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'i-beauty',
  templateUrl: './i-beauty.component.html',
  styleUrls: ['../app.component.css']
})
export class IBeauty {

  public _lang: string;
  constructor(private _cookieService: CookieService) {
    this._lang = this._cookieService.get("lang");
    this._cookieService.put("page","i-beauty");
  }

}
