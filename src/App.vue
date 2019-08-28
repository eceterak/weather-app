<template>
    <div id="app">
        <WeatherApp 
            :cities="cities"
            :units="units">
        </WeatherApp>
    </div>
</template>

<script>

    import WeatherApp from './components/WeatherApp'

    export default {
        components: {
            WeatherApp
        },
        data() {
            return {
                cities: [
                    {
                        name: 'Krakow',
                        country: 'Poland',
                        woeid: 502075
                    },
                    {
                        name: 'Katowice',
                        country: 'Poland',
                        woeid: 498842
                    },
                    {
                        name: 'Glasgow',
                        country: 'Scotland',
                        woeid: 21125
                    },
                    {
                        name: 'Madrid',
                        country: 'Spain',
                        woeid: 766273
                    },
                    {
                        name: 'Drovyanoy',
                        country: 'Russia',
                        woeid: 2002650
                    },
                    {
                        name: 'Ottawa',
                        country: 'Canada',
                        woeid: 91982014
                    },
                ],
                units: [
                    {
                        name: 'Celsius',
                        un: 'C'
                    },
                    {
                        name: 'Fahrenheit',
                        un: 'F'
                    }
                ],
            }
        }
    }

</script>

<style lang="scss">

    #app {
        height: 100%;
    }

</style>
