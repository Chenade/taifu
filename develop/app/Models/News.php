<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class News extends Model
{
    use HasFactory;

    protected $table = 'news';
    
    public $timestamps = true;

    protected $guarded = [];

    protected $casts = [
        'content' => 'array'
    ];

    public static function json_encode_sql($content)
    {
        $content = str_replace('"title":"', "'title':'", $content);
        $content = str_replace('"content":"', "'content':'", $content);
        $content = str_replace('"format":"', "'format':'", $content);
        $content = str_replace('",', "',", $content);
        $content = str_replace('"}', "'}", $content);
        return $content;
    }

    public static function store($request)
    {
        $content = new News;
        $content->category = $request['category'];
        $content->title = $request['title'];
	    // $content->content = NEWS::json_encode_sql($request['content']);
        $content->content = ($request['content']);
        $content->ts = (array_key_exists('ts', $request)) ? $request['ts'] : time();
        if (array_key_exists('link', $request)) $content->link = $request['link'];
        if (array_key_exists('link_alt', $request)) $content->link_alt = $request['link_alt'];
        if (array_key_exists('ord', $request)) $content->ord = $request['ord'];
        $content->save();
    }

    public static function getByCategoryId($id)
    {
        if ($id > 2)
            return NULL;
        return  DB::table('news') -> where('category', $id) -> where('del', 0) -> orderBy('ord', 'DESC') -> get();
    }

    public static function getElementById($id)
    {
        return DB::table('news') -> where('id', $id) -> where('del', 0) -> orderBy('ord', 'DESC') -> get();
    }

    public static function deleteById($id)
    {
        $row = DB::table('news') -> where('id',$id) -> first();
        if (!$row)
            return NULL;
        $input = [];
        $input['del'] = 1;
        DB::table('news')-> where('id', $id)-> update($input);

        return true;
    }
}
