import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard} from './authentication/auth.guard'

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
  { path: 'login', component: AuthenticationComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
