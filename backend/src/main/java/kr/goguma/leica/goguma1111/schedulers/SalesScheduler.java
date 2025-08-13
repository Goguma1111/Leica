package kr.goguma.leica.goguma1111.schedulers;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import kr.goguma.leica.goguma1111.service.SalesService;

import java.util.List;
import java.util.Map;

@Slf4j
@Component
@EnableScheduling
public class SalesScheduler {

    @Autowired
    private SalesService salesService;

    /**
     * 2분마다 실행되는 일간 매출 집계
     */
    @Scheduled(cron = "0 0/2 * * * ?")  // 2분마다 실행
    public void logDailySales() {
        List<Map<String, Object>> dailyData = salesService.getDailySales();
        dailyData.forEach(item -> log.info("[일간 매출] {}", item));
    }
}
