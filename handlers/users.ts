import Utils from "./utils";
import User from "../models/user";

export function users(event, context, callback) {
    Utils.processHttpRequest(event, context, callback, {
        model: new User()
    });
}