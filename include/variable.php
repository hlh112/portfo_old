<?php

//Language handle
$site_title['lang1'] = 'hunthuntwork';
$site_title['lang2'] = 'hunthuntwork';

$lang_name['lang1'] = "en";

$lang_name_short['lang1'] = "en";

$lang_path['lang1'] = $lang_name_short['lang1'] . "/";

$lang_path_en = str_replace_limit($lang_path[$lang], $lang_path['lang1'], $_SERVER['REQUEST_URI'], 1);

$host_path_with_lang = $host_name . $lang_path[$lang];

//Other Variable and Paths 
$img_url = $host_name . 'images/';
$page_subtitle = '';      //default no subtitle
$file_name = '.php'; //for php to html conversion

define("STATUS_ENABLE", "1");
define("STATUS_DISABLE", "0");

define('IN_PAGE', true);

//Global Page Content
$global_page_desc['lang1'] = "";

$global_page_keywords['lang1'] = "";