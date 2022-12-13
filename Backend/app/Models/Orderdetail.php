<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orderdetail extends Model
{
    use HasFactory;

    protected $fillable =[
        'orderNumber',
        'productCode',
        'quantityOrdered',
        'priceEach',
        'orderLineNumber'
    ];

    protected $primaryKey = 'orderNumber';
}
