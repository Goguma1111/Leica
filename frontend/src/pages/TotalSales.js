import React, {memo} from 'react';

import Styled from 'styled-components';



import {
    // 공통항목
    Chart,
    CategoryScale,
    LinearScale,
    // 세로 , 가로막대 그래프 전용
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';

import {Bar} from 'react-chartjs-2';


Chart.register(
    CategoryScale,
    LinearScale,
    // 세로 , 가로막대 그래프 전용
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);


const ChartContainer = Styled.div`

    .chart-wrapper {
        display: flex;
        flex-wrap: wrap;

        /** 그래프 크기를 제어하는 역할 */
        .chart-item {
            width: 33.3%;
            height: 400px;
            padding: 20px;
            box-sizing: border-box;

        }
    }
`;



const TotalSales = memo(() => {
    return (

        <ChartContainer>
                <div className="chart-item">
                    {/** 가로막대 그래프 */}
                    <h3>총 매출</h3>
                    <Bar options={{
                        responsive: true,
                        maintainAspectRatio: true,
                        indexAxis: 'y',
                        plugins: {
                            legend: {
                                position: 'bottom',
                            }
                        },

                    }}
                    data={{
                        labels: ['2025년 4월', '2025년 5월', '2025년 6월', '2025년 7월', '2025년 8월'],

                        datasets: [{
                            label: '총 매출',
                            data: [88500000, 78000000, 67000000, 80000000, 90000000],
                            backgroundColor: 'rgba(241, 245, 217, 0.2)',
                            borderColor: 'rgb(159, 170, 130)',
                            borderWidth: 1
                        }]
                    }} />
                </div>
            </ChartContainer>
        )
    });


export default TotalSales;
