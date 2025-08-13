package kr.goguma.leica.goguma1111.controllers.api;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;


import java.time.LocalDate;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api")
public class SalesRestController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/daily")
    public Map<String, Object> getDailySales() {

        String sql = "SELECT id, DATE(`date`) AS sales_date, count " +
                    "FROM sales " +
                    "ORDER BY sales_date";

        List<Map<String, Object>> data = jdbcTemplate.queryForList(sql);

        Map<String, Object> result = new LinkedHashMap<>();
        result.put("status", 200);
        result.put("message", "OK");
        result.put("timestamp", java.time.LocalDateTime.now().toString());
        result.put("item", data);

        return result;
}


    @GetMapping("/weekly")
    public Map<String, Object> getWeeklySales() {

        // 기준 날짜를 8월 1일로 잡고 주차 계산
        String sql = "SELECT CONCAT('2025년 8월 ', FLOOR(DATEDIFF(`date`, '2025-08-01') / 7) + 1, '주') AS week_label, " +
                    "SUM(count) AS count " +
                    "FROM sales " +
                    "GROUP BY FLOOR(DATEDIFF(`date`, '2025-08-01') / 7) + 1 " +
                    "ORDER BY FLOOR(DATEDIFF(`date`, '2025-08-01') / 7) + 1";

        List<Map<String, Object>> data = jdbcTemplate.queryForList(sql);

        Map<String, Object> result = new LinkedHashMap<>();
        result.put("status", 200);
        result.put("message", "OK");
        result.put("timestamp", java.time.LocalDateTime.now().toString());
        result.put("item", data);

        return result;
    }

}
