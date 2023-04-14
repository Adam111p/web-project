import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Injectable, inject } from '@angular/core';
import { Artist, Song } from '@asseco/api-client';
import { Observable, delay, switchMap } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Sort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';
import { tapStore } from '../data.store';

export interface SongsState {
  songs: Song[];
  sort: Sort;
  page: PageEvent;
  error?: HttpErrorResponse;
  loading: boolean;
  filters: SongFilters;
}
export interface SongFilters {
  q?: string;
  year?: string;
}
const initState: SongsState = {
  loading: false,
  songs: [],
  sort: {
    active: 'title',
    direction: 'asc',
  },
  page: {
    length: 40,
    pageIndex: 0,
    pageSize: 5,
  },
  filters: {},
};

@Injectable({
  providedIn: 'root',
})
export class SongsStore extends ComponentStore<SongsState> {
  private baseUrl = 'http://localhost:3000';
  private http = inject(HttpClient);

  loading$ = this.select((s) => s.loading);
  songs$ = this.select((s) => s.songs);
  page$ = this.select((s) => s.page);
  sort$ = this.select((s) => s.sort);

  columns = [
    'id',
    'title',
    'year', //'artist', 'url'
  ];

  constructor() {
    super(initState);
    this.state$.subscribe((s) => console.log(s));
  }

  set sort(sort: Sort) {
    this.patchState({
      sort,
      page: {
        ...this.page,
        pageIndex: 0,
      },
    });
    this.init();
  }

  get sort(): Sort {
    return this.get().sort;
  }

  set page(page: PageEvent) {
    this.patchState({ page });
    this.init();
  }

  get page(): PageEvent {
    return this.get().page;
  }

  set filters(filters: SongFilters) {
    this.patchState({ filters });
    this.init();
  }

  get filters(): SongFilters {
    return this.get().filters;
  }
  readonly init = this.effect((data$: Observable<void>) => {
    return data$.pipe(
      switchMap(() => {
        const params = {
          ...this.get().filters,
          _sort: this.sort.active,
          _order: this.sort.direction,
          _page: this.page.pageIndex + 1,
          _limit: this.page.pageSize,
        };
        return this.http
          .get<Song[]>(this.baseUrl + '/songs', { params, observe: 'response' })
          .pipe(
            tapStore(this, (res) =>
              this.patchState({
                songs: res.body || [],
                page: {
                  ...this.page,
                  length: parseInt(res.headers.get('x-total-count') || '0'),
                },
              })
            )
          );
      })
    );
  });
}
