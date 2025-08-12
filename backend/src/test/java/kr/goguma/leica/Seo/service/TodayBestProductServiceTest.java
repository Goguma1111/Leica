package kr.goguma.leica.Seo.service;

import kr.goguma.leica.Seo.mapper.TodayBestProductMapper;
import kr.goguma.leica.Seo.vo.TodayBestProduct;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.LocalDateTime;
import java.util.List;

@SpringBootTest
class TodayBestProductServiceTest {

    private static final Logger log = LoggerFactory.getLogger(TodayBestProductServiceTest.class);

    @Autowired
    private TodayBestProductService todayBestProductService;

    @Test
    @DisplayName("주간 베스트 상품 조회 테스트")
    void getWeeklyList() {
        log.info("=== 주간 베스트 상품 조회 테스트 시작 ===");
        
        List<TodayBestProduct> output = null;
        
        try {
            output = todayBestProductService.selectWeeklyList();
            log.info("서비스 호출 성공");
        } catch (Exception e) {
            log.error("서비스 에러", e);
        }
        
        log.debug("output: " + output);
        
        if (output != null) {
            log.info("조회된 제품 수: {}", output.size());
            for (TodayBestProduct product : output) {
                log.info("제품: {} - 판매량: {}", product.getTitle(), product.getCnt());
            }
        }
        
        log.info("=== 주간 베스트 상품 조회 테스트 완료 ===");
    }

    @Test
    @DisplayName("전체 베스트 상품 조회 테스트")
    void getAllProducts() {
        log.info("=== 전체 베스트 상품 조회 테스트 시작 ===");
        
        List<TodayBestProduct> output = null;
        
        try {
            output = todayBestProductService.selectAll();
            log.info("서비스 호출 성공");
        } catch (Exception e) {
            log.error("서비스 에러", e);
        }
        
        log.debug("output: " + output);
        
        if (output != null) {
            log.info("조회된 제품 수: {}", output.size());
            for (TodayBestProduct product : output) {
                log.info("제품: {} - 판매량: {}", product.getTitle(), product.getCnt());
            }
        }
        
        log.info("=== 전체 베스트 상품 조회 테스트 완료 ===");
    }

    @Test
    @DisplayName("특정 제품 조회 테스트")
    void getProductById() {
        log.info("=== 특정 제품 조회 테스트 시작 ===");
        
        int testId = 1; // 테스트용 제품 ID
        TodayBestProduct output = null;
        
        try {
            output = todayBestProductService.selectById(testId);
            log.info("서비스 호출 성공");
        } catch (Exception e) {
            log.error("서비스 에러", e);
        }
        
        log.debug("output: " + output);
        
        if (output != null) {
            log.info("제품 ID: {} - 제품명: {} - 판매량: {}", 
                    output.getId(), output.getTitle(), output.getCnt());
        } else {
            log.info("제품 ID {}에 해당하는 제품을 찾을 수 없습니다.", testId);
        }
        
        log.info("=== 특정 제품 조회 테스트 완료 ===");
    }
} 