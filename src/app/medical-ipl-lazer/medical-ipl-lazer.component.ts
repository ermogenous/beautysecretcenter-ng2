import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'medical-ipl-lazer',
  templateUrl: './medical-ipl-lazer.component.html',
  styleUrls: ['../app.component.css']
})
export class MedicalIplLazer {

  public _lang: string;
  constructor(private _cookieService: CookieService) {
    this._lang = this._cookieService.get("lang");
    this._cookieService.put("page","medical-ipl-lazer");
  }

}
