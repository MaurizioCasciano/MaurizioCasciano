import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationComponent} from "./navigation/navigation.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [CommonModule, MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, MatButtonModule],
  declarations: [NavigationComponent],
  exports: [NavigationComponent]
})
export class MaterialModule {}
