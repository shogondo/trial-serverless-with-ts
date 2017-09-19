export default class User {
    private email: string;

    constructor() {
    }

    create(data) {
        this.email = data.email;
        console.log("Created a new user.");
    }

    toJson() {
        return { email: this.email };
    }
}
