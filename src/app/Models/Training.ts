import { LVL } from "./LVL";
import { Technology } from "./Technology";
import { TypeTraining } from "./TypeTraining";

export class Training{
    idTraining!:number;
    titleTraining!:string;
    descriptionTraining!:string;
    durationTraining!:string ;
    subjectTraining!:Technology ;
    levelTraining!:LVL ;
    priceTraining!:number ;
    stateTraining!:number ;
    typeTraining!:TypeTraining ;
}