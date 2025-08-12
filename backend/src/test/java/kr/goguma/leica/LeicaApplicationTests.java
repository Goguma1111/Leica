package kr.goguma.leica;

import kr.goguma.leica.Seo.mapper.TodayBestProductMapper;
import kr.goguma.leica.Seo.vo.TodayBestProduct;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@SpringBootTest
class LeicaApplicationTests {

    private static final Logger log = LoggerFactory.getLogger(LeicaApplicationTests.class);

    @Autowired
    private TodayBestProductMapper todayBestProductMapper;

    @Test
    void contextLoads() {
    }

    @Test
    void selectWeeklyList() {
        log.info("=== 주간 베스트 상품 검색 테스트 ===");
        
        List<TodayBestProduct> products = todayBestProductMapper.selectWeeklyList();
        
        log.info("조회된 제품 수: {}", products.size());
        
        for (TodayBestProduct product : products) {
            log.info("제품: {} - 판매량: {}", product.getTitle(), product.getCnt());
        }
        
        log.info("=== 테스트 완료 ===");
    }
}
