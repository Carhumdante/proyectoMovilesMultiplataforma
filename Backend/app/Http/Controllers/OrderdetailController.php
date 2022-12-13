<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Orderdetail;
use Illuminate\Support\Facades\DB;

class OrderdetailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $Orderdetail = DB::table('orderdetails')
            ->where('orderNumber', '=', $request->orderNumber)
            ->where('productCode', '=', $request->productCode)
            ->get();
        return $Orderdetail;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $Orderdetail = Orderdetail::create([
            'orderNumber' => $request->orderNumber,
            'productCode' => $request->productCode,
            'quantityOrdered' => $request->quantityOrdered,
            'priceEach' => $request->priceEach,
            'orderLineNumber' => $request->orderLineNumber
        ]);
        echo $Orderdetail;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
