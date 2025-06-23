package kr.goguma.leica.soppha.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SopphaController {


    @GetMapping("/soppha")
    public String index(){
        return "soppha";

    }
}
