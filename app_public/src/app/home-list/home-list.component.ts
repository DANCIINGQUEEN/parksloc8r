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

  name = "Burger Queen"

  // locations: Location[] = [{
  //   _id: '6346919ee34f6821dc358b9e',
  //   name: "CU",
  //   distance: 5100.0,
  //   address: '서울시 종로구 자하문로 93',
  //   rating: 2,
  //   facilities: ['Hot Drinks', 'Premium wifi']
  // },
  //   {
  //     _id: '633d18fb7ec03579924a7c60',
  //     name: '산모퉁이',
  //     distance: 120.542,
  //     address: '종로구 백석동길 153',
  //     rating: 4,
  //     facilities: ['wifi', 'food', 'hot drinks']
  //   }]

  ngOnInit(){
    this.getLocations()
  }

}
