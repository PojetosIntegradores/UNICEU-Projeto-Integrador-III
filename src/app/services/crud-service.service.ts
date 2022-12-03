import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment as env } from '../../environments/environment';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  baseUrl = env.baseUrl
  parametroComponet: string;

  constructor(
    private http: HttpClient,
    private toastController: ToastController
  ) { }


  /* Observable Padrão baseado em evento,
  Create recebe o post atravez do parametro `product`
  */
  retornaUrl() {
    let url = this.baseUrl + this.parametroComponet;
    return url
  }
  create(params: any): Observable<any> {
    return this.http.post<any>(this.retornaUrl(), params).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }
  
  /* Read retorna um get como array da api 
  */
  read(): Observable<any[]> {
    console.log(this.retornaUrl());
    return this.http.get<any[]>(this.retornaUrl()).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  /* Para pegar o id do produto */
  readById(id: number): Observable<any> {
    const url = `${this.retornaUrl()}/${id}`
    return this.http.get<any>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(parms: any): Observable<any> {
    const url = `${this.retornaUrl()}/${parms.id}`
    return this.http.put<any>(url, parms).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<any> {
    const url = `${this.retornaUrl()}/${id}`
    return this.http.delete<any>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    this.presentToast('top', 'Erro tente novamente mais tarde!')
    return EMPTY
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 1500,
      position: position,
      buttons: [
        {
          text: 'X',
          role: 'cancel'
        }
      ],
    });
    await toast.present();
  }

}