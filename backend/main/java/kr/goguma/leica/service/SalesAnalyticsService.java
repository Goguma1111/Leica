package kr.goguma.leica.service;

import kr.goguma.leica.mapper.SalesAnalyticsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class SalesAnalyticsService {

    @Autowired
    private SalesAnalyticsMapper salesAnalyticsMapper;

    public List<Map<String, Object>> getProductSalesDistribution() {
        return salesAnalyticsMapper.getProductSalesDistribution();
    }

    public List<Map<String, Object>> getHourlySalesPattern() {
        return salesAnalyticsMapper.getHourlySalesPattern();
    }
} 