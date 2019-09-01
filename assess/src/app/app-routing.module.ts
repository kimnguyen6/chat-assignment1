import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GroupComponent } from './group/group.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChannelComponent } from './channel/channel.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'group', component: GroupComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'channel', component: ChannelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
