import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Route} from '@angular/router';
import {homeRoutes} from './lib.routes';
import {HomeComponent} from './home/home.component';
import {FileUploaderModule} from "@file-reader/feature-file-uploader";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FileUploaderModule
    ],
    declarations: [HomeComponent],
})
export class HomeModule {
}
