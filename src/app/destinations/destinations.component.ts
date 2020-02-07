import { Component, OnInit } from '@angular/core';

type Destination ={
  ville:string;
  pays:string;
  img:string;
}

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {

  destinations:Array<Destination>=[
    {ville:"Rio",
    pays:"Brésil",
    img:"https://maurice-explorer.com/wp-content/uploads/2018/05/Pelourhino-Salvador-de-Bahia-Bre%CC%81sil-Brazil_12.jpg"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
