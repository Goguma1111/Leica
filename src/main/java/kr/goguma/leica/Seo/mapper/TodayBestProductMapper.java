package kr.goguma.leica.Seo.mapper;

import kr.goguma.leica.Seo.vo.TodayBestProduct;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TodayBestProductMapper {
    List<TodayBestProduct> selectWeeklyList();
    List<TodayBestProduct> selectAll();
    TodayBestProduct selectById(int id);
    void insert(TodayBestProduct product);
    
    // 실제 판매 데이터 집계
    List<TodayBestProduct> aggregateYesterdaySales();
    
    // 일간 판매 데이터 집계 (오늘)
    List<TodayBestProduct> aggregateDailySales();
    
    // 주간 판매 데이터 집계 (최근 7일)
    List<TodayBestProduct> aggregateWeeklySales();
} 