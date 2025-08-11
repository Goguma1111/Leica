package kr.goguma.leica.goguma1111.Mapper;

import java.time.LocalDate;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface SalesMapper {

    @Select("SELECT COALESCE(SUM(count), 0) FROM sales WHERE date BETWEEN #{startDate} AND #{endDate}")
    Integer selectTotalSales(@Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);
}
