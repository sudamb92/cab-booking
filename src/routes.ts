import express from 'express';
import { CabBooking } from './service/cab-booking';
import { ValidateReqBodyData } from './validation/validate-req-data';
import { ResponseDTO } from './response-dto/response-dto';
import { Authorization } from './authorization';

const router = express.Router();
const cabBooking = new CabBooking();
const validateReqBodyData = new ValidateReqBodyData();
const responseDTO = new ResponseDTO();
const authorization = new Authorization();

router.post('/cabBookingRequest', authorization.autherized ,(req, res, next) => {
    if(!validateReqBodyData.validateCabBookingRequest(req.body)) {
        res.json(responseDTO.responseObjectDTO(422, "Invalid data", null));
    } else {
        cabBooking.cabNearBySourceLocation(req, res);
    }
});

router.get('/pastBooking/:id', authorization.autherized, (req, res, next) => {
    cabBooking.getPastBookingByUserId(req.params.id, res);
})

export default router;
