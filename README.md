# YAP
(you-map)

### A simple mapping application that adds the current viewer to map.

* Uses [GEOCODER](http://www.rubygeocoder.com/) for reverse IP lookups.

* Uses [Google Maps API v3](https://developers.google.com/maps/documentation/javascript/) for mapping servies

* Goal is to have a blank page covered in colorful dots, that will eventually fill in the map.

    * Currently map is light grey for development, eventually map will be all-white.

* See [YAP](http://yapmap.herokuapp.com/) live... but don't be too harsh, still collecting data and testing

* Please send feedback, or issue a pull request to lend a hand

    * Name is different in at least 3 different place, so take that as a sign too.

* Uses sessions to track current user ips - will not add same ip twice

### To add later:

* Flash notice about being added, option for note?

* Ajax to make no-refresh - one page app.

* Load a google map so app doesn't need to make new map every time.