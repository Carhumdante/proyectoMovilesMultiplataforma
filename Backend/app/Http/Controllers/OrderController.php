<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $order = Order::find($request->orderNumber);
        return $order;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function last()
    {
        $orderNumber = [];
        foreach (Order::all() as $ord) {
            array_push($orderNumber, $ord->orderNumber);
        }
        $last = max($orderNumber);
        return $last;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $order = Order::create([
            'shippedDate' => $request->shippedDate,
            'status' => $request->status,
            'comments' => $request->comments,
            'customerNumber' => $request->customerNumber
        ]);
        echo $order;
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
    public function getOrderFromCustomer(Request $request)
    {
        $Orderdetail = DB::table('orders')
            ->where('customerNumber', '=', $request->customerNumber)
            ->get();
        return $Orderdetail;
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
        $order = Order::find($request->orderNumber);
        $order->orderNumber = $request->orderNumber2;
        $order->orderDate = $request->orderDate;
        $order->requiredDate = $request->requiredDate;
        $order->shippedDate = $request->shippedDate;
        $order->status = $request->status;
        $order->comments = $request->comments;
        $order->customerNumber = $request->customerNumber;
        $order->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $order = Order::find($request->orderNumber);
        $order->delete();
        $order = Order::all();
        return $order;
    }
}
