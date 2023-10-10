<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->string('clave');
            $table->boolean('habilitado');
            $table->date('fecha');
            $table->unsignedBigInteger('id_rol')->nullable();
            $table->unsignedBigInteger('id_persona')->nullable();
            $table->foreign('id_rol')->references('id')->on('rols');
            $table->foreign('id_persona')->references('id')->on('personas');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarios');
    }
};
