import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['../app.component.css']
})
export class HeaderComponent {

  constructor(
    private _cookieService: CookieService,
    private _router: Router) {

  }

  ngOnInit() {
    console.log("NgInit");
    this._cookieService.put("lang","eng");
    console.log(this.getCookie("lang"));
  }

  getCookie(key: string) {
    return this._cookieService.get(key);
  }

  setLanguage(lang: string) {
    this._cookieService.put("lang",lang);
    //console.log(this._cookieService.get("page"));
    this._router.navigate(['/reload/' + this._cookieService.get("page")]);
  }

  facebook() {

      console.log("Facebook");

  }

}
