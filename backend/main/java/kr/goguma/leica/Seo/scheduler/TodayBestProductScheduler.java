package kr.goguma.leica.Seo.scheduler;

import kr.goguma.leica.Seo.service.TodayBestProductService;
import kr.goguma.leica.Seo.vo.TodayBestProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.LocalDateTime;
import java.util.List;

@Component
public class TodayBestProductScheduler {

    private static final Logger log = LoggerFactory.getLogger(TodayBestProductScheduler.class);

    @Autowired
    private TodayBestProductService todayBestProductService;

    /**
     * 매일 오전 1시에 전날 판매량을 집계하여 저장
     * cron = "초 분 시 일 월 요일"
     */
    @Scheduled(cron = "0 0 1 * * ?")
    public void scheduleInsert() {
        log.info("=== 판매량 집계 스케줄러 시작 ===");
        
        try {
            // 전날 판매량 집계 (실제로는 다른 테이블에서 데이터를 가져와야 함)
            List<TodayBestProduct> aggregatedData = aggregateYesterdaySales();
            
            // 집계된 데이터를 today_best_product 테이블에 저장
            for (TodayBestProduct product : aggregatedData) {
                todayBestProductService.insert(product);
                log.info("제품 저장 완료: {} - 판매량: {}", product.getTitle(), product.getCnt());
            }
            
            log.info("=== 판매량 집계 완료: {}개 제품 저장 ===", aggregatedData.size());
            
        } catch (Exception e) {
            log.error("판매량 집계 중 오류 발생", e);
        }
    }

    /**
     * 전날 판매량 집계 (실제 데이터)
     * sales 테이블에서 실제 판매 데이터를 집계
     */
    private List<TodayBestProduct> aggregateYesterdaySales() {
        log.info("실제 판매 데이터 집계 시작");
        return todayBestProductService.aggregateYesterdaySales();
    }
} 