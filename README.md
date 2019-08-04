# PicoPlaca
## Statement
Using the language that you feel most proficient in, we’d like you to write a "Pico y Placa" predictor.
The inputs should be a license plate number (the full number, not the last digit), a date (as a String), 
and a time, and the program will return whether or not that car can be on the road. 
### Author
> Miguel Angel Guaño Ochoa


### Development
> I used Node Js to develop it.
#### Information about "Pico Y Placa"
I use this [link](https://www.eluniverso.com/noticias/2019/07/31/nota/7450038/horarios-pico-placa-hoy-no-circula-quito)
to get the hours and the schedules for the statement. It means :

#### Schedule for vehicle.
1. **Monday** :  Vehicles with plates finished in 1 and 2 are no able to travel.
2. **Tuesday** : Vehicles with plates finished in 3 and 4 are no able to travel.
3. **Wednesday** : Vehicles with plates finished in 5 and 6 are no able to travel.
4. **Thursday** : Vehicles with plates finished in 7 and 8 are no able to travel.
5. **Friday** : Vehicles with plates finished in 9 and 0 are no able to travel.

Nowadays, we have 2 'Pico y Placa', the first said that Vehicles are no allow to travel between
5:00 to 20:00. However, it only works between 2019-09-02 to 2020-05-03.The another one has two schedule
(07:00 to 09:30 and  16:00 to 19:30).

### Testing 
> I used mocha with chai like a testing framework.
> I created 28 tests for this application.

### Format for input 
> I am using YYYY-MM-DD like format for the date.
> I am using HH-MM-SS like format for the time.
> I am using a license plate number as this ABC-1234.
