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

    private static convertErrorToResponse(error: Error) {
        return {
            statusCode: 500,
            body: "{}"
        };
    }
}
