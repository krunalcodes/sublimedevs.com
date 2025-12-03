<?php

namespace Database\Seeders;

use App\Models\Timezone;
use Illuminate\Database\Seeder;

class TimezoneSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $timezones = [
            [
                'value' => 'Dateline Standard Time',
                'text' => '(UTC-12:00) International Date Line West',
            ],
            [
                'value' => 'UTC-11',
                'text' => '(UTC-11:00) Coordinated Universal Time-11',
            ],
            [
                'value' => 'Hawaiian Standard Time',
                'text' => '(UTC-10:00) Hawaii',
            ],
            [
                'value' => 'Alaskan Standard Time',
                'text' => '(UTC-09:00) Alaska',
            ],
            [
                'value' => 'Pacific Standard Time (Mexico)',
                'text' => '(UTC-08:00) Baja California',
            ],
            [
                'value' => 'Pacific Daylight Time',
                'text' => '(UTC-07:00) Pacific Daylight Time (US & Canada)',
            ],
            [
                'value' => 'Pacific Standard Time',
                'text' => '(UTC-08:00) Pacific Standard Time (US & Canada)',
            ],
            [
                'value' => 'US Mountain Standard Time',
                'text' => '(UTC-07:00) Arizona',
            ],
            [
                'value' => 'Mountain Standard Time (Mexico)',
                'text' => '(UTC-07:00) Chihuahua, La Paz, Mazatlan',
            ],
            [
                'value' => 'Mountain Standard Time',
                'text' => '(UTC-07:00) Mountain Time (US & Canada)',
            ],
            [
                'value' => 'Central America Standard Time',
                'text' => '(UTC-06:00) Central America',
            ],
            [
                'value' => 'Central Standard Time',
                'text' => '(UTC-06:00) Central Time (US & Canada)',
            ],
            [
                'value' => 'Central Standard Time (Mexico)',
                'text' => '(UTC-06:00) Guadalajara, Mexico City, Monterrey',
            ],
            [
                'value' => 'Canada Central Standard Time',
                'text' => '(UTC-06:00) Saskatchewan',
            ],
            [
                'value' => 'SA Pacific Standard Time',
                'text' => '(UTC-05:00) Bogota, Lima, Quito',
            ],
            [
                'value' => 'Eastern Standard Time',
                'text' => '(UTC-05:00) Eastern Time (US & Canada)',
            ],
            [
                'value' => 'Eastern Daylight Time',
                'text' => '(UTC-04:00) Eastern Daylight Time (US & Canada)',
            ],
            [
                'value' => 'US Eastern Standard Time',
                'text' => '(UTC-05:00) Indiana (East)',
            ],
            [
                'value' => 'Venezuela Standard Time',
                'text' => '(UTC-04:30) Caracas',
            ],
            [
                'value' => 'Paraguay Standard Time',
                'text' => '(UTC-04:00) Asuncion',
            ],
            [
                'value' => 'Atlantic Standard Time',
                'text' => '(UTC-04:00) Atlantic Time (Canada)',
            ],
            [
                'value' => 'Central Brazilian Standard Time',
                'text' => '(UTC-04:00) Cuiaba',
            ],
            [
                'value' => 'SA Western Standard Time',
                'text' => '(UTC-04:00) Georgetown, La Paz, Manaus, San Juan',
            ],
            [
                'value' => 'Pacific SA Standard Time',
                'text' => '(UTC-04:00) Santiago',
            ],
            [
                'value' => 'Newfoundland Standard Time',
                'text' => '(UTC-03:30) Newfoundland',
            ],
            [
                'value' => 'E. South America Standard Time',
                'text' => '(UTC-03:00) Brasilia',
            ],
            [
                'value' => 'Argentina Standard Time',
                'text' => '(UTC-03:00) Buenos Aires',
            ],
            [
                'value' => 'SA Eastern Standard Time',
                'text' => '(UTC-03:00) Cayenne, Fortaleza',
            ],
            [
                'value' => 'Greenland Standard Time',
                'text' => '(UTC-03:00) Greenland',
            ],
            [
                'value' => 'Montevideo Standard Time',
                'text' => '(UTC-03:00) Montevideo',
            ],
            [
                'value' => 'Bahia Standard Time',
                'text' => '(UTC-03:00) Salvador',
            ],
            [
                'value' => 'UTC-02',
                'text' => '(UTC-02:00) Coordinated Universal Time-02',
            ],
            [
                'value' => 'Mid-Atlantic Standard Time',
                'text' => '(UTC-02:00) Mid-Atlantic - Old',
            ],
            [
                'value' => 'Azores Standard Time',
                'text' => '(UTC-01:00) Azores',
            ],
            [
                'value' => 'Cape Verde Standard Time',
                'text' => '(UTC-01:00) Cape Verde Is.',
            ],
            [
                'value' => 'Morocco Standard Time',
                'text' => '(UTC) Casablanca',
            ],
            [
                'value' => 'UTC',
                'text' => '(UTC) Coordinated Universal Time',
            ],
            [
                'value' => 'GMT Standard Time',
                'text' => '(UTC) Edinburgh, London',
            ],
            [
                'value' => 'British Summer Time',
                'text' => '(UTC+01:00) Edinburgh, London',
            ],
            [
                'value' => 'GMT Standard Time',
                'text' => '(UTC) Dublin, Lisbon',
            ],
            [
                'value' => 'Greenwich Standard Time',
                'text' => '(UTC) Monrovia, Reykjavik',
            ],
            [
                'value' => 'W. Europe Standard Time',
                'text' => '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
            ],
            [
                'value' => 'Central Europe Standard Time',
                'text' => '(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
            ],
            [
                'value' => 'Romance Standard Time',
                'text' => '(UTC+01:00) Brussels, Copenhagen, Madrid, Paris',
            ],
            [
                'value' => 'Central European Standard Time',
                'text' => '(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb',
            ],
            [
                'value' => 'W. Central Africa Standard Time',
                'text' => '(UTC+01:00) West Central Africa',
            ],
            [
                'value' => 'Namibia Standard Time',
                'text' => '(UTC+01:00) Windhoek',
            ],
            [
                'value' => 'GTB Standard Time',
                'text' => '(UTC+02:00) Athens, Bucharest',
            ],
            [
                'value' => 'Middle East Standard Time',
                'text' => '(UTC+02:00) Beirut',
            ],
            [
                'value' => 'Egypt Standard Time',
                'text' => '(UTC+02:00) Cairo',
            ],
            [
                'value' => 'Syria Standard Time',
                'text' => '(UTC+02:00) Damascus',
            ],
            [
                'value' => 'E. Europe Standard Time',
                'text' => '(UTC+02:00) E. Europe',
            ],
            [
                'value' => 'South Africa Standard Time',
                'text' => '(UTC+02:00) Harare, Pretoria',
            ],
            [
                'value' => 'FLE Standard Time',
                'text' => '(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
            ],
            [
                'value' => 'Turkey Standard Time',
                'text' => '(UTC+03:00) Istanbul',
            ],
            [
                'value' => 'Israel Standard Time',
                'text' => '(UTC+02:00) Jerusalem',
            ],
            [
                'value' => 'Libya Standard Time',
                'text' => '(UTC+02:00) Tripoli',
            ],
            [
                'value' => 'Jordan Standard Time',
                'text' => '(UTC+03:00) Amman',
            ],
            [
                'value' => 'Arabic Standard Time',
                'text' => '(UTC+03:00) Baghdad',
            ],
            [
                'value' => 'Kaliningrad Standard Time',
                'text' => '(UTC+02:00) Kaliningrad',
            ],
            [
                'value' => 'Arab Standard Time',
                'text' => '(UTC+03:00) Kuwait, Riyadh',
            ],
            [
                'value' => 'E. Africa Standard Time',
                'text' => '(UTC+03:00) Nairobi',
            ],
            [
                'value' => 'Moscow Standard Time',
                'text' => '(UTC+03:00) Moscow, St. Petersburg, Volgograd, Minsk',
            ],
            [
                'value' => 'Samara Time',
                'text' => '(UTC+04:00) Samara, Ulyanovsk, Saratov',
            ],
            [
                'value' => 'Iran Standard Time',
                'text' => '(UTC+03:30) Tehran',
            ],
            [
                'value' => 'Arabian Standard Time',
                'text' => '(UTC+04:00) Abu Dhabi, Muscat',
            ],
            [
                'value' => 'Azerbaijan Standard Time',
                'text' => '(UTC+04:00) Baku',
            ],
            [
                'value' => 'Mauritius Standard Time',
                'text' => '(UTC+04:00) Port Louis',
            ],
            [
                'value' => 'Georgian Standard Time',
                'text' => '(UTC+04:00) Tbilisi',
            ],
            [
                'value' => 'Caucasus Standard Time',
                'text' => '(UTC+04:00) Yerevan',
            ],
            [
                'value' => 'Afghanistan Standard Time',
                'text' => '(UTC+04:30) Kabul',
            ],
            [
                'value' => 'West Asia Standard Time',
                'text' => '(UTC+05:00) Ashgabat, Tashkent',
            ],
            [
                'value' => 'Yekaterinburg Time',
                'text' => '(UTC+05:00) Yekaterinburg',
            ],
            [
                'value' => 'Pakistan Standard Time',
                'text' => '(UTC+05:00) Islamabad, Karachi',
            ],
            [
                'value' => 'India Standard Time',
                'text' => '(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi',
            ],
            [
                'value' => 'Sri Lanka Standard Time',
                'text' => '(UTC+05:30) Sri Jayawardenepura',
            ],
            [
                'value' => 'Nepal Standard Time',
                'text' => '(UTC+05:45) Kathmandu',
            ],
            [
                'value' => 'Central Asia Standard Time',
                'text' => '(UTC+06:00) Nur-Sultan (Astana)',
            ],
            [
                'value' => 'Bangladesh Standard Time',
                'text' => '(UTC+06:00) Dhaka',
            ],
            [
                'value' => 'Myanmar Standard Time',
                'text' => '(UTC+06:30) Yangon (Rangoon)',
            ],
            [
                'value' => 'SE Asia Standard Time',
                'text' => '(UTC+07:00) Bangkok, Hanoi, Jakarta',
            ],
            [
                'value' => 'N. Central Asia Standard Time',
                'text' => '(UTC+07:00) Novosibirsk',
            ],
            [
                'value' => 'China Standard Time',
                'text' => '(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi',
            ],
            [
                'value' => 'North Asia Standard Time',
                'text' => '(UTC+08:00) Krasnoyarsk',
            ],
            [
                'value' => 'Singapore Standard Time',
                'text' => '(UTC+08:00) Kuala Lumpur, Singapore',
            ],
            [
                'value' => 'W. Australia Standard Time',
                'text' => '(UTC+08:00) Perth',
            ],
            [
                'value' => 'Taipei Standard Time',
                'text' => '(UTC+08:00) Taipei',
            ],
            [
                'value' => 'Ulaanbaatar Standard Time',
                'text' => '(UTC+08:00) Ulaanbaatar',
            ],
            [
                'value' => 'North Asia East Standard Time',
                'text' => '(UTC+08:00) Irkutsk',
            ],
            [
                'value' => 'Japan Standard Time',
                'text' => '(UTC+09:00) Osaka, Sapporo, Tokyo',
            ],
            [
                'value' => 'Korea Standard Time',
                'text' => '(UTC+09:00) Seoul',
            ],
            [
                'value' => 'Cen. Australia Standard Time',
                'text' => '(UTC+09:30) Adelaide',
            ],
            [
                'value' => 'AUS Central Standard Time',
                'text' => '(UTC+09:30) Darwin',
            ],
            [
                'value' => 'E. Australia Standard Time',
                'text' => '(UTC+10:00) Brisbane',
            ],
            [
                'value' => 'AUS Eastern Standard Time',
                'text' => '(UTC+10:00) Canberra, Melbourne, Sydney',
            ],
            [
                'value' => 'West Pacific Standard Time',
                'text' => '(UTC+10:00) Guam, Port Moresby',
            ],
            [
                'value' => 'Tasmania Standard Time',
                'text' => '(UTC+10:00) Hobart',
            ],
            [
                'value' => 'Yakutsk Standard Time',
                'text' => '(UTC+09:00) Yakutsk',
            ],
            [
                'value' => 'Central Pacific Standard Time',
                'text' => '(UTC+11:00) Solomon Is., New Caledonia',
            ],
            [
                'value' => 'Vladivostok Standard Time',
                'text' => '(UTC+10:00) Vladivostok',
            ],
            [
                'value' => 'Sakhalin Standard Time',
                'text' => '(UTC+11:00) Sakhalin',
            ],
            [
                'value' => 'New Zealand Standard Time',
                'text' => '(UTC+12:00) Auckland, Wellington',
            ],
            [
                'value' => 'UTC+12',
                'text' => '(UTC+12:00) Coordinated Universal Time+12',
            ],
            [
                'value' => 'Fiji Standard Time',
                'text' => '(UTC+12:00) Fiji',
            ],
            [
                'value' => 'Magadan Standard Time',
                'text' => '(UTC+12:00) Magadan',
            ],
            [
                'value' => 'Kamchatka Standard Time',
                'text' => '(UTC+12:00) Petropavlovsk-Kamchatsky - Old',
            ],
            [
                'value' => 'Tonga Standard Time',
                'text' => '(UTC+13:00) Nuku\'alofa',
            ],
            [
                'value' => 'Samoa Standard Time',
                'text' => '(UTC+13:00) Samoa',
            ],
        ];

        foreach ($timezones as $timezone) {
            Timezone::updateOrCreate(
                ['zone' => $timezone['value']],
                [
                    'name' => $timezone['text'],
                    'zone' => $timezone['value'],
                ]
            );
        }
    }
}
