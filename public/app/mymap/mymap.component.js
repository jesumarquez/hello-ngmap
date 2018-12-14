(function(){
    angular.module('myApp.mymap.component', [])
        .component('myMap', {
            templateUrl: 'app/mymap/mymap.component.html',
            controller: MyMapController
        });
    MyMapController.$inject = ['NgMap'];

    function MyMapController(NgMap) {
        var vm = this;
        vm.map = {
            center: [25.717252, -100.301726],
            zoom: 18
        }
        NgMap.getMap().then(function (map) {
            vm.mapObj = map;
        });
        vm.showInfoWindow = function (event, id) {
            vm.mapObj.showInfoWindow('foo', this);
            //vm.infoWindow.param = {
            //    title: model.title,
            //    coords: model.coords
            //};
            //vm.infoWindow.coords = model.coords;
            //vm.infoWindow.visible = !vm.infoWindow.visible;
        };
        vm.forkLifts = [
            {
                id: 1,
                latitude: 25.7173,
                longitude: -100.3017
            },
            {
                id: 2,
                latitude: 25.7174,
                longitude: -100.301771
            },
        ]
        vm.saddles = [
            {
                id: 1,
                tagId: 'AAAAAA',
                path: [
                    [25.7173125087514, -100.301761020642],
                    [25.7173149383339, -100.301767024919],
                    [25.7173361119094, -100.301757031392],
                    [25.7173336913067, -100.301751022703],
                ] 
            }
        ]
    }
})();