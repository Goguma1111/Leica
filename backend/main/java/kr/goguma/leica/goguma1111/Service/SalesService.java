package kr.goguma.leica.goguma1111.Service;

import kr.goguma.leica.goguma1111.Mapper.SalesMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.jdbc.core.JdbcTemplate;

import java.time.LocalDate;

@Service
public class SalesService {

    @Autowired
    private SalesMapper salesMapper;

    private final JdbcTemplate jdbcTemplate;

    public SalesService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // 일간 매출
    public int getDailySales(LocalDate date) {
        return getTotalSales(date, date);
    }


    // 주간 매출
    public int getWeeklySales() {
        // 오늘 날짜
        LocalDate today = LocalDate.now();

        LocalDate sevenDaysAgo = today.minusDays(6);

        return getTotalSales(sevenDaysAgo, today);
    }

    // 총매출
    public int getTotalSales(LocalDate startDate, LocalDate endDate) {
        // MariaDB에서 사용하는 백틱(`` ` ``)을 사용
        String sql = "SELECT COALESCE(SUM(`count`), 0) FROM sales WHERE date BETWEEN ? AND ?";
        Integer totalSales = jdbcTemplate.queryForObject(sql, Integer.class, startDate, endDate);
        return totalSales != null ? totalSales : 0;
    }
}