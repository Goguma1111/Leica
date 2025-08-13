package kr.goguma.leica.Goguma1111;

import kr.goguma.leica.goguma1111.mapper.SalesMapper;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Map;


@Slf4j
@SpringBootTest
public class TotalTestMapper {
    @Autowired
    private SalesMapper salesMapper;

    // 일간
    @Test
    public void testSelectDailySales() {
        List<Map<String, Object>> dailyData = salesMapper.selectDailySales();
        dailyData.forEach(item -> log.info("일간 매출: {}", item));
    }


    // 주간
    @Test
    public void testSelectWeeklySales() {
        List<Map<String, Object>> weeklyData = salesMapper.selectWeeklySales();
        weeklyData.forEach(item -> log.info("주간 매출: {}", item));
    }
}
