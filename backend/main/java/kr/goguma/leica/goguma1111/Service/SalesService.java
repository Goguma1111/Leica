package kr.goguma.leica.goguma1111.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import kr.goguma.leica.goguma1111.mapper.SalesMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.LocalDate;

@Service
public class SalesService {

    private static final Logger log = LoggerFactory.getLogger(SalesService.class);

    @Autowired
    private SalesMapper salesMapper;

    private final JdbcTemplate jdbcTemplate;

    public SalesService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // 일간 매출
    public int getDailySales(LocalDate date) {
        try {
            int output = getTotalSales(date, date);
            log.debug("일간 매출 조회 결과 - date: {}, output: {}", date, output);
            return output;
        } catch (Exception e) {
            log.error("일간 매출 조회 실패 - date: {}", date, e);
            return 0;
        }
    }

    // 주간 매출
    public int getWeeklySales() {
        try {
            LocalDate today = LocalDate.now();
            LocalDate sevenDaysAgo = today.minusDays(6);
            int output = getTotalSales(sevenDaysAgo, today);
            log.debug("주간 매출 조회 결과 - startDate: {}, endDate: {}, output: {}", sevenDaysAgo, today, output);

            return output;
        } catch (Exception e) {
            log.error("주간 매출 조회 실패", e);
            return 0;
        }
    }

    // 총매출
    public int getTotalSales(LocalDate startDate, LocalDate endDate) {
        String sql = "SELECT COALESCE(SUM(`count`), 0) FROM sales WHERE date BETWEEN ? AND ?";
        try {
            Integer output = jdbcTemplate.queryForObject(sql, Integer.class, startDate, endDate);
            log.debug("총 매출 조회 결과 - startDate: {}, endDate: {}, output: {}", startDate, endDate, output);
            return output != null ? output : 0;
        } catch (Exception e) {
            log.error("총 매출 조회 실패 - startDate: {}, endDate: {}", startDate, endDate, e);
            return 0;
        }
    }
}
