import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupByPipe } from './group-by.pipe'

@NgModule({
  declarations: [GroupByPipe],
  exports: [GroupByPipe],
  imports: [
    CommonModule
  ]
})
export class GroupByModule { }
