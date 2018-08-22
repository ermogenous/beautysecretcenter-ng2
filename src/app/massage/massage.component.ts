import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'massage',
  templateUrl: './massage.component.html',
  styleUrls: ['../app.component.css']
})
export class Massage {

  public _lang: string;
  constructor(private _cookieService: CookieService) {
    this._lang = this._cookieService.get("lang");
    this._cookieService.put("page","massage");
  }

}
