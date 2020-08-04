<?php

use App\Booking;
use App\Bookable;
use Illuminate\Database\Seeder;

class BookingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $bookables = Bookable::all();

        // factory(Booking::class, 500)->make()->each(function($bookable) use ($bookables){
        //     $bookable->bookable_id = $bookables->random()->id;
        //     $bookable->save();
        // });

        Bookable::all()->each(function(Bookable $bookable){
            $booking = factory(Booking::class)->make();
            $bookings = collect([$booking]);

            for($i = 0; $i < random_int(1,20); $i++){
                $from = (clone $booking->to)->addDays(random_int(1,14));
                $to = (clone $from)->addDays(random_int(0,14));

                $booking = Booking::make([
                    'from' => $from,
                    'to' => $to,
                    'price' => random_int(200, 5000)
                ]);
                $bookings->push($booking);
            }
            $bookable->bookings()->saveMany($bookings);
        });
    }
}
