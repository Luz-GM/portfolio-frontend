import { Component, OnInit } from '@angular/core';
import { Modelskill } from 'src/app/model/modelskill';
import { ServiceskillService } from 'src/app/service/serviceskill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skill: Modelskill[] = [];

  constructor(
    private skillS: ServiceskillService,
    private tokenService: TokenService
  ) {}
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillS.lista().subscribe((data) => {
      this.skill = data;
    });
  }

  delete(id: number) {
    if (id != undefined) {
      this.skillS.delete(id).subscribe(
        (data) => {
          this.cargarSkills();
        },
        (err) => {
          alert('No se pudo borrar la skill');
        }
      );
    }
  }
}
