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
        Schema::create('offices', function (Blueprint $table) {
            $table->string('officeCode',10)->nullable(false);
            $table->primary('officeCode');
            $table->string('city',50)->nullable(false);
            $table->string('phone',50)->nullable(false);
            $table->string('addressLine1',50)->nullable(false);
            $table->string('addressLine2',50)->nullable();
            $table->string('state',50)->nullable();
            $table->string('country',50)->nullable(false);
            $table->string('postalCode',15)->nullable(false);
            $table->string('territory',10)->nullable(false);
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
        Schema::dropIfExists('offices');
    }
};
