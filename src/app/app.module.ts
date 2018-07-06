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

export interface AppState {
  state: boolean;
}

export const INITIAL_STATE = {
  state: true
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
