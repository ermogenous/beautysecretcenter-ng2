import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../app.component.css']
})
export class FooterComponent {
  
  public _lang: string;
  constructor(private _cookieService: CookieService) {
    this._lang = _cookieService.get("lang");
  }
}
