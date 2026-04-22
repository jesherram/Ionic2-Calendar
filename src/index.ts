
// Components
export { CalendarComponent } from './calendar';

// NgModule (backward compat)
export { CalendarModule, NgCalendarModule } from './calendar.module';

// Enums & types
export { Step, CalendarMode, QueryMode } from './calendar.interface';

// Public interfaces
export {
    IEvent,
    IRange,
    ITimeSelected,
    IDateFormatter,
    ICalendarComponent,
    IView,
    IDayView,
    IDayViewRow,
    IMonthView,
    IMonthViewRow,
    IWeekView,
    IWeekViewDateRow,
    IWeekViewRow,
    IDisplayEvent,
    IDisplayAllDayEvent,
    IDisplayWeekViewHeader,
} from './calendar.interface';

// Template context interfaces
export {
    IMonthViewDisplayEventTemplateContext,
    IMonthViewEventDetailTemplateContext,
    IWeekViewAllDayEventSectionTemplateContext,
    IWeekViewNormalEventSectionTemplateContext,
    IDayViewAllDayEventSectionTemplateContext,
    IDayViewNormalEventSectionTemplateContext,
    IDayViewCategoryItemTemplateContext,
} from './calendar.interface';

// Service (for advanced injection scenarios)
export { CalendarService } from './calendar.service';

