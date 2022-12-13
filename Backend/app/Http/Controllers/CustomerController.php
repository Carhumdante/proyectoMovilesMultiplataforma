<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;

class CustomerController extends Controller
{
    public function index(Request $request)
    {
        $customer = Customer::find($request->customerNumber);
        return $customer;
    }
    public function store(Request $request)
    {
        $customer = Customer::create([
            'customerNumber' => $request->customerNumber,
            'customerName' => $request->customerName,
            'contactLastName' => $request->contactLastName,
            'contactFirstName' => $request->contactFirstName,
            'phone' => $request->phone,
            'addressLine1' => $request->addressLine1,
            'addressLine2' => $request->addressLine2,
            'city' => $request->city,
            'state' => $request->state,
            'postalCode' => $request->postalCode,
            'country' => $request->country,
            'salesRepEmployeeNumber' => $request->soldEmployeeNumber,
            'creditLimit' => $request->creditLimit,
            'email' => $request->email
        ]);
        echo $customer;
    }

    public function create()
    {
        //
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $customer = Customer::all();
        return $customer;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function customerNumber()
    {
        $customerNumbers = [];
        foreach( Customer::all() as $customer ){
            array_push($customerNumbers, $customer->customerNumber);
        }
        return $customerNumbers;
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
        $customer = Customer::find($request->customerNumber);
        $customer->customerNumber = $request->customerNumber2;
        $customer->customerName = $request->customerName;
        $customer->contactLastName = $request-> contactLastName;
        $customer->contactFirstName = $request->contactFirstName;
        $customer->phone = $request->phone;
        $customer->addressLine1 = $request->addressLine1;
        $customer->addressLine2 = $request->addressLine2;
        $customer->city = $request->city;
        $customer->state= $request->state;
        $customer->postalCode = $request->postalCode;
        $customer->country = $request->country;
        $customer->salesRepEmployeeNumber = $request->soldEmployeeNumber;
        $customer->creditLimit = $request->creditLimit;
        $customer->save();

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $customer=Customer::find($request->customerNumber);
        $customer->delete();

    }

    public function create_token(){
        return csrf_token();
    }
}
