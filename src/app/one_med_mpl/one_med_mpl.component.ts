import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Component({
    selector: 'one_med_mpl',
    templateUrl: './one_med_mpl.component.html',
    styleUrls: ['../app.component.css']
})
export class OneMedMplComponent {

    public _lang: string;
    constructor(private _cookieService: CookieService) {
        this._lang = this._cookieService.get("lang");
        this._cookieService.put("page","one_med_mpl");
    }

}
