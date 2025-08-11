package kr.goguma.leica.controller;

import kr.goguma.leica.service.SalesAnalyticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/sales")
public class SalesAnalyticsController {

    @Autowired
    private SalesAnalyticsService salesAnalyticsService;

    @GetMapping("/product-distribution")
    public ResponseEntity<List<Map<String, Object>>> getProductSalesDistribution() {
        List<Map<String, Object>> distribution = salesAnalyticsService.getProductSalesDistribution();
        return ResponseEntity.ok(distribution);
    }

    @GetMapping("/hourly-pattern")
    public ResponseEntity<List<Map<String, Object>>> getHourlySalesPattern() {
        List<Map<String, Object>> pattern = salesAnalyticsService.getHourlySalesPattern();
        return ResponseEntity.ok(pattern);
    }
} 