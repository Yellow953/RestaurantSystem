<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all(['id', 'name', 'email', 'role']);
        return response()->json($users, 200);
    }

    public function assignRole(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $validated = $request->validate([
            'role' => 'required|in:customer,manager,super_admin',
        ]);

        $user->role = $validated['role'];
        $user->save();

        return response()->json(['message' => 'User role updated successfully', 'user' => $user], 200);
    }
}
