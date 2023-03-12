import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PortfolioComponent} from "./portfolio.component";

const routes: Routes = [
  {
    path: "",
    component: PortfolioComponent,
    children: [
      {
        path: "documentation",
        loadChildren: () => import("../documentation/documentation.module").then((m)=> m.DocumentationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
