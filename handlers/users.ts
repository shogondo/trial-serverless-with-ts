import Utils from "./utils";
import User from "../models/user";

export function createUser(event, context, callback) {
    Utils.processRequest(event, context, callback, (params) => {
        let user = new User();
        user.create(params);
        return user.toJson();
    });
}
