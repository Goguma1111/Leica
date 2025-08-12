package kr.goguma.leica.goguma1111.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import kr.goguma.leica.goguma1111.service.SalesService;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@RestController
@RequestMapping("/api/sales")
public class SalesController {

    @Autowired
    private SalesService salesService;


    @GetMapping("/total")
    public int getTotalSales(@RequestParam String start,
                             @RequestParam String end) {

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate startDate = LocalDate.parse(start, formatter);
        LocalDate endDate = LocalDate.parse(end, formatter);
        // 매출 조회 서비스 호출

        return salesService.getTotalSales(startDate, endDate);
    }
}
