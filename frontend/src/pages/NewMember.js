/**
 * Chartjs2
 * -Chartjs2는 기본 Javascript에서 그래프를 표시해주는 기능을 하는 라이브러리
 * ReactChartjs2라는 Wrapper 라이브러리를 통해 React에서 사용 가능하다.
 *
 * https://react-chartjs-2.js.org/
 *
 * yarn add chart.js react-chartjs-2
 */

import React, { memo, useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getDaily, getWeekly } from "../slices/LeicaSlice";
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
    width: 100%;
    margin-bottom: 100px;

    .chart-wrapper {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        /**그래프의 크기를 제어하는 역할 */
        .chart-item {
            width: 100%;
            padding: 20px;
            box-sizing: border-box;
            height: 400px;
            flex: 1;

            .chart-header {
                display: flex;
                align-items: center;
                margin-bottom: 12px;

                h3 {
                    margin-right: 20px;
                }

                #viewType {
                    display: block;
                    width: 192px;
                    padding: 8px 12px;
                    border: 1px solid #d1d5db;
                    border-radius: 6px;
                    font-size: 14px;
                    background-color: white;
                    cursor: pointer;
                }
            }
        }
    }
`;

const ChartEx = memo(() => {
    const [viewType, setViewType] = useState("daily");
    const dispatch = useDispatch();
    const state = useSelector((state) => state.LeicaSlice);

    useEffect(() => {
        //viewType에 따라 api 호출
        if (viewType === "daily") {
            console.log("getDaily 디스패치 실행");
            dispatch(getDaily());
        } else {
            dispatch(getWeekly());
        }
    }, [viewType, dispatch]);

    //드롭다운 변경시
    const onChangeViewType = (e) => {
        setViewType(e.target.value);
    };

    //차트데이터 가져오기
    const { item } = state;

    const chartData = {
        labels: item?.map((row) => (viewType === "daily" ? row.date : `${row.weekStart} ~ ${row.weekEndDate}`)) || [],
        datasets: [
            {
                label: viewType === "daily" ? "일간 가입자 수" : "주간 가입자 수",
                data: item?.map((row) => row.count) || [],
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
            },
        ],
    };

    return (
        <ChartContainer>
            <h2>Chart</h2>

            {/** 세로 막대 그래프 */}
            <div className="chart-wrapper">
                {/** 선 그래프 */}
                <div className="chart-item">
                    <div className="chart-header">
                        <h3>날짜별 신규 회원 수</h3>
                        <select id="viewType" value={viewType} onChange={onChangeViewType}>
                            <option value="daily">일간</option>
                            <option value="weekly">주간</option>
                        </select>
                    </div>
                    {/* 조건부 렌더링 */}
                    <h3>{viewType === "daily" ? "일간" : "주간"}</h3>

                    <Line
                        options={{
                            responsive: true, //반응형 기능 사용
                            maintainAspectRatio: false, //세로 높이를 스스로 설정(false인 경우 부모에 맞춤)
                            plugins: {
                                legend: {
                                    position: "bottom", //범주의 위치
                                },
                            },
                            scales: {
                                y: {
                                    ticks: {
                                        precision: 0, //소숫점 제거
                                    },
                                },
                            },
                        }}
                        data={chartData}
                    />
                </div>
            </div>
        </ChartContainer>
    );
});

export default ChartEx;
