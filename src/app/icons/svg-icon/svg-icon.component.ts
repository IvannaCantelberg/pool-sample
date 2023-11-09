import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Subject } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { SafeHtmlPipe } from 'src/app/pipes/safe-html.pipe';


@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [CommonModule, HttpClientModule, SafeHtmlPipe],
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SvgIconComponent implements OnInit, OnDestroy {
  @Input() icon: string = '';

  public svgContents$!: Observable<string>;

  private readonly onDestroy$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let iconName = `${this.icon}.svg`;
    this.svgContents$ = this.http.get(`./assets/icons/${iconName}`, { responseType: 'text' })
      .pipe(
        catchError(val => of(`I caught: ${val}`)),
      );
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}




