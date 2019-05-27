export class CalculData {

    constructor(
        private _prixAchatBrut?: number,
        private _tauxRemise?: number,
        private _prixVenteNet?: number,
    ) {
        this._prixAchatBrut = _prixAchatBrut;
        this._tauxRemise = _tauxRemise;
        this._prixVenteNet = _prixVenteNet;
    }



    get prixAchatBrut(): number {
        return this._prixAchatBrut;
    }

    set prixAchatBrut(value: number) {
        this._prixAchatBrut = value;
    }

    get tauxRemise(): number {
        return this._tauxRemise;
    }

    set tauxRemise(value: number) {
        this._tauxRemise = value;
    }

    get prixVenteNet(): number {
        return  this._prixVenteNet;
    }

    set prixVenteNet(value: number) {
        this._prixVenteNet = value;
    }


    get prixAchatNet(): number {
        return this.round(this._prixAchatBrut * (1 - (this._tauxRemise / 100)),2);
    }

    set prixAchatNet(value: number) {
        if ( this.prixAchatBrut == 0) {
            this._tauxRemise = 0;
        } else {
            this._tauxRemise = this.round((1 - (value / this._prixAchatBrut)) * 100,2);
        }
    }

    get coefficient(): number {
        if (this.prixAchatNet != 0)
        {
            return this.round((this._prixVenteNet / this.prixAchatNet), 2);
        } else {
            return 0;
        }
    }

    set coefficient(value: number) {
        this._prixVenteNet = this.round(this.prixAchatNet * value,2);
    }

    round(number, precision) {
        var factor = Math.pow(10, precision);
        var tempNumber = number * factor;
        var roundedTempNumber = Math.round(tempNumber);
        return roundedTempNumber / factor;
    }
}
