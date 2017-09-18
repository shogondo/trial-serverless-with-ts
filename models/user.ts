export default class User {
    private email: string;

    constructor() {
    }

    create(data) {
        this.email = data;
        console.log("Created a new user.");
    }

    toJson() {
        return { email: this.email };
    }
}