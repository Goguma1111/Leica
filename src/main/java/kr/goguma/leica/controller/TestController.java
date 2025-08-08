package kr.goguma.leica.controller;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@Component
public class TestController {
    
    @GetMapping("/api/test")
    public Map<String, Object> test() {
        Map<String, Object> response = new HashMap<>();
        response.put("message", "API is working!");
        response.put("status", "OK");
        return response;
    }
    
    @GetMapping("/api/test-products")
    public Map<String, Object> testProducts() {
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Test Products API is working!");
        response.put("status", "OK");
        response.put("weekly", new Object[]{});
        return response;
    }
} 