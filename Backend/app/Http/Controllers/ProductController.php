<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $Product = Product::find($request->productCode);
        return $Product;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function productCodes()
    {
        $productCodes = [];
        foreach (Product::all() as $prod) {
            array_push($productCodes, $prod->productCode);
        }
        return $productCodes;
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
        $Product = Product::create([
            'productCode' => $request->productCode,
            'productName' => $request->productName,
            'productLine' => $request->productLine,
            'productScale' => $request->productScale,
            'productVendor' => $request->productVendor,
            'productDescription' => $request->productDescription,
            'quantityInStock' => $request->quantityInStock,
            'buyPrice' => $request->buyPrice,
            'MSRP' => $request->MSRP
        ]);
        echo $Product;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $count = 0;
        $Products = [];
        $Product = Product::all();
        foreach($Product as $prod){
            if ($count<20){
                array_push($Products, $prod);
            }
            $count = $count +1;
        }
        return $Products;
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
        $Product = Product::find($request->productCode);
        $Product->productCode = $request->productCode2;
        $Product->productName = $request->productName;
        $Product->productLine = $request->productLine;
        $Product->productScale = $request->productScale;
        $Product->productVendor = $request->productVendor;
        $Product->productDescription = $request->productDescription;
        $Product->quantityInStock = $request->quantityInStock;
        $Product->buyPrice = $request->buyPrice;
        $Product->MSRP = $request->MSRP;
        $Product->save();
        return $Product;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        foreach ($request as $prod) {
            $Product = Product::find($prod->productCode);
            $Product->quantityInStock = ($Product->quantityInStock)-1;
            $Product->save();
            return $Product;
        }
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function productNew()
    {
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function productCars()
    {
        $productCars = [];
        foreach (Product::all() as $prod) {
            if ($prod->productLine == 'Classic Cars') {
                array_push($productCars, $prod);
            }
        }
        return $productCars;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function productMotorcycles()
    {
        $productMotorcycles = [];
        foreach (Product::all() as $prod) {
            if ($prod->productLine == 'Motorcycles') {
                array_push($productMotorcycles, $prod);
            }
        }
        return $productMotorcycles;
    }

    public function productPlanes()
    {
        $productPlanes = [];
        foreach (Product::all() as $prod) {
            if ($prod->productLine == 'Planes') {
                array_push($productPlanes, $prod);
            }
        }
        return $productPlanes;
    }

    public function productShips()
    {
        $productShips = [];
        foreach (Product::all() as $prod) {
            if ($prod->productLine == 'Ships') {
                array_push($productShips, $prod);
            }
        }
        return $productShips;
    }

    public function productTrains()
    {
        $productTrains = [];
        foreach (Product::all() as $prod) {
            if ($prod->productLine == 'Trains') {
                array_push($productTrains, $prod);
            }
        }
        return $productTrains;
    }

    public function productTrucks()
    {
        $productTrucks = [];
        foreach (Product::all() as $prod) {
            if ($prod->productLine == 'Trucks and Buses') {
                array_push($productTrucks, $prod);
            }
        }
        return $productTrucks;
    }

    public function productVintage()
    {
        $productVintage = [];
        foreach (Product::all() as $prod) {
            if ($prod->productLine == 'Vintage Cars') {
                array_push($productVintage, $prod);
            }
        }
        return $productVintage;
    }
}
