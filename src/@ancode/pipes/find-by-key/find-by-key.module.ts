import { NgModule } from '@angular/core';
import { AncodeFindByKeyPipe } from '@ancode/pipes/find-by-key/find-by-key.pipe';

@NgModule({
    declarations: [
        AncodeFindByKeyPipe
    ],
    exports     : [
        AncodeFindByKeyPipe
    ]
})
export class AncodeFindByKeyPipeModule
{
}
