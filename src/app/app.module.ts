import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, ActivatedRoute} from '@angular/router';

// Components
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {GalleryComponent} from './gallery/gallery.component';
import {OffersComponent} from './offers/offers.component';
import {ServicesComponent} from './services/services.component';
import {ContactUsComponent} from './contactUs/contactUs.component';
import {HairStyling} from './hair-styling/hair-styling.component';
import {SkinCare} from './skin-care/skin-care.component';
import {MedicalIplLazer} from './medical-ipl-lazer/medical-ipl-lazer.component';
import {IBeauty} from './i-beauty/i-beauty.component';
import {Nails} from './nails/nails.component';
import {Massage} from './massage/massage.component';
import {AlternativeTreatments} from './alternative-treatments/alternative-treatments.component';
import {MakeUp} from './make-up/make-up.component';
import {MceuticComponent} from './mceutic/mceutic.component';
import {BodyTreatmentsComponent} from './body-treatments/body-treatments.component';
import { DetoxComponent } from './detox/detox.component';
import {OneMedMplComponent} from './one_med_mpl/one_med_mpl.component';

import {ReloadComponent} from './reload/reload.component';
import {CookieModule} from 'ngx-cookie';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        GalleryComponent,
        OffersComponent,
        ServicesComponent,
        ContactUsComponent,
        HairStyling,
        SkinCare,
        MedicalIplLazer,
        IBeauty,
        Nails,
        Massage,
        AlternativeTreatments,
        MakeUp,
        MceuticComponent,
        BodyTreatmentsComponent,
        DetoxComponent,
        OneMedMplComponent,
        ReloadComponent
    ],
    imports: [
        BrowserModule,
        CookieModule.forRoot(),
        RouterModule.forRoot([
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: 'home', component: HomeComponent},
            {path: 'about', component: AboutComponent},
            {path: 'services', component: ServicesComponent},
            {path: 'gallery', component: GalleryComponent},
            {path: 'contactus', component: ContactUsComponent},
            {path: 'offers', component: OffersComponent},
            {path: 'reload/:page', component: ReloadComponent},
            {path: 'hair-styling', component: HairStyling},
            {path: 'skin-care', component: SkinCare},
            {path: 'medical-ipl-lazer', component: MedicalIplLazer},
            {path: 'i-beauty', component: IBeauty},
            {path: 'nails', component: Nails},
            {path: 'massage', component: Massage},
            {path: 'alternative-treatments', component: AlternativeTreatments},
            {path: 'make-up', component: MakeUp},
            {path: 'mceutic', component: MceuticComponent},
            {path: 'body-treatments', component: BodyTreatmentsComponent},
            {path: 'detox', component: DetoxComponent},
            {path: 'one_med_mpl', component: OneMedMplComponent},

            {path: '**', redirectTo: 'home'}
        ])
    ],
    providers: [
        RouterModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
