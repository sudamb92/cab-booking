import { ResponseDTO } from './response-dto/response-dto';

const responseDTO = new ResponseDTO();

export class Authorization {
    autherized(req: any, res: any, next: any) {
        if (req.headers.acessToken) {
            // @TODO Verify access token is valid or in-valid 
            next();
        } else {
            res.json(responseDTO.responseObjectDTO(401, "Unauthrized", null));
        }
    }
}