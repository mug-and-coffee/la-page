import { Component } from '@angular/core';

export interface SkillCard {
  title: string,
  description: string
  bulletPoints: string [];
}
@Component({
  selector: 'app-tech-skills',
  imports: [],
  templateUrl: './tech-skills.html',
  styleUrl: './tech-skills.css',
})
export class TechSkills {

  skills: SkillCard[] = [];

  constructor() {
    this.skills.push({
      title: 'JAVA',
      description:
        'Ein Öko-System als Grundlage für skalierbare und stabile Enterprise-Anwendungen.',
      bulletPoints: ['SpringBoot', 'REST API Design', 'JPA', 'Bean Validation'],
    });
    this.skills.push({
      title: 'Datenbanken',
      description: 'Modellierung klarer Datenstrukturen für Datenintegrität, Performance, Effizienz und Konsistenz',
      bulletPoints: ['PostgreSQL',
        'MongoDB',
        'SQL',
        'Schema Design'],
    });
    this.skills.push({
      title: 'Architekrut',
      description: 'Klare Strukturen schaffen, die Komplexität reduzieren und Wartbarkeit ermöglichen',
      bulletPoints: [
        'Domain Driven Design',
        'Layered Architecture',
        'Microservices'
      ],
    });
    this.skills.push({
      title: 'Testing & Quality',
      description: 'Fester Bestandteil der (Weiter-) Eintwicklung und Wartung, gehört zum Prozess genauso wie die Archtiektur',
      bulletPoints: [
        'JUnit und Mocking',
        'Contract Testing',
        'Testdriven Design'
      ],
    });
    this.skills.push({
      title: 'Build & Delivery',
      description: 'Reproduzierbare Builds, automatisierte Pipelines und Staging für jeden Schritt von Dev bis Prod',
      bulletPoints: ['Maven', 'Jenkins', 'Git'],
    });
  }

}
