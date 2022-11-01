import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TaskComponent } from './task.component';
import { TaskListComponent } from './task-list.component';
import { PureTaskListComponent } from './pure-task-list.component';
import { CardComponent } from './card.component';

import { TasksState } from '../state/task.state';


@NgModule({
  imports: [BrowserAnimationsModule, CommonModule, NgxsModule.forFeature([TasksState])],
  exports: [TaskComponent, TaskListComponent, CardComponent],
  declarations: [TaskComponent, TaskListComponent, PureTaskListComponent, CardComponent],
  providers: [],
})
export class TaskModule {}
