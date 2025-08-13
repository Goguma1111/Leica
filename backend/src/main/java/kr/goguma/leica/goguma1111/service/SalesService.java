package kr.goguma.leica.goguma1111.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import kr.goguma.leica.goguma1111.mapper.SalesMapper;

import java.util.List;
import java.util.Map;

@Service
public class SalesService {

    @Autowired
    private SalesMapper salesMapper;

    // 일간 매출 조회
    public List<Map<String, Object>> getDailySales() {
        try {
            return salesMapper.selectDailySales();
        } catch (Exception e) {
            e.printStackTrace();
            return List.of(); // 빈 리스트 반환
        }
    }

    // 주간 매출 조회
    public List<Map<String, Object>> getWeeklySales() {
        try {
            return salesMapper.selectWeeklySales();
        } catch (Exception e) {
            e.printStackTrace();
            return List.of(); // 빈 리스트 반환
        }
    }
}
