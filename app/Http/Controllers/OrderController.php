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
            'items' => 'required|array',
            'items.*.burger_id' => 'required|exists:burgers,id',
            'items.*.quantity' => 'required|integer|min:1',
        ]);

        $totalPrice = 0;
        foreach ($validated['items'] as $item) {
            $burger = Burger::find($item['burger_id']);
            $totalPrice += $burger->price * $item['quantity'];
        }

        $order = Order::create([
            'user_id' => auth()->id(),
            'total_price' => $totalPrice,
            'status' => 'pending',
        ]);

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
