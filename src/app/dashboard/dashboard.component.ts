import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
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

  constructor() {}

  onNewQuery() {
    this.queries.push({id:9, name: 'Voeg titel toe', url: ''})
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
  }
}
