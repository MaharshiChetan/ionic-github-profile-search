import { RepositoriesComponent } from './repositories/repositories.component';
import { IonicModule } from 'ionic-angular';
import { SearchResultsComponent } from './search-results/search-results.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        SearchResultsComponent,
        RepositoriesComponent,
    ],
    imports: [ IonicModule ],
    exports: [
        SearchResultsComponent,
        RepositoriesComponent
    ]
})

export class ComponentsModule {
    
}