import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'skin-care',
  templateUrl: './skin-care.component.html',
  styleUrls: ['../app.component.css']
})
export class SkinCare {

  public _lang: string;
  constructor(private _cookieService: CookieService) {
    this._lang = this._cookieService.get("lang");
    this._cookieService.put("page","skin-care");
  }

}
