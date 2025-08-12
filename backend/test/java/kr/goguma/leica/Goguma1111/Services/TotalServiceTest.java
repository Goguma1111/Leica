package kr.goguma.leica.Goguma1111.Services;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.LocalDate;

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
        // 총 매출 테스트 7일
        LocalDate start = LocalDate.now().minusDays(7);
        LocalDate end = LocalDate.now();
        int total = salesService.getTotalSales(start, end);
        log.info("총매출 결과: {}", total);
        assertTrue(total >= 0);

        //일간 매출 테스트 (오늘)
        LocalDate today = LocalDate.now();
        int dailyTotal = salesService.getDailySales(today);
        log.info("오늘 결과: {}", dailyTotal);
        assertTrue(dailyTotal >= 0);

        // 주간 매출 테스트 (지난 7일)
        int weeklyTotal = salesService.getWeeklySales();
        log.info("지난 7일 결과: {}", weeklyTotal);
        assertTrue(weeklyTotal >= 0);

        log.info("--- 모든 테스트 성공 ---");
    }
}