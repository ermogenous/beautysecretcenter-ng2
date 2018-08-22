import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'contactUs',
  templateUrl: './contactUs.component.html',
  styleUrls: ['../app.component.css']
})
export class ContactUsComponent {
  public _lang;

  constructor(private _cookieService: CookieService) {
    this._lang = _cookieService.get("lang");
    this._cookieService.put("page","contactus");
    
  }

  ngOnInit() {
  }

}
