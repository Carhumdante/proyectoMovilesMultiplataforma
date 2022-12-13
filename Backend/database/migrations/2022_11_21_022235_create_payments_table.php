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
        Schema::create('payments', function (Blueprint $table) {
            $table->integer('customerNumber')->nullable(false);
            $table->string('checkNumber',50)->nullable(false);
            $table->primary(['customerNumber', 'checkNumber']);
            $table->foreign('customerNumber')
            ->references('customerNumber')
            ->on('customers')
            ->onDelete('cascade');
            $table->date('paymentDate');
            $table->decimal('amount',10,2);
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
        Schema::dropIfExists('payments');
    }
};
