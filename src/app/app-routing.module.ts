import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreatedComponent } from "./components/created/created.component";
import { HomeComponent } from "./components/home/home.component";
import { UpdatedComponent } from "./components/updated/updated.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "create", component: CreatedComponent },
  { path: "edit/:id", component: UpdatedComponent },
  { path: "", pathMatch: "full", component: HomeComponent },
  { path: "**", pathMatch: "full", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
