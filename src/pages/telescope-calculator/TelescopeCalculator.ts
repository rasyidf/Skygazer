export class TelescopeCalculator {
    private scopeAperture: number;
    private scopeFocalRatio: number;
    private eyepieceFocalLength: number;
    private eyepieceApparentField: number;
    private barlowLens: number;
    private focalReducer: number;

    constructor(scopeAperture: number, scopeFocalRatio: number, eyepieceFocalLength: number, eyepieceApparentField: number, barlowLens: number = 1, focalReducer: number = 1) {
        this.scopeAperture = scopeAperture;
        this.scopeFocalRatio = scopeFocalRatio;
        this.eyepieceFocalLength = eyepieceFocalLength;
        this.eyepieceApparentField = eyepieceApparentField;
        this.barlowLens = barlowLens;
        this.focalReducer = focalReducer;
    }

    // Calculate telescope focal length
    public calcFocalLength(): number {
        return this.scopeAperture * this.scopeFocalRatio;
    }

    // Calculate magnification
    public calcMagnification(): number {
        return (this.calcFocalLength() * this.barlowLens) / (this.eyepieceFocalLength * this.focalReducer);
    }

    // Calculate true field of view
    public calcTrueFieldOfView(): number {
        return this.eyepieceApparentField / this.calcMagnification();
    }

    // Calculate exit pupil
    public calcExitPupil(): number {
        return this.scopeAperture / this.calcMagnification();
    }

    // Calculate theoretical resolving power
    public calcTheoreticalResolvingPower(): number {
        return 116 / this.scopeAperture;
    }

    // Calculate approximate limiting magnitude of the telescope
    public calcLimitingMagnitude(): number {
        return 2 + 5 * Math.log10(this.scopeAperture);
    }
}
