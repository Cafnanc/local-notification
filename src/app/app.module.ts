import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { LocalNotifications} from '@ionic-native/local-notifications/ngx'
import { SpeechRecognition } from '@ionic-native/speech-recognition'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, LocalNotifications, SpeechRecognition],
  bootstrap: [AppComponent],
})
export class AppModule {}
