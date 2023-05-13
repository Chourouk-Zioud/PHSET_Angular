import { User } from "./User";
import { Account } from "./account";


export class Inscription {
    idInscription!: number;
    dateInscription!: Date;
    cv!: string;
    coverLetter!: string;
    classStudent!: string;
    departProf!: string;
    account!: Account  ;
    user !: User ;

    }