import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-televisor-list',
  templateUrl: './televisor-list.component.html',
  styleUrls: ['./televisor-list.component.css']
})
export class TelevisorListComponent implements OnInit {
  televisores = [
    {
      marca: 'Samsung',
      tamanoPantalla: '55"',
      resolucion: '4K',
      descripcion: 'Televisor UHD con Smart TV',
      funcionesAdicionales: 'Wi-Fi, HDMI, USB',
      precio: 899.99,
      descripcionGarantia: 'Garantía de 2 años',
      fechaCreacion: new Date('2023-01-01')
    }
    // Puedes añadir más objetos de televisor aquí
  ];

  constructor() { }

  ngOnInit(): void { }
}
