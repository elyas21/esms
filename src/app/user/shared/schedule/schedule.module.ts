import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromScheduleState from './store';
import * as fromEvent from './store/reducers/event.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ScheduleEffects } from './store/effects/event.effects';
import { SharedModule } from 'src/app/shared/shared.module';
import { SScheduleComponent } from './components/schedule/sschedule.component';
import { AddWeeklyEventModalComponent } from './components/add-weekly-event-modal/add-weekly-event-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as fromSudoEvent from './store/reducers/sudoevent.reducer';
import { EventEffects } from './store/effects/sudoevent.effects';
import { ViewEventComponent } from './components/view-event/view-event.component';
import { UpdateEventComponent } from './components/update-event/update-event.component';
import { UpdateSudoEventComponent } from './components/update-sudo-event/update-sudo-event.component';
import { ViewSudoEventComponent } from './components/view-sudo-event/view-sudo-event.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ModalEffects } from './store/effects/modal.effects';
import { PopulateEventComponent } from './components/populate-event/populate-event.component';
import { WeeklyEventComponent } from './components/weekly-event/weekly-event.component';
import { RouterModule } from '@angular/router';
import { ViewWeekyEventsComponent } from './components/view-weeky-events/view-weeky-events.component';
import { UpdateWeeklyEventComponent } from './components/update-weekly-event/update-weekly-event.component';

@NgModule({
  declarations: [
    SScheduleComponent,
    AddWeeklyEventModalComponent,
    ViewEventComponent,
    UpdateEventComponent,
    UpdateSudoEventComponent,
    ViewSudoEventComponent,
    AddEventComponent,
    PopulateEventComponent,
    WeeklyEventComponent,
    ViewWeekyEventsComponent,
    UpdateWeeklyEventComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxMaterialTimepickerModule,
    SharedModule,
    ReactiveFormsModule,
    // StoreModule.forFeature(fromScheduleState.scheduleStateFeatureKey, fromScheduleState.reducers, {
    //   metaReducers: fromScheduleState.metaReducers
    // }),
    // StoreModule.forFeature(fromSchedule.scheduleFeatureKey, fromSchedule.reducer),
    EffectsModule.forFeature([ScheduleEffects, EventEffects]),
    StoreModule.forFeature(fromSudoEvent.eventsFeatureKey, fromSudoEvent.reducer),
    StoreModule.forFeature(fromEvent.eventsFeatureKey, fromEvent.reducer)
  ],
  exports: [SScheduleComponent]
})
export class ScheduleModule {}
