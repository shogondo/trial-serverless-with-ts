import * as error from "./error";

export default class User {
    private email: string;

    constructor() {
    }

    create(data) {
        this.email = data.email;
        console.log("Created a new user.");
    }

    update(data) {
        throw new error.ResourceNotFoundError("User not found.");
    }

    toJson() {
        return { email: this.email };
    }
}
