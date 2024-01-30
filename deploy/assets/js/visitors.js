let url = 'https://server.portfolio.chomanki.com/visitors/portfolio-ga4';

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = yyyy + mm + dd;

fetch(url)
    .then(response => response.json())
    .then(data => {
        let totalVisitors = 0;
        let todayVisitors = 0;

        data.rows.forEach(row => {
            let visitorCount = parseInt(row.metricValues[0].value);
            totalVisitors += visitorCount;

            if (row.dimensionValues[1].value === today) {
                todayVisitors += visitorCount;
            }
        });

        // HTML 요소에 값 출력
        document.getElementById('totalVisitors').innerText = totalVisitors;
        document.getElementById('todayVisitors').innerText = todayVisitors;
    })
    .catch(error => console.error('Error:', error));
