import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modelskill } from 'src/app/model/modelskill';
import { ServiceskillService } from 'src/app/service/serviceskill.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css'],
})
export class NewSkillsComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private skillS: ServiceskillService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const skill = new Modelskill(this.nombre, this.porcentaje);
    this.skillS.save(skill).subscribe(
      (data) => {
        alert('Skill creada correctamente');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Fallo al añadir la skill');
        this.router.navigate(['']);
      }
    );
  }
}
