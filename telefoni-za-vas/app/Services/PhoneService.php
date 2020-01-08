<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

class PhoneService
{
    protected $rangeMappings = [
        "cena",
        "baterija"
    ];

    public function getPhones(array $conditions)
    {
        $phonesQuery = DB::table('telefoni');
        foreach ($conditions as $key => $value) {
            if (in_array($key, $this->rangeMappings)) {
                $phonesQuery = $phonesQuery->whereBetween($key, $value);
            } else {
                $phonesQuery = $phonesQuery->where($key, $value);
            }
        }
        $searchedPhones = $phonesQuery->get();

        return $searchedPhones;
    }
}
