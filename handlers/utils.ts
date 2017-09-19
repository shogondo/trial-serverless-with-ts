export default class Utils {
    public static processHttpRequest(event, context, callback, args) {
        console.log("Request", event);
        let model = args.model;
        let params = this.buildRequestParameters(event);
        let action = this.decideAction(event.httpMethod, params);

        try {
            let result = model[action](params);
            let response = {
                statusCode: 200,
                body: JSON.stringify(result)
            }
            callback(null, response);
        }
        catch (error) {
            callback(this.convertErrorToResponse(error));
        }
    }

    public static processRequest(event, context, callback, action) {
        console.log("Request", event);
        try {
            let params = this.convertEventDataToRequestParams(event);
            let result = action(params);
            let response = {
                statusCode: 200,
                body: JSON.stringify(result)
            }
            callback(null, response);
        }
        catch (error) {
            callback(this.convertErrorToResponse(error));
        }
    }

    private static buildRequestParameters(event) {
        return {};
    }

    private static decideAction(method, params): string {
        switch (method) {
            case "GET":
                return "search";
            case "POST":
                return "create";
            case "PUT":
            case "PATCH":
                return "update";
        }
    } 

    private static convertEventDataToRequestParams(event) {
        if (event && event.body) {
            return JSON.parse(event.body);
        }
        else {
            return {};
        }
    }

    private static convertErrorToResponse(error: Error) {
        return {
            statusCode: 500,
            body: "{}"
        };
    }
}
