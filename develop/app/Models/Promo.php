<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Promo extends Model
{
    use HasFactory;

    protected $table = 'promo';
    
    public $timestamps = true;

    protected $guarded = [];

    public static function store($request)
    {
        $content = new promo;
        $content->name = $request['name'];
        $content->title = $request['title'];
        $content->year = $request['year'];
        $content->name = $request['name'];
        $content->save();
    }

    public static function getList()
    {
        return  DB::table('promo') -> select(['id', 'year', 'name', 'title', 'image']) -> where('del', 0) -> get();
    }

    public static function getElementById($id)
    {
        return DB::table('promo') -> where('id', $id) -> where('del', 0) -> orderBy('ord', 'DESC') -> get();
    }

    public static function deleteById($id)
    {
        $row = DB::table('promo') -> where('id', $id) -> first();
        if (!$row)
            return NULL;
        $input = [];
        $input['del'] = 1;
        DB::table('promo')-> where('id', $id)-> update($input);

        return true;
    }
}
