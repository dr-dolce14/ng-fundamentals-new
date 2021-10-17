import { LoginComponent } from "./login.component";
import { ProfileComponent } from "./profile.component";

export const userRoutes = [
    {path: 'profile', component: ProfileComponent},
    // this is going to look like /user/profile
    {path: 'login', component: LoginComponent}
]