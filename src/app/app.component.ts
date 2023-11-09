import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, inject } from '@angular/core';
import { Router, RouterOutlet, RoutesRecognized } from '@angular/router';
import { MainNavigationComponent } from './layout/main-navigation/main-navigation.component';
import { FooterComponent } from './layout/footer/footer.component';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainNavigationComponent, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnDestroy {
  private readonly destroy$ = new Subject<void>();
  private router = inject(Router);
  protected hasBgImage: boolean = false;


  constructor(private cdr: ChangeDetectorRef) {
    this.router.events
      .pipe(takeUntil(this.destroy$))
      .subscribe(((data) => {
        if (data instanceof RoutesRecognized) {
          console.log(data.state.root.firstChild?.data['imageBg']);
          this.hasBgImage = data.state.root.firstChild?.data['imageBg'];
          this.cdr.markForCheck();
        }
      }));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
