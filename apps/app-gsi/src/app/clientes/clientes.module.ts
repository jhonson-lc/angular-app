import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClientesRoutingModule } from "./clientes-routing.module";
import { PageListComponent } from "./pages/page-list/page-list.component";
import { FormComponent } from "./components/form/form.component";
import { SharedModule } from "../shared/shared.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [PageListComponent, FormComponent],
  imports: [CommonModule, ClientesRoutingModule, SharedModule, FlexLayoutModule],
})
export class ClientesModule {}
