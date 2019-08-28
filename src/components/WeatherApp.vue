<template>
    <div :class="getTheme" style="height: 100%;">
        <div class="container-fluid" id="weather-app">
            <div class="app-container row" style="height: 100%; align-content: space-between;" >
                <div class="col-10" id="logo">
                    <a href="/" class="logo">Weather APP - test task</a>
                </div>
                <div class="col-10 col-lg-9" id="icon">
                    <div class="icon-container">
                        <img alt="Vue logo" :src="require(`@/assets/${getIcon}.svg`)" class="icon">
                    </div>
                </div>
                <section class="col-20 col-lg-10 col-xl-9" id="weather">
                    <div style="height: 100%; justify-content: center; display: flex; flex-direction: column;">
                        <div class="city">
                            <span>Currently in </span> 
                            <searchselect 
                                :val="cityFull"
                                :data="cities" @select="citySelected"
                                ref="searchselect">
                            </searchselect>
                            <span>, it's</span>
                        </div>
                        <div class="row current-weather">
                            <div class="col-13 col-xl-10">
                                <h1 v-text="weather.text" class="weather-text"></h1>
                            </div>
                            <div class="col-7 col-xl-10">
                                <span class="temperature">{{ weather.temperature }}<sup v-text="unit.un"></sup></span>
                            </div>
                            <button class="btn btn-place" @click="randomCity"><span class="skew-fix">Random place</span></button>
                        </div>
                    </div>
                </section>
                <section class="col-20 col-lg-10" id="navigation">
                    <ul class="list-group unit-picker">
                        <li v-for="unit in units" 
                            v-bind:key="unit.name"
                            :class="activeUnit(unit.name)"
                            class="list-group-item">
                            <unit :data="unit" @changed="unitChanged" />
                        </li>
                        <li class="list-group-item"><img alt="Vue logo" src="../assets/facebook.png" class="icon"></li>
                        <li class="list-group-item"><img alt="Vue logo" src="../assets/twitter.png" class="icon"></li>
                    </ul>
                </section>
                <footer class="col-20" id="footer">
                    <p><span class="copyright">COPYRIGHT 2019</span> in semper tellus. Suspendisse congue leo nibh, non pellentesque </p>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>

    import OAuth from 'oauth'
    import searchselect from './SearchSelect'
    import unit from './Unit'

    export default {
        name: 'WeatherApp',
        components: {
            searchselect, 
            unit
        },
        props: [
            'cities', 
            'units'
        ],
        data() {
            return {
                weather: {},
                value: '',
                city: {},
                unit: this.units[0] || { name: 'Celsius', active: true },
            }
        },
        computed: {
            getTheme() {
                if(this.weather.code < 13) return 'theme-rainy';
                else if(this.weather.code < 26) return 'theme-snowy';
                else if(this.weather.code < 31) return 'theme-cloudly';
                else return 'theme-sunny';
            },
            getIcon() {
                return this.getTheme.replace('theme-', '');
            },
            cityFull() {
                return this.city.name + ', ' + this.city.country;
            }
        },
        created() {
            this.randomCity();
        },
        watch: {
            city() {
                this.checkWeather();
            },
            unit: {
                deep: true,
                handler: function() {
                    this.checkWeather();
                }
            }
        },
        methods: {
            checkWeather() {
                let http = 'https://weather-ydn-yql.media.yahoo.com/forecastrss?woeid=' + this.city.woeid + '&format=json&u=' + this.unit.un;

                let request = new OAuth.OAuth(
                    null,
                    null,
                    'dj0yJmk9QUZoaXh4OUpzdVczJmQ9WVdrOVVISkVZak4zTjJVbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTA3',
                    '87b45fe839f73f177c41772cbb25fdacd7a548d3',
                    '1.0',
                    null,
                    'HMAC-SHA1',
                    null,
                    {
                        "X-Yahoo-App-Id": "PrDb3w7e"
                    }
                );
                request.get(
                    http,
                    null,
                    null,
                    (err, data, result) => {
                        if(data && result.statusCode == 200) {
                            this.weather = JSON.parse(data).current_observation.condition;
                        }
                    }
                );
            },
            randomCity() {
                do {
                    var random = this.cities[Math.floor(Math.random() * this.cities.length)];
                } while(random.name == this.city.name);

                this.city = random;

                if(this.$refs.searchselect) this.$refs.searchselect.value = this.cityFull;
            },
            citySelected(city, index) {
                this.city = city;
            },
            unitChanged(unit) {
                this.unit = unit;
            },
            activeUnit(name) {
                return name == this.unit.name ? 'active' : ''
            }
        }
    }

</script>

<style lang="less" scoped>

</style>