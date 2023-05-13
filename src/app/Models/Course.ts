import { Byte } from "@angular/compiler/src/util";
import { Technology } from "./Technology";

export class Course {
  idCours!: number;
  nameCours!: string;
  descriptionCours!: string;
  creditCours!: number;
  professorCours!: string;
  unit!: string;
  technology!: string;
  // picture!: Byte[];
  // pdf!: Byte[];
  // video!: Byte[];
}
