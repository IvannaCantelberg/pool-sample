import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandLogoComponent } from 'src/app/brand-logo/brand-logo.component';
import { UrlSerializer } from '@angular/router';
import { SvgIconComponent } from 'src/app/icons/svg-icon/svg-icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, BrandLogoComponent, SvgIconComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  constructor(private URL: UrlSerializer) { }
  protected readonly instagramIcon = this.URL.parse('assets/icons/instagram.svg');
}
