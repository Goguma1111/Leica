package kr.goguma.leica.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface SalesAnalyticsMapper {
    
    List<Map<String, Object>> getProductSalesDistribution();
    
    List<Map<String, Object>> getHourlySalesPattern();
} 