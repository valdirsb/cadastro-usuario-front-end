import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { IUser } from './IUsers';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  obterTodos(){
    return this.httpClient.get<IUser[]>(`${API_PATH}users/list`).toPromise();
  }

  obterPorId(id: String){
    return this.httpClient.get<IUser>(`${API_PATH}users/${id}`);
  }

  adicionar(user: IUser){
    return this.httpClient.post<IUser>(`${API_PATH}users/`, user).toPromise();
  }

  atualizar(user: IUser){
    return this.httpClient.put<IUser>(`${API_PATH}users/${user.id}`, user).toPromise();
  }

  delete(userId: number){
    return this.httpClient.delete<void>(`${API_PATH}Carros/${userId}`).toPromise();
  }


}
