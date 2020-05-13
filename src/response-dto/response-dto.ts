export class ResponseDTO {
    responseObjectDTO(status: number, msg: string, data: any) {
        return {
            'status': status,
            'message': msg,
            'data': data
        }
    }
}