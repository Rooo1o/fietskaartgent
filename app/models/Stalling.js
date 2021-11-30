export default class Stalling {
    locatie = "";
    bezetting = "";
    vrijePlaatsen = 0;
    totalePlaatsen = 0;
    coördinaten = [];
    
    constructor(locatie, bezetting, vrijePlaatsen, totalePlaatsen, coördinaten){
        this.locatie = locatie;
        this.bezetting = bezetting;
        this.vrijePlaatsen = vrijePlaatsen;
        this.totalePlaatsen = totalePlaatsen;
        this.coördinaten = coördinaten;
    }
}