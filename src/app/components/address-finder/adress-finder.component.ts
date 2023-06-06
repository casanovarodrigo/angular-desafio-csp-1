import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AddressFromApi {
  bairro: string
  cep: string
  complemento: string
  ddd: string
  gia: string
  ibge: string
  localidade: string
  logradouro: string
  siafi: string
  uf: string
  erro: boolean
}

@Component({
  selector: 'adress-finder',
  templateUrl: './adress-finder.component.html',
  styleUrls: ['./adress-finder.component.scss']
})
export class AddressFinderComponent {
  constructor(private http: HttpClient) {}

  title = 'angular-desafio-1';

  postalCode: string = ''
  road: string = ''
  addressNumber: string = ''
  complement: string = ''
  state: string = ''
  city: string = ''
  district: string = ''
  generalError: string = ''

  onInputCep(){
    if (this.postalCode.length === 8){
      this.http.get<AddressFromApi>(`https://viacep.com.br/ws/${this.postalCode}/json/`)
      .subscribe(res => {
        if(res.erro){
          this.generalError = 'Cep inválido'
          this.road = ''
          this.complement = ''
          this.state = ''
          this.city = ''
          this.district = ''
          return
        }

        this.generalError = ''
        this.road = res.logradouro
        this.complement = res.complemento
        this.state = res.uf
        this.city = res.localidade
        this.district = res.bairro
      })
    }
  }
}
