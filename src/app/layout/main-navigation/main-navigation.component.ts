import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrandLogoComponent } from '../../brand-logo/brand-logo.component';

@Component({
  selector: 'app-main-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule, BrandLogoComponent],
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class MainNavigationComponent {

}
