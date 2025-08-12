package kr.goguma.leica.goguma1111.schedulers;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import kr.goguma.leica.goguma1111.service.SalesService;
import java.time.DayOfWeek;
import java.time.LocalDate;

@Slf4j
@Component
@EnableScheduling
public class SalesScheduler {

    @Autowired
    private SalesService salesService;

    /**
     * 2분마다 실행되는 매출 집계 (지지난주 금요일 ~ 지난주 목요일)
     */
    @Scheduled(cron = "0 0/2 * * * ?")  // 2분마다 실행
    public void aggregateWeeklySales() {
        LocalDate thisWeekMonday = LocalDate.now().with(DayOfWeek.MONDAY);

        LocalDate startDate = thisWeekMonday.minusDays(9); // 지지난주 금요일
        LocalDate endDate = thisWeekMonday.minusDays(3);   // 지난주 목요일

        int total = salesService.getTotalSales(startDate, endDate);

        log.info("[주간 총매출] 기간: {} ~ {}, 총 매출: {}원", startDate, endDate, total);
    }
}
