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
            $table->string('prenom')->nullable()->after('name');
            $table->string('telephone')->nullable()->after('email');
            $table->enum('role', array_column(\App\Enums\UserRole::cases(), 'value'))
                ->default(\App\Enums\UserRole::CLIENT->value)
                ->after('password');
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['prenom', 'telephone', 'role' , 'deleted_at']);
            $table->dropSoftDeletes();
        });
    }
};
