import { Speciality } from "./Speciality";
import { TypeContract } from "./TypeContract";
import { TypeGrid } from "./TypeGrid";

export class Offer {
    
    idOffer!:number;
    titleOffer!:string;
    descriptionOffer!:string;
    speciality!:Speciality;
    typeContract!:TypeContract;
    salaryOffer!:number;
    offerType!:TypeGrid;

}




 