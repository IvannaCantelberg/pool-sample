import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
  standalone: true
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) { }
  transform(value: string | null): SafeHtml | string {
    if (!value) return '';
    return this.sanitized.bypassSecurityTrustHtml(value);
  }

}
