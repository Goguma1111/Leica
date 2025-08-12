package kr.goguma.leica.Seo.service;

import kr.goguma.leica.Seo.mapper.TodayBestProductMapper;
import kr.goguma.leica.Seo.vo.TodayBestProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodayBestProductService {
    
    @Autowired
    private TodayBestProductMapper todayBestProductMapper;
    
    public List<TodayBestProduct> selectWeeklyList() {
        return todayBestProductMapper.selectWeeklyList();
    }
    
    public List<TodayBestProduct> selectAll() {
        return todayBestProductMapper.selectAll();
    }
    
    public TodayBestProduct selectById(int id) {
        return todayBestProductMapper.selectById(id);
    }
    
    public void insert(TodayBestProduct product) {
        todayBestProductMapper.insert(product);
    }
    
    public List<TodayBestProduct> aggregateYesterdaySales() {
        return todayBestProductMapper.aggregateYesterdaySales();
    }
    
    public List<TodayBestProduct> aggregateDailySales() {
        return todayBestProductMapper.aggregateDailySales();
    }
    
    public List<TodayBestProduct> aggregateWeeklySales() {
        return todayBestProductMapper.aggregateWeeklySales();
    }
} 