export interface City {
    country : string
    city : string
    image : string
}

export class Weather {
    constructor (
        public cityName : string,
        public temp : number,
        public pressure : number,
        public humidity : number,
        public description: string,
        public windSpeed : number,
        public windDegree : number,
    ) {}
    
}