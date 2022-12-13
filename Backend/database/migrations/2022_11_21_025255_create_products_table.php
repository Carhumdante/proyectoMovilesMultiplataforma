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
        Schema::create('products', function (Blueprint $table) {
            $table->string('productCode',50)->nullable(false);
            $table->primary('productCode');
            $table->string('productName',70)->nullable(false);
            $table->string('productLine',50)->nullable(false);
            $table->foreign('productLine')
            ->references('productLine')
            ->on('productlines')
            ->onDelete('cascade');
            $table->string('productScale',10)->nullable(false);
            $table->string('productVendor',50)->nullable(false);
            $table->text('productDescription')->nullable(false);
            $table->smallInteger('quantityInStock')->nullable(false);
            $table->decimal('buyPrice',10,2)->nullable(false);
            $table->decimal('MSRP',10,2)->nullable(false);
            $table->string('image_path',15)->nullable();
            $table->string('image_name',10)->nullable();
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
        Schema::dropIfExists('products');
    }
};
