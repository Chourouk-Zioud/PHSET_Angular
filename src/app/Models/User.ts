import { Inscription } from "./Inscription";
import { Interview } from "./Interview";
import { Offer } from "./Offer";

export class User {
    idUser!: number;
    firstName!: string;
    lastName!: string;
    cin!: number;
    email!: string;
    phone!: string;
    address!: string;
    files!: string[];
    password!: string;
    passport!: string;
    birthDate!: Date;
    civility!: string;
    nationality!: string;
    role!: string;
    userAvailabilities!: any[]; 
    inscription!: Inscription; 
    interview!: Interview;
    interviewJury!: Interview[];
	passeport!:number;
    Confirmemail!:string;
    cv!:string;
    lm!:string;
    LieudeNaissance!:string;
    Gouvernorat!:string;
    Offer!:Offer;
    }
	
	
    