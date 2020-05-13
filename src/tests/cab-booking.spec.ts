import { expect } from 'chai';

import { CabBooking } from '../service/cab-booking';

describe('Cab booking', () => {
    const cabBooking = new CabBooking();

    it('should get cab near by location', () => {        
        const request = {
            'body': {
                "userId": 1,
                "sourceLocation": {
                    "lat": "18.5946394",
                    "long": "73.8917271",
                    "pinCode": "411015"
                },
                "destinationLocation": {
                    "lat": "18.679690",
                    "long": "73.896300",
                    "pinCode": "412105"
                }
            }
        };
        let temp = null;
        const response = {
            json: (args: any) => {
                temp = args;
                return args;
            }
        };

        cabBooking.cabNearBySourceLocation(request, response);
        expect(temp).to.not.equal(null);
    });

    it('should not get cab near by location', () => {
        const request = {
            'body': {
                "userId": 1,
                "sourceLocation": {
                    "lat": "28.5946394",
                    "long": "73.8917271",
                    "pinCode": "411015"
                },
                "destinationLocation": {
                    "lat": "18.679690",
                    "long": "73.896300",
                    "pinCode": "412105"
                }
            }
        };
        let temp: any;
        const response = {
            json: (args: any) => {
                temp = args;
                return args;
            }
        };

        cabBooking.cabNearBySourceLocation(request, response);
        expect(temp.data).to.equal(null);
    });

    it('test past booking drive', () => {
        let temp: any;
        const response = {
            json: (args: any) => {
                temp = args;
                return args;
            }
        };
        cabBooking.getPastBookingByUserId("1", response);
        expect(temp.data).to.not.equal(null);
    });
})