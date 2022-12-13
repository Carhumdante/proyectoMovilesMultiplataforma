<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Office;

class OfficeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $office = Office::find($request->officeCode);
        return $office;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $office = Office::create([
            'officeCode' => $request->officeCode,
            'city' => $request->city,
            'phone' => $request->phone,
            'addressLine1' => $request->addressLine1,
            'addressLine2' => $request->addressLine2,
            'state' => $request->state,
            'country' => $request->country,
            'postalCode' => $request->postalCode,
            'territory' => $request->territory,
        ]);
        echo $office;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $office = Office::find($request->officeCode);
        $office->officeCode = $request->officeCode2;
        $office->city = $request->city;
        $office->phone = $request->phone;
        $office->addressLine1 = $request->addressLine1;
        $office->addressLine2 = $request->addressLine2;
        $office->state = $request->state;
        $office->country = $request->country;
        $office->postalCode = $request->postalCode;
        $office->territory = $request->territory;
        $office->save();
        $office = Office::all();
        return $office;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $office=Office::find($request->officeCode);
        $office->delete();
        $office=Office::all();
        return $office;
    }
}
