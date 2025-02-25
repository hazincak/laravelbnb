<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = ['id', 'content', 'rating'];

    public function bookable()
    {
        return $this->belongsTo(Bookable::class);
    }

    public function booking()
    {
        return $this->belongsTo(Boooking::class);
    }

    //id is not incrementing it is uuid 
    public function getIncrementing()
    {
        return false;
    }

    public function getKeyType()
    {
        return 'string';
    }
}
