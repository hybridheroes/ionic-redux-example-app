import { Component } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { Notes, Reminder, AppState, Action } from '../../app/app.module';
import { addNote, addReminder } from '../../app/actions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @select(['notes']) notes$: Observable<Notes>;
  @select(['reminders']) reminders$: Observable<Reminder[]>;

  constructor(private store: NgRedux<AppState>) {}
  
  addNote(note: string) {
    this.store.dispatch<any>(addNote(note));
  }

  addReminder(noteId: string, time: string) {
    this.store.dispatch<any>(addReminder(noteId, time))
  }
}
