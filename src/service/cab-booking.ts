import { ResponseDTO } from '../response-dto/response-dto';
import { DemoData } from '../demo-data';

const responseDTO = new ResponseDTO();
const demoData = new DemoData();

export class CabBooking {
    filterCabs: any;

    constructor() {
    }

    /**
     * Fetch all cabs near by user current location 
     * @param req 
     * @param res 
     */
    cabNearBySourceLocation(req: any, res: any) {
        const sourceLocation = req.body.sourceLocation;
        const cabDetails = this.filterCabsFromDB(req.body.userId, req.body.sourceLocation);
        const cabsUnderFiveKmDistance = cabDetails.filter((cab: any) => {
            const dist = this.distanceBetweenTwoPoints(sourceLocation.lat, sourceLocation.long, cab.location.lat, cab.location.long, "K");
            if(Math.round(dist) <= 5) {
                return cab
            }
        });
        if (cabsUnderFiveKmDistance.length) {
            res.json(responseDTO.responseObjectDTO(200, "Cabs avaialble near by you", cabsUnderFiveKmDistance));
        } else {
            res.json(responseDTO.responseObjectDTO(404, "Cabs not avaialble", null))
        }
    }


    /**
     * get distance between user current location and cab location in Km
     * @param userLocationLat 
     * @param userLocationLong 
     * @param cabLocationLat 
     * @param cabLocationLong 
     * @param unit 
     */
    distanceBetweenTwoPoints(userLocationLat: any, userLocationLong: any, cabLocationLat: any, cabLocationLong: any, unit: String) {
        if ((userLocationLat == cabLocationLat) && (userLocationLong == cabLocationLong)) {
            return 0;
        }
        else {
            var radlat1 = Math.PI * userLocationLat/180;
            var radlat2 = Math.PI * cabLocationLat/180;
            var theta = userLocationLong - cabLocationLong;
            var radtheta = Math.PI * theta/180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180/Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit=="K") { dist = dist * 1.609344 }
            if (unit=="N") { dist = dist * 0.8684 }
            return dist;
        }
    }

    /**
     * Fetch all cabs with respective user current area, zipcode, lat/long and unbooked 
     * @param userId 
     * @param userCurrentLocation 
     */
    filterCabsFromDB(userId: number, userCurrentLocation: Object) {
        return demoData.cabList()
    }

    /**
     * get past booking by user id
     * @param userId 
     */
    getPastBookingByUserId(userId: string, res: any) {
        res.json(responseDTO.responseObjectDTO(202, "past booking avaialble", demoData.pastBooking()));
    }

}
