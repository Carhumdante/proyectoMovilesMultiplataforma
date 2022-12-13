<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class CookieController extends Controller
{
    /**
     * Write code on Method
     *
     * @return response()
     */
    public function setCookie(Request $request)
    {
        return response()->json(['Cookie set successfully.'])->cookie(
            'tkn-cookie', $request->token, 1440
        );
    }

    /**
     * Write code on Method
     *
     * @return response()
     */
    public function getCookie(Request $request)
    {
        $cookie = $request->cookie('tkn-cookie');
        $crc = crc32($cookie);
        return $crc;
    }

    
    /**
     * Write code on Method
     *
     * @return response()
     */
    public function deleteCookie()
    {
        Cookie::forget('tkn-cookie');

        dd('Cookie removed successfully.');
    }
}
