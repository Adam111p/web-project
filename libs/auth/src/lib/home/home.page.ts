import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
  imports: [],
})
export class HomePage implements AfterViewInit {
  data: any;
  @ViewChild('egzaple')
  txInput!: ElementRef;

  ngAfterViewInit(): void {
    const inp = this.txInput.nativeElement;
    console.log(inp);
    const input$ = fromEvent(inp, 'keyup');
    
    input$.subscribe({
      next: (v) => {
        console.log('next', v);
      },
      complete: () => {
        console.log('Complete');
      },
      error: (v) => {
        console.log('error', v);
      },
    });
  }

}
function fromEvent<T = Event>(el: any, evnNAme: string): Observable<any> {
 //Constóktor
  return new Observable(subscrible => {
   
    function onEvent(e: any) {
      console.log('on Ivent', e);
      subscrible.next(e);
   }
    el.addEventListener(evnNAme, onEvent)
    
  }

  );
  
}
