<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    public function Bookable(){
        return $this->belongsTo('App\Bookable');
    }
}
