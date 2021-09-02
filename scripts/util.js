
export const activeAlerts = function () {
    return (
        $.ajax({
            url: 'https://api.weather.gov/alerts/active',
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