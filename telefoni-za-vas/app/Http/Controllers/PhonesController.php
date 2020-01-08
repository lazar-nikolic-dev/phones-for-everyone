<?php

namespace App\Http\Controllers;

use App\Services\PhoneService;
use Illuminate\Http\Request;
use Laravel\Lumen\Routing\Controller as BaseController;

class PhonesController extends BaseController
{

    public function getPhones(Request $request)
    {

        $json = $request->json();
        $phoneService = new PhoneService();
        return $phoneService->getPhones($json->all());
    }
}
