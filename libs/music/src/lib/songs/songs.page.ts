import { ChangeDetectionStrategy, Component, Input, ViewChild, inject } from '@angular/core';
import { SongsStore } from './songs.store';
import { Song } from '@asseco/api-client';
import { MatSort } from '@angular/material/sort';
import { UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'asseco-songs',
  templateUrl: './songs.page.html',
  styleUrls: ['./songs.page.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SongsStore],
})
export class SongsPage {
  [x: string]: any;
  store = inject(SongsStore);

  rows = 4;

  private fb = inject(UntypedFormBuilder);

  filtersForm = this.fb.group({
    q: ['query', [], []],
    year: ['year', [], []],
  });

  ngOnInit(): void {
    this.store.init();
  }
  submitFilters() {
    const filters= this.filtersForm.value;
   // this.store.filters = filtersForm.value;
  }
  
}
