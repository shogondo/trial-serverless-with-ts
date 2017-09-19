import Utils from "./utils";
import User from "../models/user";

export function users(event, context, callback) {
    Utils.processHttpRequest(event, context, callback, {
        model: new User()
    });
}

export function createUser(event, context, callback) {
    Utils.processRequest(event, context, callback, (params) => {
        let user = new User();
        user.create(params);
        return user.toJson();
    });
}

export function updateUser(event, context, callback) {
    Utils.processRequest(event, context, callback, (params) => {
        let user = new User();
        user.update(params);
        return user.toJson();
    });
}

