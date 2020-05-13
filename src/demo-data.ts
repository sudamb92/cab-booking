export class DemoData {
    pastBooking() {
        return [{
            "name": "Ajay",
            "id": 1,
            "driveDetails": {
                "driveStatus": "Completed",
                "lateDrived": "10/05/2020 11:00:00",
                "sourceLocation": "Dhanori",
                "DestinationLocation": "Kothrud"
            }
        }, {
            "name": "Ajay",
            "id": 2,
            "driveDetails": {
                "driveStatus": "Canceled",
                "lateDrived": "10/02/2020 10:00:00",
                "sourceLocation": "Vishrantvadi",
                "DestinationLocation": "Kothrud"
            }
        }];
    }

    cabList() {
        return [{
            "name": "Indigo",
            "number": "MH 12 5049",
            "booked": false,
            "location": {
                "lat": "18.595819",
                "long": "73.8943235",
                "pincode": "411015",
                "currentCity": "Pune"
            },
            "driverDetails": {
                "name": "Jagu",
                "mobile_number": "7827273736"
            }
        },{
            "name": "Indigo",
            "number": "MH 12 2282",
            "booked": false,
            "location": {
                "lat": "18.545191",
                "long": "73.883942",
                "pincode": "411015",
                "currentCity": "Pune"
            },
            "driverDetails": {
                "name": "Gajya",
                "mobile_number": "7827273736"
            }
        },{
            "name": "Indigo",
            "number": "MH 12 1212",
            "booked": false,
            "location": {
                "lat": "18.596024",
                "long": "73.924698",
                "pincode": "411015",
                "currentCity": "Pune"
            },
            "driverDetails": {
                "name": "Vimal",
                "mobile_number": "7827273736"
            }
        },{
            "name": "Indigo",
            "number": "MH 12 8988",
            "booked": false,
            "location": {
                "lat": "18.496668",
                "long": "73.941666",
                "pincode": "411015",
                "currentCity": "Pune"
            },
            "driverDetails": {
                "name": "Simala",
                "mobile_number": "7827273736"
            }
        }];
    }
}