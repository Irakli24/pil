import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {DayPilot, DayPilotCalendarComponent} from 'daypilot-pro-angular';
import {CalendarService} from './calendar.service';

@Component({
  selector: 'app-calendar-component',
  template: `<daypilot-calendar [config]="config" [events]="events" #calendar></daypilot-calendar>`,
  styles: [``]
})
export class CalendarComponent implements AfterViewInit {
  @ViewChild('calendar')
  calendar: DayPilotCalendarComponent;

  events: any[] = [];

    config: any = {
      locale: 'en-us',
      viewType: 'Week',
      columnWidthSpec: 'Auto',
      cellHeight: 20,
      crosshairType: 'Header',
      eventArrangement: 'Cascade',
      allowEventOverlap: true,
      timeRangeSelectedHandling: 'Enabled',
      onTimeRangeSelected: (args) =>{
        DayPilot.Modal.prompt('Create a new event:', 'Event 1').then(modal => {
          const dp = args.control;
          dp.clearSelection();
          if (!modal.result) {
            return;
          }
          this._calendarService.saveCalendarEvent(args.start, args.end, modal.result)
            .subscribe(
              (response) => {
                dp.events.add(new DayPilot.Event({
                  start: args.start,
                  end: args.end,
                  id: DayPilot.guid(),
                  text: modal.result
                }));
              },
              (error) => console.log(error)
            );
        });
        // console.log(args.start);
        // console.log(args.end);
        // console.log(args.id);
        // console.log(args.text);
      },
      eventDeleteHandling: 'Update',
      onEventDeleted: function (args) {
        this.message('Event deleted.');
      },
    };
  constructor(private _calendarService: CalendarService) {
  }
    prompt() {

    }
  ngAfterViewInit(): void {
  }

}
