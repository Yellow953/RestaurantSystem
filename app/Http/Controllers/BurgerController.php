<?php

namespace App\Http\Controllers;

use App\Models\Burger;
use Illuminate\Http\Request;

class BurgerController extends Controller
{
    public function index()
    {
        $burgers = Burger::all();
        return response()->json($burgers, 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
        ]);

        $burger = Burger::create($validated);

        return response()->json(['message' => 'Burger created successfully', 'burger' => $burger], 201);
    }

    public function update(Request $request, $id)
    {
        $burger = Burger::findOrFail($id);

        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'price' => 'sometimes|numeric|min:0',
        ]);

        $burger->update($validated);

        return response()->json(['message' => 'Burger updated successfully', 'burger' => $burger], 200);
    }

    public function destroy($id)
    {
        $burger = Burger::findOrFail($id);
        $burger->delete();

        return response()->json(['message' => 'Burger deleted successfully'], 200);
    }
}
