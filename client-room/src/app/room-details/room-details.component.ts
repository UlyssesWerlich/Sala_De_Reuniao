import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  id!: number;
  room?: Room;

  constructor(
    private roomService: RoomService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(){
    this.room = new Room();
    this.id = this.activatedRoute.snapshot.params['id'];
    this.roomService.getRoom(this.id)
      .subscribe(
        data => {
          console.log(data)
          this.room = data;
        },
        error => console.error(error)
      )
  }

  list() {
    this.router.navigate(['rooms']);
  }

}
