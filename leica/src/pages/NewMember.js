/**
 * Chartjs2
 * -Chartjs2는 기본 Javascript에서 그래프를 표시해주는 기능을 하는 라이브러리
 * ReactChartjs2라는 Wrapper 라이브러리를 통해 React에서 사용 가능하다.
 *
 * https://react-chartjs-2.js.org/
 *
 * yarn add chart.js react-chartjs-2
 */

import React, { memo } from "react";
import styled from "styled-components";
import {
    //공통항목들
    Chart,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    //세로, 가로 막대 그래프 전용
    BarElement,
    //선 그래프 및 산점도 그래프 전용
    PointElement,
    LineElement,
    //파이 그래프 전용
    ArcElement,
    //레이더 차트 전용(선그래프 요소를 포함해야 함)
    RadialLinearScale,
    Filler,
} from "chart.js";

import { Bar, Line, Scatter, Pie, Radar } from "react-chartjs-2";
Chart.register(
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    //세로, 가로 막대 그래프 전용
    BarElement,
    //선 그래프 및 산점도 그래프 전용
    PointElement,
    LineElement,
    //파이그래프 전용
    ArcElement,
    //레이더 차트 전용(선그래프 요소를 포함해야 함)
    RadialLinearScale,
    Filler
);

const ChartContainer = styled.div`
    .chart-wrapper {
        display: flex;
        flex-wrap: wrap;

        /**그래프의 크기를 제어하는 역할 */
        .chart-item {
            max-width: 100%;
            padding: 20px;
            box-sizing: border-box;
            height: 400px;
        }
    }
`;

const ChartEx = memo(() => {
    return (
        <ChartContainer>
            <h2>Chart</h2>

            {/** 세로 막대 그래프 */}
            <div className="chart-wrapper">
                {/** 선 그래프 */}
                <div className="chart-item">
                    <h3>선 그래프</h3>
                    <Line
                        options={{
                            responsive: true, //반응형 기능 사용
                            maintainAspectRatio: true, //세로 높이를 스스로 설정(false인 경우 부모에 맞춤)
                            plugins: {
                                legend: {
                                    position: "bottom", //범주의 위치
                                },
                            },
                        }}
                        data={{
                            labels: ["06/18", "06/19", "06/20", "06/21", "06/22", "06/23", "06/24"], //x축
                            datasets: [
                                {
                                    label: "가입자 수",
                                    data: [1237, 1108, 719, 2042, 1775, 1580, 1605],
                                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                                    borderColor: "rgba(255, 99, 132, 1)",
                                    borderWidth: 1,
                                },

                            ],
                        }}
                    />
                </div>
            </div>
        </ChartContainer>
    );
});

export default ChartEx;
