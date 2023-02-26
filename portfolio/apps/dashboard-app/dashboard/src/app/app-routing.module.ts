import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SplashComponent} from "@portfolio/material";

const routes: Routes = [
  {
    path: "",
    component: SplashComponent
  },
  {
    path: "portfolio",
    loadChildren: () => import("./portfolio/portfolio.module").then((m) => m.PortfolioModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
