# Online Cab Booking
## Description:
In this project, user can request a cab for a booking from source location to destination location. On submitting booking request user able to see near by location cabs and select nearest cab. User can also see their past booking.

## API:
1. Cab booking request API:
    ```
    http://localhost:8090/api/cabBookingRequest
    ```
    Request data for cabBookingRequest API
    ```
    {
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
    ```
2. Past booking
    ```
    http://localhost:8090/api/pastBooking/:id
    ```

## Run application
1. Run ```npm install``` to install dependency.
2. Run ```ng run dev``` to start application
3. Run ```ng run test``` for unit test.
4. Run ```ng run test-with-coverage``` for test coverage.


