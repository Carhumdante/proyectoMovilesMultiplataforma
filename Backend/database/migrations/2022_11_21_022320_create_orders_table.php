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
        Schema::create('orders', function (Blueprint $table) {
            $table->integer('orderNumber')->nullable(false);
            $table->primary('orderNumber');
            $table->date('orderDate')->nullable(false);
            $table->date('requiredDate')->nullable(false);
            $table->date('shippedDate')->nullable();
            $table->string('status',15)->nullable(false);
            $table->text('comments')->nullable();
            $table->integer('customerNumber')->nullable(false);
            $table->foreign('customerNumber')
            ->references('customerNumber')
            ->on('customers')
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
        Schema::dropIfExists('orders');
    }
};
