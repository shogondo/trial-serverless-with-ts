export class ResourceNotFoundError implements Error {
    constructor(readonly message: string) {
    }

    public get name() {
        return "ResourceNotFoundError";
    }

    public toString() {
        return this.name + ": " + this.message;
    }
}
