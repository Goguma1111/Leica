package kr.goguma.leica.goguma1111.mapper;

import java.time.LocalDate;

import java.util.List;
import java.util.Map;


import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface SalesMapper {

    @Select("SELECT date AS label, SUM(count) AS totalCount " +
            "FROM sales " +
            "WHERE id = #{id} AND date BETWEEN #{startDate} AND #{endDate} " +
            "GROUP BY date ORDER BY date")
    List<Map<String, Object>> selectDailySales(
        @Param("id") String id,
        @Param("startDate") LocalDate startDate,
        @Param("endDate") LocalDate endDate
    );

    @Select("SELECT CONCAT(YEAR(date), '년 ', WEEK(date, 1), '주') AS label, SUM(count) AS totalCount " +
            "FROM sales " +
            "WHERE id = #{id} AND date BETWEEN #{startDate} AND #{endDate} " +
            "GROUP BY YEAR(date), WEEK(date, 1) ORDER BY YEAR(date), WEEK(date, 1)")
    List<Map<String, Object>> selectWeeklySales(
        @Param("id") String id,
        @Param("startDate") LocalDate startDate,
        @Param("endDate") LocalDate endDate
    );
}
