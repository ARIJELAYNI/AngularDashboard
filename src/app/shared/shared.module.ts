import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    FlexLayoutModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent 
  ]
})
export class SharedModule { }
