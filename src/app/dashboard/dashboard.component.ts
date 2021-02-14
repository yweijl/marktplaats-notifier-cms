import { Component, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { QueryClient, Query, NewQueryDto, Advertisement } from '../http.clients/api.client'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  queries: Query[];
  selectedQuery: Query;
  selectedQueryId: number;
  newQuery = false;
  newQueryForm: FormGroup;
  Adds: Observable<Advertisement[]>;
  isProcessing: boolean = false;
  errorOccured: false;

  ngOnInit(): void {
    this.queryClient.getList(1).subscribe(response => {
      this.queries = response;
    })
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.newQueryForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'url': new FormControl(null, Validators.required)
    });
  }

  constructor(
    private queryClient: QueryClient, 
    private _snackBar: MatSnackBar,
    private ref: ChangeDetectorRef) { }

  showErrorMessagse() {
    const snackbar = this._snackBar.open("Er is iets misgegaan tijdens het laden van de data", "OK");
    snackbar.afterDismissed().subscribe(() => {
      this.errorOccured = false;
      this.isProcessing = false;
      this.ref.detectChanges();
    });
  }

  onNewQuery() {
    this.newQuery = true;
    this.selectedQuery = null;
  }

  onRemoveQuery(id: number) {
    if (!id) {
      throw new Error('invalid id');
    }

    const index = this.queries.findIndex(x => x.id === id);
    if (index < 0) {
      return;
    }
    this.queries.splice(index, 1);
    if (this.selectedQuery?.id === id) {
      this.selectedQuery = null;
    }

    this.queryClient.delete(id).subscribe();
  }

  onSetSelectedQuery(id: number) {
    this.newQuery = false;
    this.selectedQuery = this.queries.find(x => x.id === id);
    this.selectedQueryId = id;
  }

  onSave() {
    if (this.newQuery) {
      this.saveNewQuery();   

    } else {
      this.updateQuery();

    }
  }

  updateQuery(){
    this.isProcessing = true;
    this.queryClient.put(this.selectedQuery).subscribe(() => {
      this.isProcessing = false;
    })
  }

  saveNewQuery() {
    this.isProcessing = true;
    var dto = new NewQueryDto({
      name: this.newQueryForm.get('name').value,
      url: this.newQueryForm.get('url').value,
      userId: 1
    });

    this.queryClient.post(dto).subscribe(response => {
      this.queries.push(response);
      this.newQueryForm.reset();
      this.onSetSelectedQuery(response.id);
      this.isProcessing = false;
    })
  }

  onRunQuery(queryId:number) {
    this.isProcessing = true;
    this.selectedQuery = this.queries.find(x => x.id == queryId);

    this.queryClient.scrapeAdverstisements(1, queryId).subscribe(response => {
      this.selectedQuery.advertisements.push(...response);
      this.isProcessing = false;
    }, error => {
      this.showErrorMessagse()

    })
  }
}
