import {NgModule} from '@angular/core';

import {CalendarComponent} from './calendar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PrizmInputMonthRangeModule} from '@prizm-ui/components';
import {OverlayModule} from '@angular/cdk/overlay';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, OverlayModule, PrizmInputMonthRangeModule],
  exports: [CalendarComponent],
  declarations: [CalendarComponent],
  providers: [],
})
export class CalendarModule {}
