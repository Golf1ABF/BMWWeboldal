app.controller('MainController', function($scope){
//angular változó létrehozása
$scope.szoveg = "Péemvé a lekjob kotcsi!";

$scope.kocsik = [
    {nev: 'BMW E36', evjarat: 26, csajok: ['Bárki aki fehér'], kocsikép: "e36.jpg", lanykep: "e36lany.png"},
    {nev: 'BMW E30', evjarat: 40, csajok: ['Királylányok'], kocsikép: "e30.jpg", lanykep: "ciganyasszony.jpg"},
    {nev: 'BMW E46', evjarat: 19, csajok: ['Lakatos Georgina Oláhné Dzsudlo', 'Szőrös Vanessza Kancsomell Jr'], kocsikép: "e46.jpg", lanykep: "ciganyfeketenagyon.png"},
    {nev: 'BMW E90', evjarat: 14, csajok: ['Ehhez a kocsihoz nem kapsz'], kocsikép: "e90.jpg", lanykep: "maxresdefault.jpg"}
];
});