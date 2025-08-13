package kr.goguma.leica.Goguma1111.Services;

import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import kr.goguma.leica.goguma1111.service.SalesService;
import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class TotalServiceTest {

    @Autowired
    private SalesService salesService;

    @Test
    public void testGetSales() {

        log.info("==== 테스트 시작 ====");

        // 일간 매출 테스트
        List<Map<String, Object>> dailyData = salesService.getDailySales();
        if (dailyData.isEmpty()) {
            log.warn("일간 매출 데이터가 없습니다!");
        } else {
            dailyData.forEach(item -> log.info("일간 매출: {}", item));
        }

        // 주간 매출 테스트
        List<Map<String, Object>> weeklyData = salesService.getWeeklySales();
        if (weeklyData.isEmpty()) {
            log.warn("주간 매출 데이터가 없습니다!");
        } else {
            weeklyData.forEach(item -> log.info("주간 매출: {}", item));
        }

        log.info("==== 테스트 종료 ====");
    }
}
