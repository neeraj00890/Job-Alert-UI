import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";

const routes: Route[] = [
    {
        path: 'sign-up',
        component: SignupComponent
    },
    {
        pathMatch: 'full',
        path: '',
        component: LoginComponent
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class AuthRouting {

}