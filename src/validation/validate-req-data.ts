export class ValidateReqBodyData {
    /**
     * validate lat and long is in degree
     * @param data 
     */
    validateCabBookingRequest(data: any) {
        return (this.isNumber(data.sourceLocation.lat) && this.isNumber(data.sourceLocation.long))
    }

    /**
     * check item is number or not
     * @param item 
     */
    isNumber(item: any) {
        return !isNaN(item);
    }
}