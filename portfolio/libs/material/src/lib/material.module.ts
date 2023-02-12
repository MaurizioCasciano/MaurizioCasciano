import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationComponent} from "./navigation/navigation.component";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";

@NgModule({
  imports: [CommonModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule],
  declarations: [NavigationComponent],
  exports: [NavigationComponent]
})
export class MaterialModule {}
