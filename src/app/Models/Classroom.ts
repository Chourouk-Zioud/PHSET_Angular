import { BlocEsprit } from "./BlocEsprit";
import { ClassState } from "./ClassState";
import { Interview } from "./Interview";

export class Classroom {
    
    idClass!:number;
    nameClass!:string;
    capacityClass!:number;
    stateClass!:string;
    BlocEsprit!: BlocEsprit;
    classStates!: ClassState;
    interviews!: Interview;
}