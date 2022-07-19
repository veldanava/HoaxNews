<?php

namespace App\Http\Controllers;

use App\Http\Resources\WebhoaxCollection;
use Inertia\Inertia;
use App\Models\webhoax;
use Illuminate\Http\Request;

class WebhoaxController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $webhoax = new WebhoaxCollection(webhoax::OrderByDesc('id')->paginate(8));
        return Inertia::render('Webhoax', [
            'title'=> 'webhoax',
            'description'=> 'WELCOME TO WEBHOAX',
            'webhoaxes'=> $webhoax,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $webhoax = new webhoax();
        $webhoax->title = $request->title;
        $webhoax->description = $request->description;
        $webhoax->category = $request->category;
        $webhoax->author = auth()->user()->email;
        $webhoax->save();
        return redirect()->back()->with('message', 'berita berhasil ditambah');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\webhoax  $webhoax
     * @return \Illuminate\Http\Response
     */
    public function show(webhoax $webhoax)
    {
      $mywebhoax = $webhoax::where('author', auth()->user()->email)->get();
      return Inertia::render('Dashboard', [
        'mywebhoax'=>$mywebhoax,
      ]);
    
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\webhoax  $webhoax
     * @return \Illuminate\Http\Response
     */
    public function edit(webhoax $webhoax, Request $request)
    {
        return Inertia::render('Editwebhoax', [
            'mywebhoax'=> $webhoax->find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\webhoax  $webhoax
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        webhoax::where('id', $request->id)->update([
            'title' => $request->title,
            'description' => $request->description,
            'category' => $request->category,
        ]);
        return to_route('dashboard')->with('message', 'update berita');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\webhoax  $webhoax
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $webhoax = webhoax::find($request->id);
        $webhoax->delete();
        return redirect()->back()->with('message', 'berita berhasil dihapus');
    }
}
