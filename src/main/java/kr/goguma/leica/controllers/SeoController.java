package kr.goguma.leica.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SeoController {

    @GetMapping("/hello")
    public String helloPage(Model model) {
        model.addAttribute("name", "Jay Seo");
        return "Seo"; 
    }
}
