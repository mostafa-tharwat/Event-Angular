import { appRouts } from './routes';
import { ManageEventsService } from './myEvents/service/Manage-Events.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyEventsComponent } from './myEvents/myEvents.component';
import { EditEventsComponent } from './myEvents/edit-events/edit-events.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
   declarations: [
      AppComponent,
      MyEventsComponent,
      EditEventsComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(appRouts),



   ],
   providers: [
      ManageEventsService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
