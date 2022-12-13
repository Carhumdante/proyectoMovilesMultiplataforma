<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function select(Request $request)
    {
        $Cart = [];
        foreach( Cart::all() as $prod ){
            if ($prod->id == $request->id){
                array_push($Cart, $prod);
            }
        }
        return $Cart;
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $Cart = Cart::create([
            'id' => $request->id,
            'productCode' => $request->productCode,
            'quantityOrdered' => $request->quantityOrdered,
            'productName' => $request->productName,
            'priceEach' => $request->priceEach,
            'subtotal' => $request->subtotal,
            'image_name' => $request->image_name
        ]);
        echo $Cart;
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
    public function destroy(Request $request)
    {
        $cart = Cart::find($request->id);
        $cart->delete();
    }
}
