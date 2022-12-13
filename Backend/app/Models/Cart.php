<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    protected $fillable =[
        'id',
        'productCode',
        'quantityOrdered',
        'priceEach',
        'subtotal',
        'productName',
        'image_name'
    ];

    protected $primaryKey = 'id';
    
    protected $casts = [
        'id' => 'string',
    ];
}
