import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Snowflake } from "@theinternetfolks/snowflake";
import { MenuItem } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { SpeedDialModule } from 'primeng/speeddial';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    CardModule,
    SpeedDialModule
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  fabMenuItems!: MenuItem[];

  constructor(private _router: Router) { }

  ngOnInit() {
    this.fabMenuItems = [
      {
        icon: 'pi pi-file-plus',
        routerLink: [`/kinmap/${Snowflake.generate()}`]
      }
    ];
  }

  public viewUpdateKinmap(UUID: string): void {
    this._router.navigate([`/kinmap/${UUID}`]);
  }
}
