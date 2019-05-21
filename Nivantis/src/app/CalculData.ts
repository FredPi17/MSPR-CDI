export class CalculData {

    constructor(
        private _tauxRemise: number,
        private _prixAchatNet: number,
        private _prixVenteNet: number,
        private _prixAchatBrut: number,
        private _coefficient: number
    ) {
        this._tauxRemise = _tauxRemise;
        this._prixAchatBrut = _prixAchatBrut;
        this._coefficient = _coefficient;
        this._prixVenteNet = _prixVenteNet;
        this._prixAchatNet = _prixAchatNet;
    }


    get tauxRemise(): number {
        if (this._prixAchatBrut != 0) {
            return this.round(((1 - ( this._prixAchatNet / this._prixAchatBrut)) * 100),2);
        } else {
            return 0;
        }
    }

    set tauxRemise(value: number) {
        this._tauxRemise = value;
        this._prixAchatNet = this.prixAchatNet;

    }

    get prixAchatNet(): number {
        return this.round(this._prixAchatBrut * (1 - (this._tauxRemise / 100)),2);
    }

    set prixAchatNet(value: number) {
        this._prixAchatNet = value;
        this._tauxRemise = this.tauxRemise;
        this._prixVenteNet = this.prixVenteNet;
    }

    get prixVenteNet(): number {
        return this.round(this._prixAchatNet * this._coefficient,2);
    }

    set prixVenteNet(value: number) {
        this._prixVenteNet = value;
        this._prixAchatNet = this.prixAchatNet;
        this._coefficient = this.coefficient;
    }

    get prixAchatBrut(): number {
        return this._prixAchatBrut;
    }

    set prixAchatBrut(value: number) {
        this._prixAchatBrut = value;
        this._tauxRemise = this.tauxRemise;
        this._coefficient = this.coefficient;
        this._prixAchatNet = this.prixAchatNet;
        this._prixVenteNet = this.prixVenteNet;
    }

    get coefficient(): number {
        if (this._prixAchatNet != 0) {
            return this.round((this._prixVenteNet / this._prixAchatNet), 2);
        } else {
            return 0;
        }
    }

    set coefficient(value: number) {
        this._coefficient = value;
        this._prixVenteNet = this.prixVenteNet;
        this._prixAchatNet = this.prixAchatNet;
    }

    round(number, precision) {
        var factor = Math.pow(10, precision);
        var tempNumber = number * factor;
        var roundedTempNumber = Math.round(tempNumber);
        return roundedTempNumber / factor;
    }
}
