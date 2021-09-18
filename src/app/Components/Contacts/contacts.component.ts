import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  isCollapsed:boolean = true;

  constructor(private observer: BreakpointObserver) {
  }

  ngOnInit(): void {
  }

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;


  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 550px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }
  collapsed() {
    this.isCollapsed = !this.isCollapsed
  }

  clickMessage() {
    alert("Hello! I am Message alert box!");
  }
  clickCall() {
    alert("Hello! I am Call alert box!");
  }
  clickSearch() {
    alert("Hello! I'm Search Box")
  }
}

