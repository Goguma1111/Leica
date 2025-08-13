package kr.goguma.leica.goguma1111.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface SalesMapper {

    // 일간 매출: 날짜별 금액
    @Select("SELECT date AS label, count AS totalCount " +
            "FROM sales " +
            "WHERE date BETWEEN '2025-08-01' AND '2025-08-31' " +
            "ORDER BY date")
    List<Map<String, Object>> selectDailySales();

    // 주간 매출: 월 기준 1~5주
    @Select("SELECT " +
            "CONCAT(MONTH(date), '월 ', FLOOR((DAY(date)-1)/7)+1, '주') AS label, " +
            "MIN(date) AS startdate, " +
            "MAX(date) AS enddate, " +
            "SUM(count) AS totalCount " +
            "FROM sales " +
            "WHERE date BETWEEN '2025-08-01' AND '2025-08-31' " +
            "GROUP BY MONTH(date), FLOOR((DAY(date)-1)/7)+1 " +
            "ORDER BY MONTH(date), FLOOR((DAY(date)-1)/7)+1")
    List<Map<String, Object>> selectWeeklySales();
}
