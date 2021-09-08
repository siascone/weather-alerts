
export const activeStateAlerts = function (state) {
    return (
        $.ajax({
            url: `https://api.weather.gov/alerts/active/area/${state}`,
            method: 'GET',
        })
    )
}
// export const activeAlerts = function () {
//     return (
//         $.ajax({
//             url: 'https://api.weather.gov/alerts/active',
//             method: 'GET',

//         })
//     )
// }