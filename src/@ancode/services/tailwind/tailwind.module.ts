import { NgModule } from "@angular/core";
import { AncodeTailwindService } from "@ancode/services/tailwind/tailwind.service";

@NgModule({
    providers: [ AncodeTailwindService]
})

export class AncodeTailwindConfigModule{
    constructor(private _ancodeTailwindConfigService: AncodeTailwindService){}
}