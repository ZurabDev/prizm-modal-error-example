import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PrizmMonth, PrizmMonthRange } from '@prizm-ui/components';

@Component({
  selector: 'calendar-form',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  form = new FormGroup({
    period: new FormControl(
      new PrizmMonthRange(new PrizmMonth(2022, 1), new PrizmMonth(2022, 3))
    ),
  });
  public  period = new FormControl(
  new PrizmMonthRange(new PrizmMonth(2022, 1), new PrizmMonth(2022, 3))
);

  constructor() {}

  ngOnInit() {}
}
