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
        Schema::create('orderdetails', function (Blueprint $table) {
            $table->integer('orderNumber')->nullable(false);
            $table->string('productCode',15)->nullable(false);
            $table->primary(['orderNumber','productCode']);
            $table->integer('quantityOrdered')->nullable(false);
            $table->decimal('priceEach',10,2)->nullable(false);
            $table->integer('orderLineNumber')->nullable(false);
            $table->foreign('orderNumber')
            ->references('orderNumber')
            ->on('orders')
            ->onDelete('cascade');
            $table->foreign('productCode')
            ->references('productCode')
            ->on('products')
            ->onDelete('cascade');
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
        Schema::dropIfExists('orderdetails');
    }
};
