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
        Schema::table('users', function (Blueprint $table) {
            $table->text('summary')->nullable()->after('avatar');
            $table->text('bio')->nullable()->after('summary');
            $table->string('city')->nullable()->after('bio');
            $table->foreignId('country_id')->nullable()->after('city')->constrained('countries')->nullOnDelete();
            $table->foreignId('timezone_id')->nullable()->after('country_id')->constrained('timezones')->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['country_id']);
            $table->dropForeign(['timezone_id']);
            $table->dropColumn([
                'summary',
                'bio',
                'city',
                'country_id',
                'timezone_id',
            ]);
        });
    }
};
