import { TestService } from './../services/test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {

  constructor(private test_s: TestService) { }

  ngOnInit(): void {

    this.test_s.getEtudiant()
  }

}
