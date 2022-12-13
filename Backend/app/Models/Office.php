<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Office extends Model
{
    use HasFactory;

    protected $fillable = [
        'officeCode', 
        'city',
        'phone',
        'addressLine1',
        'addressLine2',
        'state',
        'country',
        'postalCode',
        'territory'
    ];

    public function office(){
        return $this->hasMany(Employee::class);
    }

    protected $primaryKey = 'officeCode';
}
