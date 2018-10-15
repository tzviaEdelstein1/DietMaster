import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';

export class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
  // you can override any of the methods defined in the parent class
  public tooltip:string="hello";
  monthTooltip(event: CalendarEvent): string {
    return this.tooltip;
  }

  weekTooltip(event: CalendarEvent): string {
    return"By plan you had to add :   calories this day. In fact you added    calories by eating and lowered  by exercising"
    
  
  }

  dayTooltip(event: CalendarEvent): string {
    return ;
  }
}