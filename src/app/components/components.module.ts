import { NgModule } from '@angular/core';
import { GraficosComponent } from './graficos/graficos.component';

import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
        GraficosComponent,
    ],
    exports: [GraficosComponent,
        ],
    imports: [ChartsModule]
})
export class ComponentsModule {}
