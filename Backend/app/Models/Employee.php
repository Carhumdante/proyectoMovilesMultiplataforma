<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $fillable = [
        'employeeNumber',
        'lastName',
        'firstName',
        'extension',
        'email',
        'officeCode',
        'reportsTo',
        'jobTitle'
    ];

    public function reportsTo(){
        return $this->belongsTo('employeeNumber', 'reportsTo');
    }

    public function Employee(){
        return $this->hasMany('employeeNumber', 'reportsTo');
    }

    protected $primaryKey = 'employeeNumber';
    
}
