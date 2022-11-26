import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personnages',
  templateUrl: './personnages.component.html',
  styleUrls: ['./personnages.component.css']
})
export class PersonnagesComponent implements OnInit {


  tabPersonnages = [
    { nom: 'laugh', Image: 'assets/emoji1.jpg', nb: 44, majeur: true },
    { nom: 'lovely', Image: 'assets/emoji2.jpg', nb: 16, majeur: true },
    { nom: 'blink', Image: 'assets/emoji3.jpg', nb: 12, majeur: false }
  ];
  check!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  checkMajeur(data: boolean): boolean {
    this.check = data
    return this.check
  }
  follow(nbAbonnes: number, index: number): void {
    nbAbonnes++
    this.tabPersonnages[index].nb++
  }

}
