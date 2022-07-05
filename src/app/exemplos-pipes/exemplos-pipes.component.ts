import { Component, OnInit } from '@angular/core';
import { Observable, interval, map } from 'rxjs';
 

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  book: any =
  {
    title: 'Lady killers: Assassinas em série',
    rating: 4.9,
    pages: 384,
    price: 64.90,
    publishmentDate: new Date(2019, 0, 1),
    url: 'https://www.darksidebooks.com.br/lady-killers--assassinas-em-serie---drk-x/p'
  };

  books: string[] = ['O Colecionador','Stranger Fans','Arquivos Serial Killers: Made in Brazil e Louco ou cruel','Drácula de Bram Stoker'];

  filtro: string;
  novoLivro: string;

  addLivro()
  {
    this.books.push(this.novoLivro);
    this.novoLivro = '';
  }

  obterLivros()
  {
    if(this.books.length === 0 || this.filtro === undefined || this.filtro.trim() === '')
    {
      return this.books;
    }
    
    return this.books.filter((v => 
    {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) { return true; } return false;
    }))
    
  }

  valorAsync = new Promise((resolve, reject) => 
  {
  setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

  valorAsync2 = interval(2000).pipe(map(valor => 'Valor assíncrono 2'));

  constructor() { }

  ngOnInit(): void {
  }

}
