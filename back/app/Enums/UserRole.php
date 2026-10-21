<?php


namespace app\Enums;

enum UserRole: string
{
    case ADMIN = 'admin';
    case EMPLOYE = 'employe';
    case CLIENT = 'client';
}
