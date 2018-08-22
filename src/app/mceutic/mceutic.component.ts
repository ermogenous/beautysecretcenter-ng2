import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Component({
    selector: 'mceutic',
    templateUrl: './mceutic.component.html',
    styleUrls: ['../app.component.css']
})
export class MceuticComponent {

    public _lang: string;
    constructor(private _cookieService: CookieService) {
        this._lang = this._cookieService.get("lang");
        this._cookieService.put("page","mceutic");
    }

}
