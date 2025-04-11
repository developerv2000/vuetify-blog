<?php

namespace Database\Factories;

use App\Models\Comment;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(4),
            'body' => $this->faker->paragraph(),
            'image' => rand(1, 6) . '.jpg',
            'category_id' => rand(1, 5),
        ];
    }

    public function configure()
    {
        return $this->afterCreating(function ($record) {
            $record->comments()->saveMany([
                new Comment([
                    'body' => $this->faker->sentence(),
                    'author' => $this->faker->name(),
                ]),

                new Comment([
                    'body' => $this->faker->sentence(),
                    'author' => $this->faker->name(),
                ]),
            ]);
        });
    }
}
