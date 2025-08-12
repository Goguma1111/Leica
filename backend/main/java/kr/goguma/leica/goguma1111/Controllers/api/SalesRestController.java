package kr.goguma.leica.goguma1111.controllers.api;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api/sales")
public class SalesRestController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/daily")
    public List<Map<String, Object>> getDailySales(
            @RequestParam String userId,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate start,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate end) {

        String sql = "SELECT date AS label, SUM(price) AS total_price " +
                     "FROM sales WHERE user_id = ? AND date BETWEEN ? AND ? " +
                     "GROUP BY date ORDER BY date";

        return jdbcTemplate.queryForList(sql, userId, start, end);
    }

    @GetMapping("/weekly")
    public List<Map<String, Object>> getWeeklySales(
            @RequestParam String userId,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate start,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate end) {

        String sql = "SELECT CONCAT(YEAR(date), '년 ', WEEK(date, 1), '주') AS label, SUM(price) AS total_price " +
                     "FROM sales WHERE user_id = ? AND date BETWEEN ? AND ? " +
                     "GROUP BY YEAR(date), WEEK(date, 1) ORDER BY YEAR(date), WEEK(date, 1)";

        return jdbcTemplate.queryForList(sql, userId, start, end);
    }
}
