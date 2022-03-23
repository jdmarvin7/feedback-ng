import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplatesComponent } from './templates.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { SendComponent } from './send/send.component';
import { FeedbacksViewsComponent } from './feedbacks-views/feedbacks-views.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '',
    component: TemplatesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'feedbacks',
        component: FeedbacksComponent,
        children: [

        ]
      },
      {
        path: 'send',
        component: SendComponent,
      },
      {
        path: 'view',
        component: FeedbacksViewsComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }
