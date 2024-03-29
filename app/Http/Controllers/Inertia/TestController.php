<?php

namespace App\Http\Controllers\Inertia;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

use function Termwind\render;

class TestController extends Controller
{
   function index() : Response {
     $tittle = "inertia Test";
     return Inertia::render('Test/test', [
        'tittle' => $tittle
    ]);
   }
}
