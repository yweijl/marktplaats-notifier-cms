import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {Advertisement} from '../models/advertisement.model'

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


  constructor() {}
}
