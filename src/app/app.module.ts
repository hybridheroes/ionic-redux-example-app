import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';

export interface Action {
  type: string,
  payload?: any
}

export interface Notes {
  byId: {[id: string]: Note},
  allIds: string[]
}

export interface Note {
  id: string;
  text: string;
}

export interface Reminder {
  id: string;
  noteId: string;
  time: string;
}

export interface AppState {
  notes: Notes,
  reminders: Reminder[]
}

export const INITIAL_STATE = {
  notes: {
    byId: {},
    allIds: []
  },
  reminders: []
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgReduxModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  constructor(
    private ngRedux: NgRedux<AppState>,
    private devTools: DevToolsExtension
  ) {
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      [thunk],
      [devTools.enhancer()]
    )
  }
}
