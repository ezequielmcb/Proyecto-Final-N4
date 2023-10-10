<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pagina>
 */
class PaginaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'titulo' => fake()->title(),
            'estado' => fake()->boolean(),
            'descripcion' => fake()->sentence(),
            'icono' => fake()->word(),
            'tipo' => fake()->word(),
            'url' => fake()->url(),
        ];
    }
}
