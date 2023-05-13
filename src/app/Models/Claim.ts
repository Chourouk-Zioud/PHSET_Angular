import { Decission } from "./Decission";
import { Account } from "./account";

export class Claim {
    idClaim!: number;
    object!: string;
    content!: string;
    etat!: string;
    dateClaim!: string;
    image!: ArrayBuffer; 
    decission!:Decission  ; 
    account!:Account;
    
}