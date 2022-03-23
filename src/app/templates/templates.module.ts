import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { SendComponent } from './send/send.component';
import { FeedbacksCardComponent } from './feedbacks-card/feedbacks-card.component';
import { FeedbacksViewsComponent } from './feedbacks-views/feedbacks-views.component';


@NgModule({
  declarations: [
    SideBarComponent,
    DashboardComponent,
    FeedbacksComponent,
    SendComponent,
    FeedbacksCardComponent,
    FeedbacksViewsComponent
  ],
  imports: [
    CommonModule,
    TemplatesRoutingModule
  ],
  exports: [
    SideBarComponent,
    DashboardComponent,
    FeedbacksComponent,
    SendComponent,
    FeedbacksCardComponent,
    FeedbacksViewsComponent,
  ]
})
export class TemplatesModule { }
