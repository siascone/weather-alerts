
export const counties = function(state) {
    return (
        $.ajax({
            url: `https://api.weather.gov/zones/?area=${state}&type=county`,
            method: 'GET'
        })
    );
};