<?php

return [
    'routes' => [

        'home' => 'home/index',
        'users/([-_a-z0-9]+)' => 'users/$1',
        'users/([-_a-z0-9]+)/([-_a-z0-9]+)' => 'users/$1/$2',
        'login' => 'users/login',
        'login/([-_a-z0-9]+)' => 'users/login/$1',
        'search' => 'home/index',
    ]
];