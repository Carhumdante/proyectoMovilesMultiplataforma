<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $employee = Employee::find($request->employeeNumber);
        return $employee;
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
        $employee = Employee::create([
            'employeeNumber' => $request->employeeNumber,
            'lastName' => $request->lastName,
            'firstName' => $request->firstName,
            'extension' => $request->extension,
            'email' => $request->email,
            'officeCode' => $request->officeCode,
            'reportsTo' => $request->reportsTo,
            'jobTitle' => $request->jobTitle
        ]);
        echo $employee;
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
    public function update(Request $request)
    {
        $employee = Employee::find($request->employeeNumber);
        $employee->employeeNumber = $request->employeeNumber2;
        $employee->lastName = $request->lastName;
        $employee->firstName = $request->firstName;
        $employee->extension = $request->extension;
        $employee->email = $request->email;
        $employee->officeCode = $request->officeCode;
        $employee->reportsTo = $request->reportsTo;
        $employee->jobTitle = $request->jobTitle;
        $employee->save();

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $employee=Employee::find($request->employeeNumber);
        $employee->delete();

    }

    public function create_token(){
        return csrf_token();
    }
}
