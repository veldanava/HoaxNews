<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Webhoax>
 */
class WebhoaxFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => fake()->title(),
             'description' => fake()->paragraph(2, true),
             'category' => fake()->name(),
             'author' =>fake()->email(),
        ];
    }
}
