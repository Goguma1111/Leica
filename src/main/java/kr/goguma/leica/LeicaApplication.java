package kr.goguma.leica;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class LeicaApplication {
    public static void main(String[] args) {
        SpringApplication.run(LeicaApplication.class, args);
    }
}
