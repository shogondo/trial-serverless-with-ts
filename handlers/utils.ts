export default class Utils {
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
