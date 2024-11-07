<?php

namespace App\Http\Controllers;

use App\Models\Burger;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'items' => 'required|array', // Array of items in the order
            'items.*.burger_id' => 'required|exists:burgers,id', // Burger ID should exist
            'items.*.quantity' => 'required|integer|min:1', // Quantity must be positive
        ]);

        // Calculate the total price of the order
        $totalPrice = 0;
        foreach ($validated['items'] as $item) {
            $burger = Burger::find($item['burger_id']);
            $totalPrice += $burger->price * $item['quantity'];
        }

        // Create the order
        $order = Order::create([
            'user_id' => auth()->id(),
            'total_price' => $totalPrice,
            'status' => 'pending',
        ]);

        // Add items to the order
        foreach ($validated['items'] as $item) {
            $burger = Burger::find($item['burger_id']);
            $order->items()->create([
                'burger_id' => $burger->id,
                'quantity' => $item['quantity'],
                'price' => $burger->price,
            ]);
        }

        return response()->json(['message' => 'Order placed successfully', 'order' => $order], 201);
    }


    public function pending()
    {
        $pendingOrders = Order::where('status', 'pending')->with('items.burger')->get();
        return response()->json($pendingOrders, 200);
    }

    public function approve($id)
    {
        $order = Order::findOrFail($id);
        $order->status = 'approved';
        $order->save();

        return response()->json(['message' => 'Order approved successfully'], 200);
    }

    public function decline($id)
    {
        $order = Order::findOrFail($id);
        $order->status = 'declined';
        $order->save();

        return response()->json(['message' => 'Order declined successfully'], 200);
    }
}
