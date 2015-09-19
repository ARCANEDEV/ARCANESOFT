<?php namespace App\Http\Controllers;

use App\Bases\Controller;

/**
 * Class PagesController
 * @package App\Http\Controllers
 */
class PagesController extends Controller
{
    /* ------------------------------------------------------------------------------------------------
     |  Main Controller Functions
     | ------------------------------------------------------------------------------------------------
     */
    public function index()
    {
        return view('home');
    }
}
