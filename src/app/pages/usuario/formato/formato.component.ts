import { Component, OnInit } from '@angular/core';
import { LaesmeraldaserviceService } from '../../../services/laesmeraldaservice.service';

@Component({
  selector: 'app-formato',
  templateUrl: './formato.component.html',
  styleUrls: ['./formato.component.css']
})
export class FormatoComponent implements OnInit {

  constructor(private leonService:LaesmeraldaserviceService) { }

  ngOnInit(): void {
    let body = {
      curp:"CAGL980504HGTHRS00"
    }
    this.leonService.getQuery(body,"api/formatodepago", 1 ).subscribe(data => console.log(data));
  }

}
