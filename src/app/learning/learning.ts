import { Component } from '@angular/core';
import { Timeline } from 'primeng/timeline';
import { NgClass } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { Dialog } from 'primeng/dialog';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-learning',
  imports: [Timeline, NgClass, MatIcon, Dialog, Button],
  templateUrl: './learning.html',
  styleUrl: './learning.css',
})
export class Learning {
  isaqbVisible: boolean = false;
  itilVisible: boolean = false;
  oracleVisible: boolean = false;

  events: any[];

  constructor() {
    this.events = [
      {
        status: 'DB Systel GmbH, Senior Developer',
        date: 'August 2023 - heute',
        name:
          'Digitalisierung der internen Prozesse der Deutschen Bahn im ' +
          'Bereich des Balisenmanagements. Entwicklung in einem agilen ' +
          'Team und Zusammenarbeit mit DB InfraGo.',
        type: 'business_center',
      },
      {
        status: 'Virtual7 GmbH, Senior Developer',
        date: 'Januar, 2023 - Juli, 2023',
        name:
          'Einsatz in der IT Landschaft des Kunden ' +
          '( Informationstechnik Zentrum Bund, Projekt beim Zollkriminalamt in Hamburg )',
        type: 'business_center',
      },
      {
        status: 'DATEV eG, Fullstack Developer',
        date: 'Januar, 2019 - Dezember, 2022',
        name: 'Softwareentwicklung für Steuerberatung und Wirtschaftsprüfung in agilen, crossfunktionalen Teams',
        type: 'business_center',
      },
      {
        status: 'ISO Software Systeme GmbH, Java Developer',
        date: 'September, 2012 - Dezember, 2018',
        name:
          'Einsatz in der IT Landschaft des Kunden' +
          ' (Bundesagentur für Arbeit, Digitalisierung der ' +
          'internen Prozesse )',
        type: 'business_center',
      },
      {
        status: 'ISAQB® Foundation Level - Grundlagen für Software Architektur',
        date: 'Februar, 2015',
        type: 'menu_book',
        key: '1',
      },
      {
        status: 'OCJP Java SE6 Oracle Certified Professional',
        date: 'Dezember, 2014',
        type: 'menu_book',
        key: '2',
      },
      {
        status: 'ITIL Foundation Level',
        date: 'März, 2012',
        type: 'menu_book',
        key: '3',
      },
      {
        status: 'Cosmino AG, Java Developer',
        date: 'September, 2011 - August, 2012',
        name: 'Softwareentwicklung für Industrie 4.0 Schwerpunkt Automobilindustrie Projektarbeit, Bachelorarbeit',
        type: 'business_center',
      },
      {
        status: 'Bachelor of Science',
        date: 'Februar, 2012',
        name: 'Fachhochschule Hof, Medieninformatik',
        type: 'school',
      },
      {
        status: 'Abitur',
        date: 'Juli, 2008',
        name: 'Hans-Sachs-Gymnasium, Nürnberg',
        type: 'school',
      },
    ];
  }

  showIsaqb() {
    this.isaqbVisible = true;
  }

  showItil() {
    this.itilVisible = true;
  };

  showOracle() {
    this.oracleVisible = true;
  }
}
