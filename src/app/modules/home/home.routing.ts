import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";


const routes: Routes = [
    {
        path: "",
        component: WelcomeComponent
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class HomeRoutingModule {

}