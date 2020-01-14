<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

class PhoneService
{
    protected $rangeMappings = [
        "cena",
        "baterija",
        "kamera"
    ];

    public function getPhones(array $conditions)
    {
        $phonesQuery = DB::table('telefoni');
        foreach ($conditions as $key => $value) {
            if (in_array($key, $this->rangeMappings)) {
                $phonesQuery = $phonesQuery->where(function ($query) use ($value, $key) {
                    foreach ($value as $range) {
                        $query = $query->orWhereBetween($key, $range);
                    }
                });
            } else {
                $phonesQuery = $phonesQuery->whereIn($key, $value);
            }
        }
        $searchedPhones = $phonesQuery->get();

        return $searchedPhones;
    }
}
