package kr.goguma.leica.goguma1111.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import kr.goguma.leica.goguma1111.service.SalesService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/sales")
public class SalesController {

    @Autowired
    private SalesService salesService;

    // 일간 매출 조회
    @GetMapping("/daily")
    public List<Map<String, Object>> getDailySales() {
        return salesService.getDailySales();
    }

    // 주간 매출 조회
    @GetMapping("/weekly")
    public List<Map<String, Object>> getWeeklySales() {
        return salesService.getWeeklySales();
    }
}
