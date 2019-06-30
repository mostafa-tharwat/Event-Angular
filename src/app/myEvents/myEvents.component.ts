import { ManageEventsService } from './service/Manage-Events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myEvents',
  templateUrl: './myEvents.component.html',
  styleUrls: ['./myEvents.component.css']
})
export class MyEventsComponent implements OnInit {
userId = "5d115e4718bf680017a0c842";
myEvents ;
  constructor(private service : ManageEventsService) { 
    this.service.getAllEvents(this.userId).subscribe((r)=> {
      this.myEvents = r ;
    })
  }

  ngOnInit() {
  }

}
