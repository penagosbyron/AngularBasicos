import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { Listado2Component } from './listado2/listado2.component';


@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent,
        Listado2Component
    ],
    exports: [
        ListadoComponent,
        Listado2Component
    ],
    imports: [
        CommonModule
    ]

})
export class HeroesModule {}