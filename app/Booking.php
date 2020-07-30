<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

class Booking extends Model
{
    protected $fillable = ['from', 'to'];

    public function bookable(){
        return $this->belongsTo('App\Bookable');
    }

    public function review()
    {
        $this->hasOne(Review::class);
    }

    //local query scope
    public function scopeBetweenDates(Builder $query, $from, $to)
    {
        return $query->where('to', '>=', $from)->where('from', '<=', $to);
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function($booking){
            $booking->review_key = Str::uuid();
        });
    }
}
