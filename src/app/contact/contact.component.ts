import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  nbr:number=100;
  moy:number=-1;
  isHidden:boolean=false;
  universityLogo:string="https://universitesesame.com/wp-content/uploads/2020/09/Logos-Sesame-13.png";
  constructor() {
   // console.log("constructor")
   }

  ngOnInit(): void {
   // console.log("ngOnInit")
  }

  eventClick(){
    //alert("Clicked...");
    this.isHidden = !this.isHidden;
  }
  sendContact(data:any){
    //console.log(data.value);
    //const moy = data.value.moy;
    //alert("Votre moyenne : "+ moy);
    this.moy = data.value.moy;
  }
}
