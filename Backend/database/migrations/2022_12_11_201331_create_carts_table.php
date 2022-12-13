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
        Schema::create('carts', function (Blueprint $table) {
            $table->id()->nullable(false);
            $table->string('productCode',15)->nullable(false);
            $table->primary(['id','productCode']);
            $table->integer('quantityOrdered')->nullable(false);
            $table->decimal('priceEach',10,2)->nullable(false);
            $table->decimal('subtotal',10,2);
            $table->integer('orderLineNumber')->nullable(false);
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
        Schema::dropIfExists('carts');
    }
};
