import {Component, OnInit} from '@angular/core';
import {Loc8rDataService} from "../loc8r-data.service";

//OnInit : 앵귤러 라이프사이클 메소드
// 애플리케이션 실행을 시작하면 어떤 사건이 특별한 순서로 일어나도록 해줌

export class Location {
  _id!: string;
  name!: string;
  distance!: number;
  address!: string;
  rating!: number;
  facilities!: string[];
}

// 2017125009  박지웅
@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  constructor(private loc8rDataService: Loc8rDataService) {}

  public locations: Location[]

  private getLocations(): void {
    this.loc8rDataService
      .getLocations()
      .then(foundLocations => this.locations = foundLocations)
  }
  ngOnInit(){
    this.getLocations()
  }

}
