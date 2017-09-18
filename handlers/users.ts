import Utils from "./utils";
import User from "../models/user";

export function createUser(event, context, callback) {
    Utils.respond(callback, () => {
        let user = new User();
        user.create(event);
        return user.toJson();
    });
}