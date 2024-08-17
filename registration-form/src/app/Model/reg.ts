export class Reg {

    constructor(
        public firstName: string,
        public lastName: string,
        public email : string,
        public  gender  : string,
        public address   : [
            street:string, country: string,city: string, postal:string, region: string
        ],
        public  skills  : [],
        public experience   : [],
        
    ){}
}
