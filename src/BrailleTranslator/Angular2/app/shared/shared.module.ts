import {NgModule} from "@angular/core";
import {NavComponent} from "./nav.component";
import {BrailleFooterComponent} from "./braille-footer.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [NavComponent, BrailleFooterComponent],
    imports: [CommonModule, RouterModule],
    exports: [CommonModule, NavComponent, BrailleFooterComponent]
})
export class SharedModule {}
