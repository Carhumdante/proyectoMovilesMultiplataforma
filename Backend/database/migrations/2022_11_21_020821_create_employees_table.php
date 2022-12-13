<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->integer('employeeNumber')->nullable(false);
            $table->primary('employeeNumber');
            $table->string('lastName',50)->nullable(false);
            $table->string('firstName',50)->nullable(false);
            $table->string('extension',10)->nullable(false);
            $table->string('email',100)->nullable(false)->unique();
            $table->string('officeCode', 10)->nullable(false);
            $table->foreign('officeCode')
            ->references('officeCode')
            ->on('offices')
            ->onDelete('cascade');
            $table->integer('reportsTo')->nullable(false);
            $table->foreign('reportsTo')
            ->references('employeeNumber')
            ->on('employees')
            ->nullable()
            ->onDelete('cascade');
            $table->string('jobTitle',50)->nullable(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employees');
    }
};
