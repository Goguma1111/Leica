package kr.goguma.leica.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.Contact;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI openAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Leica Store API")
                        .description("라이카 스토어 인기 제품 TOP5 API")
                        .version("1.0.0")
                        .contact(new Contact()
                                .name("Seo Team")
                                .email("seo@leica.com")));
    }
} 