package kr.goguma.leica.Seo.controllers;

import kr.goguma.leica.Seo.service.TodayBestProductService;
import kr.goguma.leica.Seo.vo.TodayBestProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import kr.goguma.leica.Seo.scheduler.TodayBestProductScheduler;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/today_best_products")
@Component
@Tag(name = "Best Product API", description = "인기 제품 TOP5 API")
public class TodayBestProductController {
    
    @Autowired
    private TodayBestProductService todayBestProductService;
    
    @Autowired
    private TodayBestProductScheduler todayBestProductScheduler;
    
    /**
     * 주간 인기 제품 TOP 5 조회
     * @return 인기 제품 목록
     */
    @Operation(summary = "주간 베스트 상품 TOP5 조회", description = "판매량 기준 상위 5개 제품을 조회합니다.")
    @GetMapping
    public ResponseEntity<Map<String, Object>> getWeeklyList() {
        Map<String, Object> response = new HashMap<>();
        
        try {
            List<TodayBestProduct> products = todayBestProductService.selectWeeklyList();
            
            response.put("timestamp", LocalDateTime.now());
            response.put("status", 200);
            response.put("message", "OK");
            response.put("weekly", products);
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("timestamp", LocalDateTime.now());
            response.put("status", 500);
            response.put("message", "Internal Server Error");
            response.put("error", e.getMessage());
            
            return ResponseEntity.internalServerError().body(response);
        }
    }
    
    /**
     * 일간 인기 제품 TOP 5 조회
     * @return 일간 인기 제품 목록
     */
    @Operation(summary = "일간 베스트 상품 TOP5 조회", description = "오늘 판매량 기준 상위 5개 제품을 조회합니다.")
    @GetMapping("/daily")
    public ResponseEntity<Map<String, Object>> getDailyList() {
        Map<String, Object> response = new HashMap<>();
        
        try {
            List<TodayBestProduct> products = todayBestProductService.aggregateDailySales();
            
            response.put("timestamp", LocalDateTime.now());
            response.put("status", 200);
            response.put("message", "OK");
            response.put("daily", products);
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("timestamp", LocalDateTime.now());
            response.put("status", 500);
            response.put("message", "Internal Server Error");
            response.put("error", e.getMessage());
            
            return ResponseEntity.internalServerError().body(response);
        }
    }
    
    /**
     * 주간 인기 제품 TOP 5 조회 (실제 데이터)
     * @return 주간 인기 제품 목록
     */
    @Operation(summary = "주간 베스트 상품 TOP5 조회 (실제 데이터)", description = "최근 7일 판매량 기준 상위 5개 제품을 조회합니다.")
    @GetMapping("/weekly")
    public ResponseEntity<Map<String, Object>> getWeeklyListReal() {
        Map<String, Object> response = new HashMap<>();
        
        try {
            List<TodayBestProduct> products = todayBestProductService.aggregateWeeklySales();
            
            response.put("timestamp", LocalDateTime.now());
            response.put("status", 200);
            response.put("message", "OK");
            response.put("weekly", products);
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("timestamp", LocalDateTime.now());
            response.put("status", 500);
            response.put("message", "Internal Server Error");
            response.put("error", e.getMessage());
            
            return ResponseEntity.internalServerError().body(response);
        }
    }
    
    /**
     * 전체 인기 제품 조회
     * @return 전체 인기 제품 목록
     */
    @Operation(summary = "전체 베스트 상품 조회", description = "모든 베스트 상품을 조회합니다.")
    @GetMapping("/all")
    public ResponseEntity<Map<String, Object>> getAllProducts() {
        Map<String, Object> response = new HashMap<>();
        
        try {
            List<TodayBestProduct> products = todayBestProductService.selectAll();
            
            response.put("timestamp", LocalDateTime.now());
            response.put("status", 200);
            response.put("message", "OK");
            response.put("items", products);
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("timestamp", LocalDateTime.now());
            response.put("status", 500);
            response.put("message", "Internal Server Error");
            response.put("error", e.getMessage());
            
            return ResponseEntity.internalServerError().body(response);
        }
    }
    
    /**
     * 특정 제품 조회
     * @param id 제품 ID
     * @return 제품 정보
     */
    @Operation(summary = "특정 제품 조회", description = "ID로 특정 제품을 조회합니다.")
    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> getProductById(@PathVariable int id) {
        Map<String, Object> response = new HashMap<>();
        
        try {
            TodayBestProduct product = todayBestProductService.selectById(id);
            
            if (product != null) {
                response.put("timestamp", LocalDateTime.now());
                response.put("status", 200);
                response.put("message", "OK");
                response.put("item", product);
                
                return ResponseEntity.ok(response);
            } else {
                response.put("timestamp", LocalDateTime.now());
                response.put("status", 404);
                response.put("message", "Product not found");
                
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            response.put("timestamp", LocalDateTime.now());
            response.put("status", 500);
            response.put("message", "Internal Server Error");
            response.put("error", e.getMessage());
            
            return ResponseEntity.internalServerError().body(response);
        }
    }
    
    /**
     * 스케줄러 수동 실행 (테스트용)
     * @return 실행 결과
     */
    @Operation(summary = "스케줄러 수동 실행", description = "판매량 집계 스케줄러를 수동으로 실행합니다.")
    @GetMapping("/run-scheduler")
    public ResponseEntity<Map<String, Object>> runScheduler() {
        Map<String, Object> response = new HashMap<>();
        
        try {
            todayBestProductScheduler.scheduleInsert();
            
            response.put("timestamp", LocalDateTime.now());
            response.put("status", 200);
            response.put("message", "스케줄러 실행 완료");
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("timestamp", LocalDateTime.now());
            response.put("status", 500);
            response.put("message", "스케줄러 실행 실패");
            response.put("error", e.getMessage());
            
            return ResponseEntity.internalServerError().body(response);
        }
    }
} 