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
        Schema::create('user_open_to', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('value'); // part-time-freelance, full-time-freelance, etc.
            $table->timestamps();

            $table->unique(['user_id', 'value']);
        });

        Schema::create('user_role_levels', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('value'); // junior, mid, senior, etc.
            $table->timestamps();

            $table->unique(['user_id', 'value']);
        });

        Schema::create('user_environments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('value'); // office, hybrid, remote
            $table->timestamps();

            $table->unique(['user_id', 'value']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_environments');
        Schema::dropIfExists('user_role_levels');
        Schema::dropIfExists('user_open_to');
    }
};
