import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar';

/**
 * NgModule wrapper for backward compatibility.
 * Standalone components can be re-exported from NgModules.
 *
 * Legacy NgModule usage:
 *   import { CalendarModule } from '@jesushr0013/ionic2-calendar';
 *   @NgModule({ imports: [CalendarModule] }) export class AppModule {}
 */
@NgModule({
    imports: [CommonModule, CalendarComponent],
    exports: [CalendarComponent]
})
export class CalendarModule {}

/**
 * Alias for backward compatibility with legacy import:
 *   import { NgCalendarModule } from '@jesushr0013/ionic2-calendar';
 */
export const NgCalendarModule = CalendarModule;
