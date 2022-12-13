<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Productline extends Model
{
    use HasFactory;

    protected $fillable = [
        'productLine',
        'textDescription',
        'image_path',
        'image_name'
    ];

    protected $primaryKey = 'productLine';

    protected $casts = [
        'productLine' => 'string',
    ];
}
