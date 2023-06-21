import {NgModule} from '@angular/core';

import {CalendarComponent} from './calendar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PrizmInputLayoutMonthRangeModule, PrizmInputMonthRangeModule} from '@prizm-ui/components';
import {OverlayModule} from '@angular/cdk/overlay';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, OverlayModule, PrizmInputMonthRangeModule, PrizmInputLayoutMonthRangeModule],
  exports: [CalendarComponent],
  declarations: [CalendarComponent],
  providers: [],
})
export class CalendarModule {}
