import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import {Advertisement} from '../models/advertisement.model'
import {Query} from '../models/query.model'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  advertiments: Advertisement[] = [new Advertisement("https://marktplaats.nl/a/watersport-en-boten/surfen-golfsurfen/m1664915169-surfboard.html", "https://ci4.googleusercontent.com/proxy/K4US2xuiuVEjKqkrJDjIYVCv9DBxZNEOiAckbhw9xdPHwyCBXHBaW8FXDn_VglUZDxGze2ToyJEoAMqt6q9j7vtqIsi4cvB_YNgOE1cXkO-4VWqkig=s0-d-e1-ft#http://i.ebayimg.com/00/s/NjE0WDgyOA==/z/6RUAAOSwLGpgIvqh/$_82.JPG", "Titel: Surfboard", "Omschrijving Te koop: surfboard 6’2, incl vinnen, leash en boardsok. Redbull editie, in goede staat! Lengte: 189 cm. Breedte: 58,5 cm. Volume: ", "Bieden"),
  new Advertisement("https://marktplaats.nl/a/watersport-en-boten/surfen-golfsurfen/m1664915169-surfboard.html", "https://ci4.googleusercontent.com/proxy/K4US2xuiuVEjKqkrJDjIYVCv9DBxZNEOiAckbhw9xdPHwyCBXHBaW8FXDn_VglUZDxGze2ToyJEoAMqt6q9j7vtqIsi4cvB_YNgOE1cXkO-4VWqkig=s0-d-e1-ft#http://i.ebayimg.com/00/s/NjE0WDgyOA==/z/6RUAAOSwLGpgIvqh/$_82.JPG", "Titel: Surfboard", "Omschrijving Te koop: surfboard 6’2, incl vinnen, leash en boardsok. Redbull editie, in goede staat! Lengte: 189 cm. Breedte: 58,5 cm. Volume: ", "Bieden"),
  new Advertisement("https://marktplaats.nl/a/watersport-en-boten/surfen-golfsurfen/m1664915169-surfboard.html", "https://ci4.googleusercontent.com/proxy/K4US2xuiuVEjKqkrJDjIYVCv9DBxZNEOiAckbhw9xdPHwyCBXHBaW8FXDn_VglUZDxGze2ToyJEoAMqt6q9j7vtqIsi4cvB_YNgOE1cXkO-4VWqkig=s0-d-e1-ft#http://i.ebayimg.com/00/s/NjE0WDgyOA==/z/6RUAAOSwLGpgIvqh/$_82.JPG", "Titel: Surfboard", "Omschrijving Te koop: surfboard 6’2, incl vinnen, leash en boardsok. Redbull editie, in goede staat! Lengte: 189 cm. Breedte: 58,5 cm. Volume: ", "Bieden"),
  new Advertisement("https://marktplaats.nl/a/watersport-en-boten/surfen-golfsurfen/m1664915169-surfboard.html", "https://ci4.googleusercontent.com/proxy/K4US2xuiuVEjKqkrJDjIYVCv9DBxZNEOiAckbhw9xdPHwyCBXHBaW8FXDn_VglUZDxGze2ToyJEoAMqt6q9j7vtqIsi4cvB_YNgOE1cXkO-4VWqkig=s0-d-e1-ft#http://i.ebayimg.com/00/s/NjE0WDgyOA==/z/6RUAAOSwLGpgIvqh/$_82.JPG", "Titel: Surfboard", "Omschrijving Te koop: surfboard 6’2, incl vinnen, leash en boardsok. Redbull editie, in goede staat! Lengte: 189 cm. Breedte: 58,5 cm. Volume: ", "Bieden"),
  new Advertisement("https://marktplaats.nl/a/watersport-en-boten/surfen-golfsurfen/m1664915169-surfboard.html", "https://ci4.googleusercontent.com/proxy/K4US2xuiuVEjKqkrJDjIYVCv9DBxZNEOiAckbhw9xdPHwyCBXHBaW8FXDn_VglUZDxGze2ToyJEoAMqt6q9j7vtqIsi4cvB_YNgOE1cXkO-4VWqkig=s0-d-e1-ft#http://i.ebayimg.com/00/s/NjE0WDgyOA==/z/6RUAAOSwLGpgIvqh/$_82.JPG", "Titel: Surfboard", "Omschrijving Te koop: surfboard 6’2, incl vinnen, leash en boardsok. Redbull editie, in goede staat! Lengte: 189 cm. Breedte: 58,5 cm. Volume: ", "Bieden"),
  new Advertisement("https://marktplaats.nl/a/watersport-en-boten/surfen-golfsurfen/m1664915169-surfboard.html", "https://ci4.googleusercontent.com/proxy/K4US2xuiuVEjKqkrJDjIYVCv9DBxZNEOiAckbhw9xdPHwyCBXHBaW8FXDn_VglUZDxGze2ToyJEoAMqt6q9j7vtqIsi4cvB_YNgOE1cXkO-4VWqkig=s0-d-e1-ft#http://i.ebayimg.com/00/s/NjE0WDgyOA==/z/6RUAAOSwLGpgIvqh/$_82.JPG", "Titel: Surfboard", "Omschrijving Te koop: surfboard 6’2, incl vinnen, leash en boardsok. Redbull editie, in goede staat! Lengte: 189 cm. Breedte: 58,5 cm. Volume: ", "Bieden")];

  queries: Query[] = [{id:1, name: "a", url: 'a'}, {id:2, name: 'b', url:'a'}]
  selectedQuery: Query;
  newQuery = false;
  newQueryForm:FormGroup;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.newQueryForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'url': new FormControl(null, Validators.required)
    });
  }

  constructor() {}

  onNewQuery() {
    this.newQuery = true;
  }

  onRemoveQuery(id:number){
    if (!id) {
      throw new Error('invalid id');
    }

    const index = this.queries.findIndex(x => x.id === id);
    if (index < 0){
      return;
    }
    this.queries.splice(index, 1);
    if (this.selectedQuery.id === id) {
      this.selectedQuery = null;
    }
  }

  onSetSelectedQuery(id:number) {
    this.selectedQuery = this.queries.find(x => x.id === id);
  }

  onSaveNewQuery(){
    if (this.newQuery){
      this.queries.push({id:9, name: this.newQueryForm.get('name').value, url: this.newQueryForm.get('url').value })
      this.newQuery = false;
    } else {
      console.log(this.queries.find(x => x.id === this.selectedQuery.id))
      console.log(this.selectedQuery);
    }
  }
}
