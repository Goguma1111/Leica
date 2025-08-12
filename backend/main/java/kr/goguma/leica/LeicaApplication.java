package kr.goguma.leica;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication

@MapperScan({"kr.goguma.leica.Mapper", "kr.goguma.leica.Seo.mapper","kr.goguma.leica.soppha.mapper", "kr.goguma.leica.goguma1111.mapper", "kr.goguma.leica"})
@ComponentScan(basePackages = "kr.goguma.leica")
@EnableScheduling
public class LeicaApplication {

    public static void main(String[] args) {
        SpringApplication.run(LeicaApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")
                        .allowedOrigins("http://localhost:3000")
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("*")
                        .allowCredentials(true);
            }
        };
    }
}
