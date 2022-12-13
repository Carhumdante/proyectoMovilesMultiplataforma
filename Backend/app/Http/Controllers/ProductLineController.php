<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Productline;

class ProductLineController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $productLine = Productline::find($request->productLine);
        return $productLine;
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
        $productLine = Productline::Create([
            'productLine'=>$request->productLine,
            'textDescription'=>$request->textDescription,
            'htmlDescription'=>$request->htmlDescription,
            'image'=>$request->image
        ]);
        echo $productLine;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $Productline = Productline::all();
        return $Productline;
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
        $productLine = Productline::find($request->productLine);
        $productLine->productLine = $request->productLine2;
        $productLine->textDescription = $request->textDescription;
        $productLine->htmlDescription = $request->htmlDescription;
        $productLine->image = $request->image;
        $productLine->save();
        $productLine = Productline::all();
        return $productLine;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $productLine=Productline::find($request->productLine);
        $productLine->delete();
        $productLine = Productline::all();
        return $productLine;
    }
}
