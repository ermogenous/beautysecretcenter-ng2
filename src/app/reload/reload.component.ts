import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'reload',
    template: ''
})
export class ReloadComponent {

    private _paramPage;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router) {
        this._activatedRoute.params.subscribe(params => {
            this._paramPage = params["page"];
        });
    }

    ngOnInit() {
        console.log("Reload - " + this._paramPage);
        this._router.navigate(['./' + this._paramPage])
    }

}
