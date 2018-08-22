import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['../app.component.css']
})
export class GalleryComponent {

  public _lang: string;
  constructor(private _cookieService: CookieService) {
    this._lang = _cookieService.get("lang");
    this._cookieService.put("page","gallery");
    
  }
}
