import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { AdminComponent } from './admin.component';
import { ComponentsModule } from 'src/app/components/components.module';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    ComponentsModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule
  ],
  providers: [
  ]
})
export class AdminModule { }
