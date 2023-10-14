class CountryDetailsDto {
    constructor(data) {
        this.name = data?.name?.common;
        this.region = data?.region;
        this.location = {
            latitude: data?.latlng[0],
            longitude: data?.latlng[1]
        };
        this.area = data?.area;
        this.map = data?.maps?.googleMaps;
        this.capital = data?.capital;
        this.capitalLocation = {
            latitude: data?.capitalInfo?.latlng[0],
            longitude: data?.capitalInfo?.latlng[1]
        };
        this.languages = Object.entries(data?.languages).map(([code, language]) => (language));
        this.population = data?.population;
        this.demonym = data?.demonyms?.eng?.m;
        this.flag = data?.flags?.png;
        this.currencies = Object.entries(data?.currencies).map(([code, currency]) => ({
            name: currency.name,
            symbol: currency.symbol
        }));
        this.car = {
            signs: data?.car?.signs,
            side: data?.car?.side
        };
        this.startOfWeek = data?.startOfWeek;
    }
}

module.exports = {
    CountryDetailsDto
}