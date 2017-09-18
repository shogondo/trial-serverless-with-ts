export default class Utils {
    public static respond(callback, action) {
        try {
            let result = action();
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

    private static convertErrorToResponse(error: Error) {
        return {
            statusCode: 500,
            body: "{}"
        };
    }
}