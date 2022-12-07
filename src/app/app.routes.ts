import {RouterModule, Routes} from "@angular/router";
import {HomeModule} from "@file-reader/home";
import {NgModule} from "@angular/core";
import {HomeComponent} from "../../home/src/lib/home/home.component";
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [

        ]
    }
]

@NgModule({
    imports: [
        HomeModule,
        RouterModule.forRoot(routes, {
            // Notice custom routing logic down below
            scrollPositionRestoration: 'disabled',
            anchorScrolling: 'disabled',
            onSameUrlNavigation: 'reload',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
